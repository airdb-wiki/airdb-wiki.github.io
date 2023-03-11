import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Community",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
    {
      icon: "discover",
      text: "Terms",
      prefix: "commits/",
      link: "commits/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "Projects",
      prefix: "projects/",
      link: "projects/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
      collapsible: true,
    },
  ],
});
