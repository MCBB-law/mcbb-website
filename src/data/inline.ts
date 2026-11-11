// Turns practice-page text into safe HTML. Write a link in the text as [words](/practices/slug/);
// everything else is escaped and shown as plain text.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const inline = (text: string) =>
  esc(text).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, words, href) => `<a href="${href}">${words}</a>`);
