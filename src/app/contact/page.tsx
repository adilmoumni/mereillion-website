import type { Metadata } from 'next';
import ContactPageSection from '@/components/sections/ContactPageSection';

export const metadata: Metadata = {
  title: 'Contact | Marelion',
  description:
    'Entrez en contact avec Marélion pour toute demande liée à un projet multi-systèmes ou à une exigence technique spécifique.',
};

export default function ContactPage() {
  return <ContactPageSection />;
}
