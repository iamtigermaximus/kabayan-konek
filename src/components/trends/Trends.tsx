'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Container,
  DividerContainer,
  DividerLabel,
  DividerLine,
  SectionContainer,
  TrendCard,
  ModalContainer,
  ModalContent,
  ModalContentTitle,
  ModalContentForm,
  FormItemContainer,
  InputLabel,
  Input,
  SubmitButton,
  ModalCloseButton,
  UploadedImageContainer,
  ImageContainer,
  UploadButtonContainer,
  UploadButton,
  ModalContentTitleContainer,
  PageLayout,
  TrendsContent,
  Sidebar,
  SidebarTitleContainer,
  SidebarTitle,
  OtherArticlesList,
  OtherArticleItem,
  ArticleImage,
  SidebarArticleLink,
  ModalOverlay,
  SubmitButtonContainer,
  CreateButtonContainer,
  CreateButton,
  Content,
  EditButtonsContainer,
  EditButton,
  DeleteButton,
  PaginationContainer,
  PrevButton,
  PageInfo,
  NextButton,
  ConfirmModalContainer,
  ConfirmModalContent,
  ConfirmModalButtons,
  CancelConfirmModalButton,
  DeleteConfirmModalButton,
  TrendImageContainer,
  TrendImage,
  TrendDetails,
  BasicTrendInfoContainer,
  TrendName,
} from './Trends.styles';
import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DefaultImage from '@/assets/NoImage2.jpg';
import RichTextEditor from '../common/editor/RichTextEditor';
import { Editor } from '@tiptap/core';
import { useSession } from 'next-auth/react';

interface TrendArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface LifestyleArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface KabayanArticle {
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

const Trends = () => {
  const { data: session } = useSession();
  // const router = useRouter();
  const [trends, setTrends] = useState<TrendArticle[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingTrend, setEditingTrend] = useState<TrendArticle | null>(null);
  const [lifestyleArticles, setLifestyleArticles] = useState<
    LifestyleArticle[]
  >([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [kabayanArticles, setKabayanArticles] = useState<KabayanArticle[]>([]);
  const widgetRef = useRef<CloudinaryWidget | null>(null);
  const [content, setContent] = useState('');
  const [editor, setEditor] = useState<Editor | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const handleContentChange = (newContent: string) => {
    setContent(newContent); // Update content when editor changes
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = trends.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const fetchLifestyleArticles = async () => {
    try {
      const response = await fetch('/api/lifestyle');
      const data: LifestyleArticle[] = await response.json();
      // Sort articles by createdAt (desc) and filter out the current article
      const sortedArticles = data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      // Take top 5 other articles (exclude current article if necessary)
      setLifestyleArticles(sortedArticles.slice(0, 3));
    } catch (error) {
      console.error('Error fetching other articles:', error);
    }
  };

  useEffect(() => {
    fetchLifestyleArticles();
  }, []);

  const fetchKabayanArticles = async () => {
    try {
      const response = await fetch('/api/profile');
      const data: KabayanArticle[] = await response.json();
      // Sort articles by createdAt (desc) and filter out the current article
      const sortedArticles = data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      // Take top 5 other articles (exclude current article if necessary)
      setKabayanArticles(sortedArticles.slice(0, 3));
    } catch (error) {
      console.error('Error fetching other articles:', error);
    }
  };

  useEffect(() => {
    fetchKabayanArticles();
  }, []);

  const fetchTrendsArticles = async () => {
    try {
      const response = await fetch('/api/trends');
      const data: TrendArticle[] = await response.json();
      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setTrends(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching trends articles:', error);
    }
  };

  useEffect(() => {
    fetchTrendsArticles();
  }, []);

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
  }, [editor]);

  const resetForm = () => {
    setTitle('');
    editor?.commands.clearContent(); // Clear Tiptap editor content
    setImageUrl(null);
    setEditingTrend(null); // Ensure it resets to "create" mode
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
        editingTrend ? `/api/trends/${editingTrend.id}` : '/api/trends',
        {
          method: editingTrend ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(articleData),
        }
      );

      const responseBody = await response.json();

      if (!response.ok) {
        alert(responseBody.error || 'Error saving the article');
        return;
      }

      alert(editingTrend ? 'Trend article updated!' : 'Trend article created!');
      setIsModalOpen(false);
      resetForm(); // Clear the form
      fetchTrendsArticles();
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
      const response = await fetch(`/api/trends/${articleToDelete}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorBody = await response.json();
        showNotification(errorBody.error || 'Failed to delete the article');
        return;
      }

      showNotification('Article deleted successfully');
      fetchTrendsArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
      showNotification('Error deleting the article. Please try again.');
    } finally {
      setIsConfirmModalOpen(false);
      setArticleToDelete(null);
    }
  };

  const handleEdit = (article: LifestyleArticle) => {
    setEditingTrend(article);
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
    if (editor && editingTrend) {
      // Set content only after the editor is initialized
      editor.commands.setContent(editingTrend.content);
    }
  }, [editor, editingTrend]);

  // const handleLoginClick = () => {
  //   router.push('/login');
  // };

  return (
    <Container>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>TRENDS</DividerLabel>
        <DividerLine />
      </DividerContainer>

      <PageLayout>
        <TrendsContent>
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
                        {editingTrend ? 'Edit Article' : 'Create New Article'}
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
                            <UploadButton
                              type="button"
                              onClick={handleUploadImage}
                            >
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
                            : editingTrend
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

          <SectionContainer>
            {displayedItems.map((trend) => (
              <TrendCard key={trend.id}>
                <TrendImageContainer>
                  <TrendImage
                    src={trend.imageUrl || DefaultImage}
                    alt={trend.title}
                    width={150}
                    height={150}
                    priority
                  />
                </TrendImageContainer>

                <TrendDetails>
                  <BasicTrendInfoContainer></BasicTrendInfoContainer>
                  <Link
                    href={`/trends/${trend.id}`}
                    key={trend.id}
                    style={{ textDecoration: 'none' }}
                  >
                    <TrendName>{trend.title}</TrendName>
                  </Link>
                  <Content>
                    {/* Dynamically render content with HTML */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: trend.content,
                      }}
                    />
                  </Content>
                </TrendDetails>
                {session?.user?.role === 'admin' && (
                  <EditButtonsContainer>
                    <EditButton onClick={() => handleEdit(trend)}>
                      Edit
                    </EditButton>
                    <DeleteButton onClick={() => handleDeleteConfirm(trend.id)}>
                      Delete
                    </DeleteButton>
                  </EditButtonsContainer>
                )}
              </TrendCard>
            ))}
          </SectionContainer>

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
        </TrendsContent>
        <Sidebar>
          <SidebarTitleContainer>
            <SidebarTitle>FEATURES</SidebarTitle>
          </SidebarTitleContainer>
          <OtherArticlesList>
            {lifestyleArticles.map((article) => (
              <OtherArticleItem key={article.id}>
                {article.imageUrl && (
                  <ArticleImage src={article.imageUrl} alt={article.title} />
                )}
                <SidebarArticleLink
                  href={`/lifestyle/${article.id}`}
                  style={{ fontWeight: '700' }}
                >
                  {article.title}
                </SidebarArticleLink>
              </OtherArticleItem>
            ))}
          </OtherArticlesList>
          <SidebarTitleContainer>
            <SidebarTitle>KABAYAN SPOTLIGHT</SidebarTitle>
          </SidebarTitleContainer>
          <OtherArticlesList>
            {kabayanArticles.map((article) => (
              <OtherArticleItem key={article.id}>
                {article.imageUrl && (
                  <ArticleImage src={article.imageUrl} alt={article.title} />
                )}
                <SidebarArticleLink
                  href={`/profile/${article.id}`}
                  style={{ fontWeight: '700' }}
                >
                  {article.title}
                </SidebarArticleLink>
              </OtherArticleItem>
            ))}
          </OtherArticlesList>
        </Sidebar>
      </PageLayout>
    </Container>
  );
};

export default Trends;
