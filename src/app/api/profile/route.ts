import prisma from '@/lib/prisma';
import { v2 as cloudinary } from 'cloudinary';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
// import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

// Correct Cloudinary config setup
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// GET request to fetch all lifestyle articles
export async function GET() {
  try {
    const kabayanSpotlights = await prisma.kabayanSpotlight.findMany({
      include: { user: true },
    });
    return NextResponse.json(kabayanSpotlights);
  } catch (error) {
    console.error('Error fetching lifestyle articles:', error);
    return NextResponse.json(
      { error: 'Error fetching lifestyle articles' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    // Convert NextRequest to JSON
    const body = await req.json();

    // Get session for authentication
    const session = await getServerSession({ req, ...authOptions });
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { title, content, image } = body;

    // Ensure title and content are provided
    if (!title || !content) {
      return NextResponse.json(
        { error: 'All fields (title, content) are required' },
        { status: 400 }
      );
    }

    let imageUrl = null;

    // Handle optional image upload
    if (image) {
      const uploadedImage = await cloudinary.uploader.upload(image, {
        folder: 'kabayan_spotlights',
      });
      imageUrl = uploadedImage.secure_url;
    }

    // Create article in the database
    const newArticle = await prisma.kabayanSpotlight.create({
      data: {
        title,
        content,
        imageUrl,
        userId: session.user.id, // Add admin's ID as the userId
      },
    });

    // Return the created article
    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    console.error('Error creating lifestyle article:', error);
    return NextResponse.json(
      { error: 'Error creating article || Unknown error' },
      { status: 500 }
    );
  }
}
