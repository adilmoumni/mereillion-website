'use client';

import React from 'react';
import PageHeroImageSection from './PageHeroImageSection';
import ContactRequestSection from './ContactRequestSection';
import ContactMapSection from './ContactMapSection';

const ContactPageSection = () => {
  return (
    <div className="bg-[#f2f4f4] pb-section pt-24 text-brand-secondaryText md:pt-28">
      <PageHeroImageSection
        badgeLabel="Contact"
        title="Entrer en contact avec Marélion"
        subtitle="Pour toute demande relative à un projet multi-systèmes ou à une exigence technique spécifique."
        primaryAction={{ label: 'Télécharger la brochure', href: '#' }}
      />
      <div className="h-6 w-full md:h-10" />

      <ContactRequestSection />
      <ContactMapSection />
    </div>
  );
};

export default ContactPageSection;
