import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    theme:
      [
        "#e2fdff",
        "#d2f5f9",
        "#aae8ef",
        "#7fdbe5",
        "#5bd0dc",
        "#44c9d7",
        "#36c7d6",
        "#1eafbd",
        "#009ca9",
        "#008794"
      ],
  },
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
  headings: {
    fontFamily: 'Roboto, sans-serif',
  },
  primaryColor: 'theme',
});