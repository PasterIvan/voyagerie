import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import { Lines } from "shared/components/Lines";
import { StarFrame } from "shared/components/StarFrame";
import { HotelType } from "./models";
import plural from "plural-ru";
import { transferIcons } from "./config";
import { useHover } from "shared/lib/hooks/useHover";

const pluralConfig: Record<HotelType["timeType"], [string, string, string]> = {
  minutes: ["минут", "минуты", "минут"],
  hours: ["часов", "часа", "часов"],
  days: ["день", "дня", "дней"],
  nights: ["ночь", "ночи", "ночей"],
  weeks: ["неделя", "недели", "недель"],
};

export const HostelCard: React.FC<
  { className?: string; onClick?: (slug: string) => void } & HotelType
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
}) => {
  const [ref, isHovered] = useHover();
  const { $i18n } = useTranslation();

  const Icon = transferIcons[transferType];

  return (
    <StarFrame
      ref={ref}
      bottomLeft={false}
      bottomRight={false}
      topRight={false}
      onClick={() => onClick?.(slug)}
      className={classNames(
        className,
        "flex w-full h-48 rounded bg-accent-dark/10",
        isHovered && "hover:bg-accent-dark/20"
      )}
    >
      <div className="rounded overflow-hidden w-60 m-4 mr-6">
        <img
          src={image}
          className={classNames(
            "transition-transform duration-500 object-cover h-full w-full",
            isHovered && "scale-110"
          )}
        />
      </div>
      <div className="flex flex-col py-6 pr-6 flex-grow">
        <span className="text-accent font-medium text-[2rem]">
          {name[$i18n]}
        </span>
        <Lines.HorizontalLine className="mt-auto mb-2 text-accent/25">
          <Lines.Star className="text-accent opacity-25" />
        </Lines.HorizontalLine>
        <div className="flex items-center">
          <span className="text-accent opacity-50 pr-4">Трансфер</span>
          <Icon className="mr-2" />
          <span className="text-accent">
            {time} {plural(time, ...pluralConfig[timeType])}
          </span>
          <span className="text-lg font-medium text-light ml-auto">
            от{" "}
            {cost.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>
      </div>
    </StarFrame>
  );
};
