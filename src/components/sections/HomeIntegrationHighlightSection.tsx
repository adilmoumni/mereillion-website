import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '../common/SectionWrapper';

const integrationPoints = [
  'Sélection rigoureuse des fournisseurs',
  'Performance logistique et maîtrise des délais',
  'Surveillance de l’intégration sur site pour garantir la conformité à la réception',
];

const HomeIntegrationHighlightSection = () => {
  return (
    <SectionWrapper withSectionSpacing={false} className="bg-brand-background pb-section pt-section">
      <div className="grid items-stretch gap-8 lg:grid-cols-[1.04fr_1fr] lg:gap-9">
        <div className="relative min-h-[360px] overflow-hidden md:min-h-[470px] lg:min-h-[560px]">
          <Image
            src="/images/home_page/home_pics/4.webp"
            alt="Espace de vie intégré"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
        </div>

        <div className="flex flex-col justify-between lg:py-2">
          <div>
            <h2 className="max-w-[15ch] text-[clamp(1.95rem,3.3vw,3.4rem)] font-medium leading-[1.1] text-brand-secondaryText lg:max-w-[12ch]">
              De la sélection à l’intégration : une continuité totale
            </h2>

            <p className="mt-4 max-w-[38ch] text-[clamp(1rem,1.02vw,1.08rem)] leading-[1.55] text-brand-secondaryText/55">
              MARELION assure une maîtrise contractuelle et technique sans rupture de la chaîne de valeur :
            </p>

            <ul className="mt-6 max-w-[38ch] space-y-2.5 text-[clamp(1rem,1.02vw,1.08rem)] leading-[1.55] text-brand-secondaryText">
              {integrationPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link
              href="/integration"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-brand-primaryText px-7 py-3 text-button text-brand-background transition-colors hover:bg-brand-secondaryText"
            >
              Voir l’intégration
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HomeIntegrationHighlightSection;
