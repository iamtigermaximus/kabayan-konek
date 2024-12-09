'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';
import DefaultImage from '@/assets/NoImage2.jpg';
import { useSession } from 'next-auth/react';
import { ModalOverlay, ModalContent } from '../Advertisement.styles';
import {
  AdvertisementDetailContainer,
  AdvertisementImageContainer,
  AdvertisementImage,
  BasicAdInfoContainer,
  AdvertisementDetailTitleContainer,
  AdvertisementTitle,
  MessageButtonContainer,
  MessageButton,
  Content,
  CloseButton,
  ModalHeading,
  Button,
} from './AdvertisementDetails.styles';

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
