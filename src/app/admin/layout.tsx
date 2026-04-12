import React from 'react';
import type { Metadata } from 'next';
import '../../styles/globals.css';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
    title: 'Sanity Studio | Manimukundeshwor',
    description: 'Admin dashboard for managing content',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="w-full min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 overflow-x-hidden transition-colors duration-300">
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="theme">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
