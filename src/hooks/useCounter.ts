import { useState, useEffect } from 'react';

export function useCounter(end: string, duration: number = 2000, shouldStart: boolean = false) {
    const [count, setCount] = useState(0);
    const endNumber = parseInt(end.replace(/\D/g, ''));

    useEffect(() => {
        if (!shouldStart) {
            setCount(0);
            return;
        }

        let startTimestamp: number | null = null;
        let animationFrameId: number;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            setCount(Math.floor(progress * endNumber));
            
            if (progress < 1) {
                animationFrameId = window.requestAnimationFrame(step);
            }
        };

        animationFrameId = window.requestAnimationFrame(step);

        return () => {
            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, [endNumber, duration, shouldStart]);

    // Format the number similar to the end string (e.g., "120+" -> "120+")
    const formatNumber = () => {
        const suffix = end.match(/[^0-9]+$/)?.[0] || '';
        return `${count}${suffix}`;
    };

    return formatNumber();
}
