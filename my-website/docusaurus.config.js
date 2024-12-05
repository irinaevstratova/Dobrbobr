import { themes as prismThemes } from 'prism-react-renderer';

// Import the necessary plugins
const simplePlantUML = require('@akebifiky/remark-simple-plantuml'); // PlantUML plugin

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site', // Title of the site
  tagline: 'Dinosaurs are cool', // Tagline of the site
  favicon: 'img/favicon.ico', // Favicon
  url: 'https://irinaevstratova.github.io', // GitHub Pages URL
  baseUrl: 'Dobrbobr', // Base URL
  organizationName: 'irinaevstratova', // GitHub username
  projectName: 'Dobrbobr', // Repository name
  onBrokenLinks: 'warn', // Warning for broken links
  onBrokenMarkdownLinks: 'warn', // Warning for broken markdown links
  trailingSlash: false,
  deploymentBranch: 'gh-pages', // Deployment branch

  plugins: [
    ['drawio', {}], // Plugin for drawing diagrams in drawio
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs', // Customize route
          editUrl: 'https://github.com/irinaevstratova/Dobrbobr',
          remarkPlugins: [simplePlantUML], // Add PlantUML plugin for UML diagrams
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/irinaevstratova/Dobrbobr',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    // OpenAPI integration with Redocusaurus
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'specification',
            spec: 'api_specs/openapi.yaml',
          },
          {
            id: 'specification_asyncapi',
            spec: 'api_specs/asyncapi.yaml',
          },
        ],
        theme: {
          primaryColor: '#1890ff', // Customize Redocusaurus theme color
        },
      },
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/irinaevstratova/Dobrbobr',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
