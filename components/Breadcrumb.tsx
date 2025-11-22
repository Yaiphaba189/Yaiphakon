'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
    items: { label: string; href?: string }[];
    title: string;
}

export default function Breadcrumb({ items, title }: BreadcrumbProps) {
    return (
        <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[#133d22] to-[#0c2615] pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/banner-image.webp"
                    alt="Page Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0" />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {title}
                </h1>

                {/* Breadcrumb Navigation */}
                <nav className="flex items-center justify-center gap-2 text-sm">
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-white/80 hover:text-[#39FF14] transition-colors"
                    >
                        <Home size={16} />
                        <span>Home</span>
                    </Link>

                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <ChevronRight size={16} className="text-white/50" />
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="text-white/80 hover:text-[#39FF14] transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-[#39FF14] font-medium">
                                    {item.label}
                                </span>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </section>
    );
}
