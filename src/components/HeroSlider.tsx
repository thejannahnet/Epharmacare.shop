"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    const slides = [
        {
            title: "Your Health is Our First Concern",
            subtitle: "Access high-quality pharmaceutical care with discrete delivery and professional guidance.",
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1600"
        },
        {
            title: "Certified Medical Solutions",
            subtitle: "Every product is sourced from certified manufacturers to ensure safety and efficacy.",
            image: "/images/hero-capsule.png"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full min-h-[600px] lg:h-[700px] overflow-hidden bg-[#0f172a]">
            {/* Deep Premium Background with Animated Gradients */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[100px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full py-12 lg:py-0">

                    {/* Text Content */}
                    <div className="space-y-6 lg:space-y-8 order-1 lg:order-1 relative z-20 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-blue-200 text-sm font-medium mx-auto lg:mx-0"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                            Premium Pharmaceutical Care
                        </motion.div>

                        <motion.h1
                            key={`title-${current}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl lg:text-7xl font-bold leading-tight text-white tracking-tight"
                        >
                            {slides[current].title}
                        </motion.h1>

                        <motion.p
                            key={`subtitle-${current}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-base lg:text-lg text-slate-300 max-w-xl leading-relaxed mx-auto lg:mx-0"
                        >
                            {slides[current].subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <Link
                                href="/#products"
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25 flex items-center gap-2"
                            >
                                Shop Now <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/#story"
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold transition-all backdrop-blur-sm"
                            >
                                Learn More
                            </Link>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-white/5"
                        >
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-2xl font-bold text-white">24/7</span>
                                <span className="text-xs text-slate-400 uppercase tracking-wider">Support</span>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-2xl font-bold text-white">100%</span>
                                <span className="text-xs text-slate-400 uppercase tracking-wider">Secure</span>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-2xl font-bold text-white">Fast</span>
                                <span className="text-xs text-slate-400 uppercase tracking-wider">Delivery</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Floating Product Image with Frame */}
                    <div className="relative h-[350px] lg:h-[600px] w-full order-2 lg:order-2 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: "easeOut" }
                                }}
                                exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.4 } }}
                                className="relative z-10 w-full h-full flex items-center justify-center p-4"
                            >
                                {/* Decorative Frame */}
                                <div className="absolute inset-4 border-2 border-white/10 rounded-[2rem] transform rotate-3" />
                                <div className="absolute inset-4 border border-blue-500/20 rounded-[2rem] transform -rotate-3" />

                                {/* Glow Effect Behind Image */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-teal-500/30 blur-[60px] rounded-full transform scale-75" />

                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 6,
                                        ease: "easeInOut"
                                    }}
                                    className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[2rem] shadow-2xl"
                                >
                                    <Image
                                        src={slides[current].image}
                                        alt={slides[current].title}
                                        width={600}
                                        height={600}
                                        priority
                                        className="relative w-full h-full object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-4">
                <button
                    onClick={prevSlide}
                    className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white backdrop-blur-md transition-all"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white backdrop-blur-md transition-all"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
