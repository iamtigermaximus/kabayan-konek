import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Ensure prisma is imported from your lib
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth'; // Make sure authOptions are correctly configured

// Handle GET Request to fetch a product by ID
export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const id = url.pathname.split('/').pop(); // Extract `id` from the URL

  if (!id) {
    return NextResponse.json(
      { error: 'Product ID not provided' },
      { status: 400 }
    );
  }

  try {
    // Fetch the product with user info included
    const marketplaceProduct = await prisma.product.findUnique({
      where: { id },
      include: { user: true }, // Include user details (e.g., name, email) associated with the product
    });

    if (!marketplaceProduct) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const { user, ...filteredProduct } = marketplaceProduct; // Filter out sensitive user info
    const publicUser = { id: user.id, name: user.name, email: user.email }; // Expose basic user info

    return NextResponse.json({ ...filteredProduct, user: publicUser });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Error fetching product' },
      { status: 500 }
    );
  }
}

// Handle PUT Request to update a product
export async function PUT(req: NextRequest) {
  const url = req.nextUrl;
  const id = url.pathname.split('/').pop(); // Extract `id` from the URL

  if (!id) {
    return NextResponse.json(
      { error: 'Product ID not provided' },
      { status: 400 }
    );
  }

  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
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
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Find the product to be updated
    const product = await prisma.product.findUnique({ where: { id } });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const isOwner = product.userId === session.user.id;
    const isAdmin = session.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Update the product details
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        price: parseFloat(price), // Ensure price is a number
        category,
        contactEmail,
        contactPhone,
        imageUrl: image,
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Error updating product' },
      { status: 500 }
    );
  }
}

// Handle DELETE Request to delete a product
export async function DELETE(req: NextRequest) {
  const url = req.nextUrl;
  const id = url.pathname.split('/').pop(); // Extract `id` from the URL

  if (!id) {
    return NextResponse.json(
      { error: 'Product ID not provided' },
      { status: 400 }
    );
  }

  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const product = await prisma.product.findUnique({ where: { id } });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const isOwner = product.userId === session.user.id;
    const isAdmin = session.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Proceed to delete the product
    await prisma.product.delete({ where: { id } });

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Error deleting product' },
      { status: 500 }
    );
  }
}

// // Fetch a single product by ID
// async function getProductById(id: string) {
//   try {
//     const marketplaceProduct = await prisma.product.findUnique({
//       where: { id },
//       include: { user: true }, // Include user details (e.g., name, email) associated with the product
//     });

//     if (!marketplaceProduct) {
//       return NextResponse.json({ error: 'Product not found' }, { status: 404 });
//     }

//     const { user, ...filteredProduct } = marketplaceProduct; // Filter out sensitive user info
//     const publicUser = { id: user.id, name: user.name, email: user.email }; // Expose basic user info

//     return NextResponse.json({ ...filteredProduct, user: publicUser });
//   } catch (error) {
//     console.error('Error fetching product:', error);
//     return NextResponse.json(
//       { error: 'Error fetching product' },
//       { status: 500 }
//     );
//   }
// }

// // Fetch all products by the logged-in user ID
// async function getProductsByUserId(req: NextRequest) {
//   try {
//     const session = await getServerSession(authOptions);

//     if (!session) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     const userId = session.user.id; // Get the logged-in user's ID

//     // Fetch all products owned by the logged-in user
//     const products = await prisma.product.findMany({
//       where: { userId },
//     });

//     return NextResponse.json(products);
//   } catch (error) {
//     console.error('Error fetching user products:', error);
//     return NextResponse.json(
//       { error: 'Error fetching user products' },
//       { status: 500 }
//     );
//   }
// }
