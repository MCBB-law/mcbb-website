import { getCollection, type CollectionEntry } from 'astro:content';
import { practices } from './practices';

export type Person = CollectionEntry<'people'>;

// Everyone in one list, alphabetical by last name (partners and associates together).
export async function getPeople(): Promise<Person[]> {
  const all = await getCollection('people');
  return all.sort((a, b) => a.data.lastName.localeCompare(b.data.lastName));
}

// Which practice pages a person belongs on, based on the practice areas in their bio.
export const practiceSlugsFor = (p: Person) =>
  practices.filter((pr) => p.data.practiceAreas.some((a) => pr.match.test(a))).map((pr) => pr.slug);

export const initials = (name: string) => {
  const words = name.replace(/[“”"][^“”"]*[“”"]/g, '').split(/\s+/).filter(Boolean);
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};
