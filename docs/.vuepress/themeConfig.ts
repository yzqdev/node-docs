import { zhNavbar } from './navbar'
import { zhSidebar } from './sidebar'
import { hopeTheme } from 'vuepress-theme-hope'

export default hopeTheme({
  hostname: 'https://yzqdev.github.io/node-docs',

  iconPrefix: 'iconfont icon-',

  logo: '/images/node.png',

  repo: 'https://github.com/yzqdev/node-docs',

  docsDir: 'docs',
  pure: false,
  themeColor: {
    blue: '#2196f3',
    red: '#f26d6d',
    green: '#3eaf7c',
    orange: '#fb9b5f',
  },
  fullscreen: true,
  // navbar
  locales: {
    '/': {
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: `powered by <a href='https://vuepress-theme-hope.github.io/v2/'>vuepress-theme-home</a>`,

      displayFooter: true,
    },
  },

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  plugins: {
    blog: false,
    prismjs: {
      light: 'tomorrow',
      dark: 'tomorrow',
    },
    mdEnhance: {
      tabs: true,
      codetabs: true,

      demo: true,
      sub: true,
      sup: true,
    },
  },
})
