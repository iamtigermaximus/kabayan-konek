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
  EventInfo,
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
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DefaultImage from '@/assets/NoImage2.jpg';
import EventBanner from '../common/banners/EventBanner';
import RichTextEditor from '../common/editor/RichTextEditor';
import { Editor } from '@tiptap/core';

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
  const [content, setContent] = useState('');
  const [editor, setEditor] = useState<Editor | null>(null);

  const handleContentChange = (newContent: string) => {
    setContent(newContent); // Update content when editor changes
  };

  const [displayLimit, setDisplayLimit] = useState(6);
  const displayedItems = events.slice(0, displayLimit);
  const handleLoadMore = () => {
    setDisplayLimit(displayLimit + 6); // Increase the limit by 6
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

      const now = Date.now();

      const validEvents = data.filter((event) => {
        // Ensure valid event date
        return event.date && !isNaN(new Date(event.date).getTime());
      });

      // Determine if an event is happening now
      const isEventNow = (event: EventProps): boolean => {
        const eventStart = new Date(event.date).getTime();
        const eventEnd = new Date(event.date).setHours(23, 59, 59, 999); // Assuming it ends by day-end if no explicit time

        return now >= eventStart && now <= eventEnd;
      };

      // Sort logic
      validEvents.sort((a, b) => {
        const eventNowA = isEventNow(a);
        const eventNowB = isEventNow(b);

        // Prioritize events happening now
        if (eventNowA && !eventNowB) return -1;
        if (!eventNowA && eventNowB) return 1;

        // For past and future events, sort by proximity to `now`
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();

        const isPastA = dateA < now;
        const isPastB = dateB < now;

        if (isPastA && !isPastB) return 1;
        if (!isPastA && isPastB) return -1;

        return dateA - dateB;
      });

      setEvents(validEvents);
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
                      <InputLabel htmlFor="description">
                        Description:
                      </InputLabel>
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

