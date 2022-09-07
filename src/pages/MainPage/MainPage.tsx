import classNames from "classnames";

import { MainText } from "./components/MainText";
import { FenceList } from "shared/components/FenceList";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "entities/language/lib";
import { LocationCard, LocationCardLoader } from "entities/location/ui";

import { ArrowUp } from "../../app/assets/images/ArrowUp";
import { RoutesPaths } from "shared/config/constants";
import { Header } from "widgets/Header/Header";
import { useRef } from "react";
import { useGate, useStore } from "effector-react";
import { mainPageModel } from ".";
import { questionnaireModel } from "feature/questionnaire";
import { ErrorBoundary } from "shared/components/ErrorBoyundary";
import { ManualErrorBoundary } from "widgets/ErrorComponent/ManualErrorBoundary";
import { $items, fx, gates } from "./models";

function MainPage() {
  useGate(gates.mainGate, {
    scrollToLocationsHandler: () => {
      window.scrollTo({
        top:
          (headerRef.current?.offsetTop ?? 0) +
          (headerRef.current?.offsetHeight ?? 0),
        behavior: "smooth",
      });
    },
    scrollToTop: () => {
      window.scrollTo(0, 0);
    },
  });

  const isItemsloading = useStore(fx.getCountriesFx.pending);
  const items = useStore($items);

  const navigate = useNavigate();
  const { $t } = useTranslation();
  const headerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={classNames("flex justify-center bg-black-background w-full")}
    >
      <div className="flex flex-col items-center w-full">
        <Header
          childrenClassName="flex flex-col justify-evenly"
          containerClassName="rounded-b-2xl border border-light/20 p-4"
          ref={headerRef}
          className="min-h-[500px] lg:h-screen h-[100vh]"
          leftBottomElement={
            <ArrowUp
              className="cursor-pointer rotate-180"
              onClick={() => mainPageModel.events.scrollToLocations()}
            />
          }
          absoluteElement={
            <video
                autoPlay
                loop
                muted
                playsInline
              className="object-cover h-full w-full"
              src="https://dl.dropboxusercontent.com/s/qli8luo7yveajm5/production%20ID_4069480.mp4?dl=0"
            />
          }
        >
          <MainText className="mx-auto md:max-w-[850px] item" />
          <button
            onClick={() => {
              questionnaireModel.modal.events.openModal();
            }}
            className="my-6 mx-auto uppercase text-xs font-bold w-56 h-14 bg-gradient-to-b from-brown-background to-[#D6A072] hover:bg-none hover:bg-black rounded-[100px] hover:text-light transition-colors duration-500"
          >
            {$t("pages.main.button")}
          </button>
        </Header>
        <div className="p-4 pb-8 lg:pb-32 w-full">
          <div className="w-full border border-light/20 rounded-2xl px-4 pt-4 md:pt-16 lg:pt-32 pb-4">
            <div className="text-3xl sm:text-5xl font-semibold text-light text-center">
              {$t("pages.main.chooseCountryText")}
            </div>
            {!items || isItemsloading ? (
              <FenceList
                className="w-full gap-4 pt-8 md:pt-20"
                items={Array.from({ length: 5 })}
                render={(item, i) => <LocationCardLoader {...item} key={i} />}
              />
            ) : (
              <FenceList
                className="w-full gap-4 pt-8 md:pt-20"
                items={items}
                render={(item) => (
                  <LocationCard
                    {...item}
                    key={item.slug}
                    onClick={() =>
                      navigate(`${RoutesPaths.Location}/${item.slug}`)
                    }
                  />
                )}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default () => {
  return (
    <ManualErrorBoundary gate={gates.errorGate}>
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    </ManualErrorBoundary>
  );
};
