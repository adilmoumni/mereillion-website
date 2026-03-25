import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Image from 'next/image';

const pillars = [
  {
    title: 'Traçabilité documentaire',
    variant: 'outline',
  },
  {
    title: 'Conformité normative',
    variant: 'outline',
  },
  {
    title: 'Cohérence multi-systèmes',
    variant: 'solid',
  },
  {
    title: 'Maîtrise contractuelle',
    variant: 'outline',
  },
];

const IntroSection = () => {
  return (
    <SectionWrapper className="bg-white py-24 !text-neutral-900">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left: Image Card */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Modern Office" 
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-h2 md:text-h1 font-heading font-bold text-neutral-900 mb-12 leading-tight">
            Le point de convergence entre vision et réalité
          </h2>
          
          <div className="space-y-8 text-body text-neutral-700 font-body leading-relaxed max-w-xl">
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
      </div>

      {/* Circle Pillars Layout */}
      <div className="mt-24 flex flex-wrap justify-center items-center -space-x-4 md:-space-x-8 lg:-space-x-12">
        {pillars.map((pillar) => (
          <div 
            key={pillar.title}
            className={`
              w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 
              rounded-full flex items-center justify-center p-8 text-center
              transition-all duration-300 hover:z-20 hover:scale-105
              ${pillar.variant === 'solid' 
                ? 'bg-primary text-white shadow-xl z-10 animate-liquid' 
                : 'bg-white border border-neutral-900 text-neutral-900 z-0'}
            `}
          >
            <span className="text-small md:text-body font-bold leading-tight">
              {pillar.title}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default IntroSection;
