'use client';
import Link from "next/link";
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';

export default function ContentSplit() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4 block">More Growth, More Sustainability</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight">
                            Sustainable Farming<br />Made Simple
                        </h2>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            At Yaiphakon, we believe sustainable agriculture is the key to Manipur’s future. We empower farmers with tools, training and technologies that reduce risks, increase productivity and promote long-term environmental balance.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                'Improves soil fertility and crop health',
                                'Increases farmer income and reduces input cost',
                                'Environment-friendly and climate-resilient practices'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <Check size={14} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4 ">
                            <Link href="/about/company"

                                className="px-8 py-4 bg-secondary text-black rounded-full font-bold hover:bg-secondary/90 transition-colors flex items-center gap-2">

                                Explore Our Work
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-3xl overflow-hidden bg-gray-100"
                    >
                        {/* Background Image */}
                        <img
                            src="/banner-image.webp"
                            alt="Sustainable Agriculture"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
