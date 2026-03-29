'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '../common/SectionWrapper';
import PageHeroImageSection from './PageHeroImageSection';
import SplitContactCtaSection from './SplitContactCtaSection';
import { systemsFamilies } from '@/lib/systemsData';

const SystemsPageSection = () => {
  const [activeSlug, setActiveSlug] = useState(systemsFamilies[0].slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeSystem = useMemo(
    () => systemsFamilies.find((system) => system.slug === activeSlug) ?? systemsFamilies[0],
    [activeSlug],
  );

  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeSlug]);

  const currentGalleryImage =
    activeSystem.gallery[activeImageIndex] ?? activeSystem.gallery[0] ?? activeSystem.image;

  return (
    <div className="bg-[#f2f4f4] pt-24 text-brand-secondaryText md:pt-28">
      <PageHeroImageSection
        badgeLabel="Systèmes"
        title="Une maîtrise multi-systèmes au service de la performance globale"
        subtitle="Une maîtrise multi-systèmes intégrant lecture normative, contraintes d’usage et exigences d’exploitation."
        primaryAction={{ label: 'Télécharger la brochure', href: '#' }}
        secondaryAction={{ label: 'Nous contacter', href: '/#contact' }}
        imageSrc="/images/Méthode Page/1.webp"
        imageAlt="Architecture moderne"
      />

      <SectionWrapper withSectionSpacing={false} className="pt-section">
        <div>
          <div className="max-w-[15ch]">
            <h2 className="text-[clamp(3.2rem,5.4vw,5.3rem)] font-medium leading-[1.04] text-brand-secondaryText">
              Une maîtrise multi-systèmes
            </h2>
            <p className="mt-8 max-w-[22ch] text-[clamp(1.45rem,2.05vw,2.3rem)] leading-[1.32] text-brand-secondaryText/50">
              Une maîtrise multi-systèmes intégrant lecture normative, contraintes d&apos;usage et exigences
              d&apos;exploitation.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-12 md:grid-cols-[1fr_1.02fr] md:gap-16 lg:gap-20">
            <div className="relative aspect-[1/1] w-full max-w-[700px] overflow-hidden">
              <Image
                src="/images/Home Page/Home Pics/2.webp"
                alt="Circulation architecturale"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>

            <div className="flex flex-col justify-between md:min-h-[100%]">
              <div className="max-w-[17ch] space-y-8 text-[clamp(1.9rem,2.2vw,3rem)] leading-[1.26] text-brand-secondaryText">
                <p>Marélion n&apos;aborde pas les systèmes techniques comme des composants isolés.</p>
                <p>
                  Chaque famille est analysée comme un système structuré, intégré dans une logique globale de
                  performance, de conformité et de cohérence inter-lots.
                </p>
              </div>

              <p className="mt-14 max-w-[14ch] text-[clamp(3.5rem,5.1vw,5.5rem)] font-medium leading-[1.08] text-brand-secondaryText">
                Nous sécurisons la cohérence entre systèmes avant exécution.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper withSectionSpacing={false} id="systemes" className="bg-[#f2f4f4] pt-section">
        <div className="mx-auto mb-12 max-w-4xl md:mb-14">
          <h2 className="text-[clamp(3rem,6vw,5.4rem)] font-medium leading-[1.06] text-brand-secondaryText">
            Familles de systèmes
          </h2>
          <p className="mt-5 max-w-[30ch] text-[clamp(1.45rem,2vw,2.25rem)] leading-[1.3] text-brand-secondaryText/50">
            Des systèmes sélectionnés et intégrés selon des critères techniques, normatifs et opérationnels stricts.
          </p>
        </div>

        <div className="grid items-start gap-section pb-section lg:grid-cols-[330px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-sm border border-[#c7d2d4] bg-[#dfe6e7] p-4 md:p-6">
              <h2 className="text-[clamp(2rem,2.4vw,2.8rem)] font-medium leading-[1.08] text-brand-primaryText">
                Sommaire
              </h2>
              <div className="mb-3 mt-5 h-px w-full bg-[#9fb9bf]" />

              {systemsFamilies.map((system) => {
                const isActive = system.slug === activeSystem.slug;

                return (
                  <button
                    key={system.slug}
                    type="button"
                    onClick={() => setActiveSlug(system.slug)}
                    className={`w-full border-b border-[#bfd0d4] py-4 text-left transition-colors last:border-none ${
                      isActive ? 'bg-[#cfdde0]' : 'hover:bg-[#d6e1e3]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-semibold ${isActive ? 'text-brand-primaryText' : 'text-[#7096a0]'}`}>
                        {system.id}
                      </span>
                      <h2 className={`text-base font-medium leading-tight ${isActive ? 'text-brand-secondaryText' : 'text-[#5f8690]'}`}>
                        {system.title}
                      </h2>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          <div>
            <span className="inline-flex bg-[#d2dde0] px-4 py-2 text-[clamp(1.15rem,1.45vw,1.7rem)] font-medium text-brand-primaryText">
              Fonction d&apos;usage
            </span>

            <h2 className="mt-5 text-[clamp(2.5rem,4.2vw,4.2rem)] font-medium leading-[1.08] text-brand-primaryText">
              {activeSystem.title}
            </h2>

            <div className="relative mt-6 overflow-hidden rounded-sm">
              <div className="relative aspect-[16/10] w-full md:aspect-[16/9]">
                <Image
                  src={currentGalleryImage}
                  alt={`${activeSystem.title} - visuel ${activeImageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  priority
                />
              </div>

              {activeSystem.gallery.length > 1 && (
                <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 md:inset-x-8 md:bottom-6">
                  {activeSystem.gallery.map((_, index) => (
                    <button
                      key={`${activeSystem.slug}-step-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      aria-label={`Image ${index + 1} sur ${activeSystem.gallery.length}`}
                      className={`h-[3px] flex-1 transition-colors ${
                        index === activeImageIndex ? 'bg-white' : 'bg-white/45 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <p className="mt-6 max-w-5xl text-[clamp(1.4rem,1.8vw,2rem)] leading-[1.34] text-brand-secondaryText">
              {activeSystem.description}
            </p>

            <p className="mt-8 text-[clamp(1.6rem,2.1vw,2.3rem)] font-medium uppercase leading-[1.2] text-brand-secondaryText">
              CE QUE NOUS ANALYSONS
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-7 text-[clamp(1.3rem,1.7vw,2rem)] leading-[1.32] text-brand-secondaryText">
              {activeSystem.analysisPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              {activeSystem.focus.map((item) => (
                <span key={item} className="inline-flex bg-[#d2dde0] px-3 py-1.5 text-[clamp(1.2rem,1.4vw,1.6rem)] font-medium text-brand-primaryText">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-card-gap">
              <Link
                href="/#contact"
                className="inline-flex items-center border-b border-brand-primaryText pb-1 text-button text-brand-primaryText transition-all hover:tracking-wide"
              >
                Échanger sur ce système
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SplitContactCtaSection
        title="Échanger sur un périmètre technique"
        body="Pour toute demande relative à un projet multi-systèmes ou à une exigence technique spécifique."
        actionLabel="Nous contacter"
        actionHref="/#contact"
        imageSrc="/images/CTA Banner BG/Pic.webp"
        imageAlt="Cuisine et aménagement intérieur"
      />
    </div>
  );
};

export default SystemsPageSection;
