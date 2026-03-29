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
    <section className="w-full overflow-hidden bg-gradient-to-r from-[#012f37] via-[#045a67] to-[#067480]">
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-container-gap py-10 md:py-14 lg:grid-cols-[1fr_0.97fr] lg:gap-12 lg:py-16">
        <Image
          src="/images/CTA Banner BG/Cta banner BG.svg"
          alt=""
          fill
          aria-hidden
          className="pointer-events-none object-cover opacity-35"
          sizes="100vw"
        />

        <div className="relative z-10 border-b border-brand-background/35 pb-8 lg:border-b-0 lg:pb-0 lg:pt-4">
          <h2 className="max-w-[15ch] text-[clamp(3rem,5vw,5rem)] font-medium leading-[1.05] text-brand-background">
            Soumettre une demande
          </h2>

          <p className="mt-8 max-w-[24ch] text-[clamp(1.45rem,1.95vw,2.2rem)] leading-[1.35] text-brand-background/90">
            Notre équipe est disponible pour analyser votre périmètre et vous accompagner avec une approche structurée et confidentielle.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border-t border-brand-background/35 pt-5">
              <p className="text-[clamp(2.2rem,2.8vw,3rem)] font-medium text-brand-background/80">E-mail</p>
              <p className="mt-3 text-[clamp(1.9rem,2.1vw,2.35rem)] font-medium text-brand-background">
                contact@marelion-ts.com
              </p>
            </div>

            <div className="border-t border-brand-background/35 pt-5">
              <p className="text-[clamp(2.2rem,2.8vw,3rem)] font-medium text-brand-background/80">Appelez-nous</p>
              <p className="mt-3 text-[clamp(1.9rem,2.1vw,2.35rem)] font-medium text-brand-background">
                +212 688 183 034
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 border-t border-brand-background/35 pt-8 md:grid-cols-[1fr_1.2fr]">
            <p className="text-[clamp(2.2rem,2.8vw,3rem)] font-medium text-brand-background/80">Emplacement</p>
            <p className="max-w-[18ch] text-[clamp(1.9rem,2.1vw,2.35rem)] font-medium leading-[1.4] text-brand-background">
              Angle Av Al Alaouiyine et Av Al Mariniyine Imm Oumniprise 4ème étage E2 D / E2 E Quartier Hassan, Rabat.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 border-t border-brand-background/35 pt-8 md:grid-cols-[1fr_1.2fr]">
            <p className="text-[clamp(2.2rem,2.8vw,3rem)] font-medium text-brand-background/80">Heures d&apos;ouverture</p>
            <div className="space-y-2 text-[clamp(1.9rem,2.1vw,2.35rem)] font-medium text-brand-background">
              <p>Lundi - Vendredi, 8h00 - 18h00</p>
              <p>Samedi : Fermé</p>
              <p>Dimanche : Fermé</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 bg-[#f2f4f4] p-6 md:p-8 lg:p-10">
          <h3 className="text-center text-[clamp(2.6rem,3.4vw,4rem)] font-medium text-brand-primaryText">
            Formulaire de contact
          </h3>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-full-name" className="mb-2 block text-[1.8rem] font-medium text-brand-secondaryText">
                Nom complet*
              </label>
              <input
                id="contact-full-name"
                required
                value={formState.fullName}
                onChange={updateField('fullName')}
                placeholder="Votre nom"
                className="w-full border border-[#d8dada] bg-transparent px-4 py-3 text-[1.9rem] text-brand-secondaryText placeholder:text-brand-secondaryText/28"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-[1.8rem] font-medium text-brand-secondaryText">
                Adresse e-mail*
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formState.email}
                onChange={updateField('email')}
                placeholder="Votre e-mail"
                className="w-full border border-[#d8dada] bg-transparent px-4 py-3 text-[1.9rem] text-brand-secondaryText placeholder:text-brand-secondaryText/28"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-[1.8rem] font-medium text-brand-secondaryText">
                  Numéro de téléphone
                </label>
                <input
                  id="contact-phone"
                  value={formState.phone}
                  onChange={updateField('phone')}
                  placeholder="Votre numéro de téléphone"
                  className="w-full border border-[#d8dada] bg-transparent px-4 py-3 text-[1.9rem] text-brand-secondaryText placeholder:text-brand-secondaryText/28"
                />
              </div>

              <div>
                <label htmlFor="contact-request-type" className="mb-2 block text-[1.8rem] font-medium text-brand-secondaryText">
                  Type de demande*
                </label>
                <select
                  id="contact-request-type"
                  required
                  value={formState.requestType}
                  onChange={updateField('requestType')}
                  className="w-full border border-[#d8dada] bg-transparent px-4 py-3 text-[1.9rem] text-brand-secondaryText"
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
              <label htmlFor="contact-description" className="mb-2 block text-[1.8rem] font-medium text-brand-secondaryText">
                Description du projet
              </label>
              <textarea
                id="contact-description"
                rows={5}
                value={formState.description}
                onChange={updateField('description')}
                placeholder="Décrivez brièvement le contexte, les contraintes principales et le stade du projet..."
                className="w-full resize-y border border-[#d8dada] bg-transparent px-4 py-3 text-[1.9rem] text-brand-secondaryText placeholder:text-brand-secondaryText/28"
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-brand-primaryText px-8 py-3 text-button text-brand-background transition-colors hover:bg-brand-secondaryText"
              >
                Envoyer le message
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-5-5 5 5-5 5" />
                </svg>
              </button>
            </div>

            {isSubmitted ? (
              <p className="text-center text-[1.65rem] font-medium text-brand-primaryText">
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
