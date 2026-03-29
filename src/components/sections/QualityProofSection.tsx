import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Link from 'next/link';

const qualityCards = [
  {
    title: 'Des procédures de contrôle formalisées',
    description: 'Chaque étape de votre projet est soumise à un protocole de validation strict pour garantir une exécution sans faille.',
    link: '#',
  },
  {
    title: 'Une documentation technique complète',
    description: 'Une traçabilité intégrale de tous les systèmes et composants, centralisée pour un pilotage efficace et pérenne.',
    link: '#',
  },
  {
    title: 'Vérifications ciblées à chaque étape',
    description: 'Des audits réguliers et des tests de performance pour assurer la conformité normative et la sécurité des ouvrages.',
    link: '#',
  },
];

const QualityProofSection = () => {
  return (
    <SectionWrapper className="bg-brand-background">
      <div className="mb-section flex flex-col justify-between gap-card-gap md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-brand-primaryText">
            Qualité & Conformité
          </span>
          <h2 className="type-title">
            La qualité se démontre par la preuve
          </h2>
          <p className="mt-title-subtitle max-w-xl text-body">
            Pour Marélion, la conformité n&apos;est pas une déclaration, mais un processus continu de validation au service de la performance.
          </p>
        </div>
        
        <Link 
          href="#" 
          className="group inline-flex items-center text-button text-brand-primaryText transition-transform hover:translate-x-1"
        >
          Approfondir notre démarche qualité
          <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-card-gap md:grid-cols-3">
        {qualityCards.map((card) => (
          <div 
            key={card.title} 
            className="flex h-full flex-col rounded-2xl border border-brand-secondaryText/10 bg-brand-background p-10 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="mb-title-subtitle text-body-display font-medium text-brand-secondaryText">
              {card.title}
            </h3>
            <p className="mb-card-gap flex-grow text-body">
              {card.description}
            </p>
            <Link 
              href={card.link}
              className="mt-auto inline-flex items-center text-button text-brand-primaryText hover:underline"
            >
              En savoir plus
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default QualityProofSection;
