import { defineSidebarConfig } from "vuepress-theme-hope";

export const zhSidebar = defineSidebarConfig({
  "/zh/nodejs/": "structure",
  "/zh/node-snippets/": "structure",

  // fallback
  // "/": ["" /* / */, "contact" /* /contact.html */, "about" /* /about.html */],
});
export const enSidebar = defineSidebarConfig({
  "/en/nodejs/": "structure",
  "/en/node-snippets/": "structure",

  // fallback
  // "/": ["" /* / */, "contact" /* /contact.html */, "about" /* /about.html */],
});
