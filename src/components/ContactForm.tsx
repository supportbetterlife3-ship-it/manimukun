'use client';

import React, { useState, FormEvent } from 'react';
import { Mail } from 'lucide-react';

const CONTACT_EMAIL = 'info@manimukundeshwor.org';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || 'website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-1.5">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 resize-y min-h-[120px]"
          placeholder="Your message…"
        />
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Sending opens your email app with this message addressed to {CONTACT_EMAIL}. If nothing opens, copy our address
        from the card above.
      </p>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-3 transition-colors shadow-md"
      >
        <Mail className="w-5 h-5" aria-hidden />
        Send message
      </button>
    </form>
  );
}
