import type { Metadata } from 'next';
import LegalDocumentSection, { type LegalSection } from '@/components/sections/LegalDocumentSection';

export const metadata: Metadata = {
  title: 'Politique de cookies | Marelion TS',
  description:
    'Politique de cookies de Marelion TS : types de cookies utilisés et gestion des préférences.',
};

const sections: LegalSection[] = [
  {
    title: 'Qu’est-ce qu’un cookie ?',
    paragraphs: [
      'Un cookie est un petit fichier texte déposé sur le terminal de l’utilisateur lors de la consultation du site internet.',
    ],
  },
  {
    title: 'Cookies strictement nécessaires',
    paragraphs: ['Ils permettent le bon fonctionnement du site.'],
  },
  {
    title: 'Cookies de mesure d’audience',
    paragraphs: [
      'Ils permettent d’analyser l’utilisation du site afin d’améliorer les performances et l’expérience utilisateur.',
    ],
  },
  {
    title: 'Cookies marketing',
    paragraphs: ['Ils peuvent être utilisés afin de proposer des contenus ou publicités adaptés.'],
  },
  {
    title: 'Gestion des cookies',
    paragraphs: [
      'L’utilisateur peut accepter, refuser ou paramétrer les cookies via les paramètres de son navigateur ou le bandeau de consentement affiché sur le site.',
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalDocumentSection
      eyebrow="Documents légaux"
      title="Politique de cookies"
      subtitle="Informations sur les cookies susceptibles d’être utilisés sur le site Marelion TS et sur les moyens de les gérer."
      sections={sections}
    />
  );
}
