'use client';

import React from 'react';
import SectionWrapper from '../common/SectionWrapper';

const ContactMapSection = () => {
  return (
    <SectionWrapper id="map" withSectionSpacing={false} className="pb-section pt-section">
      <h2 className="max-w-[12ch] text-[clamp(2.1rem,5vw,4.4rem)] font-medium leading-[1.06] tracking-[-0.03em] text-brand-secondaryText lg:max-w-none">
        Nous trouver sur Map
      </h2>

      <div className="mt-6 overflow-hidden md:mt-8">
        <div className="relative min-h-[300px] w-full sm:min-h-[340px] md:min-h-[520px]">
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
