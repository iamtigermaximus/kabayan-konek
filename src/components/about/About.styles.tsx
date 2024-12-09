import styled from 'styled-components';
import { breakpoints as bp } from '../../utils/layout';

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

  @media (min-width: ${bp.lg}) {
    padding: 20px 200px;
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

export const Section = styled.section`
  margin-bottom: 30px;
  color: #636363;
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 15px;

  @media (min-width: ${bp.md}) {
    font-size: 1.75rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 0.75rem;
  line-height: 1.6;
  color: #333;

  @media (min-width: ${bp.md}) {
    font-size: 1rem;
  }
`;

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 0.75rem;

  @media (min-width: ${bp.md}) {
    font-size: 1rem;
  }
`;
