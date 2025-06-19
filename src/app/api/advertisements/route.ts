import prisma from '@/lib/prisma';
import { v2 as cloudinary } from 'cloudinary';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// Correct Cloudinary config setup
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// GET: Fetch all advertisements
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

// POST: Create a new advertisement
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // const session = await getServerSession({ req, ...authOptions });
    // if (!session || session.user.role !== 'admin') {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    // Get the session (user info)
    const session = await getServerSession({ req, ...authOptions });

    // Check if the user is logged in (session exists)
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      );
    }

    // Check if you want only admins to post or allow regular users
    // Remove this condition to allow all logged-in users to post
    if (session.user.role !== 'admin' && session.user.role !== 'user') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { title, description, category, contactEmail, contactPhone, image } =
      body;

    if (!title || !description || !category || !contactEmail || !contactPhone) {
      return NextResponse.json(
        {
          error:
            'All fields (title, description,category ,contactEmail,contactPhone) are required',
        },
        { status: 400 }
      );
    }

    let imageUrl = null;
    // Handle optional image upload
    if (image) {
      const uploadedImage = await cloudinary.uploader.upload(image, {
        folder: 'advertisements_folder',
      });
      imageUrl = uploadedImage.secure_url;
    }

    // Create advertisement in the database
    const newAdvertisement = await prisma.advertisement.create({
      data: {
        title,
        description,
        category,
        contactEmail,
        contactPhone,
        imageUrl,
        userId: session.user.id, // Add admin's ID as the userId
      },
    });

    // ADD THIS LINE - Triggers sitemap update after creation
    await revalidatePath('/api/server-sitemap');

    // Return the created advertisement
    return NextResponse.json(newAdvertisement, { status: 201 });
  } catch (error) {
    console.error('Error creating advertisement:', error);
    return NextResponse.json(
      { error: 'Error creating advertisement || Unknown error' },
      { status: 500 }
    );
  }
}
