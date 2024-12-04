'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DefaultImage from '@/assets/NoImage2.jpg';
import {
  BasicProductInfoContainer,
  Container,
  DividerContainer,
  DividerLabel,
  DividerLine,
  FilterLabel,
  FilterSection,
  FilterSelect,
  FormItemContainer,
  ImageContainer,
  Input,
  InputLabel,
  ModalCloseButton,
  ModalContainer,
  ModalContent,
  ModalContentForm,
  ModalContentTitle,
  ModalContentTitleContainer,
  ModalOverlay,
  NextButton,
  PageInfo,
  PaginationContainer,
  PrevButton,
  ProductCard,
  ProductDescription,
  ProductImage,
  ProductItemContainer,
  ProductList,
  ProductPrice,
  ProductTitle,
  SectionContainer,
  StyledLink,
  SubmitButton,
  UploadButton,
  UploadButtonContainer,
  UploadedImageContainer,
} from '../Marketplace.styles';
import MarketplaceBanner from '@/components/common/banners/MarketplaceBanner';
import RichTextEditor from '@/components/common/editor/RichTextEditor';
import { Editor } from '@tiptap/core';

export interface ProductProps {
  id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  contactEmail: string;
  contactPhone: string;
  primaryImageUrl: string;
  images: { id: string; imageUrl: string }[];
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

const MyPostedProducts = () => {
  const { data: session } = useSession();
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
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [editingProduct, setEditingProduct] = useState<ProductProps | null>(
    null
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const widgetRef = useRef<CloudinaryWidget | null>(null);
  const itemsPerPage = 6;
  const [content, setContent] = useState('');
  const [editor, setEditor] = useState<Editor | null>(null);

  const handleContentChange = (newContent: string) => {
    setContent(newContent); // Update content when editor changes
  };

  const fetchProducts = useCallback(async () => {
    if (!session?.user?.id) {
      setError('User is not logged in.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/marketplace/myProducts');

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to fetch products');
        setIsLoading(false);
        return;
      }

      const data: ProductProps[] = await response.json();
      data.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA; // Sort in descending order
      });

      setProducts(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Error fetching products');
    } finally {
      setIsLoading(false);
    }
  }, [session?.user?.id, itemsPerPage]);

  useEffect(() => {
    if (session) {
      fetchProducts(); // Fetch products if session is available
    }
  }, [session, fetchProducts]);

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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) resetForm();
  };

  const handleUploadImage = () => {
    widgetRef.current?.open();
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.cloudinary) {
      const cloudinaryWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
          uploadPreset: 'kabayankonek',
          multiple: true, // Allow multiple images
          sources: ['local', 'url', 'camera'],
          debug: true, // Enable debugging
        },
        (error: Error | null, result: CloudinaryWidgetResult) => {
          if (result?.event === 'success') {
            // Add the new uploaded image URL to the list of image URLs
            const uploadedUrl = result.info.secure_url;
            setImageUrls((prevUrls) => {
              // Avoid adding duplicate URLs
              if (!prevUrls.includes(uploadedUrl)) {
                return [...prevUrls, uploadedUrl];
              }
              return prevUrls;
            });
          } else if (error) {
            console.error('Cloudinary upload error:', error);
          }
        }
      );
      widgetRef.current = cloudinaryWidget;
    }
  }, []);

  const resetForm = () => {
    setName('');
    editor?.commands.clearContent(); // Clear Tiptap editor content
    setPrice('');
    setCategory('all');
    setContactEmail('');
    setContactPhone('');
    setImageUrls([]);
    setEditingProduct(null); // Ensure it resets to "create" mode
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !name ||
      !editor?.getHTML() ||
      !price ||
      !category ||
      !contactEmail ||
      !contactPhone ||
      imageUrls.length === 0
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
      images: imageUrls || null,
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
      resetForm(); // Clear the form
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

  const handleEdit = (product: ProductProps) => {
    setEditingProduct(product);
    setName(product.name);
    setPrice(product.price.toString());
    setCategory(product.category);
    setContactEmail(product.contactEmail);
    setContactPhone(product.contactPhone);
    setImageUrls(product.images.map((img) => img.imageUrl));
    // Defer setting the content until the editor is initialized
    if (editor) {
      editor.commands.setContent(product.description);
    } else {
      // If the editor is not yet initialized, save content temporarily
      setContent(product.description);
    }
    setIsModalOpen(true); // Open modal for editing
  };

  // Update the editor's content if it has been initialized
  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  const handleDelete = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    try {
      const response = await fetch(`/api/marketplace/${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const responseBody = await response.json();
        console.error(
          'Error deleting product:',
          responseBody.error || 'Unknown error'
        );
        alert(responseBody.error || 'Error deleting product');
        return;
      }

      console.log('Product deleted successfully!');
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product. Please try again later.');
    }
  };

  return (
    <Container>
      <DividerContainer>
        <DividerLine />
        <DividerLabel> MY PRODUCTS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <MarketplaceBanner
        handleLoginClick={handleLoginClick}
        toggleModal={toggleModal}
      />
      {isLoading && <div>Loading products...</div>}
      {/* {session && (
        <CreateButtonContainer>
          <CreateButton onClick={toggleModal}>POST PRODUCT</CreateButton>
        </CreateButtonContainer>
      )} */}

      {isModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <ModalContent>
              <ModalContentTitleContainer>
                <ModalContentTitle>
                  {editingProduct ? 'Edit Product' : 'Create New Product'}
                </ModalContentTitle>
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
                    <option value="all">All</option>
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
                    {imageUrls.length > 0 && (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          gap: '10px',
                        }}
                      >
                        {imageUrls.map((url, index) => (
                          <UploadedImageContainer key={index}>
                            <Image
                              src={url}
                              alt={`Uploaded Image ${index + 1}`}
                              width={150}
                              height={150}
                            />
                          </UploadedImageContainer>
                        ))}
                      </div>
                    )}
                  </ImageContainer>
                </FormItemContainer>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? 'Submitting...'
                    : editingProduct
                    ? 'Update Product'
                    : 'Create Product'}{' '}
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
                src={product.primaryImageUrl || DefaultImage}
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '5px',
                  marginTop: '10px',
                }}
              >
                <button
                  style={{
                    background: 'gray',
                    color: '#fff',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    width: '60px',
                  }}
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  style={{
                    background: 'tomato',
                    color: '#fff',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    width: '60px',
                  }}
                  onClick={() => {
                    if (product.id) {
                      handleDelete(product.id);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
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

export default MyPostedProducts;
