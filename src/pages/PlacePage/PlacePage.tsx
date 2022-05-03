import classNames from "classnames";
import { useStore } from "effector-react";
import { useTranslation } from "entities/language/lib";
import { $place } from "entities/place/models";
// import { useParams } from "react-router-dom";
import { StarFrameProps } from "shared/components/StarFrame";
import plural from "plural-ru";
import { ReactComponent as SerchLogo } from "app/assets/images/search.svg";
import { useFocus } from "shared/lib/hooks/useFocus";
import { HostelCard } from "entities/hostels/ui";

import chillLogo from "./config/images/chill.svg";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesPaths } from "shared/config/constants";
import { Header } from "widgets/Header/Header";
import Flag from "react-world-flags";
import { Breadcrumb } from "shared/components/Breadcrumb";

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

  const [beforeSuggestion, afterSuggestion] = useMemo(() => {
    const hostels = place?.hotels ?? [];

    const firstElement = hostels.slice(0, 1);
    const lastElement = hostels.slice(-1);
    const middleArray = hostels.slice(0, -1);

    return [
      firstElement.concat(middleArray.slice(1, 3)),
      middleArray.slice(3, -1).concat(lastElement),
    ];
  }, [place?.hotels]);

  if (!place) return null;

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
                  name: $t("pages.place.name"),
                  route: RoutesPaths.Main,
                },
                {
                  name: place.name[$i18n],
                },
              ]}
            />
          }
          childrenClassName="flex justify-center"
          absoluteElementsElement={
            <img
              className="max-w-none moving-block object-cover"
              src={place.image}
            />
          }
        >
          <div className="flex flex-col items-center justify-center">
            <Flag code={place.countryCode} className="w-12 h-12 mx-auto" />
            <div className="text-light text-[64px] font-normal mx-auto max-w-[850px] item">
              {place.name[$i18n]}
            </div>
            <div className="w-full text-light text-base font-normal pt-6 whitespace-nowrap">
              <div className="pl-[50%]">
                {$t("pages.place.title.text1")}
                {place.totalHotelsNumber
                  ? ` ${$t("pages.place.title.insert")} ${
                      place.totalHotelsNumber
                    }`
                  : ""}{" "}
              </div>
              <div className="pl-[50%] whitespace-nowrap">
                {$t("pages.place.title.text2")}{" "}
                <span className="bg-gradient-to-t from-[#FAE4BC] to-[#D6A072] bg-clip-text hover:text-fill-transparent text-accent">
                  {!isNaN(place.hotelsNumber as number) &&
                    place.hotelsNumber !== null &&
                    `${place.hotelsNumber} ${plural(
                      place.hotelsNumber,
                      ...$t("pages.place.hotelsPlural")
                    )}`}
                </span>
              </div>
            </div>
          </div>
        </Header>
        <div className="pt-5 w-full flex flex-col">
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
              placeholder={$t("pages.place.search.placeholder")}
            />
          </div>
          {beforeSuggestion.map((hostel, i) => (
            <HostelCard
              onClick={handleHostelClick}
              key={hostel.slug}
              {...hostel}
              className="cursor-pointer"
            />
          ))}
          <div className="flex-grow w-full items-center rounded px-6 py-7">
            <div className="grid grid-cols-[100px_auto] grid-rows-[auto_auto] ml-auto w-1/2 items-center bg-accent rounded p-6 pr-16">
              <img src={chillLogo} className="opacity-50" />
              <div className="text-base">{$t("pages.place.suggestion")} </div>
              <div />
              <div className="font-extrabold uppercase text-xs underline pt-3 cursor-pointer hover:no-underline">
                {$t("pages.main.supportText.line2")}
              </div>
            </div>
          </div>
          {afterSuggestion.map((hostel, i) => (
            <HostelCard
              topBorder={i === 0}
              bottomBorder={i !== afterSuggestion.length - 1}
              onClick={handleHostelClick}
              key={hostel.slug}
              {...hostel}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
