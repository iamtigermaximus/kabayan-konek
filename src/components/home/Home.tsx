'use client';
import styled from 'styled-components';
import { breakpoints as bp } from '../../utils/layout';
import FeatureImage1 from '../../assets/pexels-elevate-1267320.jpg';
import FeatureImage2 from '../../assets/pexels-pixabay-258154.jpg';
import FeatureImage3 from '../../assets/pexels-tapio-haaja-1214336-2311602.jpg';
import KabayanImage1 from '../../assets/pexels-filipina.jpg';
import Link from 'next/link';

import Image from 'next/image';

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

  @media (min-width: ${bp.md}) {
    padding: 20px 50px;
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

const ShowMoreButtonLink = styled(Link)`
  text-decoration: none;
`;

const ShowMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: tomato;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #e64a19;
  }

  &:focus {
    outline: none;
  }
`;

const Home = () => {
  return (
    <Container>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>FEATURE</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        <ItemsContainer>
          <Item>
            <ItemImage
              src={FeatureImage1}
              alt="Item 1"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />
            <ItemTitle>Item Title 1</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={FeatureImage2}
              alt="Item 2"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 2</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={FeatureImage3}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 3</ItemTitle>
          </Item>
        </ItemsContainer>
        <ShowMoreButtonLink href="/lifestyle">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </SectionContainer>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>KABAYAN SPOTLIGHT</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        <ItemsContainer>
          <Item>
            <ItemImage
              src={KabayanImage1}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 1</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={KabayanImage1}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 2</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={KabayanImage1}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 3</ItemTitle>
          </Item>
        </ItemsContainer>
        <ShowMoreButtonLink href="/profile">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </SectionContainer>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>EVENTS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        <ItemsContainer>
          <Item>
            <ItemImage
              src={FeatureImage3}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 1</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={FeatureImage3}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 2</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={FeatureImage3}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 3</ItemTitle>
          </Item>
        </ItemsContainer>
        <ShowMoreButtonLink href="/events">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </SectionContainer>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>LATEST NEWS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        <ItemsContainer>
          <Item>
            <ItemImage
              src={FeatureImage3}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 1</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={FeatureImage3}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 2</ItemTitle>
          </Item>
          <Item>
            <ItemImage
              src={FeatureImage3}
              alt="Item 3"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />{' '}
            <ItemTitle>Item Title 3</ItemTitle>
          </Item>
        </ItemsContainer>
        <ShowMoreButtonLink href="/news">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </SectionContainer>
    </Container>
  );
};

export default Home;
