// lib/firebaseAdmin.ts

import admin from 'firebase-admin';

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}'
); // You should store this key in your environment variables securely

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  admin.app(); // Use the default app
}

export const messaging = admin.messaging();
