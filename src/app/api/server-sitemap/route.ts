import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Fetch all dynamic content
    const [lifestyles, profiles, trends, events, marketplaces, advertisements] =
      await Promise.all([
        prisma.lifestyleArticle.findMany({
          select: { id: true, updatedAt: true },
        }),
        prisma.kabayanSpotlight.findMany({
          select: { id: true, updatedAt: true },
        }),
        prisma.trendArticle.findMany({ select: { id: true, updatedAt: true } }),
        prisma.event.findMany({ select: { id: true, updatedAt: true } }),
        prisma.product.findMany({ select: { id: true, updatedAt: true } }),
        prisma.advertisement.findMany({
          select: { id: true, updatedAt: true },
        }),
      ]);

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!-- Static Pages -->
        <url><loc>https://kabayankonek.com/lifestyle</loc><priority>1.0</priority></url>
        <url><loc>https://kabayankonek.com/profile</loc><priority>0.9</priority></url>
        <url><loc>https://kabayankonek.com/trends</loc><priority>0.9</priority></url>
        <url><loc>https://kabayankonek.com/events</loc><priority>0.8</priority></url>
        <url><loc>https://kabayankonek.com/marketplace</loc><priority>0.7</priority></url>
        <url><loc>https://kabayankonek.com/advertisement</loc><priority>0.6</priority></url>
        
        <!-- Dynamic Routes -->
        ${lifestyles
          .map(
            (item) => `
          <url>
            <loc>https://kabayankonek.com/lifestyle/${item.id}</loc>
            <lastmod>${new Date(item.updatedAt).toISOString()}</lastmod>
            <priority>0.7</priority>
          </url>
        `
          )
          .join('')}
        ${profiles
          .map(
            (item) => `
          <url>
            <loc>https://kabayankonek.com/profile/${item.id}</loc>
            <lastmod>${new Date(item.updatedAt).toISOString()}</lastmod>
            <priority>0.6</priority>
          </url>
        `
          )
          .join('')}
        ${trends
          .map(
            (item) => `
          <url>
            <loc>https://kabayankonek.com/trends/${item.id}</loc>
            <lastmod>${new Date(item.updatedAt).toISOString()}</lastmod>
            <priority>0.6</priority>
          </url>
        `
          )
          .join('')}
        ${events
          .map(
            (item) => `
          <url>
            <loc>https://kabayankonek.com/events/${item.id}</loc>
            <lastmod>${new Date(item.updatedAt).toISOString()}</lastmod>
            <priority>0.5</priority>
          </url>
        `
          )
          .join('')}
        ${marketplaces
          .map(
            (item) => `
          <url>
            <loc>https://kabayankonek.com/marketplace/${item.id}</loc>
            <lastmod>${new Date(item.updatedAt).toISOString()}</lastmod>
            <priority>0.5</priority>
          </url>
        `
          )
          .join('')}
        ${advertisements
          .map(
            (item) => `
          <url>
            <loc>https://kabayankonek.com/advertisement/${item.id}</loc>
            <lastmod>${new Date(item.updatedAt).toISOString()}</lastmod>
            <priority>0.4</priority>
          </url>
        `
          )
          .join('')}
      </urlset>`;

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=1800',
      },
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);
    return new NextResponse(null, { status: 500 });
  }
}
