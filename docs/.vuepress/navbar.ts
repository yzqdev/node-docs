import { defineNavbarConfig } from "vuepress-theme-hope";

export const zhNavbar = defineNavbarConfig([
  // { text: "文章", icon: "home", link: "/article/" },
  { text: "node教程", icon: "software", link: "/zh/nodejs/" },
  { text: "node片段", icon: "software", link: "/zh/node-snippets/" },

  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
export const enNavbar = defineNavbarConfig([
  // { text: "文章", icon: "home", link: "/article/" },
  { text: "node教程", icon: "software", link: "/en/nodejs/" },
  { text: "node片段", icon: "software", link: "/en/node-snippets/" },

  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
