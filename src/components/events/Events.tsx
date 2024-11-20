'use client';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import FeatureImage1 from '../../assets/pexels-elevate-1267320.jpg';
import FeatureImage2 from '../../assets/pexels-pixabay-258154.jpg';
import FeatureImage3 from '../../assets/pexels-tapio-haaja-1214336-2311602.jpg';
import { breakpoints as bp } from '../../utils/layout';

const Container = styled.div`
  padding: 10px;
  height: 100%;
  z-index: 99;

  @media (min-width: ${bp.md}) {
    padding: 20px 50px;
  }
`;

const SectionContainer = styled.section`
  padding: 10px;

  @media (min-width: ${bp.md}) {
    padding: 20px 50px;
  }
`;

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const EventImage = styled(Image)`
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const EventDetails = styled.div`
  flex: 1;
`;

const EventName = styled.h2`
  margin: 0 0 10px;
  font-size: 1.5rem;
  color: #333;
`;

const EventDescription = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  color: #666;
`;

const EventInfo = styled.div`
  margin: 10px 0;
  font-size: 0.9rem;
  color: #444;

  span {
    font-weight: bold;
  }
`;

const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const DividerLine = styled.hr`
  border: 0;
  border-top: 1px solid #b4b4b4;
  width: 100%;
  margin: 0;
  flex-grow: 1;
`;

const DividerLabel = styled.span`
  top: -12px;
  background-color: white;
  padding: 0 10px;
  font-weight: bold;
  color: #b4b4b4;
  font-size: 1rem;
  white-space: nowrap;

  @media (min-width: ${bp.md}) {
    font-size: 1.25rem;
  }
`;

interface Event {
  id: number;
  name: string;
  description: string;
  date: string; // Date as a string
  time: string;
  address: string;
  image: string | null | StaticImageData;
}

const Events = () => {
  const placeholderImages = [FeatureImage1, FeatureImage2, FeatureImage3];

  const events: Event[] = [
    {
      id: 1,
      name: 'Tech Conference 2024',
      description: 'An exciting conference about the latest in tech.',
      date: '2024-12-12',
      time: '10:00 AM - 4:00 PM',
      address: '123 Tech Road, Silicon Valley, CA',
      image: null,
    },
    {
      id: 2,
      name: 'Art Workshop',
      description: 'Learn the basics of watercolor painting.',
      date: '2024-11-25',
      time: '2:00 PM - 5:00 PM',
      address: '456 Creative Street, New York, NY',
      image: FeatureImage2,
    },
    {
      id: 3,
      name: 'Filipino Christmas',
      description: 'A full-day celebration featuring live bands and DJs.',
      date: '2024-12-24',
      time: '12:00 PM - 11:00 PM',
      address: '789 Festival Avenue, Austin, TX',
      image: null,
    },
    {
      id: 4,
      name: 'Music Festival',
      description: 'A full-day festival featuring live bands and DJs.',
      date: '2025-01-15',
      time: '12:00 PM - 11:00 PM',
      address: '789 Festival Avenue, Austin, TX',
      image: null,
    },
  ];

  // Sort events by nearest date
  const sortedEvents = events.sort(
    (a, b) => Date.parse(a.date) - Date.parse(b.date)
  );

  return (
    <Container>
      <title>EVENTS | kabayankonek</title>

      <DividerContainer>
        <DividerLine />
        <DividerLabel>EVENTS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        {sortedEvents.map((event, index) => (
          <EventCard key={event.id}>
            <EventImage
              src={
                event.image ||
                placeholderImages[index % placeholderImages.length]
              }
              alt={event.name}
              width={150}
              height={150}
              priority
            />
            <EventDetails>
              <EventName>{event.name}</EventName>
              <EventDescription>{event.description}</EventDescription>
              <EventInfo>
                <span>Date:</span> {event.date}
              </EventInfo>
              <EventInfo>
                <span>Time:</span> {event.time}
              </EventInfo>
              <EventInfo>
                <span>Address:</span> {event.address}
              </EventInfo>
            </EventDetails>
          </EventCard>
        ))}
      </SectionContainer>
    </Container>
  );
};

export default Events;
