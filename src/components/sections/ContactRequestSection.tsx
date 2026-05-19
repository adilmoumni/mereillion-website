'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  requestType: string;
  description: string;
};

const initialFormState: ContactFormState = {
  fullName: '',
  email: '',
  phone: '',
  requestType: '',
  description: '',
};

const ContactRequestSection = () => {
  const [formState, setFormState] = useState<ContactFormState>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactEmail = 'contact@marelion-ts.com';
  const contactPhone = '+212 664-748172';

  const updateField =
    (field: keyof ContactFormState) =>
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState((previous) => ({ ...previous, [field]: event.target.value }));
        if (isSubmitted) setIsSubmitted(false);
      };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#012f37] via-[#045a67] to-[#067480]">
      <Image
        src="/images/cta_banner_bg/cta_banner_bg.svg"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-contain object-left-bottom opacity-35"
        sizes="100vw"
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-container-gap py-8 sm:py-10 md:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-16">

        <div className="relative z-10 border-b border-brand-background/35 pb-8 lg:border-b-0 lg:pb-0 lg:pt-4">
          <h2 className="max-w-[12ch] text-[clamp(2.15rem,7vw,2.75rem)] font-medium leading-[1.06] tracking-[-0.03em] text-brand-background sm:max-w-[14ch] lg:max-w-full">
            Soumettre une demande
          </h2>

          <p className="mt-5 max-w-[34ch] text-[clamp(1rem,4.2vw,1.6rem)] leading-[1.5] text-[#EEEEEE] lg:max-w-full">
            Notre équipe est disponible pour analyser votre périmètre et vous accompagner avec une approche structurée et confidentielle.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2 md:gap-6">
            <div className="border-t border-brand-background/35 pt-5">
              <p className="text-[clamp(0.95rem,1.2vw,1.2rem)] font-medium uppercase tracking-[0.08em] text-brand-background/70">E-mail</p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-2 block break-all text-[clamp(1.05rem,1.4vw,1.45rem)] font-medium text-brand-background"
              >
                {contactEmail}
              </a>
            </div>

            <div className="border-t border-brand-background/35 pt-5">
              <p className="text-[clamp(0.95rem,1.2vw,1.2rem)] font-medium uppercase tracking-[0.08em] text-brand-background/70">Appelez-nous</p>
              <a
                href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                className="mt-2 block text-[clamp(1.05rem,1.4vw,1.45rem)] font-medium text-brand-background"
              >
                {contactPhone}
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-brand-background/35 pt-6 md:grid-cols-[1fr_1.2fr] md:gap-8 md:pt-8">
            <p className="text-[clamp(0.95rem,1.2vw,1.2rem)] font-medium uppercase tracking-[0.08em] text-brand-background/70">Emplacement</p>
            <p className="max-w-[34ch] text-[clamp(1rem,1.35vw,1.4rem)] font-medium leading-[1.5] text-brand-background md:max-w-[30ch]">
              Angle Av Al Alaouiyine et Av Al Mariniyine Imm Oumniprise 4ème étage E2 D / E2 E Quartier Hassan, Rabat.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-brand-background/35 pt-6 md:grid-cols-[1fr_1.2fr] md:gap-8 md:pt-8">
            <p className="text-[clamp(0.95rem,1.2vw,1.2rem)] font-medium uppercase tracking-[0.08em] text-brand-background/70">Heures d&apos;ouverture</p>
            <div className="space-y-2 text-[clamp(1rem,1.35vw,1.4rem)] font-medium text-white">
              <p className='text-white'>Lundi - Vendredi, 8h00 - 18h00</p>
              <p className='text-white'>Samedi : Fermé</p>
              <p className='text-white'>Dimanche : Fermé</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 bg-[#f2f4f4] p-5 sm:p-6 md:p-8 lg:p-10">
          <h3 className="text-center text-[clamp(1.85rem,2.8vw,2.8rem)] font-medium text-brand-primaryText">
            Contact
          </h3>

          <form className="mt-7 space-y-4 sm:mt-8 sm:space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-full-name" className="mb-2 block text-[0.98rem] font-medium text-brand-secondaryText">
                Nom complet*
              </label>
              <input
                id="contact-full-name"
                required
                value={formState.fullName}
                onChange={updateField('fullName')}
                placeholder="Votre nom"
                className="min-h-[52px] w-full border border-[#d8dada] bg-transparent px-4 py-3 text-[1rem] text-brand-secondaryText placeholder:text-brand-secondaryText/28"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-[0.98rem] font-medium text-brand-secondaryText">
                Adresse e-mail*
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formState.email}
                onChange={updateField('email')}
                placeholder="Votre e-mail"
                className="min-h-[52px] w-full border border-[#d8dada] bg-transparent px-4 py-3 text-[1rem] text-brand-secondaryText placeholder:text-brand-secondaryText/28"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-[0.98rem] font-medium text-brand-secondaryText">
                  Numéro de téléphone
                </label>
                <input
                  id="contact-phone"
                  value={formState.phone}
                  onChange={updateField('phone')}
                  placeholder="Votre numéro de téléphone"
                  className="min-h-[52px] w-full border border-[#d8dada] bg-transparent px-4 py-3 text-[1rem] text-brand-secondaryText placeholder:text-brand-secondaryText/28"
                />
              </div>

              <div>
                <label htmlFor="contact-request-type" className="mb-2 block text-[0.98rem] font-medium text-brand-secondaryText">
                  Type de demande*
                </label>
                <select
                  id="contact-request-type"
                  required
                  value={formState.requestType}
                  onChange={updateField('requestType')}
                  className="min-h-[52px] w-full border border-[#d8dada] bg-transparent px-4 py-3 text-[1rem] text-brand-secondaryText"
                >
                  <option value="" disabled>
                    Type de demande
                  </option>
                  <option value="etude-technique">Étude technique</option>
                  <option value="integration-systemes">Intégration systèmes</option>
                  <option value="qualite-conformite">Qualité & conformité</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="contact-description" className="mb-2 block text-[0.98rem] font-medium text-brand-secondaryText">
                Description du projet
              </label>
              <textarea
                id="contact-description"
                rows={5}
                value={formState.description}
                onChange={updateField('description')}
                placeholder="Décrivez brièvement le contexte, les contraintes principales et le stade du projet..."
                className="w-full resize-y border border-[#d8dada] bg-transparent px-4 py-3 text-[1rem] text-brand-secondaryText placeholder:text-brand-secondaryText/28"
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-full bg-brand-primaryText px-8 py-3 text-button text-brand-background transition-colors hover:bg-brand-secondaryText sm:w-auto"
              >
                Envoyer le message
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-5-5 5 5-5 5" />
                </svg>
              </button>
            </div>

            {isSubmitted ? (
              <p className="text-center text-[1rem] font-medium text-brand-primaryText">
                Message prêt à être envoyé. Nous brancherons les notifications à l&apos;étape suivante.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactRequestSection;
