import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "en-US",
  title: "airdb.wiki",
  description: "airdb wiki",

  base: "/",

  theme,
});
