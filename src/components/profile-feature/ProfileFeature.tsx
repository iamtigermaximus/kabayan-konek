'use client';
import { useState, useEffect, useRef } from 'react';
import {
  Container,
  CreateButton,
  CreateButtonContainer,
  DividerContainer,
  DividerLabel,
  DividerLine,
  FeaturesCard,
  FeaturesImage,
  FeaturesSectionContainer,
  FeaturesTitle,
  FeaturesTitleContainer,
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
  SubmitButton,
  SubmitButtonContainer,
  Textarea,
  UploadButton,
  UploadButtonContainer,
  UploadedImageContainer,
} from './ProfileFeature.styles';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

interface KabayanArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string; // Optional
  userId: string;
  createdAt: string;
  updatedAt: string;
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

const ProfileFeature = () => {
  const { data: session } = useSession();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState<KabayanArticle[]>([]);

  const widgetRef = useRef<CloudinaryWidget | null>(null);
  const itemsPerPage = 6;

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/profile');
      const data: KabayanArticle[] = await response.json();
      setArticles(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching lifestyle articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = articles.slice(startIndex, endIndex);

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
            // console.log('Image uploaded successfully!', result.info.secure_url);
          } else if (error) {
            console.error('Cloudinary upload error:', error);
          }
        }
      );
      widgetRef.current = cloudinaryWidget;
    } else {
      console.log('Cloudinary script is not loaded');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!title || !content) {
      alert('Please fill out all required fields (title and content)');
      setIsSubmitting(false);
      return;
    }

    // Prepare the data for submission
    const articleData = { title, content, image: imageUrl || null };

    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });

      const responseBody = await response.json();

      if (!response.ok) {
        console.error(
          'Error creating article:',
          responseBody.error || 'Unknown error'
        );
        alert(responseBody.error || 'Error creating article');
        return;
      }

      console.log('Article created!', responseBody);
      setIsModalOpen(false);
      fetchArticles();
    } catch (error) {
      console.error('Error creating article:', error);
      alert('Error creating article. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Container>
      <title>KABAYAN SPOTLIGHT | kabayankonek</title>

      <DividerContainer>
        <DividerLine />
        <DividerLabel>KABAYAN SPOTLIGHT</DividerLabel>
        <DividerLine />
      </DividerContainer>
      {session?.user?.role === 'admin' && (
        <CreateButtonContainer>
          <CreateButton onClick={toggleModal}>CREATE ARTICLE</CreateButton>
        </CreateButtonContainer>
      )}
      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <ModalContentTitleContainer>
              <ModalContentTitle>Create New Kabayan Article</ModalContentTitle>
            </ModalContentTitleContainer>
            <ModalContentForm onSubmit={handleSubmit}>
              <FormItemContainer>
                <InputLabel htmlFor="title">Title:</InputLabel>
                <Input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </FormItemContainer>
              <FormItemContainer>
                <InputLabel htmlFor="content">Content:</InputLabel>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
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
                        alt="Uploaded Image"
                        width={300}
                        height={300}
                      />
                    </UploadedImageContainer>
                  )}
                </ImageContainer>
              </FormItemContainer>

              <SubmitButtonContainer>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </SubmitButton>
              </SubmitButtonContainer>

              <ModalCloseButton onClick={toggleModal}>Close</ModalCloseButton>
            </ModalContentForm>
          </ModalContent>
        </ModalContainer>
      )}
      <FeaturesSectionContainer>
        {displayedItems.map((lifestyle) => (
          <FeaturesCard key={lifestyle.id}>
            <FeaturesImage
              src={lifestyle.imageUrl || '/default-image.jpg'}
              alt={lifestyle.title}
              width={500} // Replace with appropriate width
              height={300} // Replace with appropriate height
              priority
            />

            <FeaturesTitleContainer>
              {/* <Link href={`/lifestyle/${lifestyle.id}`}> */}
              <FeaturesTitle>{lifestyle.title}</FeaturesTitle>
              {/* </Link> */}
            </FeaturesTitleContainer>
          </FeaturesCard>
        ))}
      </FeaturesSectionContainer>
      <PaginationContainer>
        <PrevButton onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </PrevButton>
        <PageInfo>
          Page {currentPage} of {totalPages}
        </PageInfo>
        <NextButton onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </NextButton>
      </PaginationContainer>
    </Container>
  );
};

export default ProfileFeature;
