'use client';

import styled from 'styled-components';
import { breakpoints as bp } from '../../utils/layout';
import Image from 'next/image';
import Link from 'next/link';

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

export const AdList = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-items: flex-start;

  @media (min-width: ${bp.md}) {
    gap: 20px;
  }

  @media (min-width: ${bp.lg}) {
    gap: 30px;
  }
`;

export const AdCard = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border: 1px solid #ddd;
  padding: 2px 10px 10px;
  background-color: #f9f9f9;
  text-align: center;

  @media (min-width: ${bp.md}) {
    padding: 2px 20px 20px;
  }
`;

export const AdCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  /* border: 1px solid red; */
`;
export const AdCategory = styled.div`
  font-size: 8px;
  font-weight: bold;
  color: white;
  background-color: #4caf50;
  padding: 5px;
  border-radius: 5px;
  text-transform: uppercase;
  display: inline-block;
`;

export const AdImage = styled(Image)`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const AdItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  text-overflow: ellipsis;
  white-space: wrap;
  padding: 5px 0;
  min-height: 30px;
  max-height: 60px;
`;

export const AdTitle = styled.h3`
  font-size: 0.85rem;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${bp.md}) {
    font-size: 0.75rem;
  }
`;

export const AdDescription = styled.div`
  font-size: 0.75rem;
  color: #7f8c8d;
  width: 100%;
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
//   min-width: 150px;
//   max-width: 100%;
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

export const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;

export const FilterSelect = styled.select`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

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
  width: 50px;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
    color: black;
  }
`;

export const AdBasicInfoContainer = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  gap: 10px;
  flex-direction: column;
  height: 100px;
`;
