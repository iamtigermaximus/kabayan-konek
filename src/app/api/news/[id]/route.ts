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

export async function DELETE(req: NextRequest) {
  const url = req.nextUrl;
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  }

  try {
    await prisma.newsArticle.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Article deleted successfully' });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json(
      { error: 'Error deleting article' },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const url = req.nextUrl;
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  }

  try {
    const body = await req.json();

    const { title, contentUrl, newsSummary, date, source } = body;

    if (!title || !contentUrl || !newsSummary || !date || !source) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const updatedArticle = await prisma.newsArticle.update({
      where: { id },
      data: {
        title,
        contentUrl,
        newsSummary,
        date,
        source,
      },
    });

    return NextResponse.json(updatedArticle);
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json(
      { error: 'Error updating article' },
      { status: 500 }
    );
  }
}
