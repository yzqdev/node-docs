import { defineThemeConfig } from "vuepress-theme-hope";
import { zhNavbar, enNavbar } from "./navbar";
import { zhSidebar, enSidebar } from "./sidebar";

export default defineThemeConfig({
  hostname: "https://yzqdev.github.io/node-tutor",

  author: {
    name: "yzqdev",
    url: "http://www.yzqdev.top",
  },

  iconPrefix: "iconfont icon-",

  logo: "/ayaka.jpg",

  repo: "https://github.com/yzqdev/cs-guide",

  // docsDir: "demo/src",

  // navbar
  locales: {
    "/": {
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: `powered by <a href='https://vuepress-theme-hope.github.io/v2/'>vuepress-theme-home</a>`,

      displayFooter: true,
    },
    "/en/": {
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: `powered by <a href='https://vuepress-theme-hope.github.io/v2/'>vuepress-theme-home</a>`,

      displayFooter: true,
    },
  },

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  plugins: {
    blog: false,

    // 你也可以使用 Waline
    comment: {
      type: "giscus",
      repo: "yzqdev/blog-issues",
      repoId: "MDEwOlJlcG9zaXRvcnkzODI2NTY1MTY=",
      category: "General",
      categoryId: "DIC_kwDOFs7gBM4COKgn",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
