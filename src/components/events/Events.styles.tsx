'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { breakpoints as bp } from '../../utils/layout';
import Link from 'next/link';

export const Container = styled.div`
  padding: 10px;
  height: 100%;
  z-index: 99;
  margin-top: 20px;
  width: 100%;

  @media (min-width: ${bp.md}) {
    padding: 20px 50px;
  }
`;

// export const SectionContainer = styled.section`
//   padding: 10px;

//   @media (min-width: ${bp.md}) {
//     padding: 20px 50px;
//   }
// `;

export const EventsContent = styled.div`
  flex: 3;
  margin-right: 20px;
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

  @media (min-width: ${bp.lg}) {
    flex-direction: row;
    padding: 20px 100px;
  }
`;

export const SectionContainer = styled.section`
  padding: 10px;

  @media (min-width: ${bp.lg}) {
    /* padding: 20px 100px; */
  }
`;

export const EventCard = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid #ccc; */
  /* border-radius: 8px; */
  /* padding: 0 0 15px; */
  /* margin-bottom: 20px; */
  /* background-color: #f9f9f9; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  gap: 10px;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`;
export const EventImageContainer = styled.div`
  /* border: 1px solid red; */
  width: 100px;
  height: 100px;
  max-width: 150px;
  max-height: 150px;
  margin-bottom: 5px;

  @media (min-width: ${bp.md}) {
    margin-right: 20px;
    width: 150px;
    height: 150px;
  }
`;

export const EventImage = styled(Image)`
  width: 100px;
  height: 100px;
  max-width: 150px;
  max-height: 150px;
  object-fit: cover;
  /* height: auto; */
  /* border-radius: 8px; */

  @media (min-width: ${bp.md}) {
    /* margin-bottom: 0;
    margin-right: 20px; */
    width: 150px;
    height: 150px;
  }
`;

export const EventDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    padding-top: 10px;
  }
`;

export const EventName = styled.h2`
  // margin: 0 0 10px;
  font-size: 0.85rem;
  color: #333;
  /* max-height: 40px; */
  overflow-x: hidden;
  text-overflow: ellipsis;
  /* border: 1px solid green; */

  @media (min-width: ${bp.sm}) {
    font-size: 1.25rem;
    /* max-height: 50px; */
  }

  @media (min-width: ${bp.md}) {
    font-size: 1.5rem;
    /* max-height: 60px; */
  }

  @media (min-width: ${bp.lg}) {
    font-size: 1.5rem;
  }

  /* @media (min-width: ${bp.xl}) {
    font-size: 1.75rem;
  } */
`;

export const EventDescription = styled.p`
  margin: 10px 0;
  font-size: 0.75rem;
  color: #666;
  height: 40px;
  border: 1px solid blue;

  @media (min-width: ${bp.md}) {
    font-size: 1rem;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 0.75rem;
  }

  @media (min-width: ${bp.xl}) {
    /* font-size: 1.25rem; */
  }
`;

export const EventDescriptionSpan = styled.span`
  color: tomato;
  cursor: 'pointer';
  font-size: 0.75rem;
  overflow-y: hidden;

  @media (min-width: ${bp.md}) {
    font-size: 1rem;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 0.75rem;
  }

  @media (min-width: ${bp.xl}) {
    /* font-size: 1.25rem; */
  }
`;

export const BasicEventInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const EventInfo = styled.div`
  margin: 5px 0;
  font-size: 0.75rem;
  color: #444;

  span {
    font-weight: bold;
  }

  @media (min-width: ${bp.sm}) {
    font-size: 1rem;
  }

  @media (min-width: ${bp.md}) {
    font-size: 1rem;
  }

  @media (min-width: ${bp.lg}) {
    /* font-size: 0.75rem; */
  }

  @media (min-width: ${bp.xl}) {
    /* font-size: 1.25rem; */
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

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 90%;
  max-width: 600px;
  height: auto;
  max-height: 90%;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
/* Blurred overlay */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Blur effect */
  backdrop-filter: blur(4px); /* Add a blur to the overlay */
  z-index: 999;
`;

/* Modal container */
export const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px 20px;
  /* max-width: 500px; */
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 800;
  overflow-y: auto;
`;

/* Close button */
export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #000;
  }
`;

// export const CreateButtonContainer = styled.div`
//   width: 100%;
//   padding: 0 10px 10px;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
// `;

// export const CreateButton = styled.button`
//   border: none;
//   padding: 10px;
//   width: 150px;
//   background-color: #494848;
//   color: white;
// `;

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
  /* padding: 0 10px; */
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
    color: blue;
  }
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
