'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SectionWrapper from '../common/SectionWrapper';

type QualityCard = {
  title: string;
  description: string;
  href: string;
};

const qualityCards: QualityCard[] = [
  {
    title: 'Des Procédures De Contrôle Formalisées',
    description:
      'Un cadre méthodologique structuré sécurise chaque décision et garantit la maîtrise des risques techniques.',
    href: '/qualite',
  },
  {
    title: 'Une Documentation Technique Complète',
    description:
      'Un corpus documentaire exhaustif assure conformité, traçabilité et lisibilité contractuelle.',
    href: '/qualite',
  },
  {
    title: 'Vérifications Ciblées À Chaque Étape',
    description:
      'Des audits ponctuels valident la cohérence entre exigences définies et mise en œuvre effective.',
    href: '/qualite',
  },
];

const HomeQualityStickySection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const currentEntry = visibleEntries[0];
        if (!currentEntry) return;

        const nextIndex = Number((currentEntry.target as HTMLElement).dataset.cardIndex ?? '0');
        setActiveCardIndex((previous) => (previous === nextIndex ? previous : nextIndex));
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-18% 0px -38% 0px',
      },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper withSectionSpacing={false} className="bg-brand-background pb-section pt-section">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.08fr] lg:gap-14">
        <div className="lg:sticky lg:top-28">
          <h2 className="max-w-[14ch] text-[clamp(2rem,3.4vw,3.55rem)] font-medium leading-[1.1] text-brand-secondaryText lg:max-w-[10ch]">
            La qualité se démontre par la preuve
          </h2>

          <p className="mt-4 max-w-[38ch] text-[clamp(1rem,1.02vw,1.08rem)] leading-[1.55] text-brand-secondaryText/55">
            Pour Marélion, la conformité n’est pas une déclaration, mais un processus continu de validation.
          </p>

          <Link
            href="/qualite"
            className="mt-7 inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-brand-primaryText px-4 py-2.5 text-button font-medium text-brand-background transition-colors hover:bg-brand-secondaryText"
          >
            <span className="px-3">Approfondir notre démarche qualité</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-background text-brand-primaryText">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="space-y-6 md:space-y-8">
          {qualityCards.map((card, index) => {
            const isActive = index === activeCardIndex;
            const isReached = index < activeCardIndex;

            return (
              <article
                key={card.title}
                data-card-index={index}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className={`min-h-[280px] border border-[#ebe7e4] bg-[#f6f5f4] p-6 transition-all duration-700 md:min-h-[330px] md:p-7 ${
                  isActive
                    ? 'translate-y-0 opacity-100 shadow-[0_18px_60px_rgba(0,35,42,0.08)]'
                    : isReached
                      ? 'translate-y-0.5 opacity-85'
                      : 'translate-y-2 opacity-45'
                }`}
              >
                <h3
                  className={`max-w-[20ch] text-[clamp(1.35rem,1.95vw,2.1rem)] font-medium leading-[1.2] transition-colors duration-500 ${
                    isActive ? 'text-brand-primaryText' : 'text-brand-primaryText/80'
                  }`}
                >
                  {card.title}
                </h3>

                <p
                  className={`mt-3 max-w-[40ch] text-[clamp(1rem,1.02vw,1.08rem)] leading-[1.55] transition-colors duration-500 ${
                    isActive ? 'text-brand-secondaryText/95' : 'text-brand-secondaryText/75'
                  }`}
                >
                  {card.description}
                </p>

                <Link
                  href={card.href}
                  className={`mt-8 inline-flex items-center gap-1 border-b border-current pb-0.5 text-[clamp(1rem,0.98vw,1.05rem)] font-medium transition-all hover:tracking-wide ${
                    isActive ? 'text-brand-primaryText' : 'text-brand-primaryText/85'
                  }`}
                >
                  En savoir plus
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7m0 0H9m8 0v8" />
                  </svg>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HomeQualityStickySection;
