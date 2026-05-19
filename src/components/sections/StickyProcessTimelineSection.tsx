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
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <h2 className="max-w-[16ch] text-[clamp(2.25rem,4.8vw,4.4rem)] font-medium leading-[1.06] text-brand-secondaryText lg:max-w-[11ch]">
            {leftTitle}
          </h2>

          <p className="mt-6 max-w-[34ch] text-[clamp(1.05rem,1.55vw,1.55rem)] leading-[1.45] text-brand-secondaryText/55 lg:max-w-[28ch]">
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
                className={`relative pl-6 md:pl-8 ${index === steps.length - 1 ? 'pb-0' : 'pb-16 md:pb-20'}`}
              >
                <span
                  className={`absolute left-0 top-1.5 h-5 w-5 -translate-x-1/2 rounded-full border-2 md:h-6 md:w-6 ${
                    isReached ? 'border-brand-primaryText bg-[#9ec3ca]' : 'border-[#e1eaeb] bg-[#eef2f3]'
                  }`}
                />

                <span
                  className={`inline-flex bg-[#e8eeef] px-2.5 py-1 text-[1rem] font-medium leading-none md:text-[1.15rem] ${
                    isReached ? 'text-brand-primaryText' : 'text-[#95b3b9]'
                  }`}
                >
                  {step.id}
                </span>

                <h3
                  className={`mt-5 max-w-[22ch] text-[clamp(1.75rem,3vw,3rem)] font-medium leading-[1.12] lg:max-w-[18ch] ${
                    isReached ? 'text-brand-primaryText' : 'text-[#8cb0b7]'
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`mt-4 max-w-[40ch] text-[clamp(1.05rem,1.45vw,1.6rem)] leading-[1.45] ${
                    isReached ? 'text-brand-secondaryText/80' : 'text-[#98b5bb]'
                  }`}
                >
                  {step.description}
                </p>

                <p
                  className={`mt-5 text-[clamp(1.1rem,1.35vw,1.55rem)] font-medium ${
                    isReached ? 'text-brand-primaryText' : 'text-[#95b4ba]'
                  }`}
                >
                  {step.checklistLabel}
                </p>

                <ul
                  className={`mt-3 space-y-2 text-[clamp(1rem,1.32vw,1.4rem)] leading-[1.45] ${
                    isReached ? 'text-brand-primaryText' : 'text-[#9dbcc1]'
                  }`}
                >
                  {step.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 md:h-6 md:w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 12.5l4.2 4.2L12 11.9"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.8 12.5l4.2 4.2L21 8.8"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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
