'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaCode,
  FaQuoteRight,
  FaImage,
  FaStrikethrough,
  FaSubscript,
  FaSuperscript,
  FaHighlighter,
  FaLink,
} from 'react-icons/fa';
// Tiptap imports
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { Heading } from '@tiptap/extension-heading';
import { Link as TiptapLink } from '@tiptap/extension-link';
import { Image as TiptapImage } from '@tiptap/extension-image';
import { Blockquote } from '@tiptap/extension-blockquote';
import { HorizontalRule } from '@tiptap/extension-horizontal-rule';
import { TextAlign } from '@tiptap/extension-text-align';
import { CodeBlock } from '@tiptap/extension-code-block';
import { TextStyle } from '@tiptap/extension-text-style';
import { Underline } from '@tiptap/extension-underline';
import { FontFamily } from '@tiptap/extension-font-family';
import { Subscript } from '@tiptap/extension-subscript';
import { Superscript } from '@tiptap/extension-superscript';
import { Highlight } from '@tiptap/extension-highlight';
import { Editor } from '@tiptap/core';

export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ToolbarButton = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }

  svg {
    font-size: 16px;
  }
`;

export const FontSizeSelect = styled.select`
  margin-left: auto;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

// export const StyledEditorContainer = styled.div`
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   padding: 10px;
//   min-height: 200px;
//   background: #fff;
//   overflow-y: auto;
// `;

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

interface RichTextEditorProps {
  content: string;
  onContentChange: (newContent: string) => void;
  editor: Editor | null; // Use the `Editor` type from @tiptap/core
  setEditor: (editor: Editor | null) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content,
  onContentChange,
  editor,
  setEditor,
}) => {
  const editorInstance = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['paragraph', 'heading'],
      }),
      Underline,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6], // Supports all levels of headings
        HTMLAttributes: {
          class: 'editor-heading',
        },
      }),
      TiptapLink,
      TiptapImage,
      Blockquote,
      HorizontalRule,
      TextAlign.configure({ types: ['paragraph', 'heading'] }),
      CodeBlock,
      TextStyle,
      FontFamily.configure({
        types: ['textStyle'], // Apply font family to textStyle
      }),
      Subscript,
      Superscript,
      Highlight,
    ],
    content,
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML());
    },
  });

  // Set the editor instance in the parent component when initialized
  useEffect(() => {
    if (editorInstance) {
      setEditor(editorInstance);
    }
  }, [editorInstance, setEditor]);

  const handleFontChange = (fontFamily: string) => {
    if (editor) {
      editor.chain().focus().setFontFamily(fontFamily).run();
    }
  };

  return (
    <div>
      <ToolbarContainer>
        {/* Font Family Dropdown */}
        <div>
          <select
            onChange={(e) => handleFontChange(e.target.value)}
            defaultValue=""
            style={{ padding: '5px 10px' }}
          >
            <option value="">Select Font</option>
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
          </select>
        </div>
        {/* <div>
      <select
        onChange={handleFontSizeChange}
        defaultValue="16px"
      >
        <option value="12px">12px</option>
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="20px">20px</option>
        <option value="24px">24px</option>
      </select>
    </div> */}

        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().toggleBold().run()}
        >
          <FaBold />
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
        >
          <FaItalic />
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
        >
          <FaUnderline />
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().toggleStrike().run()}
        >
          <FaStrikethrough />
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().toggleSubscript().run()}
        >
          <FaSubscript />{' '}
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().toggleSuperscript().run()}
        >
          <FaSuperscript />
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().toggleHighlight().run()}
        >
          <FaHighlighter />
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().setTextAlign('left').run()}
        >
          <FaAlignLeft />
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().setTextAlign('center').run()}
        >
          <FaAlignCenter />
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().setTextAlign('right').run()}
        >
          <FaAlignRight />
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().setTextAlign('justify').run()}
        >
          <FaAlignJustify />
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().toggleCode().run()}
        >
          <FaCode />
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => {
            const url = prompt('Enter the URL');
            if (url) {
              editor?.chain().focus().setLink({ href: url }).run();
            }
          }}
        >
          <FaLink />
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
        >
          <FaQuoteRight />
        </ToolbarButton>
        <ToolbarButton
          type="button"
          onClick={() => editor?.chain().focus().setImage({ src: '' }).run()}
        >
          <FaImage />
        </ToolbarButton>
      </ToolbarContainer>

      {/* Ensure editor is initialized before rendering the editor */}
      <StyledEditorContainer>
        {editor && <EditorContent editor={editor} />}
      </StyledEditorContainer>
    </div>
  );
};

export default RichTextEditor;
