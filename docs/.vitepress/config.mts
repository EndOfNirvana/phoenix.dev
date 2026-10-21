import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '世末涅槃',
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
    logo: '/images/logo-infinity.svg',
    siteTitle: '世末涅槃',
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
            { text: 'phoenix.dev 建站记录', link: '/projects/phoenix-dev' },
            {
              text: '小论文写作',
              link: '/projects/paper-writing/',
              collapsed: false,
              items: [
                { text: '流程总览', link: '/projects/paper-writing/' },
                { text: '第一节 了解领域', link: '/projects/paper-writing/01-understand-field' },
                { text: '第二节 了解方法', link: '/projects/paper-writing/02-understand-methods' },
                { text: '第三节 粗略组合思路', link: '/projects/paper-writing/03-form-ideas' },
                { text: '第四节 细化组合思路', link: '/projects/paper-writing/04-refine-ideas' },
                { text: '第五节 验证', link: '/projects/paper-writing/05-validate' },
                { text: '第六节 完成代码', link: '/projects/paper-writing/06-implement' },
                { text: '第七节 撰写中文初稿', link: '/projects/paper-writing/07-chinese-draft' },
                { text: '第八节 翻译英文初稿', link: '/projects/paper-writing/08-english-draft' },
                { text: '第九节 打磨稿件', link: '/projects/paper-writing/09-revise' },
                { text: '第十节 投稿', link: '/projects/paper-writing/10-submit' }
              ]
            }
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
