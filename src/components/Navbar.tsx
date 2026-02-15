import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiSun, HiMoon } from "react-icons/hi";
import data from "@/data/resume.json";

const navLinks = data.navigation;

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-white/95 dark:bg-dark-950/95 backdrop-blur-xl shadow-lg shadow-dark-900/5"
                : "bg-transparent"
                }`}
        >
            <nav className="section-container flex items-center justify-between h-16 lg:h-18">
                {/* Logo */}
                <ScrollLink to="hero" smooth duration={800} className="cursor-pointer flex items-center gap-2.5 group">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-extrabold text-sm">TA</span>
                    </div>
                    <div className="hidden sm:block">
                        <span className={`text-sm font-bold block leading-tight transition-colors duration-300 ${scrolled ? "text-dark-900 dark:text-white" : "text-white"
                            }`}>
                            Tariq Anwar
                        </span>
                        <span className={`text-[10px] font-medium block leading-tight transition-colors duration-300 ${scrolled ? "text-dark-400" : "text-white/60"
                            }`}>
                            Southampton Summer Programme
                        </span>
                    </div>
                </ScrollLink>

                {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <ScrollLink
                            key={link.label}
                            to={link.to}
                            smooth
                            offset={-70}
                            duration={800}
                            spy
                            activeClass="!text-primary-500"
                            className={`px-3 py-2 text-sm font-semibold cursor-pointer rounded-lg transition-all duration-300 hover:bg-primary-500/10
                ${scrolled ? "text-dark-600 dark:text-dark-300 hover:text-primary-500" : "text-white/80 hover:text-white"}
              `}
                        >
                            {link.label}
                        </ScrollLink>
                    ))}
                    <button
                        onClick={() => setDark(!dark)}
                        aria-label="Toggle dark mode"
                        className={`ml-2 p-2 rounded-lg transition-all duration-300 hover:bg-primary-500/10
              ${scrolled ? "text-dark-500" : "text-white/70"}
            `}
                    >
                        {dark ? <HiSun size={18} /> : <HiMoon size={18} />}
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    className={`lg:hidden p-2 rounded-lg transition-colors duration-300
            ${scrolled ? "text-dark-700 dark:text-dark-300" : "text-white"}
          `}
                >
                    {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white/95 dark:bg-dark-950/95 backdrop-blur-xl border-t border-dark-200/30 dark:border-dark-700/30 overflow-hidden"
                    >
                        <div className="section-container py-4 space-y-1">
                            {navLinks.map((link) => (
                                <ScrollLink
                                    key={link.label}
                                    to={link.to}
                                    smooth
                                    offset={-70}
                                    duration={800}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-2.5 text-sm font-semibold text-dark-600 dark:text-dark-300
                             hover:text-primary-500 hover:bg-primary-500/5 rounded-xl cursor-pointer transition-all"
                                >
                                    {link.label}
                                </ScrollLink>
                            ))}
                            <button
                                onClick={() => { setDark(!dark); setMobileOpen(false); }}
                                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-dark-500
                           hover:text-primary-500 rounded-xl transition-all w-full"
                            >
                                {dark ? <HiSun size={16} /> : <HiMoon size={16} />}
                                {dark ? "Light Mode" : "Dark Mode"}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
