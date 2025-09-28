import EventDetails from "@/components/events/events-details/EventDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  address: string;
  imageUrl?: string;
}

interface Props {
  params: Promise<{ id: string }>;
}

// ✅ CORRECT: Use generateMetadata for dynamic pages
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const event = await fetchEvent(id);

  if (!event) {
    return {
      title: "Event Not Found | KABAYAN KONEK",
    };
  }

  // ✅ CRITICAL: Dynamic canonical URL
  const canonicalUrl = `https://www.kabayankonek.com/events/${event.id}`;

  return {
    title: `${event.title} | KABAYAN KONEK Events`,
    description: event.description.slice(0, 150),
    // ✅ CRITICAL: This fixes the canonical issue
    alternates: {
      canonical: canonicalUrl,
    },
    keywords:
      "Filipino community events, Kabayan Konek events, Pinoy gatherings Finland, Filipino festivals Finland, Filipino cultural events",
    openGraph: {
      title: `${event.title} | KABAYAN KONEK Events`,
      description: event.description.slice(0, 150),
      url: canonicalUrl,
      images: [
        {
          url:
            event.imageUrl ||
            "https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png",
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
      type: "website",
    },
    twitter: {
      title: `${event.title} | KABAYAN KONEK Events`,
      description: event.description.slice(0, 150),
      images: [
        {
          url:
            event.imageUrl ||
            "https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png",
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
      card: "summary_large_image",
    },
  };
}

// Fetch event data for metadata
const fetchEvent = async (id: string): Promise<Event | null> => {
  try {
    const res = await fetch(`https://www.kabayankonek.com/api/events/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("Error fetching event:", err);
    return null;
  }
};

// ✅ Simple page component - EventDetails fetches data internally
const EventDetailsPage = async ({ params }: Props) => {
  // The params prop is accepted but not used since EventDetails uses useParams()
  const { id } = await params;
  const event = await fetchEvent(id);

  if (!event) {
    notFound();
  }

  return <EventDetails />;
};

export default EventDetailsPage;
