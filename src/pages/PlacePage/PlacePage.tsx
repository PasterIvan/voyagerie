import classNames from "classnames";
import { useStore } from "effector-react";
import { useTranslation } from "entities/language/lib";
import { $place } from "entities/place/models";
// import { useParams } from "react-router-dom";
import { StarFrameProps } from "shared/components/StarFrame";
import plural from "plural-ru";
import { ReactComponent as SerchLogo } from "app/assets/images/search.svg";
import { useFocus } from "shared/lib/hooks/useFocus";
import { FaqBlock } from "pages/MainPage/components/FaqBlock";
import { HostelCard } from "entities/hostels/ui";

import chillLogo from "./config/images/chill.svg";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ImageWithLogo } from "shared/components/ImageWithStarFrame";
import { TemperatureCard } from "shared/components/TemperatureCard/TemperatureCard";
import { RoutesPaths } from "shared/config/constants";

export const PlacePage = () => {
  // const { id } = useParams();
  const [ref, isFocused] = useFocus();

  const place = useStore($place);
  const { $t, $i18n } = useTranslation();
  const navigate = useNavigate();

  const handleHostelClick = useCallback(
    (slug: string) => {
      navigate(`${RoutesPaths.Hostel}/${slug}`);
    },
    [navigate]
  );

  if (!place) return null;

  const hostels = place?.hotels ?? [];

  const beforeSuggestion = hostels.slice(0, 3);
  const afterSuggestion = hostels.slice(3);

  return (
    <div
      className={classNames(
        "background flex justify-center bg-black-background"
      )}
    >
      <div className="border-accent/25 border-x flex flex-col items-center mr-28">
        <ImageWithLogo
          name={place.name[$i18n]}
          src={place.image}
          frameProps={{
            bottomRight: false,
          }}
        />
        <div className="p-10 w-full flex flex-col">
          <div className="w-full flex items-start justify-between">
            <div className="text-light flex flex-col">
              <span className="text-lg font-normal">
                {$t("pages.place.title.text1")}
                {place.totalHotelsNumber
                  ? ` ${$t("pages.place.title.insert")} ${
                      place.totalHotelsNumber
                    }`
                  : ""}{" "}
                {$t("pages.place.title.text2")}
              </span>
              <span className="text-light text-5xl font-medium">
                {!isNaN(place.hotelsNumber as number) &&
                  place.hotelsNumber !== null &&
                  `${place.hotelsNumber} ${plural(
                    place.hotelsNumber,
                    ...$t("pages.place.hotelsPlural")
                  )}`}
              </span>
            </div>
            <TemperatureCard
              size="md"
              airTemperature={place.airTemperature}
              waterTemperature={place.waterTemperature}
            />
          </div>
          <div className="relative mt-6 mb-9">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SerchLogo
                className={classNames(
                  "text-accent",
                  !isFocused ? "opacity-50" : "opacity-75"
                )}
              />
            </div>
            <input
              ref={ref}
              type="text"
              className="placeholder-accent/50 focus:ring-accent/50 focus:border-accent/50 rounded border border-accent/50 text-accent pl-10  px-4 py-3 h-12 w-full bg-transparent"
              placeholder={$t("pages.place.search.placeholder")}
            />
          </div>
          {beforeSuggestion.map((hostel) => (
            <HostelCard
              onClick={handleHostelClick}
              key={hostel.slug}
              {...hostel}
              className="cursor-pointer mb-8"
            />
          ))}
          <div className="w-full mb-8 items-center bg-accent rounded flex p-6">
            <img src={chillLogo} className="opacity-50" />
            <span className="pl-6 text-lg">{$t("pages.place.suggestion")}</span>
            <button className="bg-black text-lg font-medium rounded h-full text-light hover:text-accent text-center px-6 whitespace-nowrap">
              {$t("pages.place.button")}
            </button>
          </div>
          {afterSuggestion.map((hostel) => (
            <HostelCard
              onClick={handleHostelClick}
              key={hostel.slug}
              {...hostel}
              className="cursor-pointer mb-8"
            />
          ))}
          <FaqBlock className="ml-auto" elementClassName="-mr-[5.5rem]" />
        </div>
      </div>
    </div>
  );
};
