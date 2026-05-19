import React from 'react';
import SectionWrapper from '../common/SectionWrapper';

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalDocumentSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: LegalSection[];
};

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const LegalDocumentSection = ({
  eyebrow,
  title,
  subtitle,
  sections,
}: LegalDocumentSectionProps) => {
  return (
    <article className="bg-[#f2f4f4] pt-24 text-brand-secondaryText md:pt-28">
      <SectionWrapper withSectionSpacing={false} className="pb-title-subtitle pt-section">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-primaryText/40 px-4 py-2 text-[0.92rem] font-medium text-brand-primaryText sm:px-5 sm:text-[0.98rem]">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primaryText" />
            {eyebrow}
          </span>

          <h1 className="mt-7 text-[clamp(2.15rem,5vw,4.6rem)] font-medium leading-[1.06] text-brand-secondaryText">
            {title}
          </h1>

          <p className="mt-6 max-w-[56ch] text-[clamp(1rem,1.35vw,1.35rem)] leading-[1.55] text-brand-secondaryText/60">
            {subtitle}
          </p>

        </div>
      </SectionWrapper>

      <SectionWrapper withSectionSpacing={false} className="pb-section">
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
          <nav
            aria-label={`Sommaire - ${title}`}
            className="border-t border-brand-primaryText/25 pt-5 lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-[0.88rem] font-semibold uppercase tracking-[0.14em] text-brand-primaryText">
              Sommaire
            </p>
            <ol className="mt-5 space-y-3 text-[0.98rem] leading-[1.35] text-brand-secondaryText/65">
              {sections.map((section) => (
                <li key={section.title}>
                  <a
                    href={`#${slugify(section.title)}`}
                    className="transition-colors hover:text-brand-primaryText"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            {sections.map((section) => (
              <section
                id={slugify(section.title)}
                key={section.title}
                className="scroll-mt-28 border-t border-brand-primaryText/25 pt-8"
              >
                <h2 className="text-[clamp(1.65rem,2.6vw,2.55rem)] font-medium leading-[1.12] text-brand-secondaryText">
                  {section.title}
                </h2>

                {section.paragraphs ? (
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="max-w-[74ch] text-[1rem] leading-[1.65] text-brand-secondaryText/65 md:text-[1.06rem]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : null}

                {section.bullets ? (
                  <ul className="mt-5 list-disc space-y-2 pl-5 text-[1rem] leading-[1.6] text-brand-secondaryText/65 md:text-[1.06rem]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </article>
  );
};

export default LegalDocumentSection;
