export class Article {
  title: string;
  author: string;
  description: string;
  url: string;
  tags: string[];

  constructor(title: string, author: string, description: string, url: string, tags: string[]) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.url = url;
    this.tags = tags;
  }
}
