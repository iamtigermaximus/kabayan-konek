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
  ProductItemContainer,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ModalContainer,
  ModalContent,
  ModalContentTitle,
  ModalContentForm,
  FormItemContainer,
  InputLabel,
  Input,
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
  StyledLink,
  BasicProductInfoContainer,
  ModalOverlay,
} from './Marketplace.styles';
import Image from 'next/image';
// import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DefaultImage from '@/assets/NoImage2.jpg';
import MarketplaceBanner from '../common/banners/MarketplaceBanner';
import RichTextEditor from '../common/editor/RichTextEditor';
import { Editor } from '@tiptap/core';

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
  // const { data: session } = useSession();
  const router = useRouter();
  const [category, setCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [editingProduct, setEditingProduct] = useState<ProductProps | null>(
    null
  );

  const widgetRef = useRef<CloudinaryWidget | null>(null);
  const itemsPerPage = 6;
  const [content, setContent] = useState('');
  const [editor, setEditor] = useState<Editor | null>(null);

  const handleContentChange = (newContent: string) => {
    setContent(newContent); // Update content when editor changes
  };

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
      !editor?.getHTML() ||
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
      description: editor.getHTML(),
      price: parseFloat(price),
      category,
      contactEmail,
      contactPhone,
      image: imageUrl || null,
    };

    try {
      const endpoint = editingProduct
        ? `/api/marketplace/${editingProduct.id}` // Edit endpoint
        : '/api/marketplace'; // Create endpoint
      const method = editingProduct ? 'PUT' : 'POST'; // Use PUT for edit

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      const responseBody = await response.json();

      if (!response.ok) {
        console.error(
          'Error submitting product:',
          responseBody.error || 'Unknown error'
        );
        alert(responseBody.error || 'Error submitting product');
        return;
      }

      console.log(
        editingProduct ? 'Product updated!' : 'Product created!',
        responseBody
      );
      setIsModalOpen(false);
      setEditingProduct(null); // Reset editing state
      fetchProducts(); // Refresh products list
    } catch (error) {
      console.error('Error submitting product:', error);
      alert('Error submitting product. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <Container>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>MARKETPLACE</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <MarketplaceBanner
        handleLoginClick={handleLoginClick}
        toggleModal={toggleModal}
      />
      {isModalOpen && (
        <ModalOverlay>
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
                  <RichTextEditor
                    content={content}
                    onContentChange={handleContentChange}
                    editor={editor}
                    setEditor={setEditor}
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
        </ModalOverlay>
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
                src={product.imageUrl || DefaultImage}
                alt={product.name}
                width={150}
                height={150}
                priority
              />
              <BasicProductInfoContainer>
                <ProductItemContainer>
                  <ProductPrice>€{product.price}</ProductPrice>
                </ProductItemContainer>
                <ProductItemContainer>
                  <Link
                    href={`/marketplace/${product.id}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <ProductTitle>{product.name}</ProductTitle>
                  </Link>
                </ProductItemContainer>
                <ProductItemContainer>
                  <ProductDescription>
                    {product.description.length > 100 ? (
                      <>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: product.description.slice(0, 100) + '...',
                          }}
                        ></div>
                        <StyledLink href={`/marketplace/${product.id}`}>
                          <span style={{ color: 'tomato', cursor: 'pointer' }}>
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
                  </ProductDescription>
                </ProductItemContainer>
              </BasicProductInfoContainer>
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
