import React from 'react';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy notice for Manimukundeshwor — how we handle information when you use our website or contact us.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>
        </header>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-100">
          <section className="space-y-3">
            <p>
              At <span className="font-semibold">Manimukundeshwor</span> (&ldquo;we&rdquo;, &ldquo;us&rdquo;), we respect
              your privacy. This notice describes how we handle information when you visit our website or contact us from
              Chapakot-8, Syangja, Nepal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">1. Information we collect</h2>
            <p>Depending on how you interact with us, we may process:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Contact details</span> — such as your name and email address when you
                email us or use the contact form (which opens your own email application).
              </li>
              <li>
                <span className="font-semibold">Technical data</span> — such as IP address, browser type, and basic usage
                data collected by our hosting or analytics tools, where used.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">2. How we use your information</h2>
            <p>We use this information to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Respond to enquiries and communicate about our conservation programme.</li>
              <li>Keep our website secure and improve how it works.</li>
              <li>Meet legal obligations where they apply in Nepal.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">3. Sharing and retention</h2>
            <p>
              We do not sell your personal information. We may share it with service providers (for example email or
              website hosting) who assist our operations and are required to protect your data. We keep information only as
              long as needed for these purposes or as required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">4. Your choices</h2>
            <p>
              You may contact us to ask what information we hold, to correct it, or to request deletion where applicable.
              If embedded maps or other third-party services load on our site, their providers may process data under their
              own policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">5. Contact</h2>
            <p>Questions about this policy:</p>
            <div className="space-y-1">
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:info@manimukundeshwor.org"
                  className="text-brand-600 hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300 underline-offset-2 hover:underline"
                >
                  info@manimukundeshwor.org
                </a>
              </p>
              <p>
                <span className="font-semibold">Address:</span> Chapakot-8, Syangja, Nepal
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
