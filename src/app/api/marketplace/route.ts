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

// GET: Fetch all products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: { user: true },
      // orderBy: { date: 'asc' },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Error fetching products' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Get the session (user info)
    const session = await getServerSession({ req, ...authOptions });

    // Check if the user is logged in (session exists)
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      );
    }

    // Check if the user is allowed to create products
    if (session.user.role !== 'admin' && session.user.role !== 'user') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const {
      name,
      description,
      price,
      category,
      contactEmail,
      contactPhone,
      images, // Expecting an array of image URLs
    } = body;

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !contactEmail ||
      !contactPhone
    ) {
      return NextResponse.json(
        {
          error:
            'All fields (name, description, price, category, contactEmail, contactPhone) are required',
        },
        { status: 400 }
      );
    }

    if (!Array.isArray(images) || images.length === 0) {
      return NextResponse.json(
        { error: 'At least one image is required' },
        { status: 400 }
      );
    }

    // Handle image uploads to Cloudinary
    const uploadedImages = [];
    if (images && Array.isArray(images) && images.length > 0) {
      // We expect `images` to be an array of URLs
      uploadedImages.push(...images); // Directly use the images array
    }

    // Create product in the database
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        category,
        contactEmail,
        contactPhone,
        primaryImageUrl: uploadedImages[0], // Use the first image as the primary image
        userId: session.user.id, // Add user's ID
        images: {
          create: uploadedImages.map((url) => ({ imageUrl: url })),
        },
      },
    });

    // Return the created product
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Error creating product || Unknown error' },
      { status: 500 }
    );
  }
}
