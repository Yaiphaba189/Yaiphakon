'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/banner-image.webp"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0" />

            {/* Abstract Nature Patterns */}
            <div className="absolute inset-0 opacity-20 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]" />
            </div>

            {/* Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#39FF14]/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm">
                        Growing Sustainable Futures
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white tracking-tight">
                        Driving Sustainable <br />
                        <span className="text-secondary">Agriculture in Manipur</span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                        Yaiphakon is a Manipur-based agri, bio and food tech organisation working with farmers, entrepreneurs and rural communities to build a greener, healthier future through sustainable agriculture and modern technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/about/company"
                            className="group px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg shadow-black/20"
                        >
                            Learn More
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
