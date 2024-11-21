'use client';

import FeatureImage1 from '../../assets/pexels-elevate-1267320.jpg';
import FeatureImage2 from '../../assets/pexels-pixabay-258154.jpg';
import FeatureImage3 from '../../assets/pexels-tapio-haaja-1214336-2311602.jpg';
import KabayanImage1 from '../../assets/pexels-filipina.jpg';
import { StaticImageData } from 'next/image';
import {
  Container,
  DividerContainer,
  DividerLine,
  DividerLabel,
  FeaturesSectionContainer,
  FeaturesCard,
  FeaturesImage,
  FeaturesTitleContainer,
  FeaturesTitle,
  ShowMoreButtonContainer,
  ShowMoreButtonLink,
  ShowMoreButton,
  EventsSectionContainer,
  EventCard,
  EventImage,
  EventDetails,
  EventName,
  EventDescription,
  EventInfo,
  SectionContainer,
  NewsList,
  NewsItem,
  NewsContent,
  NewsHeadline,
  NewsSummary,
  NewsDate,
  NewsSource,
} from './Home.styles';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
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
