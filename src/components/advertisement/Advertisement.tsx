'use client';

import React, { useEffect, useRef, useState } from 'react';

// import { useSession } from 'next-auth/react';
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
  ModalOverlay,
} from './Advertisement.styles';
import Link from 'next/link';
import Image from 'next/image';
import DefaultImage from '@/assets/NoImage2.jpg';
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaCode,
  FaQuoteRight,
  FaImage,
  FaStrikethrough,
  FaSubscript,
  FaSuperscript,
  FaHighlighter,
  FaLink,
} from 'react-icons/fa';

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
import { FontFamily } from '@tiptap/extension-font-family';
import { Subscript } from '@tiptap/extension-subscript';
import { Superscript } from '@tiptap/extension-superscript';
import { Highlight } from '@tiptap/extension-highlight';
import AdvertisementBanner from '../common/banners/AdvertisementBanner';

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

const Advertisement = () => {
  // const { data: session } = useSession();
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
  const [editingAdvertisement, setEditingAdvertisement] =
    useState<AdvertisementProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const itemsPerPage = 6; // Number of ads to show per page

  // Initialize Tiptap editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['paragraph', 'heading'],
      }),
      Underline,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6], // Supports all levels of headings
        HTMLAttributes: {
          class: 'editor-heading', // Apply a class for custom styles
        },
      }),
      TiptapLink,
      TiptapImage,
      Blockquote,
      HorizontalRule,
      TextAlign.configure({ types: ['paragraph', 'heading'] }),
      CodeBlock,
      TextStyle,
      FontFamily.configure({
        types: ['textStyle'], // Apply font family to textStyle
      }),
      Subscript,
      Superscript,
      Highlight,
    ],
    content: '',
  });

  // Font Change Handler
  const handleFontChange = (fontFamily: string) => {
    if (editor) {
      editor.chain().focus().setFontFamily(fontFamily).run();
    }
  };

  const fetchAdvertisements = async () => {
    setIsLoading(false);

    try {
      const response = await fetch('/api/advertisements');

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
        return dateB - dateA;
      });

      setAdvertisements(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching advertisements:', error);
      setError('Error fetching advertisements');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvertisements();
  }, []);

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

  const toggleModal = () => setIsModalOpen(!isModalOpen);

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
          'Error submitting advertisement:',
          responseBody.error || 'Unknown error'
        );
        alert(responseBody.error || 'Error submitting advertisement');
        return;
      }

      console.log(
        editingAdvertisement
          ? 'Advertisement updated!'
          : 'Advertisement created!',
        responseBody
      );
      setIsModalOpen(false);
      setEditingAdvertisement(null); // Reset editing state
      fetchAdvertisements(); // Refresh products list
    } catch (error) {
      console.error('Error submitting advertisement:', error);
      alert('Error submitting advertisement. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <Container>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>ADVERTISEMENTS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <AdvertisementBanner
        handleLoginClick={handleLoginClick}
        toggleModal={toggleModal}
      />
      {isLoading && <div>Loading advertisements...</div>}
      {/* {session && (
        <CreateButtonContainer>
          <CreateButton onClick={toggleModal}>
            CREATE ADVERTISEMENT
          </CreateButton>
        </CreateButtonContainer>
      )} */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <ModalContent>
              <ModalCloseButton onClick={toggleModal}>Close</ModalCloseButton>
              <ModalContentTitleContainer>
                <ModalContentTitle>Create Advertisement</ModalContentTitle>
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
                  <div>
                    <ToolbarContainer>
                      {/* Font Family Dropdown */}
                      <div>
                        <select
                          onChange={(e) => handleFontChange(e.target.value)}
                          defaultValue=""
                          style={{ padding: '5px 10px' }}
                        >
                          <option value="">Select Font</option>
                          <option value="Arial">Arial</option>
                          <option value="Courier New">Courier New</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Times New Roman">
                            Times New Roman
                          </option>
                          <option value="Verdana">Verdana</option>
                        </select>
                      </div>
                      {/* <div>
                          <select
                            onChange={handleFontSizeChange}
                            defaultValue="16px"
                          >
                            <option value="12px">12px</option>
                            <option value="14px">14px</option>
                            <option value="16px">16px</option>
                            <option value="18px">18px</option>
                            <option value="20px">20px</option>
                            <option value="24px">24px</option>
                          </select>
                        </div> */}

                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().toggleBold().run()
                        }
                      >
                        <FaBold />
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().toggleItalic().run()
                        }
                      >
                        <FaItalic />
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().toggleUnderline().run()
                        }
                      >
                        <FaUnderline />
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().toggleStrike().run()
                        }
                      >
                        <FaStrikethrough />
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().toggleSubscript().run()
                        }
                      >
                        <FaSubscript />{' '}
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().toggleSuperscript().run()
                        }
                      >
                        <FaSuperscript />
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().toggleHighlight().run()
                        }
                      >
                        <FaHighlighter />
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().setTextAlign('left').run()
                        }
                      >
                        <FaAlignLeft />
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().setTextAlign('center').run()
                        }
                      >
                        <FaAlignCenter />
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().setTextAlign('right').run()
                        }
                      >
                        <FaAlignRight />
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().setTextAlign('justify').run()
                        }
                      >
                        <FaAlignJustify />
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().toggleCode().run()
                        }
                      >
                        <FaCode />
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() => {
                          const url = prompt('Enter the URL');
                          if (url) {
                            editor
                              ?.chain()
                              .focus()
                              .setLink({ href: url })
                              .run();
                          }
                        }}
                      >
                        <FaLink />
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().toggleBlockquote().run()
                        }
                      >
                        <FaQuoteRight />
                      </ToolbarButton>
                      <ToolbarButton
                        type="button"
                        onClick={() =>
                          editor?.chain().focus().setImage({ src: '' }).run()
                        }
                      >
                        <FaImage />
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
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </SubmitButton>
              </ModalContentForm>
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
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
              </AdCard>
            </Link>
          ))}
        </AdList>

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

export default Advertisement;
