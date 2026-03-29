import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Image from 'next/image';

const focusPillars = [
  { label: 'Traçabilité documentaire' },
  { label: 'Conformité normative' },
  { label: 'Cohérence multi-systèmes' },
  { label: 'Maîtrise contractuelle' },
];

const IntroSection = () => {
  return (
    <SectionWrapper className="bg-brand-background">
      <h2 className="max-w-[11ch] text-[clamp(2.15rem,3.6vw,3.95rem)] font-medium leading-[1.1] text-brand-secondaryText">
        Le point de convergence entre vision et réalité
      </h2>

      <div className="mt-9 grid items-end gap-7 md:mt-11 lg:grid-cols-[1.05fr_1fr] lg:gap-9">
        <div className="relative aspect-[4/2.95] overflow-hidden">
          <Image
            src="/images/Home Page/Home Pics/2.webp"
            alt="Espace d’accueil et de collaboration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>

        <div className="space-y-5 text-[clamp(1rem,1.12vw,1.2rem)] leading-[1.55] text-brand-secondaryText">
          <p>
            La réussite d&apos;un projet ne repose pas uniquement sur sa conception structurelle, mais sur la cohérence absolue de l&apos;ensemble des systèmes qui le composent.
          </p>
          <p>
            Marélion intervient sur les interfaces critiques entre conception, exécution et usage, là où se déterminent la performance, la sécurité et la durabilité de l&apos;ouvrage.
          </p>
          <p>
            Nous sécurisons chaque arbitrage technique avant qu&apos;il ne devienne un risque opérationnel.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:flex lg:items-center lg:justify-center lg:-space-x-2">
        {focusPillars.map((pillar) => {
          return (
            <div
              key={pillar.label}
              className="flex h-[168px] w-[168px] items-center justify-center rounded-full border border-brand-secondaryText bg-brand-background text-center text-brand-secondaryText transition-all duration-300 hover:border-brand-primaryText hover:bg-brand-primaryText hover:text-brand-background md:h-[190px] md:w-[190px] lg:h-[220px] lg:w-[220px]"
            >
              <span className="max-w-[11ch] text-[clamp(1rem,1.2vw,1.35rem)] font-medium leading-[1.3]">{pillar.label}</span>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default IntroSection;
