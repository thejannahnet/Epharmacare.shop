"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const InteractiveCapsule = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll-linked rotation
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const smoothRotate = useSpring(rotate, { stiffness: 50, damping: 20 });

    return (
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
            <motion.div
                className="relative w-[60%] aspect-[1/2] cursor-pointer"
                style={{ rotate: smoothRotate }}
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                animate="float"
            >
                {/* Floating Animation Wrapper */}
                <motion.div
                    className="w-full h-full relative"
                    variants={{
                        float: {
                            y: [0, -20, 0],
                            transition: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        },
                    }}
                >
                    {/* Top Half of Capsule */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[52%] bg-gradient-to-br from-primary to-primary/80 rounded-t-full shadow-lg border-t border-l border-white/20 z-10"
                        variants={{
                            rest: { y: 0 },
                            hover: { y: -15, transition: { type: "spring", stiffness: 300 } },
                        }}
                    >
                        {/* Highlight */}
                        <div className="absolute top-4 left-4 w-3 h-8 bg-white/30 rounded-full blur-[1px]" />
                    </motion.div>

                    {/* Bottom Half of Capsule */}
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-[52%] bg-gradient-to-br from-accent to-accent/80 rounded-b-full shadow-lg border-b border-l border-white/20"
                        variants={{
                            rest: { y: 0 },
                            hover: { y: 15, transition: { type: "spring", stiffness: 300 } },
                        }}
                    >
                        {/* Highlight */}
                        <div className="absolute bottom-6 right-4 w-2 h-6 bg-white/20 rounded-full blur-[1px]" />
                    </motion.div>

                    {/* Internal "Contents" - Visible on separation */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[20%] flex items-center justify-center gap-1 opacity-0"
                        variants={{
                            rest: { opacity: 0, scale: 0.8 },
                            hover: { opacity: 1, scale: 1, transition: { delay: 0.1 } },
                        }}
                    >
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                animate={{
                                    y: [0, -5, 0],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Orbiting Ring 1 */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-primary/20 rounded-full pointer-events-none"
                    animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                    transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                />

                {/* Orbiting Ring 2 */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] border border-accent/10 rounded-full pointer-events-none border-dashed"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>
        </div>
    );
};
