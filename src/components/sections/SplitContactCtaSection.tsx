'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type SplitContactCtaSectionProps = {
  title: string;
  body: string;
  actionLabel: string;
  actionHref: string;
  imageSrc: string;
  imageAlt: string;
  patternSrc?: string;
  className?: string;
};

const SplitContactCtaSection = ({
  title,
  body,
  actionLabel,
  actionHref,
  imageSrc,
  imageAlt,
  patternSrc = '/images/CTA Banner BG/Cta banner BG.svg',
  className = '',
}: SplitContactCtaSectionProps) => {
  return (
    <section className={`mt-section w-full ${className}`}>
      <div className="grid min-h-[500px] grid-cols-1 md:grid-cols-2">
        <div className="relative overflow-hidden">
          <Image
            src={patternSrc}
            alt=""
            fill
            aria-hidden
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="relative z-10 flex h-full items-center px-6 py-12 sm:px-10 md:py-14 lg:px-14">
            <div className="max-w-[18ch] text-brand-background">
              <h2 className="text-[clamp(2rem,3.3vw,3.6rem)] font-medium leading-[1.08]">
                {title}
              </h2>

              <p className="mt-5 max-w-[36ch] text-[clamp(1rem,1.05vw,1.1rem)] leading-[1.55] text-brand-background/85">
                {body}
              </p>

              <Link
                href={actionHref}
                className="mt-10 inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-brand-background px-8 py-3 text-button text-brand-primaryText transition-colors hover:bg-brand-secondaryText hover:text-brand-background"
              >
                {actionLabel}
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-5-5 5 5-5 5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative min-h-[320px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default SplitContactCtaSection;
