import classNames from "classnames";
import { useEffect, useState } from "react";
import {
  preloaderDelay,
  SquareWidths,
  toggleInterval,
  turnLightOffTimeout,
} from "widgets/ErrorComponent/config/constants";
import { FlottantCube } from "widgets/ErrorComponent/components/FlottantCube/FlottantCube";
import { footerModel } from "widgets/Footer";
import { Links } from "widgets/Links/Links";
import { ArrowUp } from "./components/ArrowUp";
import { useLocation } from "react-router-dom";
import { RoutesPaths } from "shared/config/constants";

export const ErrorWidget = ({
  code,
  message,
}: {
  code: string;
  message?: string;
}) => {
  const { pathname } = useLocation();

  const [preloaderBackground, setPreloaderBackground] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const [isToggledByUser, setIsToggledByUser] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [isLightTurnedOff, setLightTurnedOff] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  const toggleLight = () => {
    setIsLight((isLight) => !isLight);
  };

  useEffect(() => {
    const timeoutPreloader = setTimeout(() => {
      setPreloader(false);
    }, preloaderDelay);
    const timeoutHalfPreloader = setTimeout(() => {
      setPreloaderBackground(true);
    }, Math.floor(preloaderDelay / 4));

    return () => {
      clearTimeout(timeoutPreloader);
      clearTimeout(timeoutHalfPreloader);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimationStarted(true);
      toggleLight();
    }, preloaderDelay + 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (isLightTurnedOff) return;
    if (!isAnimationStarted) return;

    if (isToggledByUser) {
      setLightTurnedOff(true);
      return;
    }

    const timeout = setTimeout(() => {
      setLightTurnedOff(true);
      toggleLight();
    }, turnLightOffTimeout);

    return () => {
      clearTimeout(timeout);
    };
  }, [isLightTurnedOff, isToggledByUser, isAnimationStarted]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimationFinished(true);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, [isAnimationStarted]);

  useEffect(() => {
    if (!isLightTurnedOff) {
      return;
    }

    const timeout = setTimeout(() => {
      toggleLight();
    }, toggleInterval);

    return () => {
      clearTimeout(timeout);
    };
  }, [isLight, isToggledByUser, isLightTurnedOff]);

  const isMainPage = pathname === RoutesPaths.Main;

  return (
    <div
      className={classNames(
        isLight ? "bg-light" : "bg-black",
        "overflow-hidden relative h-screen w-full flex flex-col p-5 md:p-8",
        "transition-colors duration-[2500ms]"
      )}
    >
      <div
        className={classNames(
          "absolute inset-0 h-full w-full flex justify-center items-center p-5 md:p-9 z-50 pointer-events-none transition-[opacity_background-color] duration-[500ms]",
          preloaderBackground ? "bg-black" : "bg-black-background",
          !preloader && "opacity-0 "
        )}
      >
        <div className="lds-hourglass" />
      </div>
      <Links
        routesConfig={
          isMainPage
            ? [
                {
                  key: RoutesPaths.Refresh,
                  onClick: () => {
                    document.location.reload();
                  },
                },
                {
                  key: RoutesPaths.Help,
                  onClick: () => {
                    footerModel.events.scrollToContacts();
                  },
                },
              ]
            : undefined
        }
        elementClassName={classNames(
          "transition-colors duration-[2500ms] hover:transition-none",
          {
            "text-black hover:text-blue": isLight,
            "text-light hover:text-accent": !isLight,
          },
          "text-md md:text-xl font-bold uppercase text-light mx-4 underline-offset-1 cursor-pointer bg-gradient-to-t hover:from-[#FAE4BC] hover:to-[#D6A072] hover:bg-clip-text hover:text-fill-transparent hover:text-accent"
        )}
        className="z-10 flex-grow-0 w-full flex justify-around lg:justify-center"
      />
      <div className="z-10 flex flex-col flex-grow justify-center items-center relative">
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
            onClick={() => {
              if (!isAnimationFinished) return;
              toggleLight();
              setIsToggledByUser(true);
            }}
            className={classNames(
              !isAnimationFinished && "cursor-default",
              "transition-colors duration-[2500ms] hover:transition-none",
              {
                "text-black hover:text-blue": isLight && isAnimationFinished,
                "text-light hover:text-accent": !isLight && isAnimationFinished,
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
              "mt-3 transition-colors duration-[2500ms]"
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
      <FlottantCube
        width={SquareWidths.xl}
        min={30}
        max={60}
        quickStart={true}
      />
      <FlottantCube
        className="invisible md:!visible"
        width={SquareWidths.lg}
        min={20}
        max={70}
        quickStart={true}
      />
      <FlottantCube
        className="invisible md:!visible"
        width={SquareWidths.md}
        min={20}
        max={40}
        delay={3}
      />
      <FlottantCube
        className="invisible md:!visible"
        width={SquareWidths.md}
        min={60}
        max={90}
        delay={12}
        quickStart={true}
      />
      <FlottantCube width={SquareWidths.md} min={40} max={60} delay={6} />
      <FlottantCube width={SquareWidths.md} min={60} max={80} />
      <FlottantCube width={SquareWidths.sm} min={0} max={25} />
      <FlottantCube width={SquareWidths.sm} min={75} max={100} />
      <FlottantCube width={SquareWidths.sm} min={25} max={50} delay={3} />
      <FlottantCube width={SquareWidths.sm} min={50} max={75} delay={9} />
      <FlottantCube width={SquareWidths.sm} min={25} max={50} delay={12} />
      <FlottantCube width={SquareWidths.sm} min={25} max={50} delay={7} />
      <FlottantCube width={SquareWidths.sm} min={50} max={75} delay={16} />
      <FlottantCube width={SquareWidths.sm} min={25} max={50} delay={19} />
      <FlottantCube
        width={SquareWidths.sm}
        min={50}
        max={75}
        delay={15}
        quickStart={true}
      />
      <FlottantCube
        width={SquareWidths.sm}
        min={75}
        max={100}
        delay={19}
        quickStart={true}
      />
    </div>
  );
};
