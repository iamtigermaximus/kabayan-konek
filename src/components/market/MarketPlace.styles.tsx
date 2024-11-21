import styled from 'styled-components';
import { breakpoints as bp } from '../../utils/layout';

export const Container = styled.div`
  padding: 10px;
  height: 100%;
  z-index: 99;

  @media (min-width: ${bp.md}) {
    padding: 20px 50px;
  }
`;

export const SectionContainer = styled.section`
  padding: 10px;

  @media (min-width: ${bp.lg}) {
    padding: 20px 100px;
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

export const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;

export const FilterSelect = styled.select`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const ProductList = styled.div`
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

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const ProductTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #2c3e50;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

interface PageButtonProps {
  $isActive: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
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
