import { useCounter } from '@/hooks/useCounter';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
    value: string;
    delay?: number;
}

export default function Counter({ value, delay = 0 }: CounterProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Add a small delay before starting the animation
                    setTimeout(() => {
                        setIsVisible(true);
                        setHasStarted(true);
                    }, delay * 1000);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1, // Start when 10% of the element is visible
            }
        );

        const currentRef = counterRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [delay]);

    const count = useCounter(value, 2000, isVisible && hasStarted);

    return <span ref={counterRef}>{count}</span>;
}
