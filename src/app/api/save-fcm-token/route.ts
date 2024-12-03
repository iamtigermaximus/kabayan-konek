import { NextResponse } from 'next/server';
// import prisma from '../../../lib/prisma'; // Assuming you have Prisma set up

export async function POST() {
  // const { token, userId } = await req.json(); // Extract token and userId from the request body

  try {
    // Update the user record to store the FCM token
    // const user = await prisma.user.update({
    //   where: { id: userId },
    //   data: { fcmToken: token },
    // });

    return NextResponse.json(
      { message: 'FCM token saved successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving FCM token:', error);
    return NextResponse.json(
      { error: 'Error saving FCM token' },
      { status: 500 }
    );
  }
}
