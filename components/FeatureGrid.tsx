'use client';

import { motion } from 'framer-motion';
import { Sprout, Zap, Leaf } from 'lucide-react';

export default function FeatureGrid() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">More Growth, More Sustainability</span>
                    <h2 className="text-4xl font-bold mt-2 text-primary">Empowering Farmers with<br />Technology & Tradition</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: Large Image Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-[400px] rounded-3xl overflow-hidden group"
                    >
                        {/* Background Image */}
                        <img
                            src="/banner-image.webp"
                            alt="Agriculture"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                        {/* Black Overlay */}
                        <div className="absolute inset-0 bg-black/70 z-10" />

                        <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                                <Sprout className="text-white" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Building Everything Through Yaiphakon Agriculture</h3>
                            <p className="text-sm text-white/80 leading-relaxed mt-2">
                                We design and implement complete agricultural solutions – from soil rejuvenation and bio-inputs to food processing and mechanisation.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="relative h-[400px] rounded-3xl overflow-hidden group"
                    >
                        {/* Background Image */}
                        <img
                            src="/banner-image.webp"
                            alt="Agriculture"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                        {/* Black Overlay */}
                        <div className="absolute inset-0 bg-black/70 z-10" />

                        <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                                <Zap className="text-white" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Smart Agricultural<br />Solutions</h3>
                            <p className="text-sm text-white/80 leading-relaxed mt-2">
                                Our innovations combine traditional knowledge and modern technology to improve farm efficiency, crop health and income generation across Manipur.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="relative h-[400px] rounded-3xl overflow-hidden group"
                    >
                        {/* Background Image */}
                        <img
                            src="/banner-image.webp"
                            alt="Agriculture"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                        {/* Black Overlay */}
                        <div className="absolute inset-0 bg-black/70 z-10" />

                        <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                                <Leaf className="text-white" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">We Are Building a Better Farming Future</h3>
                            <p className="text-sm text-white/80 leading-relaxed mt-2">
                                By integrating sustainable practices with modern agri-tech, we help farmers reduce cost, improve yields and protect the environment.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
