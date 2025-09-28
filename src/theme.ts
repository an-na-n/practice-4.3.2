import { createTheme, type MantineColorsTuple} from '@mantine/core';

const buttons: MantineColorsTuple = [
  "#e4f7ff",
  "#d1e9fe",
  "#a4d0f6",
  "#74b6ef",
  "#4da0e9",
  "#3392e6",
  "#238be6",
  "#1078cd",
  "#006ab9",
  "#005ca4"
];

export const theme = createTheme({
  colors: {
    buttons,
  },
  headings: {
    fontWeight: "700",
    sizes: {
      h1: {fontSize: "46px"},
      h2: { fontSize: "20px", fontWeight: '400' }
    },
  },
  fontSizes: {
    sm: "18px",
    md: "24px",
    lg: "32px",
    xl: "46px",
  },
});