import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import { Lines } from "shared/components/Lines";
import { StarFrame } from "shared/components/StarFrame";
import { $place, PlaceType } from "./models";
import plural from "plural-ru";
import { transferIcons } from "./config";
import { useHover } from "shared/lib/hooks/useHover";
import { ArrowIcon } from "entities/location/config/Arrow";

const pluralConfig: Record<PlaceType["timeType"], [string, string, string]> = {
  minutes: ["минут", "минуты", "минут"],
  hours: ["часов", "часа", "часов"],
  days: ["день", "дня", "дней"],
  nights: ["ночь", "ночи", "ночей"],
  weeks: ["неделя", "недели", "недель"],
};

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
        "px-7 group w-full h-80 rounded hover:bg-gradient-to-b from-[#115B74]"
      )}
    >
      <div
        className={classNames(
          bottomBorder && "border-b border-b-light/20",
          topBorder && "border-t border-t-light/20",
          "py-7 w-full h-full grid grid-cols-[1fr_1fr] relative"
        )}
      >
        <div className="col-span-1 rounded overflow-hidden w-[448px]">
          <img
            src={image}
            className={classNames(
              "transition-transform duration-500 object-cover h-full w-full group-hover:scale-110"
            )}
          />
        </div>
        <div className="col-span-1 max-w-md">
          <span className="text-light font-medium text-[2rem] leading-none">
            {name[$i18n]}
          </span>
          <div className="py-6 flex items-center">
            <span className="text-accent pr-4">
              {$t("pages.location.card.transfer")}
            </span>
            <Icon className="mr-2" />
            <span className="text-accent">
              {time} {plural(time, ...pluralConfig[timeType])}
            </span>
          </div>
          <span className="text-base font-medium text-light ml-auto">
            от{" "}
            {cost.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>
        <ArrowIcon
          isHovered={isHovered}
          className="absolute right-0 top-7"
          pathClassName="group-hover:text-[#826C55] text-light"
        />
      </div>
    </div>
  );
};
