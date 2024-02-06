import { createContentLoader } from 'vitepress';

export interface News {
  title: string;
  subtitle: string;
  date: {
    time: number;
    string: string;
  };
  url: string;
  author: string;
  categories: string;
  excerpt?: string;
}

declare const data: News[];

export { data };

export default createContentLoader('news/!(index).md', {
  excerpt: true,
  transform(raw): News[] {
    return raw.map(({ url, frontmatter, excerpt }) => ({
      title: frontmatter.title,
      subtitle: frontmatter.subtitle,
      date: formatDate(frontmatter.date),
      url,
      author: frontmatter.author,
      categories: frontmatter.categories,
      excerpt,
    })).sort((a, b) => b.date.time - a.date.time);
  },
});

function formatDate(raw: string): News['date'] {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
}
