import { useEffect, useRef } from "react";
import { useAnimation, useInView, type Variants } from "framer-motion";

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export const slideUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

type AnimationControls = ReturnType<typeof useAnimation>;

interface UseScrollAnimationReturn {
    ref: React.RefObject<HTMLDivElement>;
    controls: AnimationControls;
    isInView: boolean;
}

export function useScrollAnimation(
    threshold: number = 0.2,
    triggerOnce: boolean = true
): UseScrollAnimationReturn {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        amount: threshold,
        once: triggerOnce,
    });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return { ref, controls, isInView };
}

export default useScrollAnimation;
