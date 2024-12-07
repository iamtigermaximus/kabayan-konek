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
import { PublishedDate } from '../ProfileFeature.styles';
import {
  ArticleContainer,
  ArticleContent,
  ArticleTitleContainer,
  Title,
  ShareBar,
  Content,
  Sidebar,
  SidebarTitleContainer,
  SidebarTitle,
  OtherArticlesList,
  OtherArticleItem,
  ArticleImage,
  SidebarArticleLink,
} from './ProfileDetails.styles';
import Head from 'next/head';

interface KabayanArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

const ProfileDetails = () => {
  const [article, setArticle] = useState<KabayanArticle | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [otherArticles, setOtherArticles] = useState<KabayanArticle[]>([]);

  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      console.log('Fetching kabayan article with id:', id);
      fetch(`/api/profile/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch kabayan article');
          }
          return res.json();
        })
        .then((data) => {
          console.log('Fetched kabayan article:', data);
          setArticle(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error:', err);
          setError(err.message);
          setLoading(false);
        });

      // Fetch other articles
      fetch('/api/profile')
        .then((res) => res.json())
        .then((data) => {
          // Sort articles by createdAt (desc) and limit to 5
          const sortedArticles = data.sort(
            (a: KabayanArticle, b: KabayanArticle) => {
              return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
              );
            }
          );
          // Filter out the current article and take the top 5
          const filteredArticles = sortedArticles.filter(
            (article: KabayanArticle) => article.id !== id
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
    return <div>Kabayan article not found.</div>;
  }
  const handleBackButton = () => router.back();

  const articleUrl = `https://kabayankonek.com/profile/${article.id}`;
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
          content={`Kabayan Spotlight, OFW Stories, Filipino Family in Finland, Pinoy Family in Finland,Kabayan community, Filipino profiles, Pinoy profiles, inspiring Pinoy stories, Filipino achievements, Filipino leaders, Kabayan success stories, Pinoy success stories, Filipino personalities, Pinoy personalities, Filipino influencers, Pinoy influencers, Filipino culture, Pinoy culture, Filipino heroes, Pinoy heroes, Filipinos making a difference, Filipino empowerment, Pinoy empowerment, Filipinos in Finland, Filipino expats, Pinoy expats, Kabayan spotlight Finland, Filipino stories Finland, Pinoy stories Finland, Kabayan Konek community, Filipino community Finland, Filipino culture in Finland, Filipino leaders in Finland, Filipino role models, ${article.title}`}
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

export default ProfileDetails;
