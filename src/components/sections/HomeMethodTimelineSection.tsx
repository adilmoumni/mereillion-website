'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SectionWrapper from '../common/SectionWrapper';

type MethodStep = {
  id: number;
  title: string;
  description: string;
  icon: 'structurer' | 'analyser' | 'securiser' | 'livrer';
};

const methodSteps: MethodStep[] = [
  {
    id: 1,
    title: 'Structurer',
    description:
      'Définissez la portée, établissez les exigences et créez des cadres techniques qui guident toutes les décisions ultérieures.',
    icon: 'structurer',
  },
  {
    id: 2,
    title: 'Analyser',
    description:
      'Évaluer les options par rapport aux aspects techniques, critères économiques et opérationnels avec des protocoles d’évaluation rigoureux.',
    icon: 'analyser',
  },
  {
    id: 3,
    title: 'Sécuriser',
    description:
      'Finalisez les spécifications, établissez des accords avec les fournisseurs et verrouillez la documentation de conformité.',
    icon: 'securiser',
  },
  {
    id: 4,
    title: 'Livrer',
    description:
      'Orchestrer la logistique, superviser l’installation et vérifier la qualité à chaque étape de mise en œuvre.',
    icon: 'livrer',
  },
];

const MethodIcon = ({ type, className }: { type: MethodStep['icon']; className?: string }) => {
  if (type === 'structurer') {
    return (
      <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
        <rect x="13" y="49" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="4.5" />
        <rect x="47" y="33" width="30" height="54" rx="6" stroke="currentColor" strokeWidth="4.5" />
        <rect x="79" y="21" width="30" height="30" rx="6" stroke="currentColor" strokeWidth="4.5" />
        <rect x="79" y="69" width="30" height="30" rx="6" stroke="currentColor" strokeWidth="4.5" />
        <path d="M37 61H47M77 39H79M77 83H79" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'analyser') {
    return (
      <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
        <path d="M18 21V101H102" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M30 85L49 61L74 84L96 48" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 20H56M35 35H60" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'securiser') {
    return (
      <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
        <path
          d="M60 14L95 24V52C95 75 79 94 60 104C41 94 25 75 25 52V24L60 14Z"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinejoin="round"
        />
        <path d="M42 59L55 72L78 44" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <circle cx="32" cy="90" r="16" stroke="currentColor" strokeWidth="4.5" />
      <rect x="50" y="28" width="44" height="44" rx="8" transform="rotate(-12 50 28)" stroke="currentColor" strokeWidth="4.5" />
      <path d="M17 40L31 44L45 86H94" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const HomeMethodTimelineSection = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [fillRatio, setFillRatio] = useState(0);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const currentEntry = visibleEntries[0];
        if (!currentEntry) return;

        const nextIndex = Number((currentEntry.target as HTMLElement).dataset.stepIndex ?? '0');

        setActiveStepIndex((previous) => (previous === nextIndex ? previous : nextIndex));
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-24% 0px -36% 0px',
      },
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateFill = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();
      const anchor = window.innerHeight * 0.36;
      const ratio = (anchor - rect.top) / rect.height;
      const clampedRatio = Math.min(1, Math.max(0, ratio));

      setFillRatio((previous) => (Math.abs(previous - clampedRatio) < 0.004 ? previous : clampedRatio));
    };

    updateFill();
    window.addEventListener('scroll', updateFill, { passive: true });
    window.addEventListener('resize', updateFill);

    return () => {
      window.removeEventListener('scroll', updateFill);
      window.removeEventListener('resize', updateFill);
    };
  }, []);

  return (
    <SectionWrapper withSectionSpacing={false} className="bg-brand-background pb-section pt-section">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-[clamp(2.15rem,3.7vw,3.95rem)] font-medium leading-[1.1] text-brand-secondaryText">
          La méthode : concevoir avant d’exécuter
        </h2>

        <p className="mx-auto mt-4 max-w-[40ch] text-[clamp(1rem,1.15vw,1.2rem)] leading-[1.55] text-brand-secondaryText/55">
          Notre méthode constitue un socle de sécurisation conçu pour les projets à forte exigence technique.
        </p>
      </div>

      <div ref={timelineRef} className="relative mt-10 md:mt-14">
        <span className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-brand-secondaryText/8 lg:block" />
        <span
          className="absolute left-1/2 top-0 hidden w-[3px] -translate-x-1/2 rounded-full bg-brand-primaryText transition-[height] duration-200 ease-out lg:block"
          style={{ height: `${fillRatio * 100}%` }}
        />

        {methodSteps.map((step, index) => {
          const isTextOnRight = index % 2 === 0;
          const isReached = index <= activeStepIndex;
          const isActive = index === activeStepIndex;
          const toneClass = isActive
            ? 'opacity-100'
            : isReached
              ? 'opacity-80'
              : 'opacity-45';

          const textTitleClass = isActive
            ? 'text-brand-primaryText'
            : isReached
              ? 'text-brand-secondaryText/85'
              : 'text-brand-secondaryText/50';

          const textBodyClass = isActive
            ? 'text-brand-secondaryText/86'
            : isReached
              ? 'text-brand-secondaryText/65'
              : 'text-brand-secondaryText/45';

          return (
            <article
              key={step.id}
              data-step-index={index}
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
              className={`relative py-7 transition-all duration-700 md:py-9 lg:py-10 ${toneClass} ${
                isActive ? 'translate-y-0' : 'translate-y-1.5'
              }`}
            >
              <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-16">
                <div
                  className={`${
                    isTextOnRight ? 'order-1' : 'order-2'
                  } flex justify-center lg:min-h-[180px] lg:items-center`}
                >
                  <MethodIcon
                    type={step.icon}
                    className={`h-[4.5rem] w-[4.5rem] transition-colors duration-700 md:h-20 md:w-20 ${
                      isActive ? 'text-brand-primaryText' : 'text-brand-primaryText/58'
                    }`}
                  />
                </div>

                <div
                  className={`${
                    isTextOnRight ? 'order-2 text-left lg:pl-6' : 'order-1 text-left lg:pr-6 lg:text-right'
                  }`}
                >
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-[1.05rem] font-medium leading-none transition-colors duration-500 ${
                      isActive
                        ? 'bg-brand-primaryText text-brand-background'
                        : isReached
                          ? 'bg-brand-primaryText/70 text-brand-background'
                          : 'bg-brand-primaryText/26 text-brand-background/90'
                    }`}
                  >
                    {step.id}
                  </span>

                  <h3 className={`mt-3 text-[clamp(1.6rem,2.25vw,2.45rem)] font-medium leading-[1.2] transition-colors duration-500 ${textTitleClass}`}>
                    {step.title}
                  </h3>

                  <p className={`mt-2.5 max-w-[36ch] text-[clamp(1rem,1.14vw,1.2rem)] leading-[1.55] transition-colors duration-500 ${textBodyClass} ${isTextOnRight ? '' : 'lg:ml-auto'}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center md:mt-12">
        <Link
          href="/methode"
          className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-brand-primaryText px-8 py-3 text-button text-brand-background transition-colors hover:bg-brand-secondaryText"
        >
          Voir la méthode complète
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default HomeMethodTimelineSection;
