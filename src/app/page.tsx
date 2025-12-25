"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck, Truck, Clock, ArrowRight, Menu, X, Award, Users } from "lucide-react";
import Link from "next/link";
import { products } from "@/lib/products";
import { InteractiveCapsule } from "@/components/InteractiveCapsule";
import { useCart } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { addToCart, totalItems } = useCart();

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/20 selection:text-accent">
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight text-primary">E Pharma Care</span>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.2em] font-bold text-primary/60">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <Link href="#products" className="hover:text-accent transition-colors">Collection</Link>
            <Link href="#story" className="hover:text-accent transition-colors">Our Story</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 relative text-primary hover:text-accent transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-border p-6 flex flex-col gap-4 text-center uppercase tracking-widest text-sm font-bold"
          >
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="#products" onClick={() => setIsMenuOpen(false)}>Collection</Link>
            <Link href="#story" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-52 lg:pb-48 overflow-hidden">
        {/* Floating Medical Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[10%] text-accent"
          >
            <div className="w-12 h-12 border-2 border-current rounded-full flex items-center justify-center opacity-20">
              <div className="w-6 h-[2px] bg-current" />
              <div className="w-[2px] h-6 bg-current absolute" />
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -15, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-[15%] text-primary"
          >
            <div className="w-16 h-8 border-2 border-current rounded-full opacity-10 flex items-center justify-center">
              <div className="w-1/2 h-full border-r-2 border-current" />
            </div>
          </motion.div>

          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0],
              opacity: [0.08, 0.12, 0.08]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 left-[20%] text-accent"
          >
            <ShieldCheck className="w-10 h-10 opacity-20" />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[15%] right-[25%] text-primary"
          >
            <div className="w-8 h-8 border-2 border-current rotate-45 opacity-10" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 text-center lg:text-left"
            >
              <span className="inline-block text-[11px] uppercase tracking-[0.3em] font-bold text-accent mb-8">
                Excellence in Pharmaceutical Care
              </span>
              <h1 className="text-5xl lg:text-8xl font-serif text-primary leading-[1.1] mb-10 font-bold">
                Your Health, <br />
                <span className="italic text-accent">Our Priority.</span>
              </h1>
              <p className="text-lg text-primary/70 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-bold">
                Curating high-quality pharmaceutical solutions with a commitment to discretion, precision, and your absolute health.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-12">
                <Link href="#products" className="group flex items-center gap-4 text-sm uppercase tracking-widest font-bold text-primary">
                  Explore Collection
                  <div className="w-12 h-[2px] bg-primary/20 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
                </Link>
                <Link href="#story" className="group flex items-center gap-4 text-sm uppercase tracking-widest font-bold text-accent">
                  Learn More
                  <div className="w-12 h-[2px] bg-accent/20 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 relative w-full lg:w-auto mt-12 lg:mt-0"
            >
              <div className="relative w-[80%] aspect-square max-w-[280px] mx-auto lg:w-full lg:max-w-none lg:aspect-square overflow-visible flex items-center justify-center">
                <InteractiveCapsule />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-xl shadow-2xl border border-border/50 hidden xl:block">
                <div className="flex items-center gap-6">
                  <div className="w-1px h-12 bg-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary/40 mb-1 font-bold">Standard of Care</p>
                    <p className="text-sm font-serif italic text-primary font-bold">100% Certified Quality</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy / Features */}
      <section id="about" className="py-32 bg-secondary/50 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { icon: Truck, title: "Discrete Logistics", desc: "A seamless, private delivery experience tailored to your lifestyle." },
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Every product is rigorously vetted to meet the highest pharmaceutical standards." },
              { icon: Clock, title: "Personalized Care", desc: "Our dedicated specialists are available around the clock for your peace of mind." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="text-center md:text-left"
              >
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-accent mb-6">{feature.title}</h3>
                <p className="text-primary/70 leading-relaxed font-bold text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-32 lg:py-52 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent mb-8 block">Heritage & Vision</span>
                <h2 className="text-5xl lg:text-6xl font-serif text-primary mb-10 leading-tight font-bold">A Legacy of <br /><span className="italic text-accent">Clinical Excellence.</span></h2>
                <div className="space-y-8 text-primary/70 font-bold leading-relaxed">
                  <p>
                    Founded on the principles of absolute integrity and patient-centric care, E Pharma Care has evolved into a premier destination for those seeking a more refined pharmaceutical experience. We believe that health is the ultimate luxury, and our mission is to provide access to essential treatments with the highest standards of service.
                  </p>
                  <p>
                    Our team of dedicated professionals works tirelessly to source only the most trusted medications, ensuring that every item in our collection meets rigorous safety and efficacy benchmarks. We understand the importance of discretion in today's world, which is why we've perfected a logistics network that prioritizes your privacy above all else.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-12 mt-16">
                  <div>
                    <Award className="text-accent w-8 h-8 mb-4" />
                    <h4 className="text-xs uppercase tracking-widest font-bold text-primary mb-2">Certified</h4>
                    <p className="text-[11px] text-primary/40 leading-relaxed font-bold">Global pharmaceutical standards compliance.</p>
                  </div>
                  <div>
                    <Users className="text-accent w-8 h-8 mb-4" />
                    <h4 className="text-xs uppercase tracking-widest font-bold text-primary mb-2">Expertise</h4>
                    <p className="text-[11px] text-primary/40 leading-relaxed font-bold">Specialized support available 24/7.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl"
              >
                <img
                  src="/hero-pharmaceuticals.png"
                  alt="Our Heritage"
                  className="w-full h-full object-cover sepia-[0.2] brightness-[0.9] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-accent/5 mix-blend-multiply" />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent mb-4 block">The Collection</span>
              <h2 className="text-4xl lg:text-5xl font-serif text-primary font-bold">Essential Care.</h2>
            </div>
            <p className="text-primary/50 text-sm max-w-xs leading-relaxed font-bold">
              Discover our curated selection of premium pharmaceutical products, delivered with absolute precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden relative rounded-sm bg-secondary mb-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                  <button
                    onClick={() => {
                      addToCart(product);
                      setIsCartOpen(true);
                    }}
                    className="absolute bottom-6 left-6 right-6 bg-white py-4 text-[11px] uppercase tracking-[0.2em] font-bold text-primary opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 hover:bg-primary hover:text-white shadow-xl"
                  >
                    Add to Collection
                  </button>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">{product.category}</p>
                    <h3 className="text-lg font-serif text-primary group-hover:text-accent transition-colors duration-300 font-bold">{product.name}</h3>
                  </div>
                  <span className="text-sm font-bold text-primary/60">{product.price.split(' – ')[0]}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-primary w-5 h-5" />
                </div>
                <span className="text-2xl font-serif font-bold tracking-tight">E Pharma Care</span>
              </div>
              <p className="text-white/50 max-w-sm leading-relaxed font-bold text-sm mb-12">
                A modern standard in pharmaceutical excellence. We blend clinical precision with a luxury service experience to support your journey to optimal health.
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-7">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-accent mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm text-white/60 font-bold">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#products" className="hover:text-white transition-colors">Collection</Link></li>
                <li><Link href="#story" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-accent mb-8">Concierge</h4>
              <ul className="space-y-4 text-sm text-white/60 font-bold">
                <li className="flex items-start gap-4">
                  <span className="text-accent">A.</span>
                  <span>515 N Glendale CA 91206, USA</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent">E.</span>
                  <span>support@epharmacare.shop</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent">T.</span>
                  <span>+1 (518) 300 1106</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[11px] uppercase tracking-widest text-white/30 font-bold">© 2025 E Pharma Care. All rights reserved.</p>
            <div className="flex gap-8 text-[11px] uppercase tracking-widest text-white/30 font-bold">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
