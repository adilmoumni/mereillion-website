import React from 'react';
import Button from '../common/Button';

const FooterCtaSection = () => {
  return (
    <section className="w-full">
      <div className="grid min-h-[520px] grid-cols-1 md:grid-cols-2">
        <div className="flex items-center bg-brand-primaryText px-6 py-14 sm:px-10 md:py-16 lg:px-16">
          <div className="max-w-2xl">
            <h2 className="text-header-1 font-medium leading-tight text-brand-background">
              Échanger sur un périmètre technique
            </h2>

            <p className="mt-title-subtitle max-w-xl text-body leading-relaxed text-brand-background/80">
              Pour toute demande relative à un projet multi-systèmes ou à une exigence technique spécifique.
            </p>

            <div className="mt-card-gap">
              <Button variant="light" size="lg" className="border-transparent shadow-lg">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>

        <div className="relative min-h-[320px] bg-brand-background">
          <div className="absolute inset-0 flex items-center justify-center bg-brand-secondaryText/8 p-8">
            <div className="rounded-2xl border-2 border-dashed border-brand-secondaryText/30 px-8 py-10 text-center">
              <p className="text-button text-brand-secondaryText/60">Image Placeholder</p>
              <p className="mt-2 text-sm font-medium text-brand-secondaryText/45">
                Ajoutez votre image ici
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCtaSection;
