'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Image from 'next/image';
import styled from 'styled-components';
import { breakpoints as bp } from '@/utils/layout';
import DefaultImage from '@/assets/NoImage2.jpg';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  flex: 1;
  padding: 20px;
  /* background-color: #f9f9f9;
  border-left: 1px solid #ddd; */

  @media (min-width: ${bp.md}) {
    margin-top: 200px;
  }
`;
const OtherArticlesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const OtherArticleItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
    font-size: 0.8rem;
    margin-left: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ArticleImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;

  @media (min-width: ${bp.md}) {
    width: 100px;
    height: 100px;
  }
`;

const ArticleContent = styled.div`
  flex: 3;
  margin-right: 20px;
`;

// const Title = styled.h1`
//   font-size: 1.5rem;
//   margin-bottom: 20px;
//   color: #333;

//   @media (min-width: ${bp.md}) {
//     font-size: 2.5rem;
//   }
// `;

const SidebarTitleContainer = styled.div`
  width: 100%;
  padding: 10px 0;

  @media (min-width: ${bp.md}) {
  }
`;

const SidebarTitle = styled.div`
  font-weight: 700;
`;

const SidebarArticleLink = styled.a`
  font-weight: 700;
  font-size: 1rem;

  @media (min-width: ${bp.md}) {
    font-size: 2rem;
  }
`;

const EventImageContainer = styled.div`
  display: flex;
`;

export const EventImage = styled(Image)`
  width: 100%;
  /* height: auto; */
  border-radius: 8px;
  margin-bottom: 15px;
  height: 100%;
  object-fit: cover;
  min-height: 300px;
  max-height: 350px;
  object-fit: cover;
`;

const DetailsContainer = styled.div`
  /* text-align: center; */
  padding: 1rem;
`;

const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const EventTitleContainer = styled.div`
  max-width: 800px;
  display: flex;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;

  @media (min-width: ${bp.md}) {
    font-size: 2.5rem;
  }
`;

// const Description = styled.p`
//   font-size: 1.125rem;
//   line-height: 1.6;
//   color: #666;
//   margin-bottom: 1.5rem;
// `;

const Description = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;

  p {
    margin-bottom: 15px;
  }

  h2,
  h3 {
    margin-top: 20px;
    font-size: 1.5rem;
    color: #333;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 20px 0;
  }

  blockquote {
    background: #f4f4f4;
    padding: 10px 20px;
    border-left: 5px solid #ccc;
    margin: 20px 0;
  }
`;

const Detail = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: #444;
  margin-bottom: 0.5rem;

  strong {
    color: #333;
  }
`;

const LoadingMessage = styled.div`
  font-size: 1.25rem;
  color: #666;
  text-align: center;
  margin-top: 2rem;
`;

const ErrorMessage = styled.div`
  font-size: 1.25rem;
  color: #ff4d4f;
  text-align: center;
  margin-top: 2rem;
`;

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
            {' '}
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
