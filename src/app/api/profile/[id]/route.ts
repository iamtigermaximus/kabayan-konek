import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const url = req.nextUrl; // Get the URL of the incoming request
  const id = url.pathname.split('/').pop(); // Extract the `id` from the URL

  if (!id) {
    return NextResponse.json(
      { error: 'Kabayan article not found' },
      { status: 404 }
    );
  }

  try {
    // Fetch the article by `id` using Prisma
    const article = await prisma.kabayanSpotlight.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!article) {
      return NextResponse.json(
        { error: 'Kabayan Article not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error('Error fetching kabayan article:', error);
    return NextResponse.json(
      { error: 'Error fetching kabayan article' },
      { status: 500 }
    );
  }
}

