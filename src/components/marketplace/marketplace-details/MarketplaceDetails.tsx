'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';
import styled from 'styled-components';
import { breakpoints as bp } from '@/utils/layout';

interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  contactEmail: string;
  contactPhone: string;
  imageUrl?: string | null;
}

const ProductDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    flex-direction: column;
  }
`;

const ProductImageContainer = styled.div`
  display: flex;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  /* height: auto; */
  border-radius: 8px;
  margin-bottom: 15px;
  height: 100%;
  object-fit: cover;
  min-height: 300px;
  max-height: 350px;
`;
const ProductDetailTitleContainer = styled.div`
  max-width: 800px;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;

  @media (min-width: ${bp.md}) {
    font-size: 2.5rem;
  }
`;

export const BasicProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 10px;
  justify-content: flex-start;
`;

export const ProductTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
`;

const Content = styled.div`
  font-size: 1rem;
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
  }
`;

export const MessageButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* padding: 10px 0;
  border: 1px solid green; */
`;

export const MessageButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: tomato;
  color: white;
  font-size: 1rem;
  border-radius: 5px;

  @media (min-width: ${bp.md}) {
    font-size: 1.5rem;
  }
`;

const MarketplaceDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState<ProductProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      console.log('Fetching product with id:', id); // Log title
      fetch(`/api/marketplace/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch product');
          }
          return res.json();
        })
        .then((data) => {
          console.log('Fetched product:', data); // Log data from the API
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error:', err); // Log any errors
          setError(err.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }
  const handleBackButton = () => router.back();

  return (
    <ProductDetailContainer>
      <div
        style={{
          alignItems: 'center',
          marginTop: '30px',
          marginBottom: '10px',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            fontSize: '30px',
          }}
          onClick={handleBackButton}
        >
          <IoMdArrowRoundBack />
        </div>
      </div>
      <ProductImageContainer>
        <ProductImage
          src={product.imageUrl || '/default-event.jpg'}
          alt={product.name}
          width={500} // Replace with appropriate width
          height={300} // Replace with appropriate height
          priority
        />
      </ProductImageContainer>
      <BasicProductInfoContainer>
        <ProductDetailTitleContainer>
          <Title>{product.name}</Title>
        </ProductDetailTitleContainer>
        <ProductPrice>€{product.price}</ProductPrice>
        <MessageButtonContainer>
          <MessageButton>Send a message</MessageButton>
        </MessageButtonContainer>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </Content>
      </BasicProductInfoContainer>
    </ProductDetailContainer>
  );
};

export default MarketplaceDetails;
