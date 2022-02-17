import { brandColors } from "./brandColors";

export const colors = {
  background: {
    light: brandColors["background-dark"],
    dark: brandColors["background-white"],
  },
  text: { dark: brandColors["dark-text"], ligth: brandColors["light-text"] },
  secundaryText: { dark: brandColors["dark-secundary-text"] },
  lineBorder: {
    ligth: brandColors["light-line-border"],
    dark: brandColors["dark-line-border"],
  },
  linearGradient: brandColors["linear-gradient"],
};
