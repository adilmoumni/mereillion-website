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
        secondaryAction={{ label: 'Nous contacter', href: '/contact' }}
        imageSrc="/images/qualite_page/hero.webp"
        imageAlt="Structure verrière architecturale"
      />

      <SectionWrapper withSectionSpacing={false} className="pb-section pt-section">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.02fr] md:gap-14 lg:gap-20">
          <div>
            <h2 className="max-w-[13ch] text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.04] tracking-[-0.03em] text-brand-secondaryText lg:max-w-[18ch]">
              Une méthode orientée maîtrise des risques
            </h2>
          </div>

          <div>
            <div className=" space-y-6 text-[clamp(1.3rem,1.9vw,2.15rem)] !text-[#00232A] lg:space-y-8">
              <p>
                Dans les projets complexes, le risque ne réside pas uniquement dans l&apos;exécution, mais dans
                les décisions prises en amont.
              </p>
              <p>
                La méthode Marélion structure, analyse et sécurise chaque choix technique avant
                contractualisation et intégration.
              </p>
            </div>

            <p className="mt-8 max-w-[14ch] text-[clamp(2rem,4.2vw,3.125rem)] font-medium leading-[1.08] tracking-[-0.03em] text-[#00232A] md:mt-10 lg:max-w-[16ch]">
              La décision précède l&apos;achat.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <section className="w-full bg-gradient-to-r from-[#012f37] via-[#045a67] to-[#067480]">
        <div className="mx-auto w-full max-w-7xl px-container-gap py-14 md:py-16 lg:py-20">
          <h2 className=" text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[1.06] text-brand-background w-full">
            Les quatre phases structurantes
          </h2>
        </div>

        <div className="relative">
          <div className="sticky top-[72px] min-h-[calc(100svh-72px)] py-6 md:top-[80px] md:min-h-[calc(100svh-80px)] md:py-10">
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
                <div className="grid items-start gap-6 md:grid-cols-[140px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
                  <p className="select-none text-[clamp(4.5rem,15vw,13rem)] font-medium leading-[0.9] tracking-[-0.04em] text-[#9fc4cb]">
                    {phaseNumber}
                  </p>

                  <div className="max-w-5xl">
                    <h3 className="text-[clamp(2rem,3.5vw,3.7rem)] font-medium leading-[1.1] text-[#b7d8dd]">
                      {activePhase.title}
                    </h3>

                    <p className="mt-5 max-w-[34ch] text-[clamp(1.15rem,1.65vw,1.8rem)] leading-[1.45] text-[#9dc2c8]">
                      {activePhase.description}
                    </p>

                    <p className="mt-7 text-[clamp(1.15rem,1.6vw,1.75rem)] font-medium leading-[1.35] text-[#9dc2c8]">
                      {activePhase.actionLabel}
                    </p>

                    <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[clamp(1.05rem,1.5vw,1.6rem)] leading-[1.45] text-[#9dc2c8] md:pl-6">
                      {activePhase.actions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <img src="/images/logo.svg" alt="" className='pointer-events-none absolute bottom-0 right-0 h-20 w-32 text-brand-background/25 md:h-28 md:w-48' />
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
                className="h-[70svh] md:h-[78svh]"
                aria-hidden
              />
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper withSectionSpacing={false} className="pb-section pt-section">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.02fr] md:gap-14 lg:gap-20">
          <div>
            <h2 className="max-w-[20ch]  text-[34px] lg:text-[54px] font-medium leading-[1.04] text-brand-secondaryText lg:max-w-[30ch]">
              Appliquée à chaque famille de systèmes
            </h2>
          </div>

          <div>
            <p className="max-w-[36ch] text-[clamp(1.05rem,1.45vw,1.55rem)] leading-[1.45] text-brand-secondaryText/55 lg:max-w-[40ch]">
              Notre méthode s&apos;applique à l&apos;ensemble des familles de solutions techniques traitées par Marelion.
            </p>

            <Link
              href="/systemes"
              className="mt-8 inline-flex items-center gap-2 border-b border-brand-primaryText pb-1 text-[clamp(1rem,1.1vw,1.1rem)] font-medium text-brand-primaryText transition-all hover:tracking-wide"
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
              src="/images/integration_page/picture.webp"
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
                src="/images/methode_page/3.webp"
                alt="Processus qualité et pilotage de projet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>

          <div className="flex min-h-full flex-col justify-between">
            <div>
              <h2 className="max-w-[16ch] text-[34px] font-medium leading-[1.04] text-brand-secondaryText md:text-[48px] lg:text-[54px] lg:max-w-[40ch]">
                Encadrée par des processus qualité formalisés
              </h2>

              <p className="mt-4 max-w-[34ch] text-[clamp(1.05rem,1.35vw,1.45rem)] leading-[1.45] text-brand-secondaryText/55 lg:max-w-[40ch]">
                Chaque étape méthodologique s&apos;inscrit dans un cadre qualité documenté et vérifié.
              </p>
            </div>

            <Link
              href="/qualite"
              className="mt-10 inline-flex items-center gap-2 border-b border-brand-primaryText pb-1 text-[clamp(1rem,1.1vw,1.08rem)] font-medium text-brand-primaryText transition-all hover:tracking-wide"
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
        actionHref="/contact"
        imageSrc="/images/cta_banner_bg/pic.webp"
        imageAlt="Cuisine et aménagement intérieur"
      />
    </div>
  );
};

export default MethodPageSection;
