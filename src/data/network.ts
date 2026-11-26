// Source: CORDIS, https://cordis.europa.eu/project/id/101299291
export interface Organisation {
  name: string;
  country: string;
  url: string;
}

export const coordinator: Organisation = {
  name: 'Centre National de la Recherche Scientifique (CNRS)',
  country: 'France',
  url: 'https://www.cnrs.fr',
};

export const beneficiaries: Organisation[] = [
  { name: 'Ghent University', country: 'Belgium', url: 'https://www.ugent.be' },
  { name: 'Max Planck Society', country: 'Germany', url: 'https://www.mpg.de' },
  { name: 'Eötvös Loránd University', country: 'Hungary', url: 'https://www.elte.hu' },
  { name: 'Istituto Nazionale di Fisica Nucleare (INFN)', country: 'Italy', url: 'https://www.infn.it' },
  { name: 'Center for Theoretical Physics, Polish Academy of Sciences', country: 'Poland', url: 'https://www.cft.edu.pl' },
  { name: 'Institut de Física d’Altes Energies (IFAE)', country: 'Spain', url: 'https://www.ifae.es' },
  { name: 'University of Geneva', country: 'Switzerland', url: 'https://www.unige.ch' },
  { name: 'University of Zurich', country: 'Switzerland', url: 'https://www.uzh.ch' },
  { name: 'University of Cambridge', country: 'United Kingdom', url: 'https://www.cam.ac.uk' },
  { name: 'University of Glasgow', country: 'United Kingdom', url: 'https://www.gla.ac.uk' },
  { name: 'University of Portsmouth', country: 'United Kingdom', url: 'https://www.port.ac.uk' },
];

export const associatedPartners: Organisation[] = [
  { name: 'Australian National University', country: 'Australia', url: 'https://www.anu.edu.au' },
  { name: 'University of São Paulo', country: 'Brazil', url: 'https://www.usp.br' },
  { name: 'Inter-University Centre for Astronomy and Astrophysics (IUCAA)', country: 'India', url: 'https://www.iucaa.in' },
  { name: 'University of Tokyo', country: 'Japan', url: 'https://www.u-tokyo.ac.jp' },
  { name: 'Seoul National University of Science and Technology', country: 'South Korea', url: 'https://www.seoultech.ac.kr' },
  { name: 'Carnegie Mellon University', country: 'United States', url: 'https://www.cmu.edu' },
  { name: 'University of Chicago', country: 'United States', url: 'https://www.uchicago.edu' },
];

const all = [coordinator, ...beneficiaries, ...associatedPartners];
const unique = (orgs: Organisation[]) => [...new Set(orgs.map((o) => o.country))];

export const organisationCount = all.length;
export const countryCount = unique(all).length;
export const associatedCountries = unique(associatedPartners);
