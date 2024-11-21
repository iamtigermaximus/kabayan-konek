'use client';
import { StaticImageData } from 'next/image';
import FeatureImage1 from '../../assets/pexels-elevate-1267320.jpg';
import FeatureImage2 from '../../assets/pexels-pixabay-258154.jpg';
import FeatureImage3 from '../../assets/pexels-tapio-haaja-1214336-2311602.jpg';
import {
  Container,
  DividerContainer,
  DividerLabel,
  DividerLine,
  EventCard,
  EventDescription,
  EventDetails,
  EventImage,
  EventInfo,
  EventName,
  SectionContainer,
} from './Events.styles';

export interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
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
