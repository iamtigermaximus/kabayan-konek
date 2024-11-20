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

const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;

const FilterSelect = styled.select`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ProductList = styled.div`
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

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ProductTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #2c3e50;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

interface PageButtonProps {
  $isActive: boolean;
}

const PageButton = styled.button<PageButtonProps>`
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

const MarketPlace = () => {
  const [category, setCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const products = [
    {
      id: 1,
      title: 'Smartphone',
      image: 'https://via.placeholder.com/500x500.png?text=Smartphone',
      price: '$299.99',
      description: 'A high-quality smartphone with great features.',
      category: 'electronics',
    },
    {
      id: 2,
      title: 'Sneakers',
      image: 'https://via.placeholder.com/500x500.png?text=Sneakers',
      price: '$89.99',
      description: 'Comfortable and stylish sneakers for all-day wear.',
      category: 'fashion',
    },
    {
      id: 3,
      title: 'Laptop',
      image: 'https://via.placeholder.com/500x500.png?text=Laptop',
      price: '$999.99',
      description: 'A powerful laptop for work and play.',
      category: 'electronics',
    },
    {
      id: 4,
      title: 'Coffee Maker',
      image: 'https://via.placeholder.com/500x500.png?text=Coffee+Maker',
      price: '$49.99',
      description: 'Brew your favorite coffee with ease.',
      category: 'home',
    },
    {
      id: 5,
      title: 'Burger Meal',
      image: 'https://via.placeholder.com/500x500.png?text=Burger+Meal',
      price: '$9.99',
      description: 'A delicious burger with fries and a drink.',
      category: 'food',
    },
    {
      id: 6,
      title: 'Pizza',
      image: 'https://via.placeholder.com/500x500.png?text=Pizza',
      price: '$12.99',
      description: 'Fresh pizza with your favorite toppings.',
      category: 'food',
    },
    {
      id: 7,
      title: 'Sushi Set',
      image: 'https://via.placeholder.com/500x500.png?text=Sushi+Set',
      price: '$19.99',
      description: 'A set of fresh sushi rolls served with soy sauce.',
      category: 'food',
    },
    {
      id: 8,
      title: 'Pasta Dish',
      image: 'https://via.placeholder.com/500x500.png?text=Pasta+Dish',
      price: '$14.99',
      description: 'A creamy pasta dish with chicken and vegetables.',
      category: 'food',
    },
    {
      id: 9,
      title: 'Adobo Meal',
      image: 'https://via.placeholder.com/500x500.png?text=Adobo+Meal',
      price: '$10.99',
      description:
        'A savory Filipino classic made with marinated pork or chicken in a soy sauce, vinegar, and garlic sauce.',
      category: 'food',
    },
    {
      id: 10,
      title: 'Sinigang Set',
      image: 'https://via.placeholder.com/500x500.png?text=Sinigang+Set',
      price: '$12.99',
      description:
        'A tangy Filipino soup made with tamarind, vegetables, and your choice of pork, shrimp, or fish.',
      category: 'food',
    },
    {
      id: 11,
      title: 'Lechon Kawali',
      image: 'https://via.placeholder.com/500x500.png?text=Lechon+Kawali',
      price: '$13.99',
      description:
        'Crispy deep-fried pork belly, a Filipino delicacy, served with liver sauce or vinegar.',
      category: 'food',
    },
    {
      id: 12,
      title: 'Pancit Bihon',
      image: 'https://via.placeholder.com/500x500.png?text=Pancit+Bihon',
      price: '$8.99',
      description:
        'Stir-fried rice noodles with vegetables, chicken, and shrimp, a popular Filipino dish.',
      category: 'food',
    },
    {
      id: 13,
      title: 'Laing',
      image: 'https://via.placeholder.com/500x500.png?text=Laing',
      price: '$9.49',
      description:
        'A spicy Bicolano dish made with dried taro leaves cooked in coconut milk and chili.',
      category: 'food',
    },
    {
      id: 14,
      title: 'Bicol Express',
      image: 'https://via.placeholder.com/500x500.png?text=Bicol+Express',
      price: '$11.49',
      description:
        'A creamy, spicy Filipino dish made with pork, shrimp, and chili peppers cooked in coconut milk.',
      category: 'food',
    },
  ];

  //  Filter products by selected category
  const filteredProducts =
    category === 'all'
      ? products
      : products.filter((product) => product.category === category);

  // Paginate the filtered products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //  Calculate total number of pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Pagination button click handler
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>MARKET PLACE</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        <FilterSection>
          <div>
            <FilterLabel>Category:</FilterLabel>
            <FilterSelect
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="food">Food</option>
            </FilterSelect>
          </div>
        </FilterSection>

        <ProductList>
          {currentProducts.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductCard>
          ))}
        </ProductList>

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

export default MarketPlace;
