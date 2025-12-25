"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Trash2, ShieldCheck } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
                        className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[60]"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col font-sans"
                    >
                        <div className="p-8 border-b border-border/40 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShoppingCart className="w-5 h-5 text-accent" />
                                <h2 className="text-xl font-serif text-primary font-bold">Your Collection</h2>
                                <span className="text-[10px] uppercase tracking-widest font-bold text-primary/40">({totalItems})</span>
                            </div>
                            <button onClick={onClose} className="p-2 hover:text-accent transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <p className="text-primary/40 font-bold uppercase tracking-widest text-[10px] mb-6">Your collection is empty</p>
                                    <button
                                        onClick={onClose}
                                        className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent hover:text-primary transition-colors"
                                    >
                                        Continue Exploring
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-10">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex gap-6 group">
                                            <div className="w-24 h-32 bg-secondary rounded-sm overflow-hidden flex-shrink-0">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between py-1">
                                                <div>
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="text-base font-serif text-primary font-bold">{item.name}</h3>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="text-primary/20 hover:text-red-500 transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                    <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-4">{item.category}</p>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center border border-border/60 rounded-sm">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                            className="px-3 py-1 hover:bg-secondary transition-colors font-bold"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="px-3 py-1 text-xs font-bold border-x border-border/60">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="px-3 py-1 hover:bg-secondary transition-colors font-bold"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <span className="text-sm font-bold text-primary">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-8 bg-secondary/30 border-t border-border/40">
                                <div className="flex justify-between items-end mb-8">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-primary/40 font-bold mb-1">Subtotal</p>
                                        <p className="text-2xl font-serif text-primary font-bold">${totalPrice.toFixed(2)}</p>
                                    </div>
                                    <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Complimentary Shipping</p>
                                </div>
                                <Link
                                    href="/checkout"
                                    onClick={onClose}
                                    className="w-full bg-primary text-white py-6 rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-accent transition-all duration-500 flex items-center justify-center gap-4"
                                >
                                    Proceed to Checkout
                                    <ShieldCheck className="w-4 h-4" />
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
