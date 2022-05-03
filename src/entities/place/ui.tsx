import classNames from "classnames";
import { PlaceType } from "./models";

import plural from "plural-ru";
import { useHover } from "shared/lib/hooks/useHover";
import React from "react";
import { useTranslation } from "entities/language/lib";
import Flag from "react-world-flags";
import { ArrowIcon } from "./config/Arrow";

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
  countryCode,
  ...props
}) => {
  const { $i18n, $t } = useTranslation();
  const [ref, isHovered] = useHover();
  return (
    <div
      ref={ref}
      className={classNames(
        //TODO: Borders should be gradient
        "group cursor-pointer relative w-full h-[25rem] rounded-lg border border-transparent hover:border-accent overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        className={classNames(
          "transition-transform duration-500 w-full h-full object-cover group-hover:scale-110"
        )}
        alt={name[$i18n]}
        src={image}
      />
      <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black/0 to-black opacity-75" />
      <ArrowIcon
        isHovered={isHovered}
        pathClassName="group-hover:text-[#826C55] text-light"
        className="absolute bottom-4 right-4"
      />
      <div className="absolute left-5 bottom-5 grid grid-cols-[40px_auto] grid-rows-[auto_auto] gap-x-3 gap-y-1 max-w-[80%]">
        <Flag code={countryCode} className="h-full w-full" />
        <div className="text-[32px] text-light font-medium leading-none">
          {name[$i18n]}
        </div>
        <div />
        <div className="text-accent leading-none">
          {hotelsNumber}{" "}
          {plural(hotelsNumber, ...$t("pages.place.hotelsPlural"))}
        </div>
      </div>
    </div>
  );
};
