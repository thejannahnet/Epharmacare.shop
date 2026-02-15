import { FiFacebook, FiTwitter, FiInstagram, FiHeart } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import data from "@/data/resume.json";

const socialLinks = [
    { icon: FiFacebook, href: data.social.facebook, label: "Facebook" },
    { icon: FiTwitter, href: data.social.twitter, label: "Twitter" },
    { icon: FiInstagram, href: data.social.instagram, label: "Instagram" },
];

const navLinks = data.navigation.filter((_: unknown, i: number) => i < 5);

export default function Footer() {
    return (
        <footer className="relative bg-primary-950 dark:bg-dark-950 text-white overflow-hidden">
            <div className="h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />

            <div className="section-container py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <ScrollLink to="hero" smooth duration={800} className="cursor-pointer flex items-center gap-2 justify-center md:justify-start">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                                <span className="text-white font-bold text-xs">TA</span>
                            </div>
                            <div>
                                <span className="text-sm font-bold text-white block leading-tight">Tariq Anwar</span>
                                <span className="text-[10px] font-medium text-dark-400 block leading-tight">Southampton Summer Programme</span>
                            </div>
                        </ScrollLink>
                        <p className="mt-3 text-sm text-dark-400 max-w-xs">
                            English language immersion and cultural adventure for ages 11‑25.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        {navLinks.map((link: { label: string; to: string }) => (
                            <ScrollLink
                                key={link.label}
                                to={link.to}
                                smooth
                                offset={-70}
                                duration={800}
                                className="text-sm text-dark-400 hover:text-accent-400 cursor-pointer transition-colors duration-300"
                            >
                                {link.label}
                            </ScrollLink>
                        ))}
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="p-2.5 rounded-xl bg-primary-900 hover:bg-accent-400 text-dark-400 hover:text-dark-900
                           transition-all duration-300 hover:scale-110"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-primary-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-dark-500">
                    <p>{data.footer.text}</p>
                    <p className="flex items-center gap-1">
                        Made with <FiHeart className="w-4 h-4 text-red-500" /> by {data.author.name}
                    </p>
                </div>
            </div>
        </footer>
    );
}
