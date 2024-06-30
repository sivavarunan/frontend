import { useEffect, useRef } from 'react';

const useFadeInOnScroll = () => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
        });

        elementsRef.current.forEach(element => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    return elementsRef;
};

export default useFadeInOnScroll;
