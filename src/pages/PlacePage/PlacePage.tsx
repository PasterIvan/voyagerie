import classNames from "classnames";
import { useStore } from "effector-react";
import { useTranslation } from "entities/language/lib";
import { $place } from "entities/place/models";
// import { useParams } from "react-router-dom";
import { StarFrame } from "shared/components/StarFrame";
import { ReactComponent as LogoSmall } from "app/assets/images/logo-small.svg";
import plural from "plural-ru";
import { TemperatureCard } from "entities/place/ui";
import { ReactComponent as SerchLogo } from "app/assets/images/search.svg";
import { useFocus } from "shared/lib/hooks/useFocus";
import { FaqBlock } from "pages/MainPage/components/FaqBlock";
import { HostelCard } from "entities/hostels/ui";
import { placeMock } from "shared/api/placesMock";

import chillLogo from "./config/images/chill.svg";

export const PlacePage = () => {
  // const { id } = useParams();
  const [ref, isFocused] = useFocus();

  const place = useStore($place);
  const { $i18n } = useTranslation();

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
      <div className="w-[927px] border-accent/25 border-x flex flex-col items-center mr-28">
        <StarFrame bottomRight={false} className="relative mt-16 h-60 w-full">
          <div className="w-full h-full overflow-hidden">
            <img
              className="max-w-none moving-block object-cover"
              src={place.image}
            />
          </div>
          <LogoSmall className="absolute left-10 -top-7" />
          <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-[#000000]/0 to-[#000000] opacity-75" />
          <div className="absolute text-light left-10 bottom-6 text-5xl font-medium">
            {place.name[$i18n]}
          </div>
        </StarFrame>
        <div className="p-10 w-full flex flex-col">
          <div className="w-full flex items-start justify-between">
            <div className="text-light flex flex-col">
              <span className="text-lg font-normal">
                Мы отобрали
                {place.totalHotelsNumber
                  ? ` из ${place.totalHotelsNumber}`
                  : ""}{" "}
                самые лучшие
              </span>
              <span className="text-light text-5xl font-medium">
                {!isNaN(place.hotelsNumber as number) &&
                  place.hotelsNumber !== null &&
                  `${place.hotelsNumber} ${plural(
                    place.hotelsNumber,
                    "отель",
                    "отеля",
                    "отелей"
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
              placeholder="Поиск по названию"
            />
          </div>
          {beforeSuggestion.map((hostel) => (
            <HostelCard {...hostel} className="cursor-pointer mb-8" />
          ))}
          <div className="w-full items-center bg-accent rounded flex p-6">
            <img src={chillLogo} className="opacity-50" />
            <span className="pl-6 text-lg">
              Если отеля, который вы ищете нет в списке, напишите нам, и мы
              сделаем вам предложение.
            </span>
            <button className="bg-black text-lg font-medium rounded h-full text-light hover:text-accent text-center px-6 whitespace-nowrap">
              Свяжитесь с нами
            </button>
          </div>
          {afterSuggestion.map((hostel) => (
            <HostelCard {...hostel} className="cursor-pointer mb-8" />
          ))}
          <FaqBlock className="ml-auto" elementClassName="-mr-[5.5rem]" />
        </div>
      </div>
    </div>
  );
};
