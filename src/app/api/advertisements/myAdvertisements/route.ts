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

    // Fetch the advertisements that belong to the logged-in user
    const advertisements = await prisma.advertisement.findMany({
      where: {
        userId: session.user.id, // Filter advertisement by the logged-in user's ID
      },
      orderBy: {
        createdAt: 'desc', // Optional: Order by creation date (desc)
      },
    });

    // Return the fetched advertisement as a JSON response
    return NextResponse.json(advertisements);
  } catch (error) {
    console.error('Error fetching advertisement:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
