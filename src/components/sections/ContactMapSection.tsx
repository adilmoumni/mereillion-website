'use client';

import React from 'react';
import SectionWrapper from '../common/SectionWrapper';

const ContactMapSection = () => {
  return (
    <SectionWrapper id="map" withSectionSpacing={false} className="pb-section pt-section">
      <h2 className="text-[clamp(3rem,5vw,5.1rem)] font-medium leading-[1.06] text-brand-secondaryText">
        Nous trouver sur Map
      </h2>

      <div className="mt-8 overflow-hidden">
        <div className="relative min-h-[360px] w-full md:min-h-[520px]">
          <iframe
            title="Carte de localisation Marélion à Rabat"
            src="https://maps.google.com/maps?q=Angle%20Av%20Al%20Alaouiyine%20et%20Av%20Al%20Mariniyine%2C%20Rabat&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactMapSection;
