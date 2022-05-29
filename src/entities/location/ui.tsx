import classNames from "classnames";

import plural from "plural-ru";
import { useHover } from "shared/lib/hooks/useHover";
import React from "react";
import { useTranslation } from "entities/language/lib";
import { ArrowIcon } from "./config/Arrow";
import { ImageWithError } from "shared/components/ImageWithError";
import { CountryType } from "shared/api/api";

export const LocationCard: React.FC<
  {
    className?: string;
  } & CountryType &
    React.HTMLAttributes<HTMLDivElement>
> = ({ className, name, hotelsNumber, image, countryCode, ...props }) => {
  const { $i18n, $t } = useTranslation();
  const [ref, isHovered] = useHover();

  return (
    <div
      ref={ref}
      className={classNames(
        //TODO: Borders should be gradient
        "group cursor-pointer relative w-full h-[15rem] sm:h-[25rem] rounded-lg border border-transparent hover:border-accent overflow-hidden",
        className
      )}
      {...props}
    >
      <ImageWithError
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
        className="absolute top-4 sm:top-auto right-4 bottom-auto sm:bottom-4"
      />
      <div className="absolute left-5 bottom-5 grid grid-cols-[auto_auto] gap-x-3 gap-y-1 pr-5 items-center">
        <ImageWithError
          src={countryCode}
          className="w-12 h-12 object-contain"
        />
        <div className="col-span-2 md:col-span-1 break-words text-[32px] text-light font-medium leading-none">
          {name[$i18n]}
        </div>
        <div className="hidden sm:block" />
        <div className="pl-1 text-accent leading-none col-span-2 md:col-span-1">
          {hotelsNumber}{" "}
          {plural(hotelsNumber, ...$t("pages.location.hotelsPlural"))}
        </div>
      </div>
    </div>
  );
};

export const LocationCardLoader: React.FC<{ className?: string }> = ({
  className,
}) => (
  <div
    className={classNames(
      className,
      "w-full h-[15rem] sm:h-[25rem] border border-light rounded-lg flex justify-center items-center"
    )}
  >
    <div className="lds-hourglass" />
  </div>
);
