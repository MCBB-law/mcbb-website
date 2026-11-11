// Turns practice-page text into safe HTML. Write a link in the text as [words](/practices/slug/);
// everything else is escaped and shown as plain text.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const inline = (text: string) =>
  esc(text).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, words, href) => `<a href="${href}">${words}</a>`);

// "Talk to our team" sentence: email addresses and the firm phone number become links.
export const contactLine = (text: string) =>
  esc(text)
    .replace(/[\w.+-]+@[\w-]+\.[\w.]+\w/g, (m) => `<a href="mailto:${m}">${m}</a>`)
    .replace(/\b801\.363\.5678\b/g, '<a href="tel:+18013635678">801.363.5678</a>');
