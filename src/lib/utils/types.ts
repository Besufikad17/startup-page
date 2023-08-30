export enum ThemeMode {
  Light,
  Dark
}

export type Theme = {
  name: string;
  mode: ThemeMode;
  colors: Color[];
};

export type Color = {
  hexValue: string;
};

export type Article = {
  title: string;
  author: string;
  description: string;
  url: string;
  tags: string[]
};
