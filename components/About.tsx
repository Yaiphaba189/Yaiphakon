'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Who We  Are</h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            A Manipur-based agri, bio, and food tech organisation committed to transforming local farming practices with modern, eco-friendly solutions.
                        </p>
                        <div className="p-6 rounded-xl bg-white/5 border border-border">
                            <h3 className="text-xl font-bold text-primary mb-2">Our Vision & Mission</h3>
                            <p className="text-gray-400">
                                To build a greener, healthier Manipur by promoting scientific farming, soil health improvement, and sustainable rural growth.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex items-center justify-center"
                    >
                        {/* Placeholder for an image - using a stylized abstract representation for now */}
                        <div className="text-center p-8">
                            <div className="text-6xl mb-4">🌾</div>
                            <p className="text-2xl font-bold text-white/80">Empowering Farmers</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
