import type { Theme } from "../utils/types";
import { ThemeMode } from "../utils/types";

export const DefaultLightTheme: Theme = {
  name: "default",
  mode: ThemeMode.Light,
  bg: { hexValue: "#ffffff" },
  fg: { hexValue: "#000000" },
  colors: [
    {
      hexValue: "#A8DF8E",   // green 
    },
    {
      hexValue: "#9AC5F4",   // blue 
    }, 
    {
      hexValue: "#F0B86E"    // orange
    },
    {
      hexValue: "#FF6969"    // red
    },
    {
      hexValue: "#D67BFF"    // purple  
    }, 
  ]
};

export const DefaultDarkTheme: Theme = {
  name: "default",
  mode: ThemeMode.Dark,
  bg: { hexValue: "#000000" },
  fg: { hexValue: "#ffffff" },
  colors: [
    {
      hexValue: "#4E9F3D",   // green 
    },
    {
      hexValue: "#4477CE",   // blue 
    }, 
    {
      hexValue: "#FF4C29"    // orange
    },
    {
      hexValue: "#CD1818"    // red
    },
    {
      hexValue: "#1D267D"    // purple  
    }, 
  ] 
};

export const GruvboxLightTheme: Theme = {
  name: "gruvbox",
  mode: ThemeMode.Light,
  bg: { hexValue: "#fbf1c7" },
  fg: { hexValue: "#3c3836" },
  colors: [
    {
      hexValue: "#98971a",   // green 
    },
    {
      hexValue: "#458588",   // blue 
    }, 
    {
      hexValue: "#d65d0e"    // orange
    },
    {
      hexValue: "#cc241d"    // red
    },
    {
      hexValue: "#b16286"    // purple  
    }, 
  ]
};

export const GruvboxDarkTheme: Theme = {
  name: "gruvbox",
  mode: ThemeMode.Dark,
  bg: { hexValue: "#282828" },
  fg: { hexValue: "#ebdbb2" },
  colors: [
    {
      hexValue: "#b8bb26",   // green 
    },
    {
      hexValue: "#83a598",   // blue 
    }, 
    {
      hexValue: "#fe8019"    // orange
    },
    {
      hexValue: "#fb4934"    // red
    },
    {
      hexValue: "#d3869b"    // purple  
    }, 
  ] 
};

export const themeMap: Map<string, Theme> = new Map<string, Theme>();
themeMap.set("default-light", DefaultLightTheme);
themeMap.set("default-dark", DefaultDarkTheme);
themeMap.set("gruvbox-light", GruvboxLightTheme);
themeMap.set("gruvbox-dark", GruvboxDarkTheme);
