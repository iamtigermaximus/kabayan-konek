'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AdBasicInfoContainer,
  AdItemContainer,
  AdCard,
  // AdDescription,
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
  // StyledLink,
  SubmitButton,
  UploadButton,
  UploadButtonContainer,
  UploadedImageContainer,
  ModalOverlay,
  AdCategory,
  AdCategoryContainer,
} from './Advertisement.styles';
import Link from 'next/link';
import Image from 'next/image';
import DefaultImage from '@/assets/NoImage2.jpg';
import AdvertisementBanner from '../common/banners/AdvertisementBanner';
import RichTextEditor from '../common/editor/RichTextEditor';
import { Editor } from '@tiptap/core';
import { formatDistanceToNow } from 'date-fns';
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
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const widgetRef = useRef<CloudinaryWidget | null>(null);
  const [editingAdvertisement, setEditingAdvertisement] =
    useState<AdvertisementProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const itemsPerPage = 12; // Number of ads to show per page
  const [content, setContent] = useState('');
  const [editor, setEditor] = useState<Editor | null>(null);

  const handleContentChange = (newContent: string) => {
    setContent(newContent); // Update content when editor changes
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
    category === 'ALL' || category === ''
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

    if (
      !title ||
      !editor?.getHTML() ||
      !category ||
      !contactEmail ||
      !contactPhone
    ) {
      alert('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }

    const advertisementData = {
      title,
      description: editor?.getHTML(),
      category,
      contactEmail,
      contactPhone,
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
                  <RichTextEditor
                    content={content}
                    onContentChange={handleContentChange}
                    editor={editor}
                    setEditor={setEditor}
                  />
                </FormItemContainer>

                <FormItemContainer>
                  <InputLabel htmlFor="category">Category:</InputLabel>
                  <FilterSelect
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="JOBS">Jobs</option>
                    <option value="SERVICES">Services</option>
                    <option value="REAL ESTATE">Real Estate</option>
                    <option value="EVENTS">Events</option>
                    <option value="COMMUNITY">Community</option>
                  </FilterSelect>
                </FormItemContainer>
                <FormItemContainer>
                  <InputLabel htmlFor="contactEmail">Contact Email:</InputLabel>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                  />
                </FormItemContainer>
                <FormItemContainer>
                  <InputLabel htmlFor="contactPhone">Contact Phone:</InputLabel>
                  <Input
                    id="contactPhone"
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    required
                  />
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
              <option value="ALL">All</option>
              <option value="JOBS">Jobs</option>
              <option value="SERVICES">Services</option>
              <option value="REAL ESTATE">Real Estate</option>
              <option value="EVENTS">Events</option>
              <option value="COMMUNITY">Community</option>
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
                <AdCategoryContainer>
                  <AdCategory>{ad.category}</AdCategory>
                </AdCategoryContainer>
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
                    {/* <AdDescription>
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
                    </AdDescription> */}
                    {ad.createdAt && (
                      <div
                        style={{
                          fontSize: '12px',
                          color: 'gray',
                          marginTop: '5px',
                        }}
                      >
                        Posted {formatDistanceToNow(new Date(ad.createdAt))} ago
                      </div>
                    )}
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
