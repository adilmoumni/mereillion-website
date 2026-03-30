'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { systemsFamilies } from '@/lib/systemsData';

const MAX_VISIBLE_ROWS = 5;
const LIST_ROW_HEIGHT = 124;

const truncateDescription = (value: string, length = 96) => {
  if (value.length <= length) return value;
  return `${value.slice(0, length).trimEnd()}...`;
};

const SystemsSection = () => {
  const [activeSystemIndex, setActiveSystemIndex] = useState(2);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeSystem = systemsFamilies[activeSystemIndex] ?? systemsFamilies[0];
  const gallery = activeSystem?.gallery?.length ? activeSystem.gallery : activeSystem ? [activeSystem.image] : [];

  const visibleRows = Math.min(MAX_VISIBLE_ROWS, systemsFamilies.length);
  const listContainerHeight = useMemo(() => visibleRows * LIST_ROW_HEIGHT, [visibleRows]);

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

  const updateListState = useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    const maxScroll = Math.max(0, list.scrollHeight - list.clientHeight);
    const nearBottom = list.scrollTop >= maxScroll - 3;
    const nearTop = list.scrollTop <= 3;

    setCanScrollDown(!nearBottom);
    setCanScrollUp(!nearTop);

    const listCenterY = list.scrollTop + list.clientHeight / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const center = item.offsetTop + item.offsetHeight / 2;
      const distance = Math.abs(center - listCenterY);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveSystemIndex((previous) => (previous === nearestIndex ? previous : nearestIndex));
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    updateListState();

    const handleScroll = () => updateListState();
    const handleResize = () => updateListState();

    list.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      list.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateListState]);

  const selectSystem = (index: number) => {
    setActiveSystemIndex(index);
    const row = itemRefs.current[index];
    if (!row) return;

    row.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  };

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

  return (
    <SectionWrapper id="systemes" as="div" className="overflow-hidden bg-brand-accent text-brand-background">
      <div className="mb-section flex justify-end">
        <div className="animate-fade-in max-w-xl text-right">
          <h2 className="mb-title-subtitle text-[clamp(1.7rem,2.5vw,2.8rem)] font-medium uppercase leading-[1.12] text-brand-background">
            NOS FAMILLES DE SYSTÈMES
          </h2>
          <p className="text-[clamp(0.95rem,0.94vw,1rem)] leading-[1.55] text-brand-background/72">
            Chaque famille est abordée comme un système à part entière, avec ses contraintes d&apos;usage, de normes et
            d&apos;exploitation.
          </p>
        </div>
      </div>

      <div className="grid items-start gap-card-gap lg:grid-cols-[0.9fr_1.1fr] lg:gap-section">
        <div className="h-fit w-full lg:sticky lg:top-32">
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
            <h3 className="text-[clamp(1.45rem,1.9vw,2rem)] font-medium leading-[1.2] text-brand-background">{activeSystem.title}</h3>
            <p className="max-w-md text-[clamp(0.95rem,0.94vw,1rem)] leading-[1.55] text-brand-background/72">{activeSystem.description}</p>
            <Link
              href="/systemes"
              className="inline-flex items-center border-b border-brand-background pb-1 text-button text-brand-background transition-all hover:opacity-100 hover:tracking-wide"
            >
              Voir les systèmes techniques
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative w-full border-l border-brand-background/22">
          <div
            ref={listRef}
            className="overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ maxHeight: `${listContainerHeight}px` }}
          >
            {systemsFamilies.map((system, index) => {
              const isActive = index === activeSystemIndex;

              return (
                <button
                  key={system.id}
                  type="button"
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  onClick={() => selectSystem(index)}
                  className={`group relative grid w-full grid-cols-[78px_minmax(0,1fr)_84px] items-center gap-3 border-b border-brand-background/15 px-4 py-3.5 text-left transition-all duration-400 md:grid-cols-[86px_minmax(0,1fr)_92px] md:px-5 ${
                    isActive
                      ? 'bg-[rgba(168,200,207,0.34)]'
                      : 'bg-transparent hover:bg-[rgba(168,200,207,0.18)]'
                  }`}
                  style={{ minHeight: `${LIST_ROW_HEIGHT}px` }}
                >
                  <div className="flex min-w-[78px] items-center gap-2">
                    <span
                      className={`text-[clamp(1.15rem,1.35vw,1.45rem)] font-medium leading-none text-brand-background transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-65'
                      }`}
                    >
                      {system.id}
                    </span>
                    <span
                      className={`h-[1px] bg-brand-background transition-all duration-500 ${
                        isActive ? 'w-16 opacity-100' : 'w-8 opacity-30'
                      }`}
                    />
                  </div>

                  <div>
                    <h4
                      className={`text-[clamp(1.02rem,1.1vw,1.18rem)] font-medium leading-[1.3] text-brand-background transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-75'
                      }`}
                    >
                      {system.title}
                    </h4>
                    <p className="mt-1 max-w-[56ch] text-[clamp(0.84rem,0.86vw,0.92rem)] leading-[1.52] text-brand-background/68">
                      {truncateDescription(system.description)}
                    </p>
                  </div>

                  <div className="relative h-16 w-16 overflow-hidden border border-brand-background/18 md:h-20 md:w-20">
                    <Image
                      src={system.thumbnail}
                      alt={system.title}
                      fill
                      className={`object-cover transition-all duration-500 ${
                        isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-85'
                      }`}
                      sizes="96px"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {systemsFamilies.length > MAX_VISIBLE_ROWS ? (
            <div className="flex justify-center pt-3">
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
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SystemsSection;
