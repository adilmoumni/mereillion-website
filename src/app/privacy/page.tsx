import type { Metadata } from 'next';
import LegalDocumentSection, { type LegalSection } from '@/components/sections/LegalDocumentSection';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Marelion TS',
  description:
    'Politique de confidentialité de Marelion TS : données collectées, finalités, conservation, sécurité et droits des utilisateurs.',
};

const sections: LegalSection[] = [
  {
    title: 'Introduction',
    paragraphs: [
      'MARELION TS accorde une importance particulière à la protection des données personnelles de ses utilisateurs.',
      'La présente politique de confidentialité explique quelles données sont collectées, comment elles sont utilisées et quels sont les droits des utilisateurs.',
    ],
  },
  {
    title: 'Données collectées',
    paragraphs: ['Dans le cadre de l’utilisation du site, nous pouvons collecter les données suivantes :'],
    bullets: [
      'Nom et prénom',
      'Adresse e-mail',
      'Numéro de téléphone',
      'Nom de l’entreprise',
      'Informations transmises via le formulaire de contact',
      'Adresse IP',
      'Données de navigation',
    ],
  },
  {
    title: 'Finalités de la collecte',
    paragraphs: ['Les données personnelles collectées sont utilisées pour :'],
    bullets: [
      'Répondre aux demandes envoyées via le formulaire de contact',
      'Assurer le suivi client',
      'Améliorer l’expérience utilisateur',
      'Mesurer l’audience du site',
      'Assurer la sécurité du site',
      'Envoyer des communications commerciales si l’utilisateur y a consenti',
    ],
  },
  {
    title: 'Base légale du traitement',
    paragraphs: ['Les traitements de données reposent sur :'],
    bullets: [
      'Le consentement de l’utilisateur',
      'L’exécution d’une relation précontractuelle ou contractuelle',
      'L’intérêt légitime de MARELION TS',
      'Les obligations légales applicables',
    ],
  },
  {
    title: 'Conservation des données',
    paragraphs: [
      'Les données sont conservées pendant une durée strictement nécessaire aux finalités pour lesquelles elles sont collectées, sauf obligation légale contraire.',
    ],
  },
  {
    title: 'Partage des données',
    paragraphs: [
      'Les données personnelles ne sont ni vendues ni louées.',
      'Elles peuvent être transmises uniquement à des prestataires techniques intervenant dans le fonctionnement du site ou à des autorités compétentes lorsque la loi l’exige.',
    ],
  },
  {
    title: 'Sécurité',
    paragraphs: [
      'MARELION TS met en œuvre les mesures techniques et organisationnelles appropriées afin d’assurer la sécurité et la confidentialité des données personnelles.',
    ],
  },
  {
    title: 'Droits des utilisateurs',
    paragraphs: ['Conformément à la réglementation applicable, l’utilisateur dispose des droits suivants :'],
    bullets: [
      'Droit d’accès',
      'Droit de rectification',
      'Droit de suppression',
      'Droit d’opposition',
      'Droit à la limitation du traitement',
      'Toute demande peut être adressée à : [Adresse e-mail de contact]',
    ],
  },
  {
    title: 'Cookies',
    paragraphs: [
      'Le site peut utiliser des cookies afin d’améliorer l’expérience utilisateur et de mesurer l’audience.',
      'L’utilisateur peut configurer son navigateur afin de refuser tout ou partie des cookies.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocumentSection
      eyebrow="Documents légaux"
      title="Politique de confidentialité"
      subtitle="Détails sur les données personnelles susceptibles d’être collectées, leur utilisation et les droits des utilisateurs."
      sections={sections}
    />
  );
}
