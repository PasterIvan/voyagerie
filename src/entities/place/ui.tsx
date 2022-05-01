import classNames from "classnames";
import { PlaceType } from "./models";
import sunIcon from "./config/images/sun.svg";
import seaIcon from "./config/images/sea.svg";
import plural from "plural-ru";
import { useHover } from "shared/lib/hooks/useHover";
import React from "react";
import { useTranslation } from "entities/language/lib";

const mathSignSymbols: Record<number, string> = {
  "1": "+",
  "-1": "-",
  "0": "",
};

export type Sizes = "sm" | "md";

const sizeClasses: Record<
  Sizes,
  { block: string; container: string; icon: string }
> = {
  sm: {
    block: "px-2 py-1",
    container: "text-xs font-medium",
    icon: "w-3 h-3 mr-1",
  },
  md: {
    block: "px-4 py-2",
    container: "text-sm font-medium",
    icon: "w-5 h-5 mr-2",
  },
};

export const TemperatureCard: React.FC<{
  size?: Sizes;
  className?: string;
  airTemperature: number;
  waterTemperature: number;
}> = ({ size = "sm", className, airTemperature, waterTemperature }) => {
  return (
    <div
      className={classNames(
        className,
        "flex items-center bg-accent rounded",
        sizeClasses[size].container
      )}
    >
      <div
        className={classNames(
          "flex items-center border-r-[0.5px] border-[#180F0B]/10",
          sizeClasses[size].block
        )}
      >
        <img
          src={sunIcon}
          className={classNames("inline", sizeClasses[size].icon)}
        />
        {mathSignSymbols[Math.sign(airTemperature)]}
        {airTemperature}℃
      </div>
      <div
        className={classNames(
          "flex items-center border-l-[0.5px] border-[#180F0B]/10",
          sizeClasses[size].block
        )}
      >
        <img
          src={seaIcon}
          className={classNames("inline", sizeClasses[size].icon)}
        />
        {mathSignSymbols[Math.sign(waterTemperature)]}
        {waterTemperature}℃
      </div>
    </div>
  );
};

export const PlaceCard: React.FC<
  {
    className?: string;
  } & PlaceType &
    React.HTMLAttributes<HTMLDivElement>
> = ({
  className,
  name,
  airTemperature,
  hotelsNumber,
  image,
  waterTemperature,
  ...props
}) => {
  const { $i18n } = useTranslation();
  const [ref, isHovered] = useHover();
  return (
    <div
      ref={ref}
      className={classNames(
        //TODO: Borders should be gradient
        "cursor-pointer relative w-full h-60 rounded-sm border border-accent overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        className={classNames(
          "transition-transform duration-500 w-full h-full object-cover",
          isHovered && "scale-110"
        )}
        alt={name[$i18n]}
        src={image}
      />
      <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-[#000000]/0 to-[#000000] opacity-75" />
      <TemperatureCard
        className="absolute top-2 right-2"
        airTemperature={airTemperature}
        waterTemperature={waterTemperature}
      />
      <div className="absolute left-5 bottom-5">
        <div className="text-[32px] text-light font-medium">{name[$i18n]}</div>
        <div className="text-accent">
          {hotelsNumber} {plural(hotelsNumber, "отель", "отеля", "отелей")}
        </div>
      </div>
    </div>
  );
};
