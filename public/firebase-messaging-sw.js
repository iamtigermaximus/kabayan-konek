// public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.2/firebase-messaging.js');

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: 'AIzaSyBkINKBtXk7TIYGM8pgipOqLgI-0oMV_r8',
  authDomain: 'kabayan-konek.firebaseapp.com',
  projectId: 'kabayan-konek',
  storageBucket: 'kabayan-konek.firebasestorage.app',
  messagingSenderId: '928799804023',
  appId: '1:928799804023:web:f6d80317053e1c8c9ad472',
});

// Retrieve Firebase Messaging object
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png', // Optional icon for notification
  };

  // Show notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});
