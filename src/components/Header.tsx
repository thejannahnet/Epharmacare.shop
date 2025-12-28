"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ShoppingCart, Menu, X, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";

export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { totalItems } = useCart();

    return (
        <>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            {/* Top Bar */}
            <div className="bg-primary text-white py-2 px-4 text-sm font-medium">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="opacity-80">Call Us:</span>
                        <a href="tel:+15183001106" className="hover:underline">+1 (518) 300 1106</a>
                    </div>
                    <Link href="/contact" className="bg-accent hover:bg-accent/90 text-white px-4 py-1 rounded-md text-xs font-bold transition-colors">
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white border-b border-border sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-primary leading-none">E Pharma Care</span>
                                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Pharmacy No Rx</span>
                            </div>
                        </Link>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-xl w-full">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    className="w-full bg-secondary border-none rounded-l-md py-3 px-4 focus:ring-2 focus:ring-primary outline-none"
                                />
                                <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-r-md transition-colors">
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 text-primary hover:bg-secondary rounded-full transition-colors"
                            >
                                <ShoppingCart className="w-6 h-6" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white">
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
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="md:hidden bg-white border-t border-border overflow-hidden"
                    >
                        <div className="p-4 flex flex-col gap-2">
                            <Link href="/" className="p-3 hover:bg-secondary rounded-md font-medium text-primary">Home</Link>
                            <Link href="/#story" className="p-3 hover:bg-secondary rounded-md font-medium text-primary">About Us</Link>
                            <Link href="/#products" className="p-3 hover:bg-secondary rounded-md font-medium text-primary">Products</Link>
                            <Link href="/contact" className="p-3 hover:bg-secondary rounded-md font-medium text-primary">Contact Us</Link>
                            <Link href="/blog" className="p-3 hover:bg-secondary rounded-md font-medium text-primary">Blog</Link>
                            <Link href="/track-order" className="p-3 hover:bg-secondary rounded-md font-medium text-primary">Track Order</Link>
                        </div>
                    </motion.div>
                )}
            </header>

            {/* Desktop Navigation Bar */}
            <div className="hidden md:block bg-primary text-white border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-8 py-3 text-sm font-bold uppercase tracking-wide">
                        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                        <Link href="/#story" className="hover:text-accent transition-colors">About Us</Link>
                        <Link href="/#products" className="hover:text-accent transition-colors">Products</Link>
                        <Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
                        <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
                        <Link href="/track-order" className="hover:text-accent transition-colors">Track Order</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
