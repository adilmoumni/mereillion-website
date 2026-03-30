import React from 'react';
import Button from '../common/Button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[92svh] items-center md:min-h-screen">
      {/* Background Image Layer - Full Bleed */}
      <div className="absolute inset-0">
        <Image
          src="/hero/hero.webp"
          alt="Engineering Project"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondaryText/85 via-brand-secondaryText/60 to-brand-secondaryText/30" />
      </div>

      {/* Content Container - Constrained */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-container-gap">
        <div className="max-w-5xl pt-24 sm:pt-28 md:pt-32">
          <h1 className="animate-fade-in text-header-1 tracking-[-1.92px] lg:text-[64px] font-medium leading-[1.05] text-brand-background">
            Sourcing technique et solutions d&apos;ingénierie intégrées
          </h1>
          <p className="animate-fade-in-up mt-title-subtitle max-w-2xl text-body leading-[1.35] text-brand-background/85">
            Sécurisation des choix techniques, conformité réglementaire et intégration maîtrisée de systèmes pour projets de construction et d&apos;industrie.
          </p>
          
          <div className="animate-fade-in-up mt-card-gap flex flex-col gap-container-gap sm:flex-row">
            <Button 
              variant="light" 
              size="lg" 
              className="border-brand-background/85"
            >
              Télécharger la brochure
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-brand-background/45 bg-brand-background/12 text-brand-background backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.32),0_16px_30px_rgba(0,0,0,0.15)] hover:border-brand-background/70 hover:bg-brand-background/24 hover:text-brand-background"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
