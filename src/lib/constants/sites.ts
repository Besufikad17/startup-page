import { CategoryModel } from "../models/category";
import { SiteModel } from "../models/site";

export const categories: CategoryModel[] = [
  new CategoryModel(
    "Socials",
    [
      new SiteModel("../src/assets/images/icons8-reddit-60.png", "https://reddit.com/"),
      new SiteModel("../src/assets/images/icons8-linkedin-50.png", "https://linkedin.com/"),
      new SiteModel("../src/assets/images/icons8-x-50.png", "https://x.com/"),
      new SiteModel("../src/assets/images/icons8-discord-50.png", "https://discord.com/")
    ]
  ),
  new CategoryModel(
    "Streaming sites",
    [
      new SiteModel("../src/assets/images/icons8-twitch-50.png", "https://twitch.com/"),
      new SiteModel("../src/assets/images/icons8-spotify-50.png", "https://spotify.com/"),
      new SiteModel("../src/assets/images/icons8-youtube-50.png", "https://youtube.com/"),
      new SiteModel("../src/assets/images/icons8-lastfm-50.png", "https://www.last.fm/")
    ]
  ),
  new CategoryModel(
    "Productivity",
    [
      new SiteModel("../src/assets/images/icons8-github-60.png", "https://github.com/"),
      new SiteModel("../src/assets/images/icons8-notion-50.png", "https://notion.com/"),
      new SiteModel("../src/assets/images/icons8-stack-overflow-50.png", "https://stackoverflow.com/"),
      new SiteModel("../src/assets/images/wakatime.svg", "https://wakatime.com/")
    ]
  )
];
