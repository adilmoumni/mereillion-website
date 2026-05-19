'use client';

import React, { useEffect, useRef, useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';

const PositioningStatementSection = () => {
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        setHasEnteredView(true);
        observer.disconnect();
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper
      className="overflow-hidden bg-brand-background"
      containerClassName="max-w-[1400px]"
      withSectionSpacing={false}
    >
      <div ref={sectionRef} className="relative mx-auto w-full py-14 md:py-20 lg:py-24">
        <p
          className={`w-full text-left text-[clamp(2rem,4vw,3.625rem)] font-medium leading-[1.06] tracking-[-0.04em] text-brand-primaryText md:whitespace-nowrap ${
            hasEnteredView ? 'animate-slide-in-left' : 'translate-x-[-18%] opacity-0'
          }`}
        >
          Marelion ne vend pas des références.
        </p>

        <p
          className={`mt-3 w-full text-right text-[clamp(2rem,4vw,3.625rem)] font-medium leading-[1.06] tracking-[-0.04em] text-brand-primaryText md:whitespace-nowrap ${
            hasEnteredView ? 'animate-slide-in-right [animation-delay:140ms]' : 'translate-x-[18%] opacity-0'
          }`}
        >
          Marelion sécurise des choix techniques.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default PositioningStatementSection;
