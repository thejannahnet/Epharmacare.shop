import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <ShieldCheck className="w-8 h-8" />
                            <span className="text-2xl font-bold">E Pharma Care</span>
                        </div>
                        <p className="text-white/70 max-w-sm leading-relaxed mb-8">
                            Your trusted partner for high-quality pharmaceutical needs. We prioritize your health with fast, discrete, and reliable service.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-white/70">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/#products" className="hover:text-white transition-colors">Products</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact</h4>
                        <ul className="space-y-3 text-white/70">
                            <li>515 N Glendale CA 91206, USA</li>
                            <li>support@epharmacare.shop</li>
                            <li>+1 (518) 300 1106</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <p>© 2025 E Pharma Care. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
