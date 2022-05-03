import classNames from "classnames";

import { MainText } from "./components/MainText";
import { FenceList } from "shared/components/FenceList";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "entities/language/lib";
import { PlaceCard } from "entities/place/ui";
import { placesMock } from "shared/api/placesMock";

import { ArrowDown } from "./config/images/ArrowDown";
import { RoutesPaths } from "shared/config/constants";
import { Header } from "widgets/Header/Header";
import { useRef } from "react";
import { useGate } from "effector-react";
import { mainGate, scrollToPlaces } from "./models";

export const MainPage = () => {
  const navigate = useNavigate();
  const { $t } = useTranslation();
  const headerRef = useRef<HTMLDivElement | null>(null);

  useGate(mainGate, {
    scrollToPlacesHandler: () =>
      window.scrollTo({
        top:
          (headerRef.current?.offsetTop ?? 0) +
          (headerRef.current?.offsetHeight ?? 0),
        behavior: "smooth",
      }),
  });

  return (
    <div
      className={classNames("flex justify-center bg-black-background w-full")}
    >
      <div className="flex flex-col items-center w-full">
        <Header
          childrenClassName="flex flex-col justify-around"
          containerClassName="rounded-b-2xl border border-light/20 p-4"
          ref={headerRef}
          className="min-h-[500px] h-screen max-h-[1000px]"
          leftBottomElement={
            <ArrowDown
              className="cursor-pointer"
              onClick={() => scrollToPlaces()}
            />
          }
          absoluteElementsElement={
            <video
              autoPlay
              muted
              loop
              className="object-cover"
              src="https://dl.dropboxusercontent.com/s/qli8luo7yveajm5/production%20ID_4069480.mp4?dl=0"
            />
          }
        >
          <MainText className="mx-auto max-w-[850px] item" />
          <button className="mx-auto uppercase text-xs font-bold w-56 h-14 bg-gradient-to-b from-brown-background to-[#D6A072] hover:bg-none hover:bg-black rounded-[100px] hover:text-light transition-colors duration-500">
            {$t("pages.main.button")}
          </button>
        </Header>
        <div className="p-4 pb-32 w-full">
          <div className="w-full border border-light/20 rounded-2xl px-4 pt-32 pb-4">
            <div className="text-5xl font-semibold text-light text-center">
              {$t("pages.main.chooseCountryText")}
            </div>
            <FenceList
              className="w-full gap-4 pt-20"
              items={placesMock}
              render={(item) => (
                <PlaceCard
                  {...item}
                  key={item.slug}
                  onClick={() => navigate(`${RoutesPaths.Place}/${item.slug}`)}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
