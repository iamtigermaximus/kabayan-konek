'use client';
import React from 'react';
import {
  Container,
  DividerContainer,
  DividerLine,
  DividerLabel,
  SectionContainer,
  NewsList,
  NewsItem,
  NewsContent,
  NewsHeadline,
  NewsSummary,
  NewsDate,
  NewsSource,
} from './News.styles';

const News = () => {
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

  return (
    <Container>
      <title>NEWS | kabayankonek</title>

      <DividerContainer>
        <DividerLine />
        <DividerLabel>NEWS</DividerLabel>
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
    </Container>
  );
};

export default News;
