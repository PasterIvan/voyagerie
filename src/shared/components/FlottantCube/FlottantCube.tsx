import classNames from "classnames";
import { useState, useEffect, useMemo } from "react";
import "./animations.scss";

const animationSizes = ["sm", "md", "lg", "xl", "2xl"] as const;
export enum SquareWidths {
  sm = 30,
  md = 70,
  lg = 120,
  xl = 180,
}
const bounds = {
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
    number: 3,
    right: false,
    delay: 4,
  },
  [SquareWidths.sm]: {
    number: 2,
    right: false,
    delay: 0,
  },
} as const;
const durations = {
  sm: 10,
  md: 30,
  lg: 65,
  xl: 100,
  "2xl": 150,
} as const;

export const FlottantCube = ({
  className,
  width,
  min = 0,
  max = 100,
  delay: minDelay = 0,
}: {
  className?: string;
  width: SquareWidths;
  min?: number;
  max?: number;
  delay?: number;
}) => {
  const [reset, setReset] = useState(false);

  const [offAnimation, setOffAnimation] = useState(false);
  useEffect(() => {
    if (offAnimation) {
      setTimeout(() => {
        setOffAnimation(false);
      });
    }
  }, [offAnimation]);
  useEffect(() => {
    setOffAnimation(true);
  }, [reset]);

  const resetAnimation = () => {
    setReset((reset) => !reset);
  };

  const { floating, spin, left, delay } = useMemo(() => {
    const { number, right, delay } = bounds[width];

    const getRandomBound = (shift: number, isRight: boolean) => {
      const index = !isRight
        ? Math.floor(Math.random() * shift)
        : Math.floor(Math.random() * (animationSizes.length - shift)) + shift;

      return animationSizes[index];
    };

    return {
      left: `${Math.floor(Math.random() * (max - min)) + min}%`,
      delay: minDelay + delay + Math.floor(Math.random() * 5),
      floating: getRandomBound(number, right),
      spin: getRandomBound(number, right),
    };
  }, [minDelay, reset, min, max, width]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      resetAnimation();
    }, durations[floating] * 1000 + delay * 1000 + minDelay * 1000);

    return () => clearTimeout(timeout);
  }, [delay, floating, minDelay]);

  if (offAnimation) {
    return null;
  }

  return (
    <div
      style={{
        animationDelay: `${delay}s`,
        width,
        left,
        marginBottom: -width,
      }}
      className={classNames(
        className,
        "bg-light z-10 mix-blend-exclusion hover:opacity-0 transition-opacity duration-1000 bottom-0 absolute w-full aspect-square",
        offAnimation ? "animate-none" : `floating-square-${spin}-${floating}`
      )}
    />
  );
};
