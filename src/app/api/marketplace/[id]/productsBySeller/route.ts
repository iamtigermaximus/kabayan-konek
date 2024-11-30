import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const productId = url.pathname.split('/')[3]; // Extract `id` from the URL

  if (!productId) {
    return NextResponse.json(
      { error: 'Product ID not provided' },
      { status: 400 }
    );
  }

  try {
    // Fetch the product to find its seller
    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: { userId: true }, // Only fetch the userId
    });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Fetch all products by the same seller, excluding the current product
    const relatedProducts = await prisma.product.findMany({
      where: {
        userId: product.userId,
        id: { not: productId }, // Exclude the current product
      },
    });

    return NextResponse.json(relatedProducts);
  } catch (error) {
    console.error('Error fetching related products:', error);
    return NextResponse.json(
      { error: 'Error fetching related products' },
      { status: 500 }
    );
  }
}
