import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
    member: {
        name: string;
        role: string;
        photo: string;
        email?: string;
        phone?: string;
    };
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  const { name, role, photo, email, phone } = member;
  const phoneDigits = phone ? phone.replace(/\D/g, '') : '';
  const telHref = phoneDigits ? `tel:+${phoneDigits}` : undefined;
  const phoneDisplay =
    phoneDigits.length === 13 && phoneDigits.startsWith('977')
      ? `+${phoneDigits.slice(0, 3)} ${phoneDigits.slice(3, 6)} ${phoneDigits.slice(6, 9)} ${phoneDigits.slice(9)}`
      : phone;
  return (
    <article className="h-full flex flex-col text-center rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden shadow-sm hover:shadow-md hover:border-brand-500/30 dark:hover:border-brand-400/30 transition-all duration-300">
      <div className="relative w-full aspect-[4/5] flex-shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800/50 group rounded-t-3xl flex items-center justify-center">
        <Image
          src={photo}
          alt={`${name}'s photo`}
          fill
          unoptimized
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
          className="object-contain object-center p-2 rounded-3xl group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-1">
          {name}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
          {role}
        </p>
        {email ? (
          <a
            href={`mailto:${email}`}
            className="text-sm text-brand-600 dark:text-brand-400 hover:underline break-all"
          >
            {email}
          </a>
        ) : null}
        {phone && telHref ? (
          <a
            href={telHref}
            className="text-sm text-brand-600 dark:text-brand-400 hover:underline"
          >
            {phoneDisplay}
          </a>
        ) : null}
      </div>
    </article>
  );
};

export default TeamMember;