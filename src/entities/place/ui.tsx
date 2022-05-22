import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import plural from "plural-ru";
import { transferIcons } from "./config";
import { useHover } from "shared/lib/hooks/useHover";
import { ArrowIcon } from "entities/location/config/Arrow";
import { PlaceType } from "entities/location/models";
import { LocalesType } from "shared/config/locales/model";
import { pluralConfig } from "shared/config/locales/constants";

export const PlaceCard: React.FC<
  {
    className?: string;
    onClick?: (slug: string) => void;
    bottomBorder?: boolean;
    topBorder?: boolean;
  } & PlaceType
> = ({
  className,
  image,
  name,
  time,
  cost,
  transferType,
  slug,
  onClick,
  timeType,
  bottomBorder = true,
  topBorder = false,
}) => {
  const [ref, isHovered] = useHover();
  const { $t, $i18n } = useTranslation();

  const Icon = transferIcons[transferType];

  return (
    <div
      ref={ref}
      onClick={() => onClick?.(slug)}
      className={classNames(
        className,
        "px-7 group w-full h-72 md:h-80 rounded hover:bg-gradient-to-b from-[#115B74]"
      )}
    >
      <div
        className={classNames(
          bottomBorder && "border-b border-b-light/20",
          topBorder && "border-t border-t-light/20",
          "gap-x-10 lg:gap-x-0 py-7 w-full h-full grid lg:grid-cols-[1fr_1fr] relative"
        )}
      >
        <div className="relative col-span-1 rounded overflow-hidden h-full w-full lg:w-[448px]">
          <div className="absolute block lg:hidden z-10 h-full w-full bg-gradient-to-b from-[#180F0B]/80 to-[#180F0B]/30" />
          <img
            src={image}
            className={classNames(
              "absolute transition-transform duration-500 object-cover h-full w-full group-hover:scale-110"
            )}
          />
        </div>
        <div className="left-4 z-10 bottom-10 absolute lg:static col-span-1 max-w-md sm:pr-14 lg:pr-7">
          <span className="text-light font-medium text-[2rem] leading-none overflow-ellipsis">
            {name[$i18n]}
          </span>
          <div className="pt-3 lg:py-6 flex items-center">
            <span className="text-accent pr-4">
              {$t("pages.location.card.transfer")}
            </span>
            <Icon className="mr-2" />
            <span className="text-accent">
              {time} {plural(time, ...pluralConfig[$i18n][timeType])}
            </span>
          </div>
          <span className="text-base font-medium text-light ml-auto">
            {$t("moneyFrom")}{" "}
            {cost.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>
        <ArrowIcon
          isHovered={isHovered}
          className="z-10 absolute right-4 top-10 lg:bottom-auto lg:top-7"
          pathClassName="group-hover:text-[#826C55] text-light"
        />
      </div>
    </div>
  );
};

export const PlaceCardLoader = ({
  bottomBorder = true,
  topBorder = false,
}: {
  bottomBorder?: boolean;
  topBorder?: boolean;
}) => (
  <div className="px-7 group w-full h-72 md:h-80 rounded">
    <div
      className={classNames(
        bottomBorder && "border-b border-b-light/20",
        topBorder && "border-t border-t-light/20",
        "gap-x-10 lg:gap-x-0 py-7 w-full h-full relative"
      )}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="lds-hourglass" />
      </div>
    </div>
  </div>
);
