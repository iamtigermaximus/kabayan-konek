'use client';

import React, { useState } from 'react';
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

const AdList = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const AdCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
  text-align: center;
`;

const AdImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const AdTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const AdDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button<{ $isActive: boolean }>`
  padding: 10px;
  margin: 0 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ $isActive }) => ($isActive ? 'tomato' : '#f9f9f9')};
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#2c3e50')};
  cursor: pointer;

  &:hover {
    background-color: tomato;
    color: #fff;
  }
`;

const Advertise = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of ads to show per page

  const ads = [
    {
      id: 1,
      title: 'Smartphone for Sale',
      image: 'https://via.placeholder.com/500x500.png?text=Smartphone',
      description: 'Brand new smartphone with great features.',
      category: 'product',
    },
    {
      id: 2,
      title: 'Affordable Web Design',
      image: 'https://via.placeholder.com/500x500.png?text=Web+Design',
      description:
        'Get your website designed professionally for a great price.',
      category: 'service',
    },
    {
      id: 3,
      title: 'House for Rent',
      image: 'https://via.placeholder.com/500x500.png?text=House+for+Rent',
      description: 'A beautiful house available for rent in a prime location.',
      category: 'property',
    },
    {
      id: 4,
      title: 'Bakery Service',
      image: 'https://via.placeholder.com/500x500.png?text=Bakery',
      description:
        'Fresh bread and pastries delivered to your door every morning.',
      category: 'service',
    },
    {
      id: 5,
      title: 'Used Car for Sale',
      image: 'https://via.placeholder.com/500x500.png?text=Car',
      description: 'A well-maintained used car at a discounted price.',
      category: 'product',
    },
    {
      id: 6,
      title: 'Tutoring Service',
      image: 'https://via.placeholder.com/500x500.png?text=Tutoring',
      description: 'Expert tutoring in various subjects for all levels.',
      category: 'service',
    },
    {
      id: 7,
      title: 'New Laptop for Sale',
      image: 'https://via.placeholder.com/500x500.png?text=Laptop',
      description:
        'Brand new laptop with the latest specs for your work and play.',
      category: 'product',
    },
    {
      id: 8,
      title: 'Apartment for Rent',
      image: 'https://via.placeholder.com/500x500.png?text=Apartment+for+Rent',
      description: 'Modern apartment for rent in a secure neighborhood.',
      category: 'property',
    },
    {
      id: 9,
      title: 'Gardening Services',
      image: 'https://via.placeholder.com/500x500.png?text=Gardening',
      description: 'Let us take care of your garden with our expert services.',
      category: 'service',
    },
    {
      id: 10,
      title: 'Event Planning',
      image: 'https://via.placeholder.com/500x500.png?text=Event+Planning',
      description:
        'Professional event planning for all occasions, big and small.',
      category: 'service',
    },
    {
      id: 11,
      title: 'New Furniture for Sale',
      image: 'https://via.placeholder.com/500x500.png?text=Furniture',
      description: 'Get modern furniture for your home at an affordable price.',
      category: 'product',
    },
    {
      id: 12,
      title: 'Business Consulting',
      image: 'https://via.placeholder.com/500x500.png?text=Consulting',
      description: 'Expert business consulting services to grow your brand.',
      category: 'service',
    },
    {
      id: 13,
      title: 'Handyman Services',
      image: 'https://via.placeholder.com/500x500.png?text=Handyman',
      description:
        'Affordable handyman services for home repairs and improvements.',
      category: 'service',
    },
    {
      id: 14,
      title: 'Travel Package Deal',
      image: 'https://via.placeholder.com/500x500.png?text=Travel',
      description: 'Get an amazing deal for your next vacation.',
      category: 'service',
    },
  ];

  //  Paginate the ads
  const indexOfLastAd = currentPage * itemsPerPage;
  const indexOfFirstAd = indexOfLastAd - itemsPerPage;
  const currentAds = ads.slice(indexOfFirstAd, indexOfLastAd);

  //  Calculate total number of pages
  const totalPages = Math.ceil(ads.length / itemsPerPage);

  //  Pagination button click handler
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>ADVERTISEMENTS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        <AdList>
          {currentAds.map((ad) => (
            <AdCard key={ad.id}>
              <AdImage src={ad.image} alt={ad.title} />
              <AdTitle>{ad.title}</AdTitle>
              <AdDescription>{ad.description}</AdDescription>
            </AdCard>
          ))}
        </AdList>

        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <PageButton
                key={pageNumber}
                $isActive={currentPage === pageNumber}
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </PageButton>
            )
          )}
        </Pagination>
      </SectionContainer>
    </Container>
  );
};

export default Advertise;
