'use client';
import KabayanImage1 from '../../assets/pexels-filipina.jpg';
import KabayanImage2 from '../../assets/pexels-filipina2.jpg';
import KabayanImage3 from '../../assets/pexels-filipino1.jpg';
import KabayanImage4 from '../../assets/pexels-filipino2.jpg';
import { useState } from 'react';
import {
  Container,
  DividerContainer,
  DividerLabel,
  DividerLine,
  FeaturesCard,
  FeaturesImage,
  FeaturesSectionContainer,
  FeaturesTitle,
  FeaturesTitleContainer,
  NextButton,
  PageInfo,
  PaginationContainer,
  PrevButton,
} from './ProfileFeature.styles';

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
