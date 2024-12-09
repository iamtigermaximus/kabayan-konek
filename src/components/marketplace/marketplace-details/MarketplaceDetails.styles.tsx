import styled from 'styled-components';
import { breakpoints as bp } from '@/utils/layout';
import Image from 'next/image';

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

export const RelatedProductTitle = styled.h3`
  font-size: 0.75rem;
`;

export const RelatedProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #2c3e50;
`;

export const RelatedProductDescription = styled.div`
  font-size: 0.7rem;
  color: #7f8c8d;
  width: 100%;
`;

export const ProductDetailContainer = styled.div`
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

export const ProductImageContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
  height: 100%;
  /* object-fit: cover; */
  object-fit: contain;
  min-height: 300px;
  max-height: 350px;
`;
export const ProductDetailTitleContainer = styled.div`
  max-width: 800px;
  margin-top: 30px;
`;

export const Title = styled.h1`
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

export const Content = styled.div`
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
  cursor: pointer;

  &:hover {
    background-color: rgb(246, 68, 37);
  }

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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: #007bff;
  /* background-color: #520668; */
  color: white;
  font-size: 1rem;
  padding: 10px;
  margin: 5px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: tomato;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 0.75rem;
  cursor: pointer;
`;

export const ModalHeading = styled.h3`
  width: 100%;
  font-size: 1.25rem;
`;

export const ProductGallery = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 10px 0;
`;

export const GalleryImageContainer = styled.div`
  /* border: 1px solid red; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const GalleryImage = styled(Image)`
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
`;
