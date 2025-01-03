'use client';
import { useState, useEffect, useRef } from 'react';
import {
  Container,
  DividerContainer,
  DividerLine,
  DividerLabel,
  FeaturesSectionContainer,
  FeaturesCard,
  FeaturesImage,
  FeaturesTitleContainer,
  FeaturesTitle,
  PaginationContainer,
  PrevButton,
  PageInfo,
  NextButton,
  ModalContainer,
  ModalContent,
  ModalCloseButton,
  CreateButtonContainer,
  CreateButton,
  ModalContentTitleContainer,
  ModalContentTitle,
  ModalContentForm,
  FormItemContainer,
  InputLabel,
  Input,
  ImageContainer,
  UploadButtonContainer,
  UploadButton,
  SubmitButtonContainer,
  SubmitButton,
  UploadedImageContainer,
  EditButtonsContainer,
  EditButton,
  DeleteButton,
  ConfirmModalContent,
  ConfirmModalContainer,
  ConfirmModalButtons,
  CancelConfirmModalButton,
  DeleteConfirmModalButton,
  StyledLink,
  PublishedDate,
  ModalOverlay,
} from './Lifestyle.styles';
import DefaultImage from '@/assets/NoImage2.jpg';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import LifestyleBanner from '../common/banners/LifestyleBanner';
import RichTextEditor from '../common/editor/RichTextEditor';
import { Editor } from '@tiptap/core';
interface LifestyleArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
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

const Lifestyle = () => {
  const { data: session } = useSession();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState<LifestyleArticle[]>([]);
  const [editingLifestyle, setEditingLifestyle] =
    useState<LifestyleArticle | null>(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const widgetRef = useRef<CloudinaryWidget | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 12;
  const [content, setContent] = useState('');
  const [editor, setEditor] = useState<Editor | null>(null);

  const handleContentChange = (newContent: string) => {
    setContent(newContent); // Update content when editor changes
  };

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/lifestyle');
      const data: LifestyleArticle[] = await response.json();
      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

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
            setImageUrl(result.info.secure_url); // Save the uploaded image URL

            // Insert the image URL into the Tiptap editor at the current cursor position
            if (editor) {
              editor
                .chain()
                .focus()
                .setImage({ src: result.info.secure_url })
                .run();
            }
          } else if (error) {
            console.error('Cloudinary upload error:', error);
          }
        }
      );
      widgetRef.current = cloudinaryWidget;
    } else {
      console.log('Cloudinary script is not loaded');
    }
  }, [editor]);

  const resetForm = () => {
    setTitle('');
    editor?.commands.clearContent(); // Clear Tiptap editor content
    setImageUrl(null);
    setEditingLifestyle(null); // Ensure it resets to "create" mode
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Make sure the editor is initialized and has content
    if (!title || !editor?.getHTML()) {
      alert('Please fill out all required fields (title and content)');
      setIsSubmitting(false);
      return;
    }

    const articleData = {
      title,
      content: editor.getHTML(),
      image: imageUrl || null,
    };

    try {
      const response = await fetch(
        editingLifestyle
          ? `/api/lifestyle/${editingLifestyle.id}`
          : '/api/lifestyle',
        {
          method: editingLifestyle ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(articleData),
        }
      );

      const responseBody = await response.json();

      if (!response.ok) {
        alert(responseBody.error || 'Error saving the article');
        return;
      }

      alert(editingLifestyle ? 'Article updated!' : 'Article created!');
      setIsModalOpen(false);
      resetForm(); // Clear the form
      fetchArticles();
    } catch (error) {
      console.error('Error saving the article:', error);
      alert('Error saving the article. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleDeleteConfirm = (id: string) => {
    setArticleToDelete(id);
    setIsConfirmModalOpen(true);
  };

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000); // Clear notification after 3 seconds
  };

  const handleDelete = async () => {
    if (!articleToDelete) return;

    try {
      const response = await fetch(`/api/lifestyle/${articleToDelete}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorBody = await response.json();
        showNotification(errorBody.error || 'Failed to delete the article');
        return;
      }

      showNotification('Article deleted successfully');
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
      showNotification('Error deleting the article. Please try again.');
    } finally {
      setIsConfirmModalOpen(false);
      setArticleToDelete(null);
    }
  };

  const handleEdit = (article: LifestyleArticle) => {
    setEditingLifestyle(article);
    setTitle(article.title);
    setImageUrl(article.imageUrl || null);
    // // Defer setting the content until the editor is initialized
    // if (editor) {
    //   editor.commands.setContent(article.content);
    // } else {
    //   // In case the editor is not initialized yet, we can set the content once the editor is set
    //   setContent(article.content); // Save content temporarily and update it later
    // }

    // Set editor content after editor is initialized
    setTimeout(() => {
      if (editor) {
        editor.commands.setContent(article.content);
      }
    }, 0);
    setIsModalOpen(true); // Open modal for editing

    // Scroll to the editor section
    editorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Update the editor's content if it has been initialized
  useEffect(() => {
    if (editor && editingLifestyle) {
      // Set content only after the editor is initialized
      editor.commands.setContent(editingLifestyle.content);
    }
  }, [editor, editingLifestyle]);

  return (
    <Container>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>LIFESTYLE</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <LifestyleBanner />

      {session?.user?.role === 'admin' && (
        <CreateButtonContainer>
          <CreateButton onClick={toggleModal}>CREATE ARTICLE</CreateButton>
        </CreateButtonContainer>
      )}
      {isModalOpen && (
        <ModalOverlay>
          <div ref={editorRef}>
            <ModalContainer>
              <ModalContent>
                <ModalContentTitleContainer>
                  <ModalContentTitle>
                    {editingLifestyle ? 'Edit Article' : 'Create New Article'}
                  </ModalContentTitle>
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
                    <RichTextEditor
                      content={content}
                      onContentChange={handleContentChange}
                      editor={editor}
                      setEditor={setEditor}
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
                      {isSubmitting
                        ? 'Submitting...'
                        : editingLifestyle
                        ? 'Update Article'
                        : 'Create Article'}{' '}
                    </SubmitButton>
                  </SubmitButtonContainer>

                  <ModalCloseButton onClick={toggleModal}>
                    Close
                  </ModalCloseButton>
                </ModalContentForm>
              </ModalContent>
            </ModalContainer>
          </div>
        </ModalOverlay>
      )}

      <FeaturesSectionContainer>
        {displayedItems.map((lifestyle) => (
          <FeaturesCard key={lifestyle.id}>
            <FeaturesImage
              src={lifestyle.imageUrl || DefaultImage}
              alt={lifestyle.title}
              width={500} // Replace with appropriate width
              height={300} // Replace with appropriate height
              priority
            />

            <FeaturesTitleContainer>
              <StyledLink href={`/lifestyle/${lifestyle.id}`} passHref>
                <FeaturesTitle>{lifestyle.title}</FeaturesTitle>
              </StyledLink>
            </FeaturesTitleContainer>
            <PublishedDate>
              Published on {new Date(lifestyle.createdAt).toLocaleDateString()}
            </PublishedDate>
            {session?.user?.role === 'admin' && (
              <EditButtonsContainer>
                <EditButton onClick={() => handleEdit(lifestyle)}>
                  Edit
                </EditButton>
                <DeleteButton onClick={() => handleDeleteConfirm(lifestyle.id)}>
                  Delete
                </DeleteButton>
              </EditButtonsContainer>
            )}
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
      {isConfirmModalOpen && (
        <ConfirmModalContainer>
          <ConfirmModalContent>
            <p>Are you sure you want to delete this article?</p>
            <ConfirmModalButtons>
              <CancelConfirmModalButton
                onClick={() => setIsConfirmModalOpen(false)}
              >
                No
              </CancelConfirmModalButton>
              <DeleteConfirmModalButton onClick={handleDelete}>
                Yes
              </DeleteConfirmModalButton>
            </ConfirmModalButtons>
          </ConfirmModalContent>
        </ConfirmModalContainer>
      )}
      {notification && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            right: '50%',
            // left: '10px',
            // bottom: '10px',
            backgroundColor: 'tomato',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {notification}
        </div>
      )}
    </Container>
  );
};

export default Lifestyle;
