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

        { icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/programmableassurance', }
      ],

      sidebar: [
        {
          label: 'The Discipline',
          items: [
            { label: 'What Is Programmable Assurance?', link: '/definition' },
            { label: 'Manifesto',                       link: '/manifesto' },
            { label: 'Four Principles',                 link: '/principles' },
            { label: 'Founding Insight',                link: '/founding-insight' },
            { label: 'History',                         link: '/history' },
          ],
        },
        {
          label: 'Framework',
          items: [
            { label: 'The Programmable Assurance Framework, link: '/docs/framework/index' },
            { label: 'Foundations',                       link: '/docs/framework/foundations' },
            { label: 'Four Principles',                 link: '/principles' },
            { label: 'Founding Insight',                link: '/founding-insight' },
            { label: 'History',                         link: '/history' },
          ],
        },
        {
          label: 'Category Language',
          items: [
            { label: 'Vocabulary',   link: '/vocabulary' },
            { label: 'Category Map', link: '/category-map' },
          ],
        },
        {
          label: 'Knowledge',
          items: [
            { label: 'Research',  link: '/research' },
            { label: 'News',      link: '/news' },
          ],
        },
        {
          label: 'Ecosystem',
          items: [
            { label: 'Implementations', link: '/implementations' },
            { label: 'About',           link: '/about' },
          ],
        },
      ],
    }),
  ],
});
