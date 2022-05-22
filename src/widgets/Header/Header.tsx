import classNames from "classnames";
import { FaqBlock } from "pages/MainPage/components/FaqBlock";
import React from "react";
import { ReactNode } from "react";
import { Navbar } from "widgets/Navbar/Navbar";

import { ReactComponent as Lines } from "./config/lines.svg";

type HeaderProps = {
  children?: ReactNode;
  leftBottomElement?: ReactNode;
  absoluteElement?: ReactNode;
  className?: string;
  containerClassName?: string;
  childrenClassName?: string;
  withOverlay?: boolean;
  faqClassName?: string;
  faqElementClassName?: string;
};

console.log("voyagerie © 2022 All rights reserved");

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  (
    {
      faqClassName,
      faqElementClassName,
      children,
      leftBottomElement,
      absoluteElement,
      className,
      containerClassName,
      childrenClassName,
      withOverlay = true,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          className,
          "overflow-hidden relative flex flex-col p-4 w-full bg-light"
        )}
      >
        {withOverlay && (
          <div className="absolute z-10 -m-4 h-full w-full bg-gradient-to-b from-[#180F0B]/80 to-[#180F0B]/30" />
        )}
        <Lines className="z-10 absolute right-0 top-[15%]" />
        <Navbar className="z-10" />
        <div className="absolute z-0 -m-4 w-full h-full">{absoluteElement}</div>

        <div
          className={classNames(
            containerClassName,
            "gap-y-3 z-10 w-full grid gap-x-3 grid-cols-[auto_auto] grid-rows-[calc(100%-60px)_60px] flex-grow"
          )}
        >
          <div
            className={classNames(childrenClassName, "col-span-2 row-span-1")}
          >
            {children}
          </div>
          <div className="col-span-1 row-span-1 self-end">
            {leftBottomElement}
          </div>
          <FaqBlock
            elementClassName={faqElementClassName}
            className={classNames(
              faqClassName,
              "ml-auto col-span-1 row-span-1 self-end"
            )}
          />
        </div>
      </div>
    );
  }
);
