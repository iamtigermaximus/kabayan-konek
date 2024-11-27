'use client';

import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import styled from 'styled-components';
import { breakpoints as bp } from '@/utils/layout';
import { useParams, useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';

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
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  flex: 1;
  padding: 20px;
  /* background-color: #f9f9f9;
  border-left: 1px solid #ddd; */

  @media (min-width: ${bp.md}) {
    margin-top: 200px;
  }
`;
const OtherArticlesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const OtherArticleItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
    font-size: 0.8rem;
    margin-left: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ArticleImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;

  @media (min-width: ${bp.md}) {
    width: 100px;
    height: 100px;
  }
`;
// const ArticleImage = styled.img`
//   width: 100%;
//   max-width: 100%;
//   height: auto;
//   margin-bottom: 20px;
// `;

const ArticleContent = styled.div`
  flex: 3;
  margin-right: 20px;
`;

const ArticleTitleContainer = styled.div`
  max-width: 800px;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;

  @media (min-width: ${bp.md}) {
    font-size: 2.5rem;
  }
`;

// const ImageWrapper = styled.div`
//   margin-bottom: 20px;
//   text-align: center;
// `;

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

const SidebarTitleContainer = styled.div`
  width: 100%;
  padding: 10px 0;

  @media (min-width: ${bp.md}) {
  }
`;

const SidebarTitle = styled.div`
  font-weight: 700;
`;

const SidebarArticleLink = styled.a`
  font-weight: 700;
  font-size: 1rem;

  @media (min-width: ${bp.md}) {
    font-size: 2rem;
  }
`;

const LifestyleDetails = () => {
  const [article, setArticle] = useState<LifestyleArticle | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [otherArticles, setOtherArticles] = useState<LifestyleArticle[]>([]);

  const { id } = useParams(); // Use useParams to get the `id`
  const router = useRouter();

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

      // Fetch other articles
      fetch('/api/lifestyle')
        .then((res) => res.json())
        .then((data) => {
          // Sort articles by createdAt (desc) and limit to 5
          const sortedArticles = data.sort(
            (a: LifestyleArticle, b: LifestyleArticle) => {
              return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
              );
            }
          );
          // Filter out the current article and take the top 5
          const filteredArticles = sortedArticles.filter(
            (article: LifestyleArticle) => article.id !== id
          );
          setOtherArticles(filteredArticles.slice(0, 5));
        })
        .catch((err) => {
          console.error('Error fetching other articles:', err);
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

  const handleBackButton = () => router.back();

  return (
    <ArticleContainer>
      <ArticleContent>
        <ArticleTitleContainer>
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
          <Title>{article.title}</Title>
        </ArticleTitleContainer>
        {/* {article.imageUrl && (
        <ImageWrapper>
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={800}
            height={400}
            objectFit="cover"
          />
        </ImageWrapper>
      )} */}
        <Content>
          {/* Dynamically render content with HTML */}
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </Content>
        <PublishedDate>
          Published on: {new Date(article.createdAt).toLocaleDateString()}
        </PublishedDate>
      </ArticleContent>
      <Sidebar>
        <SidebarTitleContainer>
          <SidebarTitle>Related Posts</SidebarTitle>
        </SidebarTitleContainer>
        <OtherArticlesList>
          {otherArticles.map((otherArticle) => (
            <OtherArticleItem key={otherArticle.id}>
              {otherArticle.imageUrl && (
                <ArticleImage
                  src={otherArticle.imageUrl}
                  alt={otherArticle.title}
                />
              )}
              <SidebarArticleLink
                href={`/lifestyle/${otherArticle.id}`}
                style={{ fontWeight: '700' }}
              >
                {otherArticle.title}
              </SidebarArticleLink>
            </OtherArticleItem>
          ))}
        </OtherArticlesList>
      </Sidebar>
    </ArticleContainer>
  );
};

export default LifestyleDetails;
