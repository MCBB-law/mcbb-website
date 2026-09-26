import { getCollection, type CollectionEntry } from 'astro:content';
import { practices } from './practices';

export type Person = CollectionEntry<'people'>;

// Partners first, then associates; alphabetical by last name within each group.
export async function getPeople(): Promise<Person[]> {
  const all = await getCollection('people');
  const rank = { Partner: 0, 'Of Counsel': 1, Associate: 2 } as const;
  return all.sort(
    (a, b) => rank[a.data.title] - rank[b.data.title] || a.data.lastName.localeCompare(b.data.lastName),
  );
}

// Which practice pages a person belongs on, based on the practice areas in their bio.
export const practiceSlugsFor = (p: Person) =>
  practices.filter((pr) => p.data.practiceAreas.some((a) => pr.match.test(a))).map((pr) => pr.slug);

export const initials = (name: string) => {
  const words = name.replace(/[“”"][^“”"]*[“”"]/g, '').split(/\s+/).filter(Boolean);
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};
