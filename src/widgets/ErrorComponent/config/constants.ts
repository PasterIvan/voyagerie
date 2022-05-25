export const animationSizes = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;

export enum SquareWidths {
  sm = 30,
  md = 70,
  lg = 120,
  xl = 180,
}
export const bounds = {
  [SquareWidths.xl]: {
    number: 3,
    right: true,
    delay: 25,
  },
  [SquareWidths.lg]: {
    number: 1,
    right: true,
    delay: 10,
  },
  [SquareWidths.md]: {
    number: 4,
    right: false,
    delay: 4,
  },
  [SquareWidths.sm]: {
    number: 2,
    right: false,
    delay: 0,
  },
} as const;

export const durations = {
  xs: 5,
  sm: 10,
  md: 25,
  lg: 40,
  xl: 100,
  "2xl": 150,
} as const;

export const toggleInterval = 15 * 1000;
export const turnLightOffTimeout = 3 * 1000;
