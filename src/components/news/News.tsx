'use client';
import React, { useEffect, useState } from 'react';
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
  PaginationContainer,
  PrevButton,
  PageInfo,
  NextButton,
  CreateButtonContainer,
  CreateButton,
  ModalContainer,
  ModalContent,
  ModalContentTitle,
  ModalContentForm,
  FormItemContainer,
  InputLabel,
  Input,
  Textarea,
  SubmitButton,
  ModalCloseButton,
} from './News.styles';

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

const News = () => {
  // const newsData = [
  //   {
  //     id: 1,
  //     title: 'Finland Tightens Immigration Policies Amid Increased Arrivals',
  //     summary:
  //       'The Finnish government has announced new immigration regulations in response to the rise in asylum seekers and work-based immigration.',
  //     source: 'Helsinki Times',
  //     url: 'https://www.helsinkitimes.fi/',
  //     date: '2024-11-20',
  //   },
  //   {
  //     id: 2,
  //     title:
  //       'Study Finds Finland’s Immigrant Population Contributes Billions to Economy',
  //     summary:
  //       'A recent report highlights the growing importance of immigrants in Finland’s economy, contributing significantly to the workforce and tax revenue.',
  //     source: 'Yle News',
  //     url: 'https://yle.fi/',
  //     date: '2024-11-19',
  //   },
  //   {
  //     id: 3,
  //     title: 'Record Number of Immigrants Settle in Finland in 2024',
  //     summary:
  //       '2024 saw an unprecedented number of people moving to Finland, with a large percentage coming from neighboring countries and beyond.',
  //     source: 'Finnish News Agency',
  //     url: 'https://www.savonsanomat.fi/',
  //     date: '2024-11-18',
  //   },
  //   {
  //     id: 4,
  //     title:
  //       'Finnish Government Launches New Integration Programs for Immigrants',
  //     summary:
  //       'The Finnish government is investing heavily in integration programs to help immigrants better assimilate into society, offering language courses and job opportunities.',
  //     source: 'Helsinki Times',
  //     url: 'https://www.helsinkitimes.fi/',
  //     date: '2024-11-17',
  //   },
  //   {
  //     id: 5,
  //     title:
  //       'Immigration Debate Heats Up in Finland as Parliament Discusses Policy Changes',
  //     summary:
  //       'A heated debate has emerged in Finland’s parliament regarding potential changes to the country’s immigration policies, with some advocating for stricter controls.',
  //     source: 'YLE News',
  //     url: 'https://yle.fi/',
  //     date: '2024-11-16',
  //   },
  // ];

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [newsArticles, setNewsArticles] = useState<NewsArticleProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [contentUrl, setContentUrl] = useState('');
  const [date, setDate] = useState('');
  const [newsSummary, setNewsSummary] = useState('');
  const [source, setSource] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const itemsPerPage = 3;

  const fetchNewsArticles = async () => {
    try {
      const response = await fetch('/api/news');
      const data: NewsArticleProps[] = await response.json();
      setNewsArticles(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching news articles:', error);
    }
  };

  useEffect(() => {
    fetchNewsArticles();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = newsArticles.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!title || !contentUrl || !newsSummary || !date || !source) {
      alert('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }

    const newsArticleData = {
      title,
      contentUrl,
      newsSummary,
      date,
      source,
    };

    try {
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsArticleData),
      });

      const responseBody = await response.json();

      if (!response.ok) {
        console.error(
          'Error creating news article:',
          responseBody.error || 'Unknown error'
        );
        alert(responseBody.error || 'Error creating news articlet');
        return;
      }

      console.log('News article created!', responseBody);
      setIsModalOpen(false);
      fetchNewsArticles();
    } catch (error) {
      console.error('Error creating news article:', error);
      alert('Error creating event. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <title>NEWS | kabayankonek</title>

      <DividerContainer>
        <DividerLine />
        <DividerLabel>NEWS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <CreateButtonContainer>
        <CreateButton onClick={toggleModal}>CREATE NEWS ARTICLE</CreateButton>
      </CreateButtonContainer>

      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <ModalContentTitle>Create News Article</ModalContentTitle>
            <ModalContentForm onSubmit={handleSubmit}>
              <FormItemContainer>
                <InputLabel htmlFor="title">Title:</InputLabel>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </FormItemContainer>
              <FormItemContainer>
                <InputLabel htmlFor="contentUrl">Content URL:</InputLabel>
                <Input
                  id="contentUrl"
                  type="url"
                  value={contentUrl}
                  onChange={(e) => setContentUrl(e.target.value)}
                  required
                />
              </FormItemContainer>
              <FormItemContainer>
                <InputLabel htmlFor="newsSummary">Summary:</InputLabel>
                <Textarea
                  id="newsSummary"
                  value={newsSummary}
                  onChange={(e) => setNewsSummary(e.target.value)}
                  required
                />
              </FormItemContainer>
              <FormItemContainer>
                <InputLabel htmlFor="date">Date:</InputLabel>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </FormItemContainer>
              <FormItemContainer>
                <InputLabel htmlFor="source">Source:</InputLabel>
                <Input
                  id="source"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  required
                />
              </FormItemContainer>
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </SubmitButton>
              <ModalCloseButton onClick={toggleModal}>Close</ModalCloseButton>
            </ModalContentForm>
          </ModalContent>
        </ModalContainer>
      )}
      <SectionContainer>
        <NewsList>
          {displayedItems.map((news) => (
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
      <PaginationContainer>
        <PrevButton onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </PrevButton>
        <PageInfo>
          Page {currentPage} of {totalPages}
        </PageInfo>
        <NextButton onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </NextButton>
      </PaginationContainer>
    </Container>
  );
};

export default News;
