'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeroImageSection from './PageHeroImageSection';
import SectionWrapper from '../common/SectionWrapper';
import StickyProcessTimelineSection, { type ProcessTimelineStep } from './StickyProcessTimelineSection';
import SplitContactCtaSection from './SplitContactCtaSection';

const integrationProcessSteps: ProcessTimelineStep[] = [
  {
    id: '01',
    title: 'Sélection rigoureuse des fournisseurs',
    description:
      'Évaluation technique, capacité industrielle, conformité normative et fiabilité contractuelle.',
    checklistLabel: 'Ce que nous assurons :',
    checklist: [
      'Analysé des capacités industrielles',
      'Vérification des références techniques',
      'Validation contractuelle des engagements',
    ],
  },
  {
    id: '02',
    title: 'Maîtrise des délais et de la logistique',
    description:
      'Coordination des flux d’approvisionnement et sécurisation des échéances critiques.',
    checklistLabel: 'Ce que nous assurons :',
    checklist: [
      'Planification des livraisons',
      'Coordination inter-acteurs',
      'Suivi des engagements calendaires',
    ],
  },
  {
    id: '03',
    title: 'Surveillance de l’intégration sur site',
    description:
      'Contrôle de cohérence entre solutions validées et mise en œuvre réelle.',
    checklistLabel: 'Ce que nous assurons :',
    checklist: [
      'Vérification technique sur site',
      'Contrôle des interfaces entre lots',
      'Ajustements si nécessaire',
    ],
  },
  {
    id: '04',
    title: 'Garantie de conformité à la réception',
    description:
      'Validation finale selon exigences contractuelles et réglementaires.',
    checklistLabel: 'Ce que nous assurons :',
    checklist: [
      'Vérification des spécifications',
      'Contrôle qualité final',
      'Documentation de conformité',
    ],
  },
];

const IntegrationPageSection = () => {
  return (
    <div className="bg-[#f2f4f4] pt-24 text-brand-secondaryText md:pt-28">
      <PageHeroImageSection
        badgeLabel="l’intégration"
        title="Une continuité contractuelle et technique sans rupture"
        subtitle="De la sélection des fournisseurs à l’intégration sur site, sans rupture de la chaîne de valeur."
        primaryAction={{ label: 'Télécharger la brochure', href: '#' }}
        secondaryAction={{ label: 'Nous contacter', href: '/#contact' }}
        imageSrc="/images/intégration Page/picture.webp"
        imageAlt="Espace d’intégration technique"
      />

      <SectionWrapper withSectionSpacing={false} className="pb-section pt-section">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.02fr] md:gap-16 lg:gap-20">
          <div>
            <h2 className="max-w-[9ch] text-[clamp(3rem,5.2vw,5.3rem)] font-medium leading-[1.04] text-brand-secondaryText">
              Une chaîne maîtrisée de bout en bout
            </h2>
          </div>

          <div>
            <div className="max-w-[19ch] space-y-8 text-[clamp(1.8rem,2.15vw,2.9rem)] leading-[1.28] text-brand-secondaryText">
              <p>
                Dans les projets complexes, le risque ne réside pas uniquement dans la sélection des solutions,
                mais dans leur intégration effective.
              </p>
              <p>
                Marelion assure une continuité opérationnelle entre chaque maillon de la chaîne technique.
              </p>
            </div>

            <p className="mt-10 max-w-[13ch] text-[clamp(3rem,4.4vw,5rem)] font-medium leading-[1.1] text-brand-secondaryText">
              Chaque maillon est contrôlé. Chaque décision est documentée.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <StickyProcessTimelineSection
        leftTitle="Un processus d’intégration structuré"
        leftSubtitle="Dans les projets complexes, le risque ne réside pas uniquement dans la sélection des solutions."
        steps={integrationProcessSteps}
      />

      <SectionWrapper withSectionSpacing={false} className="pb-section pt-section">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.02fr] md:gap-14 lg:gap-20">
          <div>
            <h2 className="max-w-[10ch] text-[clamp(3rem,5.2vw,5.1rem)] font-medium leading-[1.04] text-brand-secondaryText">
              Encadré par un cadre qualité formalisé
            </h2>
          </div>

          <div>
            <p className="max-w-[22ch] text-[clamp(1.45rem,2vw,2.2rem)] leading-[1.32] text-brand-secondaryText/50">
              Chaque étape d&apos;intégration s&apos;inscrit dans un processus qualité documenté et vérifiable.
            </p>

            <Link
              href="/qualite"
              className="mt-8 inline-flex items-center gap-2 border-b border-brand-primaryText pb-1 text-[clamp(1.45rem,1.8vw,2rem)] font-medium text-brand-primaryText transition-all hover:tracking-wide"
            >
              Voir la démarche qualité
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7m0 0H9m8 0v8" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <div className="relative aspect-[16/9] w-full md:aspect-[16/8.6]">
            <Image
              src="/images/intégration Page/1.webp"
              alt="Intégration encadrée par un cadre qualité"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </SectionWrapper>

      <SplitContactCtaSection
        title="Échanger sur un périmètre technique"
        body="Pour toute demande relative à un projet multi-systèmes ou à une exigence technique spécifique."
        actionLabel="Nous contacter"
        actionHref="/#contact"
        imageSrc="/images/CTA Banner BG/Pic.webp"
        imageAlt="Cuisine et aménagement intérieur"
      />
    </div>
  );
};

export default IntegrationPageSection;
