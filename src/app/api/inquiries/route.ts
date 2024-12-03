// app/api/inquiries/route.ts

import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'; // Prisma Client
import { messaging } from '@/lib/firebaseAdmin'; // Firebase Admin SDK
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export async function POST(req: Request) {
  try {
    // Step 1: Get session data to fetch the buyer's ID
    const session = await getServerSession({ req, ...authOptions });
    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized: User not logged in' },
        { status: 401 }
      );
    }

    const buyerId = session.user.id; // Get buyerId from the session (logged-in user)
    const { productId, message } = await req.json();

    // Step 2: Create Inquiry in the database
    const inquiry = await prisma.inquiry.create({
      data: {
        message,
        buyer: { connect: { id: buyerId } }, // Connect the buyer dynamically
        product: { connect: { id: productId } }, // Link to the product
      },
      include: {
        product: {
          include: {
            user: true, // Include the seller's information (user)
          },
        },
      },
    });

    // Step 3: Get seller's FCM token (seller's notification token)
    const sellerFcmToken = inquiry.product.user.fcmToken;
    console.log('Seller FCM Token:', sellerFcmToken);

    // Step 4: Send FCM notification to seller if token is available
    if (sellerFcmToken) {
      const notificationMessage = {
        notification: {
          title: 'New Inquiry!',
          body: `A buyer is interested in your product: ${inquiry.product.name}`,
        },
        token: sellerFcmToken, // FCM token of the seller
      };

      // Send notification to seller's device
      await messaging.send(notificationMessage);
      console.log('Notification sent to seller');
    } else {
      console.error('No FCM token found for the seller!');
    }

    // Return the created inquiry as a response
    return NextResponse.json({ inquiry }, { status: 201 });
  } catch (error) {
    console.error('Error during inquiry creation:', error);
    return NextResponse.json(
      { error: 'Failed to create inquiry' },
      { status: 500 }
    );
  }
}
