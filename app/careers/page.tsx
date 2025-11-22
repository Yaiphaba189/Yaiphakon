'use client';

import Breadcrumb from '@/components/Breadcrumb';
import { Briefcase, GraduationCap, Search, ArrowRight, TrendingUp, Users, Heart } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
    return (
        <>
            <Breadcrumb
                title="Careers"
                items={[
                    { label: 'Careers' }
                ]}
            />

            <div className='container mx-auto px-6 py-24'>
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className='text-4xl md:text-5xl font-bold mb-6 text-primary'>Join Our Team</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We at Yaiphakon: Integrity, Respect, Inclusion, Safety and Excellence are the core values by which it defines the way we work and the standards we conduct ourselves.
                    </p>
                </div>

                {/* Opportunities Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Apply For Job */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <div className="mb-6">
                            <Briefcase className="text-primary" size={48} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Apply For Job</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Explore the ocean of opportunities to be a part of the Largest Manufacturing Giant and Employer in Manipur and work in a collaborative, exciting, inclusive work environment.
                        </p>
                        <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                            APPLY
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    {/* Apply For Internship */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <div className="mb-6">
                            <GraduationCap className="text-primary" size={48} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Apply For An Internship</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Explore the real world of learning through live projects, interact with the Subject matter experts across different functions while you pursue your Summer Internship at Yaiphakon. We provide Internships in the field of Commerce & Management and Food technology from various reputed colleges and Universities across the country.
                        </p>
                        <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                            APPLY
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Current Openings */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl border border-gray-200">
                    <div className="text-center mb-8">
                        <div className="mb-6 mx-auto text-primary flex justify-center">
                            <Search size={48} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Current Openings</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We are pleased to learn about your keen interest with Yaiphakon Pvt. Ltd. Our Current openings across different functions have been provided here. You may apply for the eligible or suitable position by submitting your Profile in our Talent database. Post evaluation, we shall get in touch with you if your profile meets our requirements.
                        </p>
                    </div>
                    <div className="text-center">
                        <a
                            href="/careers/openings"
                            className="px-8 py-4 bg-secondary text-black rounded-lg font-bold hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
                        >
                            EXPLORE OPENINGS
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>

                {/* Why Join Us */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center text-primary">Why Join Yaiphakon?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Growth Opportunities',
                                description: 'Continuous learning and career development in a dynamic environment'
                            },
                            {
                                title: 'Inclusive Culture',
                                description: 'Work in a diverse, respectful, and collaborative workplace'
                            },
                            {
                                title: 'Make an Impact',
                                description: 'Contribute to sustainable agriculture and rural development in Manipur'
                            }
                        ].map((item, index) => (
                            <div key={index} className="text-center p-6">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
