"use client";

import {
  Container,
  DividerContainer,
  DividerLine,
  DividerLabel,
  FeaturesSectionContainer,
  FeaturesCard,
  FeaturesImage,
  FeaturesTitleContainer,
  FeaturesTitle,
  ShowMoreButtonContainer,
  ShowMoreButtonLink,
  ShowMoreButton,
  EventsSectionContainer,
  EventCard,
  EventImage,
  EventDetails,
  EventName,
  // EventDescription,
  EventInfo,
  SectionContainer,
  // NewsList,
  // NewsItem,
  // NewsContent,
  // NewsHeadline,
  // NewsSummary,
  // NewsDate,
  // NewsSource,
  StyledLink,
  EventsSectionBannerContainer,
  // EventDescriptionSpan,
  BasicEventInfoContainer,
  PublishedDate,
  EventImageContainer,
} from "./Home.styles";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DefaultImage from "@/assets/NoImage2.jpg";
import HomeBanner from "../common/banners/HomeBanner";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import {
  ProductList,
  ProductCard,
  ProductCategoryContainer,
  ProductCategory,
  ProductImage,
  BasicProductInfoContainer,
  ProductItemContainer,
  ProductPrice,
  ProductTitle,
} from "../marketplace/Marketplace.styles";
import {
  AdBasicInfoContainer,
  AdCard,
  AdCategory,
  AdCategoryContainer,
  AdImage,
  AdItemContainer,
  AdList,
  AdTitle,
} from "../advertisement/Advertisement.styles";
interface LifestyleArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string; // Optional
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface KabayanArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string; // Optional
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface EventProps {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  address: string;
  imageUrl?: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
// interface NewsArticleProps {
//   id: string;
//   title: string;
//   contentUrl: string;
//   newsSummary: string;
//   date: Date;
//   source: string;
//   userId: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

export interface ProductProps {
  id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  contactEmail: string;
  contactPhone: string;
  primaryImageUrl: string;
  imageUrl?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

interface AdvertisementProps {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [lifestyleArticles, setLifestyleArticles] = useState<
    LifestyleArticle[]
  >([]);
  const [kabayanArticles, setKabayanArticles] = useState<KabayanArticle[]>([]);
  const [events, setEvents] = useState<EventProps[]>([]);
  // const [newsArticles, setNewsArticles] = useState<NewsArticleProps[]>([]);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [advertisements, setAdvertisements] = useState<AdvertisementProps[]>(
    []
  );

  const fetchArticles = async () => {
    try {
      const response = await fetch("/api/lifestyle");
      const data: LifestyleArticle[] = await response.json();
      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setLifestyleArticles(data);
    } catch (error) {
      console.error("Error fetching lifestyle articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchKabayanArticles = async () => {
    try {
      const response = await fetch("/api/profile");
      const data: KabayanArticle[] = await response.json();

      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setKabayanArticles(data);
    } catch (error) {
      console.error("Error fetching lifestyle articles:", error);
    }
  };

  useEffect(() => {
    fetchKabayanArticles();
  }, []);

  // const fetchEvents = async () => {
  //   try {
  //     const response = await fetch('/api/events');
  //     const data: EventProps[] = await response.json();

  //     const now = Date.now();

  //     // Ensure we're using the `date` field for sorting
  //     const validEvents = data.filter((event) => {
  //       // Filter out invalid or missing dates
  //       return event.date && !isNaN(new Date(event.date).getTime());
  //     });

  //     // Sort events by proximity to the current time (`now`)
  //     validEvents.sort((a, b) => {
  //       const dateA = new Date(a.date).getTime();
  //       const dateB = new Date(b.date).getTime();

  //       const isPastA = dateA < now;
  //       const isPastB = dateB < now;

  //       // Push past events to the end
  //       if (isPastA && !isPastB) return 1;
  //       if (!isPastA && isPastB) return -1;

  //       // For future events or both past, sort by date proximity
  //       return dateA - dateB;
  //     });

  //     setEvents(validEvents);
  //   } catch (error) {
  //     console.error('Error fetching events:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEvents();
  // }, []);
  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      const data: EventProps[] = await response.json();

      const now = Date.now();

      const validEvents = data.filter((event) => {
        // Ensure valid event date
        return event.date && !isNaN(new Date(event.date).getTime());
      });

      // Determine if an event is happening now
      const isEventNow = (event: EventProps): boolean => {
        const eventStart = new Date(event.date).getTime();
        const eventEnd = new Date(event.date).setHours(23, 59, 59, 999); // Assuming it ends by day-end if no explicit time

        return now >= eventStart && now <= eventEnd;
      };

      // Sort logic
      validEvents.sort((a, b) => {
        const eventNowA = isEventNow(a);
        const eventNowB = isEventNow(b);

        // Prioritize events happening now
        if (eventNowA && !eventNowB) return -1;
        if (!eventNowA && eventNowB) return 1;

        // For past and future events, sort by proximity to `now`
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();

        const isPastA = dateA < now;
        const isPastB = dateB < now;

        if (isPastA && !isPastB) return 1;
        if (!isPastA && isPastB) return -1;

        return dateA - dateB;
      });

      setEvents(validEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // const fetchNewsArticles = async () => {
  //   try {
  //     const response = await fetch('/api/news');
  //     const data: NewsArticleProps[] = await response.json();
  //     data.sort(
  //       (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  //     );
  //     setNewsArticles(data);
  //   } catch (error) {
  //     console.error('Error fetching news articles:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchNewsArticles();
  // }, []);

  const fetchMarketplace = async () => {
    try {
      const response = await fetch("/api/marketplace");
      const data: ProductProps[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching marketplace products:", error);
    }
  };

  const fetchAdvertisements = async () => {
    try {
      const response = await fetch("/api/advertisements");
      const data: AdvertisementProps[] = await response.json();
      setAdvertisements(data);
    } catch (error) {
      console.error("Error fetching advertisements:", error);
    }
  };

  useEffect(() => {
    fetchMarketplace();
    fetchAdvertisements();
  }, []);

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <Container>
      <HomeBanner />
      <DividerContainer>
        <DividerLine />
        <DividerLabel>FEATURE</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <FeaturesSectionContainer>
        {lifestyleArticles.slice(0, 6).map((lifestyle) => (
          <FeaturesCard key={lifestyle.id}>
            <FeaturesImage
              src={lifestyle.imageUrl || DefaultImage}
              alt={lifestyle.title}
              width={500} // Replace with appropriate width
              height={300} // Replace with appropriate height
              priority
            />
            <FeaturesTitleContainer>
              <StyledLink href={`/lifestyle/${lifestyle.id}`} passHref>
                <FeaturesTitle>{lifestyle.title}</FeaturesTitle>
              </StyledLink>
              <PublishedDate>
                Published on{" "}
                {new Date(lifestyle.createdAt).toLocaleDateString()}
              </PublishedDate>
            </FeaturesTitleContainer>
          </FeaturesCard>
        ))}
      </FeaturesSectionContainer>
      <ShowMoreButtonContainer>
        <ShowMoreButtonLink href="/lifestyle">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </ShowMoreButtonContainer>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>KABAYAN SPOTLIGHT</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <FeaturesSectionContainer>
        {kabayanArticles.slice(0, 6).map((profile) => (
          <FeaturesCard key={profile.id}>
            <FeaturesImage
              src={profile.imageUrl || DefaultImage}
              alt={profile.title}
              width={500}
              height={300}
              priority
            />
            <FeaturesTitleContainer>
              <StyledLink href={`/profile/${profile.id}`} passHref>
                <FeaturesTitle>{profile.title}</FeaturesTitle>
              </StyledLink>
              <PublishedDate>
                Published on {new Date(profile.createdAt).toLocaleDateString()}
              </PublishedDate>
            </FeaturesTitleContainer>
            {/* <div
              style={{
                padding: '0 5px',
                color: 'gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {profile.content.length > 100 ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: profile.content.slice(0, 200) + '...',
                    }}
                  />
                </>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: profile.content,
                  }}
                />
              )}
            </div> */}
          </FeaturesCard>
        ))}
      </FeaturesSectionContainer>
      <ShowMoreButtonContainer>
        <ShowMoreButtonLink href="/profile">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </ShowMoreButtonContainer>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>EVENTS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <EventsSectionBannerContainer>
        <div>
          {!session ? (
            <div
              style={{
                margin: "20px 0",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "#e6f7ff",
              }}
            >
              <h2 style={{ marginBottom: "10px" }}>
                Want to post your own events?
              </h2>
              <p style={{ marginBottom: "20px", color: "#555" }}>
                Log in or sign up to create and manage your events with ease.
                Join our community today!
              </p>
              <button
                onClick={handleLoginClick}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#222",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Log In or Sign Up
              </button>
            </div>
          ) : (
            <div
              style={{
                margin: "20px 0",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "#e6f7ff",
              }}
            >
              <h2 style={{ marginBottom: "10px" }}>
                Ready to share your events with the community?
              </h2>
              <p style={{ marginBottom: "20px", color: "#555" }}>
                You are logged in! Create and manage your events easily, and
                engage with your audience.
              </p>
            </div>
          )}
        </div>
      </EventsSectionBannerContainer>
      <EventsSectionContainer>
        {events.slice(0, 6).map((event) => (
          <EventCard key={event.id}>
            <EventImageContainer>
              <EventImage
                src={event.imageUrl || DefaultImage}
                alt={event.title}
                width={150}
                height={150}
                priority
              />
            </EventImageContainer>

            <EventDetails>
              <BasicEventInfoContainer>
                <EventInfo>
                  {event.date
                    ? new Date(event.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })
                    : "N/A"}
                </EventInfo>

                <EventInfo>{event.time}</EventInfo>
              </BasicEventInfoContainer>
              <StyledLink
                href={`/events/${event.id}`}
                key={event.id}
                style={{ textDecoration: "none" }}
              >
                <EventName>{event.title}</EventName>
              </StyledLink>
              {/* <EventDescription>
                {event.description.length > 100 ? (
                  <>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: event.description.slice(0, 100) + '...',
                      }}
                    ></div>
                    <StyledLink href={`/events/${event.id}`}>
                      <EventDescriptionSpan>Read More</EventDescriptionSpan>
                    </StyledLink>
                  </>
                ) : (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: event.description,
                    }}
                  ></div>
                )}
              </EventDescription> */}

              <EventInfo>{event.address}</EventInfo>
            </EventDetails>
          </EventCard>
        ))}
      </EventsSectionContainer>
      <ShowMoreButtonContainer>
        <ShowMoreButtonLink href="/events">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </ShowMoreButtonContainer>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>LATEST PRODUCTS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        <ProductList>
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id}>
              <ProductCategoryContainer>
                <ProductCategory>{product.category}</ProductCategory>
              </ProductCategoryContainer>
              <Link
                href={`/marketplace/${product.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ProductImage
                  src={product.primaryImageUrl || DefaultImage}
                  alt={product.name}
                  width={150}
                  height={150}
                  priority
                />
              </Link>
              <BasicProductInfoContainer>
                <ProductItemContainer>
                  <ProductPrice>€{product.price}</ProductPrice>
                </ProductItemContainer>
                <ProductItemContainer>
                  <Link
                    href={`/marketplace/${product.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ProductTitle>{product.name}</ProductTitle>
                  </Link>
                </ProductItemContainer>
                <ProductItemContainer>
                  {product.createdAt && (
                    <div
                      style={{
                        fontSize: "12px",
                        color: "gray",
                        marginTop: "5px",
                      }}
                    >
                      Posted {formatDistanceToNow(new Date(product.createdAt))}{" "}
                      ago
                    </div>
                  )}
                </ProductItemContainer>
              </BasicProductInfoContainer>
            </ProductCard>
          ))}
        </ProductList>
      </SectionContainer>
      <ShowMoreButtonContainer>
        <ShowMoreButtonLink href="/marketplace">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </ShowMoreButtonContainer>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>LATEST ADVERTISEMENTS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        <AdList>
          {advertisements.slice(0, 6).map((ad) => (
            <Link
              href={`/advertisement/${ad.id}`}
              key={ad.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <AdCard>
                <AdCategoryContainer>
                  <AdCategory>{ad.category}</AdCategory>
                </AdCategoryContainer>
                <AdImage
                  src={ad.imageUrl || DefaultImage}
                  alt={ad.title}
                  width={150}
                  height={150}
                  priority
                />
                <AdBasicInfoContainer>
                  <AdItemContainer>
                    <AdTitle>{ad.title}</AdTitle>
                  </AdItemContainer>
                  <AdItemContainer>
                    {/* <AdDescription>
                      {ad.description.length > 200 ? (
                        <>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: ad.description.slice(0, 100) + '...',
                            }}
                          ></div>

                          <div style={{ color: 'blue', cursor: 'pointer' }}>
                            <StyledLink href={`/advertisement/${ad.id}`}>
                              Read More
                            </StyledLink>
                          </div>
                        </>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ad.description,
                          }}
                        ></div>
                      )}
                    </AdDescription> */}
                    {ad.createdAt && (
                      <div
                        style={{
                          fontSize: "12px",
                          color: "gray",
                          marginTop: "5px",
                        }}
                      >
                        Posted {formatDistanceToNow(new Date(ad.createdAt))} ago
                      </div>
                    )}
                  </AdItemContainer>
                </AdBasicInfoContainer>
              </AdCard>
            </Link>
          ))}
        </AdList>
      </SectionContainer>
      <ShowMoreButtonContainer>
        <ShowMoreButtonLink href="/advertisement">
          <ShowMoreButton>Show More</ShowMoreButton>
        </ShowMoreButtonLink>
      </ShowMoreButtonContainer>
      {/* <DividerContainer>
        <DividerLine />
        <DividerLabel>LATEST NEWS</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        <NewsList>
          {newsArticles.slice(0, 6).map((news) => (
            <NewsItem key={news.id}>
              <NewsContent>
                <NewsHeadline>
                  <a
                    href={news.contentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {news.title}
                  </a>
                </NewsHeadline>
                <NewsSummary
                  dangerouslySetInnerHTML={{ __html: news.newsSummary }}
                ></NewsSummary>
                <NewsDate>
                  Published: {new Date(news.date).toLocaleDateString()}
                </NewsDate>
                <NewsSource>Source: {news.source}</NewsSource>
              </NewsContent>
            </NewsItem>
          ))}
        </NewsList>
      </SectionContainer>
      <ShowMoreButtonLink href="/news">
        <ShowMoreButton>Show More</ShowMoreButton>
      </ShowMoreButtonLink> */}
    </Container>
  );
};

export default Home;
