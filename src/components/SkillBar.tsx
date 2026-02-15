import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface SkillBarProps {
    name: string;
    percentage: number;
    index: number;
}

export default function SkillBar({ name, percentage, index }: SkillBarProps) {
    const { ref, isInView } = useScrollAnimation(0.3);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="space-y-2"
        >
            <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-dark-700 dark:text-dark-300">
                    {name}
                </span>
                <span className="text-sm font-bold text-primary-500 dark:text-primary-400">
                    {percentage}%
                </span>
            </div>
            <div className="skill-bar-bg">
                <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
}
