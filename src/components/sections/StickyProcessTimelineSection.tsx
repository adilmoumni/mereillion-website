'use client';

import React, { useEffect, useRef, useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';

export type ProcessTimelineStep = {
  id: string;
  title: string;
  description: string;
  checklistLabel: string;
  checklist: string[];
};

type StickyProcessTimelineSectionProps = {
  leftTitle: string;
  leftSubtitle: string;
  steps: ProcessTimelineStep[];
  className?: string;
};

const StickyProcessTimelineSection = ({
  leftTitle,
  leftSubtitle,
  steps,
  className = '',
}: StickyProcessTimelineSectionProps) => {
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

        const nextIndex = Number(
          (currentEntry.target as HTMLElement).dataset.stepIndex ?? '0',
        );

        setActiveStepIndex((previousIndex) =>
          previousIndex === nextIndex ? previousIndex : nextIndex,
        );
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-18% 0px -40% 0px',
      },
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, [steps.length]);

  useEffect(() => {
    const updateFill = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();
      const anchor = window.innerHeight * 0.25;
      const ratio = (anchor - rect.top) / rect.height;
      const clampedRatio = Math.min(1, Math.max(0, ratio));

      setFillRatio((previousRatio) =>
        Math.abs(previousRatio - clampedRatio) < 0.004 ? previousRatio : clampedRatio,
      );
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
    <SectionWrapper withSectionSpacing={false} className={`pb-section pt-section ${className}`}>
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <h2 className="max-w-[10ch] text-[clamp(3rem,5.1vw,5.2rem)] font-medium leading-[1.04] text-brand-secondaryText">
            {leftTitle}
          </h2>

          <p className="mt-8 max-w-[17ch] text-[clamp(1.45rem,1.95vw,2.2rem)] leading-[1.32] text-brand-secondaryText/50">
            {leftSubtitle}
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          <span className="absolute bottom-0 left-0 top-0 w-px bg-[#e4e9ea]" />
          <span
            className="absolute left-0 top-0 w-px bg-brand-primaryText transition-[height] duration-200 ease-out"
            style={{ height: `${fillRatio * 100}%` }}
          />

          {steps.map((step, index) => {
            const isReached = index <= activeStepIndex;

            return (
              <article
                key={`${step.id}-${step.title}`}
                data-step-index={index}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                className={`relative pl-8 ${index === steps.length - 1 ? 'pb-0' : 'pb-20 md:pb-24'}`}
              >
                <span
                  className={`absolute left-0 top-1.5 h-6 w-6 -translate-x-1/2 rounded-full border-2 ${
                    isReached ? 'border-brand-primaryText bg-[#9ec3ca]' : 'border-[#e1eaeb] bg-[#eef2f3]'
                  }`}
                />

                <span
                  className={`inline-flex bg-[#e8eeef] px-2 py-1 text-[1.55rem] font-medium leading-none ${
                    isReached ? 'text-brand-primaryText' : 'text-[#95b3b9]'
                  }`}
                >
                  {step.id}
                </span>

                <h3
                  className={`mt-6 max-w-[18ch] text-[clamp(2.4rem,3.35vw,4.1rem)] font-medium leading-[1.1] ${
                    isReached ? 'text-brand-primaryText' : 'text-[#8cb0b7]'
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`mt-5 max-w-[27ch] text-[clamp(1.5rem,1.95vw,2.35rem)] leading-[1.34] ${
                    isReached ? 'text-brand-secondaryText/80' : 'text-[#98b5bb]'
                  }`}
                >
                  {step.description}
                </p>

                <p
                  className={`mt-6 text-[clamp(1.55rem,1.9vw,2.25rem)] font-medium ${
                    isReached ? 'text-brand-primaryText' : 'text-[#95b4ba]'
                  }`}
                >
                  {step.checklistLabel}
                </p>

                <ul
                  className={`mt-4 space-y-2 text-[clamp(1.45rem,1.85vw,2.2rem)] leading-[1.32] ${
                    isReached ? 'text-brand-primaryText' : 'text-[#9dbcc1]'
                  }`}
                >
                  {step.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="mt-1 h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M3 12.5l4.2 4.2L12 11.9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.8 12.5l4.2 4.2L21 8.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default StickyProcessTimelineSection;
