import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const url = req.nextUrl; // Get the URL of the incoming request
  const id = url.pathname.split('/').pop(); // Extract the `id` from the URL

  if (!id) {
    return NextResponse.json(
      { error: 'Event ID not provided' },
      { status: 400 }
    );
  }

  try {
    // Fetch the event by `id` using Prisma
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        // Include related data if necessary, e.g., user
        user: true,
      },
    });

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    return NextResponse.json(
      { error: 'Error fetching event' },
      { status: 500 }
    );
  }
}
