import classNames from "classnames";
import { useGate, useStore } from "effector-react";
import { $place } from "entities/place/models";
import { useTranslation } from "entities/language/lib";
import { useMemo, useRef, useState } from "react";
import { Breadcrumb } from "shared/components/Breadcrumb";
import { Lines } from "shared/components/Lines";
import { RoutesPaths } from "shared/config/constants";
import { LocaleObject } from "shared/config/locales/model";
import { Paths } from "shared/lib/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Header } from "widgets/Header/Header";

import { ReactComponent as BedIcon } from "./config/bed-icon.svg";
import { ReactComponent as Health } from "./config/health-icon.svg";
import { ReactComponent as Child } from "./config/child-icon.svg";
import { ReactComponent as Restautants } from "./config/restautants-icon.svg";
import { ReactComponent as Galery } from "./config/galery-icon.svg";
import { ArrowUp } from "app/assets/images/ArrowUp";
import { mainPageModel } from "pages/MainPage";
import { useNavigate, useParams } from "react-router-dom";
import { useScrollToTop } from "shared/lib/hooks/useScrollToTop";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "shared/config/styles";
import { ErrorBoundary } from "shared/components/ErrorBoyundary";
import { ImageWithError } from "shared/components/ImageWithError";
import { gates } from "./models";
import { ManualErrorBoundary } from "widgets/ErrorComponent/EffectorErrorBoundary";
import { PlaceOverviewType } from "shared/api/api";
import { placeModel } from "entities/place";

const fieldsResource: {
  localePath: Paths<LocaleObject>;
  objectKey: keyof PlaceOverviewType["content"];
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  fence?: boolean;
}[] = [
  {
    localePath: "pages.place.labels.health",
    objectKey: "health",
    Icon: Health,
  },
  {
    localePath: "pages.place.labels.children",
    objectKey: "child",
    Icon: Child,
  },
  {
    localePath: "pages.place.labels.restuartants",
    objectKey: "restorans",
    Icon: Restautants,
    fence: true,
  },
];

const DESKTOP_SLIDES_COUNT = 3.4;
const MOBILE_SLIDES_COUNT = 2.4;

function PlacePage() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "tablet");
  const { id } = useParams();
  const place = useStore($place);
  const isLoading = useStore(placeModel.fx.getHotelFx.pending);

  useGate(gates.pageGate, {
    slug: id,
  });

  useScrollToTop();
  const navigate = useNavigate();

  const { $t, $i18n } = useTranslation();

  const [swiper, setSwiper] = useState<any>(null);
  const swiperRef = useRef<any>(null);

  const chooseHandler = () => {
    if (isLoading) return;
    if (!place?.slug) return;

    navigate(`${RoutesPaths.Place}/${place.slug}/order`);
  };

  const breadcrumb = useMemo(() => {
    const hasLocation =
      !isLoading &&
      Boolean(place?.location) &&
      Boolean(place?.name) &&
      Boolean(place?.locationSlug);

    return [
      { name: $t("pages.main.name"), route: RoutesPaths.Main },
      {
        name: $t("pages.location.name"),
        route: RoutesPaths.Main,
        onClick: () => mainPageModel.events.scrollToLocations(),
      },
      ...(hasLocation
        ? [
            {
              name: place!.location[$i18n],
              route: `${RoutesPaths.Location}/${place!.locationSlug}`,
            },
          ]
        : []),
      ...(hasLocation
        ? [
            {
              name: place!.name[$i18n],
            },
          ]
        : []),
    ];
  }, [$i18n, $t, isLoading, place]);

  return (
    <div
      className={classNames("flex justify-center bg-black-background w-full")}
    >
      <div className="items-center w-full">
        <Header
          faqClassName="hidden sm:inline"
          containerClassName="gap-y-0 grid-cols-1 sm:grid-cols-[auto_auto] rounded-b-2xl border border-light/20 p-4"
          className="min-h-[500px]"
          leftBottomElement={<Breadcrumb items={breadcrumb} />}
          childrenClassName="flex flex-col justify-around"
          absoluteElement={
            <ImageWithError
              className="max-w-none object-cover"
              errorClassName="w-full h-full"
              successClassName="moving-block"
              src={place?.image}
              alt="place"
            />
          }
        >
          {!place || isLoading ? (
            <div className="flex w-full justify-center items-center">
              <div className="lds-hourglass" />
            </div>
          ) : (
            <>
              <div className="text-light text-4xl sm:text-[64px] font-normal mx-auto md:max-w-[850px] item text-center leading-0 sm:leading-[70px] max-w-full break-words capitalize">
                {place.name[$i18n]}
              </div>
              {place.rooms?.length ? (
                <button
                  onClick={chooseHandler}
                  className="my-6 px-7 mx-auto uppercase text-xs font-bold h-14 bg-gradient-to-b from-brown-background to-[#D6A072] hover:bg-none hover:bg-black rounded-[100px] hover:text-light transition-colors duration-500"
                >
                  {$t("pages.place.button")}
                </button>
              ) : (
                <button className="my-6 px-7 mx-auto uppercase text-xs font-bold h-14 bg-black-background text-light cursor-not-allowed rounded-[100px]">
                  {$t("pages.place.disabledButton")}
                </button>
              )}
            </>
          )}
        </Header>
        <div className="w-full px-4 pt-10 flex flex-col">
          <div className="font-[Manrope] text-light flex-grow w-full grid grid-cols-1 md:grid-cols-2 rounded px-6 pb-10 items-start">
            <div className="text-base font-extrabold uppercase flex items-center">
              <BedIcon className="inline mr-3" />
              {$t("pages.place.labels.name")}
            </div>
            {!place || isLoading ? (
              <div className="md:mx-0 mt-5 md:mt-0 border border-light/50 h-64 rounded-lg w-full flex justify-center items-center">
                <div className="lds-hourglass" />
              </div>
            ) : (
              <div
                className="mt-5 md:mt-0 content-editor text-base md:text-2xl"
                dangerouslySetInnerHTML={{
                  __html: place.description[$i18n],
                }}
              />
            )}
          </div>
          <div className="font-[Manrope] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-0 md:gap-x-4 items-start">
            {fieldsResource.map(({ localePath, objectKey, Icon, fence }) => (
              <div
                key={objectKey}
                className={classNames(
                  "bg-light/10 rounded-2xl p-7 text-light min-h-[auto] md:min-h-full lg:min-h-[50%]",
                  fence && "col-span-1 md:col-span-2 lg:col-span-1"
                )}
              >
                <div className="uppercase font-extrabold text-base pb-7 flex items-center">
                  <Icon className="mr-3" /> {$t(localePath)}
                </div>
                {isLoading ? (
                  <div className="w-full flex justify-center items-center h-36">
                    <div className="lds-hourglass" />
                  </div>
                ) : (
                  <div
                    className="font-[Manrope] text-sm md:text-base content-editor"
                    dangerouslySetInnerHTML={{
                      __html: place?.content[objectKey][$i18n] || "",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <Lines.HorizontalLine className="my-6 text-light/20" />
          {(isLoading || place?.gallery.length) && (
            <>
              <div className="text-accent text-lg font-medium pb-6 flex items-center">
                <Galery className="mr-3" />
                {$t("pages.place.labels.galery")}
              </div>
              <Swiper
                // @ts-ignore
                ref={swiperRef}
                slidesPerView={
                  breakpoint !== "mobile"
                    ? DESKTOP_SLIDES_COUNT
                    : MOBILE_SLIDES_COUNT
                }
                spaceBetween={20}
                onSlideChange={setSwiper}
                className="w-full h-32 lg:h-44 xl:h-72"
              >
                {!place || isLoading
                  ? Array.from({ length: 4 }).map((_, i) => (
                      <SwiperSlide
                        className="w-full h-full rounded-lg overflow-hidden border-light/50 border flex justify-center items-center"
                        key={i}
                      >
                        <div className="lds-hourglass" />
                      </SwiperSlide>
                    ))
                  : place.gallery.map((image, idx) => (
                      <SwiperSlide
                        className="w-full h-full rounded overflow-hidden"
                        key={idx}
                      >
                        <ImageWithError
                          className="w-full h-full object-cover"
                          src={image}
                          alt="gallery place"
                        />
                      </SwiperSlide>
                    ))}
              </Swiper>
              <div className="flex justify-between w-32 py-8 mx-auto select-none">
                <ArrowUp
                  canHover={swiper?.activeIndex !== 0}
                  className={classNames("-rotate-90 cursor-pointer")}
                  onClick={() => {
                    swiperRef.current?.swiper.slidePrev();
                  }}
                />
                <ArrowUp
                  canHover={swiper?.activeIndex !== 0}
                  className={classNames("rotate-90 cursor-pointer")}
                  onClick={() => {
                    swiperRef.current?.swiper.slideNext();
                  }}
                />
              </div>
            </>
          )}
          <Lines.HorizontalLine className="text-light/20" />
          <div className="w-full flex py-16">
            {place?.rooms?.length ? (
              <button
                onClick={chooseHandler}
                className={classNames(
                  isLoading && "cursor-not-allowed",
                  "px-7 mx-auto uppercase text-xs font-bold h-14 bg-gradient-to-b from-brown-background to-[#D6A072] hover:bg-none hover:bg-black rounded-[100px] hover:text-light transition-colors duration-500"
                )}
              >
                {$t("pages.place.button")}
              </button>
            ) : (
              <button className="my-6 px-7 mx-auto uppercase text-xs font-bold h-14 bg-black-background text-light cursor-not-allowed rounded-[100px]">
                {$t("pages.place.disabledButton")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default () => (
  <ManualErrorBoundary gate={gates.errorGate}>
    <ErrorBoundary>
      <PlacePage />
    </ErrorBoundary>
  </ManualErrorBoundary>
);
