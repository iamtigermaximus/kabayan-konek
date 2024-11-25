import prisma from '@/lib/prisma';
import { v2 as cloudinary } from 'cloudinary';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

// Correct Cloudinary config setup
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// GET: Fetch all events
export async function GET() {
  try {
    const advertisements = await prisma.advertisement.findMany({
      include: { user: true },
      // orderBy: { date: 'asc' },
    });
    return NextResponse.json(advertisements);
  } catch (error) {
    console.error('Error fetching advertisement:', error);
    return NextResponse.json(
      { error: 'Error fetching advertisement' },
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
    const { title, description, category, image } = body;

    if (!title || !description || !category) {
      return NextResponse.json(
        {
          error: 'All fields (title, description,category) are required',
        },
        { status: 400 }
      );
    }

    let imageUrl = null;
    // Handle optional image upload
    if (image) {
      const uploadedImage = await cloudinary.uploader.upload(image, {
        folder: 'ads_folder',
      });
      imageUrl = uploadedImage.secure_url;
    }

    // Create article in the database
    const newAdvertisement = await prisma.advertisement.create({
      data: {
        title,
        description,
        category,
        imageUrl,
        userId: session.user.id, // Add admin's ID as the userId
      },
    });

    // Return the created article
    return NextResponse.json(newAdvertisement, { status: 201 });
  } catch (error) {
    console.error('Error creating advertisement:', error);
    return NextResponse.json(
      { error: 'Error creating advertisement || Unknown error' },
      { status: 500 }
    );
  }
}
