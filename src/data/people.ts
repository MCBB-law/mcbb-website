// Attorney roster. DRAFT: the live People page could not be copied automatically,
// so this list is incomplete and titles/bios need to be filled in.
// To add a headshot, drop a JPG in /public/people/ and set `photo: '/people/file.jpg'`.

export type Person = {
  slug: string;
  oldPath?: string;
  name: string;
  title: string;
  practices: string[]; // practice slugs from practices.ts
  email?: string;
  photo?: string;
  bio: string[];
  education?: string[];
  admissions?: string[];
};

export const people: Person[] = [
  {
    slug: 'brent-manning',
    oldPath: '/brent-manning',
    name: 'Brent V. Manning',
    title: 'Founding Partner',
    practices: ['business-litigation'],
    bio: ['Bio to be copied from the current site.'],
  },
  {
    slug: 'alan-bradshaw',
    oldPath: '/alan-bradshaw',
    name: 'Alan C. Bradshaw',
    title: 'Founding Partner',
    practices: ['business-litigation'],
    bio: ['Bio to be copied from the current site.'],
  },
  {
    slug: 'steven-bednar',
    oldPath: '/steven-bednar',
    name: 'Steven C. Bednar',
    title: 'Founding Partner',
    practices: ['business-litigation'],
    bio: ['Bio to be copied from the current site.'],
  },
  {
    slug: 'trevor-lee',
    name: 'Trevor J. Lee',
    title: 'Partner',
    practices: ['bankruptcy-restructuring', 'real-estate-construction', 'business-litigation'],
    email: 'tlee@mc2b.com',
    bio: [
      'Trevor Lee is a litigation partner whose practice focuses on federal bankruptcy litigation and construction disputes. He appears regularly in the United States Bankruptcy Court for the District of Utah, the United States District Court for the District of Utah, and the Tenth Circuit Court of Appeals.',
      'Trevor joined MCBB in 2026.',
    ],
  },
  {
    slug: 'matthew-church',
    oldPath: '/matthew-church',
    name: 'Matthew Church',
    title: 'Attorney',
    practices: [],
    bio: ['Bio to be copied from the current site.'],
  },
  {
    slug: 'carson-fuller',
    oldPath: '/carson-fuller',
    name: 'Carson M. Fuller',
    title: 'Attorney',
    practices: [],
    bio: ['Bio to be copied from the current site.'],
  },
  {
    slug: 'taylor-kordsiemon',
    oldPath: '/taylor-kordsiemon',
    name: 'Taylor Kordsiemon',
    title: 'Attorney',
    practices: [],
    bio: ['Bio to be copied from the current site.'],
  },
];

export const initials = (name: string) => {
  const words = name.split(/\s+/).filter(Boolean);
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};
