"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck, Truck, Clock } from "lucide-react";
import { products } from "@/lib/products";
import HeroSlider from "@/components/HeroSlider";
import { useCart } from "@/lib/cart-context";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Fast Delivery", desc: "Reliable shipping directly to your doorstep." },
              { icon: ShieldCheck, title: "Secure Payments", desc: "100% secure transactions for your peace of mind." },
              { icon: Clock, title: "24/7 Support", desc: "Our team is here to help you anytime, anywhere." }
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our selection of high-quality pharmaceutical products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-2 py-1 rounded z-10">
                    In Stock
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{product.category}</p>
                    <h3 className="text-xl font-bold text-primary">{product.name}</h3>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-lg font-bold text-primary">{product.price.split(' – ')[0]}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" /> Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us / Our Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-xl aspect-video"
              >
                <Image
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800"
                  alt="Our Pharmacy Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </motion.div>
            </div>
            <div className="flex-1">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-accent font-bold uppercase tracking-widest text-sm mb-4"
              >
                About Us
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-primary mb-6"
              >
                Committed to Your Health & Wellness
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                At E Pharma Care, we believe that access to quality healthcare should be simple, discrete, and reliable. Founded by a team of experienced pharmacists and healthcare professionals, our mission is to bridge the gap between traditional pharmacy services and modern convenience.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground leading-relaxed mb-8"
              >
                We source our medications directly from certified manufacturers, ensuring that every product you receive meets the highest standards of safety and efficacy. Whether you need prescription medication or wellness advice, our team is here to support you every step of the way.
              </motion.p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Certified Products", value: "100%" },
                  { label: "Happy Customers", value: "10k+" },
                  { label: "Years Experience", value: "15+" },
                  { label: "Support Available", value: "24/7" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="border-l-2 border-accent pl-4"
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
