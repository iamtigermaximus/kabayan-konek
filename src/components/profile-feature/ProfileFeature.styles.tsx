import styled from 'styled-components';
import { breakpoints as bp } from '../../utils/layout';
import Image from 'next/image';

export const Container = styled.div`
  padding: 10px;
  height: 100%;
  z-index: 99;
  /* background-color: pink; */

  @media (min-width: ${bp.md}) {
    padding: 20px 50px;
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
  border-radius: 8px;
  margin-bottom: 15px;
  height: 100%;
  object-fit: cover;
  min-height: 300px;
  max-height: 350px;
`;

export const FeaturesTitleContainer = styled.div`
  width: 100%;
  padding: 5px;
`;

export const FeaturesTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #494848;

  @media (min-width: ${bp.md}) {
    font-size: 1.25rem;
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

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;

export const PrevButton = styled.button`
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

export const NextButton = styled.button`
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

export const PageInfo = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #555;
`;
