'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  DividerContainer,
  DividerLine,
  DividerLabel,
  SectionContainer,
  NewsList,
  NewsItem,
  NewsContent,
  NewsHeadline,
  NewsDate,
  NewsSource,
  PaginationContainer,
  PrevButton,
  PageInfo,
  NextButton,
  CreateButtonContainer,
  CreateButton,
  ModalContainer,
  ModalContent,
  ModalContentTitle,
  ModalContentForm,
  FormItemContainer,
  InputLabel,
  Input,
  SubmitButton,
  ModalCloseButton,
  EditButtonsContainer,
  EditButton,
  DeleteButton,
  ConfirmModalContainer,
  ConfirmModalContent,
  ConfirmModalButtons,
  CancelConfirmModalButton,
  DeleteConfirmModalButton,
  ArticleContainer,
  ArticleContent,
  Sidebar,
  SidebarTitleContainer,
  SidebarTitle,
  OtherArticlesList,
  OtherArticleItem,
  SidebarArticleLink,
  PageLayout,
  Content,
  ArticleImage,
  ModalOverlay,
} from './News.styles';
import { useSession } from 'next-auth/react';
import RichTextEditor from '../common/editor/RichTextEditor';
import { Editor } from '@tiptap/core';

interface NewsArticleProps {
  id: string;
  title: string;
  contentUrl: string;
  newsSummary: string;
  date: Date;
  source: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
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

const News = () => {
  const { data: session } = useSession();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [newsArticles, setNewsArticles] = useState<NewsArticleProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [contentUrl, setContentUrl] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [source, setSource] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsArticleProps | null>(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const [lifestyleArticles, setLifestyleArticles] = useState<
    LifestyleArticle[]
  >([]);
  const [kabayanArticles, setKabayanArticles] = useState<KabayanArticle[]>([]);
  const [content, setContent] = useState('');
  const [editor, setEditor] = useState<Editor | null>(null);

  const itemsPerPage = 10;
  const handleContentChange = (newContent: string) => {
    setContent(newContent); // Update content when editor changes
  };

  const fetchNewsArticles = async () => {
    try {
      const response = await fetch('/api/news');
      const data: NewsArticleProps[] = await response.json();
      data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setNewsArticles(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching news articles:', error);
    }
  };

  useEffect(() => {
    fetchNewsArticles();
  }, []);

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = newsArticles.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!title || !contentUrl || !editor?.getHTML() || !date || !source) {
      alert('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }

    const newsArticleData = {
      title,
      contentUrl,
      newsSummary: editor.getHTML(),
      date: new Date(date),
      source,
    };

    try {
      const response = await fetch(
        editingNews ? `/api/news/${editingNews.id}` : '/api/news',
        {
          method: editingNews ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newsArticleData),
        }
      );

      const responseBody = await response.json();

      if (!response.ok) {
        console.error(
          'Error creating news article:',
          responseBody.error || 'Unknown error'
        );
        alert(responseBody.error || 'Error creating/updating news article');
        return;
      }

      console.log('News article created!', responseBody);
      setIsModalOpen(false);
      setEditingNews(null);
      fetchNewsArticles();
    } catch (error) {
      console.error('Error creating news article:', error);
      alert('Error creating event. Please try again later.');
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
      const response = await fetch(`/api/news/${articleToDelete}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorBody = await response.json();
        showNotification(errorBody.error || 'Failed to delete the article');
        return;
      }

      showNotification('Article deleted successfully');
      fetchNewsArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
      showNotification('Error deleting the article. Please try again.');
    } finally {
      setIsConfirmModalOpen(false);
      setArticleToDelete(null);
    }
  };

  const handleEdit = (article: NewsArticleProps) => {
    setEditingNews(article);
    setTitle(article.title);
    setContentUrl(article.contentUrl);
    setDate(new Date(article.date));
    setSource(article.source);
    // Set editor content after editor is initialized
    setTimeout(() => {
      if (editor) {
        editor.commands.setContent(article.newsSummary);
      }
    }, 0);
    setIsModalOpen(true); // Open modal for editing

    // Scroll to the editor section
    editorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (editor && editingNews) {
      // Set content only after the editor is initialized
      editor.commands.setContent(editingNews.newsSummary);
    }
  }, [editor, editingNews]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value ? new Date(e.target.value) : null; // Convert to Date or null
    setDate(newDate);
  };

  return (
    <ArticleContainer>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>NEWS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      {session?.user?.role === 'admin' && (
        <CreateButtonContainer>
          <CreateButton onClick={toggleModal}>CREATE NEWS ARTICLE</CreateButton>
        </CreateButtonContainer>
      )}
      <PageLayout>
        <ArticleContent>
          {isModalOpen && (
            <ModalOverlay>
              <div ref={editorRef}>
                <ModalContainer>
                  <ModalContent>
                    <ModalContentTitle>Create News Article</ModalContentTitle>
                    <ModalContentForm onSubmit={handleSubmit}>
                      <FormItemContainer>
                        <InputLabel htmlFor="title">Title:</InputLabel>
                        <Input
                          id="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </FormItemContainer>
                      <FormItemContainer>
                        <InputLabel htmlFor="contentUrl">
                          Content URL:
                        </InputLabel>
                        <Input
                          id="contentUrl"
                          type="url"
                          value={contentUrl}
                          onChange={(e) => setContentUrl(e.target.value)}
                          required
                        />
                      </FormItemContainer>
                      <FormItemContainer>
                        <InputLabel htmlFor="newsSummary">Summary:</InputLabel>
                        <RichTextEditor
                          content={content}
                          onContentChange={handleContentChange}
                          editor={editor}
                          setEditor={setEditor}
                        />
                      </FormItemContainer>
                      <FormItemContainer>
                        <InputLabel htmlFor="date">Date:</InputLabel>
                        <Input
                          id="date"
                          type="date"
                          value={date ? date.toISOString().split('T')[0] : ''}
                          onChange={handleDateChange}
                          required
                        />
                      </FormItemContainer>
                      <FormItemContainer>
                        <InputLabel htmlFor="source">Source:</InputLabel>
                        <Input
                          id="source"
                          value={source}
                          onChange={(e) => setSource(e.target.value)}
                          required
                        />
                      </FormItemContainer>
                      <SubmitButton type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </SubmitButton>
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
            <NewsList>
              {displayedItems.map((news) => (
                <NewsItem key={news.id}>
                  <NewsContent>
                    <NewsHeadline>
                      <a
                        href={news.contentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {news.title}
                      </a>
                    </NewsHeadline>
                    <Content>
                      {/* Dynamically render content with HTML */}
                      <div
                        dangerouslySetInnerHTML={{ __html: news.newsSummary }}
                      />
                    </Content>{' '}
                    <NewsDate>
                      Published:{' '}
                      {/* {date instanceof Date && !isNaN(date.getTime())
                        ? date.toLocaleDateString()
                        : 'N/A'} */}
                      {news.date
                        ? new Date(news.date).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        : 'N/A'}
                    </NewsDate>
                    <NewsSource>Source: {news.source}</NewsSource>
                  </NewsContent>
                  {session?.user?.role === 'admin' && (
                    <EditButtonsContainer>
                      <EditButton onClick={() => handleEdit(news)}>
                        Edit
                      </EditButton>
                      <DeleteButton
                        onClick={() => handleDeleteConfirm(news.id)}
                      >
                        Delete
                      </DeleteButton>
                    </EditButtonsContainer>
                  )}
                </NewsItem>
              ))}
            </NewsList>
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
        </ArticleContent>
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
    </ArticleContainer>
  );
};

export default News;
