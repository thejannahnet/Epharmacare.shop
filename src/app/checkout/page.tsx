"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowLeft, CreditCard, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const { cart, totalPrice, clearCart } = useCart();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cashAppTag: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate payment processing
        await new Promise((resolve) => setTimeout(resolve, 2000));
        clearCart();
        router.push("/order-confirmation");
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 font-sans">
                <h1 className="text-3xl font-serif text-primary mb-6 font-bold">Your collection is empty.</h1>
                <Link href="/" className="text-[11px] uppercase tracking-widest font-bold text-accent hover:text-primary transition-colors flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Return to Collection
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-accent/20 selection:text-accent">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-border/40 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                            <ShieldCheck className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-serif font-bold tracking-tight text-primary">E Pharma Care</span>
                    </Link>
                    <div className="flex items-center gap-2 text-primary/40">
                        <Lock className="w-4 h-4" />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Secure Checkout</span>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Shipping Form */}
                    <div className="lg:col-span-7">
                        <Link href="/" className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-primary/40 hover:text-accent transition-colors mb-12">
                            <ArrowLeft className="w-3 h-3" />
                            Back to Collection
                        </Link>

                        <form onSubmit={handleSubmit} className="space-y-16">
                            <section>
                                <h2 className="text-2xl font-serif text-primary mb-10 font-bold">Shipping Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40 ml-1">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-transparent border-b border-border/60 py-4 focus:border-accent outline-none transition-colors font-bold text-primary"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40 ml-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full bg-transparent border-b border-border/60 py-4 focus:border-accent outline-none transition-colors font-bold text-primary"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40 ml-1">Street Address</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-transparent border-b border-border/60 py-4 focus:border-accent outline-none transition-colors font-bold text-primary"
                                            placeholder="123 Luxury Ave"
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40 ml-1">City</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-transparent border-b border-border/60 py-4 focus:border-accent outline-none transition-colors font-bold text-primary"
                                            placeholder="Glendale"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40 ml-1">Postal Code</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-transparent border-b border-border/60 py-4 focus:border-accent outline-none transition-colors font-bold text-primary"
                                            placeholder="91206"
                                            value={formData.zip}
                                            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center justify-between mb-10">
                                    <h2 className="text-2xl font-serif text-primary font-bold">Payment Method</h2>
                                    <CreditCard className="w-5 h-5 text-accent" />
                                </div>
                                <div className="p-8 border border-accent/20 bg-accent/5 rounded-sm">
                                    <p className="text-sm text-primary/70 leading-relaxed font-bold mb-8 italic">
                                        For your privacy and security, we currently process payments via <span className="text-primary">Direct Bank Transfer</span> or <span className="text-primary">Secure Payment Link</span>. After placing your order, our concierge will send you the details.
                                    </p>
                                    <div className="space-y-3">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40 ml-1">Your $CashTag (Optional)</label>
                                        <input
                                            type="text"
                                            className="w-full bg-transparent border-b border-border/60 py-4 focus:border-accent outline-none transition-colors font-bold text-primary"
                                            placeholder="$yourtag"
                                            value={formData.cashAppTag}
                                            onChange={(e) => setFormData({ ...formData, cashAppTag: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </section>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-primary text-white py-6 rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-accent transition-all duration-500 disabled:opacity-50"
                            >
                                {isSubmitting ? "Processing..." : `Complete Purchase — $${totalPrice.toFixed(2)}`}
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-5">
                        <div className="bg-secondary/30 p-10 rounded-2xl border border-border/40 sticky top-32 shadow-2xl">
                            <h3 className="text-xl font-serif text-primary mb-8 font-bold">Order Summary</h3>
                            <div className="space-y-6 mb-10">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-white rounded-sm overflow-hidden border border-border/40">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-serif text-primary font-bold">{item.name}</p>
                                                <p className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <span className="text-sm font-bold text-primary/70">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 pt-8 border-t border-border/60">
                                <div className="flex justify-between text-sm">
                                    <span className="text-primary/40 font-bold uppercase tracking-widest text-[10px]">Subtotal</span>
                                    <span className="text-primary/70 font-bold">${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-primary/40 font-bold uppercase tracking-widest text-[10px]">Shipping</span>
                                    <span className="text-accent font-bold uppercase tracking-widest text-[10px]">Complimentary</span>
                                </div>
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="font-serif text-primary font-bold">Total</span>
                                    <span className="font-serif text-primary font-bold">${totalPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="mt-10 flex items-center gap-4 p-4 bg-white/50 rounded-lg border border-border/20">
                                <ShieldCheck className="w-5 h-5 text-accent" />
                                <p className="text-[10px] uppercase tracking-widest text-primary/40 leading-relaxed font-bold">
                                    Your health data is encrypted and handled with absolute discretion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
