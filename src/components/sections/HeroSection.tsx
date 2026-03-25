import React from 'react';
import Button from '../common/Button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image Layer - Full Bleed */}
      <div className="absolute inset-0">
        <Image
          src="/hero/hero.webp"
          alt="Engineering Project"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container - Constrained */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl pt-32">
          <h1 
            className="text-5xl md:text-7xl font-manrope font-semibold leading-[1.1] animate-fade-in"
            style={{ color: '#F7F5F3' }}
          >
            Sourcing technique et solutions d&apos;ingénierie intégrées
          </h1>
          <p 
            className="mt-8 text-[22px] font-manrope font-medium max-w-2xl animate-fade-in-up leading-relaxed"
            style={{ color: '#F7F5F3', opacity: 0.9 }}
          >
            Sécurisation des choix techniques, conformité réglementaire et intégration maîtrisée de systèmes pour projets de construction et d&apos;industrie.
          </p>
          
          <div className="mt-14 flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button 
              variant="primary" 
              size="lg" 
              className="rounded-full font-manrope font-semibold text-[18px] hover:opacity-90 shadow-lg px-10"
              style={{ backgroundColor: '#F7F5F3', color: '#1B6673' }}
            >
              Télécharger la brochure
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full font-manrope font-semibold text-[18px] border-[#F7F5F3]/40 backdrop-blur-sm hover:bg-[#F7F5F3]/30 transition-all px-10"
              style={{ backgroundColor: 'rgba(247, 245, 243, 0.2)', color: '#F7F5F3' }}
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
