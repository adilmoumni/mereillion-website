'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '../common/SectionWrapper';

type HeroAction = {
  label: string;
  href: string;
};

type PageHeroImageSectionProps = {
  badgeLabel: string;
  title: string;
  subtitle: string;
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
  imageSrc?: string;
  imageAlt?: string;
  imagePriority?: boolean;
};

const PageHeroImageSection = ({
  badgeLabel,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  imageSrc,
  imageAlt,
  imagePriority = true,
}: PageHeroImageSectionProps) => {
  return (
    <SectionWrapper
      withSectionSpacing={false}
      className="pt-title-subtitle"
      withContainerPadding={false}
      containerClassName="max-w-none"
    >
      <div className="mx-auto max-w-7xl px-container-gap">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-primaryText/40 px-5 py-2 text-[1.03rem] font-medium text-brand-primaryText">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primaryText" />
            {badgeLabel}
          </span>

          <h1 className="mt-8 text-[clamp(2.5rem,6vw,4.4rem)] font-medium leading-[1.08] text-brand-secondaryText">
            {title}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-[clamp(1.15rem,2.1vw,2rem)] leading-[1.35] text-brand-secondaryText/50">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryAction.href}
              className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-transparent bg-brand-primaryText px-10 py-3 text-button text-brand-background transition-colors hover:bg-brand-secondaryText"
            >
              {primaryAction.label}
            </Link>
            {secondaryAction ? (
              <Link
                href={secondaryAction.href}
                className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-brand-primaryText px-10 py-3 text-button text-brand-primaryText transition-colors hover:bg-brand-primaryText hover:text-brand-background"
              >
                {secondaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {imageSrc ? (
        <div className="mt-14 w-full overflow-hidden">
          <div className="relative aspect-[4/3] w-full md:aspect-[2/1]">
            <Image
              src={imageSrc}
              alt={imageAlt ?? ''}
              fill
              priority={imagePriority}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      ) : null}
    </SectionWrapper>
  );
};

export default PageHeroImageSection;
