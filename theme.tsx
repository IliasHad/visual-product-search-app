import { createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
  grayDark: "#888",
  grayLight: "#F1F4F5",
  yellow: "#FFD60A",
  red: "#FF5B37",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.grayLight,
    greenPrimary: palette.purpleLight,
    black: palette.black,
    white: palette.white,
    iconColor: palette.grayDark,
    placeholderText: palette.grayDark,
    grayLight: palette.grayLight,
    grayDark: palette.grayDark,
    text: palette.black,
    primary: palette.greenDark,
    secondary: palette.purplePrimary,
    borderPrimary: palette.grayLight,
    borderSecondary: palette.greenLight,
    success: palette.greenLight,
    warning: palette.yellow,
    destructive: palette.red,
  },
  borderRadius: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  spacing: {
    s: 8,
    m: 14,
    l: 18,
    xl: 30,
  },
  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 24,
    },
    title: {
      fontSize: 18,
      lineHeight: 24,
    },
    body: {
      fontSize: 14,
      lineHeight: 24,
      color: "grayDark",
    },
    button: {
      fontSize: 14,
      lineHeight: 24,
      color: "white",
    },
    defaults: {
      fontSize: 16,
      color: "black",
    },
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  cardVariants: {
    elevated: {
      borderRadius: "s",
      padding: "s",
    },
    defaults: {
      padding: "m",
      borderRadius: "m",
    },
  },
});

export type Theme = typeof theme;
export default theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.white,
    cardPrimaryBackground: palette.grayDark,
    greenPrimary: palette.purpleLight,
    iconColor: palette.grayLight,
    placeholderText: palette.grayLight,
    text: palette.white,
  },
  textVariants: {
    ...theme.textVariants,
    defaults: {
      ...theme.textVariants.header,
      color: "white",
    },
  },
};
