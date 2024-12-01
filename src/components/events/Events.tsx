'use client';

import { useState, useEffect, useRef } from 'react';
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
  ModalOverlay,
} from './Events.styles';
import Image from 'next/image';
// import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
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
import EventBanner from '../common/banners/EventBanner';

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
  // const { data: session } = useSession();
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
  const [kabayanArticles, setKabayanArticles] = useState<KabayanArticle[]>([]);
  const widgetRef = useRef<CloudinaryWidget | null>(null);

  const [displayLimit, setDisplayLimit] = useState(6);
  const displayedItems = events.slice(0, displayLimit);
  const handleLoadMore = () => {
    setDisplayLimit(displayLimit + 6); // Increase the limit by 6
  };

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

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data: EventProps[] = await response.json();

      // // sort by latest

      const now = Date.now();

      // Sort by nearest date to now, pushing past events to the end
      data.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : Infinity;
        const dateB = b.date ? new Date(b.date).getTime() : Infinity;

        const isPastA = dateA < now;
        const isPastB = dateB < now;

        // Handle past events: Push them to the end
        if (isPastA && !isPastB) return 1;
        if (!isPastA && isPastB) return -1;

        // For future dates, sort by proximity to 'now'
        return dateA - dateB;
      });

      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
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
      setEditingEvent(null);
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

  return (
    <Container>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>EVENTS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <EventBanner
        handleLoginClick={handleLoginClick}
        toggleModal={toggleModal}
      />
      <PageLayout>
        <EventsContent>
          {isModalOpen && (
            <ModalOverlay>
              <ModalContainer>
                <ModalContent>
                  <ModalContentTitleContainer>
                    <ModalContentTitle>Create New Event</ModalContentTitle>
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
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </SubmitButton>
                    <ModalCloseButton onClick={toggleModal}>
                      Close
                    </ModalCloseButton>
                  </ModalContentForm>
                </ModalContent>
              </ModalContainer>
            </ModalOverlay>
          )}

          <SectionContainer>
            {displayedItems.slice(0, displayLimit).map((event) => (
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
                </EventDetails>
              </EventCard>
            ))}
          </SectionContainer>
          {displayLimit < events.length && (
            <button
              onClick={handleLoadMore}
              style={{
                padding: '10px 20px',
                backgroundColor: 'tomato',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                margin: '20px auto',
                display: 'block',
              }}
            >
              Load More
            </button>
          )}
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
