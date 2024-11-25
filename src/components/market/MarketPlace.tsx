'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  DividerContainer,
  DividerLine,
  DividerLabel,
  SectionContainer,
  FilterSection,
  FilterLabel,
  FilterSelect,
  ProductList,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  // CreateButtonContainer,
  // CreateButton,
  ModalContainer,
  ModalContent,
  ModalContentTitle,
  ModalContentForm,
  FormItemContainer,
  InputLabel,
  Input,
  Textarea,
  UploadedImageContainer,
  SubmitButton,
  ModalCloseButton,
  PaginationContainer,
  PrevButton,
  PageInfo,
  NextButton,
  ModalContentTitleContainer,
  ImageContainer,
  UploadButtonContainer,
  UploadButton,
} from './MarketPlace.styles';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export interface ProductProps {
  id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  contactEmail: string;
  contactPhone: string;
  imageUrl?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

interface CloudinaryWidgetResult {
  event: string;
  info: {
    secure_url: string;
  };
}

interface CloudinaryWidget {
  open: () => void;
  close: () => void;
}

const MarketPlace = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [category, setCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const widgetRef = useRef<CloudinaryWidget | null>(null);
  const itemsPerPage = 6;

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/marketplace');
      const data: ProductProps[] = await response.json();

      data.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
      });

      setProducts(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts =
    category === 'all'
      ? products
      : products.filter((product) => product.category === category);

  // //  Calculate total number of pages
  // const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = filteredProducts.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleUploadImage = () => {
    widgetRef.current?.open();
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.cloudinary) {
      const cloudinaryWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
          uploadPreset: 'kabayankonek',
          multiple: false,
          sources: ['local', 'url', 'camera'],
          debug: true,
        },
        (error: Error | null, result: CloudinaryWidgetResult) => {
          if (result?.event === 'success') {
            setImageUrl(result.info.secure_url);
          } else if (error) {
            console.error('Cloudinary upload error:', error);
          }
        }
      );
      widgetRef.current = cloudinaryWidget;
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !contactEmail ||
      !contactPhone
    ) {
      alert('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }

    const productData = {
      name,
      description,
      price: parseFloat(price),
      category,
      contactEmail,
      contactPhone,
      image: imageUrl || null,
    };

    try {
      const response = await fetch('/api/marketplace', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      const responseBody = await response.json();

      if (!response.ok) {
        console.error(
          'Error creating product:',
          responseBody.error || 'Unknown error'
        );
        alert(responseBody.error || 'Error creating event');
        return;
      }

      console.log('Event created!', responseBody);
      setIsModalOpen(false);
      fetchProducts();
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Error creating product. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <Container>
      <title>MARKETPLACE | kabayankonek</title>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>MARKETPLACE</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <div>
        {!session ? (
          <div
            style={{
              margin: '20px 0',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              textAlign: 'center',
              backgroundColor: '#e6f7ff',
            }}
          >
            <h2 style={{ marginBottom: '10px' }}>
              Want to sell or post your own products?
            </h2>
            <p style={{ marginBottom: '20px', color: '#555' }}>
              Log in or sign up to create and manage your products. Join our
              marketplace and start selling today!
            </p>
            <button
              onClick={handleLoginClick}
              style={{
                padding: '10px 20px',
                backgroundColor: '#222',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Log In or Sign Up
            </button>
          </div>
        ) : (
          <div
            style={{
              margin: '20px 0',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              textAlign: 'center',
              backgroundColor: '#e6f7ff',
            }}
          >
            <h2 style={{ marginBottom: '10px' }}>
              Ready to share your products with the marketplace?
            </h2>
            <p style={{ marginBottom: '20px', color: '#555' }}>
              You are logged in! Create and manage your products easily, and
              reach more buyers.
            </p>
            <button
              onClick={() => toggleModal()}
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              POST PRODUCT
            </button>
          </div>
        )}
      </div>
      {/* {session && (
        <CreateButtonContainer>
          <CreateButton onClick={toggleModal}>POST PRODUCT</CreateButton>
        </CreateButtonContainer>
      )} */}

      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <ModalContentTitleContainer>
              <ModalContentTitle>Create New Product</ModalContentTitle>
            </ModalContentTitleContainer>

            <ModalContentForm onSubmit={handleSubmit}>
              <FormItemContainer>
                <InputLabel htmlFor="name">Product Name:</InputLabel>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormItemContainer>
              <FormItemContainer>
                <InputLabel htmlFor="description">Description:</InputLabel>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </FormItemContainer>
              <FormItemContainer>
                <InputLabel htmlFor="price">Price:</InputLabel>
                <Input
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </FormItemContainer>
              <FormItemContainer>
                <InputLabel htmlFor="category">Category:</InputLabel>
                <FilterSelect
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home">Home</option>
                  <option value="food">Food</option>
                  <option value="others">Others</option>
                </FilterSelect>
              </FormItemContainer>

              <FormItemContainer>
                <InputLabel htmlFor="contactEmail">Contact Email:</InputLabel>
                <Input
                  id="contactEmail"
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                />
              </FormItemContainer>
              <FormItemContainer>
                <InputLabel htmlFor="contactPhone">Contact Phone:</InputLabel>
                <Input
                  id="contactPhone"
                  type="tel"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  required
                />
              </FormItemContainer>
              <FormItemContainer>
                <InputLabel htmlFor="imageUrl">Image:</InputLabel>
                <ImageContainer>
                  <UploadButtonContainer>
                    <UploadButton type="button" onClick={handleUploadImage}>
                      Upload Image
                    </UploadButton>
                  </UploadButtonContainer>
                  {imageUrl && (
                    <UploadedImageContainer>
                      <Image
                        src={imageUrl}
                        alt="Product"
                        width={150}
                        height={150}
                      />
                    </UploadedImageContainer>
                  )}
                </ImageContainer>
              </FormItemContainer>
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Create Product'}
              </SubmitButton>
            </ModalContentForm>
            <ModalCloseButton onClick={toggleModal}>Close</ModalCloseButton>
          </ModalContent>
        </ModalContainer>
      )}
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
          {displayedItems.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage
                src={product.imageUrl || '/default-event.jpg'}
                alt={product.name}
                width={150}
                height={150}
                priority
              />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductCard>
          ))}
        </ProductList>

        <PaginationContainer>
          <PrevButton onClick={handlePrev} disabled={currentPage === 1}>
            Previous
          </PrevButton>
          <PageInfo>
            Page {currentPage} of {totalPages}
          </PageInfo>
          <NextButton
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </NextButton>
        </PaginationContainer>
      </SectionContainer>
    </Container>
  );
};

export default MarketPlace;
