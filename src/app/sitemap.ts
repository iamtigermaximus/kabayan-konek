import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [lifestyles, profiles, trends, events, marketplaces, advertisements] =
    await Promise.all([
      prisma.lifestyleArticle.findMany({
        select: { id: true, updatedAt: true },
      }),
      prisma.kabayanSpotlight.findMany({
        select: { id: true, updatedAt: true },
      }),
      prisma.trendArticle.findMany({
        select: { id: true, updatedAt: true },
      }),
      prisma.event.findMany({
        select: { id: true, updatedAt: true },
      }),
      prisma.product.findMany({
        select: { id: true, updatedAt: true },
      }),
      prisma.advertisement.findMany({
        select: { id: true, updatedAt: true },
      }),
    ]);

  // Static pages with www URLs
  const staticPages = [
    { url: "https://www.kabayankonek.com", priority: 1.0 },
    { url: "https://www.kabayankonek.com/about", priority: 0.5 },
    { url: "https://www.kabayankonek.com/advertisement", priority: 0.6 },
    { url: "https://www.kabayankonek.com/events", priority: 0.8 },
    { url: "https://www.kabayankonek.com/lifestyle", priority: 1.0 },
    { url: "https://www.kabayankonek.com/marketplace", priority: 0.7 },
    { url: "https://www.kabayankonek.com/trends", priority: 0.9 },
    { url: "https://www.kabayankonek.com/profile", priority: 0.8 },
    { url: "https://www.kabayankonek.com/privacy-policy", priority: 0.3 },
    { url: "https://www.kabayankonek.com/terms-and-conditions", priority: 0.3 },
  ];

  // Dynamic pages with www URLs
  const dynamicPages = [
    ...lifestyles.map((item) => ({
      url: `https://www.kabayankonek.com/lifestyle/${item.id}`,
      lastModified: item.updatedAt,
      priority: 0.7,
    })),
    ...profiles.map((item) => ({
      url: `https://www.kabayankonek.com/profile/${item.id}`,
      lastModified: item.updatedAt,
      priority: 0.6,
    })),
    ...trends.map((item) => ({
      url: `https://www.kabayankonek.com/trends/${item.id}`,
      lastModified: item.updatedAt,
      priority: 0.6,
    })),
    ...events.map((item) => ({
      url: `https://www.kabayankonek.com/events/${item.id}`,
      lastModified: item.updatedAt,
      priority: 0.5,
    })),
    ...marketplaces.map((item) => ({
      url: `https://www.kabayankonek.com/marketplace/${item.id}`,
      lastModified: item.updatedAt,
      priority: 0.5,
    })),
    ...advertisements.map((item) => ({
      url: `https://www.kabayankonek.com/advertisement/${item.id}`,
      lastModified: item.updatedAt,
      priority: 0.4,
    })),
  ];

  return [
    ...staticPages.map((page) => ({
      url: page.url,
      lastModified: new Date(),
      priority: page.priority,
    })),
    ...dynamicPages,
  ];
}
