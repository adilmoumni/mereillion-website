'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '../common/SectionWrapper';
import PageHeroImageSection from './PageHeroImageSection';
import SplitContactCtaSection from './SplitContactCtaSection';

const methodPhases = [
  {
    title: 'Structurer les besoins fondamentaux',
    description:
      'Clarifier les usages, les contraintes d’exploitation et les exigences spécifiques du projet.',
    actionLabel: 'Ce que nous faisons :',
    actions: [
      'Analyse des objectifs fonctionnels',
      'Identification des contraintes normatives',
      'Définition du cadre technique initial',
    ],
  },
  {
    title: 'Analyser les contraintes techniques et réglementaires',
    description:
      'Intégrer les normes applicables, les exigences de sécurité, les impératifs de maintenance et les critères de durabilité.',
    actionLabel: 'Ce que nous faisons :',
    actions: [
      'Étude comparative des solutions',
      'Évaluation des risques techniques',
      'Vérification de conformité réglementaire',
    ],
  },
  {
    title: 'Sécuriser les choix stratégiques',
    description:
      'Sélectionner des solutions cohérentes, compatibles et maîtrisées dans une logique globale de projet.',
    actionLabel: 'Ce que nous faisons :',
    actions: [
      'Validation des spécifications',
      'Alignement contractuel',
      'Coordination inter-lots',
    ],
  },
  {
    title: 'Livrer des solutions certifiées et durables',
    description:
      'Assumer la responsabilité jusqu’à l’intégration sur site et la réception finale.',
    actionLabel: 'Ce que nous faisons :',
    actions: [
      'Coordination logistique',
      'Suivi d’intégration',
      'Contrôle qualité à la réception',
    ],
  },
];

const MethodPageSection = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const phaseTriggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const currentEntry = visibleEntries[0];
        if (!currentEntry) return;

        const nextIndex = Number(
          (currentEntry.target as HTMLElement).dataset.phaseIndex ?? '0',
        );

        setActivePhaseIndex((previousIndex) =>
          previousIndex === nextIndex ? previousIndex : nextIndex,
        );
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-20% 0px -35% 0px',
      },
    );

    phaseTriggerRefs.current.forEach((trigger) => {
      if (trigger) observer.observe(trigger);
    });

    return () => observer.disconnect();
  }, []);

  const activePhase = methodPhases[activePhaseIndex];
  const progressWidth = `${((activePhaseIndex + 1) / methodPhases.length) * 100}%`;
  const phaseNumber = String(activePhaseIndex + 1).padStart(2, '0');

  return (
    <div className="bg-[#f2f4f4] pt-24 text-brand-secondaryText md:pt-28">
      <PageHeroImageSection
        badgeLabel="Méthode"
        title="Concevoir les décisions avant d’engager l’exécution"
        subtitle="Un socle méthodologique structuré pour sécuriser les décisions techniques en amont de l’exécution."
        primaryAction={{ label: 'Télécharger la brochure', href: '#' }}
        secondaryAction={{ label: 'Nous contacter', href: '/#contact' }}
        imageSrc="/images/Méthode Page/2.webp"
        imageAlt="Structure verrière architecturale"
      />

      <SectionWrapper withSectionSpacing={false} className="pb-section pt-section">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.02fr] md:gap-16 lg:gap-20">
          <div>
            <h2 className="max-w-[12ch] text-[clamp(3rem,5.3vw,5.2rem)] font-medium leading-[1.04] text-brand-secondaryText">
              Une méthode orientée maîtrise des risques
            </h2>
          </div>

          <div>
            <div className="max-w-[19ch] space-y-8 text-[clamp(1.8rem,2.15vw,2.9rem)] leading-[1.28] text-brand-secondaryText">
              <p>
                Dans les projets complexes, le risque ne réside pas uniquement dans l&apos;exécution, mais dans
                les décisions prises en amont.
              </p>
              <p>
                La méthode Marélion structure, analyse et sécurise chaque choix technique avant
                contractualisation et intégration.
              </p>
            </div>

            <p className="mt-10 max-w-[15ch] text-[clamp(3rem,4.4vw,5rem)] font-medium leading-[1.1] text-brand-secondaryText">
              La décision précède l&apos;achat.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <section className="w-full bg-gradient-to-r from-[#012f37] via-[#045a67] to-[#067480]">
        <div className="mx-auto w-full max-w-7xl px-container-gap py-14 md:py-16 lg:py-20">
          <h2 className="max-w-[20ch] text-[clamp(3.2rem,5.3vw,6rem)] font-medium leading-[1.06] text-brand-background">
            Les quatre phases structurantes
          </h2>
        </div>

        <div className="relative">
          <div className="sticky top-[84px] min-h-[calc(100svh-84px)] py-8 md:py-10">
            <div className="mx-auto w-full max-w-7xl px-container-gap">
              <div className="relative h-px bg-brand-background/35">
                <span
                  className="absolute left-0 top-[-1px] h-[3px] bg-brand-background transition-[width] duration-500 ease-out"
                  style={{ width: progressWidth }}
                />
              </div>

              <div
                key={activePhaseIndex}
                className="animate-fade-in-up relative mt-8 border-b border-brand-background/35 pb-10 md:mt-10 md:pb-12"
              >
                <div className="grid items-start gap-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-14 lg:grid-cols-[340px_minmax(0,1fr)]">
                  <p className="select-none text-[clamp(8rem,19vw,17rem)] font-medium leading-[0.9] tracking-[-0.04em] text-[#9fc4cb]">
                    {phaseNumber}
                  </p>

                  <div className="max-w-5xl">
                    <h3 className="text-[clamp(2.6rem,4vw,4.5rem)] font-medium leading-[1.1] text-[#b7d8dd]">
                      {activePhase.title}
                    </h3>

                    <p className="mt-6 max-w-[31ch] text-[clamp(1.7rem,2.25vw,2.8rem)] leading-[1.3] text-[#9dc2c8]">
                      {activePhase.description}
                    </p>

                    <p className="mt-8 text-[clamp(1.8rem,2.35vw,2.8rem)] font-medium leading-[1.25] text-[#9dc2c8]">
                      {activePhase.actionLabel}
                    </p>

                    <ul className="mt-4 list-disc space-y-1.5 pl-6 text-[clamp(1.6rem,2.05vw,2.55rem)] leading-[1.3] text-[#9dc2c8]">
                      {activePhase.actions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <svg
                  className="pointer-events-none absolute bottom-0 right-0 h-20 w-32 text-brand-background/25 md:h-28 md:w-48"
                  viewBox="0 0 64 40"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2 4h10l18 18V4h10v32H30L12 18v18H2V4Z" />
                  <path d="M24 4h10l18 18V4h10v32H52L34 18v18H24V4Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="pointer-events-none">
            {methodPhases.map((phase, index) => (
              <div
                key={phase.title}
                data-phase-index={index}
                ref={(element) => {
                  phaseTriggerRefs.current[index] = element;
                }}
                className="h-[85svh]"
                aria-hidden
              />
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper withSectionSpacing={false} className="pb-section pt-section">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.02fr] md:gap-14 lg:gap-20">
          <div>
            <h2 className="max-w-[12ch] text-[clamp(3rem,5.2vw,5.1rem)] font-medium leading-[1.04] text-brand-secondaryText">
              Appliquée à chaque famille de systèmes
            </h2>
          </div>

          <div>
            <p className="max-w-[22ch] text-[clamp(1.45rem,2vw,2.2rem)] leading-[1.32] text-brand-secondaryText/50">
              Notre méthode s&apos;applique à l&apos;ensemble des familles de solutions techniques traitées par Marelion.
            </p>

            <Link
              href="/systemes"
              className="mt-8 inline-flex items-center gap-2 border-b border-brand-primaryText pb-1 text-[clamp(1.45rem,1.8vw,2rem)] font-medium text-brand-primaryText transition-all hover:tracking-wide"
            >
              Voir les systèmes techniques
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7m0 0H9m8 0v8" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <div className="relative aspect-[16/9] w-full md:aspect-[16/8.6]">
            <Image
              src="/images/intégration Page/picture.webp"
              alt="Espace de travail collaboratif"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper withSectionSpacing={false} className="pb-section">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.02fr] md:gap-10 lg:gap-14">
          <div className="overflow-hidden">
            <div className="relative aspect-[16/13] w-full">
              <Image
                src="/images/Méthode Page/3.webp"
                alt="Processus qualité et pilotage de projet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>

          <div className="flex min-h-full flex-col justify-between">
            <div>
              <h2 className="max-w-[14ch] text-[clamp(3rem,5vw,5.1rem)] font-medium leading-[1.04] text-brand-secondaryText">
                Encadrée par des processus qualité formalisés
              </h2>

              <p className="mt-5 max-w-[23ch] text-[clamp(1.4rem,1.95vw,2.15rem)] leading-[1.32] text-brand-secondaryText/50">
                Chaque étape méthodologique s&apos;inscrit dans un cadre qualité documenté et vérifié.
              </p>
            </div>

            <Link
              href="/qualite"
              className="mt-12 inline-flex items-center gap-2 border-b border-brand-primaryText pb-1 text-[clamp(1.4rem,1.75vw,1.95rem)] font-medium text-brand-primaryText transition-all hover:tracking-wide"
            >
              Approfondir la démarche qualité
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7m0 0H9m8 0v8" />
              </svg>
            </Link>
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

export default MethodPageSection;
