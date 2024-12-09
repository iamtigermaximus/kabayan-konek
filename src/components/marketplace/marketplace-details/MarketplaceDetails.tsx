'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';
import DefaultImage from '@/assets/NoImage2.jpg';
import {
  BasicProductInfoContainer,
  ModalContent,
  ModalOverlay,
  ProductImage,
  ProductPrice,
  SectionContainer,
  StyledLink,
} from '../Marketplace.styles';
import Link from 'next/link';
// import NotificationComponent from '@/components/notification/NotificationComponent';
import { useSession } from 'next-auth/react';
import {
  Button,
  CloseButton,
  Content,
  GalleryImage,
  GalleryImageContainer,
  MessageButton,
  MessageButtonContainer,
  ModalHeading,
  ProductDetailContainer,
  ProductDetailTitleContainer,
  ProductGallery,
  ProductImageContainer,
  RelatedProductCard,
  RelatedProductDescription,
  RelatedProductImage,
  RelatedProductItemContainer,
  RelatedProductList,
  RelatedProductPrice,
  RelatedProductTitle,
  Title,
} from './MarketplaceDetails.styles';

interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  contactEmail: string;
  contactPhone: string;
  primaryImageUrl: string;
  images: { imageUrl: string }[];
}

const MarketplaceDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Add state to manage selected image

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
    if (!product) return; // Ensure product is not null
    const message = 'Kabayan Konek:I am interested in your product!';
    const smsLink = `sms:${product.contactPhone}?body=${encodeURIComponent(
      message
    )}`;
    window.location.href = smsLink;
  };

  const handleSendEmail = () => {
    if (!product) return; // Ensure product is not null
    const subject = 'Inquiry about your product';
    const body = 'Kabayan Konek:I am interested in your product!';
    const mailtoLink = `mailto:${
      product.contactEmail
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleSendWhatsApp = () => {
    if (!product) return; // Ensure product is not null
    const message = 'Kabayan Konek:I am interested in your product!';
    const whatsappLink = `https://wa.me/${
      product.contactPhone
    }?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleGalleryImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl); // Update the selected image
  };
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
            src={selectedImage || product.primaryImageUrl || DefaultImage}
            alt={product.name}
            width={500}
            height={300}
            priority
          />
        </ProductImageContainer>
        {product.images && product.images.length > 0 && (
          <ProductGallery>
            {product.images.map((img) => (
              <GalleryImageContainer key={img.imageUrl}>
                <GalleryImage
                  src={img.imageUrl || DefaultImage}
                  alt={img.imageUrl}
                  width={100}
                  height={100}
                  onClick={() => handleGalleryImageClick(img.imageUrl)}
                />
              </GalleryImageContainer>
            ))}
          </ProductGallery>
        )}

        <BasicProductInfoContainer>
          <ProductDetailTitleContainer>
            <Title>{product.name}</Title>
          </ProductDetailTitleContainer>
          <ProductPrice>€{product.price}</ProductPrice>
          <MessageButtonContainer>
            <MessageButton onClick={handleSendMessage}>
              Send a message
            </MessageButton>
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
                    src={product.primaryImageUrl || DefaultImage}
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
      {/* Modal for Sending Message */}
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>Close</CloseButton>
            <ModalHeading>
              How would you like to send a message to the seller?
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

export default MarketplaceDetails;
