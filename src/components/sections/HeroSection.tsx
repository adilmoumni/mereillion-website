import React from 'react';
import Button from '../common/Button';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[92svh] items-center md:min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/hero/hero.webp"
          alt="Engineering Project"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(27,102,115,0.27)]" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-container-gap">
        <div className="w-full max-w-none pt-24 sm:pt-28 md:pt-32 lg:w-[min(66vw,80rem)]">
          <h1 className="animate-fade-in text-header-1 font-semibold leading-[1.1] tracking-[-0.04em] text-brand-background lg:text-[64px] lg:leading-[1.14]">
            Sourcing technique et solutions{' '}
            <span className="lg:block">d&apos;ingénierie intégrées</span>
          </h1>

          <p className="animate-fade-in-up mt-title-subtitle w-full max-w-none text-body font-medium leading-[1.3] text-brand-background/90 md:max-w-[82%] lg:max-w-[72%] lg:text-[22px]">
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

            <Link
              href="/contact"
              className="type-button inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-transparent bg-[rgba(247,245,243,0.2)] px-8 py-3 text-white backdrop-blur-[18px] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_18px_40px_rgba(0,0,0,0.16)] transition-all duration-200 hover:bg-[rgba(247,245,243,0.28)]"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
