'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Image from 'next/image';
import styled from 'styled-components';
import { breakpoints as bp } from '@/utils/layout';

// Styled-components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

// const ImageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 1.5rem;
//   overflow: hidden;
//   margin-top: 10px;

//   img {
//     /* border-radius: 12px; */
//   }
// `;

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
}

const EventDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<EventProps | null>(null);
  const [loading, setLoading] = useState(true);

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
  }, [id]); // Fetch the data when the `id` changes

  // Display loading or error messages if applicable
  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (!event) return <ErrorMessage>Event not found</ErrorMessage>;

  const handleBackButton = () => router.back();

  return (
    <Container>
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
          src={event.imageUrl || '/default-event.jpg'}
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
    </Container>
  );
};

export default EventDetails;
