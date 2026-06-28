import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://programmableassurance.org',
  integrations: [
    starlight({
      title: 'Programmable Assurance',
      description: 'The discipline of continuously aligning organizational intent with outcomes through executable governance, accountability, evidence, and feedback.',

      logo: {
        light: './src/assets/logo.svg',
        dark:  './src/assets/logo-dark.svg',
        replacesTitle: false,
      },

      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/programmableassurance',
        },
      ],

      sidebar: [
        {
          label: 'The Discipline',
          items: [
            { label: 'What Is Programmable Assurance?', slug: 'definition' },
            { label: 'Manifesto',                       slug: 'manifesto' },
            { label: 'Four Principles',                 slug: 'principles' },
            { label: 'Founding Insight',                slug: 'founding-insight' },
            { label: 'History',                         slug: 'history' },
          ],
        },
        {
          label: 'Category Language',
          items: [
            { label: 'Vocabulary',   slug: 'vocabulary' },
            { label: 'Category Map', slug: 'category-map' },
          ],
        },
        {
          label: 'Knowledge',
          items: [
            { label: 'Research',  slug: 'research' },
            { label: 'News',      slug: 'news' },
          ],
        },
        {
          label: 'Ecosystem',
          items: [
            { label: 'Implementations', slug: 'implementations' },
            { label: 'About',           slug: 'about' },
          ],
        },
      ],

      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap',
          },
        },
      ],
    }),
  ],
});
