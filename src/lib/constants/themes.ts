import type { Theme } from "../utils/types";
import { ThemeMode } from "../utils/types";

export const LightTheme: Theme = {
  name: "normal",
  mode: ThemeMode.Light,
  colors: [
    {
      hexValue: "#A8DF8E",   // green 
    },
    {
      hexValue: "#9AC5F4",   // blue 
    },
    {
      hexValue: "#FEFFAC",   // yellow
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
    {
      hexValue: "#B9B4C7"    // grey
    }, 
    {
      hexValue: "#272829"    // black 
    }, 
    {
      hexValue: "#F2ECBE"    // cream
    }
  ]
};

export const DarkTheme: Theme = {
  name: "normal",
  mode: ThemeMode.Dark,
  colors: []
};
