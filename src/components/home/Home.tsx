'use client';
import styled from 'styled-components';
import { breakpoints as bp } from '../../utils/layout';
import FeatureImage1 from '../../assets/pexels-elevate-1267320.jpg';
import FeatureImage2 from '../../assets/pexels-pixabay-258154.jpg';
import FeatureImage3 from '../../assets/pexels-tapio-haaja-1214336-2311602.jpg';
import KabayanImage1 from '../../assets/pexels-filipina.jpg';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  address: string;
  image: string | null | StaticImageData;
}

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
    grid-template-columns: 1fr 1fr;
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

const FeaturesSectionContainer = styled.section`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  z-index: 10;

  @media (min-width: ${bp.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const FeaturesCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeaturesImage = styled(Image)`
  width: 100%;
  /* height: auto; */
  border-radius: 8px;
  margin-bottom: 15px;
  height: 100%;
  object-fit: cover;
  min-height: 300px;
  max-height: 350px;
`;

const FeaturesTitleContainer = styled.div`
  width: 100%;
  padding: 5px;
`;

const FeaturesTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #494848;

  @media (min-width: ${bp.md}) {
    font-size: 1.25rem;
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

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`;

const EventImage = styled(Image)`
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;

  @media (min-width: ${bp.md}) {
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

const NewsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NewsItem = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
  display: flex;
  gap: 15px;
  align-items: flex-start;

  &:last-child {
    border-bottom: none;
  }
`;

const NewsContent = styled.div`
  flex: 1;
`;

const NewsHeadline = styled.h2`
  font-size: 1.25rem;
  margin: 0 0 10px;
  color: #636363;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NewsSummary = styled.p`
  margin: 0 0 10px;
  color: #666;
  font-size: 0.9rem;
`;

const NewsSource = styled.span`
  font-size: 0.8rem;
  color: #999;
`;

const NewsDate = styled.span`
  font-size: 0.85rem;
  color: #888;
  display: block;
  margin-top: 5px;
`;

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

  const newsData = [
    {
      id: 1,
      title: 'Finland Tightens Immigration Policies Amid Increased Arrivals',
      summary:
        'The Finnish government has announced new immigration regulations in response to the rise in asylum seekers and work-based immigration.',
      source: 'Helsinki Times',
      url: 'https://www.helsinkitimes.fi/',
      date: '2024-11-20',
    },
    {
      id: 2,
      title:
        'Study Finds Finland’s Immigrant Population Contributes Billions to Economy',
      summary:
        'A recent report highlights the growing importance of immigrants in Finland’s economy, contributing significantly to the workforce and tax revenue.',
      source: 'Yle News',
      url: 'https://yle.fi/',
      date: '2024-11-19',
    },
    {
      id: 3,
      title: 'Record Number of Immigrants Settle in Finland in 2024',
      summary:
        '2024 saw an unprecedented number of people moving to Finland, with a large percentage coming from neighboring countries and beyond.',
      source: 'Finnish News Agency',
      url: 'https://www.savonsanomat.fi/',
      date: '2024-11-18',
    },
    {
      id: 4,
      title:
        'Finnish Government Launches New Integration Programs for Immigrants',
      summary:
        'The Finnish government is investing heavily in integration programs to help immigrants better assimilate into society, offering language courses and job opportunities.',
      source: 'Helsinki Times',
      url: 'https://www.helsinkitimes.fi/',
      date: '2024-11-17',
    },
    {
      id: 5,
      title:
        'Immigration Debate Heats Up in Finland as Parliament Discusses Policy Changes',
      summary:
        'A heated debate has emerged in Finland’s parliament regarding potential changes to the country’s immigration policies, with some advocating for stricter controls.',
      source: 'YLE News',
      url: 'https://yle.fi/',
      date: '2024-11-16',
    },
  ];

  const lifestyleData = [
    {
      id: 1,
      image: FeatureImage1,
      title: '10 Tips for a Healthier Lifestyle',
      article:
        "Living a healthy lifestyle doesn't have to be complicated. Start with small changes like drinking more water, incorporating exercise into your daily routine, and eating balanced meals. Over time, these small habits can lead to big results.",
    },
    {
      id: 2,
      image: FeatureImage2,
      title: 'The Ultimate Guide to Minimalist Living',
      article:
        'Minimalist living is about decluttering your life and focusing on what truly matters. By reducing unnecessary possessions and commitments, you can find greater clarity, peace, and happiness in your daily life.',
    },
    {
      id: 3,
      image: FeatureImage3,
      title: 'Top 5 Travel Destinations for 2024',
      article:
        'Looking to explore the world in 2024? Check out these top travel destinations: Japan for its cherry blossoms, Greece for its historic beauty, Iceland for its stunning landscapes, New Zealand for adventure, and Bali for relaxation.',
    },
  ];

  const kabayanData = [
    {
      id: 1,
      title: 'Filipino Chef Wins International Culinary Award',
      image: KabayanImage1,
      article:
        'Chef Juan Dela Cruz has made history by winning the prestigious International Culinary Award for his innovative take on Filipino cuisine. His dishes, inspired by traditional flavors, have captivated the global culinary scene.',
    },
    {
      id: 2,
      title: 'Pinay Entrepreneur Builds Sustainable Fashion Brand',
      image: KabayanImage1,
      article:
        'Maria Santos, a young entrepreneur from Manila, is revolutionizing the fashion industry with her sustainable clothing line. Using eco-friendly materials, her brand highlights Filipino craftsmanship while promoting environmental awareness.',
    },
    {
      id: 3,
      title: 'Filipino Scientist Breaks Ground in Renewable Energy',
      image: KabayanImage1,
      article:
        'Dr. Ricardo Reyes, a Filipino scientist, has developed a groundbreaking solar panel technology that is more efficient and affordable. His innovation has the potential to bring renewable energy to remote areas across the Philippines.',
    },
  ];

  return (
    <Container>
      <title>HOME | kabayankonek</title>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>FEATURE</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <FeaturesSectionContainer>
        {lifestyleData.map((lifestyle, index) => (
          <FeaturesCard key={lifestyle.id}>
            <FeaturesImage
              src={
                lifestyle.image ||
                placeholderImages[index % placeholderImages.length]
              }
              alt={lifestyle.title}
              priority
            />
            <FeaturesTitleContainer>
              <FeaturesTitle>{lifestyle.title}</FeaturesTitle>
            </FeaturesTitleContainer>
          </FeaturesCard>
        ))}
      </FeaturesSectionContainer>
      <ShowMoreButtonContainer>
        <ShowMoreButtonLink href="/lifestyle">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </ShowMoreButtonContainer>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>KABAYAN SPOTLIGHT</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <FeaturesSectionContainer>
        {kabayanData.map((profile, index) => (
          <FeaturesCard key={profile.id}>
            <FeaturesImage
              src={
                profile.image ||
                placeholderImages[index % placeholderImages.length]
              }
              alt={profile.title}
              priority
            />
            <FeaturesTitleContainer>
              <FeaturesTitle>{profile.title}</FeaturesTitle>
            </FeaturesTitleContainer>
          </FeaturesCard>
        ))}
      </FeaturesSectionContainer>
      <ShowMoreButtonContainer>
        <ShowMoreButtonLink href="/profile">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </ShowMoreButtonContainer>
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
        <NewsList>
          {newsData.map((news) => (
            <NewsItem key={news.id}>
              <NewsContent>
                <NewsHeadline>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </NewsHeadline>
                <NewsSummary>{news.summary}</NewsSummary>
                <NewsDate>Published: {news.date}</NewsDate>
                <NewsSource>Source: {news.source}</NewsSource>
              </NewsContent>
            </NewsItem>
          ))}
        </NewsList>
      </SectionContainer>
      <ShowMoreButtonLink href="/news">
        <ShowMoreButton>Show More</ShowMoreButton>
      </ShowMoreButtonLink>
    </Container>
  );
};

export default Home;
