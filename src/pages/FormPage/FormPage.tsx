import classNames from "classnames";
import { useStore } from "effector-react";
import { useTranslation } from "entities/language/lib";
import { $location } from "entities/location/models";
// import { useParams } from "react-router-dom";
import plural from "plural-ru";
import { useFocus } from "shared/lib/hooks/useFocus";

import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesPaths } from "shared/config/constants";
import { Header } from "widgets/Header/Header";
import Flag from "react-world-flags";
import { Breadcrumb } from "shared/components/Breadcrumb";
import { mainPageModel } from "pages/MainPage";

export const FormPage = () => {
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
      </div>
    </div>
  );
};
