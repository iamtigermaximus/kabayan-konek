'use client';

import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
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
  SubmitButton,
  Textarea,
  UploadButton,
  UploadButtonContainer,
  UploadedImageContainer,
} from './Advertise.styles';

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

const Advertise = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [advertisements, setAdvertisements] = useState<AdvertisementProps[]>(
    []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const widgetRef = useRef<CloudinaryWidget | null>(null);
  const [filteredAdvertisements, setFilteredAdvertisements] = useState<
    AdvertisementProps[]
  >([]);

  const itemsPerPage = 6; // Number of ads to show per page

  const fetchAdvertisements = async () => {
    try {
      const response = await fetch('/api/advertisements');
      const data: AdvertisementProps[] = await response.json();

      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setAdvertisements(data);
      setFilteredAdvertisements(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // Filter advertisements by category
  const filterAdvertisements = (category: string) => {
    if (category === 'all' || !category) {
      setFilteredAdvertisements(advertisements);
    } else {
      const filtered = advertisements.filter((ad) => ad.category === category);
      setFilteredAdvertisements(filtered);
    }
  };

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  useEffect(() => {
    filterAdvertisements(category); // Filter advertisements when category changes
  }, [category, advertisements]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!title || !description || !category) {
      alert('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }

    const eventData = {
      title,
      description,
      category,
      image: imageUrl || null,
    };

    try {
      const response = await fetch('/api/advertisements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      const responseBody = await response.json();

      if (!response.ok) {
        console.error(
          'Error creating advertisement:',
          responseBody.error || 'Unknown error'
        );
        alert(responseBody.error || 'Error creating advertisement');
        return;
      }

      console.log('Event created!', responseBody);
      setIsModalOpen(false);
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

  return (
    <Container>
      <title>ADVERTISEMENTS | kabayankonek</title>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>ADVERTISEMENTS</DividerLabel>
        <DividerLine />
      </DividerContainer>
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
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
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
                {isSubmitting ? 'Submitting...' : 'Submit'}
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
            <AdCard key={ad.id}>
              <AdImage src={ad.imageUrl} alt={ad.title} />
              <AdTitle>{ad.title}</AdTitle>
              <AdDescription>{ad.description}</AdDescription>
            </AdCard>
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

export default Advertise;
