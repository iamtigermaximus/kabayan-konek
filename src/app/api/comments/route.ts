import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// Add a comment
export const POST = async (request: Request) => {
  const { userId, content, parentId, lifestyleArticleId, kabayanSpotlightId } =
    await request.json();

  try {
    // Ensure the userId and content are provided
    if (!userId || !content) {
      return NextResponse.json(
        { error: 'userId and content are required' },
        { status: 400 }
      );
    }

    // Create the new comment or reply
    const newComment = await prisma.comment.create({
      data: {
        content,
        userId,
        parentId: parentId || null, // if parentId exists, it's a reply, else a top-level comment
        lifestyleArticleId,
        kabayanSpotlightId,
      },
    });

    return NextResponse.json({ success: true, comment: newComment });
  } catch (error: unknown) {
    // Handle error gracefully
    if (error instanceof Error) {
      console.error('Error adding comment:', error.message);
      return NextResponse.json({ success: false, error: error.message });
    } else {
      console.error('Unexpected error:', error);
      return NextResponse.json({
        success: false,
        error: 'An unexpected error occurred',
      });
    }
  }
};

// Fetch comments for an entity (lifestyleArticle or kabayanSpotlight)
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const entityType = searchParams.get('entityType'); // 'lifestyleArticle' or 'kabayanSpotlight'
  const entityId = searchParams.get('entityId');

  // Validate entity type and ID
  if (!entityType || !entityId) {
    return NextResponse.json(
      { error: 'entityType and entityId are required' },
      { status: 400 }
    );
  }

  try {
    // Fetch comments with replies for the given entity
    const comments = await prisma.comment.findMany({
      where: {
        [`${entityType}Id`]: entityId,
        parentId: null, // Fetch only top-level comments (those without a parent)
      },
      include: {
        replies: {
          include: {
            user: { select: { name: true, image: true } }, // Include user data for replies
            replies: {
              include: {
                user: { select: { name: true, image: true } }, // Nested replies (if any)
              },
            },
          },
        },
        user: { select: { name: true, image: true } }, // Include user data for top-level comment
      },
      orderBy: {
        createdAt: 'asc', // Optional: Sort by creation date
      },
    });

    // console.log('Fetched comments with user data:', comments);

    // Sanitize comment data (add default user info if user is missing)
    const sanitizedComments = comments.map((comment) => ({
      ...comment,
      user: comment.user || { name: 'Unknown User', image: '' }, // Default if no user found
    }));

    return NextResponse.json({ success: true, comments: sanitizedComments });
  } catch (error: unknown) {
    // Handle error gracefully
    if (error instanceof Error) {
      console.error('Error fetching comments:', error.message);
      return NextResponse.json({ success: false, error: error.message });
    } else {
      console.error('Unexpected error:', error);
      return NextResponse.json({
        success: false,
        error: 'An unexpected error occurred',
      });
    }
  }
};
