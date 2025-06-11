
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, Analytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace these with your actual Firebase config values
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id",
  measurementId: "G-XXXXXXXXXX"
};

// Check if Firebase config is properly set up
const isFirebaseConfigured = firebaseConfig.apiKey !== "your-api-key" && 
                            firebaseConfig.projectId !== "your-project-id";

let app;
let analytics: Analytics | null = null;
let db;

if (isFirebaseConfigured) {
  try {
    // Initialize Firebase
    app = initializeApp(firebaseConfig);

    // Initialize Analytics
    if (typeof window !== 'undefined') {
      analytics = getAnalytics(app);
    }

    // Initialize Firestore
    db = getFirestore(app);
  } catch (error) {
    console.warn('Firebase initialization failed:', error);
  }
}

// Analytics functions with fallbacks
export const trackPageView = (pageName: string) => {
  if (analytics && isFirebaseConfigured) {
    try {
      logEvent(analytics, 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
      });
    } catch (error) {
      console.warn('Failed to track page view:', error);
    }
  } else {
    console.log('Page view tracked (local):', pageName);
  }
};

export const trackSectionView = (sectionName: string) => {
  if (analytics && isFirebaseConfigured) {
    try {
      logEvent(analytics, 'section_view', {
        section_name: sectionName,
      });
    } catch (error) {
      console.warn('Failed to track section view:', error);
    }
  } else {
    console.log('Section view tracked (local):', sectionName);
  }
};

export const trackContactClick = (contactMethod: string) => {
  if (analytics && isFirebaseConfigured) {
    try {
      logEvent(analytics, 'contact_click', {
        contact_method: contactMethod,
      });
    } catch (error) {
      console.warn('Failed to track contact click:', error);
    }
  } else {
    console.log('Contact click tracked (local):', contactMethod);
  }
};

export { analytics, db };
