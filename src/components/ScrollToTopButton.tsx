import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-8 right-8 z-40 p-3.5 rounded-xl
                     bg-primary-500 hover:bg-primary-600 text-white
                     shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50
                     hover:scale-110 active:scale-95
                     transition-all duration-300"
                >
                    <HiArrowUp className="w-5 h-5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
