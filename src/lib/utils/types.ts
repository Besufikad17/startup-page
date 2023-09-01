export enum ThemeMode {
  Light,
  Dark
}

export type Theme = {
  name: string;
  mode: ThemeMode;
  bg: Color;
  fg: Color; 
  colors: Color[];
};

export type Color = {
  hexValue: string;
};

