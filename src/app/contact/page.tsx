"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";

export default function ContactPage() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { totalItems } = useCart();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 glass border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                            <ShieldCheck className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold text-slate-900">E Pharma Care</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
                        <Link href="/" className="hover:text-sky-500 transition-colors">Home</Link>
                        <Link href="/#products" className="hover:text-sky-500 transition-colors">Products</Link>
                        <Link href="/contact" className="text-sky-500 font-bold">Contact</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="p-2 relative text-slate-600 hover:text-sky-500 transition-colors"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            {totalItems > 0 && (
                                <span className="absolute top-0 right-0 bg-sky-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Get in Touch</h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Have questions about our products or services? Our team is here to help you 24/7.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6">
                                    <MapPin className="text-sky-500 w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Location</h3>
                                <p className="text-slate-600">515 N Glendale CA 91206, USA</p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6">
                                    <Mail className="text-sky-500 w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                                <p className="text-slate-600">support@epharmacare.shop</p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6">
                                    <Phone className="text-sky-500 w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                                <p className="text-slate-600">+1 (518) 300 1106</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg border border-slate-100">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <ShieldCheck className="text-green-600 w-10 h-10" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                                        <p className="text-slate-600 mb-8">
                                            Thank you for reaching out. We have received your message and will get back to you shortly.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="text-sky-500 font-bold hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                                <input
                                                    required
                                                    type="email"
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none"
                                                placeholder="How can we help?"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                            <textarea
                                                required
                                                rows={6}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none resize-none"
                                                placeholder="Your message here..."
                                            ></textarea>
                                        </div>
                                        <button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="w-full py-4 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-200 flex items-center justify-center gap-2 disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                "Sending..."
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                                    <ShieldCheck className="text-white w-6 h-6" />
                                </div>
                                <span className="text-2xl font-bold">E Pharma Care</span>
                            </div>
                            <p className="text-slate-400 max-w-md mb-8">
                                Your trusted partner for quality pharmaceutical products. We prioritize your health and privacy above all else.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                            <ul className="space-y-4 text-slate-400">
                                <li><Link href="/" className="hover:text-sky-500 transition-colors">Home</Link></li>
                                <li><Link href="/#products" className="hover:text-sky-500 transition-colors">Shop</Link></li>
                                <li><Link href="/contact" className="hover:text-sky-500 transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                            <ul className="space-y-4 text-slate-400">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-sky-500 mt-1" />
                                    <span>515 N Glendale CA 91206, USA</span>
                                </li>
                                <li>support@epharmacare.shop</li>
                                <li>+1 (518) 300 1106</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                        <p>© 2025 E Pharma Care. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
