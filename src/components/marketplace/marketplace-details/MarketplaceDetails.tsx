'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';
import styled from 'styled-components';
import { breakpoints as bp } from '@/utils/layout';
import DefaultImage from '@/assets/NoImage2.jpg';
import { StyledLink } from '../Marketplace.styles';
import Link from 'next/link';

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

export const RelatedProductList = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  @media (min-width: ${bp.md}) {
    gap: 20px;
  }

  @media (min-width: ${bp.lg}) {
    gap: 30px;
  }
`;

export const RelatedProductCard = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #f9f9f9;
  text-align: center;

  @media (min-width: ${bp.md}) {
    padding: 20px;
  }
`;

export const RelatedProductImage = styled(Image)`
  width: 100%; /* Fills the card width */
  object-fit: cover;
`;

export const RelatedProductItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  text-overflow: ellipsis;
  white-space: wrap;
  padding: 5px 0;
  min-height: 30px;
  max-height: 60px;
`;

export const RelatedProductTitle = styled.div`
  font-size: 0.75rem;
`;

export const RelatedProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #2c3e50;
`;

export const RelatedProductDescription = styled.p`
  font-size: 0.7rem;
  color: #7f8c8d;
  width: 100%;
`;

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
export const SectionContainer = styled.section`
  padding: 10px;

  @media (min-width: ${bp.lg}) {
    padding: 20px;
  }
`;

const MarketplaceDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState<ProductProps | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductProps[]>([]);
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

      // Fetch related products from the same seller
      fetch(`/api/marketplace/${id}/productsBySeller`)
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch related products');
          return res.json();
        })
        .then((data) => {
          setRelatedProducts(data);
        })
        .catch((err) => {
          console.error('Error fetching related products:', err);
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
    <div>
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
            src={product.imageUrl || DefaultImage}
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

        {relatedProducts.length > 0 && (
          <SectionContainer>
            <div
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '20px',
              }}
            >
              Products from the same seller
            </div>
            <RelatedProductList>
              {relatedProducts.map((product) => (
                <RelatedProductCard key={product.id}>
                  <RelatedProductImage
                    src={product.imageUrl || DefaultImage}
                    alt={product.name}
                    width={150}
                    height={150}
                    priority
                  />
                  <BasicProductInfoContainer>
                    <RelatedProductItemContainer>
                      <RelatedProductPrice>
                        €{product.price}
                      </RelatedProductPrice>
                    </RelatedProductItemContainer>
                    <RelatedProductItemContainer>
                      <Link
                        href={`/marketplace/${product.id}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <RelatedProductTitle>
                          {product.name}
                        </RelatedProductTitle>
                      </Link>
                    </RelatedProductItemContainer>
                    <RelatedProductItemContainer>
                      <RelatedProductDescription>
                        {product.description.length > 100 ? (
                          <>
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  product.description.slice(0, 100) + '...',
                              }}
                            ></div>
                            <StyledLink href={`/marketplace/${product.id}`}>
                              <span
                                style={{ color: 'tomato', cursor: 'pointer' }}
                              >
                                Read More
                              </span>
                            </StyledLink>
                          </>
                        ) : (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: product.description,
                            }}
                          ></div>
                        )}
                      </RelatedProductDescription>
                    </RelatedProductItemContainer>
                  </BasicProductInfoContainer>
                </RelatedProductCard>
              ))}
            </RelatedProductList>
          </SectionContainer>
        )}
      </ProductDetailContainer>
      {/* Render Related Products */}
    </div>
  );
};

export default MarketplaceDetails;
