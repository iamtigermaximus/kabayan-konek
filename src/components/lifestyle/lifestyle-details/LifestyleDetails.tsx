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
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';

interface KabayanArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

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
  article: LifestyleArticle;
}

interface Comment {
  id: string;
  user: {
    name: string;
    image?: string;
  };
  content: string;
  createdAt: string;
}

const LifestyleDetails = ({ article }: LifestyleDetailsProps) => {
  const [otherArticles, setOtherArticles] = useState<LifestyleArticle[]>([]);
  const [kabayanArticles, setKabayanArticles] = useState<KabayanArticle[]>([]);

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const { id } = useParams();
  const router = useRouter();
  const { data: session } = useSession();

  const fetchKabayanArticles = async () => {
    try {
      const response = await fetch('/api/profile');
      const data: KabayanArticle[] = await response.json();
      // Sort articles by createdAt (desc) and filter out the current article
      const sortedArticles = data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      // Take top 5 other articles (exclude current article if necessary)
      setKabayanArticles(sortedArticles.slice(0, 3));
    } catch (error) {
      console.error('Error fetching other articles:', error);
    }
  };

  useEffect(() => {
    fetchKabayanArticles();
  }, []);

  useEffect(() => {
    // Fetch other articles and comments for the article in parallel
    const fetchArticles = fetch('/api/lifestyle')
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

    const fetchComments = fetch(
      `/api/comments?entityType=lifestyleArticle&entityId=${id}`
    )
      .then((res) => res.json())
      .then((data) => setComments(data.comments))
      .catch((err) => console.error('Error fetching comments:', err));

    // Execute both fetch operations
    Promise.all([fetchArticles, fetchComments]).catch((err) =>
      console.error('Error during data fetching:', err)
    );
  }, [id]);

  if (!article) {
    return <div>Article not found.</div>;
  }

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment || !session?.user?.id) return;

    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: session.user.id,
        content: newComment,
        lifestyleArticleId: article.id,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setComments([result.comment, ...comments]); // Add new comment at the top
      setNewComment('');
    } else {
      console.error('Failed to post comment');
    }
  };

  const handleBackButton = () => router.back();

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  const articleUrl = `https://kabayankonek.com/lifestyle/${article.id}`;
  const articleTitle = article.title;

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
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </Content>

          <PublishedDate>
            Published on: {new Date(article.createdAt).toLocaleDateString()}
          </PublishedDate>

          <div style={{ marginTop: '30px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>Comments</h3>
            {session?.user ? (
              <form
                onSubmit={handleCommentSubmit}
                style={{ marginBottom: '20px' }}
              >
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  style={{
                    width: '100%',
                    height: '80px',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginBottom: '10px',
                    fontSize: '14px',
                    fontFamily: 'Arial, sans-serif',
                    resize: 'vertical',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'flex-end',
                  }}
                >
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#1877f2',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '16px',
                    }}
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            ) : (
              <div
                style={{
                  padding: '10px 0',
                  fontWeight: 'bold',
                }}
              >
                <form
                  onSubmit={handleCommentSubmit}
                  style={{ marginBottom: '20px' }}
                >
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    style={{
                      width: '100%',
                      height: '80px',
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      marginBottom: '10px',
                      fontSize: '14px',
                      fontFamily: 'Arial, sans-serif',
                      resize: 'vertical',
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <button
                      type="submit"
                      style={{
                        backgroundColor: '#1877f2',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: session?.user ? 'pointer' : 'not-allowed',
                      }}
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
                <p
                  onClick={handleLoginRedirect}
                  style={{
                    color: '#888',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Please log in to leave a comment.
                </p>
              </div>
            )}

            <div>
              {comments.length === 0 ? (
                <p style={{ color: '#888' }}>
                  No comments yet. Be the first to comment!
                </p>
              ) : (
                comments.map((comment) => (
                  <div
                    key={comment.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      width: '100%',
                    }}
                  >
                    <Image
                      src={comment.user?.image || '/default-avatar.png'}
                      alt={comment.user?.name || 'User Avatar'}
                      width={30}
                      height={30}
                      style={{
                        borderRadius: '50%',
                        marginRight: '5px',
                        objectFit: 'cover',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                      }}
                    />
                    <div
                      key={comment.id}
                      style={{
                        backgroundColor: '#f9f9f9',
                        borderRadius: '8px',
                        marginBottom: '20px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        fontSize: '16px',
                        width: '100%',
                        padding: '10px ',
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 'bold',
                          fontSize: '16px',
                          color: '#333',
                          marginBottom: '8px',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginRight: '15px',
                          }}
                        >
                          {comment.user?.name || 'Anonymous'}
                        </div>
                        <div
                          style={{
                            fontSize: '14px',
                            color: '#999',
                          }}
                        >
                          {formatDistanceToNow(new Date(comment.createdAt), {
                            addSuffix: true,
                          })}
                        </div>
                      </div>

                      <p
                        style={{
                          color: '#555',
                          lineHeight: '1.5',
                        }}
                      >
                        {comment.content}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
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
          <SidebarTitleContainer>
            <SidebarTitle>KABAYAN SPOTLIGHT</SidebarTitle>
          </SidebarTitleContainer>
          <OtherArticlesList>
            {kabayanArticles.map((article) => (
              <OtherArticleItem key={article.id}>
                {article.imageUrl && (
                  <ArticleImage src={article.imageUrl} alt={article.title} />
                )}
                <SidebarArticleLink
                  href={`/profile/${article.id}`}
                  style={{ fontWeight: '700' }}
                >
                  {article.title}
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
