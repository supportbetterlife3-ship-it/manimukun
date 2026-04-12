import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, ArrowRight, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Contact Manimukundeshwor in Chapakot-8, Syangja, Nepal. Email info@manimukundeshwor.org or send a message.',
};

/** Share link (opens in Google Maps app / browser) */
const GOOGLE_MAPS_LOCATION_URL = 'https://maps.app.goo.gl/h8mgTYgTfwRv66Bj9';
/** Embed uses coordinates from the same pinned location (short links cannot be used as iframe src). */
const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=27.876337,83.842879&z=15&output=embed&hl=en';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-brand-500 dark:from-indigo-300 dark:to-brand-400 bg-clip-text text-transparent mb-4">
            Contact us
          </h1>
          <p className="text-xl text-slate-800 dark:text-white max-w-2xl mx-auto">
            We would love to hear from you — questions about our programme, visits, or collaboration.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-8 text-center group">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-500/10 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3">Address</h3>
            <p className="text-slate-900 dark:text-white leading-relaxed">
              Chapakot-8, Syangja
              <br />
              Nepal
            </p>
          </div>

          <div className="glass-card p-8 text-center group">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-500/10 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3">Email</h3>
            <p className="text-slate-900 dark:text-white mb-4">
              <a
                href="mailto:info@manimukundeshwor.org"
                className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors font-semibold break-all"
              >
                info@manimukundeshwor.org
              </a>
            </p>
          </div>

          <div className="glass-card p-8 text-center group">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-500/10 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3">Programme</h3>
            <p className="text-slate-800 dark:text-white text-sm mb-4">
              Learn how we combine cow shelter, vulture feeding, and education.
            </p>
            <Link
              href="/programme"
              className="inline-flex items-center justify-center text-brand-600 dark:text-brand-400 font-semibold hover:underline"
            >
              View programme
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-2">Send a message</h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">
              Fill in the form below. Your device will open an email to us with your text.
            </p>
            <ContactForm />
          </div>

          <div className="glass-card overflow-hidden p-0 flex flex-col min-h-[400px]">
            <iframe
              title="Manimukundeshwor location — Chapakot-8, Syangja, Nepal"
              src={MAP_EMBED_SRC}
              width="100%"
              height="100%"
              className="min-h-[360px] w-full border-0 rounded-t-xl grow"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900/40 rounded-b-xl text-center">
              <a
                href={GOOGLE_MAPS_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
              >
                Open this location in Google Maps
              </a>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-gradient-to-r from-rose-500 via-brand-500 to-red-500 dark:from-rose-400 dark:via-brand-400 dark:to-red-500 text-white px-6 py-10 sm:px-12 sm:py-12 text-center shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Visit or volunteer</h2>
          <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
            Write to us about visiting Chapakot, school partnerships, or supporting vulture conservation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@manimukundeshwor.org"
              className="inline-flex items-center justify-center rounded-full bg-white text-brand-600 px-6 py-3 text-sm font-semibold shadow-sm hover:bg-slate-100 transition-colors"
            >
              Email us
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <Link
              href="/programme"
              className="inline-flex items-center justify-center rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Read our programme
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
