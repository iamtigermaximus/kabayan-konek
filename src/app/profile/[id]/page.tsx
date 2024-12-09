import ProfileDetails from '@/components/profile-feature/profile-details/ProfileDetails';
import { stripHtml } from '@/utils/helper';
import { Metadata } from 'next';

interface KabayanArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

// Type Definitions
type Params = Promise<{ id: string }>;

// This function generates dynamic metadata based on the article
export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const { id } = await params; // Await the params Promise
  const article = await fetchArticle(id); // Fetch the article here

  if (!article) {
    return {
      title: 'Kabayan Konek - Article Not Found',
      description: 'This article could not be found.',
    };
  }

  const articleTitle = article.title;
  const cleanContent = stripHtml(article.content); // Strip HTML tags from content
  const articleContent = cleanContent.slice(0, 150);
  const imageUrl =
    article.imageUrl ||
    'https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png';

  return {
    title: articleTitle,
    description: articleContent,
    keywords:
      'Kabayan Spotlight, OFW Stories, Filipino Family in Finland, Pinoy Family in Finland, Kabayan community, Filipino profiles, Pinoy profiles, inspiring Pinoy stories, Filipino achievements, Filipino leaders, Kabayan success stories, Pinoy success stories, Filipino personalities, Pinoy personalities, Filipino influencers, Pinoy influencers, Filipino culture, Pinoy culture, Filipino heroes, Pinoy heroes, Filipinos making a difference, Filipino empowerment, Pinoy empowerment, Filipinos in Finland, Filipino expats, Pinoy expats, Kabayan spotlight Finland, Filipino stories Finland, Pinoy stories Finland, Kabayan Konek community, Filipino community Finland, Filipino culture in Finland, Filipino leaders in Finland, Filipino role models, Filipinos in Europe, Pinoy community Europe, Filipino community Europe, OFWs in Europe, Filipino diaspora Europe, Kabayan Europe, Pinoy expats Europe, Filipino success stories Europe, Filipino families in Europe, Filipino professionals Europe, Pinoy businesses Europe, Filipino entrepreneurs Europe, Filipino culture Europe, Pinoy culture Europe, Filipino heroes Europe, Pinoy heroes Europe, Filipinos making a difference Europe, Filipino empowerment Europe, Filipino communities in USA, Pinoy community USA, Filipino expats USA, OFWs in USA, Filipino families USA, Filipino business USA, Pinoy entrepreneurs USA, Filipino culture USA, Pinoy culture USA, Filipino role models USA, Filipino leaders USA, Kabayan community USA, Filipino success stories USA, Pinoy heroes USA, Filipino influencers USA, Filipino achievements USA, Pinoy influencers USA, Filipino empowerment USA, Filipino stories USA, Pinoy stories USA, Filipino professionals USA, Filipino families Australia, Pinoy community Australia, Filipino expats Australia, OFWs in Australia, Filipino business Australia, Pinoy entrepreneurs Australia, Filipino culture Australia, Filipino heroes Australia, Pinoy heroes Australia, Filipino diaspora Australia, Filipinos making a difference Australia, Filipino empowerment Australia, Pinoy culture Australia, Filipino success stories Australia, Kabayan community Australia, Filipino families Canada, Pinoy community Canada, Filipino expats Canada, Filipino professionals Canada, Filipino culture Canada, Filipino success stories Canada, Pinoy culture Canada, Pinoy heroes Canada, Kabayan community Canada, Filipinos making a difference Canada, Filipinos in the Middle East, Pinoy community Middle East, Filipino expats Middle East, OFWs in Middle East, Filipino families Middle East, Filipino business Middle East, Pinoy entrepreneurs Middle East, Filipino culture Middle East, Filipino heroes Middle East, Pinoy heroes Middle East, Filipino diaspora Middle East, Kabayan community Middle East, Pinoy culture in the Middle East, Filipino success stories Middle East, Pinoy professionals Middle East, Filipino empowerment Middle East, Filipino stories Middle East, Filipino expats worldwide, Pinoy expats worldwide, Kabayan community worldwide, Filipino communities around the world, Pinoy culture worldwide, Filipino heroes worldwide, Filipino leaders worldwide, Filipino role models worldwide, Filipino success stories worldwide, Pinoy businesses worldwide, Filipino entrepreneurs worldwide, Filipinos making a difference worldwide, Kabayan Konek global community, Filipino culture globally, Filipino empowerment worldwide',
    openGraph: {
      title: articleTitle,
      description: articleContent,
      url: `https://kabayankonek.com/profile/${article.id}`,
      images: [
        { url: imageUrl, width: 1200, height: 630, alt: 'Kabayan Konek Image' },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: articleTitle,
      description: articleContent,
      images: [
        { url: imageUrl, width: 1200, height: 630, alt: 'Kabayan Konek Image' },
      ],
    },
  };
};

// Fetching article data
const fetchArticle = async (id: string): Promise<KabayanArticle | null> => {
  try {
    const res = await fetch(`https://kabayankonek.com/api/profile/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch article');
    }

    return res.json();
  } catch (err) {
    console.error('Error fetching article:', err);
    return null;
  }
};

const ProfileDetailsPage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const article = await fetchArticle(id);

  if (!article) {
    return <div>Article not found.</div>;
  }

  return <ProfileDetails article={article} />;
};

export default ProfileDetailsPage;
