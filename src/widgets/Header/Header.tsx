import classNames from "classnames";
import { FaqBlock } from "pages/MainPage/components/FaqBlock";
import React from "react";
import { ReactNode } from "react";
import { Navbar } from "widgets/Navbar/Navbar";

import { ReactComponent as Lines } from "./config/lines.svg";

type HeaderProps = {
  children?: ReactNode;
  leftBottomElement?: ReactNode;
  absoluteElementsElement?: ReactNode;
  className?: string;
  withOverlay?: boolean;
};

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  (
    {
      children,
      leftBottomElement,
      absoluteElementsElement,
      className,
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
        <div className="absolute z-0 -m-4 w-full h-full">
          {absoluteElementsElement}
        </div>

        <div className="z-10 rounded-b-2xl w-full border grid grid-cols-2 grid-rows-[auto_60px] border-light/20 p-4 flex-grow">
          <div className="w-full h-full flex flex-col justify-around col-span-2 row-span-1">
            {children}
          </div>
          <div className="cursor-pointer col-span-1 row-span-1 self-end">
            {leftBottomElement}
          </div>
          <FaqBlock className="ml-auto col-span-1 row-span-1 self-end" />
        </div>
      </div>
    );
  }
);
