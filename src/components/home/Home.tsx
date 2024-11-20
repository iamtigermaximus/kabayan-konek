'use client';
import styled from 'styled-components';
import { breakpoints as bp } from '../../utils/layout';
import FeatureImage1 from '../../assets/pexels-elevate-1267320.jpg';
import FeatureImage2 from '../../assets/pexels-pixabay-258154.jpg';
import FeatureImage3 from '../../assets/pexels-tapio-haaja-1214336-2311602.jpg';
import KabayanImage1 from '../../assets/pexels-filipina.jpg';
import Link from 'next/link';

import Image, { StaticImageData } from 'next/image';

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

const EventsSectionContainer = styled.section`
  padding: 10px;
  display: grid; 
  grid-template-columns: 1fr; 
  gap: 20px;

  @media (min-width: ${bp.md}) {
    grid-template-columns: 1fr 1fr; /
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
  /* position: absolute; */
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

const ItemsContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: ${bp.md}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${bp.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Item = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #e4e4e4;
  border-radius: 8px;
  aspect-ratio: 16/9;
  height: auto;

  @media (min-width: ${bp.lg}) {
    aspect-ratio: 9/10;
  }
`;

const ItemImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const ItemTitle = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;

  @media (min-width: ${bp.md}) {
    font-size: 1.25rem;
  }
`;

const ShowMoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShowMoreButtonLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShowMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: tomato;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #e64a19;
  }

  &:focus {
    outline: none;
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

interface Event {
  id: number;
  name: string;
  description: string;
  date: string; // Date as a string
  time: string;
  address: string;
  image: string | null | StaticImageData;
}

const Home = () => {
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
      <DividerContainer>
        <DividerLine />
        <DividerLabel>FEATURE</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        <ItemsContainer>
          <Item>
            <ItemImage
              src={FeatureImage1}
              alt="Item 1"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />
            <ItemTitle>Item Title 1</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={FeatureImage2}
              alt="Item 2"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 2</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={FeatureImage3}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 3</ItemTitle>
          </Item>
        </ItemsContainer>
        <ShowMoreButtonLink href="/lifestyle">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </SectionContainer>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>KABAYAN SPOTLIGHT</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        <ItemsContainer>
          <Item>
            <ItemImage
              src={KabayanImage1}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 1</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={KabayanImage1}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 2</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={KabayanImage1}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 3</ItemTitle>
          </Item>
        </ItemsContainer>
        <ShowMoreButtonLink href="/profile">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </SectionContainer>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>EVENTS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <EventsSectionContainer>
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
      </EventsSectionContainer>
      <ShowMoreButtonContainer>
        <ShowMoreButtonLink href="/events">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </ShowMoreButtonContainer>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>LATEST NEWS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        <ItemsContainer>
          <Item>
            <ItemImage
              src={FeatureImage3}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 1</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={FeatureImage3}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 2</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={FeatureImage3}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 3</ItemTitle>
          </Item>
        </ItemsContainer>
        <ShowMoreButtonLink href="/news">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </SectionContainer>
    </Container>
  );
};

export default Home;
