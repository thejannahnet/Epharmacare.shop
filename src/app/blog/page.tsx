"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "Understanding Your Prescription: A Guide to Safe Usage",
        excerpt: "Learn the importance of following your doctor's instructions and how to manage your medication schedule effectively.",
        date: "Dec 28, 2025",
        author: "Dr. Sarah Smith",
        category: "Health Tips",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "The Benefits of Online Pharmacy Services",
        excerpt: "Discover how digital pharmacies are revolutionizing healthcare access with discrete delivery and 24/7 support.",
        date: "Dec 25, 2025",
        author: "James Wilson",
        category: "Industry News",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Mental Health Awareness: Breaking the Stigma",
        excerpt: "An in-depth look at mental health challenges and the pharmaceutical solutions available to support well-being.",
        date: "Dec 20, 2025",
        author: "Dr. Emily Chen",
        category: "Wellness",
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-6"
                    >
                        Our Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg"
                    >
                        Insights, health tips, and industry news from our team of experts.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, i) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border flex flex-col"
                        >
                            <div className="aspect-video overflow-hidden bg-gray-100 relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        {post.author}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:gap-3 transition-all"
                                >
                                    Read Article <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
