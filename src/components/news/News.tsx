'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  // Container,
  DividerContainer,
  DividerLine,
  DividerLabel,
  SectionContainer,
  NewsList,
  NewsItem,
  NewsContent,
  NewsHeadline,
  // NewsSummary,
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
  // Textarea,
  SubmitButton,
  ModalCloseButton,
  ToolbarButton,
  ToolbarContainer,
  StyledEditorContainer,
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
import { Heading } from '@tiptap/extension-heading';
import { Link as TiptapLink } from '@tiptap/extension-link';
import { Image as TiptapImage } from '@tiptap/extension-image';
import { Blockquote } from '@tiptap/extension-blockquote';
import { HorizontalRule } from '@tiptap/extension-horizontal-rule';
import { TextAlign } from '@tiptap/extension-text-align';
import { CodeBlock } from '@tiptap/extension-code-block';
import { TextStyle } from '@tiptap/extension-text-style';
import { Underline } from '@tiptap/extension-underline';
import { FontFamily } from '@tiptap/extension-font-family';
import { Subscript } from '@tiptap/extension-subscript';
import { Superscript } from '@tiptap/extension-superscript';
import { Highlight } from '@tiptap/extension-highlight';

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
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const [lifestyleArticles, setLifestyleArticles] = useState<
    LifestyleArticle[]
  >([]);
  const [kabayanArticles, setKabayanArticles] = useState<KabayanArticle[]>([]);

  const itemsPerPage = 10;

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
        types: ['textStyle'], // Apply font family to textStyle (or any other type you need)
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
        editingArticleId ? `/api/news/${editingArticleId}` : '/api/news',
        {
          method: editingArticleId ? 'PUT' : 'POST',
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
      setEditingArticleId(null);
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
    setTitle(article.title);
    setContentUrl(article.contentUrl);
    editor?.commands.setContent(article.newsSummary);
    setDate(new Date(article.date));
    setSource(article.source);
    setEditingArticleId(article.id);
    setIsModalOpen(true); // Open modal for editing

    // Scroll to the editor section
    editorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
                        <div>
                          <ToolbarContainer>
                            {/* Font Family Dropdown */}
                            <div>
                              <select
                                onChange={(e) =>
                                  handleFontChange(e.target.value)
                                }
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
                                editor
                                  ?.chain()
                                  .focus()
                                  .toggleSuperscript()
                                  .run()
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
                                editor
                                  ?.chain()
                                  .focus()
                                  .setTextAlign('left')
                                  .run()
                              }
                            >
                              <FaAlignLeft />
                            </ToolbarButton>
                            <ToolbarButton
                              type="button"
                              onClick={() =>
                                editor
                                  ?.chain()
                                  .focus()
                                  .setTextAlign('center')
                                  .run()
                              }
                            >
                              <FaAlignCenter />
                            </ToolbarButton>
                            <ToolbarButton
                              type="button"
                              onClick={() =>
                                editor
                                  ?.chain()
                                  .focus()
                                  .setTextAlign('right')
                                  .run()
                              }
                            >
                              <FaAlignRight />
                            </ToolbarButton>
                            <ToolbarButton
                              type="button"
                              onClick={() =>
                                editor
                                  ?.chain()
                                  .focus()
                                  .setTextAlign('justify')
                                  .run()
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
                                editor
                                  ?.chain()
                                  .focus()
                                  .setImage({ src: '' })
                                  .run()
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
