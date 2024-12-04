'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Image from 'next/image';
import styled from 'styled-components';
import { breakpoints as bp } from '@/utils/layout';
import DefaultImage from '@/assets/NoImage2.jpg';
import { useSession } from 'next-auth/react';

interface AdvertisementProps {
  id: string;
  title: string;
  description: string;
  category: string;
  contactEmail: string;
  contactPhone: string;
  imageUrl?: string;
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const AdvertisementImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
  height: 100%;
  /* object-fit: cover; */
  object-fit: contain cover;
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

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
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

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 0.75rem;
  cursor: pointer;
`;

const ModalHeading = styled.h3`
  width: 100%;
  font-size: 1.25rem;
`;

const AdvertisementDetails = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [advertisement, setAdvertisement] = useState<AdvertisementProps | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { id } = useParams();

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
  const handleSendMessage = () => {
    if (!session) {
      setShowLoginModal(true); // Show the login modal if not logged in
      return;
    }
    setShowModal(true); // Show the message modal if logged in
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false); // Close the login modal
  };

  const handleLoginRedirect = () => {
    router.push('/login'); // Redirect to the login page
  };

  const handleSendSMS = () => {
    if (!advertisement) return; // Ensure ad is not null
    const message = `Kabayan Konek:Hi, I saw your advertisement for ${advertisement.title} and would like more information.`;
    const smsLink = `sms:${
      advertisement.contactPhone
    }?body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  };

  const handleSendEmail = () => {
    if (!advertisement) return; // Ensure ad is not null
    const subject = `Inquiry about ${advertisement.title}`;
    const body = `Kabayan Konek:Hi, I saw your advertisement for ${advertisement.title}. Could you provide more details? Thank you!`;
    const mailtoLink = `mailto:${
      advertisement.contactEmail
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleSendWhatsApp = () => {
    if (!advertisement) return; // Ensure ad is not null
    const message = `Kabayan Konek:Hi, I’m interested in your listing for ${advertisement.title}. Could you share more details?`;
    const whatsappLink = `https://wa.me/${
      advertisement.contactPhone
    }?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
  };

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
    <div>
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
            <MessageButton onClick={handleSendMessage}>
              Send a message
            </MessageButton>
          </MessageButtonContainer>
          <Content>
            <div
              dangerouslySetInnerHTML={{ __html: advertisement.description }}
            />
          </Content>
          {/* <h1>{advertisement.category}</h1> */}
        </BasicAdInfoContainer>
      </AdvertisementDetailContainer>

      {/* Modal for Sending Message */}
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>Close</CloseButton>
            <ModalHeading>
              How would you like to contact the advertiser?
            </ModalHeading>{' '}
            <Button onClick={handleSendSMS}>Send via SMS</Button>
            <Button onClick={handleSendEmail}>Send via Email</Button>
            <Button onClick={handleSendWhatsApp}>Send via WhatsApp</Button>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Login Modal if the user is not logged in */}
      {showLoginModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleCloseLoginModal}>Close</CloseButton>
            <h3>You need to be logged in to send a message!</h3>
            <Button onClick={handleLoginRedirect}>Go to Login</Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default AdvertisementDetails;
