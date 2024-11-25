import prisma from '@/lib/prisma';
import { v2 as cloudinary } from 'cloudinary';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
// import { z } from 'zod';

// // Schema Validation
// const eventSchema = z.object({
//   name: z.string().min(1, 'Event name is required'),
//   description: z.string().min(1, 'Description is required'),
//   date: z.string().refine((val) => !isNaN(Date.parse(val)), 'Invalid date'),
//   time: z.string().min(1, 'Time is required'),
//   address: z.string().min(1, 'Address is required'),
//   imageUrl: z.string().url().optional(), // Optional and must be a valid URL if provided
// });

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

    const session = await getServerSession({ req, ...authOptions });
    if (!session || session.user.role !== 'admin') {
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
