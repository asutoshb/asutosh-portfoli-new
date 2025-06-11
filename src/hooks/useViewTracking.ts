
import { useEffect, useRef } from 'react';
import { trackSectionView } from '../lib/firebase';

export const useViewTracking = (sectionName: string) => {
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackSectionView(sectionName);
            hasTracked.current = true;
          }
        });
      },
      {
        threshold: 0.5, // Track when 50% of the section is visible
      }
    );

    const element = document.getElementById(sectionName.toLowerCase());
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionName]);
};
