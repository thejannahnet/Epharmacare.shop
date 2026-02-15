import { ReactNode } from "react";
import { motion } from "framer-motion";
import useScrollAnimation, { staggerContainer } from "@/hooks/useScrollAnimation";

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
    containerClass?: string;
}

export default function Section({
    id,
    children,
    className = "",
    containerClass = "",
}: SectionProps) {
    const { ref, controls } = useScrollAnimation(0.1);

    return (
        <section id={id} className={`py-20 md:py-28 ${className}`}>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={staggerContainer}
                className={`section-container ${containerClass}`}
            >
                {children}
            </motion.div>
        </section>
    );
}
