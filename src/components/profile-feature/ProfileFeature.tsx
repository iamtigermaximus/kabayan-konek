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
  StyledEditorContainer,
  SubmitButton,
  SubmitButtonContainer,
  // Textarea,
  ToolbarButton,
  ToolbarContainer,
  UploadButton,
  UploadButtonContainer,
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
} from './ProfileFeature.styles';
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
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { FontFamily } from '@tiptap/extension-font-family';

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
  // const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState<KabayanArticle[]>([]);
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const widgetRef = useRef<CloudinaryWidget | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 6;
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
    ],
    content: '',
  });

  // Font Change Handler
  const handleFontChange = (fontFamily: string) => {
    if (editor) {
      editor.chain().focus().setFontFamily(fontFamily).run();
    }
  };
  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/profile');
      const data: KabayanArticle[] = await response.json();

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
  //           setImageUrl(result.info.secure_url);
  //           // console.log('Image uploaded successfully!', result.info.secure_url);
  //         } else if (error) {
  //           console.error('Cloudinary upload error:', error);
  //         }
  //       }
  //     );
  //     widgetRef.current = cloudinaryWidget;
  //   } else {
  //     console.log('Cloudinary script is not loaded');
  //   }
  // }, []);

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
    setEditingArticleId(null); // Ensure it resets to "create" mode
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!title || !editor?.getHTML()) {
      alert('Please fill out all required fields (title and content)');
      setIsSubmitting(false);
      return;
    }

    // Prepare the data for submission
    const articleData = {
      title,
      content: editor.getHTML(),
      image: imageUrl || null,
    };

    try {
      // const response = await fetch('/api/profile', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(articleData),
      // });

      const response = await fetch(
        editingArticleId ? `/api/profile/${editingArticleId}` : '/api/profile',
        {
          method: editingArticleId ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(articleData),
        }
      );

      const responseBody = await response.json();

      if (!response.ok) {
        console.error(
          'Error creating article:',
          responseBody.error || 'Unknown error'
        );
        alert(responseBody.error || 'Error saving the article');
        return;
      }

      alert(editingArticleId ? 'Article updated!' : 'Article created!');
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
      const response = await fetch(`/api/profile/${articleToDelete}`, {
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

  const handleEdit = (article: KabayanArticle) => {
    setTitle(article.title);
    setImageUrl(article.imageUrl || null);
    editor?.commands.setContent(article.content);
    setEditingArticleId(article.id);
    setIsModalOpen(true); // Open modal for editing

    // Scroll to the editor section
    editorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Container>
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
        <ModalOverlay>
          <div ref={editorRef}>
            <ModalContainer>
              <ModalContent>
                <ModalContentTitleContainer>
                  <ModalContentTitle>
                    {editingArticleId ? 'Edit Article' : 'Create New Article'}
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
                    {/* <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                /> */}
                    <div>
                      <ToolbarContainer>
                        <ToolbarButton
                          type="button"
                          onClick={() =>
                            editor?.chain().focus().toggleBold().run()
                          }
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
                            editor
                              ?.chain()
                              .focus()
                              .setTextAlign('justify')
                              .run()
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
                          onClick={() =>
                            editor?.chain().focus().toggleCode().run()
                          }
                        >
                          Code
                        </ToolbarButton>
                        {/* Font Family Dropdown */}
                        <div>
                          <select
                            onChange={(e) => handleFontChange(e.target.value)}
                            defaultValue=""
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
                        <div>
                          <select
                            onChange={(e) => {
                              const level = parseInt(e.target.value, 10) as
                                | 1
                                | 2
                                | 3
                                | 4
                                | 5
                                | 6; // Explicit type assertion
                              if (editor) {
                                editor
                                  .chain()
                                  .focus()
                                  .toggleHeading({ level })
                                  .run();
                              }
                            }}
                            defaultValue=""
                          >
                            <option value="">Normal Text</option>
                            <option value="1">Heading 1</option>
                            <option value="2">Heading 2</option>
                            <option value="3">Heading 3</option>
                            <option value="4">Heading 4</option>
                            <option value="5">Heading 5</option>
                            <option value="6">Heading 6</option>
                          </select>
                        </div>
                      </ToolbarContainer>

                      {/* Ensure editor is initialized before rendering the editor */}
                      <StyledEditorContainer>
                        {editor && <EditorContent editor={editor} />}
                      </StyledEditorContainer>
                    </div>
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
                        : editingArticleId
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
        {displayedItems.map((profile) => (
          <FeaturesCard key={profile.id}>
            <FeaturesImage
              src={profile.imageUrl || DefaultImage}
              alt={profile.title}
              width={500} // Replace with appropriate width
              height={300} // Replace with appropriate height
              priority
            />
            <StyledLink href={`/profile/${profile.id}`}>
              <FeaturesTitleContainer>
                <FeaturesTitle>{profile.title}</FeaturesTitle>
              </FeaturesTitleContainer>
            </StyledLink>
            <PublishedDate>
              Published on {new Date(profile.createdAt).toLocaleDateString()}
            </PublishedDate>
            {session?.user?.role === 'admin' && (
              <EditButtonsContainer>
                <EditButton onClick={() => handleEdit(profile)}>
                  Edit
                </EditButton>
                <DeleteButton onClick={() => handleDeleteConfirm(profile.id)}>
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

export default ProfileFeature;
