export const Colors = {
  primary: "#0C176C",
  primarySoft: "#5887F4",
  transparent: "#FFFFFF00",
} as const;

export const Gradients = {
  header: `linear-gradient(180deg, ${Colors.primary} 0%, ${Colors.transparent} 100%)`,
  sky: `linear-gradient(180deg, ${Colors.primarySoft} 0%, ${Colors.transparent} 100%)`,
} as const;

export type ColorKey = keyof typeof Colors;
export type GradientKey = keyof typeof Gradients;


