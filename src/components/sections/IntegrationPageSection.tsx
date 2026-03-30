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
        imageSrc="/images/integration_page/picture.webp"
        imageAlt="Espace d’intégration technique"
      />

      <SectionWrapper withSectionSpacing={false} className="pb-section pt-section">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.02fr] md:gap-14 lg:gap-20">
          <div>
            <h2 className="max-w-[14ch] text-[clamp(2.35rem,4.8vw,4.5rem)] font-medium leading-[1.04] text-brand-secondaryText lg:max-w-[9ch]">
              Une chaîne maîtrisée de bout en bout
            </h2>
          </div>

          <div>
            <div className="max-w-[34ch] space-y-6 text-[clamp(1.3rem,1.9vw,2.15rem)] leading-[1.35] text-brand-secondaryText lg:max-w-[19ch] lg:space-y-8">
              <p>
                Dans les projets complexes, le risque ne réside pas uniquement dans la sélection des solutions,
                mais dans leur intégration effective.
              </p>
              <p>
                Marelion assure une continuité opérationnelle entre chaque maillon de la chaîne technique.
              </p>
            </div>

            <p className="mt-10 max-w-[18ch] text-[clamp(2.15rem,4vw,4.2rem)] font-medium leading-[1.1] text-brand-secondaryText lg:max-w-[13ch]">
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
            <h2 className="max-w-[15ch] text-[clamp(2.35rem,4.8vw,4.4rem)] font-medium leading-[1.04] text-brand-secondaryText lg:max-w-[10ch]">
              Encadré par un cadre qualité formalisé
            </h2>
          </div>

          <div>
            <p className="max-w-[36ch] text-[clamp(1.05rem,1.45vw,1.55rem)] leading-[1.45] text-brand-secondaryText/55 lg:max-w-[28ch]">
              Chaque étape d&apos;intégration s&apos;inscrit dans un processus qualité documenté et vérifiable.
            </p>

            <Link
              href="/qualite"
              className="mt-8 inline-flex items-center gap-2 border-b border-brand-primaryText pb-1 text-[clamp(1rem,1.1vw,1.1rem)] font-medium text-brand-primaryText transition-all hover:tracking-wide"
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
              src="/images/integration_page/1.webp"
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
        imageSrc="/images/cta_banner_bg/pic.webp"
        imageAlt="Cuisine et aménagement intérieur"
      />
    </div>
  );
};

export default IntegrationPageSection;
