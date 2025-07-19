import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "阿波波的博客",
  description: "阿波波写博客的地方",
  base: '/blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '学习随笔', link: '/markdown-examples' },
      { 
        text: '前端主流技术',
        items: [
          { text: 'Vue', link: '/vue/outline' },
          { text: 'React', link: '/react/outline' },
          { text: '小程序', link: '/mini-program/outline' },
          { text: 'Node', link: '/node/outline' },
        ]
      },
      { 
        text: '工程化',
        items: [
          { text: '前端工程化', link: '/engineering/outline'},
          { text: '浏览器', link: '/browser/outline' },
        ]
      },
      { text: 'Git', link: '/git/outline' },
      { text: '算法', link: '/algorithm/outline' },
      { text: '设计模式', link: '/design-pattern/outline'},
      { text: '其他', link: '/other/outline' }
    ],

    sidebar: {
      '/markdown-examples': [
        {
          text: '学习随笔',
          items: [
            { text: 'Markdown 语法', link: '/markdown-syntax' },
            { text: 'Markdown 扩展', link: '/markdown-extensions' }
          ]
        }
      ],
      '/git/outline': [
        {
          text: '无敌Git之路',
          items: [
            { text: 'git 大纲', link: '/git/outline' },
            { text: 'git 基础配置', link: '/git/basic-config' },
            { text: 'git 工作区和暂存区', link: '/git/workspace-staging' },
            { text: 'git 分支管理', link: '/git/branch-management' },
            { text: 'git 远程仓库', link: '/git/remote-repo' },
            { text: 'git 标签管理', link: '/git/tag-management' },
            { text: 'git 工作流', link: '/git/workflow' },
            { text: 'git 高级技巧', link: '/git/advanced-skills' }
          ]
        }
      ],
      '/vue/outline': [
        {
          text: 'Vue 学习指南',
          items: [
            { text: 'Vue 基础', link: '/vue/basics' },
            { text: '组件开发', link: '/vue/components' },
            { text: '状态管理', link: '/vue/state-management' },
            { text: '路由', link: '/vue/router' }
          ]
        }
      ],
      '/react/outline': [
        {
          text: 'React 学习指南',
          items: [
            { text: 'React 基础', link: '/react/basics' },
            { text: 'Hooks', link: '/react/hooks' },
            { text: '状态管理', link: '/react/state-management' },
            { text: '路由', link: '/react/router' }
          ]
        }
      ],
      '/node/outline': [
        {
          text: 'Node.js 学习指南',
          items: [
            { text: 'Node 基础', link: '/node/basics' },
            { text: 'Express', link: '/node/express' },
            { text: '数据库', link: '/node/database' },
            { text: '性能优化', link: '/node/performance' }
          ]
        }
      ],
      '/algorithm/outline': [
        {
          text: '算法学习指南',
          items: [
            { text: '数据结构', link: '/algorithm/data-structures' },
            { text: '排序算法', link: '/algorithm/sorting' },
            { text: '搜索算法', link: '/algorithm/searching' },
            { text: '动态规划', link: '/algorithm/dp' }
          ]
        }
      ],
      '/design-pattern/outline': [
        {
          text: '设计模式学习指南',
          items: [
            { text: '创建型模式', link: '/design-pattern/creational' },
            { text: '结构型模式', link: '/design-pattern/structural' },
            { text: '行为型模式', link: '/design-pattern/behavioral' }
          ]
        }
      ],
      '/other/outline': [
        {
          text: '其他学习内容',
          items: [
            { text: '工具', link: '/other/tools' },
            { text: '计算机基础', link: '/other/computer-basics' },
            { text: '职业发展', link: '/other/career' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
