import React from 'react';
import SectionWrapper from '../common/SectionWrapper';

const PositioningStatementSection = () => {
  return (
    <SectionWrapper
      className="overflow-hidden bg-brand-background"
      containerClassName="max-w-[1400px]"
      withSectionSpacing={false}
    >
      <div className="relative mx-auto w-full py-12 md:py-14">
        <p className="animate-text-drift-right text-[clamp(1.35rem,2.35vw,2.65rem)] font-medium leading-[1.18] text-brand-primaryText md:whitespace-nowrap">
          Marelion ne vend pas des références.
        </p>

        <p className="animate-text-drift-left mt-3 text-[clamp(1.35rem,2.35vw,2.65rem)] font-medium leading-[1.18] text-brand-primaryText md:whitespace-nowrap md:pl-[clamp(1rem,8vw,12rem)] [animation-delay:-2.6s]">
          Marelion sécurise des choix techniques.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default PositioningStatementSection;
