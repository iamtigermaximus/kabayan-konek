'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  AdBasicInfoContainer,
  AdItemContainer,
  AdCard,
  AdDescription,
  AdImage,
  AdList,
  AdTitle,
  Container,
  DividerContainer,
  DividerLabel,
  DividerLine,
  FilterLabel,
  FilterSection,
  FilterSelect,
  FormItemContainer,
  ImageContainer,
  Input,
  InputLabel,
  ModalCloseButton,
  ModalContainer,
  ModalContent,
  ModalContentForm,
  ModalContentTitle,
  ModalContentTitleContainer,
  NextButton,
  PageInfo,
  PaginationContainer,
  PrevButton,
  SectionContainer,
  StyledEditorContainer,
  StyledLink,
  SubmitButton,
  ToolbarButton,
  ToolbarContainer,
  // Textarea,
  UploadButton,
  UploadButtonContainer,
  UploadedImageContainer,
} from '../Advertisement.styles';
import Link from 'next/link';
import Image from 'next/image';
import DefaultImage from '@/assets/NoImage2.jpg';

// Tiptap imports
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { Heading } from '@tiptap/extension-heading'; // For headings
import { Link as TiptapLink } from '@tiptap/extension-link'; // For links
import { Image as TiptapImage } from '@tiptap/extension-image'; // For image handling
import { Blockquote } from '@tiptap/extension-blockquote'; // For blockquote
import { HorizontalRule } from '@tiptap/extension-horizontal-rule'; // For horizontal rule
import { TextAlign } from '@tiptap/extension-text-align'; // For text alignment
import { CodeBlock } from '@tiptap/extension-code-block';
import { TextStyle } from '@tiptap/extension-text-style';
import { Underline } from '@tiptap/extension-underline';

interface AdvertisementProps {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CloudinaryWidgetResult {
  event: string;
  info: {
    secure_url: string;
  };
}

interface CloudinaryWidget {
  open: () => void;
  close: () => void;
}

const MyPostedAdvertisements = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [advertisements, setAdvertisements] = useState<AdvertisementProps[]>(
    []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const widgetRef = useRef<CloudinaryWidget | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editingAdvertisement, setEditingAdvertisement] =
    useState<AdvertisementProps | null>(null);

  const itemsPerPage = 6; // Number of ads to show per page

  //  Initialize Tiptap editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['paragraph', 'heading'],
      }),
      Underline,
      Heading.configure({ levels: [1, 2, 3] }),
      TiptapLink,
      TiptapImage,
      Blockquote,
      HorizontalRule,
      TextAlign.configure({ types: ['paragraph', 'heading'] }),
      CodeBlock,
      TextStyle,
    ],
    content: '',
  });

  const fetchAdvertisements = useCallback(async () => {
    if (!session?.user?.id) {
      setError('User is not logged in.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/advertisements/myAdvertisements');

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to fetch products');
        setIsLoading(false);
        return;
      }

      const data: AdvertisementProps[] = await response.json();
      data.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA; // Sort in descending order
      });

      setAdvertisements(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Error fetching products');
    } finally {
      setIsLoading(false);
    }
  }, [session?.user?.id, itemsPerPage]);

  useEffect(() => {
    if (session) {
      fetchAdvertisements();
    }
  }, [session, fetchAdvertisements]);

  const filteredAdvertisements =
    category === 'all' || category === ''
      ? advertisements
      : advertisements.filter(
          (advertisement) => advertisement.category === category
        );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = filteredAdvertisements.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) resetForm();
  };
  const handleUploadImage = () => {
    widgetRef.current?.open();
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.cloudinary) {
      const cloudinaryWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
          uploadPreset: 'kabayankonek',
          multiple: false,
          sources: ['local', 'url', 'camera'],
          debug: true,
        },
        (error: Error | null, result: CloudinaryWidgetResult) => {
          if (result?.event === 'success') {
            setImageUrl(result.info.secure_url);
          } else if (error) {
            console.error('Cloudinary upload error:', error);
          }
        }
      );
      widgetRef.current = cloudinaryWidget;
    }
  }, []);

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && window.cloudinary) {
  //     const cloudinaryWidget = window.cloudinary.createUploadWidget(
  //       {
  //         cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
  //         uploadPreset: 'kabayankonek',
  //         multiple: false,
  //         sources: ['local', 'url', 'camera'],
  //         debug: true,
  //       },
  //       (error: Error | null, result: CloudinaryWidgetResult) => {
  //         if (result?.event === 'success') {
  //           setImageUrl(result.info.secure_url); // Save the uploaded image URL

  //           // Insert the image URL into the Tiptap editor at the current cursor position
  //           if (editor) {
  //             editor
  //               .chain()
  //               .focus()
  //               .setImage({ src: result.info.secure_url })
  //               .run();
  //           }
  //         } else if (error) {
  //           console.error('Cloudinary upload error:', error);
  //         }
  //       }
  //     );
  //     widgetRef.current = cloudinaryWidget;
  //   } else {
  //     console.log('Cloudinary script is not loaded');
  //   }
  // }, [editor]);

  const resetForm = () => {
    setTitle('');
    editor?.commands.clearContent(); // Clear Tiptap editor content
    setCategory('all');
    setImageUrl(null);
    setEditingAdvertisement(null); // Ensure it resets to "create" mode
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!title || !editor?.getHTML() || !category) {
      alert('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }

    const advertisementData = {
      title,
      description: editor?.getHTML(),
      category,
      image: imageUrl || null,
    };

    try {
      const endpoint = editingAdvertisement
        ? `/api/advertisements/${editingAdvertisement.id}` // Edit endpoint
        : '/api/advertisements'; // Create endpoint
      const method = editingAdvertisement ? 'PUT' : 'POST'; // Use PUT for edit

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(advertisementData),
      });

      const responseBody = await response.json();

      if (!response.ok) {
        console.error(
          'Error submitting advertisement',
          responseBody.error || 'Unknown error'
        );
        alert(responseBody.error || 'Error submitting advertisement');
        return;
      }

      console.log(
        editingAdvertisement
          ? 'Advertisements updated!'
          : 'Advertisement created!',
        responseBody
      );
      setIsModalOpen(false);
      resetForm(); // Clear the form
      fetchAdvertisements();
    } catch (error) {
      console.error('Error creating advertisement:', error);
      alert('Error creating advertisement. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleEdit = (advertisement: AdvertisementProps) => {
    setEditingAdvertisement(advertisement);
    setTitle(advertisement.title);
    editor?.commands.setContent(advertisement.description);
    setCategory(advertisement.category);
    setImageUrl(advertisement.imageUrl || null);
    setIsModalOpen(true); // Open modal for editing
  };

  const handleDelete = async (advertisementId: string) => {
    if (!confirm('Are you sure you want to delete this advertisement?')) {
      return;
    }

    try {
      const response = await fetch(`/api/advertisements/${advertisementId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const responseBody = await response.json();
        console.error(
          'Error deleting advertisement:',
          responseBody.error || 'Unknown error'
        );
        alert(responseBody.error || 'Error deleting advertisement');
        return;
      }

      console.log('Advertisement deleted successfully!');
      fetchAdvertisements(); // Refresh advertisement list
    } catch (error) {
      console.error('Error deleting advertisement:', error);
      alert('Error deleting advertisement. Please try again later.');
    }
  };

  return (
    <Container>
      <title>ADVERTISEMENTS | kabayankonek</title>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>ADVERTISEMENTS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <div>
        {!session ? (
          <div
            style={{
              margin: '20px 0',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              textAlign: 'center',
              backgroundColor: '#e6f7ff',
            }}
          >
            <h2 style={{ marginBottom: '10px' }}>
              Want to post your own advertisement?
            </h2>
            <p style={{ marginBottom: '20px', color: '#555' }}>
              Log in or sign up to create and manage your advertisements easily.
            </p>
            <button
              onClick={handleLoginClick}
              style={{
                padding: '10px 20px',
                backgroundColor: '#222',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Log In or Sign Up
            </button>
          </div>
        ) : (
          <div
            style={{
              margin: '20px 0',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              textAlign: 'center',
              backgroundColor: '#e6f7ff',
            }}
          >
            <h2 style={{ marginBottom: '10px' }}>
              Ready to share your advertisement with the Filipino community in
              Finland?
            </h2>
            <p style={{ marginBottom: '20px', color: '#555' }}>
              You are logged in! Create and manage your ads, and reach more
              potential customers.
            </p>
            <button
              onClick={() => toggleModal()}
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              CREATE ADVERTISEMENT
            </button>
          </div>
        )}
      </div>
      {isLoading && <div>Loading advertisements...</div>}

      {/* {session && (
        <CreateButtonContainer>
          <CreateButton onClick={toggleModal}>
            CREATE ADVERTISEMENT
          </CreateButton>
        </CreateButtonContainer>
      )} */}
      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <ModalCloseButton onClick={toggleModal}>Close</ModalCloseButton>
            <ModalContentTitleContainer>
              <ModalContentTitle>
                {editingAdvertisement
                  ? 'Edit Advertisement'
                  : ' Create New Advertisement'}
              </ModalContentTitle>
            </ModalContentTitleContainer>

            <ModalContentForm onSubmit={handleSubmit}>
              <FormItemContainer>
                <InputLabel>Title</InputLabel>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </FormItemContainer>
              <FormItemContainer>
                <InputLabel>Description</InputLabel>
                {/* <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                /> */}
                <div>
                  <ToolbarContainer>
                    <ToolbarButton
                      type="button"
                      onClick={() => editor?.chain().focus().toggleBold().run()}
                    >
                      Bold
                    </ToolbarButton>

                    <ToolbarButton
                      type="button"
                      onClick={() =>
                        editor?.chain().focus().toggleItalic().run()
                      }
                    >
                      Italic
                    </ToolbarButton>
                    <ToolbarButton
                      type="button"
                      onClick={() =>
                        editor?.chain().focus().toggleUnderline().run()
                      }
                    >
                      Underline
                    </ToolbarButton>
                    <ToolbarButton
                      type="button"
                      onClick={() =>
                        editor?.chain().focus().setTextAlign('center').run()
                      }
                    >
                      Center
                    </ToolbarButton>
                    <ToolbarButton
                      type="button"
                      onClick={() =>
                        editor?.chain().focus().setTextAlign('left').run()
                      }
                    >
                      Left Align
                    </ToolbarButton>
                    <ToolbarButton
                      type="button"
                      onClick={() =>
                        editor?.chain().focus().setTextAlign('center').run()
                      }
                    >
                      Center Align
                    </ToolbarButton>
                    <ToolbarButton
                      type="button"
                      onClick={() =>
                        editor?.chain().focus().setTextAlign('right').run()
                      }
                    >
                      Right Align
                    </ToolbarButton>
                    <ToolbarButton
                      type="button"
                      onClick={() =>
                        editor?.chain().focus().setTextAlign('justify').run()
                      }
                    >
                      Justify Align
                    </ToolbarButton>

                    <ToolbarButton
                      type="button"
                      onClick={() =>
                        editor?.chain().focus().toggleStrike().run()
                      }
                    >
                      Strikethrough
                    </ToolbarButton>

                    <ToolbarButton
                      type="button"
                      onClick={() => editor?.chain().focus().toggleCode().run()}
                    >
                      Code
                    </ToolbarButton>
                  </ToolbarContainer>

                  {/* Ensure editor is initialized before rendering the editor */}
                  <StyledEditorContainer>
                    {editor && <EditorContent editor={editor} />}
                  </StyledEditorContainer>
                </div>
              </FormItemContainer>
              <FormItemContainer>
                <InputLabel htmlFor="category">Category:</InputLabel>
                <FilterSelect
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="all">All</option>
                  <option value="jobs">Jobs</option>
                  <option value="services">Services</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="events">Events</option>
                  <option value="community">Community</option>
                </FilterSelect>
              </FormItemContainer>
              <FormItemContainer>
                <InputLabel htmlFor="imageUrl">Image:</InputLabel>
                <ImageContainer>
                  <UploadButtonContainer>
                    <UploadButton type="button" onClick={handleUploadImage}>
                      Upload Image
                    </UploadButton>
                  </UploadButtonContainer>
                  {imageUrl && (
                    <UploadedImageContainer>
                      <Image
                        src={imageUrl}
                        alt="Event"
                        width={150}
                        height={150}
                      />
                    </UploadedImageContainer>
                  )}
                </ImageContainer>
              </FormItemContainer>
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? 'Submitting...'
                  : editingAdvertisement
                  ? 'Update Advertisement'
                  : 'Create Advertisement'}{' '}
              </SubmitButton>
            </ModalContentForm>
          </ModalContent>
        </ModalContainer>
      )}
      <SectionContainer>
        <FilterSection>
          <div>
            <FilterLabel>Category:</FilterLabel>
            <FilterSelect
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="jobs">Jobs</option>
              <option value="services">Services</option>
              <option value="real-estate">Real Estate</option>
              <option value="events">Events</option>
              <option value="community">Community</option>
            </FilterSelect>
          </div>
        </FilterSection>
        <AdList>
          {displayedItems.map((ad) => (
            <Link
              href={`/advertisement/${ad.id}`}
              key={ad.id}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <AdCard>
                <AdImage
                  src={ad.imageUrl || DefaultImage}
                  alt={ad.title}
                  width={150}
                  height={150}
                  priority
                />
                <AdBasicInfoContainer>
                  <AdItemContainer>
                    <AdTitle>{ad.title}</AdTitle>
                  </AdItemContainer>
                  <AdItemContainer>
                    {' '}
                    <AdDescription>
                      {ad.description.length > 200 ? (
                        <>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: ad.description.slice(0, 100) + '...',
                            }}
                          ></div>

                          <div style={{ color: 'blue', cursor: 'pointer' }}>
                            <StyledLink href={`/advertisement/${ad.id}`}>
                              Read More
                            </StyledLink>
                          </div>
                        </>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ad.description,
                          }}
                        ></div>
                      )}
                    </AdDescription>
                  </AdItemContainer>
                </AdBasicInfoContainer>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '5px',
                    marginTop: '10px',
                  }}
                >
                  <button
                    style={{
                      background: 'gray',
                      color: '#fff',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      width: '60px',
                    }}
                    onClick={() => handleEdit(ad)}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      background: 'tomato',
                      color: '#fff',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      width: '60px',
                    }}
                    onClick={() => {
                      if (ad.id) {
                        handleDelete(ad.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </AdCard>
            </Link>
          ))}
        </AdList>
        {/* <AdList>
          {displayedItems.map((ad) => (
            <AdCard key={ad.id}>
              <AdImage
                src={ad.imageUrl || DefaultImage}
                alt={ad.title}
                width={150}
                height={150}
                priority
              />

              <AdBasicInfoContainer>
                <Link
                  href={`/advertisement/${ad.id}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <AdTitle>{ad.title}</AdTitle>
                  <AdDescription>
                    {ad.description.length > 200 ? (
                      <>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ad.description.slice(0, 100) + '...',
                          }}
                        ></div>

                        <div style={{ color: 'blue', cursor: 'pointer' }}>
                          <StyledLink href={`/advertisement/${ad.id}`}>
                            Read More
                          </StyledLink>
                        </div>
                      </>
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: ad.description,
                        }}
                      ></div>
                    )}
                  </AdDescription>
                </Link>
              </AdBasicInfoContainer>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '5px',
                  marginTop: '10px',
                }}
              >
                <button
                  style={{
                    background: 'gray',
                    color: '#fff',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    width: '60px',
                  }}
                  onClick={() => handleEdit(ad)}
                >
                  Edit
                </button>
                <button
                  style={{
                    background: 'tomato',
                    color: '#fff',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    width: '60px',
                  }}
                  onClick={() => {
                    if (ad.id) {
                      handleDelete(ad.id);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </AdCard>
          ))}
        </AdList> */}

        <PaginationContainer>
          <PrevButton onClick={handlePrev} disabled={currentPage === 1}>
            Previous
          </PrevButton>
          <PageInfo>
            Page {currentPage} of {totalPages}
          </PageInfo>
          <NextButton
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </NextButton>
        </PaginationContainer>
      </SectionContainer>
    </Container>
  );
};

export default MyPostedAdvertisements;
