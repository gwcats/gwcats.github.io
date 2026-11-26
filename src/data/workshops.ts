export interface Workshop {
  title: string;
  dates: string;
  place: string;
  venue?: string;
  url: string;
  summary?: string;
  committees?: { name: string; members: string[] }[];
}

// Newest first.
export const workshops: Workshop[] = [
  {
    title: '3rd GWCats Workshop',
    dates: '23–25 November 2026',
    place: 'Toulouse, France',
    venue: 'Maison de la Recherche et de la Valorisation, Université de Toulouse. Hosted by L2IT.',
    url: 'https://indico.in2p3.fr/event/40433/',
    summary:
      'Two days of science on results from ongoing GWCats projects and new directions for the collaboration, followed by a day on its scientific and administrative organisation.',
    committees: [
      {
        name: 'Scientific organising committee',
        members: [
          'Maciej Bilicki (Polish Academy of Sciences)',
          'Maria Lisa Brozzetti (Italian Space Agency)',
          'Kenneth Duncan (University of Edinburgh)',
          'Rachel Gray (University of Glasgow)',
          'Chris Lovell (University of Cambridge)',
          'Isaac Mc Mahon (University of Zurich)',
          'Liana Rauf (Australian National University)',
          'Marcelle Soares dos Santos (University of Zurich)',
        ],
      },
      {
        name: 'Local organising committee',
        members: [
          'John Baker (L2IT, CNRS)',
          'Sylvain Marsat (L2IT, CNRS)',
          'Angelique Souillac (L2IT, CNRS)',
          'Nicola Tamanini (L2IT, CNRS)',
          'Zheng Wu (L2IT, CNRS)',
        ],
      },
    ],
  },
  {
    title: 'Shedding light on dark sirens',
    dates: '22–26 September 2025',
    place: 'Leiden, the Netherlands',
    venue: 'Lorentz Center',
    url: 'https://www.lorentzcenter.nl/shedding-light-on-dark-sirens.html',
  },
  {
    title: 'GWCats: Gravitational Waves – Galaxy Catalogues Cosmology Meeting',
    dates: '26–27 June 2024',
    place: 'Glasgow, United Kingdom',
    venue: 'University of Glasgow',
    url: 'https://indico.in2p3.fr/event/33026/',
  },
];
