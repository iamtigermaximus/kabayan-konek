'use client';

import FeatureImage1 from '../../assets/pexels-elevate-1267320.jpg';
import FeatureImage2 from '../../assets/pexels-pixabay-258154.jpg';
import FeatureImage3 from '../../assets/pexels-tapio-haaja-1214336-2311602.jpg';
import { useState } from 'react';
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
  PaginationContainer,
  PrevButton,
  PageInfo,
  NextButton,
} from './Lifestyle.styles';

const Lifestyle = () => {
  const items = [
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
    {
      id: 4,
      image: FeatureImage1,
      title: '10 Tips for a Healthier Lifestyle',
      article:
        "Living a healthy lifestyle doesn't have to be complicated. Start with small changes like drinking more water, incorporating exercise into your daily routine, and eating balanced meals. Over time, these small habits can lead to big results.",
    },
    {
      id: 5,
      image: FeatureImage2,
      title: 'The Ultimate Guide to Minimalist Living',
      article:
        'Minimalist living is about decluttering your life and focusing on what truly matters. By reducing unnecessary possessions and commitments, you can find greater clarity, peace, and happiness in your daily life.',
    },
    {
      id: 6,
      image: FeatureImage3,
      title: 'Top 5 Travel Destinations for 2024',
      article:
        'Looking to explore the world in 2024? Check out these top travel destinations: Japan for its cherry blossoms, Greece for its historic beauty, Iceland for its stunning landscapes, New Zealand for adventure, and Bali for relaxation.',
    },
    {
      id: 7,
      image: FeatureImage2,
      title: 'The Ultimate Guide to Minimalist Living',
      article:
        'Minimalist living is about decluttering your life and focusing on what truly matters. By reducing unnecessary possessions and commitments, you can find greater clarity, peace, and happiness in your daily life.',
    },
    {
      id: 8,
      image: FeatureImage3,
      title: 'Top 5 Travel Destinations for 2024',
      article:
        'Looking to explore the world in 2024? Check out these top travel destinations: Japan for its cherry blossoms, Greece for its historic beauty, Iceland for its stunning landscapes, New Zealand for adventure, and Bali for relaxation.',
    },
    {
      id: 9,
      image: FeatureImage1,
      title: '10 Tips for a Healthier Lifestyle',
      article:
        "Living a healthy lifestyle doesn't have to be complicated. Start with small changes like drinking more water, incorporating exercise into your daily routine, and eating balanced meals. Over time, these small habits can lead to big results.",
    },
    {
      id: 10,
      image: FeatureImage2,
      title: 'The Ultimate Guide to Minimalist Living',
      article:
        'Minimalist living is about decluttering your life and focusing on what truly matters. By reducing unnecessary possessions and commitments, you can find greater clarity, peace, and happiness in your daily life.',
    },
    {
      id: 11,
      image: FeatureImage3,
      title: 'Top 5 Travel Destinations for 2024',
      article:
        'Looking to explore the world in 2024? Check out these top travel destinations: Japan for its cherry blossoms, Greece for its historic beauty, Iceland for its stunning landscapes, New Zealand for adventure, and Bali for relaxation.',
    },
  ];
  const itemsPerPage = 6; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <Container>
      <title>LIFESTYLE | kabayankonek</title>

      <DividerContainer>
        <DividerLine />
        <DividerLabel>LIFESTYLE</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <FeaturesSectionContainer>
        {displayedItems.map((lifestyle) => (
          <FeaturesCard key={lifestyle.id}>
            <FeaturesImage
              src={lifestyle.image}
              alt={lifestyle.title}
              priority
            />
            <FeaturesTitleContainer>
              <FeaturesTitle>{lifestyle.title}</FeaturesTitle>
            </FeaturesTitleContainer>
          </FeaturesCard>
        ))}
      </FeaturesSectionContainer>
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

export default Lifestyle;
