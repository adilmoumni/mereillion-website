export type SystemsFamily = {
  id: string;
  slug: string;
  title: string;
  description: string;
  analysisPoints: string[];
  focus: string[];
  image: string;
  thumbnail: string;
  gallery: string[];
};

export const systemsFamilies: SystemsFamily[] = [
  {
    id: '01',
    slug: 'mobilier-agencement',
    title: 'Mobilier & Agencement',
    description:
      'Aménagements intégrant ergonomie, résistance à l\'usage intensif et conformité aux exigences ERP.',
    analysisPoints: [
      'Contraintes d\'usage, maintenance et durabilité',
      'Exigences d\'accessibilité et de sécurité',
      'Cohérence avec les autres lots techniques',
    ],
    focus: ['Maintenance', 'ERP', 'Usage'],
    image: '/images/systemes/mobilier/1.webp',
    thumbnail: '/images/systemes/mobilier/2.webp',
    gallery: [
      '/images/systemes/mobilier/1.webp',
      '/images/systemes/mobilier/2.webp',
      '/images/systemes/mobilier/3.webp',
      '/images/systemes/mobilier/4.webp',
      '/images/systemes/mobilier/5.webp',
    ],
  },
  {
    id: '02',
    slug: 'decoration-eclairage',
    title: 'Décoration & Éclairage Architectural',
    description:
      'Systèmes décoratifs et lumineux calibrés pour le confort visuel, le rendu architectural et la maintenance.',
    analysisPoints: [
      'Qualité du flux lumineux et niveaux d\'éclairement',
      'Résistance des finitions et entretien courant',
      'Intégration technique avec les autres réseaux',
    ],
    focus: ['Lumière', 'Confort', 'Intégration'],
    image: '/images/systemes/decoration/1.webp',
    thumbnail: '/images/systemes/decoration/2.webp',
    gallery: [
      '/images/systemes/decoration/1.webp',
      '/images/systemes/decoration/2.webp',
      '/images/systemes/decoration/3.webp',
      '/images/systemes/decoration/4.webp',
      '/images/systemes/decoration/5.webp',
    ],
  },
  {
    id: '03',
    slug: 'sols-murs-plafonds',
    title: 'Sols, Murs & Plafonds',
    description:
      'Enveloppes intérieures analysées selon durabilité, acoustique, résistance et continuité esthétique.',
    analysisPoints: [
      'Résistance à l\'usure et fréquence de maintenance',
      'Performance acoustique selon les usages',
      'Compatibilité avec les contraintes techniques et normatives',
    ],
    focus: ['Durabilité', 'Acoustique', 'Maintenance'],
    image: '/images/systemes/sols/1.webp',
    thumbnail: '/images/systemes/sols/2.webp',
    gallery: [
      '/images/systemes/sols/1.webp',
      '/images/systemes/sols/2.webp',
      '/images/systemes/sols/3.webp',
      '/images/systemes/sols/4.webp',
      '/images/systemes/sols/5.webp',
      '/images/systemes/sols/6.webp',
    ],
  },
  {
    id: '04',
    slug: 'sanitaires-cuisines',
    title: 'Sanitaires & Cuisines',
    description:
      'Solutions sanitaires et culinaires conçues pour l\'hygiène, la sécurité et la continuité d\'exploitation.',
    analysisPoints: [
      'Normes d\'hygiène, nettoyage et sécurité sanitaire',
      'Ergonomie d\'usage pour les équipes et les usagers',
      'Fiabilité des équipements en exploitation continue',
    ],
    focus: ['Hygiène', 'Sécurité', 'Exploitation'],
    image: '/images/systemes/sanitaires/1.webp',
    thumbnail: '/images/systemes/sanitaires/2.webp',
    gallery: [
      '/images/systemes/sanitaires/1.webp',
      '/images/systemes/sanitaires/2.webp',
      '/images/systemes/sanitaires/3.webp',
      '/images/systemes/sanitaires/4.webp',
      '/images/systemes/sanitaires/5.webp',
    ],
  },
  {
    id: '05',
    slug: 'vitrages-aluminium-separations',
    title: 'Vitrages, Aluminium & Séparations',
    description:
      'Cloisonnements et enveloppes vitrées étudiés selon isolation, performance et contraintes structurelles.',
    analysisPoints: [
      'Performance thermique et acoustique des vitrages',
      'Contraintes mécaniques et stabilité des ouvrages',
      'Compatibilité avec les autres systèmes techniques',
    ],
    focus: ['Isolation', 'Performance', 'Cloisonnement'],
    image: '/images/systemes/vitrages/1.webp',
    thumbnail: '/images/systemes/vitrages/2.webp',
    gallery: [
      '/images/systemes/vitrages/1.webp',
      '/images/systemes/vitrages/2.webp',
    ],
  },
  {
    id: '06',
    slug: 'equipements-techniques-integres',
    title: 'Équipements Techniques Intégrés',
    description:
      'Interfaces techniques intégrées pilotées pour sécuriser fiabilité, coordination multi-lots et mise en service.',
    analysisPoints: [
      'Performance attendue des équipements et interfaces',
      'Coordination inter-lots et cohérence fonctionnelle',
      'Conditions de maintenance et disponibilité long terme',
    ],
    focus: ['Coordination', 'Fiabilité', 'Mise en service'],
    image: '/images/systemes/equipements/1.webp',
    thumbnail: '/images/systemes/equipements/2.webp',
    gallery: [
      '/images/systemes/equipements/1.webp',
      '/images/systemes/equipements/2.webp',
      '/images/systemes/equipements/3.webp',
      '/images/systemes/equipements/4.webp',
    ],
  },
];
