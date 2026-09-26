// Firm-wide facts used across the site. Edit here, not in individual pages.

// While true, every page gets <meta name="robots" content="noindex"> and a
// small "Preview" ribbon. Set to false on launch day.
export const PREVIEW = true;

export const site = {
  name: 'Manning Curtis Bradshaw & Bednar PLLC',
  shortName: 'MCBB',
  tagline: 'Business litigation where judgment shapes results.',
  description:
    'Manning Curtis Bradshaw & Bednar PLLC is a Salt Lake City business litigation firm blending big-firm experience with small-firm service.',
  founded: 1997,
  address: {
    street: '201 South Main Street, Suite 750',
    city: 'Salt Lake City',
    state: 'UT',
    zip: '84111',
  },
  phone: '801.363.5678',
  phoneHref: 'tel:+18013635678',
  fax: '801.364.5678',
  email: 'info@mc2b.com',
  linkedin: 'https://www.linkedin.com/company/manning-curtis-bradshaw-bednar-pllc/',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=201+South+Main+Street+Suite+750+Salt+Lake+City+UT+84111',
};

export const nav = [
  { href: '/practices/', label: 'Practices' },
  { href: '/people/', label: 'People' },
  { href: '/about/', label: 'About' },
  { href: '/news/', label: 'News' },
  { href: '/careers/', label: 'Careers' },
  { href: '/contact/', label: 'Contact' },
];
