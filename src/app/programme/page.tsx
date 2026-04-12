import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Programme',
  description:
    'Cow shelter, Vulture Safe Feeding Site, and School of Nature & Spiritual Studies — Manimukundeshwor’s holistic vulture conservation model in the Kaligandaki corridor.',
};

const anchorClass =
  'text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors';

const ProgrammePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <header className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-brand-500 dark:text-brand-400 mb-2">
            Our programme
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            A holistic model for the Guardians of the Sky
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            At Manimukundeshwor, we operate a holistic conservation model dedicated to protecting the &ldquo;Guardians
            of the Sky&rdquo; — Nepal&apos;s critically endangered vultures. Nestled within the Kaligandaki River
            Corridor, a region identified as a vital habitat for nine species of Asian vultures, our organisation bridges
            the gap between ancient spiritual values and modern ecological science.
          </p>
          <nav
            className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-y border-slate-200 dark:border-slate-800 py-4"
            aria-label="Programme sections"
          >
            <a href="#cow-shelter" className={anchorClass}>
              Cow shelter
            </a>
            <span className="text-slate-300 dark:text-slate-600" aria-hidden>
              ·
            </span>
            <a href="#vulture-restaurant" className={anchorClass}>
              Vulture restaurant
            </a>
            <span className="text-slate-300 dark:text-slate-600" aria-hidden>
              ·
            </span>
            <a href="#school" className={anchorClass}>
              School of Nature
            </a>
          </nav>
        </header>

        <section id="cow-shelter" className="scroll-mt-24 mb-20 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
            <div className="relative h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <Image
                src="/gausala1.jpg"
                alt="Cow shelter — sanctuary for homeless cattle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-500 dark:text-brand-400 mb-4">
                I. The Homeless Cow Shelter: A Sanctuary for Life
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Vultures are nature&apos;s primary scavengers, but they are facing a catastrophic population decline
                  due to food scarcity. One of the primary causes is the modern practice of burying carcasses, which
                  deprives vultures of their natural food source.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Our model:</strong> Manimukundeshwor provides a
                  dignified home for homeless and abandoned cows. These animals live out their natural lives in a
                  peaceful environment.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Safe food provision:</strong> When our cows pass
                  away from natural causes, their remains are provided to the vultures at our dedicated feeding site.
                  This ensures a consistent supply of diclofenac-free food. Diclofenac, a veterinary drug, was the primary
                  cause of the 95% decline in Asian vulture populations; by managing our own livestock, we guarantee a
                  safe, toxin-free diet for the birds.
                </p>
              </div>
            </div>
          </div>
          <div className="relative max-w-4xl mx-auto h-[220px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
            <Image
              src="/gausala2.jpg"
              alt="Cattle at the gaushala"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </section>

        <section id="vulture-restaurant" className="scroll-mt-24 mb-20 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-500 dark:text-brand-400 mb-4">
                II. The Vulture Restaurant: Ecological Restoration
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Technically known as a Vulture Safe Feeding Site (VSFS), our &ldquo;restaurant&rdquo; is a critical
                  survival hub for species like the White-rumped Vulture and the Red-headed Vulture.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Habitat protection:</strong> We actively protect the
                  Simal trees (<em>Bombax ceiba</em>) on our grounds. Scientific evaluations in the Kaligandaki Corridor
                  show that these tall, mature trees are among the most preferred species for vulture nesting and
                  roosting.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Disease prevention:</strong> By providing a site
                  for vultures to consume carrion, we help clean the environment. Without vultures, carcasses rot or are
                  eaten by feral dogs, which can spread diseases like rabies and distemper.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Species recovery:</strong> Research shows that
                  proximity to these feeding sites is significantly associated with higher vulture abundance and the
                  successful recolonisation of scavenging raptors.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <Image
                src="/vulture1.jpg"
                alt="Vultures at the feeding site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="relative max-w-4xl mx-auto h-[220px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
            <Image
              src="/vulture2.jpg"
              alt="Vultures in flight and at roost"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </section>

        <section id="school" className="scroll-mt-24 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
            <div className="relative h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <Image
                src="/studentactivity.jpg"
                alt="Students in nature and learning activities"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-500 dark:text-brand-400 mb-4">
                III. The Manimukundeshwor School of Nature &amp; Spiritual Studies
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Conservation is impossible without the support of the local community. While many recognise vultures as
                  useful, a significant share of people still view them as &ldquo;dirty birds&rdquo; or &ldquo;bad
                  signs&rdquo; — perceptions we address through education.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Spiritual stewardship:</strong> Our school teaches
                  that all life is interconnected. We reframe the vulture&apos;s role not as a &ldquo;grim reaper,&rdquo;
                  but as a sacred cleaner of the earth.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Environmental literacy:</strong> We educate the
                  next generation on the importance of maintaining forest patches and avoiding harmful pesticides and
                  chemicals in agriculture — major secondary threats to vulture survival.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Community monitoring:</strong> By training students
                  to monitor the 24+ nests in the corridor, we create a network of &ldquo;Vulture Guardians&rdquo; who
                  protect nesting sites from human disturbance and illegal felling of trees.
                </p>
              </div>
            </div>
          </div>
          <div className="relative max-w-4xl mx-auto h-[220px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
            <Image
              src="/schooltopview.jpg"
              alt="School and landscape from above"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center btn-accent px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-[1.02]"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgrammePage;
