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

interface LifestyleArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface LifestyleDetailsProps {
  article: LifestyleArticle; // Use the LifestyleArticle type here
}

const LifestyleDetails = ({ article }: LifestyleDetailsProps) => {
  const [otherArticles, setOtherArticles] = useState<LifestyleArticle[]>([]);

  const { id } = useParams(); // Use useParams to get the `id`
  const router = useRouter();

  useEffect(() => {
    // Fetch other articles
    fetch('/api/lifestyle')
      .then((res) => res.json())
      .then((data) => {
        // Sort articles by createdAt (desc) and limit to 5
        const sortedArticles = data.sort(
          (a: LifestyleArticle, b: LifestyleArticle) => {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
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
  }, [id]);

  if (!article) {
    return <div>Article not found.</div>;
  }

  const handleBackButton = () => router.back();

  const articleUrl = `https://kabayankonek.com/lifestyle/${article.id}`;
  const articleTitle = article.title;
  // const articleContent = article.content.slice(0, 150);
  // const imageUrl =
  //   article.imageUrl ||
  //   'https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png';

  return (
    <>
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
                <FacebookShareButton url={articleUrl} quote={articleTitle}>
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
                <TwitterShareButton url={articleUrl} title={articleTitle}>
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
                <LinkedinShareButton url={articleUrl} title={articleTitle}>
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
                <RedditShareButton url={articleUrl} title={articleTitle}>
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
                  url={articleUrl}
                  subject={articleTitle}
                  body={`Check out this article: ${articleUrl}`}
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
