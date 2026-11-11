// Page photos. Source files (full-size Unsplash downloads and the patent PDF) live in /photos on
// Trevor's Mac and are not committed; these are the black-and-white web versions in /public/images.
// Unsplash and Unsplash+ licenses don't require attribution; photographers are listed in CONTENT-NOTES.md.

export type PageImage = { src: string; alt: string; position?: string; fit?: 'cover' | 'contain' };

export const pageImages: Record<string, PageImage> = {
  home: { src: '/images/home.jpg', alt: 'Fog drifting through a forest below mountain peaks', position: 'center 20%' },
  about: { src: '/images/about.jpg', alt: 'Layered mountain ridges fading into mist', position: 'center 40%' },
  people: { src: '/images/people.jpg', alt: 'A granite cliff face lit by the sun against a dark sky', position: 'center 30%' },
  careers: { src: '/images/careers.jpg', alt: 'A single mountain peak rising above a sea of clouds', position: 'center 40%' },
  contact: { src: '/images/contact.jpg', alt: 'The Wasatch Range above the Salt Lake Valley', position: 'center 40%' },
  news: { src: '/images/news.jpg', alt: 'Morning sun breaking through fog over a pine forest', position: 'center 55%' },
};

export const practiceImages: Record<string, PageImage> = {
  index: { src: '/images/practices.jpg', alt: 'Curving white façade of a modern building' },
  'business-litigation': { src: '/images/business-litigation.jpg', alt: 'Stacked stairways on a concrete building' },
  'government-defense': { src: '/images/government-defense.jpg', alt: 'A concrete civic building seen from below, its upper floors stepping outward', position: 'center top' },
  'labor-employment': { src: '/images/labor-employment.jpg', alt: 'A tall tower with rows of windows rising into a white sky', position: 'center top' },
  'insurance-coverage': { src: '/images/insurance-coverage.jpg', alt: 'The curved edge of a dark building against the sky' },
  'intellectual-property': { src: '/images/intellectual-property.jpg', alt: 'Dark glass panels crossed by streaks of light' },
  'real-estate-construction': { src: '/images/real-estate-construction.jpg', alt: 'A concrete grid of beams seen from below against the sky' },
  'bankruptcy-restructuring': { src: '/images/bankruptcy-restructuring.jpg', alt: 'The angular concrete corner of a building with cut-out openings' },
  appellate: { src: '/images/appellate.jpg', alt: 'Looking up between two curving towers' },
  'utah-local-counsel': { src: '/images/utah-local-counsel.jpg', alt: 'Two stone-clad towers with tall dark windows against a pale sky', position: 'center 70%' },
};
