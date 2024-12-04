import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    // Get the current session of the logged-in user
    const session = await getServerSession(authOptions);

    // Check if there's no session or the user ID is missing (unauthorized)
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Fetch the products that belong to the logged-in user
    const products = await prisma.product.findMany({
      where: {
        userId: session.user.id, // Filter products by the logged-in user's ID
      },
      include: {
        images: true, // Include the related images for each product
      },
      orderBy: {
        createdAt: 'desc', // Order by creation date (desc)
      },
    });

    // Return the fetched products as a JSON response
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
