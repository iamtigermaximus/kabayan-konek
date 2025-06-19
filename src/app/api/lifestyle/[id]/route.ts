import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  const url = req.nextUrl; // Get the URL of the incoming request
  const id = url.pathname.split('/').pop(); // Extract the `id` from the URL

  if (!id) {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  }

  try {
    // Fetch the article by `id` using Prisma
    const article = await prisma.lifestyleArticle.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      { error: 'Error fetching article' },
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
    await prisma.lifestyleArticle.delete({
      where: { id },
    });

    // ADD THIS LINE - Triggers sitemap update after creation
    await revalidatePath('/api/server-sitemap');

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

    const { title, content, image } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const updatedArticle = await prisma.lifestyleArticle.update({
      where: { id },
      data: {
        title,
        content,
        imageUrl: image,
      },
    });

    // ADD THIS LINE - Triggers sitemap update after creation
    await revalidatePath('/api/server-sitemap');

    return NextResponse.json(updatedArticle);
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json(
      { error: 'Error updating article' },
      { status: 500 }
    );
  }
}
