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
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  EmailShareButton,
} from 'next-share';

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
                <FacebookShareButton url={encodedUrl} quote={encodedTitle}>
                  <FaFacebookF
                    style={{
                      color: '#1877f2',
                      display: 'block',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '20px',
                      height: '20px',
                      textAlign: 'center',
                      borderRadius: '50%',
                      background: 'white',
                      fontSize: '12px',
                      textDecoration: 'none',
                      boxShadow: '0 0 5px rgba(0, 0, 0, 0.15)',
                      padding: '5px',
                    }}
                  />
                </FacebookShareButton>

                {/* Twitter */}
                <TwitterShareButton url={encodedUrl} title={encodedTitle}>
                  <FaTwitter
                    style={{
                      color: '#1da1f2',
                      display: 'block',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '20px',
                      height: '20px',
                      textAlign: 'center',
                      borderRadius: '50%',
                      background: 'white',
                      fontSize: '12px',
                      textDecoration: 'none',
                      boxShadow: '0 0 5px rgba(0, 0, 0, 0.15)',
                      padding: '5px',
                    }}
                  />
                </TwitterShareButton>

                {/* LinkedIn */}
                <LinkedinShareButton url={encodedUrl} title={encodedTitle}>
                  <FaLinkedinIn
                    style={{
                      color: '#0077b5',
                      display: 'block',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '20px',
                      height: '20px',
                      textAlign: 'center',
                      borderRadius: '50%',
                      background: 'white',
                      fontSize: '12px',
                      textDecoration: 'none',
                      boxShadow: '0 0 5px rgba(0, 0, 0, 0.15)',
                      padding: '5px',
                    }}
                  />
                </LinkedinShareButton>

                {/* Reddit */}
                <RedditShareButton url={encodedUrl} title={encodedTitle}>
                  <FaRedditAlien
                    style={{
                      color: '#ff4500',
                      display: 'block',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '20px',
                      height: '20px',
                      textAlign: 'center',
                      borderRadius: '50%',
                      background: 'white',
                      fontSize: '12px',
                      textDecoration: 'none',
                      boxShadow: '0 0 5px rgba(0, 0, 0, 0.15)',
                      padding: '5px',
                    }}
                  />
                </RedditShareButton>

                {/* Email */}
                <EmailShareButton
                  url={encodedUrl}
                  subject={encodedTitle}
                  body={`Check out this article: ${encodedUrl}`}
                >
                  <AiOutlineMail
                    style={{
                      color: '#333',
                      display: 'block',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '20px',
                      height: '20px',
                      textAlign: 'center',
                      borderRadius: '50%',
                      background: 'white',
                      fontSize: '12px',
                      textDecoration: 'none',
                      boxShadow: '0 0 5px rgba(0, 0, 0, 0.15)',
                      padding: '5px',
                    }}
                  />
                </EmailShareButton>
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
