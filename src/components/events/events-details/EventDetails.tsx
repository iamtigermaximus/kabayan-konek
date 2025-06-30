'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';
import DefaultImage from '@/assets/NoImage2.jpg';
import {
  ArticleContent,
  EventImageContainer,
  EventImage,
  Title,
  Sidebar,
  SidebarTitleContainer,
  SidebarTitle,
  OtherArticlesList,
  OtherArticleItem,
  ArticleImage,
  SidebarArticleLink,
} from '../Events.styles';
import {
  Container,
  LoadingMessage,
  ErrorMessage,
  DetailsContainer,
  EventTitleContainer,
  BasicInfoContainer,
  Detail,
  Description,
} from './EventDetails.styles';

interface EventProps {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  address: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

const EventDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<EventProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [otherEvents, setOtherEvents] = useState<EventProps[]>([]);

  // Fetch the event details from the API
  useEffect(() => {
    if (!id) return;

    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`/api/events/${id}`);
        if (!response.ok) {
          throw new Error('Event not found');
        }
        const data: EventProps = await response.json();
        setEvent(data);
      } catch {
        console.error('Failed to fetch event details.');
      } finally {
        setLoading(false);
      }
    };
    fetchEventDetails();

    // Fetch other articles
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        // Sort articles by createdAt (desc) and limit to 5
        const sortedEvents = data.sort((a: EventProps, b: EventProps) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        });
        // Filter out the current article and take the top 5
        const filteredEvents = sortedEvents.filter(
          (article: EventProps) => article.id !== id
        );
        setOtherEvents(filteredEvents.slice(0, 5));
      })
      .catch((err) => {
        console.error('Error fetching other articles:', err);
      });
  }, [id]); // Fetch the data when the `id` changes

  // Display loading or error messages if applicable
  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (!event) return <ErrorMessage>Event not found</ErrorMessage>;

  const handleBackButton = () => router.back();

  return (
    <Container>
      <ArticleContent>
        <div
          style={{
            alignItems: 'center',
            marginTop: '30px',
            marginBottom: '10px',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              fontSize: '30px',
            }}
            onClick={handleBackButton}
          >
            <IoMdArrowRoundBack />
          </div>
        </div>
        <EventImageContainer>
          <EventImage
            src={event.imageUrl || DefaultImage}
            alt={event.title}
            width={250}
            height={250}
            className="event-image"
          />
        </EventImageContainer>
        <DetailsContainer>
          <EventTitleContainer>
            <Title>{event.title}</Title>
          </EventTitleContainer>
          <BasicInfoContainer>
            <Detail>
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
            </Detail>
            <Detail>
              <strong>Time:</strong> {event.time}
            </Detail>
            <Detail>
              <strong>Address:</strong> {event.address}
            </Detail>
          </BasicInfoContainer>

          <Description>
            <div dangerouslySetInnerHTML={{ __html: event.description }} />
          </Description>
        </DetailsContainer>
      </ArticleContent>
      <Sidebar>
        <SidebarTitleContainer>
          <SidebarTitle>OTHER RELATED EVENTS</SidebarTitle>
        </SidebarTitleContainer>
        <OtherArticlesList>
          {otherEvents.map((otherEvent) => (
            <OtherArticleItem key={otherEvent.id}>
              {otherEvent.imageUrl && (
                <ArticleImage
                  src={otherEvent.imageUrl}
                  alt={otherEvent.title}
                />
              )}
              <SidebarArticleLink
                href={`/events/${otherEvent.id}`}
                style={{ fontWeight: '700' }}
              >
                {otherEvent.title}
              </SidebarArticleLink>
            </OtherArticleItem>
          ))}
        </OtherArticlesList>
      </Sidebar>
    </Container>
  );
};

export default EventDetails;
