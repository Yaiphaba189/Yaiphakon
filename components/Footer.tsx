'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0c2615] text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <Image
                                src="/yaiphakon logo.png"
                                alt="Yaiphakon Logo"
                                width={120}
                                height={90}
                                className="h-12 w-auto object-contain"
                            />
                            <span className="text-2xl font-bold tracking-tight">
                                Yaiphakon
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                            Driving sustainable agriculture and rural development in Manipur through innovation and technology.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-white/10">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-white">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Careers', 'Virtual Campus Tour', "Manipur's Agro Resources", 'HR Connect', 'Bakery POS'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-[#39FF14] transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-white">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-gray-400">
                                <MapPin className="shrink-0 mt-1 text-[#39FF14]" size={20} />
                                <span className="leading-relaxed">
                                    <strong className="text-white block mb-1">Regd. Office:</strong>
                                    Naoremthong Khulem Leikai, Ball Lampak, Near DC office, Imphal West - 795004, Manipur
                                </span>
                            </li>
                            <li className="flex items-start gap-4 text-gray-400">
                                <MapPin className="shrink-0 mt-1 text-[#39FF14]" size={20} />
                                <span className="leading-relaxed">
                                    <strong className="text-white block mb-1">Corporate Office:</strong>
                                    Tera Urak Industrial Estate, Bishnupur, Bishnupur District - 795126, Manipur
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Mail className="shrink-0 text-[#39FF14]" size={20} />
                                <a href="mailto:info@yaiphakon.com" className="hover:text-secondary transition-colors">info@yaiphakon.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Google Map */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-1 h-64 lg:h-auto rounded-2xl overflow-hidden shadow-lg border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.628853447304!2d93.9333!3d24.8083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzI5LjkiTiA5M8KwNTUnNTkuOSJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Yaiphakon. All rights reserved.powered by <a href="https://lamzing.com" className="text-[#39FF14]">Lamzing Technologies</a></p>
                </div>
            </div>
        </footer>
    );
}
