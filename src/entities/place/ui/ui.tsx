import classNames from "classnames";
import { PlaceType } from "../models";
import { ReactComponent as Sun } from "../config/images/sun.svg";
import { ReactComponent as Sea } from "../config/images/sea.svg";
import plural from "plural-ru";
import { useHover } from "shared/lib/hooks/useHover";
import React from "react";
import { useTranslation } from "entities/language/lib";

const mathSignSymbols: Record<number, string> = {
  "1": "+",
  "-1": "-",
  "0": "",
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
        src={image}
      />
      <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-[#000000]/0 to-[#000000] opacity-75" />
      <div className="flex items-center bg-accent rounded absolute top-2 text-xs font-medium right-2">
        <div className="flex items-center px-2 py-1 border-r-[0.5px] border-[#180F0B]/10">
          <Sun className="inline mr-1" />
          {mathSignSymbols[Math.sign(airTemperature)]}
          {airTemperature}℃
        </div>
        <div className="flex items-center px-2 py-1 border-l-[0.5px] border-[#180F0B]/10">
          <Sea className="inline mr-1" />
          {mathSignSymbols[Math.sign(waterTemperature)]}
          {waterTemperature}℃
        </div>
      </div>
      <div className="absolute left-5 bottom-5">
        <div className="text-[32px] text-light font-medium">{name[$i18n]}</div>
        <div className="text-accent">
          {hotelsNumber} {plural(hotelsNumber, "отель", "отеля", "отелей")}
        </div>
      </div>
    </div>
  );
};
