import classNames from "classnames";
import { useState, useEffect, useMemo } from "react";
import "../../config/animations.scss";
import {
  SquareWidths,
  bounds,
  animationSizes,
  durations,
  maxDelay,
} from "../../config/constants";

export const FlottantCube = ({
  className,
  width,
  min = 0,
  max = 100,
  delay: minDelay = 0,
  quickStart = false,
}: {
  className?: string;
  width: SquareWidths;
  min?: number;
  max?: number;
  delay?: number;
  quickStart?: boolean;
}) => {
  const [isInitiated, setInitiated] = useState(!quickStart);
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
      setInitiated(true);
    }, durations[floating] * 1000 + delay * 1000 + minDelay * 1000);

    return () => clearTimeout(timeout);
  }, [delay, floating, minDelay]);

  const style = useMemo(
    () => ({
      bottom: isInitiated ? "0" : `${(100 / maxDelay) * (maxDelay - delay)}%`,
      animationDelay: isInitiated ? `${delay}s` : "",
      width,
      left,
      marginBottom: -width,
    }),
    [isInitiated, delay, width, left]
  );

  if (offAnimation) {
    return null;
  }

  return (
    <div
      style={style}
      className={classNames(
        className,
        "bg-light z-10 mix-blend-exclusion pointer-events-none transition-[display] duration-1000 bottom-0 absolute w-full aspect-square",
        offAnimation ? "animate-none" : `floating-square-${spin}-${floating}`
      )}
    />
  );
};
