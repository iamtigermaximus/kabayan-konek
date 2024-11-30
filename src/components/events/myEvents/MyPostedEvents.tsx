'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Container,
  DividerContainer,
  DividerLabel,
  DividerLine,
  SectionContainer,
  EventCard,
  EventImage,
  EventDetails,
  EventName,
  // EventDescription,
  EventInfo,
  // CreateButtonContainer,
  // CreateButton,
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
  UploadedImageContainer,
  PaginationContainer,
  PrevButton,
  PageInfo,
  NextButton,
  ImageContainer,
  UploadButtonContainer,
  UploadButton,
  ModalContentTitleContainer,
  // StyledLink,
  ToolbarButton,
  ToolbarContainer,
  StyledEditorContainer,
  // EventDescriptionSpan,
  BasicEventInfoContainer,
  EventImageContainer,
  PageLayout,
  EventsContent,
  Sidebar,
  SidebarTitleContainer,
  SidebarTitle,
  OtherArticlesList,
  OtherArticleItem,
  ArticleImage,
  SidebarArticleLink,
} from '../Events.styles';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
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

interface EventProps {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  address: string;
  imageUrl?: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
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

const Events = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [events, setEvents] = useState<EventProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventProps | null>(null);
  const [lifestyleArticles, setLifestyleArticles] = useState<
    LifestyleArticle[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [kabayanArticles, setKabayanArticles] = useState<KabayanArticle[]>([]);
  const widgetRef = useRef<CloudinaryWidget | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const itemsPerPage = 10;

  // Initialize Tiptap editor
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

  const fetchEvents = useCallback(async () => {
    if (!session?.user?.id) {
      setError('User is not logged in.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/events/myEvents');

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to fetch events');
        setIsLoading(false);
        return;
      }

      const data: EventProps[] = await response.json();
      data.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA; // Sort in descending order
      });

      setEvents(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Error fetching events');
    } finally {
      setIsLoading(false);
    }
  }, [session?.user?.id, itemsPerPage]);

  useEffect(() => {
    if (session) {
      fetchEvents(); // Fetch products if session is available
    }
  }, [session, fetchEvents]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = events.slice(startIndex, endIndex);

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
    }
  }, [editor]);

  const resetForm = () => {
    setTitle('');
    editor?.commands.clearContent(); // Clear Tiptap editor content
    setDate('');
    setTime('');
    setAddress('');
    setImageUrl(null);
    setEditingEvent(null); // Ensure it resets to "create" mode
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!title || !editor?.getHTML() || !date || !time || !address) {
      alert('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }

    const eventData = {
      title,
      description: editor?.getHTML(),
      date: new Date(date),
      time,
      address,
      image: imageUrl || null,
    };

    try {
      const endpoint = editingEvent
        ? `/api/events/${editingEvent.id}` // Edit endpoint
        : '/api/events'; // Create endpoint
      const method = editingEvent ? 'PUT' : 'POST'; // Use PUT for edit

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      const responseBody = await response.json();

      if (!response.ok) {
        console.error(
          'Error submitting event',
          responseBody.error || 'Unknown error'
        );
        alert(responseBody.error || 'Error submitting event');
        return;
      }

      console.log(
        editingEvent ? 'Events updated!' : 'Event created!',
        responseBody
      );
      setIsModalOpen(false);
      resetForm(); // Clear the form
      fetchEvents();
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginClick = () => {
    router.push('/login');
  };
  const handleEdit = (event: EventProps) => {
    setEditingEvent(event);
    setTitle(event.title);
    editor?.commands.setContent(event.description);

    // Parse event.date only if it's not already a Date object
    const formattedDate =
      typeof event.date === 'string'
        ? new Date(event.date).toISOString().split('T')[0]
        : event.date.toISOString().split('T')[0];
    setDate(formattedDate);
    setTime(event.time);
    setAddress(event.address);
    setImageUrl(event.imageUrl || null);
    setIsModalOpen(true); // Open modal for editing
  };

  const handleDelete = async (eventId: string) => {
    if (!confirm('Are you sure you want to delete this event?')) {
      return;
    }

    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const responseBody = await response.json();
        console.error(
          'Error deleting event:',
          responseBody.error || 'Unknown error'
        );
        alert(responseBody.error || 'Error deleting event');
        return;
      }

      console.log('Event deleted successfully!');
      fetchEvents(); // Refresh advertisement list
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Error deleting event. Please try again later.');
    }
  };
  return (
    <Container>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>EVENTS</DividerLabel>
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
              Want to post your own events?
            </h2>
            <p style={{ marginBottom: '20px', color: '#555' }}>
              Log in or sign up to create and manage your events with ease. Join
              our community today!
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
              Ready to share your events with the community?
            </h2>
            <p style={{ marginBottom: '20px', color: '#555' }}>
              You are logged in! Create and manage your events easily, and
              engage with your audience.
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
              CREATE AN EVENT
            </button>
          </div>
        )}
      </div>

      {isLoading && <div>Loading my events...</div>}

      {/* {session && (
        <CreateButtonContainer>
          <CreateButton onClick={toggleModal}>CREATE EVENT</CreateButton>
        </CreateButtonContainer>
      )} */}
      <PageLayout>
        <EventsContent>
          <SectionContainer>
            {isModalOpen && (
              <ModalContainer>
                <ModalContent>
                  <ModalContentTitleContainer>
                    <ModalContentTitle>
                      {editingEvent ? 'Edit Event' : 'Create New Event'}
                    </ModalContentTitle>
                  </ModalContentTitleContainer>
                  <ModalContentForm onSubmit={handleSubmit}>
                    <FormItemContainer>
                      <InputLabel htmlFor="title">Event Name:</InputLabel>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </FormItemContainer>
                    <FormItemContainer>
                      <InputLabel htmlFor="description">
                        Description:
                      </InputLabel>
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
                              editor
                                ?.chain()
                                .focus()
                                .setTextAlign('center')
                                .run()
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
                              editor
                                ?.chain()
                                .focus()
                                .setTextAlign('center')
                                .run()
                            }
                          >
                            Center Align
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
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                    </FormItemContainer>
                    <FormItemContainer>
                      <InputLabel htmlFor="time">Time:</InputLabel>
                      <Input
                        id="time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                      />
                    </FormItemContainer>
                    <FormItemContainer>
                      <InputLabel htmlFor="address">Address:</InputLabel>
                      <Input
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
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
                        : editingEvent
                        ? 'Update Event'
                        : 'Create Event'}{' '}
                    </SubmitButton>
                    <ModalCloseButton onClick={toggleModal}>
                      Close
                    </ModalCloseButton>
                  </ModalContentForm>
                </ModalContent>
              </ModalContainer>
            )}
            {displayedItems.slice(0, 6).map((event) => (
              <EventCard key={event.id}>
                <EventImageContainer>
                  <EventImage
                    src={event.imageUrl || DefaultImage}
                    alt={event.title}
                    width={150}
                    height={150}
                    priority
                  />
                </EventImageContainer>

                <EventDetails>
                  <BasicEventInfoContainer>
                    <EventInfo>
                      {event.date
                        ? new Date(event.date).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric',
                          })
                        : 'N/A'}
                    </EventInfo>

                    <EventInfo>{event.time}</EventInfo>
                  </BasicEventInfoContainer>
                  <Link
                    href={`/events/${event.id}`}
                    key={event.id}
                    style={{ textDecoration: 'none' }}
                  >
                    <EventName>{event.title}</EventName>
                  </Link>
                  {/* <EventDescription>
                {event.description.length > 100 ? (
                  <>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: event.description.slice(0, 100) + '...',
                      }}
                    ></div>
                    <StyledLink href={`/events/${event.id}`}>
                      <EventDescriptionSpan>Read More</EventDescriptionSpan>
                    </StyledLink>
                  </>
                ) : (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: event.description,
                    }}
                  ></div>
                )}
              </EventDescription> */}

                  <EventInfo>{event.address}</EventInfo>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
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
                      onClick={() => handleEdit(event)}
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
                        if (event.id) {
                          handleDelete(event.id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </EventDetails>
              </EventCard>
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
        </EventsContent>
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

export default Events;
