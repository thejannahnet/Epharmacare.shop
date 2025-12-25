"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";

export default function ContactPage() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { totalItems } = useCart();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-accent/20 selection:text-accent">
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <ShieldCheck className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-serif font-bold tracking-tight text-primary">E Pharma Care</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.2em] font-bold text-primary/60">
                        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                        <Link href="/#products" className="hover:text-accent transition-colors">Collection</Link>
                        <Link href="/#story" className="hover:text-accent transition-colors">Our Story</Link>
                        <Link href="/contact" className="text-accent">Contact</Link>
                    </div>

                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="p-2 relative text-primary hover:text-accent transition-colors"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-accent text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <button
                            className="md:hidden p-2 text-primary"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-white border-b border-border p-6 flex flex-col gap-4 text-center uppercase tracking-widest text-sm font-bold"
                    >
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/#products" onClick={() => setIsMenuOpen(false)}>Collection</Link>
                        <Link href="/#story" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </motion.div>
                )}
            </nav>

            <main className="pt-40 pb-32 lg:pt-52 lg:pb-48">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-24">
                        {/* Header & Info */}
                        <div className="lg:w-1/3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent mb-6 block">Concierge</span>
                                <h1 className="text-5xl lg:text-6xl font-serif text-primary mb-10 leading-tight font-bold">Connect with <br /><span className="italic text-accent">Our Team.</span></h1>
                                <p className="text-primary/70 leading-relaxed font-bold mb-16">
                                    Our dedicated specialists are available to assist you with any inquiries regarding our collection and services.
                                </p>

                                <div className="space-y-12">
                                    <div className="flex items-start gap-6">
                                        <div className="text-accent font-serif italic text-xl font-bold">A.</div>
                                        <div>
                                            <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary/40 mb-2">Location</h4>
                                            <p className="text-sm text-primary/70 font-bold">515 N Glendale CA 91206, USA</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6">
                                        <div className="text-accent font-serif italic text-xl font-bold">E.</div>
                                        <div>
                                            <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary/40 mb-2">Inquiries</h4>
                                            <p className="text-sm text-primary/70 font-bold">support@epharmacare.shop</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6">
                                        <div className="text-accent font-serif italic text-xl font-bold">T.</div>
                                        <div>
                                            <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary/40 mb-2">Direct</h4>
                                            <p className="text-sm text-primary/70 font-bold">+1 (518) 300 1106</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Form */}
                        <div className="lg:w-2/3">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-white p-10 lg:p-16 rounded-2xl border border-border/40 shadow-2xl"
                            >
                                {submitted ? (
                                    <div className="text-center py-20">
                                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                            <ShieldCheck className="text-accent w-8 h-8" />
                                        </div>
                                        <h2 className="text-3xl font-serif text-primary mb-4 font-bold">Message Received.</h2>
                                        <p className="text-primary/50 font-bold mb-10 max-w-sm mx-auto">
                                            Thank you for reaching out. A specialist will review your inquiry and respond shortly.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="text-[11px] uppercase tracking-widest font-bold text-accent hover:text-primary transition-colors"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-3">
                                                <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Full Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    className="w-full bg-transparent border-b border-border/60 py-3 text-sm focus:border-accent outline-none transition-colors font-bold text-primary"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Email Address</label>
                                                <input
                                                    required
                                                    type="email"
                                                    className="w-full bg-transparent border-b border-border/60 py-3 text-sm focus:border-accent outline-none transition-colors font-bold text-primary"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Subject</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full bg-transparent border-b border-border/60 py-3 text-sm focus:border-accent outline-none transition-colors font-bold text-primary"
                                                placeholder="What is this regarding?"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Message</label>
                                            <textarea
                                                required
                                                rows={5}
                                                className="w-full bg-transparent border-b border-border/60 py-3 text-sm focus:border-accent outline-none transition-colors font-bold text-primary resize-none"
                                                placeholder="How can we assist you?"
                                            ></textarea>
                                        </div>
                                        <button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-primary disabled:opacity-50"
                                        >
                                            {isSubmitting ? "Processing..." : "Send Message"}
                                            <div className="w-12 h-[2px] bg-primary/20 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-primary text-white pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
                        <div className="md:col-span-5">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <ShieldCheck className="text-primary w-5 h-5" />
                                </div>
                                <span className="text-2xl font-serif font-bold tracking-tight">E Pharma Care</span>
                            </div>
                            <p className="text-white/50 max-w-sm leading-relaxed font-bold text-sm mb-12">
                                A modern standard in pharmaceutical excellence. We blend clinical precision with a luxury service experience to support your journey to optimal health.
                            </p>
                        </div>

                        <div className="md:col-span-2 md:col-start-7">
                            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-accent mb-8">Navigation</h4>
                            <ul className="space-y-4 text-sm text-white/60 font-bold">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/#products" className="hover:text-white transition-colors">Collection</Link></li>
                                <li><Link href="/#story" className="hover:text-white transition-colors">Our Story</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="md:col-span-4">
                            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-accent mb-8">Concierge</h4>
                            <ul className="space-y-4 text-sm text-white/60 font-bold">
                                <li className="flex items-start gap-4">
                                    <span className="text-accent">A.</span>
                                    <span>515 N Glendale CA 91206, USA</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-accent">E.</span>
                                    <span>support@epharmacare.shop</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-accent">T.</span>
                                    <span>+1 (518) 300 1106</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[11px] uppercase tracking-widest text-white/30 font-bold">© 2025 E Pharma Care. All rights reserved.</p>
                        <div className="flex gap-8 text-[11px] uppercase tracking-widest text-white/30 font-bold">
                            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
