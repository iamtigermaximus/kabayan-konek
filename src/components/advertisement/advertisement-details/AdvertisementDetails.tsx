'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

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

const AdvertisementDetails = () => {
  const [advertisement, setAdvertisement] = useState<AdvertisementProps | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!advertisement) {
    return <div>Advertisement not found.</div>;
  }

  return (
    <div>
      <h1>{advertisement.title}</h1>
      {advertisement.imageUrl && (
        <Image
          src={advertisement.imageUrl}
          alt={advertisement.title}
          width={500}
          height={500}
        />
      )}
      <h1>{advertisement.description}</h1>
      <h1>{advertisement.category}</h1>
      <h1>{advertisement.title}</h1>
    </div>
  );
};

export default AdvertisementDetails;
