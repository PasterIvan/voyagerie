import classNames from "classnames";
import { useStore } from "effector-react";
import { useTranslation } from "entities/language/lib";
import { $location } from "entities/location/models";
// import { useParams } from "react-router-dom";
import plural from "plural-ru";
import { ReactComponent as SerchLogo } from "app/assets/images/search.svg";
import { useFocus } from "shared/lib/hooks/useFocus";
import { PlaceCard } from "entities/place/ui";

import chillLogo from "./config/images/chill.svg";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesPaths } from "shared/config/constants";
import { Header } from "widgets/Header/Header";
import Flag from "react-world-flags";
import { Breadcrumb } from "shared/components/Breadcrumb";
import { mainPageModel } from "pages/MainPage";
import { useScrollToTop } from "shared/lib/hooks/useScrollToTop";

export const LocationPage = () => {
  useScrollToTop();

  // const { id } = useParams();
  const [ref, isFocused] = useFocus();

  const location = useStore($location);
  const { $t, $i18n } = useTranslation();
  const navigate = useNavigate();

  const handlePlaceClick = useCallback(
    (slug: string) => {
      navigate(`${RoutesPaths.Place}/${slug}`);
    },
    [navigate]
  );

  const [beforeSuggestion, afterSuggestion] = useMemo(() => {
    const places = location?.hotels ?? [];

    const firstElement = places.slice(0, 1);
    const lastElement = places.slice(-1);
    const middleArray = places.slice(0, -1);

    return [
      firstElement.concat(middleArray.slice(1, 3)),
      middleArray.slice(3, -1).concat(lastElement),
    ];
  }, [location?.hotels]);

  if (!location) return null;

  return (
    <div
      className={classNames("flex justify-center bg-black-background w-full")}
    >
      <div className="flex flex-col items-center w-full">
        <Header
          containerClassName="rounded-b-2xl border border-light/20 p-4"
          className="min-h-[500px]"
          leftBottomElement={
            <Breadcrumb
              items={[
                { name: $t("pages.main.name"), route: RoutesPaths.Main },
                {
                  name: $t("pages.location.name"),
                  route: RoutesPaths.Main,
                  onClick: () => {
                    mainPageModel.events.scrollToLocations();
                  },
                },
                {
                  name: location.name[$i18n],
                },
              ]}
            />
          }
          childrenClassName="flex justify-center"
          absoluteElementsElement={
            <img
              alt="location"
              className="max-w-none moving-block object-cover"
              src={location.image}
            />
          }
        >
          <div className="flex flex-col items-center justify-center">
            <Flag code={location.countryCode} className="w-12 h-12 mx-auto" />
            <div className="text-light text-[64px] font-normal mx-auto max-w-[850px] item text-center">
              {location.name[$i18n]}
            </div>
            <div className="w-full text-light text-base font-normal pt-6 whitespace-nowrap">
              <div className="pl-[50%]">
                {$t("pages.location.title.text1")}
                {location.totalHotelsNumber
                  ? ` ${$t("pages.location.title.insert")} ${
                      location.totalHotelsNumber
                    }`
                  : ""}{" "}
              </div>
              <div className="pl-[50%] whitespace-nowrap">
                {$t("pages.location.title.text2")}{" "}
                <span className="bg-gradient-to-t from-[#FAE4BC] to-[#D6A072] bg-clip-text hover:text-fill-transparent text-accent">
                  {!isNaN(location.hotelsNumber as number) &&
                    location.hotelsNumber !== null &&
                    `${location.hotelsNumber} ${plural(
                      location.hotelsNumber,
                      ...$t("pages.location.hotelsPlural")
                    )}`}
                </span>
              </div>
            </div>
          </div>
        </Header>
        <div className="pt-5 pb-32 w-full flex flex-col">
          <div className="mx-auto w-[292px] relative mb-5">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
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
              className="text-xs bg-light rounded-full font-bold uppercase placeholder-[#C4C4C4] focus:ring-accent/50 focus:border-accent/50 border border-accent/50 text-[#C4C4C4] pr-10 px-4 py-3 h-12 w-full bg-transparent"
              placeholder={$t("pages.location.search.placeholder")}
            />
          </div>
          {beforeSuggestion.map((place) => (
            <PlaceCard
              onClick={handlePlaceClick}
              key={place.slug}
              {...place}
              className="cursor-pointer"
            />
          ))}
          <div className="flex-grow w-full items-center rounded px-6 py-7">
            <div className="grid grid-cols-[70px_auto] grid-rows-[auto_auto] ml-auto w-1/2 items-center bg-accent rounded p-6 pr-16">
              <img alt="chill" src={chillLogo} className="opacity-50" />
              <div className="text-base">
                {$t("pages.location.suggestion")}{" "}
              </div>
              <div />
              <div className="font-extrabold uppercase text-xs underline pt-3 cursor-pointer hover:no-underline">
                {$t("pages.main.supportText.line2")}
              </div>
            </div>
          </div>
          {afterSuggestion.map((place, i) => (
            <PlaceCard
              topBorder={i === 0}
              bottomBorder={i !== afterSuggestion.length - 1}
              onClick={handlePlaceClick}
              key={place.slug}
              {...place}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};