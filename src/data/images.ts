// Page photos. Source files (full-size Unsplash downloads and the patent PDF) live in /photos on
// Trevor's Mac and are not committed; these are the black-and-white web versions in /public/images.
// Unsplash and Unsplash+ licenses don't require attribution; photographers are listed in CONTENT-NOTES.md.

export type PageImage = { src: string; alt: string; position?: string; fit?: 'cover' | 'contain' };

export const pageImages: Record<string, PageImage> = {
  home: { src: '/images/home.jpg', alt: 'Snow-covered peaks rising out of darkness', position: 'center 72%' },
  about: { src: '/images/about.jpg', alt: 'Clouds pouring over a mountain ridge', position: 'center 40%' },
  people: { src: '/images/people.jpg', alt: 'Fog drifting through a forest below mountain peaks', position: 'center 45%' },
  careers: { src: '/images/careers.jpg', alt: 'A stand of aspen trunks', position: 'center 40%' },
  contact: { src: '/images/contact.jpg', alt: 'The Wasatch Range above the Salt Lake Valley', position: 'center 40%' },
  news: { src: '/images/news.jpg', alt: 'Looking up through bare winter branches', position: 'center' },
};

export const practiceImages: Record<string, PageImage> = {
  index: { src: '/images/practices.jpg', alt: 'Curving white façade of a modern building' },
  'business-litigation': { src: '/images/business-litigation.jpg', alt: 'Stacked stairways on a concrete building' },
  'government-defense': { src: '/images/government-defense.jpg', alt: 'A row of concrete columns' },
  'labor-employment': { src: '/images/labor-employment.jpg', alt: 'Concrete stairs rising along a wall' },
  'insurance-coverage': { src: '/images/insurance-coverage.jpg', alt: 'The curved edge of a dark building against the sky' },
  'intellectual-property': {
    src: '/images/intellectual-property.jpg',
    alt: 'Patent drawing of a V-type engine, J. G. Vincent, U.S. Patent No. 1,424,428 (1922)',
    fit: 'contain',
    position: '50% 42%',
  },
  'real-estate-construction': { src: '/images/real-estate-construction.jpg', alt: 'Steel trusses of a bridge seen from below' },
  'bankruptcy-restructuring': { src: '/images/bankruptcy-restructuring.jpg', alt: 'Curved panels of a building façade' },
  appellate: { src: '/images/appellate.jpg', alt: 'Looking up between two curving towers' },
};
