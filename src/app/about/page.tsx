import React from 'react';

export const metadata = {
  title: 'About Us',
  description:
    'Who we are: Manimukundeshwor works for vulture conservation, environmental protection, and community resilience in the Kaligandaki corridor, Syangja, Nepal.',
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-500 dark:text-brand-400 mb-3">
              About Manimukundeshwor
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Who we are
            </h1>
            <div className="space-y-5 text-base sm:text-lg text-slate-700 dark:text-slate-100 leading-relaxed text-left sm:text-center">
              <p>
                Manimukundeshwor is a conservation organisation based in Chapakot-8, Syangja, within Nepal&apos;s
                Kaligandaki River Corridor. We work for the environment by protecting habitat, reducing harmful chemical
                use where we can influence it, and strengthening forest and riverside ecosystems that buffer the
                impacts of a changing climate.
              </p>
              <p>
                Our focus is the recovery of Asian vultures — nature&apos;s primary scavengers — through a practical
                model that combines livestock stewardship, safe feeding, tree protection, and education. We believe
                conservation succeeds only when local people see their own values and future reflected in the work.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 bg-slate-50/50 dark:bg-slate-900/30">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-5 text-center">
                What drives us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 p-5 text-center">
                  <p className="text-2xl font-bold text-brand-500 dark:text-brand-400">9</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Asian vulture species linked to this corridor&apos;s habitat
                  </p>
                </div>
                <div className="rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 p-5 text-center">
                  <p className="text-2xl font-bold text-brand-500 dark:text-brand-400">24+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    nests students help monitor as vulture guardians
                  </p>
                </div>
                <div className="rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 p-5 text-center">
                  <p className="text-2xl font-bold text-brand-500 dark:text-brand-400">1</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    holistic model — shelter, feeding site, and school together
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
                From diclofenac-safe carrion to protected roost trees, every activity connects back to healthier
                landscapes and communities.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-500 via-brand-500 to-amber-400 text-white p-8 sm:p-10 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-3">Our goals</h2>
              <ul className="text-base sm:text-lg leading-relaxed opacity-95 space-y-2 list-disc list-inside">
                <li>Reverse local decline of critically endangered vultures through safe food and habitat.</li>
                <li>Reduce secondary threats: tree loss, disturbance at nests, and toxic exposure in the environment.</li>
                <li>Build community pride and knowledge so stewardship outlives any single project.</li>
                <li>Contribute to climate-aware land use by protecting mature trees and connected green corridors.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-brand-500 dark:text-brand-400 mb-3">Our activities</h2>
                <ul className="text-base sm:text-lg text-slate-900 dark:text-white leading-relaxed space-y-2">
                  <li>✓ Operating a homeless cow shelter and managed natural mortality for vulture feeding</li>
                  <li>✓ Running a Vulture Safe Feeding Site (VSFS) — our &ldquo;vulture restaurant&rdquo;</li>
                  <li>✓ Protecting Simal (<em>Bombax ceiba</em>) and other key roost and nest trees</li>
                  <li>✓ School programmes: spiritual stewardship, literacy on pesticides, and nest monitoring</li>
                </ul>
              </div>
              <div className="glass-card p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-brand-500 dark:text-brand-400 mb-4">Environment &amp; climate</h2>
                <p className="text-base sm:text-lg text-slate-900 dark:text-white leading-relaxed">
                  Healthy forests and clean carrion cycles are part of how landscapes regulate disease and store carbon in
                  biomass. We do not claim to solve global warming alone — we work where we stand: keeping patches of
                  forest standing, teaching careful use of chemicals in farms and homes, and helping communities see
                  vultures as allies in a resilient environment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
