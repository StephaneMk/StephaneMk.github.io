import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');

  return rss({
    title: 'Moïse Stéphane KINYOK | Blog informatique',
    description:
      "Mes articles sur l'analyse de données, les besoins métier et les systèmes d'information.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: '<language>fr-fr</language>',
  });
}
