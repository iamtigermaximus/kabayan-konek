'use client';
import styled from 'styled-components';
import { breakpoints as bp } from '../../utils/layout';
import Link from 'next/link';
import Image from 'next/image';

export const Container = styled.div`
  padding: 10px;
  height: 100%;
  z-index: 99;
  margin-top: 20px;

  @media (min-width: ${bp.md}) {
    padding: 20px 50px;
  }
`;

export const SectionContainer = styled.section`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: ${bp.md}) {
    padding: 20px 50px;
  }
`;

export const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const DividerLine = styled.hr`
  border: 0;
  border-top: 1px solid #b4b4b4;
  width: 100%;
  margin: 0;
  flex-grow: 1;
`;

export const DividerLabel = styled.span`
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

export const ShowMoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShowMoreButtonLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShowMoreButton = styled.button`
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

export const FeaturesSectionContainer = styled.section`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  z-index: 10;

  @media (min-width: ${bp.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FeaturesCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeaturesImage = styled(Image)`
  width: 100%;
  /* height: auto; */
  margin-bottom: 15px;
  height: 100%;
  object-fit: cover;
  min-height: 300px;
  max-height: 350px;
`;

export const FeaturesTitleContainer = styled.div`
  width: 100%;
  padding: 5px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.md}) {
    height: 100px;
  }
  @media (min-width: ${bp.lg}) {
    height: 80px;
  }
`;

export const FeaturesTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #494848;

  @media (min-width: ${bp.md}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 1rem;
  }
`;

export const EventsSectionContainer = styled.section`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    /* grid-template-columns: 1fr 1fr; */
  }

  @media (min-width: ${bp.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  /* border-radius: 8px; */
  padding: 15px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`;

export const EventImage = styled(Image)`
  width: 100%;
  max-width: 150px;
  height: auto;
  margin-bottom: 15px;

  @media (min-width: ${bp.md}) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const EventDetails = styled.div`
  /* flex: 1; */
`;

export const EventName = styled.div`
  margin: 0 0 10px;
  font-size: 1rem;
  color: #333;

  @media (min-width: ${bp.md}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${bp.xl}) {
    font-size: 1.25rem;
  }
`;

export const EventDescription = styled.div`
  margin: 10px 0;
  font-size: 0.75rem;
  color: #666;

  @media (min-width: ${bp.md}) {
    font-size: 1rem;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 0.75rem;
  }
  @media (min-width: ${bp.xl}) {
    font-size: 1.25rem;
  }
`;

export const EventDescriptionSpan = styled.span`
  color: tomato;
  cursor: 'pointer';
  font-size: 0.75rem;

  @media (min-width: ${bp.md}) {
    font-size: 1rem;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 0.75rem;
  }

  @media (min-width: ${bp.xl}) {
    font-size: 1.25rem;
  }
`;

export const BasicEventInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const EventInfo = styled.div`
  margin: 10px 0;
  font-size: 0.75rem;
  color: #444;

  span {
    font-weight: bold;
  }
  @media (min-width: ${bp.md}) {
    font-size: 1rem;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 0.75rem;
  }

  @media (min-width: ${bp.xl}) {
    font-size: 1.25rem;
  }
`;

export const NewsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NewsItem = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
  display: flex;
  gap: 15px;
  align-items: flex-start;

  &:last-child {
    border-bottom: none;
  }
`;

export const NewsContent = styled.div`
  flex: 1;
`;

export const NewsHeadline = styled.h2`
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

export const NewsSummary = styled.p`
  margin: 0 0 10px;
  color: #666;
  font-size: 0.9rem;
`;

export const NewsSource = styled.span`
  font-size: 0.8rem;
  color: #999;
`;

export const NewsDate = styled.span`
  font-size: 0.85rem;
  color: #888;
  display: block;
  margin-top: 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

export const EventsSectionBannerContainer = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  /* font-size: 1rem;
  line-height: 1.6;
  color: #555;

  p {
    margin-bottom: 15px;
  }

  h2,
  h3 {
    margin-top: 20px;
    font-size: 1.5rem;
    color: #333;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 20px 0;
  }

  blockquote {
    background: #f4f4f4;
    padding: 10px 20px;
    border-left: 5px solid #ccc;
    margin: 20px 0;
  } */

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }

  /* Headings */
  h1 {
    font-size: 2.25rem; /* 36px */
    font-weight: 700; /* Bold */
    margin-top: 20px;
    margin-bottom: 15px;
    color: #333;
  }

  h2 {
    font-size: 2rem; /* 32px */
    font-weight: 600; /* Semi-bold */
    margin-top: 20px;
    margin-bottom: 10px;
    color: #333;
  }

  h3 {
    font-size: 1.75rem; /* 28px */
    font-weight: 500; /* Medium */
    margin-top: 20px;
    margin-bottom: 10px;
    color: #333;
  }

  h4 {
    font-size: 1.5rem; /* 24px */
    font-weight: 400; /* Regular */
    margin-top: 20px;
    margin-bottom: 10px;
    color: #333;
  }

  .editor-heading h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
  }

  .editor-heading h2 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 0.65rem;
  }

  .editor-heading h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.6rem;
  }

  .editor-heading h4 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.55rem;
  }

  .editor-heading h5 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .editor-heading h6 {
    font-size: 0.875rem;
    font-weight: bold;
    margin-bottom: 0.45rem;
  }

  /* Paragraph */
  p {
    font-size: 1rem; /* 16px */
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 15px;
    color: #555;
  }

  /* Blockquote */
  blockquote {
    background: #f4f4f4;
    padding: 10px 20px;
    border-left: 5px solid #ccc;
    margin: 20px 0;
    font-style: italic;
  }

  /* Links */
  a {
    text-decoration: none;
    color: #007bff;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Additional Styles */
  code {
    font-family: 'Courier New', monospace;
    background-color: #f8f9fa;
    padding: 2px 4px;
    border-radius: 4px;
  }

  pre {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    overflow: auto;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 20px 0;
  }
`;
