import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Adjust to your prisma instance path

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop(); // Extract the ID from the URL

  if (!id) {
    return NextResponse.json(
      { error: 'Advertisement ID is required' },
      { status: 400 }
    );
  }

  try {
    const advertisement = await prisma.advertisement.findUnique({
      where: { id },
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
