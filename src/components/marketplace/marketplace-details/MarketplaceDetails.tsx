'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

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

const MarketplaceDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps | null>(null);
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

  return (
    <div>
      <h1>{product.name}</h1>
      <Image
        src={product.imageUrl || '/default-event.jpg'}
        alt={product.name}
        width={500}
        height={300}
      />
    </div>
  );
};

export default MarketplaceDetails;
