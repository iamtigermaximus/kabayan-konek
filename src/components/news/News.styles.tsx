'use client';

import styled from 'styled-components';
import { breakpoints as bp } from '../../utils/layout';

export const Container = styled.div`
  padding: 10px;
  height: 100%;
  z-index: 99;
  margin-top: 20px;

  @media (min-width: ${bp.md}) {
    padding: 20px 50px;
  }
`;

export const SectionContainer = styled.section`
  padding: 10px;

  @media (min-width: ${bp.lg}) {
    padding: 20px 100px;
  }
`;

export const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const DividerLine = styled.hr`
  border: 0;
  border-top: 1px solid #b4b4b4;
  width: 100%;
  margin: 0;
  flex-grow: 1;
`;

export const DividerLabel = styled.span`
  top: -12px;
  background-color: white;
  padding: 0 10px;
  font-weight: bold;
  color: #b4b4b4;
  font-size: 1rem;
  white-space: nowrap;

  @media (min-width: ${bp.md}) {
    font-size: 1.25rem;
  }
`;

export const NewsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NewsItem = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
  display: flex;
  gap: 15px;
  align-items: flex-start;

  &:last-child {
    border-bottom: none;
  }
`;

export const NewsContent = styled.div`
  flex: 3;
`;

export const NewsHeadline = styled.h2`
  font-size: 1.25rem;
  margin: 0 0 10px;
  color: #636363;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NewsSummary = styled.p`
  margin: 0 0 10px;
  color: #666;
  font-size: 0.9rem;
`;

export const NewsSource = styled.span`
  font-size: 0.8rem;
  color: #999;
`;

export const NewsDate = styled.span`
  font-size: 0.85rem;
  color: #888;
  display: block;
  margin-top: 5px;
`;

export const ModalContainer = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: rgba(0, 0, 0, 0.5); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
  position: relative;
  border: 0.5px solid rgba(0, 0, 0, 0.5);

  @media (min-width: ${bp.md}) {
    width: 600px;
  }
`;

export const ModalContentTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const ModalContentTitle = styled.h2`
  font-size: 16px;
`;

export const ModalContentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const CreateButtonContainer = styled.div`
  width: 100%;
  padding: 0 10px 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CreateButton = styled.button`
  border: none;
  padding: 10px;
  min-width: 150px;
  max-width: 100%;
  background-color: #494848;
  color: white;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  padding: 5px 0;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 10px 2px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  overflow: auto;
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const UploadButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadButton = styled.button`
  border: none;
  padding: 10px;
  background-color: #494848;
  color: white;
  width: 100%;
`;

export const SubmitButtonContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled.button`
  border: none;
  padding: 10px;
  background-color: #494848;
  color: white;
  width: 100%;
`;

export const UploadedImageContainer = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;

export const PrevButton = styled.button`
  padding: 8px 12px;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;

  &:disabled {
    background-color: #888;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: tomato;
  }
`;

export const NextButton = styled.button`
  padding: 8px 12px;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;

  &:disabled {
    background-color: #888;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: tomato;
  }
`;

export const PageInfo = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #555;
`;

// Toolbar Container Style
export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  gap: 10px;
  flex-wrap: wrap;
`;

// Toolbar Button Style
export const ToolbarButton = styled.button`
  background: none;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  transition: all 0.3s ease;
  width: 100px;
  white-space: nowrap;

  &:hover {
    background-color: #f4f4f4;
  }

  &:active {
    background-color: #e0e0e0;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
  }
`;

// Styled container for the editor
export const StyledEditorContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  min-height: 200px; // Ensures a minimum height for the editor
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  line-height: 1.5;
  color: #333;

  /* To improve the typing experience */
  &.ProseMirror {
    padding: 10px;
  }

  /* Make sure the cursor is visible when the user is editing */
  .ProseMirror-focused {
    border-color: #3e7e7e;
    outline: none;
  }

  /* Add some visual improvements to headers */
  h1,
  h2,
  h3 {
    color: #333;
  }

  /* Add a background color to paragraphs for contrast */
  p {
    margin-bottom: 1rem;
  }

  /* Make sure links are styled */
  a {
    color: #0070f3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Add spacing between blocks */
  blockquote {
    padding-left: 20px;
    border-left: 4px solid #ccc;
    margin-left: 0;
    font-style: italic;
    color: #555;
  }

  /* Make sure images inside the editor are responsive */
  .ProseMirror img {
    max-width: 100%;
    height: auto;
    object-fit: contain; /* Ensures the image fits within the container */
  }
`;

export const EditButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  flex: 1;
`;

export const EditButton = styled.button`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: gray;
  color: white;
  border: none;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: tomato;
  color: white;
  border: none;
  cursor: pointer;
`;

export const ConfirmModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  /* z-index: 1000; */
`;

export const ConfirmModalContent = styled.div`
  background: white;
  width: 90%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

export const ConfirmModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 5px;
`;

export const CancelConfirmModalButton = styled.button`
  background-color: gray;
  color: white;
  border: none;
  width: 50px;
  padding: 5px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover {
    background-color: black;
  }
`;

export const DeleteConfirmModalButton = styled.button`
  background-color: tomato;
  color: white;
  border: none;
  width: 50px;
  padding: 5px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover {
    background-color: red;
  }
`;

//NEW HERE

export const ArticleContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    /* flex-direction: row; */
  }
`;

export const Sidebar = styled.div`
  flex: 1;
  padding: 20px;
  /* background-color: #f9f9f9;
  border-left: 1px solid #ddd; */

  @media (min-width: ${bp.md}) {
    /* margin-top: 20px; */
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
  margin-bottom: 20px;
  color: #333;

  @media (min-width: ${bp.md}) {
    font-size: 2.5rem;
  }
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

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
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
