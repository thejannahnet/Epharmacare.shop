import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { HiChevronDown } from "react-icons/hi";
import Image from "next/image";
import gsap from "gsap";
import data from "@/data/resume.json";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const onScroll = () => {
                const y = window.scrollY;
                const vh = window.innerHeight;
                const progress = Math.min(y / vh, 1);
                setScrollProgress(progress);

                // Parallax: background moves slower than scroll
                if (bgRef.current) {
                    bgRef.current.style.transform = `translateY(${y * 0.4}px) scale(${1 + progress * 0.1})`;
                }

                // Content fades out and moves up as you scroll
                if (contentRef.current) {
                    contentRef.current.style.opacity = `${1 - progress * 1.5}`;
                    contentRef.current.style.transform = `translateY(${-y * 0.3}px)`;
                }

                // Overlay darkens on scroll for smooth transition
                if (overlayRef.current) {
                    overlayRef.current.style.background = `rgba(10,30,60,${0.45 + progress * 0.35})`;
                }
            };
            window.addEventListener("scroll", onScroll, { passive: true });
            return () => window.removeEventListener("scroll", onScroll);
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background university image with parallax */}
            <div ref={bgRef} className="absolute inset-0 -z-20 will-change-transform">
                <Image
                    src="/images/hero-university.jpg"
                    alt="University campus"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            {/* Color overlay that reacts to scroll */}
            <div
                ref={overlayRef}
                className="absolute inset-0 -z-10 transition-[background] duration-100"
                style={{
                    background: "rgba(10,30,60,0.45)",
                }}
            />

            {/* Blue gradient overlay for brand color */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-900/40 via-primary-800/20 to-primary-950/60" />

            {/* Floating decorative shapes */}
            <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent-400/10 blur-3xl animate-pulse"
                    style={{ opacity: 1 - scrollProgress }}
                />
                <div
                    className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary-300/10 blur-3xl animate-pulse"
                    style={{ animationDelay: "1s", opacity: 1 - scrollProgress }}
                />
            </div>

            {/* Content */}
            <div ref={contentRef} className="section-container text-center relative z-10 pt-20 pb-16 will-change-transform">
                {/* Summer badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6"
                >
                    <span className="text-accent-300 text-sm font-semibold">☀️ Summer Programme</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
                >
                    {data.hero.title.split("–")[0]}
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-accent-500 drop-shadow-none">
                        – {data.hero.title.split("–")[1]?.trim()}
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md"
                >
                    {data.hero.subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <ScrollLink to={data.hero.scrollTarget} smooth offset={-70} duration={800}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary text-lg px-10 py-4 shadow-2xl"
                        >
                            {data.hero.cta}
                        </motion.button>
                    </ScrollLink>

                    <ScrollLink to="apply" smooth offset={-70} duration={800}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-outline text-lg px-10 py-4"
                        >
                            Apply Now
                        </motion.button>
                    </ScrollLink>
                </motion.div>
            </div>

            {/* Scroll indicator — fades on scroll */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-300"
                style={{ opacity: 1 - scrollProgress * 3 }}
            >
                <ScrollLink to={data.hero.scrollTarget} smooth offset={-70} duration={800} className="cursor-pointer">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-1"
                    >
                        <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">Discover</span>
                        <HiChevronDown className="text-accent-400 w-6 h-6" />
                    </motion.div>
                </ScrollLink>
            </div>

            {/* Bottom gradient fade for smooth section transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-dark-900 to-transparent z-10 pointer-events-none" />
        </section>
    );
}
