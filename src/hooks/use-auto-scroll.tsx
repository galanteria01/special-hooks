import { useEffect, useRef } from 'react';

const useAutoScroll = <T extends HTMLElement>() => {
    const containerRef = useRef<T | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new MutationObserver(() => {
            container.scrollTop = container.scrollHeight;
        });

        observer.observe(container, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
        };
    }, []);

    return containerRef;
};

export default useAutoScroll;