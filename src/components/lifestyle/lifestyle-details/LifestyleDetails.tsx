'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRedditAlien,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import {
  ArticleContainer,
  ArticleContent,
  ArticleImage,
  ArticleTitleContainer,
  Content,
  OtherArticleItem,
  OtherArticlesList,
  PublishedDate,
  ShareBar,
  Sidebar,
  SidebarArticleLink,
  SidebarTitle,
  SidebarTitleContainer,
  Title,
} from './LifestyleDetails.styles';
import Head from 'next/head';

interface LifestyleArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

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

  const articleUrl = `https://kabayankonek.com/lifestyle/${article.id}`;
  const articleTitle = article.title;

  const encodedTitle = encodeURIComponent(articleTitle);
  const encodedUrl = encodeURIComponent(articleUrl);

  return (
    <>
      <Head>
        <title>{`${article.title} | Kabayan Konek`}</title>
        <meta name="description" content={article.content.slice(0, 150)} />
        <meta
          name="keywords"
          content={`Filipino lifestyle, Kabayan lifestyle, Pinoy lifestyle, lifestyle for Filipinos, Filipino expat life, Filipino culture, Kabayan Konek lifestyle, Filipino tips and inspiration, Pinoy community Finland, Filipino living in Finland, Filipino events, Filipino culture in Finland, Filipino expats tips, Pinoy lifestyle articles, Kabayan Konek articles, Filipino fashion and trends, Filipino food, Filipino health and wellness, Pinoy travel tips, Filipino entertainment, ${article.title}`}
        />
        <link rel="canonical" href={articleUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={article.content.slice(0, 150)}
        />
        <meta property="og:url" content={articleUrl} />
        <meta
          property="og:image"
          content={
            article.imageUrl ||
            'https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png'
          }
        />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:title" content={article.title} />
        <meta
          name="twitter:description"
          content={article.content.slice(0, 150)}
        />
        <meta
          name="twitter:image"
          content={
            article.imageUrl ||
            'https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png'
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
            <>
              <ShareBar>
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1877f2' }}
                >
                  <FaFacebookF />
                </a>

                {/* Twitter */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1da1f2' }}
                >
                  <FaTwitter />
                </a>

                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0077b5' }}
                >
                  <FaLinkedinIn />
                </a>

                {/* Reddit */}
                <a
                  href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ff4500' }}
                >
                  <FaRedditAlien />
                </a>

                {/* Email */}
                <a
                  href={`mailto:?subject=${encodedTitle}&body=Check%20out%20this%20article:%20${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#333' }}
                >
                  <AiOutlineMail />
                </a>
              </ShareBar>
            </>
          </ArticleTitleContainer>

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
            <SidebarTitle>RELATED POSTS</SidebarTitle>
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
    </>
  );
};

export default LifestyleDetails;
