// @ts-check
// 블로그 전용 모드 설정: 문서(docs) 플러그인을 끄고 블로그를 사이트 루트에서 서비스한다.
// 참고: https://docusaurus.io/docs/blog#blog-only-mode

import {themes as prismThemes} from 'prism-react-renderer';

const organizationName = 'Software-Development-Soldier';
const projectName = 'blog';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '정보체계관리단 블로그',
  tagline: '정보체계관리단의 기술과 개발 이야기',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages 프로젝트 사이트 주소: https://<org>.github.io/<repo>/
  url: 'https://software-development-soldier.github.io',
  baseUrl: `/${projectName}/`,
  organizationName,
  projectName,
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // .md는 일반 마크다운(CommonMark), .mdx만 MDX로 해석한다.
  // 글 작성자가 `<`, `{` 같은 문자나 HTML 주석 때문에 빌드 오류를 겪지 않게 한다.
  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          blogTitle: '정보체계관리단 블로그',
          blogDescription: '정보체계관리단의 기술과 개발 이야기',
          blogSidebarTitle: '최근 글',
          blogSidebarCount: 10,
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '정보체계관리단 블로그',
        items: [
          {to: '/tags', label: '태그', position: 'left'},
          {to: '/archive', label: '전체 글', position: 'left'},
          {
            href: `https://github.com/${organizationName}/${projectName}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '블로그',
            items: [
              {label: '태그', to: '/tags'},
              {label: '전체 글', to: '/archive'},
            ],
          },
          {
            title: '구독',
            items: [
              {label: 'RSS', href: `pathname:///${projectName}/rss.xml`},
              {label: 'Atom', href: `pathname:///${projectName}/atom.xml`},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 정보체계관리단. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
