'use client';

import Link from 'next/link';
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
import { useEffect, useState } from 'react';
interface LifestyleArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string; // Optional
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface KabayanArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string; // Optional
  userId: string;
  createdAt: string;
  updatedAt: string;
}

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
interface NewsArticleProps {
  id: string;
  title: string;
  contentUrl: string;
  newsSummary: string;
  date: Date;
  source: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const Home = () => {
  const [lifestyleArticles, setLifestyleArticles] = useState<
    LifestyleArticle[]
  >([]);
  const [kabayanArticles, setKabayanArticles] = useState<KabayanArticle[]>([]);
  const [events, setEvents] = useState<EventProps[]>([]);
  const [newsArticles, setNewsArticles] = useState<NewsArticleProps[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/lifestyle');
      const data: LifestyleArticle[] = await response.json();
      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setLifestyleArticles(data);
    } catch (error) {
      console.error('Error fetching lifestyle articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchKabayanArticles = async () => {
    try {
      const response = await fetch('/api/profile');
      const data: KabayanArticle[] = await response.json();

      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setKabayanArticles(data);
    } catch (error) {
      console.error('Error fetching lifestyle articles:', error);
    }
  };

  useEffect(() => {
    fetchKabayanArticles();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data: EventProps[] = await response.json();

      data.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
      });

      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchNewsArticles = async () => {
    try {
      const response = await fetch('/api/news');
      const data: NewsArticleProps[] = await response.json();
      data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setNewsArticles(data);
    } catch (error) {
      console.error('Error fetching news articles:', error);
    }
  };

  useEffect(() => {
    fetchNewsArticles();
  }, []);

  return (
    <Container>
      <title>HOME | kabayankonek</title>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>FEATURE</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <FeaturesSectionContainer>
        {lifestyleArticles.slice(0, 6).map((lifestyle) => (
          <FeaturesCard key={lifestyle.id}>
            <FeaturesImage
              src={lifestyle.imageUrl || '/default-image.jpg'}
              alt={lifestyle.title}
              width={500} // Replace with appropriate width
              height={300} // Replace with appropriate height
              priority
            />
            <FeaturesTitleContainer>
              <Link href={`/lifestyle/${lifestyle.id}`} passHref>
                <FeaturesTitle>{lifestyle.title}</FeaturesTitle>
              </Link>
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
        {kabayanArticles.slice(0, 6).map((profile) => (
          <FeaturesCard key={profile.id}>
            <FeaturesImage
              src={profile.imageUrl || '/default-image.jpg'}
              alt={profile.title}
              width={500}
              height={300}
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
        {events.slice(0, 6).map((event) => (
          <EventCard key={event.id}>
            <EventImage
              src={event.imageUrl || '/default-event.jpg'}
              alt={event.title}
              width={150}
              height={150}
              priority
            />
            <EventDetails>
              <EventName>{event.title}</EventName>
              <EventDescription>{event.description}</EventDescription>
              <EventInfo>
                <span>Date:</span> {new Date(event.date).toLocaleDateString()}
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
          {newsArticles.slice(0, 10).map((news) => (
            <NewsItem key={news.id}>
              <NewsContent>
                <NewsHeadline>
                  <a
                    href={news.contentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {news.title}
                  </a>
                </NewsHeadline>
                <NewsSummary>{news.newsSummary}</NewsSummary>
                <NewsDate>
                  Published: {new Date(news.date).toLocaleDateString()}
                </NewsDate>
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
