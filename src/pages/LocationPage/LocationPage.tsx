import classNames from "classnames";
import { useGate, useStore } from "effector-react";
import { useTranslation } from "entities/language/lib";
import { $location } from "entities/location/models";
import { ReactComponent as SerchLogo } from "app/assets/images/search.svg";
import { useFocus } from "shared/lib/hooks/useFocus";
import { PlaceCard, } from "entities/place/components/PlaceCard";

import chillLogo from "./config/images/chill.svg";
import { useCallback, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RoutesPaths } from "shared/config/constants";
import { Header } from "widgets/Header/Header";
import Flag from "react-world-flags";
import { Breadcrumb } from "shared/components/Breadcrumb";
import { mainPageModel } from "pages/MainPage";
import { useScrollToTop } from "shared/lib/hooks/useScrollToTop";
import { footerModel } from "widgets/Footer";
import { ErrorBoundary } from "shared/components/ErrorBoyundary";
import { gates } from "./models";
import { ManualErrorBoundary } from "widgets/ErrorComponent/ManualErrorBoundary";
import { ImageWithError } from "shared/components/ImageWithError";
import { locationModel } from "entities/location";
import { PlaceCardLoader } from "entities/place/components/PlaceCardLoader";

function LocationPage() {
  const isLoading = useStore(locationModel.fx.getCountryFx.pending);
  const { id } = useParams();

  useGate(gates.pageGate, {
    slug: id,
  });

  const navigate = useNavigate();
  useScrollToTop();

  const [ref, isFocused] = useFocus();
  const [input, setInput] = useState("");

  const location = useStore($location);
  const { $t, $i18n } = useTranslation();

  const handlePlaceClick = useCallback(
    (slug: string) => {
      navigate(`${RoutesPaths.Place}/${slug}`);
    },
    [navigate]
  );

  const [beforeSuggestion, afterSuggestion] = useMemo(() => {
    const places = location?.hotels ?? [];
    const target = input
      ? places.filter((place) =>
          place.name[$i18n]
            .toLocaleLowerCase()
            .includes(input.toLocaleLowerCase())
        )
      : places;

    if (target.length < 2) {
      return [target, []];
    }

    if (target.length < 4) {
      const lastElement = target.pop();

      return [target, lastElement ? [lastElement] : []];
    }

    return [target.slice(0, 3), target.slice(3)];
  }, [input, $i18n, location?.hotels]);

  const breadcrumb = useMemo(() => {
    const hasLocation = !isLoading && Boolean(location?.name);

    return [
      { name: $t("pages.main.name"), route: RoutesPaths.Main },
      {
        name: $t("pages.location.name"),
        route: RoutesPaths.Main,
        onClick: () => {
          mainPageModel.events.scrollToLocations();
        },
      },
      ...(hasLocation
        ? [
            {
              name: location!.name[$i18n],
            },
          ]
        : []),
    ];
  }, [$i18n, isLoading, location]);

  return (
    <div
      className={classNames("flex justify-center bg-black-background w-full")}
    >
      <div className="flex flex-col items-center w-full">
        <Header
          faqClassName="hidden sm:inline"
          containerClassName="grid-cols-1 sm:grid-cols-[auto_auto] rounded-b-2xl border border-light/20 p-4"
          className="min-h-[500px]"
          leftBottomElement={<Breadcrumb items={breadcrumb} />}
          childrenClassName="flex justify-center w-full"
          absoluteElement={
            <ImageWithError
              hideOnError
              alt="location"
              className="max-w-none object-cover"
              successClassName="moving-block"
              errorClassName="w-full h-full"
              src={location?.image}
            />
          }
        >
          {!location || isLoading ? (
            <div className="flex w-full justify-center items-center">
              <div className="lds-hourglass" />
            </div>
          ) : (
            <div className="w-full sm:w-auto flex flex-col items-center justify-center max-w-full">
              <Flag
                code={location!.countryCode}
                className="w-12 h-auto mx-auto"
              />
              <div className="mt-3 leading-none text-light text-4xl sm:text-[64px] font-normal mx-auto max-w-full md:max-w-[850px] item text-center break-words">
                {location!.name[$i18n]}
              </div>
              <div className="w-full text-light text-base font-normal pt-6 whitespace-nowrap text-center">
                <div>{location!.description[$i18n]}</div>
              </div>
            </div>
          )}
        </Header>
        <div className="pt-5 pb-16 md:pb-32 w-full flex flex-col">
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
              value={input}
              onChange={(e) => !isLoading && setInput(e.target.value)}
              ref={ref}
              type="text"
              className={classNames(
                isLoading && "cursor-not-allowed",
                "text-xs bg-light rounded-full font-bold uppercase placeholder-[#C4C4C4] focus:ring-accent/50 focus:border-accent/50 border border-accent/50 text-[#C4C4C4] pr-10 px-4 py-3 h-12 w-full bg-transparent"
              )}
              placeholder={$t("pages.location.search.placeholder")}
            />
          </div>
          {isLoading ? (
            Array.from({ length: 2 }).map((_, i) => <PlaceCardLoader key={i} />)
          ) : !beforeSuggestion.length ? (
            <div className="w-full h-20 flex justify-center items-center">
              <div className="text-center text-light text-4xl">
                {input ? $t("notFound") : $t("noData")}
              </div>
            </div>
          ) : (
            beforeSuggestion.map((place) => (
              <PlaceCard
                onClick={handlePlaceClick}
                key={place.slug}
                {...place}
                className="cursor-pointer"
              />
            ))
          )}
          <div className="flex-grow w-full items-center rounded px-6 py-7">
            <div className="gap-x-3 grid xs:grid-cols-[70px_auto] grid-rows-[auto_auto] ml-auto lg:w-1/2 items-center bg-accent rounded p-6 sm:pr-16">
              <img
                alt="chill"
                src={chillLogo}
                className="mx-auto mb-4 xs:mb-0 opacity-50"
              />
              <div className="text-base text-center xs:text-left">
                {$t("pages.location.suggestion")}{" "}
              </div>
              <div />
              <div className="mx-auto xs:mx-0 pt-3">
                <button
                  onClick={() => footerModel.events.scrollToContacts()}
                  className="inline font-extrabold uppercase text-xs underline cursor-pointer hover:no-underline"
                >
                  {$t("pages.main.supportText.line2")}
                </button>
              </div>
            </div>
          </div>
          {isLoading ? (
            <PlaceCardLoader topBorder bottomBorder={false} />
          ) : (
            afterSuggestion.map((place, i) => (
              <PlaceCard
                topBorder={i === 0}
                bottomBorder={i !== afterSuggestion.length - 1}
                onClick={handlePlaceClick}
                key={place.slug}
                {...place}
                className="cursor-pointer"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default () => (
  <ManualErrorBoundary gate={gates.errorGate}>
    <ErrorBoundary>
      <LocationPage />
    </ErrorBoundary>
  </ManualErrorBoundary>
);
