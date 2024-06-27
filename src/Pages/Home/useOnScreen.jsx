import { useState, useEffect } from 'react';

const useOnScreen = (ref, rootMargin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      console.log('Ref is not set');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        console.log('Intersection:', entry.isIntersecting, 'Entry:', entry);
        console.log('Root Bounds:', entry.rootBounds);
        console.log('Bounding Client Rect:', entry.boundingClientRect);
        console.log('Intersection Rect:', entry.intersectionRect);
      },
      {
        rootMargin,
        threshold: [0.1, 0.25, 0.5, 0.75, 1.0],
      }
    );

    observer.observe(ref.current);
    console.log('Observer created:', observer);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};

export default useOnScreen;
