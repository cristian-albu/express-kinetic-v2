import { MutableRefObject, useEffect, useState } from "react";

export const useElementOnScreen = (
    ref: MutableRefObject<HTMLDivElement | null>,
    options: { root: null; rootMargin: string; threshold: number }
) => {
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
        setIsVisible(entries[0].isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref, options]);

    return { isVisible };
};

export default useElementOnScreen;
