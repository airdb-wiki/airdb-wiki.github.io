import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "Guide", icon: "creative", link: "/guide/" },
  { text: "Posts", icon: "edit", link: "/article/" },
  {
    text: "Sponsors",
    icon: "like",
    link: "https://github.com/sponsors/airdb",
  },
]);
