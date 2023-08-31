import { Article } from "../models/article";
import axios from "axios";

export const fetchArticles = async(): Promise<Article[]> => {
  const options = {
    method: 'GET',
    url: 'https://dev.to/api/articles'
  };

  let articles: Article[] = [];

  axios.request(options)
    .then((result) => {
      for(var i = 0; i < 30; i++) {
        articles.push(
          new Article(
            result.data[i]["title"],
            result.data[i]["user"]["username"], 
            result.data[i]["description"],
            result.data[i]["url"],
            result.data[i]["tag_list"]
          )
        ); 
      } 
    })
    .catch((e) => {
      throw e;
    });
  return articles;
}
