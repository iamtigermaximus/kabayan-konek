'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Article {
  title: string;
  content: string;
}

const LifestyleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    // Fetch article data based on the id (replace with your API endpoint)
    const fetchArticle = async () => {
      const response = await fetch(`/api/lifestyle/${id}`); // Example API endpoint
      if (response.ok) {
        const data = await response.json();
        setArticle(data);
      }
    };

    if (id) fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default LifestyleDetails;
