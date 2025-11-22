'use client';

import { motion } from 'framer-motion';
import { Sprout, Cpu, FlaskConical, UtensilsCrossed, Tractor, Recycle } from 'lucide-react';
import Link from 'next/link';

export default function FocusAreas() {
    const focusAreas = [
        {
            icon: Sprout,
            title: 'Soil Rejuvenation',
            description: "Restoring Manipur's natural soil strength."
        },
        {
            icon: Cpu,
            title: 'Agri Tech',
            description: 'Smart tools and solutions for local farmers.'
        },
        {
            icon: FlaskConical,
            title: 'Bio Tech',
            description: 'Eco-safe innovations for better crop health.'
        },
        {
            icon: UtensilsCrossed,
            title: 'Food Tech',
            description: 'Enhancing local produce and value-added products.'
        },
        {
            icon: Tractor,
            title: 'Farm Mechanisation',
            description: 'Machines that ease farming in hill and valley regions.'
        },
        {
            icon: Recycle,
            title: 'Waste Management',
            description: 'Clean, sustainable solutions for communities.'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Focus Areas */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Our Key Focus Areas</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {focusAreas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-8 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                <area.icon className="text-primary" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{area.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Connect With Us */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-primary via-[#133d22] to-[#0c2615] rounded-3xl p-12 text-center text-white"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Connect With Us</h2>
                    <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Learn more about our work, outlets, news and opportunities to partner with us for a better, sustainable Manipur.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-white/90 transition-colors shadow-lg"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
