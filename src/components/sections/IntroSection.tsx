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
      <h2 className="w-full max-w-none text-[clamp(1.95rem,3.4vw,3.5rem)] font-medium leading-[1.1] text-brand-secondaryText lg:w-[55%]">
        Le point de convergence entre vision et réalité
      </h2>

      <div className="mt-9 grid items-end gap-7 md:mt-11 lg:grid-cols-[1.05fr_1fr] lg:gap-9">
        <div className="relative aspect-[4/2.95] overflow-hidden">
          <Image
            src="/images/home_page/home_pics/2.webp"
            alt="Espace d’accueil et de collaboration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>

        <div className="space-y-5 a leading-[1.55] text-[#00232A]">
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

      <div className="mt-10 overflow-x-auto pb-2 md:mt-11 lg:mt-12">
        <div className="mx-auto flex min-w-max items-center -space-x-3 px-1 sm:-space-x-4 sm:px-3 lg:-space-x-6 lg:px-0">
          {focusPillars.map((pillar) => {
            return (
              <div
                key={pillar.label}
                className="group flex h-[154px] w-[154px] shrink-0 items-center justify-center rounded-full border border-brand-secondaryText bg-brand-background text-center text-brand-secondaryText transition-all duration-300 hover:border-brand-primaryText hover:bg-brand-primaryText hover:text-brand-background md:h-[180px] md:w-[180px] lg:h-[210px] lg:w-[210px]"
              >
                <span className="max-w-[12ch] text-[32px] font-normal leading-[1.18] text-[#00232A] transition-colors duration-300 group-hover:text-brand-background">
                  {pillar.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default IntroSection;
