'use client';
import React from 'react';
import styled from 'styled-components';
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

  @media (min-width: ${bp.lg}) {
    padding: 20px 100px;
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
