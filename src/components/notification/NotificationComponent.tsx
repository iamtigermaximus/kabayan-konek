// // components/notification/NotificationComponent.tsx

// import { useEffect, useState } from 'react';
// import { getMessaging, getToken } from 'firebase/messaging';
// import { messaging } from '../../../firebase';

// const NotificationComponent: React.FC = () => {
//   const [fcmToken, setFcmToken] = useState<string | null>(null);

//   useEffect(() => {
//     const requestNotificationPermission = async () => {
//       try {
//         // Ask for notification permission
//         const permission = await Notification.requestPermission();
//         if (permission === 'granted') {
//           // Get FCM token after permission is granted
//           const token = await getToken(messaging, {
//             vapidKey: 'your-vapid-key-here', // Your VAPID key
//           });

//           if (token) {
//             console.log('FCM Token:', token);
//             setFcmToken(token);

//             // Send the token to the backend to save in the user's record
//             await fetch('/api/save-fcm-token', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({ token }),
//             });
//           }
//         } else {
//           console.error('Notification permission denied');
//         }
//       } catch (error) {
//         console.error('Error getting permission or token:', error);
//       }
//     };

//     requestNotificationPermission();
//   }, []);

//   return (
//     <div>
//       <h1>Enable Notifications</h1>
//       {fcmToken && <p>FCM Token: {fcmToken}</p>}
//     </div>
//   );
// };

// export default NotificationComponent;
