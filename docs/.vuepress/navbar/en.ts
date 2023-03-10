import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Demo", icon: "discover", link: "/demo/" },
  {
    text: "Guide",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "welcome",
        icon: "creative",
        prefix: "intro/",
        children: ["intro", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Rules",
        icon: "config",
        prefix: "rules/",
        children: ["rules", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  { text: "Slides", icon: "slides", link: "/slides/" },
]);
