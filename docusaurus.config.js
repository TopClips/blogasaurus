const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'General Support Blog',
  tagline: 'A blog by General Support',
  url: 'https://blogasaurus.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'topclips', // Usually your GitHub org/user name.
  projectName: 'blogasaurus', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    gtag: {
      trackingID: "G-R5V7R63B0J",
    },
    metadatas: [
      {
        property: 'og:image',
        content: 'https://avatars.githubusercontent.com/u/35087196?v=4',
      },
      {name: 'twitter:card', content: 'https://avatars.githubusercontent.com/u/35087196?v=4'},
      {
        name: 'twitter:image',
        content: 'https://avatars.githubusercontent.com/u/35087196?v=4',
      },
      {name: 'twitter:site', content: '@battleofplassey'},
    ],
    announcementBar: {
      id: "support_us",
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
     content: `Thanks for showing your intrest in our blog ❤️`
    },
    navbar: {
      hideOnScroll: true,
      // title: 'General Support',
      logo: {
        alt: 'Blogasaurus Logo',
        src: 'img/blogasaurus_primary.svg',
      },
      items: [
        // {to: '/', label: 'Blog', position: 'left'},

        {
          type: 'doc',
          docId: 'tos',
          position: 'left',
          label: 'Articles',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'My Site Logo',
        src: 'img/blogasaurus_secondary.svg'
      },
      links: [
      
        {
          title: 'Social',
          items: [
             {
              label: 'Website',
              href: 'https://general-support.vercel.app',
            },
             {
              label: 'Blog',
              href: 'https://general-support-blog.vercel.app',
            },
            {
              label: 'TOS',
              href: 'https://general-support-blog.vercel.app/docs/tos',
            },
            {
              label: 'Privacy Policy',
              href: 'https://general-support-blog.vercel.app/docs/privacy',
            }
          ],
        },
        {
          title: 'Navigation',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Articles',
              to: '/docs/tos',
            },
          ]},
          {
            title: 'other Projects',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Nb4QGk8EgW',
              }
            ],
          },
        
      ],
      copyright: `Blogasaurus by Palash Shrivastava`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      apiKey: '3534e2d1d881a10081025373d8f2375c',
      indexName: 'dev-blog',
      appId: '2KDKKFPT4A',
      placeholder: 'Search...'
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
               },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          routeBasePath: '/',
          blogTitle: 'General Support Blog',
          blogDescription: 'A blog by General Support',
          // editUrl:
          //   'https://github.com/TopClips/blogasaurus/edit/master/website/blog/',
          path: 'blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Blog Posts',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Blogasaurus by Palash Shrivastava`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
