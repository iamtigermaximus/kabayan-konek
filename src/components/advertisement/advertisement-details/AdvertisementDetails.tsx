'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Image from 'next/image';
import styled from 'styled-components';
import { breakpoints as bp } from '@/utils/layout';
import DefaultImage from '@/assets/NoImage2.jpg';

interface AdvertisementProps {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const AdvertisementDetailContainer = styled.div`
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

const AdvertisementImageContainer = styled.div`
  display: flex;
`;

export const AdvertisementImage = styled(Image)`
  width: 100%;
  /* height: auto; */
  border-radius: 8px;
  margin-bottom: 15px;
  height: 100%;
  object-fit: cover;
  min-height: 300px;
  max-height: 350px;
`;

const AdvertisementDetailTitleContainer = styled.div`
  max-width: 800px;
  margin-top: 30px;
`;

const AdvertisementTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;

  @media (min-width: ${bp.md}) {
    font-size: 2.5rem;
  }
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

export const BasicAdInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 10px;
  justify-content: flex-start;
`;

const AdvertisementDetails = () => {
  const [advertisement, setAdvertisement] = useState<AdvertisementProps | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      console.log('Fetching advertisement with id:', id); // Log title
      fetch(`/api/advertisements/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch advertisement');
          }
          return res.json();
        })
        .then((data) => {
          console.log('Fetched kadvertisement:', data); // Log data from the API
          setAdvertisement(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error:', err);
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

  if (!advertisement) {
    return <div>Advertisement not found.</div>;
  }

  const handleBackButton = () => router.back();

  return (
    <AdvertisementDetailContainer>
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
      <AdvertisementImageContainer>
        <AdvertisementImage
          src={advertisement.imageUrl || DefaultImage}
          alt={advertisement.title}
          width={500} // Replace with appropriate width
          height={300} // Replace with appropriate height
          priority
        />
      </AdvertisementImageContainer>
      <BasicAdInfoContainer>
        <AdvertisementDetailTitleContainer>
          <AdvertisementTitle>{advertisement.title}</AdvertisementTitle>
        </AdvertisementDetailTitleContainer>
        <MessageButtonContainer>
          <MessageButton>Send a message</MessageButton>
        </MessageButtonContainer>
        <Content>
          <div
            dangerouslySetInnerHTML={{ __html: advertisement.description }}
          />
        </Content>
        {/* <h1>{advertisement.category}</h1> */}
      </BasicAdInfoContainer>
    </AdvertisementDetailContainer>
  );
};

export default AdvertisementDetails;
