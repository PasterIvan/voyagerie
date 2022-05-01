import { ReactComponent as Star } from "app/assets/images/star.svg";
import classNames from "classnames";
import React from "react";

export type StarFrameProps = {
  className?: string;
  topLeft?: boolean;
  bottomLeft?: boolean;
  topRight?: boolean;
  bottomRight?: boolean;
  children?: React.ReactNode;
} & Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "ref"
>;

export const StarFrame = React.forwardRef<HTMLDivElement, StarFrameProps>(
  (
    {
      className,
      topLeft = true,
      bottomLeft = true,
      topRight = true,
      bottomRight = true,
      children,
      ...props
    }: StarFrameProps,
    ref
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={classNames("relative border border-accent", className)}
      >
        {topLeft && (
          <Star className="z-10 absolute left-0 top-0 -translate-x-[51%] -translate-y-[51%]" />
        )}
        {bottomLeft && (
          <Star className="z-10 absolute left-0 bottom-0 -translate-x-[51%] translate-y-[51%]" />
        )}
        {topRight && (
          <Star className="z-10 absolute right-0 top-0 translate-x-[51%] -translate-y-[51%]" />
        )}
        {bottomRight && (
          <Star className="z-10 absolute right-0 bottom-0 translate-x-[51%] translate-y-[51%]" />
        )}
        {children}
      </div>
    );
  }
);
