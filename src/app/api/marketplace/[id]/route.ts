import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const url = req.nextUrl; // Get the URL of the incoming request
  const id = url.pathname.split('/').pop(); // Extract the `id` from the URL

  if (!id) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  try {
    // Fetch the Product by `id` using Prisma
    const marketplaceProduct = await prisma.product.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!marketplaceProduct) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(marketplaceProduct);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Error fetching product' },
      { status: 500 }
    );
  }
}
