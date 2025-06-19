import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Adjust to your prisma instance path
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const id = url.pathname.split('/').pop(); // Extract the ID from the URL

  if (!id) {
    return NextResponse.json(
      { error: 'Advertisement ID is required' },
      { status: 400 }
    );
  }

  try {
    const advertisement = await prisma.advertisement.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!advertisement) {
      return NextResponse.json(
        { error: 'Advertisement not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(advertisement, { status: 200 });
  } catch (error) {
    console.error('Error fetching advertisement:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching the advertisement' },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const url = req.nextUrl;
  const id = url.pathname.split('/').pop(); // Extract `id` from the URL

  if (!id) {
    return NextResponse.json(
      { error: 'Advertisement ID not provided' },
      { status: 400 }
    );
  }

  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { title, description, category, contactEmail, contactPhone, image } =
      body;

    if (
      !title ||
      !description ||
      !category ||
      !contactEmail ||
      !contactPhone ||
      !image
    ) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Find the product to be updated
    const advertisement = await prisma.advertisement.findUnique({
      where: { id },
    });

    if (!advertisement) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const isOwner = advertisement.userId === session.user.id;
    const isAdmin = session.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Update the product details
    const updatedAdvertisement = await prisma.advertisement.update({
      where: { id },
      data: {
        title,
        description,
        category,
        contactEmail,
        contactPhone,
        imageUrl: image,
      },
    });

    // ADD THIS LINE - Triggers sitemap update after creation
    await revalidatePath('/api/server-sitemap');

    return NextResponse.json(updatedAdvertisement);
  } catch (error) {
    console.error('Error updating advertisement:', error);
    return NextResponse.json(
      { error: 'Error updating advertisement' },
      { status: 500 }
    );
  }
}

// Handle DELETE Request to delete a product
export async function DELETE(req: NextRequest) {
  const url = req.nextUrl;
  const id = url.pathname.split('/').pop(); // Extract `id` from the URL

  if (!id) {
    return NextResponse.json(
      { error: 'Advertisement ID not provided' },
      { status: 400 }
    );
  }

  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const advertisement = await prisma.advertisement.findUnique({
      where: { id },
    });

    if (!advertisement) {
      return NextResponse.json(
        { error: 'Advertisement not found' },
        { status: 404 }
      );
    }

    const isOwner = advertisement.userId === session.user.id;
    const isAdmin = session.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Proceed to delete the product
    await prisma.advertisement.delete({ where: { id } });

    // ADD THIS LINE - Triggers sitemap update after creation
    await revalidatePath('/api/server-sitemap');

    return NextResponse.json({ message: 'Advertisement deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Error deleting product' },
      { status: 500 }
    );
  }
}
