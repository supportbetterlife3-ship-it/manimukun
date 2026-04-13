import React from 'react';
import TeamMember from '@/components/TeamMember';

export const metadata = {
  title: 'Our Team',
  description:
    'Meet the leadership and members of Manimukundeshwor — president, vice president, secretary, and team members working for vulture conservation in Syangja, Nepal.',
};

const teamMembers = [
  {
    name: 'Menkeshar Koirala',
    role: 'President',
    photo: '/menkeshar_koirala.png',
    email: 'menkeshar.koiirala@manimukundeshwor.org',
    phone: '9779846622662',
  },
  {
    name: 'Puja Koirala',
    role: 'Vice President',
    photo: '/puja_koirala.jfif',
    email: 'puja.koirala@manimukundeshwor.org',
  },
  {
    name: 'Dhal Bahadur Chettri',
    role: 'Secretary',
    photo: '/Dhalbahadur_Chettri.jpg',
  },
  {
    name: 'Pramila Shrestha',
    role: 'Member',
    photo: '/Pramilashresthe.jpg',
    email: 'pramila.shrestha@manimukundeshwor.org',
  },
  {
    name: 'Ram BK',
    role: 'Member',
    photo: '/Ram_bk.jpg',
    email: 'ram.bk@manimukundeshwor.org',
  },
  {
    name: 'Ramesh Giri',
    role: 'Member',
    photo: '/Ramesh_giri.jpg',
    email: 'rameshgiri@manimukundeshwor.org',
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <header className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-500 dark:text-brand-400 mb-3">
            Manimukundeshwor
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Our team
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            The people guiding our conservation work in Chapakot and the Kaligandaki corridor.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.07rem)] max-w-sm">
              <TeamMember member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
