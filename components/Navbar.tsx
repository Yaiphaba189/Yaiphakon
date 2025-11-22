'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Home', href: '/' },
        {
            name: 'About Us',
            href: '#',
            dropdown: [
                { name: 'Company', href: '/about/company' },
                { name: 'History', href: '/about/history' },
                { name: 'Company Philosophy', href: '/about/philosophy' },
                { name: 'Founders Profile', href: '/about/founders' },
                { name: 'Award and Recognition', href: '/about/awards' },
                { name: 'Our Team', href: '/about/team' },
                { name: 'Photo Gallery', href: '/about/gallery' },
            ]
        },
        {
            name: 'Vision & Mission',
            href: '#',
            dropdown: [
                { name: 'Soil Rejuvenation', href: '/vision-mission/soil-rejuvenation' },
                { name: 'Agri Tech', href: '/vision-mission/agri-tech' },
                { name: 'Bio Tech', href: '/vision-mission/bio-tech' },
                { name: 'Food Tech', href: '/vision-mission/food-tech' },
                { name: 'Farm Mechanisation', href: '/vision-mission/farm-mechanisation' },
                { name: 'Waste Management', href: '/vision-mission/waste-management' },
            ]
        },
        { name: 'Social Support', href: '/social-support' },
        { name: 'Careers', href: '/careers' },
        { name: 'Outlets', href: '/outlets' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <nav
            className="absolute w-full z-50 bg-transparent py-6"
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/yaiphakon logo.png"
                        alt="Yaiphakon Logo"
                        width={180}
                        height={90}
                        className="h-16 w-auto object-contain"
                    />
                    <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'
                        }`}>
                        Yaiphakon
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className="flex items-center gap-1 transition-colors text-sm font-medium py-2 text-white/90 hover:text-[#39FF14]"
                            >
                                {item.name}
                                {item.dropdown && <ChevronDown size={14} />}
                            </Link>

                            {/* Dropdown */}
                            {item.dropdown && (
                                <AnimatePresence>
                                    {activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-xl border border-gray-100 overflow-hidden py-2"
                                        >
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#008000] transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden transition-colors ${scrolled ? 'text-gray-600' : 'text-white'
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {menuItems.map((item) => (
                                <div key={item.name}>
                                    {item.dropdown ? (
                                        <div className="space-y-2">
                                            <div className="font-medium text-gray-800">{item.name}</div>
                                            <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block text-sm text-gray-600 hover:text-primary"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block font-medium text-gray-800 hover:text-primary"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
