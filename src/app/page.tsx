"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck, Truck, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart, totalItems } = useCart();

  return (
    <div className="min-h-screen">
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-slate-900">E Pharma Care</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
            <Link href="/" className="hover:text-sky-500 transition-colors">Home</Link>
            <Link href="#products" className="hover:text-sky-500 transition-colors">Products</Link>
            <Link href="#about" className="hover:text-sky-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-sky-500 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 relative text-slate-600 hover:text-sky-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-sky-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-100 rounded-full blur-[120px] opacity-50" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-100 rounded-full blur-[120px] opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-600 text-sm font-semibold mb-6">
                Trusted Pharmaceutical Provider
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                Your Health, <br />
                <span className="text-sky-500">Our Priority.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Providing high-quality pharmaceutical products with discrete delivery and exceptional care. Your trusted partner in health and wellness.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="#products" className="px-8 py-4 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-200 flex items-center gap-2 group">
                  Shop Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#about" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative"
            >
              <div className="relative z-10 animate-float">
                <img
                  src="/hero-pharmaceuticals.png"
                  alt="Pharmaceutical Products"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">100% Certified</p>
                    <p className="text-xs text-slate-500">Quality Guaranteed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Fast Delivery", desc: "Discrete and secure shipping to your doorstep." },
              { icon: ShieldCheck, title: "Secure Payment", desc: "Multiple payment options including Cash App." },
              { icon: Clock, title: "24/7 Support", desc: "Our team is always here to help you." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-sky-500 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Best Sellers</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Explore our range of high-quality pharmaceutical products, carefully selected for your needs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-sky-600 shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-sky-500">{product.price.split(' – ')[0]}</span>
                    <button
                      id={`add-to-cart-${product.id}`}
                      onClick={() => {
                        addToCart(product);
                        setIsCartOpen(true);
                      }}
                      className="p-3 bg-slate-900 text-white rounded-xl hover:bg-sky-500 transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">E Pharma Care</span>
              </div>
              <p className="text-slate-400 max-w-md mb-8">
                Your trusted partner for quality pharmaceutical products. We prioritize your health and privacy above all else.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link href="/" className="hover:text-sky-500 transition-colors">Home</Link></li>
                <li><Link href="#products" className="hover:text-sky-500 transition-colors">Shop</Link></li>
                <li><Link href="#about" className="hover:text-sky-500 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-sky-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-sky-500 mt-1" />
                  <span>515 N Glendale CA 91206, USA</span>
                </li>
                <li>support@epharmacare.shop</li>
                <li>+1 (518) 300 1106</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>© 2025 E Pharma Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
