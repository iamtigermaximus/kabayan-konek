'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

interface KabayanArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string; // Optional
  userId: string;
  createdAt: string;
  updatedAt: string;
}

const LifestyleDetails = () => {
  const [article, setArticle] = useState<KabayanArticle | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams(); // Use useParams to get the `id`

  useEffect(() => {
    if (id) {
      console.log('Fetching kabayan article with id:', id); // Log title
      fetch(`/api/profile/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch kabayan article');
          }
          return res.json();
        })
        .then((data) => {
          console.log('Fetched kabayan article:', data); // Log data from the API
          setArticle(data);
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

  if (!article) {
    return <div>Kabayan article not found.</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      {article.imageUrl && (
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={500}
          height={500}
        />
      )}
      <p>{article.content}</p>
      <small>
        Published on: {new Date(article.createdAt).toLocaleDateString()}
      </small>
    </div>
  );
};

export default LifestyleDetails;
