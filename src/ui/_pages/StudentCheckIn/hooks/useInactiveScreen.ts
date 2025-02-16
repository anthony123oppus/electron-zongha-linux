import { useEffect, useState, useRef, useCallback } from "react";

export const useInactiveScreen = (timeout: number = 6000) => {
    const [isInactive, setIsInactive] = useState<boolean>(false);
    const timerRef = useRef<number | null>(null);

    const resetTimer = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        setIsInactive(false);
        timerRef.current = setTimeout(() => setIsInactive(true), timeout);
    }, [timeout]);

    useEffect(() => {
        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("keydown", resetTimer);
        window.addEventListener("click", resetTimer);
        window.addEventListener("scroll", resetTimer);

        resetTimer();

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("keydown", resetTimer);
            window.removeEventListener("click", resetTimer);
            window.removeEventListener("scroll", resetTimer);
        };
    }, [resetTimer]);

    return { isInactive, setIsInactive };
};
