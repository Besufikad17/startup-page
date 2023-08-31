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
