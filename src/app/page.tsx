import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

export const metadata = {
  title: 'Home',
  description:
    'Manimukundeshwor protects Nepal’s critically endangered vultures in the Kaligandaki River Corridor through holistic conservation, community, and education.',
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <section className="relative min-h-0 lg:min-h-[85vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7 md:py-10 lg:py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Guardians of the Sky
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                At Manimukundeshwor we protect Nepal&apos;s critically endangered vultures in the Kaligandaki River
                Corridor — a vital home for nine species of Asian vultures. We unite ancient spiritual values with
                modern ecological science.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="/programme"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Our programme
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:border-brand-500 hover:text-brand-500 dark:hover:text-brand-400 transition-all duration-300"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-[240px] sm:h-[320px] md:h-[400px] lg:h-[550px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg mx-auto lg:max-w-none">
              <Image
                src="/vulture2.jpg"
                alt="Vultures at Manimukundeshwor conservation site"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center gap-2 py-4">
          <div className="flex items-center gap-2 text-brand-500 dark:text-brand-400">
            <MapPin className="w-4 h-4 shrink-0" aria-hidden />
            <span className="text-sm font-semibold">Kaligandaki River Corridor</span>
          </div>
          <p className="text-center text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Our work is rooted in Chapakot, Syangja — within a landscape recognised as essential habitat for Asian
            vultures and the communities who share it.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
            <div className="relative h-[260px] sm:h-[340px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <Image
                src="/khaireni.webp"
                alt="Landscape and community in the Khaireni area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-500 dark:text-brand-400 mb-2">
                Place &amp; habitat
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Conservation in a living landscape
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Forest patches, river corridors, and farmland here shape where vultures feed and nest. We work with the
                land — protecting trees, reducing harmful practices, and strengthening the link between healthy
                ecosystems and human wellbeing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-500 dark:text-brand-400 mb-2">
                Learning &amp; community
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Educating the next generation
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Through our School of Nature &amp; Spiritual Studies, young people learn that vultures are sacred
                cleaners of the earth — not omens of ill fortune. Environmental literacy and nest monitoring build a
                network of guardians for more than twenty nests in the corridor.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative h-[260px] sm:h-[340px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <Image
                src="/schooltopview.jpg"
                alt="School and surroundings — aerial view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">
            &ldquo;The vulture is not a grim reaper — it is a steward that completes the cycle of life and keeps the
            land clean.&rdquo;
          </blockquote>
          <cite className="mt-3 block text-sm sm:text-base text-brand-500 dark:text-brand-400 font-semibold not-italic">
            — Manimukundeshwor ethos
          </cite>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-500 dark:text-brand-400 mb-2">
              How we work
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Three pillars of our programme
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto px-1">
              A cow shelter, a vulture safe feeding site, and a school — together they form one holistic model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {[
              {
                title: 'Homeless cow shelter',
                description:
                  'A dignified home for abandoned cows; when they die naturally, remains provide diclofenac-free food for vultures.',
                icon: '🐄',
              },
              {
                title: 'Vulture restaurant (VSFS)',
                description:
                  'A safe feeding site and habitat care — including Simal trees favoured for nesting and roosting.',
                icon: '🦅',
              },
              {
                title: 'School of Nature & Studies',
                description:
                  'Spiritual stewardship, environmental literacy, and training students to monitor and protect nests.',
                icon: '📚',
              },
            ].map((item, index) => (
              <Link
                key={index}
                href="/programme"
                className="group block glass-card p-5 sm:p-6 md:p-8 text-center hover:shadow-xl hover:border-brand-500/30 dark:hover:border-brand-400/30 border-2 border-transparent transition-all duration-300 rounded-xl sm:rounded-2xl"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-500 dark:text-brand-400 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/programme"
              className="inline-flex items-center justify-center btn-accent px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02]"
            >
              Read the full programme
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-500/10 to-brand-600/5 dark:from-brand-500/15 dark:to-brand-600/10 border border-brand-500/20 dark:border-brand-400/20 p-6 sm:p-8 md:p-12 lg:p-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Stand with the guardians
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
              Visit us in Chapakot, learn about our work, or send a message — we would love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center btn-accent px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
