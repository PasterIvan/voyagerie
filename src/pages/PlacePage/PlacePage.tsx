import classNames from "classnames";
import { useStore } from "effector-react";
import { $place, PlaceOverviewType } from "entities/place/models";
import { useTranslation } from "entities/language/lib";
import { useRef, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "shared/lib/hooks/useScrollToTop";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "shared/config/styles";

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

export default function PlacePage() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "tablet");
  useScrollToTop();
  const navigate = useNavigate();

  // const { id } = useParams();
  const place = useStore($place);
  const { $t, $i18n } = useTranslation();

  const [swiper, setSwiper] = useState<any>(null);
  const swiperRef = useRef<any>(null);

  const chooseHandler = () => {
    if (!place?.slug) return;
    navigate(`${RoutesPaths.Place}/${place.slug}/order`);
  };

  if (!place) return null;

  return (
    <div
      className={classNames("flex justify-center bg-black-background w-full")}
    >
      <div className="items-center w-full">
        <Header
          faqClassName="hidden sm:inline"
          containerClassName="gap-y-0 grid-cols-1 sm:grid-cols-[auto_auto] rounded-b-2xl border border-light/20 p-4"
          className="min-h-[500px]"
          leftBottomElement={
            <Breadcrumb
              items={[
                { name: $t("pages.main.name"), route: RoutesPaths.Main },
                {
                  name: $t("pages.location.name"),
                  route: RoutesPaths.Main,
                  onClick: () => mainPageModel.events.scrollToLocations(),
                },
                {
                  name: place.location[$i18n],
                  route: `${RoutesPaths.Location}/${place.locationSlug}`,
                },
                {
                  name: place.name[$i18n],
                },
              ]}
            />
          }
          childrenClassName="flex flex-col justify-around"
          absoluteElementsElement={
            <img
              className="max-w-none moving-block object-cover"
              src={place.image}
            />
          }
        >
          <div className="text-light text-4xl sm:text-[64px] font-normal mx-auto md:max-w-[850px] item text-center leading-0 sm:leading-[70px] max-w-full break-words">
            {place.name[$i18n]}
          </div>
          <button
            onClick={chooseHandler}
            className="my-6 px-7 mx-auto uppercase text-xs font-bold h-14 bg-gradient-to-b from-brown-background to-[#D6A072] hover:bg-none hover:bg-black rounded-[100px] hover:text-light transition-colors duration-500"
          >
            Выбрать виллу в этом отеле
          </button>
        </Header>
        <div className="w-full px-4 pt-10 flex flex-col">
          <div className="font-[Manrope] text-light flex-grow w-full grid grid-cols-1 md:grid-cols-2 rounded px-6 pb-10 items-start">
            <div className="text-base font-extrabold uppercase flex items-center">
              <BedIcon className="inline mr-3" />
              {$t("pages.place.labels.name")}
            </div>
            <div
              className="mt-5 md:mt-0 content-editor text-base md:text-2xl"
              dangerouslySetInnerHTML={{
                __html: place.description[$i18n],
              }}
            />
          </div>
          <div className="font-[Manrope] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-0 md:gap-x-4">
            {fieldsResource.map(({ localePath, objectKey, Icon, fence }) => (
              <div
                key={objectKey}
                className={classNames(
                  "bg-light/10 rounded-2xl p-7 text-light",
                  fence && "col-span-1 md:col-span-2 lg:col-span-1"
                )}
              >
                <div className="uppercase font-extrabold text-base pb-7 flex items-center">
                  <Icon className="mr-3" /> {$t(localePath)}
                </div>
                <div
                  className="font-[Manrope] text-xs md:text-base content-editor"
                  dangerouslySetInnerHTML={{
                    __html: place.content[objectKey][$i18n],
                  }}
                />
              </div>
            ))}
          </div>
          <Lines.HorizontalLine className="my-6 text-light/20" />
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
            {place.gallery.map((image, idx) => (
              <SwiperSlide
                className="w-full h-full rounded overflow-hidden"
                key={idx}
              >
                <img className="w-full h-full object-cover" src={image} />
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
          <Lines.HorizontalLine className="text-light/20" />
          <div className="w-full flex py-16">
            <button
              onClick={chooseHandler}
              className="px-7 mx-auto uppercase text-xs font-bold h-14 bg-gradient-to-b from-brown-background to-[#D6A072] hover:bg-none hover:bg-black rounded-[100px] hover:text-light transition-colors duration-500"
            >
              Выбрать виллу в этом отеле
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
