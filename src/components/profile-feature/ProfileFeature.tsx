'use client';
import styled from 'styled-components';
import { breakpoints as bp } from '../../utils/layout';

import KabayanImage1 from '../../assets/pexels-filipina.jpg';
import KabayanImage2 from '../../assets/pexels-filipina2.jpg';
import KabayanImage3 from '../../assets/pexels-filipino1.jpg';
import KabayanImage4 from '../../assets/pexels-filipino2.jpg';

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

const ProfileFeature = () => {
  const items = [
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
      image: KabayanImage2,
      article:
        'Maria Santos, a young entrepreneur from Manila, is revolutionizing the fashion industry with her sustainable clothing line. Using eco-friendly materials, her brand highlights Filipino craftsmanship while promoting environmental awareness.',
    },
    {
      id: 3,
      title: 'Filipino Scientist Breaks Ground in Renewable Energy',
      image: KabayanImage3,
      article:
        'Dr. Ricardo Reyes, a Filipino scientist, has developed a groundbreaking solar panel technology that is more efficient and affordable. His innovation has the potential to bring renewable energy to remote areas across the Philippines.',
    },
    {
      id: 4,
      title: 'OFW Launches Community Project for Education',
      image: KabayanImage4,
      article:
        'After years of working abroad, Aling Nena returned to her hometown to establish a community project aimed at providing free education to underprivileged children. Her dedication has inspired many to contribute to the cause.',
    },
    {
      id: 5,
      title: 'Filipino Artist Exhibits Masterpieces in Europe',
      image: KabayanImage1,
      article:
        'Renowned painter Carlos Mangubat recently showcased his artwork in a European gallery, earning praise for his vibrant depictions of Filipino culture. His works celebrate the resilience and beauty of the Filipino spirit.',
    },
    {
      id: 6,
      title: 'Pinoy Athlete Wins Gold in International Sports Event',
      image: KabayanImage2,
      article:
        'Mark Velasco brought pride to the Philippines by winning gold in the international athletics championship, showcasing exceptional skill and determination.',
    },
    {
      id: 7,
      title: 'Filipino Teacher Honored for Excellence in Education',
      image: KabayanImage3,
      article:
        'Teacher Marites Castillo received global recognition for her innovative teaching methods, which have transformed education in rural areas of the Philippines.',
    },
    {
      id: 8,
      title: 'Filipino Innovator Develops Smart Farming Technology',
      image: KabayanImage4,
      article:
        'Engineer Lorenzo Villanueva has developed a smart farming system that helps farmers optimize yield while reducing environmental impact.',
    },
    {
      id: 9,
      title: 'Filipino Director Wins International Film Festival Award',
      image: KabayanImage1,
      article:
        'Director Angelica Cruz won Best Director at an international film festival for her moving documentary on Filipino migrant workers.',
    },
    {
      id: 10,
      title: 'Filipino Activist Advocates for Climate Change Awareness',
      image: KabayanImage2,
      article:
        'Environmental activist Gina Lopez has been leading campaigns to raise awareness about climate change and sustainable living in the Philippines.',
    },
    {
      id: 11,
      title: 'Young Filipino Coder Develops App for Disaster Preparedness',
      image: KabayanImage1,
      article:
        '15-year-old programmer Kevin Bautista created a disaster preparedness app that provides real-time updates and resources during emergencies.',
    },
    {
      id: 12,
      title: 'Filipino Doctor Pioneers Breakthrough in Medical Research',
      image: KabayanImage3,
      article:
        'Dr. Andrea Santos has made groundbreaking discoveries in cancer research, giving hope to millions of patients worldwide.',
    },
    {
      id: 13,
      title: 'Filipino Architect Designs Sustainable Urban Spaces',
      image: KabayanImage4,
      article:
        'Architect Leo Alonzo is gaining recognition for his eco-friendly urban designs, which prioritize sustainability and community well-being.',
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
      <title>KABAYAN SPOTLIGHT | kabayankonek</title>

      <DividerContainer>
        <DividerLine />
        <DividerLabel>KABAYAN SPOTLIGHT</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <FeaturesSectionContainer>
        {displayedItems.map((profile) => (
          <FeaturesCard key={profile.id}>
            <FeaturesImage src={profile.image} alt={profile.title} priority />
            <FeaturesTitleContainer>
              <FeaturesTitle>{profile.title} </FeaturesTitle>
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

export default ProfileFeature;
