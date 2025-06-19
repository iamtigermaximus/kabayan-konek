import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

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

export async function PUT(req: NextRequest) {
  const url = req.nextUrl;
  const id = url.pathname.split('/').pop(); // Extract `id` from the URL

  if (!id) {
    return NextResponse.json(
      { error: 'Event ID not provided' },
      { status: 400 }
    );
  }

  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { title, description, date, time, address, image } = body;

    if (!title || !description || !date || !time || !address || !image) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Find the product to be updated
    const event = await prisma.event.findUnique({
      where: { id },
    });

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    const isOwner = event.userId === session.user.id;
    const isAdmin = session.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Update the event details
    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        title,
        description,
        date,
        time,
        address,
        imageUrl: image,
      },
    });

    // ADD THIS LINE - Triggers sitemap update after creation
    await revalidatePath('/api/server-sitemap');

    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.error('Error updating event:', error);
    return NextResponse.json(
      { error: 'Error updating event' },
      { status: 500 }
    );
  }
}

// Handle DELETE Request to delete an event
export async function DELETE(req: NextRequest) {
  const url = req.nextUrl;
  const id = url.pathname.split('/').pop(); // Extract `id` from the URL

  if (!id) {
    return NextResponse.json(
      { error: 'Event ID not provided' },
      { status: 400 }
    );
  }

  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const event = await prisma.event.findUnique({
      where: { id },
    });

    if (!event) {
      return NextResponse.json(
        { error: 'Advertisement not found' },
        { status: 404 }
      );
    }

    const isOwner = event.userId === session.user.id;
    const isAdmin = session.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Proceed to delete the product
    await prisma.event.delete({ where: { id } });

    // ADD THIS LINE - Triggers sitemap update after creation
    await revalidatePath('/api/server-sitemap');

    return NextResponse.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    return NextResponse.json(
      { error: 'Error deleting event' },
      { status: 500 }
    );
  }
}
