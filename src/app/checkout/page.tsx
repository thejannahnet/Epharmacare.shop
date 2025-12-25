"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowLeft, CreditCard } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Checkout() {
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

        try {
            const response = await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    items: cart,
                    total: totalPrice,
                    customer: formData,
                }),
            });

            const result = await response.json();

            if (result.success) {
                clearCart();
                router.push("/order-confirmation");
            } else {
                alert("Failed to process order. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting order:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                <Link href="/" className="text-sky-500 hover:underline flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/" className="p-2 bg-white rounded-full shadow-sm hover:bg-slate-50 transition-colors">
                        <ArrowLeft className="w-6 h-6 text-slate-600" />
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Shipping Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                    >
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <ShieldCheck className="text-sky-500 w-6 h-6" />
                            Shipping Information
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Street Address</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                                    placeholder="123 Main St"
                                    value={formData.address}
                                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                                        placeholder="Glendale"
                                        value={formData.city}
                                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">State / Zip</label>
                                    <div className="flex gap-2">
                                        <input
                                            required
                                            type="text"
                                            className="w-1/2 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                                            placeholder="CA"
                                            value={formData.state}
                                            onChange={e => setFormData({ ...formData, state: e.target.value })}
                                        />
                                        <input
                                            required
                                            type="text"
                                            className="w-1/2 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                                            placeholder="91206"
                                            value={formData.zip}
                                            onChange={e => setFormData({ ...formData, zip: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-100">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <CreditCard className="text-sky-500 w-6 h-6" />
                                    Payment (Cash App)
                                </h2>
                                <p className="text-sm text-slate-500 mb-4">
                                    Please enter your Cash App $Tag. After submitting, you will receive instructions to complete the payment.
                                </p>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Your $CashTag</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                                        placeholder="$yourtag"
                                        value={formData.cashAppTag}
                                        onChange={e => setFormData({ ...formData, cashAppTag: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full py-4 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-200 disabled:opacity-50"
                            >
                                {isSubmitting ? "Processing..." : `Place Order ($${totalPrice.toFixed(2)})`}
                            </button>
                        </form>
                    </motion.div>

                    {/* Order Summary */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-6">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-slate-100 rounded-lg overflow-hidden">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{item.name}</p>
                                                <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <span className="font-bold text-slate-900">{item.price.split(' – ')[0]}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6 border-t border-slate-100 space-y-2">
                                <div className="flex justify-between text-slate-600">
                                    <span>Subtotal</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Shipping</span>
                                    <span className="text-green-500 font-medium">FREE</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-slate-900 pt-2">
                                    <span>Total</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
                            <h3 className="font-bold text-sky-900 mb-2 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5" />
                                Discrete Shipping
                            </h3>
                            <p className="text-sm text-sky-700">
                                All orders are packaged discretely with no mention of the contents or our brand on the outside.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
