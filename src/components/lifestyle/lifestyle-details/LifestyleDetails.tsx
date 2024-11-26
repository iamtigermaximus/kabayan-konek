'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import styled from 'styled-components';

interface LifestyleArticle {
  id: string;
  title: string;
  content: string; // Raw HTML content
  imageUrl?: string; // Optional image URL
  userId: string;
  createdAt: string;
  updatedAt: string;
}

const ArticleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
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

const PublishedDate = styled.small`
  display: block;
  margin-top: 20px;
  color: #777;
`;

const LifestyleDetails = () => {
  const [article, setArticle] = useState<LifestyleArticle | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams(); // Use useParams to get the `id`

  useEffect(() => {
    if (id) {
      console.log('Fetching article with id:', id);
      fetch(`/api/lifestyle/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch article');
          }
          return res.json();
        })
        .then((data) => {
          console.log('Fetched article:', data);
          setArticle(data);
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

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <ArticleContainer>
      <Title>{article.title}</Title>
      {article.imageUrl && (
        <ImageWrapper>
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={800}
            height={400}
            objectFit="cover"
          />
        </ImageWrapper>
      )}
      <Content>
        {/* Dynamically render content with HTML */}
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </Content>
      <PublishedDate>
        Published on: {new Date(article.createdAt).toLocaleDateString()}
      </PublishedDate>
    </ArticleContainer>
  );
};

export default LifestyleDetails;
