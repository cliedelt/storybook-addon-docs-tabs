import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "rgba(30,54,158,1)",
  colorSecondary: "rgba(69,172,207,1)",

  // UI
  appBg: "white",
  appContentBg: "rgba(250,250,252,1)",
  appBorderRadius: 8,

  // Text colors
  textColor: "rgba(81,81,80,1)",
  textInverseColor: "white",

  // Toolbar default and active colors
  barTextColor: "rgba(30,54,158,1)",
  barSelectedColor: "rgba(69,172,207,1)",
  barBg: "white",

  // Form colors
  inputBg: "white",
  inputBorder: "rgba(221,225,241,1)",
  inputTextColor: "rgba(81,81,80,1)",
  inputBorderRadius: 4,

  brandTitle: "Libri.ONE Storybook",
});
