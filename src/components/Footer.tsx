import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white/70 dark:bg-slate-950/70 backdrop-blur-lg border-t border-white/10 dark:border-slate-800/50 text-slate-900 dark:text-slate-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
                    <div className="group text-center md:text-left">
                        <p className="text-sm text-slate-900 dark:text-white leading-relaxed">
                            Holistic conservation in the Kaligandaki River Corridor — protecting Nepal&apos;s critically endangered vultures through community, science, and spiritual stewardship.
                        </p>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
                            <li>
                                <Link href="/" className="text-slate-900 dark:text-white hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-300 font-medium">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-slate-900 dark:text-white hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-300 font-medium">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/programme" className="text-slate-900 dark:text-white hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-300 font-medium">
                                    Programme
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="text-slate-900 dark:text-white hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-300 font-medium">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-slate-900 dark:text-white hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-300 font-medium">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                            <Link
                                href="/admin"
                                className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-300"
                            >
                                <Shield className="w-3.5 h-3.5" />
                                Admin
                            </Link>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Contact</h4>
                        <div className="text-sm space-y-3">
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white">Address:</p>
                                <p className="text-slate-900 dark:text-white">
                                    Chapakot-8, Syangja, Nepal
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white">Email:</p>
                                <p>
                                    <a
                                        href="mailto:info@manimukundeshwor.org"
                                        className="text-slate-900 dark:text-white hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-300 font-medium"
                                    >
                                        info@manimukundeshwor.org
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Legal</h4>
                        <div className="text-sm space-y-3">
                            <Link
                                href="/privacy-policy"
                                className="text-slate-900 dark:text-white hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-300 font-medium inline-block"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-700 dark:text-white">
                    <p>&copy; {currentYear} Manimukundeshwor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
