import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const id = url.pathname.split('/').pop(); // Extract the ID from the URL

  if (!id) {
    return NextResponse.json(
      { error: 'News article not found' },
      { status: 404 }
    );
  }

  try {
    // Fetch the news article by ID using Prisma
    const newsArticle = await prisma.newsArticle.findUnique({
      where: { id },
      include: { user: true }, // Include associated user details, if applicable
    });

    if (!newsArticle) {
      return NextResponse.json(
        { error: 'News article not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(newsArticle);
  } catch (error) {
    console.error('Error fetching news article:', error);
    return NextResponse.json(
      { error: 'Error fetching news article' },
      { status: 500 }
    );
  }
}
