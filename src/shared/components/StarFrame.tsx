import { ReactComponent as Star } from "app/assets/images/star.svg";
import classNames from "classnames";
import React from "react";

type StarFrame = {
  className?: string;
  topLeft?: boolean;
  bottomLeft?: boolean;
  topRight?: boolean;
  bottomRight?: boolean;
  children?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const StarFrame = React.forwardRef<HTMLDivElement, StarFrame>(
  (
    {
      className,
      topLeft = true,
      bottomLeft = true,
      topRight = true,
      bottomRight = true,
      children,
      ...props
    }: StarFrame,
    ref
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={classNames("relative border border-accent", className)}
      >
        {topLeft && (
          <Star className="absolute left-0 top-0 -translate-x-[51%] -translate-y-[51%]" />
        )}
        {bottomLeft && (
          <Star className="absolute left-0 bottom-0 -translate-x-[51%] translate-y-[51%]" />
        )}
        {topRight && (
          <Star className="absolute right-0 top-0 translate-x-[51%] -translate-y-[51%]" />
        )}
        {bottomRight && (
          <Star className="absolute right-0 bottom-0 translate-x-[51%] translate-y-[51%]" />
        )}
        {children}
      </div>
    );
  }
);
