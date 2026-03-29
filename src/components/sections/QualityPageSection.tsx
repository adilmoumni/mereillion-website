'use client';

import React, { useEffect, useRef, useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import PageHeroImageSection from './PageHeroImageSection';

const qualityBlocks = [
  {
    title: 'Processus De Validation Formalisés',
    description: 'Des protocoles définis en amont encadrent chaque phase décisionnelle et opérationnelle.',
    points: [
      'Analysé des exigences normatives',
      'Validation technique des solutions retenues',
      'Formalisation des spécifications',
    ],
  },
  {
    title: 'Controles Qualité Cibles',
    description:
      "Des points de contrôle sont intégrés aux étapes critiques du projet afin d'assurer la conformité effective.",
    points: [
      'Verifications documentaires',
      "Points d'audit technique",
      'contrôle a la reception',
    ],
  },
  {
    title: 'Documentation Technique Rigoureuse',
    description:
      "Chaque choix est accompagné d'un corpus documentaire structuré garantissant tracabilite et lisibilite contractuelle.",
    points: [
      'Fiches techniques validées',
      'References normatives',
      'Rapports de conformite',
    ],
  },
];

const riskRows = [
  'Non-conformité normative',
  'Incompatibilité technique entre lots',
  'Défaillance d’intégration',
  'Risques contractuels',
];

const QualityPageSection = () => {
  const [activeBlockIndex, setActiveBlockIndex] = useState(0);
  const blockTriggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const currentEntry = visibleEntries[0];
        if (!currentEntry) return;

        const nextIndex = Number(
          (currentEntry.target as HTMLElement).dataset.blockIndex ?? '0',
        );

        setActiveBlockIndex((previousIndex) =>
          previousIndex === nextIndex ? previousIndex : nextIndex,
        );
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-18% 0px -35% 0px',
      },
    );

    blockTriggerRefs.current.forEach((trigger) => {
      if (trigger) observer.observe(trigger);
    });

    return () => observer.disconnect();
  }, []);

  const activeBlock = qualityBlocks[activeBlockIndex];

  return (
    <div className="bg-[#f2f4f4] pt-24 text-brand-secondaryText md:pt-28">
      <PageHeroImageSection
        badgeLabel="Qualité"
        title="La qualité se démontre par la preuve"
        subtitle="Un cadre formalisé de validation, de contrôle et de traçabilité appliqué à chaque projet."
        primaryAction={{ label: 'Télécharger la brochure', href: '#' }}
        secondaryAction={{ label: 'Nous contacter', href: '/#contact' }}
        imageSrc="/images/Qualité Page/picture.webp"
        imageAlt="Espace d'accueil et contrôle qualité"
      />

      <SectionWrapper withSectionSpacing={false} className="pb-section pt-section">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.02fr] md:gap-16 lg:gap-20">
          <div>
            <h2 className="max-w-[9ch] text-[clamp(3rem,5.3vw,5.3rem)] font-medium leading-[1.04] text-brand-secondaryText">
              Une culture de la preuve
            </h2>
          </div>

          <div>
            <div className="max-w-[19ch] space-y-8 text-[clamp(1.8rem,2.15vw,2.9rem)] leading-[1.28] text-brand-secondaryText">
              <p>La qualité ne repose pas sur l&apos;intention mais sur la validation méthodique.</p>
              <p>
                Chaque décision technique est accompagnée d&apos;une justification documentée, vérifiable et
                traçable.
              </p>
            </div>

            <p className="mt-10 max-w-[14ch] text-[clamp(3rem,4.4vw,5rem)] font-medium leading-[1.1] text-brand-secondaryText">
              La conformité est intégrée au processus, pas ajoutée en fin de projet.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper withSectionSpacing={false} className="pb-section pt-section">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.02fr] lg:gap-16">
          <div className="lg:sticky lg:top-32">
            <h2 className="max-w-[11ch] text-[clamp(3rem,5.1vw,5.1rem)] font-medium leading-[1.04] text-brand-secondaryText">
              Chaque projet est encadré par :
            </h2>

            <div className="mt-8 max-w-[18ch] space-y-8 text-[clamp(1.45rem,1.95vw,2.2rem)] leading-[1.32] text-brand-secondaryText/50">
              <p>Pour Marélion, la conformité n&apos;est pas une déclaration, mais un processus continu de validation.</p>
              <p>
                Notre objectif est de protéger la performance globale de l&apos;ouvrage et de garantir la
                pérennité des investissements.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="lg:sticky lg:top-28">
              <article
                key={activeBlockIndex}
                className="animate-fade-in-up min-h-[540px] bg-[#dce9ea] p-8 md:min-h-[620px] md:p-12"
              >
                <h3 className="max-w-[12ch] text-[clamp(2.8rem,4.4vw,4.9rem)] font-medium leading-[1.06] text-brand-primaryText">
                  {activeBlock.title}
                </h3>

                <p className="mt-6 max-w-[26ch] text-[clamp(1.75rem,2.2vw,2.9rem)] leading-[1.3] text-brand-secondaryText">
                  {activeBlock.description}
                </p>

                <ul className="mt-12 space-y-4 text-[clamp(1.7rem,2.1vw,2.65rem)] font-medium leading-[1.28] text-brand-primaryText">
                  {activeBlock.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <svg className="mt-1.5 h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M3 12.5l4.2 4.2L12 11.9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.8 12.5l4.2 4.2L21 8.8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="pointer-events-none">
              {qualityBlocks.map((block, index) => (
                <div
                  key={block.title}
                  data-block-index={index}
                  ref={(element) => {
                    blockTriggerRefs.current[index] = element;
                  }}
                  className="h-[85svh]"
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <section className="w-full border-t border-brand-background/45 bg-gradient-to-r from-[#012f37] via-[#045a67] to-[#067480]">
        <div className="mx-auto w-full max-w-7xl px-container-gap py-14 md:py-16 lg:py-20">
          <h2 className="max-w-[17ch] text-[clamp(3.1rem,5.2vw,5.4rem)] font-medium leading-[1.07] text-brand-background">
            Maîtrise des risques techniques et réglementaires
          </h2>

          <p className="mt-8 max-w-[25ch] text-[clamp(1.5rem,1.95vw,2.35rem)] leading-[1.32] text-[#91bcc4]">
            Notre cadre qualité vise à anticiper et réduire les risques liés à :
          </p>

          <div className="mt-12 space-y-5">
            {riskRows.map((row) => (
              <button
                key={row}
                type="button"
                className="group flex w-full items-center justify-between border border-[#3a8b97] bg-transparent px-6 py-5 text-left transition-colors duration-200 hover:bg-[#dce9ea] md:px-8 md:py-6"
              >
                <span className="text-[clamp(2.1rem,2.8vw,3.4rem)] font-medium leading-[1.2] text-brand-background transition-colors group-hover:text-brand-primaryText">
                  {row}
                </span>

                <svg
                  className="h-8 w-8 shrink-0 text-brand-background transition-colors group-hover:text-brand-primaryText md:h-10 md:w-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 5v14m-7-7h14" />
                </svg>

              </button>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper withSectionSpacing={false} className="pb-section pt-section">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.02fr] md:gap-16 lg:gap-20">
          <div>
            <h2 className="max-w-[8ch] text-[clamp(3rem,5.2vw,5.3rem)] font-medium leading-[1.04] text-brand-secondaryText">
              Traçabilité & responsabilité
            </h2>
          </div>

          <div>
            <div className="max-w-[19ch] space-y-8 text-[clamp(1.8rem,2.15vw,2.9rem)] leading-[1.28] text-brand-secondaryText">
              <p>Chaque étape du processus est documentée, archivée et vérifiable.</p>
              <p>
                Nous assumons la responsabilité de la cohérence entre les choix validés et leur mise en oeuvre
                effective.
              </p>
            </div>

            <p className="mt-10 max-w-[13ch] text-[clamp(3rem,4.4vw,5rem)] font-medium leading-[1.1] text-brand-secondaryText">
              Chaque décision est justifiée. Chaque conformité est démontrée.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default QualityPageSection;
