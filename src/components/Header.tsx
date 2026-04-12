"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Sheet from './Sheet';

const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
    ssr: false,
});

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Programme', href: '/programme' },
        { name: 'Our Team', href: '/team' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#6a486f]/95 dark:bg-[#4f3555]/95 backdrop-blur-xl border-b border-[#e7a99a]/25 dark:border-[#e7a99a]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-2 sm:py-3">
                    {/* Logo + text */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
                        <Image
                            src="/logonew.png"
                            alt="Manimukundeshwor logo"
                            width={68}
                            height={68}
                            className="h-11 sm:h-14 w-auto object-contain shrink-0"
                            priority
                        />
                        <div className="flex flex-col leading-tight min-w-0">
                            <span className="text-sm xs:text-base sm:text-xl font-semibold tracking-tight text-[rgba(238,162,143,1)] truncate">
                                Manimukundeshwor
                            </span>
                            <span className="text-[10px] xs:text-[11px] sm:text-xs font-semibold tracking-wide text-white leading-snug break-words">
                                Guardians of the Sky — vulture conservation
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 flex-wrap justify-end">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`site-nav-link transition-colors border-b-2 pb-1 ${
                                        isActive
                                            ? 'border-brand-300 text-brand-300'
                                            : 'border-transparent text-[#f7ece8] hover:text-brand-300 hover:border-brand-300/70'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        {/* Theme Toggle */}
                        <ThemeToggle className="p-2 rounded-full bg-white/15 hover:bg-white/20 text-white transition-all duration-200" />
                    </nav>

                    {/* Mobile Menu Button & Theme Toggle */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle className="p-2 rounded-full bg-white/15 hover:bg-white/20 text-white transition-all duration-200" />
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="p-2 text-[#f7ece8] hover:text-brand-300 transition-colors"
                            aria-label="Open menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Sheet */}
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <div className="flex flex-col items-center justify-center w-full h-full px-6 py-8 space-y-6">
                        <nav className="w-full space-y-3">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`block w-full text-center text-base sm:text-lg font-semibold tracking-wide rounded-full py-3 px-4 border transition-all duration-200 ${
                                            isActive
                                                ? 'bg-white/20 text-white border-brand-400 shadow-md'
                                                : 'bg-white/5 text-slate-50/90 border-white/10 hover:bg-white/10 hover:text-white hover:border-brand-400'
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </Sheet>
            </div>
        </header>
    );
};

export default Header;
