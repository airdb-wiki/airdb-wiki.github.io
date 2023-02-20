import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Airdb Wiki",
      description: "Homepage for https://airdb.wiki",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Airdb Wiki",
      description: "Homepage for https://airdb.wiki",
    },
  },

  theme,

  shouldPrefetch: false,
});
