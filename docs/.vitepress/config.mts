import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'phoenix.dev',
  description: '个人文章、随笔、学习记录、项目记录与工具收藏。',
  base: '/phoenix.dev/',
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],
  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: 'phoenix.dev',
    nav: [
      { text: '首页', link: '/' },
      { text: '随笔', link: '/notes/' },
      { text: '学习', link: '/study/' },
      { text: '项目', link: '/projects/' },
      { text: '工具', link: '/tools/' },
      { text: '关于我', link: '/about' }
    ],
    sidebar: {
      '/notes/': [
        {
          text: '随笔',
          items: [
            { text: '随笔总览', link: '/notes/' },
            { text: '第一篇随笔', link: '/notes/my-first-note' }
          ]
        }
      ],
      '/study/': [
        {
          text: '学习',
          items: [
            { text: '学习总览', link: '/study/' },
            { text: 'VitePress 学习记录', link: '/study/vitepress-notes' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '项目',
          items: [
            { text: '项目总览', link: '/projects/' },
            { text: 'phoenix.dev 建站记录', link: '/projects/phoenix-dev' }
          ]
        }
      ],
      '/tools/': [
        {
          text: '工具 / 收藏',
          items: [
            { text: '工具总览', link: '/tools/' },
            { text: '内容写作工具箱', link: '/tools/writing-toolbox' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本文目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    editLink: {
      pattern: 'https://github.com/EndOfNirvana/phoenix.dev/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/EndOfNirvana/phoenix.dev' }
    ],
    footer: {
      message: 'Built with VitePress.',
      copyright: 'Copyright © 2026 EndOfNirvana'
    }
  }
})
