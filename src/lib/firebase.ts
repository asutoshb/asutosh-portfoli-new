
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
let analytics: Analytics | null = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore
export const db = getFirestore(app);

// Analytics functions
export const trackPageView = (pageName: string) => {
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
    });
  }
};

export const trackSectionView = (sectionName: string) => {
  if (analytics) {
    logEvent(analytics, 'section_view', {
      section_name: sectionName,
    });
  }
};

export const trackContactClick = (contactMethod: string) => {
  if (analytics) {
    logEvent(analytics, 'contact_click', {
      contact_method: contactMethod,
    });
  }
};

export { analytics };
