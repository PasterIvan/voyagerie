import classNames from "classnames";
import { useEffect, useState } from "react";
import { footerModel } from "widgets/Footer";
import { Links } from "widgets/Links/Links";
import { ArrowUp } from "./components/ArrowUp";

export const ErrorWidget = ({
  code,
  message,
}: {
  code: string;
  message?: string;
}) => {
  const [isLight, setIsLight] = useState(false);

  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimationStarted(true);
      setIsLight((isLight) => !isLight);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={classNames(
        isLight ? "bg-light" : "bg-black",
        "h-screen w-full flex flex-col p-5 md:p-10",
        "transition-colors duration-[2500ms]"
      )}
    >
      <Links
        elementClassName={classNames(
          "transition-colors duration-[2500ms] hover:transition-none",
          {
            "text-black hover:text-blue": isLight,
            "text-light hover:text-accent": !isLight,
          },
          "text-md md:text-xl font-bold uppercase text-light mx-4 underline-offset-1 cursor-pointer bg-gradient-to-t hover:from-[#FAE4BC] hover:to-[#D6A072] hover:bg-clip-text hover:text-fill-transparent hover:text-accent"
        )}
        className="flex-grow-0 w-full flex justify-around lg:justify-center"
      />
      <div className="flex flex-col flex-grow justify-center items-center relative">
        <div className="flex w-full justify-center items-center">
          <div className={classNames("flex-grow flex-shrink-0 h-2 relative")}>
            <div
              className={classNames(
                "h-full right-0 top-0 absolute transition-[backround-color_width] duration-[2500ms] hover:transition-none",
                !isAnimationStarted ? "w-0" : "w-full",
                {
                  "bg-black hover:bg-blue": isLight,
                  "bg-light hover:bg-accent": !isLight,
                }
              )}
            />
          </div>
          <button
            onClick={() => setIsLight(!isLight)}
            className={classNames(
              "transition-colors duration-[2500ms] hover:transition-none",
              {
                "text-black hover:text-blue": isLight,
                "text-light hover:text-accent": !isLight,
              },
              "text-5xl lg:text-9xl font-bold mx-8"
            )}
          >
            {code}
          </button>
          <div className={classNames("flex-grow flex-shrink-0 h-2 relative")}>
            <div
              className={classNames(
                "h-full left-0 top-0 absolute transition-[backround-color_width] duration-[2500ms] hover:transition-none",
                !isAnimationStarted ? "w-0" : "w-full",
                {
                  "bg-black hover:bg-blue": isLight,
                  "bg-light hover:bg-accent": !isLight,
                }
              )}
            />
          </div>
        </div>
        {message && (
          <span
            className={classNames(
              isLight ? "text-black" : "text-light",
              "transition-colors duration-[2500ms]"
            )}
          >
            {message}
          </span>
        )}
        <ArrowUp
          isLight={isLight}
          onClick={() => footerModel.events.scrollToFooter()}
          className="absolute cursor-pointer rotate-180 bottom-0 left-0"
        />
      </div>
    </div>
  );
};
