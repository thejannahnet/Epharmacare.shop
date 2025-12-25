"use client";

import { motion } from "framer-motion";
import { CheckCircle, Copy, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function OrderConfirmation() {
    const cashAppTag = "$EPharmaCare"; // Example tag

    const copyToClipboard = () => {
        navigator.clipboard.writeText(cashAppTag);
        alert("CashTag copied to clipboard!");
    };

    return (
        <div className="min-h-screen bg-slate-50 py-20 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 text-center"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="text-green-600 w-10 h-10" />
                </div>

                <h1 className="text-3xl font-bold text-slate-900 mb-4">Order Received!</h1>
                <p className="text-slate-600 mb-8">
                    Thank you for your order. To complete your purchase, please follow the payment instructions below.
                </p>

                <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 mb-8 text-left">
                    <h2 className="font-bold text-sky-900 mb-4 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5" />
                        Payment Instructions
                    </h2>
                    <ol className="space-y-4 text-sky-800 text-sm list-decimal pl-4">
                        <li>Open your <strong>Cash App</strong> on your mobile device.</li>
                        <li>Enter the total amount of your order.</li>
                        <li>Send the payment to our CashTag:
                            <div className="mt-2 flex items-center gap-2 bg-white p-3 rounded-xl border border-sky-200">
                                <span className="font-mono font-bold text-lg">{cashAppTag}</span>
                                <button
                                    onClick={copyToClipboard}
                                    className="ml-auto p-2 hover:bg-sky-50 rounded-lg transition-colors text-sky-500"
                                >
                                    <Copy className="w-5 h-5" />
                                </button>
                            </div>
                        </li>
                        <li>Include your <strong>Order ID</strong> or <strong>Email</strong> in the payment note.</li>
                        <li>Once payment is verified, your order will be processed for shipping.</li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <Link href="/" className="block w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                        Return to Home
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <p className="text-xs text-slate-400">
                        A confirmation email has been sent to your inbox with these instructions.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
