import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#22244a",
    secondary: "#5728a3",
    tertiary: "#f0a500",
    background: "#f9f9f9",
    textPrimary: "#2d2d2d",
    textSecondary: "#5c5c5c",
    error: "#d32f2f",
    warning: "#ffa000",
    success: "#388e3c",
    info: "#1976d2",
  },
  grid: {
    small: {
      margin: 32,
      gutter: 16,
      columns: 6,
    },
    medium: {
      margin: 24,
      gutter: 16,
      columns: 12,
    },
    large: {
      margin: 16,
      gutter: 16,
      columns: 12,
    },
  },
  breakpoints: {
    medium: 768,
    large: 1200,
  },
};
