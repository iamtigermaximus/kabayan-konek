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
    const events = await prisma.event.findMany({
      include: { user: true },
      // orderBy: { date: 'asc' },
    });
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Error fetching events' },
      { status: 500 }
    );
  }
}

// POST: Create a new event
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // const session = await getServerSession({ req, ...authOptions });
    // if (!session || session.user.role !== 'admin') {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const session = await getServerSession({ req, ...authOptions });

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      );
    }

    if (session.user.role !== 'admin' && session.user.role !== 'user') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { title, description, date, time, address, image } = body;

    if (!title || !description || !date || !time || !address) {
      return NextResponse.json(
        {
          error:
            'All fields (title, description,date,time,address) are required',
        },
        { status: 400 }
      );
    }

    let imageUrl = null;
    // Handle optional image upload
    if (image) {
      const uploadedImage = await cloudinary.uploader.upload(image, {
        folder: 'events_folder',
      });
      imageUrl = uploadedImage.secure_url;
    }

    // Create article in the database
    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        time,
        address,
        imageUrl,
        userId: session.user.id, // Add admin's ID as the userId
      },
    });

    // Return the created article
    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { error: 'Error creating event || Unknown error' },
      { status: 500 }
    );
  }
}
