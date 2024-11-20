'use client';
import styled from 'styled-components';
import { breakpoints as bp } from '../../utils/layout';
import FeatureImage1 from '../../assets/pexels-elevate-1267320.jpg';
import FeatureImage2 from '../../assets/pexels-pixabay-258154.jpg';
import FeatureImage3 from '../../assets/pexels-tapio-haaja-1214336-2311602.jpg';
import KabayanImage1 from '../../assets/pexels-filipina.jpg';

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

const SectionContainer = styled.section`
  padding: 10px;
  /* border: 1px solid red; */

  @media (min-width: ${bp.md}) {
    padding: 20px 50px;
  }
`;

const ItemsContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: ${bp.md}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${bp.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Item = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #e4e4e4;
  border-radius: 8px;
  aspect-ratio: 16/9;
  height: auto;

  @media (min-width: ${bp.lg}) {
    aspect-ratio: 9/10;
  }
`;

const ItemImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const ItemTitle = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;

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
    { id: 1, title: 'Item Title 1', image: FeatureImage1 },
    { id: 2, title: 'Item Title 2', image: FeatureImage2 },
    { id: 3, title: 'Item Title 3', image: FeatureImage3 },
    { id: 4, title: 'Item Title 4', image: KabayanImage1 },
    { id: 5, title: 'Item Title 5', image: FeatureImage2 },
    { id: 6, title: 'Item Title 6', image: FeatureImage3 },
    { id: 7, title: 'Item Title 7', image: FeatureImage1 },
    { id: 8, title: 'Item Title 8', image: KabayanImage1 },
    { id: 9, title: 'Item Title 9', image: FeatureImage3 },
    { id: 10, title: 'Item Title 10', image: FeatureImage3 },
    { id: 11, title: 'Item Title 11', image: FeatureImage1 },
    { id: 12, title: 'Item Title 12', image: KabayanImage1 },
    { id: 13, title: 'Item Title 13', image: FeatureImage3 },
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
      <SectionContainer>
        <ItemsContainer>
          {displayedItems.map((item) => (
            <Item key={item.id}>
              <ItemImage
                src={item.image}
                alt={item.title}
                priority
                fill
                style={{ objectFit: 'cover' }}
              />
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))}
        </ItemsContainer>
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

export default Lifestyle;
