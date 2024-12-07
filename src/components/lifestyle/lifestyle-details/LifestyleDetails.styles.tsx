import styled from 'styled-components';
import { breakpoints as bp } from '@/utils/layout';

export const ArticleContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    padding: 20px 40px;
  }

  @media (min-width: ${bp.lg}) {
    flex-direction: row;
  }
`;

export const Sidebar = styled.div`
  flex: 1;
  padding: 20px;

  @media (min-width: ${bp.md}) {
    margin-top: 200px;
  }
`;
export const OtherArticlesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const OtherArticleItem = styled.li`
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

export const ArticleImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;

  @media (min-width: ${bp.md}) {
    width: 100px;
    height: 100px;
  }
`;

export const ArticleContent = styled.div`
  flex: 3;
  margin-right: 20px;
`;

export const ArticleTitleContainer = styled.div`
  max-width: 800px;
  margin-top: 30px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;

  @media (min-width: ${bp.md}) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  /* font-size: 1rem;
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
  } */

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }

  /* Headings */
  h1 {
    font-size: 2.25rem; /* 36px */
    font-weight: 700; /* Bold */
    margin-top: 20px;
    margin-bottom: 15px;
    color: #333;
  }

  h2 {
    font-size: 2rem; /* 32px */
    font-weight: 600; /* Semi-bold */
    margin-top: 20px;
    margin-bottom: 10px;
    color: #333;
  }

  h3 {
    font-size: 1.75rem; /* 28px */
    font-weight: 500; /* Medium */
    margin-top: 20px;
    margin-bottom: 10px;
    color: #333;
  }

  h4 {
    font-size: 1.5rem; /* 24px */
    font-weight: 400; /* Regular */
    margin-top: 20px;
    margin-bottom: 10px;
    color: #333;
  }

  .editor-heading h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
  }

  .editor-heading h2 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 0.65rem;
  }

  .editor-heading h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.6rem;
  }

  .editor-heading h4 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.55rem;
  }

  .editor-heading h5 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .editor-heading h6 {
    font-size: 0.875rem;
    font-weight: bold;
    margin-bottom: 0.45rem;
  }

  /* Paragraph */
  p {
    font-size: 1rem; /* 16px */
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 15px;
    color: #555;
  }

  /* Blockquote */
  blockquote {
    background: #f4f4f4;
    padding: 10px 20px;
    border-left: 5px solid #ccc;
    margin: 20px 0;
    font-style: italic;
  }

  /* Links */
  a {
    text-decoration: none;
    color: #007bff;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Additional Styles */
  code {
    font-family: 'Courier New', monospace;
    background-color: #f8f9fa;
    padding: 2px 4px;
    border-radius: 4px;
  }

  pre {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    overflow: auto;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 20px 0;
  }
`;

export const PublishedDate = styled.small`
  display: block;
  margin-top: 20px;
  color: #777;
`;

export const SidebarTitleContainer = styled.div`
  width: 100%;
  padding: 10px 0;

  @media (min-width: ${bp.md}) {
  }
`;

export const SidebarTitle = styled.div`
  font-weight: 700;
`;

export const SidebarArticleLink = styled.a`
  font-weight: 700;
  font-size: 1rem;

  @media (min-width: ${bp.md}) {
    font-size: 2rem;
  }
`;
export const ShareBar = styled.div`
  position: static;
  flex-direction: row;
  justify-content: center;
  padding: 5px 0;
  display: flex;
  justify-content: flex-start;
  gap: 3px;
  background: transparent;

  a {
    display: block;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    background: white;
    font-size: 10px;
    text-decoration: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

    &:hover {
      background: #f4f4f4;
    }

    svg {
      font-size: 10px;
      margin: auto;
    }
  }

  @media (min-width: ${bp.md}) {
    position: fixed;
    top: 50%;
    left: 0;
    z-index: 1000;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background: transparent;
  }
`;
