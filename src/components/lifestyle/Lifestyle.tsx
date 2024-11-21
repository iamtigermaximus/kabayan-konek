'use client';
import styled from 'styled-components';
import { breakpoints as bp } from '../../utils/layout';
import FeatureImage1 from '../../assets/pexels-elevate-1267320.jpg';
import FeatureImage2 from '../../assets/pexels-pixabay-258154.jpg';
import FeatureImage3 from '../../assets/pexels-tapio-haaja-1214336-2311602.jpg';

import Image from 'next/image';
import { useState } from 'react';

const Container = styled.div`
  padding: 10px;
  height: 100%;
  z-index: 99;
  /* background-color: pink; */

  @media (min-width: ${bp.md}) {
    padding: 20px 50px;
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;

const PrevButton = styled.button`
  padding: 8px 12px;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;

  &:disabled {
    background-color: #888;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: tomato;
  }
`;

const NextButton = styled.button`
  padding: 8px 12px;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;

  &:disabled {
    background-color: #888;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: tomato;
  }
`;

const PageInfo = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #555;
`;

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
