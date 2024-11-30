import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownPageProps {
  filePath: string;
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [filePath]);

  return (
    <div className="markdown-container">
      <ReactMarkdown children={markdownContent} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default MarkdownPage;
