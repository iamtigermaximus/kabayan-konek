import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

// GET: Fetch all events
export async function GET() {
  try {
    const newsArticles = await prisma.newsArticle.findMany({
      include: { user: true },
      // orderBy: { date: 'asc' },
    });
    return NextResponse.json(newsArticles);
  } catch (error) {
    console.error('Error fetching news articles:', error);
    return NextResponse.json(
      { error: 'Error fetching news articles:' },
      { status: 500 }
    );
  }
}

// POST: Create a new event
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const session = await getServerSession({ req, ...authOptions });
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { title, contentUrl, newsSummary, date, source } = body;

    if (!title || !contentUrl || !newsSummary || !date || !source) {
      return NextResponse.json(
        {
          error:
            'All fields ( title,contentUrl,newsSummary,date,source,) are required',
        },
        { status: 400 }
      );
    }

    // Create article in the database
    const newNewsArticle = await prisma.newsArticle.create({
      data: {
        title,
        contentUrl,
        newsSummary,
        date: new Date(date),
        source,
        userId: session.user.id, // Add admin's ID as the userId
      },
    });

    // Return the created article
    return NextResponse.json(newNewsArticle, { status: 201 });
  } catch (error) {
    console.error('Error creating news article:', error);
    return NextResponse.json(
      { error: 'Error creating event || Unknown error' },
      { status: 500 }
    );
  }
}
