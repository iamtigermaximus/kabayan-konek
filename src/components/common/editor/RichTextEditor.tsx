'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { TextAlign } from '@tiptap/extension-text-align';
import { Underline } from '@tiptap/extension-underline';
import { Heading } from '@tiptap/extension-heading';
import { Link as TiptapLink } from '@tiptap/extension-link';
import { Image as TiptapImage } from '@tiptap/extension-image';
import { Blockquote } from '@tiptap/extension-blockquote';
import { HorizontalRule } from '@tiptap/extension-horizontal-rule';
import { CodeBlock } from '@tiptap/extension-code-block';
import { TextStyle } from '@tiptap/extension-text-style';
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
} from 'react-icons/fa';

export const ToolbarContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
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

export const StyledEditorContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  min-height: 200px;
  background: #fff;
  overflow-y: auto;
`;

interface RichTextEditorProps {
  content: string;
  onContentChange: (newContent: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content,
  onContentChange,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['paragraph', 'heading'],
      }),
      Underline,
      Heading.configure({ levels: [1, 2, 3] }),
      TiptapLink,
      TiptapImage,
      Blockquote,
      HorizontalRule,
      CodeBlock,
      TextStyle,
    ],
    content,
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML());
    },
  });

  const handleFontSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const fontSize = event.target.value;
    editor?.chain().focus().setMark('textStyle', { fontSize }).run();
  };

  return (
    <div>
      <ToolbarContainer>
        <ToolbarButton
          onClick={() => editor?.chain().focus().toggleBold().run()}
        >
          <FaBold />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor?.chain().focus().toggleItalic().run()}
        >
          <FaItalic />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
        >
          <FaUnderline />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor?.chain().focus().setTextAlign('left').run()}
        >
          <FaAlignLeft />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor?.chain().focus().setTextAlign('center').run()}
        >
          <FaAlignCenter />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor?.chain().focus().setTextAlign('right').run()}
        >
          <FaAlignRight />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor?.chain().focus().setTextAlign('justify').run()}
        >
          <FaAlignJustify />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor?.chain().focus().toggleCode().run()}
        >
          <FaCode />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
        >
          <FaQuoteRight />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor?.chain().focus().setImage({ src: '' }).run()}
        >
          <FaImage />
        </ToolbarButton>
        <FontSizeSelect onChange={handleFontSizeChange} defaultValue="16px">
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
        </FontSizeSelect>
      </ToolbarContainer>
      <StyledEditorContainer>
        <EditorContent editor={editor} />
      </StyledEditorContainer>
    </div>
  );
};

export default RichTextEditor;
