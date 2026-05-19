'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
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

  useEffect(() => {
    if (activeSystem.gallery.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((previous) => (previous + 1) % activeSystem.gallery.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [activeSystem.gallery.length, activeSystem.slug]);

  const currentGalleryImage =
    activeSystem.gallery[activeImageIndex] ?? activeSystem.gallery[0] ?? activeSystem.image;

  return (
    <div className="bg-[#f2f4f4] pt-24 text-brand-secondaryText md:pt-28">
      <PageHeroImageSection
        badgeLabel="Systèmes"
        title="Une maîtrise multi-systèmes au service de la performance globale"
        subtitle="Une maîtrise multi-systèmes intégrant lecture normative, contraintes d’usage et exigences d’exploitation."
        primaryAction={{ label: 'Télécharger la brochure', href: '#' }}
        secondaryAction={{ label: 'Nous contacter', href: '/contact' }}
        imageSrc="/images/systems_page/hero.webp"
        imageAlt="Architecture moderne"
      />

      <SectionWrapper withSectionSpacing={false} className="pt-section">
        <div>
          <div className="w-full lg:max-w-[50%]">
            <h2 className="max-w-[12ch] text-[clamp(2.15rem,4.8vw,3.375rem)] font-medium leading-[1.04] tracking-[-0.03em] text-brand-secondaryText lg:max-w-[14ch]">
              Une maîtrise multi-systèmes
            </h2>
            <p className="mt-6 max-w-[34ch] text-[clamp(1.05rem,1.55vw,1.6rem)] leading-[1.45] text-brand-secondaryText/55 md:mt-10 lg:mt-14 lg:max-w-[30ch]">
              Une maîtrise multi-systèmes intégrant lecture normative, contraintes d&apos;usage et exigences
              d&apos;exploitation.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-8 md:grid-cols-[1fr_1.02fr] md:gap-14 lg:gap-20">
            <div className="relative aspect-[1/1] w-full max-w-[700px] overflow-hidden">
              <Image
                src="/images/home_page/home_pics/11.webp"
                alt="Circulation architecturale"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>

            <div className="flex flex-col justify-end md:min-h-[100%]">
              <div className="w-full space-y-6 text-[26px] leading-[1.35] !text-[#00232A] lg:max-w-full lg:space-y-8">
                <p>Marélion n&apos;aborde pas les systèmes techniques comme des composants isolés.</p>
                <p>
                  Chaque famille est analysée comme un système structuré, intégré dans une logique globale de
                  performance, de conformité et de cohérence inter-lots.
                </p>
              </div>

              <p className="mt-8 max-w-[14ch] text-[clamp(2rem,4.4vw,3.125rem)] font-medium leading-[1.08] tracking-[-0.03em] text-brand-secondaryText md:mt-10 lg:mt-20 lg:max-w-[16ch]">
                Nous sécurisons la cohérence entre systèmes avant exécution.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper withSectionSpacing={false} id="systemes" className="bg-[#f2f4f4] pt-section">
        <div className="grid items-start gap-8 pb-section lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-section">
          <div className="hidden lg:block" aria-hidden="true" />

          <div className="mt-10">
            <h2 className="max-w-[12ch] text-[clamp(2rem,4.4vw,3.125rem)] font-medium leading-[1.06] tracking-[-0.03em] text-brand-secondaryText lg:max-w-none">
              Familles de systèmes
            </h2>
            <p className="mt-4 max-w-[45ch] text-[clamp(1.05rem,1.45vw,1.55rem)] leading-[1.45] text-brand-secondaryText/55">
              Des systèmes sélectionnés et intégrés selon des critères techniques, normatifs et opérationnels stricts.
            </p>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-sm border border-[#c7d2d4] bg-[#dfe6e7] p-4 md:p-6">
              <h2 className="text-[clamp(1.5rem,2vw,2.2rem)] font-medium leading-[1.08] text-brand-primaryText mb-5">
                Sommaire
              </h2>
              <div className="hidden lg:block">
                {systemsFamilies.map((system) => {
                  const isActive = system.slug === activeSystem.slug;

                  return (
                    <button
                      key={system.slug}
                      type="button"
                      onClick={() => setActiveSlug(system.slug)}
                      className={`w-full py-3 text-left transition-colors ${
                        isActive ? '' : 'hover:bg-[#d6e1e3]'
                      }`}
                    >
                      <h2 className={`text-base font-medium leading-tight ${isActive ? 'text-brand-secondaryText' : 'text-[#5f8690]'}`}>
                        {system.title}
                      </h2>
                    </button>
                  );
                })}
              </div>

              <div className="lg:hidden" />
            </div>
          </aside>

          <div className="hidden lg:block">
            <span className="inline-flex bg-[#d2dde0] px-4 py-2 text-[clamp(0.95rem,1.05vw,1.08rem)] font-medium text-brand-primaryText">
              Fonction d&apos;usage
            </span>

            <h2 className="mt-5 text-[clamp(2rem,3.5vw,3.4rem)] font-medium leading-[1.08] text-brand-primaryText">
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

            <p className="mt-6 max-w-[46ch] text-[clamp(1.08rem,1.35vw,1.45rem)] leading-[1.5] text-brand-secondaryText">
              {activeSystem.description}
            </p>

            <p className="mt-8 text-[clamp(1.05rem,1.2vw,1.2rem)] font-medium uppercase tracking-[0.08em] leading-[1.3] text-brand-secondaryText">
              CE QUE NOUS ANALYSONS
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-[clamp(1rem,1.2vw,1.25rem)] leading-[1.5] text-brand-secondaryText md:pl-6">
              {activeSystem.analysisPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              {activeSystem.focus.map((item) => (
                <span key={item} className="inline-flex bg-[#d2dde0] px-3 py-1.5 text-[clamp(0.95rem,1.05vw,1.08rem)] font-medium text-brand-primaryText">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-12 lg:hidden">
            {systemsFamilies.map((system) => {
              const mobileImage = system.gallery[0] ?? system.image;

              return (
                <section key={system.slug} className="border-t border-[#d7dee0] pt-8 first:border-t-0 first:pt-0">
                  <span className="inline-flex bg-[#d2dde0] px-4 py-2 text-[0.98rem] font-medium text-brand-primaryText">
                    Fonction d&apos;usage
                  </span>

                  <h2 className="mt-5 text-[clamp(2rem,7vw,3rem)] font-medium leading-[1.08] tracking-[-0.03em] text-brand-primaryText">
                    {system.title}
                  </h2>

                  <div className="relative mt-6 overflow-hidden rounded-sm">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={mobileImage}
                        alt={system.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </div>

                  <p className="mt-6 max-w-[34ch] text-[1.05rem] leading-[1.5] text-brand-secondaryText">
                    {system.description}
                  </p>

                  <p className="mt-8 text-[0.98rem] font-medium uppercase tracking-[0.08em] leading-[1.3] text-brand-secondaryText">
                    CE QUE NOUS ANALYSONS
                  </p>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[1rem] leading-[1.5] text-brand-secondaryText">
                    {system.analysisPoints.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {system.focus.map((item) => (
                      <span key={item} className="inline-flex bg-[#d2dde0] px-3 py-1.5 text-[0.95rem] font-medium text-brand-primaryText">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SplitContactCtaSection
        title="Échanger sur un périmètre technique"
        body="Pour toute demande relative à un projet multi-systèmes ou à une exigence technique spécifique."
        actionLabel="Nous contacter"
        actionHref="/contact"
        imageSrc="/images/systems_page/footer.webp"
        imageAlt="Cuisine et aménagement intérieur"
      />
    </div>
  );
};

export default SystemsPageSection;
