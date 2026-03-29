import type { Metadata } from 'next';
import SystemsPageSection from '@/components/sections/SystemsPageSection';

export const metadata: Metadata = {
  title: 'Systèmes | Marelion',
  description: 'Découvrez les familles de systèmes techniques de Marelion.',
};

export default function SystemesPage() {
  return <SystemsPageSection />;
}
