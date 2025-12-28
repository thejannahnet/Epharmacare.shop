"use client";

import { motion } from "framer-motion";

export default function TrackOrderPage() {
    return (
        <div className="min-h-screen bg-background py-20 px-6">
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm border border-border">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-primary mb-6 text-center"
                >
                    Track Your Order
                </motion.h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Order ID</label>
                        <input
                            type="text"
                            placeholder="e.g. EPC-12345"
                            className="w-full bg-secondary border-none rounded-md py-2 px-4 focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full bg-secondary border-none rounded-md py-2 px-4 focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>
                    <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md font-bold transition-colors">
                        Track Order
                    </button>
                </form>
            </div>
        </div>
    );
}
