import styled from 'styled-components';
import { breakpoints as bp } from '@/utils/layout';
import Image from 'next/image';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`;

export const Sidebar = styled.div`
  flex: 1;
  padding: 20px;
  /* background-color: #f9f9f9;
  border-left: 1px solid #ddd; */

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

// const Title = styled.h1`
//   font-size: 1.5rem;
//   margin-bottom: 20px;
//   color: #333;

//   @media (min-width: ${bp.md}) {
//     font-size: 2.5rem;
//   }
// `;

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

export const EventImageContainer = styled.div`
  display: flex;
`;

export const EventImage = styled(Image)`
  width: 100%;
  /* height: auto; */
  border-radius: 8px;
  margin-bottom: 15px;
  height: 100%;
  object-fit: cover;
  min-height: 300px;
  max-height: 350px;
  object-fit: cover;
`;

export const DetailsContainer = styled.div`
  /* text-align: center; */
  padding: 1rem;
`;

export const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const EventTitleContainer = styled.div`
  max-width: 800px;
  display: flex;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;

  @media (min-width: ${bp.md}) {
    font-size: 2.5rem;
  }
`;

// const Description = styled.p`
//   font-size: 1.125rem;
//   line-height: 1.6;
//   color: #666;
//   margin-bottom: 1.5rem;
// `;

export const Description = styled.div`
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

export const Detail = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: #444;
  margin-bottom: 0.5rem;

  strong {
    color: #333;
  }
`;

export const LoadingMessage = styled.div`
  font-size: 1.25rem;
  color: #666;
  text-align: center;
  margin-top: 2rem;
`;

export const ErrorMessage = styled.div`
  font-size: 1.25rem;
  color: #ff4d4f;
  text-align: center;
  margin-top: 2rem;
`;
