'use client';

import { MapPin, Mail, Phone, Send } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Breadcrumb
                title="Contact Us"
                items={[
                    { label: 'Contact Us' }
                ]}
            />

            <div className="container mx-auto px-6 py-24 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Get In Touch</h2>
                            <p className="text-gray-600">
                                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                                <div>
                                    <div className="font-semibold text-gray-900 mb-1">Registered Office</div>
                                    <p className="text-gray-600 text-sm">
                                        Naoremthong Khulem Leikai, Ball Lampak,<br />
                                        Near DC office, Imphal West - 795004, Manipur
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                                <div>
                                    <div className="font-semibold text-gray-900 mb-1">Corporate Office</div>
                                    <p className="text-gray-600 text-sm">
                                        Tera Urak Industrial Estate, Bishnupur,<br />
                                        Bishnupur District - 795126, Manipur
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Mail className="text-primary shrink-0" size={20} />
                                <a href="mailto:info@yaiphakon.com" className="text-gray-900 hover:text-[#39FF14] transition-colors">
                                    info@yaiphakon.com
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <Phone className="text-primary shrink-0" size={20} />
                                <a href="tel:+919876543210" className="text-gray-900 hover:text-[#39FF14] transition-colors">
                                    +91 98765 43210
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39FF14] focus:border-transparent outline-none"
                                    placeholder="Your Name *"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39FF14] focus:border-transparent outline-none"
                                    placeholder="Email Address *"
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39FF14] focus:border-transparent outline-none"
                                    placeholder="Phone Number"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39FF14] focus:border-transparent outline-none resize-none"
                                    placeholder="Your Message *"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-20 rounded-xl overflow-hidden border border-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.628853447304!2d93.9333!3d24.8083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzI5LjkiTiA5M8KwNTUnNTkuOSJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
