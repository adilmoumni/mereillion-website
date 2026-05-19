'use client';

import React, { useEffect, useRef, useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { systemsFamilies } from '@/lib/systemsData';

const MAX_VISIBLE_ROWS = 5;
const LIST_ROW_HEIGHT = 124;

const truncateDescription = (value: string, length = 110) => {
  if (value.length <= length) return value;
  return `${value.slice(0, length).trimEnd()}...`;
};

const SystemsSection = () => {
  const [activeSystemIndex, setActiveSystemIndex] = useState(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [canScrollDown, setCanScrollDown] = useState(systemsFamilies.length > MAX_VISIBLE_ROWS);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  const activeSystem = systemsFamilies[activeSystemIndex] ?? systemsFamilies[0];
  const gallery = activeSystem?.gallery?.length ? activeSystem.gallery : activeSystem ? [activeSystem.image] : [];
  const currentGalleryImage = gallery[activeMediaIndex] ?? activeSystem.image;
  const listContainerHeight = Math.min(MAX_VISIBLE_ROWS, systemsFamilies.length) * LIST_ROW_HEIGHT;

  useEffect(() => {
    setActiveMediaIndex(0);
  }, [activeSystemIndex]);

  useEffect(() => {
    if (gallery.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveMediaIndex((previous) => (previous + 1) % gallery.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [gallery.length, activeSystem.id]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const updateScrollState = () => {
      const maxScroll = Math.max(0, list.scrollHeight - list.clientHeight);
      setCanScrollUp(list.scrollTop > 3);
      setCanScrollDown(list.scrollTop < maxScroll - 3);
    };

    updateScrollState();

    list.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      list.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handleArrowToggle = () => {
    const list = listRef.current;
    if (!list) return;

    if (canScrollDown) {
      list.scrollBy({ top: LIST_ROW_HEIGHT, behavior: 'smooth' });
      return;
    }

    if (canScrollUp) {
      list.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSystemSelect = (index: number) => {
    setActiveSystemIndex(index);

    if (window.innerWidth < 1024) {
      setMobileExpandedIndex((previous) => (previous === index ? null : index));
    }
  };

  return (
    <SectionWrapper id="systemes" as="div" className="overflow-hidden bg-brand-accent text-brand-background">
      <div className="mb-section flex">
        <div className="animate-fade-in w-full text-left lg:ml-auto lg:w-1/2">
          <h2 className="mb-title-subtitle text-[clamp(2rem,3.7vw,4.1rem)] font-medium uppercase leading-[1.08] text-brand-background">
            NOS FAMILLES DE SYSTÈMES
          </h2>
          <p className="max-w-[38rem] text-[clamp(1rem,1.28vw,1.6rem)] font-medium leading-[1.4] text-brand-background/50">
            Chaque famille est abordée comme un système à part entière, avec ses contraintes d&apos;usage, de normes et
            d&apos;exploitation.
          </p>
        </div>
      </div>

      <div className="grid items-start gap-card-gap lg:grid-cols-[0.9fr_1.1fr] lg:gap-section">
        <div className="hidden h-fit w-full lg:sticky lg:top-32 lg:block">
          <div className="animate-fade-in relative mb-title-subtitle aspect-[4/3.85] w-full overflow-hidden rounded-sm shadow-2xl">
            <Image
              src={gallery[activeMediaIndex] ?? activeSystem.image}
              alt={activeSystem.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />

            <div className="absolute bottom-8 left-8 right-8 flex gap-2">
              {gallery.map((item, index) => (
                <button
                  key={`${activeSystem.id}-${item}`}
                  type="button"
                  onClick={() => setActiveMediaIndex(index)}
                  aria-label={`Afficher le média ${index + 1} pour ${activeSystem.title}`}
                  className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${
                    index === activeMediaIndex ? 'bg-brand-background' : 'bg-brand-background/28 hover:bg-brand-background/45'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up space-y-container-gap">
            <h3 className="text-[clamp(1.9rem,2.3vw,2.7rem)] font-medium leading-[1.15] text-brand-background">{activeSystem.title}</h3>
            <p className="max-w-full text-[18px] font-medium leading-[1.45] text-brand-background/50 md:text-[22.51px]">{activeSystem.description}</p>
            <Link
              href="/systemes"
              className="inline-flex items-center border-b border-brand-background pb-1 text-[clamp(1.05rem,1.1vw,1.3rem)] font-medium text-brand-background transition-all hover:opacity-100 hover:tracking-wide"
            >
              Voir les systèmes techniques
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative w-full lg:border-l lg:border-brand-background/32">
          <div
            ref={listRef}
            className="overflow-visible lg:max-h-[var(--systems-list-height)] lg:overflow-y-auto lg:pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ ['--systems-list-height' as string]: `${listContainerHeight}px` }}
          >
            {systemsFamilies.map((system, index) => {
              const isActive = index === activeSystemIndex;
              const isMobileExpanded = index === mobileExpandedIndex;

              return (
                <React.Fragment key={system.id}>
                  <button
                    type="button"
                    onClick={() => handleSystemSelect(index)}
                    className={`group relative grid w-full grid-cols-[minmax(0,1fr)_78px] items-start gap-4 border-b border-brand-background/15 px-4 py-3.5 text-left transition-all duration-300 md:grid-cols-[minmax(0,1fr)_108px] md:gap-5 md:px-6 md:py-5 lg:min-h-[124px] lg:grid-cols-[92px_minmax(0,1fr)_108px] ${
                      isMobileExpanded ? 'bg-[rgba(247,245,243,0.16)]' : 'bg-transparent hover:bg-[rgba(247,245,243,0.08)]'
                    } ${isActive ? 'lg:bg-[rgba(247,245,243,0.16)]' : 'lg:bg-transparent'}`}
                  >
                    <div className="lg:hidden">
                      <span className="block text-[2rem] font-normal leading-none text-brand-background">
                        {system.id}
                      </span>
                      <h4 className="mt-3 text-[1.95rem] font-medium leading-[1.18] text-brand-background">
                        {system.title}
                      </h4>
                      <p className="mt-2 text-[0.98rem] font-medium leading-[1.45] text-brand-background/50">
                        {truncateDescription(system.description)}
                      </p>
                    </div>

                    <div className="hidden min-w-[78px] items-center gap-2 md:gap-4 lg:flex">
                      <span className="text-[clamp(2rem,2.75vw,3.1rem)] font-normal leading-none text-brand-background">
                        {system.id}
                      </span>
                      <span
                        className={`h-[1px] bg-brand-background transition-all duration-500 ${
                          isActive ? 'w-16 opacity-100' : 'w-10 opacity-55 group-hover:w-14 group-hover:opacity-100'
                        }`}
                      />
                    </div>

                    <div className="hidden lg:block">
                      <h4 className="text-[20px] font-medium leading-[1.25] text-brand-background md:text-[24px]">
                        {system.title}
                      </h4>
                      <p className="mt-2 max-w-[56ch] text-[15px] font-medium leading-[1.45] text-brand-background/50 md:text-[16px]">
                        {truncateDescription(system.description)}
                      </p>
                    </div>

                    <div className="relative h-[78px] w-[78px] overflow-hidden border border-brand-background/18 md:h-24 md:w-24">
                      <Image
                        src={system.thumbnail}
                        alt={system.title}
                        fill
                        className={`object-cover transition-all duration-500 ${
                          isActive || isMobileExpanded ? 'scale-100 opacity-100' : 'scale-[0.98] opacity-90'
                        }`}
                        sizes="(max-width: 768px) 78px, 96px"
                      />
                    </div>
                  </button>

                  {isMobileExpanded ? (
                    <div className="border-b border-brand-background/15 bg-[rgba(247,245,243,0.1)] px-4 pb-5 pt-4 lg:hidden">
                      <div className="relative aspect-[4/3.85] w-full overflow-hidden">
                        <Image
                          src={currentGalleryImage}
                          alt={activeSystem.title}
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />

                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                          {gallery.map((item, galleryIndex) => (
                            <button
                              key={`${activeSystem.id}-${item}`}
                              type="button"
                              onClick={() => setActiveMediaIndex(galleryIndex)}
                              aria-label={`Afficher le média ${galleryIndex + 1} pour ${activeSystem.title}`}
                              className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${
                                galleryIndex === activeMediaIndex ? 'bg-brand-background' : 'bg-brand-background/28'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mt-5">
                        <h3 className="text-[1.9rem] font-medium leading-[1.15] text-brand-background">
                          {system.id} - {activeSystem.title}
                        </h3>
                        <p className="mt-3 text-[1rem] font-medium leading-[1.45] text-brand-background/75">
                          {activeSystem.description}
                        </p>

                        <p className="mt-5 text-[0.98rem] font-medium text-brand-background/72">
                          Ce que nous analysons
                        </p>
                        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.98rem] leading-[1.45] text-brand-background/82">
                          {activeSystem.analysisPoints.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>

          {systemsFamilies.length > MAX_VISIBLE_ROWS ? (
            <div className="hidden justify-center pt-3 lg:flex">
              <button
                type="button"
                onClick={handleArrowToggle}
                aria-label={canScrollDown ? 'Voir plus de systèmes' : 'Revenir au début des systèmes'}
                className="inline-flex h-10 w-10 items-center justify-center text-brand-background transition-colors hover:text-brand-background/72"
              >
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${
                    canScrollDown ? 'rotate-0' : 'rotate-180'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          ) : null}

          <div className="mt-6 flex justify-center lg:hidden">
            <Link
              href="/systemes"
              className="inline-flex items-center border-b border-brand-background pb-1 text-[1.05rem] font-medium text-brand-background transition-all hover:opacity-100"
            >
              Voir les systèmes techniques
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SystemsSection;
