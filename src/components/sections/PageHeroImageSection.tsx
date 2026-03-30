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
      className="pt-4 sm:pt-title-subtitle"
      withContainerPadding={false}
      containerClassName="max-w-none"
    >
      <div className="mx-auto max-w-7xl px-container-gap">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-primaryText/40 px-4 py-2 text-[0.92rem] font-medium text-brand-primaryText sm:px-5 sm:text-[0.98rem]">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primaryText" />
            {badgeLabel}
          </span>

          <h1 className="mt-7 text-[clamp(2.15rem,5.4vw,4rem)] font-medium leading-[1.07] text-brand-secondaryText">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-[44ch] text-[clamp(1rem,1.45vw,1.55rem)] leading-[1.5] text-brand-secondaryText/55">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
            <Link
              href={primaryAction.href}
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-transparent bg-brand-primaryText px-8 py-3 text-button text-brand-background transition-colors hover:bg-brand-secondaryText sm:w-auto sm:px-10"
            >
              {primaryAction.label}
            </Link>
            {secondaryAction ? (
              <Link
                href={secondaryAction.href}
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-brand-primaryText px-8 py-3 text-button text-brand-primaryText transition-colors hover:bg-brand-primaryText hover:text-brand-background sm:w-auto sm:px-10"
              >
                {secondaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {imageSrc ? (
        <div className="mt-12 w-full overflow-hidden md:mt-14">
          <div className="relative aspect-[5/4] w-full md:aspect-[2/1]">
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
