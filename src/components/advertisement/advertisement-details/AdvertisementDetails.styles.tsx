import styled from 'styled-components';
import { breakpoints as bp } from '@/utils/layout';
import Image from 'next/image';

export const AdvertisementDetailContainer = styled.div`
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

export const AdvertisementImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// export const AdvertisementImage = styled(Image)`
//   width: 100%;
//   height: auto;
//   border-radius: 8px;
//   margin-bottom: 15px;
//   height: 100%;
//   /* object-fit: cover; */
//   object-fit: contain cover;
//   min-height: 300px;
//   max-height: 350px;
// `;

export const AdvertisementImage = styled(Image)`
  width: 250px;
  height: 250px;
  object-fit: contain;

  @media (min-width: ${bp.md}) {
    width: 500px;
    height: 500px;
  }
`;

export const AdvertisementDetailTitleContainer = styled.div`
  max-width: 800px;
  margin-top: 30px;
`;

export const AdvertisementTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;

  @media (min-width: ${bp.md}) {
    font-size: 2.5rem;
  }
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

  &:hover {
    background-color: rgb(246, 68, 37);
  }

  @media (min-width: ${bp.md}) {
    font-size: 1.5rem;
  }
`;

export const BasicAdInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 10px;
  justify-content: flex-start;
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
