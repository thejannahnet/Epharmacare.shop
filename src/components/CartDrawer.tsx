"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
                    >
                        <div className="p-6 border-b flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <ShoppingCart className="w-6 h-6 text-sky-500" />
                                <h2 className="text-xl font-bold text-slate-900">Your Cart ({totalItems})</h2>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <X className="w-6 h-6 text-slate-500" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                        <ShoppingCart className="w-10 h-10 text-slate-300" />
                                    </div>
                                    <p className="text-slate-500 font-medium">Your cart is empty</p>
                                    <button
                                        onClick={onClose}
                                        className="mt-4 text-sky-500 font-bold hover:underline"
                                    >
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between mb-1">
                                                <h3 className="font-bold text-slate-900">{item.name}</h3>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-slate-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-sm text-slate-500 mb-3">{item.price.split(' – ')[0]}</p>
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center border border-slate-200 rounded-lg">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-slate-50 text-slate-500"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-slate-50 text-slate-500"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-6 border-t bg-slate-50 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600 font-medium">Subtotal</span>
                                    <span className="text-2xl font-bold text-slate-900">${totalPrice.toFixed(2)}</span>
                                </div>
                                <p className="text-xs text-slate-500">Shipping and taxes calculated at checkout.</p>
                                <Link
                                    href="/checkout"
                                    onClick={onClose}
                                    className="w-full py-4 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-200 flex items-center justify-center gap-2 group"
                                >
                                    Checkout
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
