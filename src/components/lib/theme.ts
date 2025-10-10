export const Colors = {
  primary: "#0C176C",
  primarySoft: "#5887F4",
  transparent: "#FFFFFF00",
  background: "#F6F8FF",
  textSecondary: "#8987A1",
} as const;

export const Gradients = {
  header: `linear-gradient(180deg, ${Colors.primary} 0%, ${Colors.transparent} 100%)`,
  sky: `linear-gradient(180deg, ${Colors.primarySoft} 0%, ${Colors.transparent} 100%)`,
} as const;

export const Typography = {
  fontFamily: "Inter, ui-sans-serif, system-ui",
  sizes: {
    h1: "text-[32px] sm:text-[40px] lg:text-[48px]",
    h2: "text-[28px] sm:text-[32px] lg:text-[40px]",
    h3: "text-[20px] sm:text-[24px] lg:text-[28px]",
    body: "text-[16px] sm:text-[18px]",
    bodyLarge: "text-[20px] sm:text-[24px]",
    label: "text-[14px] sm:text-[16px]",
  },
} as const;

export type ColorKey = keyof typeof Colors;
export type GradientKey = keyof typeof Gradients;


