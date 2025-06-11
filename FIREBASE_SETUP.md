
# Firebase Setup Guide

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter your project name (e.g., "asutosh-portfolio")
4. Enable Google Analytics (recommended)
5. Choose or create a Google Analytics account
6. Click "Create project"

## 2. Set up Firebase Web App

1. In your Firebase project, click the web icon (</>) to add a web app
2. Register your app with a nickname (e.g., "Portfolio Website")
3. Enable Firebase Hosting if you want to use it (optional)
4. Copy the Firebase configuration object

## 3. Configure Your App

1. Replace the placeholder values in `src/lib/firebase.ts` with your actual Firebase config:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-actual-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-actual-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-actual-sender-id",
     appId: "your-actual-app-id",
     measurementId: "G-your-measurement-id"
   };
   ```

## 4. Enable Analytics

1. In Firebase Console, go to Analytics → Events
2. Your custom events will appear here:
   - `page_view`: When someone visits your portfolio
   - `section_view`: When someone scrolls to different sections
   - `contact_click`: When someone clicks contact links

## 5. View Analytics Data

- Real-time data: Analytics → Realtime
- Detailed reports: Analytics → Reports
- Custom events: Analytics → Events

## 6. Optional: Set up Firestore (for future features)

1. Go to Firestore Database in Firebase Console
2. Click "Create database"
3. Choose "Start in test mode" for development
4. Select a location for your database

## Environment Variables (Optional)

For better security, you can use environment variables:

1. Create a `.env.local` file in your project root
2. Add your Firebase config as environment variables:
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   ```
3. Update `firebase.ts` to use these variables

## Testing

After setup, open your portfolio and check:
1. Firebase Console → Analytics → Realtime to see live visitors
2. Browser console for any Firebase errors
3. Network tab to confirm Firebase requests are being made
