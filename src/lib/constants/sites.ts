import { CategoryModel } from "../models/category";
import { SiteModel } from "../models/site";

export const categories: CategoryModel[] = [
  new CategoryModel(
    "Socials",
    [
      new SiteModel("ic:baseline-reddit", "https://reddit.com/"),
      new SiteModel("mdi:linkedin", "https://linkedin.com/"),
      new SiteModel("simple-icons:x", "https://x.com/"),
      new SiteModel("ic:baseline-discord", "https://discord.com/"),
      new SiteModel("simple-icons:myanimelist", "https://myanimelist.net/")
    ]
  ),
  new CategoryModel(
    "Streaming sites",
    [
      new SiteModel("simple-icons:twitch", "https://twitch.com/"),
      new SiteModel("simple-icons:spotify", "https://spotify.com/"),
      new SiteModel("simple-icons:youtube", "https://youtube.com/"),
      new SiteModel("arcticons:zoro-to", "https://aniwatch.to/"),
      new SiteModel("material-symbols:movie", "https://movies2watch.ru/home")
    ]
  ),
  new CategoryModel(
    "Productivity",
    [
      new SiteModel("simple-icons:github", "https://github.com/"),
      new SiteModel("simple-icons:notion", "https://notion.com/"),
      new SiteModel("mdi:stackoverflow", "https://stackoverflow.com/"),
      new SiteModel("simple-icons:wakatime", "https://wakatime.com/"),
      new SiteModel("solar:figma-bold", "https://figma.com")
    ]
  )
];
