'use client';

import React, { useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';

const systems = [
  {
    id: '01',
    title: 'Mobilier & Agencement',
    description: 'Aménagements intégrant ergonomie, résistance à l&apos;usage intensif et conformité aux exigences ERP...',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Décoration & Éclairage Architectural',
    description: 'Systèmes d&apos;éclairage analysés selon performance lumineuse, confort visuel et conformité électrique.',
    image: 'https://images.unsplash.com/photo-1507412893552-02f5ee29331f?q=80&w=2070&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1507412893552-02f5ee29331f?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Sols, Murs & Plafonds',
    description: 'Aménagements intégrant ergonomie, résistance à l&apos;usage intensif et conformité aux exigences ERP.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Sanitaires & Cuisines',
    description: 'Aménagements intégrant ergonomie, résistance à l&apos;usage intensif et conformité aux exigences ERP...',
    image: 'https://images.unsplash.com/photo-1556911220-e1502235853d?q=80&w=2070&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1556911220-e1502235853d?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: '05',
    title: 'Vitrages, Aluminium & Séparations',
    description: 'Aménagements intégrant ergonomie, résistance à l&apos;usage intensif et conformité aux exigences ERP...',
    image: 'https://images.unsplash.com/photo-1503387762-592be5a52680?q=80&w=2070&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1503387762-592be5a52680?q=80&w=150&auto=format&fit=crop',
  },
];

const SystemsSection = () => {
  const [activeSystem, setActiveSystem] = useState(systems[2]); // Default to Sols, Murs & Plafonds

  return (
    <div className="bg-primary text-white py-32 overflow-hidden">
      <SectionWrapper as="div">
        {/* Header Section from Mockup */}
        <div className="flex justify-end mb-24">
          <div className="max-w-xl text-right animate-fade-in">
            <h2 className="text-h2 md:text-hero font-heading font-bold mb-6 leading-tight uppercase">
              NOS FAMILLES DE SYSTÈMES
            </h2>
            <p className="text-body md:text-h3 opacity-70 font-body leading-relaxed">
              Chaque famille est abordée comme un système à part entière, avec ses contraintes d&apos;usage, de normes et d&apos;exploitation.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          {/* Left Panel - Hero Visual */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-fit">
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden mb-12 shadow-2xl animate-fade-in">
              <Image 
                src={activeSystem.image} 
                alt={activeSystem.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Progress Stepper in Image */}
              <div className="absolute bottom-8 left-8 right-8 flex gap-2">
                {systems.map((s) => (
                  <div 
                    key={s.id}
                    className={`h-1 flex-grow transition-all duration-500 rounded-full ${s.id === activeSystem.id ? 'bg-white' : 'bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in-up">
              <h3 className="text-h3 md:text-h2 font-bold mb-4">{activeSystem.title}</h3>
              <p className="text-body opacity-70 leading-relaxed max-w-md">
                {activeSystem.description}
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-white border-b border-white pb-1 font-bold hover:opacity-100 transition-all hover:tracking-wide group"
              >
                Voir les systèmes techniques
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Navigation Steppers */}
          <div className="w-full lg:w-7/12 flex flex-col items-stretch border-l border-white/10">
            {systems.map((system) => (
              <button
                key={system.id}
                onClick={() => setActiveSystem(system)}
                className={`group relative text-left py-10 px-12 border-b border-white/10 transition-all duration-500 flex items-center justify-between ${
                  activeSystem.id === system.id 
                    ? 'bg-white/5 border-l-4 border-l-white' 
                    : 'hover:bg-white/5 border-l-4 border-l-transparent'
                }`}
              >
                <div className="flex items-center gap-8">
                  {/* Number and Line */}
                  <div className="flex items-center gap-6 min-w-[100px]">
                    <span className={`text-h3 font-heading font-medium transition-all duration-300 ${activeSystem.id === system.id ? 'opacity-100' : 'opacity-40'}`}>
                      {system.id}
                    </span>
                    <div className={`h-[1px] bg-white transition-all duration-700 ${activeSystem.id === system.id ? 'w-16 opacity-100' : 'w-8 opacity-20'}`} />
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    <h4 className={`text-h3 md:text-h2 font-bold transition-all duration-500 ${activeSystem.id === system.id ? 'opacity-100' : 'opacity-50'}`}>
                      {system.title}
                    </h4>
                    <p className={`text-small transition-all duration-700 max-w-sm mt-3 overflow-hidden ${
                      activeSystem.id === system.id ? 'max-h-24 opacity-60' : 'max-h-0 opacity-0'
                    }`}>
                      {system.description}
                    </p>
                  </div>
                </div>

                {/* Animated Thumbnail Card */}
                <div className={`relative hidden md:block w-28 h-28 rounded-xl overflow-hidden shadow-2xl transition-all duration-700 delay-75 transform ${
                  activeSystem.id === system.id ? 'translate-x-0 scale-100 opacity-100 rotate-0' : 'translate-x-8 scale-75 opacity-0 -rotate-6'
                }`}>
                  <Image 
                    src={system.thumbnail} 
                    alt={system.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </button>
            ))}

            {/* Bottom Indicator */}
            <div className="flex justify-center pt-12 opacity-30 animate-bounce">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7" />
               </svg>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SystemsSection;
