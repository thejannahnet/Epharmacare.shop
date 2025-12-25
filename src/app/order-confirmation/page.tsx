"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function OrderConfirmationPage() {
    return (
        <div className="min-h-screen bg-background font-sans selection:bg-accent/20 selection:text-accent flex flex-col">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                            <ShieldCheck className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-serif font-bold tracking-tight text-primary">E Pharma Care</span>
                    </Link>
                </div>
            </nav>

            <main className="flex-1 flex items-center justify-center pt-20 pb-12">
                <div className="max-w-3xl w-full px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="bg-white p-12 lg:p-20 rounded-2xl shadow-2xl border border-border/40 text-center"
                    >
                        <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-10">
                            <CheckCircle2 className="w-12 h-12 text-accent" />
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-serif text-primary mb-6 font-bold">Order Received.</h1>
                        <p className="text-lg text-primary/70 mb-12 leading-relaxed font-bold">
                            Thank you for choosing E Pharma Care. Your request has been logged and is being reviewed by our clinical team.
                        </p>

                        <div className="bg-secondary/30 p-8 rounded-xl border border-border/40 mb-12 text-left">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Mail className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-[11px] uppercase tracking-widest font-bold text-primary mb-2">Next Steps</h3>
                                    <p className="text-sm text-primary/70 leading-relaxed font-bold">
                                        A secure payment link and detailed instructions have been sent to your email. Our concierge will reach out if any further information is required.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/"
                                className="bg-primary text-white px-10 py-5 rounded-sm text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-accent transition-all duration-500 flex items-center justify-center gap-4 group"
                            >
                                Return to Gallery
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    <p className="mt-12 text-center text-[10px] uppercase tracking-widest text-primary/30 font-bold">
                        Confidentiality Guaranteed • Certified Excellence
                    </p>
                </div>
            </main>
        </div>
    );
}
