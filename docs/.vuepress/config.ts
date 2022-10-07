import theme from './themeConfig'
// import searchPlugin from "vuepress-plugin-full-text-search2";
import { searchPlugin } from '@vuepress/plugin-search'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/node-docs/',

  dest: './dist',

  head: [
    [
      'link',
      {
        rel: 'icon',

        href: `/node-docs/images/node.png`,
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
    [
      'link',
      //我的iconfont库
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_3267094_0pfgirl8r8qg.css',
      },
    ],
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'node-docs',
      description: 'node简明教程',
    },
  },

  theme,
  plugins: [
    searchPlugin,
    // searchPlugin({
    //   locales: {
    //     "/": {
    //       placeholder: "搜索文档",
    //     },
    //   },
    // }),
  ],
})
