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

// POST: Create a new product
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const session = await getServerSession({ req, ...authOptions });
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const {
      name,
      description,
      price,
      category,
      contactEmail,
      contactPhone,
      image,
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
            'All fields (name, description,price,category,contactEmail, contactPhone ) are required',
        },
        { status: 400 }
      );
    }

    let imageUrl = null;
    // Handle optional image upload
    if (image) {
      const uploadedImage = await cloudinary.uploader.upload(image, {
        folder: 'marketplace_folder',
      });
      imageUrl = uploadedImage.secure_url;
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
        imageUrl,
        userId: session.user.id, // Add admin's ID as the userId
      },
    });

    // Return the created article
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Error creating product || Unknown error' },
      { status: 500 }
    );
  }
}
