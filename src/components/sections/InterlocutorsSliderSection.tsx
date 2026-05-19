'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SectionWrapper from '../common/SectionWrapper';

type Interlocutor = {
  title: string;
  image: string;
  alt: string;
};

const interlocutors: Interlocutor[] = [
  {
    title: 'Concepteurs et Prescripteurs',
    image: '/images/home_page/home_pics/5.webp',
    alt: 'Façade architecturale contemporaine',
  },
  {
    title: 'Ingénieries & Maîtres d’œuvre',
    image: '/images/home_page/home_pics/6.webp',
    alt: 'Pont moderne et infrastructure',
  },
  {
    title: 'Maîtres d’Ouvrage Institutionnels',
    image: '/images/home_page/home_pics/7.webp',
    alt: 'Bâtiment institutionnel moderne',
  },
  {
    title: 'Directions Achats / Procurement',
    image: '/images/home_page/home_pics/8.webp',
    alt: 'Espace de réunion professionnel',
  },
  {
    title: 'Industriels',
    image: '/images/home_page/home_pics/9-1.webp',
    alt: 'Zone logistique industrielle',
  },
];

const InterlocutorsSliderSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const updateSliderState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const distance = Math.abs(card.offsetLeft - track.scrollLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(nearestIndex);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateSliderState();

    const onScroll = () => updateSliderState();
    const onResize = () => updateSliderState();

    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [updateSliderState]);

  const scrollToIndex = (index: number) => {
    const boundedIndex = Math.min(interlocutors.length - 1, Math.max(0, index));
    const card = cardRefs.current[boundedIndex];
    if (!card) return;

    card.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const handleWheelScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;

    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

    track.scrollLeft += event.deltaY;
    event.preventDefault();
  };

  return (
    <SectionWrapper
      id="interlocuteurs"
      withContainerPadding={false}
      containerClassName="max-w-none"
      className="bg-brand-background"
    >
      <div className="mx-auto mb-card-gap w-full max-w-7xl px-container-gap">
        <h2 className="text-[clamp(1.85rem,2.8vw,3.1rem)] font-medium leading-[1.12] text-brand-secondaryText">
          Nos Interlocuteurs
        </h2>
      </div>

      <div
        ref={trackRef}
        onWheel={handleWheelScroll}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 pl-5 pr-6 scroll-smooth scroll-pl-5 sm:pl-7 sm:pr-8 sm:scroll-pl-7 md:gap-6 md:pl-10 md:pr-10 md:scroll-pl-10 lg:gap-7 lg:pl-14 lg:pr-14 lg:scroll-pl-14 xl:pl-20 xl:pr-20 xl:scroll-pl-20 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {interlocutors.map((item, index) => (
          <article
            key={item.title}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            className="group w-[84vw] min-w-[84vw] shrink-0 snap-start first:ml-2 first:scroll-ml-2 sm:w-[72vw] sm:min-w-[72vw] sm:first:ml-3 sm:first:scroll-ml-3 md:w-[58vw] md:min-w-[58vw] md:first:ml-4 md:first:scroll-ml-4 lg:w-[46vw] lg:min-w-[46vw] lg:first:ml-5 lg:first:scroll-ml-5 xl:w-[40vw] xl:min-w-[40vw] xl:first:ml-6 xl:first:scroll-ml-6"
          >
            <div className="relative aspect-[4/2.9] overflow-hidden rounded-[2px]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                sizes="(max-width: 640px) 84vw, (max-width: 768px) 72vw, (max-width: 1024px) 58vw, (max-width: 1280px) 46vw, 40vw"
              />
            </div>

            <p className="mt-3.5 text-[clamp(0.98rem,0.98vw,1.08rem)] font-medium leading-[1.45] text-brand-secondaryText/90">
              {item.title}
            </p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-card-gap w-full max-w-7xl px-container-gap">
        <div className="flex w-full max-w-[680px] items-center gap-2">
          {interlocutors.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Afficher ${item.title}`}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-brand-primaryText'
                  : 'bg-brand-secondaryText/14 hover:bg-brand-secondaryText/26'
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default InterlocutorsSliderSection;
