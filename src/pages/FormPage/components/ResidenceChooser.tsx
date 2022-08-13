import classNames from "classnames";
import { useStore } from "effector-react";
import { useTranslation } from "entities/language/lib";
import { placeModel } from "entities/place";
import { PlaceListCard } from "entities/place/components/PlaceListCard";
import { useEffect, useRef, useState } from "react";
import { BsWindowSidebar } from "react-icons/bs";
import { ResidenceType } from "shared/api/api";
import { ImageWithLoader } from "shared/components/ImageWithLoader";
import { useHover } from "shared/lib/hooks/useHover";
import { usePropRef } from "shared/lib/hooks/usePropRef";
import SimpleBar from "simplebar-react";

export function ResidenceChooser({
  selectedResidence,
  choosedResidence,
  residences,
  onSelect,
  onChoose,
}: {
  selectedResidence: ResidenceType | null;
  choosedResidence: ResidenceType | null;
  residences: ResidenceType[];
  onSelect: (residence: ResidenceType | null) => void;
  onChoose: (residence: ResidenceType | null) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);

  const isLoading = useStore(placeModel.fx.getHotelFx.pending);
  const { $t, $i18n } = useTranslation();

  const isChoosed =
    choosedResidence &&
    selectedResidence &&
    choosedResidence?.id === selectedResidence?.id;

  const hasDescription = Boolean(selectedResidence?.description[$i18n]);
  const contentRef = useRef<SimpleBar | null>(null);

  const [ref, isHovered] = useHover([hasDescription]);

  const expandedRef = usePropRef(expanded);
  useEffect(() => {
    if (isHovered || !expanded) {
      return;
    }

    const timeout = setTimeout(() => {
      expandedRef.current && setExpanded(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isHovered, expanded]);

  useEffect(() => {
    try {
      //@ts-ignore
      contentRef.current.getScrollElement().scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (e) {}
  }, [expanded]);

  useEffect(() => {
    try {
      //@ts-ignore
      contentRef.current.getScrollElement().scrollTo(0, 0);
    } catch (e) {}
  }, [selectedResidence]);

  useEffect(() => {
    try {
      //@ts-ignore
      contentRef.current.getScrollElement().scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (e) {}
  }, [expanded]);

  useEffect(() => {
    setExpanded(false);
  }, [selectedResidence]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const hasScroll =
        //@ts-ignore
        contentRef.current?.contentEl.offsetHeight !==
        //@ts-ignore
        contentRef.current?.contentWrapperEl.offsetHeight;

      setCanExpand(hasDescription && hasScroll);
    });

    return () => clearTimeout(timeout);
  }, [hasDescription, selectedResidence]);

  if (isLoading) {
    return (
      <div className="flex w-full h-[500px] justify-center items-center">
        <div className="lds-hourglass" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl h-full max-h-[1000px] md:max-h-[500px] w-full pt-8 flex flex-col overflow-hidden border-light md:border-b">
      <span className="pl-4 text-lg font-medium text-accent">
        {$t("pages.form.labels.chooseRoom")}
      </span>
      <div className="flex flex-col md:flex-row overflow-hidden pt-6">
        <SimpleBar
          direction="rtl"
          data-simplebar-direction="rtl"
          className="pt-4 md:pt-0 md:h-auto order-2 md:order-1 flex-grow md:basis-2/5 pb-4 md:pb-0 pl-0 md:pl-4 w-full"
        >
          <div className={classNames("gap-x-4 flex md:flex-col items-stretch")}>
            {!residences.length ? (
              <div className="flex justify-center items-center text-light text-xl">
                {$t("noData")}
              </div>
            ) : (
              residences.map((residence, i) => (
                <PlaceListCard
                  key={residence.id}
                  className={Boolean(i) && "md:mt-2"}
                  onClick={(event) => {
                    onSelect(residence);
                    //@ts-ignore
                    event.target?.scrollIntoViewIfNeeded?.();
                  }}
                  isSelected={selectedResidence?.id === residence.id}
                  isChoosed={choosedResidence?.id === residence.id}
                  name={residence.name[$i18n]}
                  price={residence.price}
                />
              ))
            )}
          </div>
        </SimpleBar>
        <div className="pb-4 md:pb-0 flex-shrink-0 h-[300px] md:h-auto order-1 md:order-2 md:basis-3/5 flex flex-col">
          <ImageWithLoader
            isLoading={!selectedResidence}
            className={classNames(
              !residences.length && "h-[500px]",
              "w-full flex-grow rounded-t-md border border-accent border-b-0"
            )}
            src={selectedResidence?.image}
          />
          {hasDescription ? (
            <div
              ref={ref}
              onClick={() => canExpand && setExpanded(!expanded)}
              className={classNames(
                expanded ? "max-h-[80%]" : "max-h-20",
                {
                  "cursor-zoom-in ease-[cubic-bezier(0.000,0.255,0.000,1.000)]":
                    canExpand && !expanded,
                  "cursor-zoom-out ease-in-out": canExpand && expanded,
                },
                "h-auto flex-shrink-0 flex-grow-0 bg-light flex items-start relative transition-all duration-1000 "
              )}
            >
              <div className="pt-6 md:pt-4 px-4 pb-4 w-full md:w-[70%] h-full flex">
                <SimpleBar
                  ref={contentRef}
                  className="w-full h-full text-xs font-medium pr-3"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedResidence?.description[$i18n] ?? "",
                    }}
                  />
                </SimpleBar>
              </div>
              {selectedResidence && (
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    onChoose(selectedResidence);
                  }}
                  className={classNames(
                    isChoosed
                      ? "bg-gradient-to-t from-[#D6A072] to-[#FAE4BC] text-black cursor-default"
                      : "bg-[#180F0B] text-light hover:bg-gradient-to-t hover:from-[#D6A072] hover:to-[#FAE4BC] hover:text-black",
                    "absolute right-10 border border-light/70 text-sm font-medium w-32 h-10 rounded-md -translate-y-1/2 transition-colors duration-500"
                  )}
                >
                  {isChoosed
                    ? $t("pages.form.chooseRoom.choosed")
                    : $t("pages.form.chooseRoom.choose")}
                </button>
              )}
            </div>
          ) : (
            <div className="relative border-accent border-b">
              {selectedResidence && (
                <button
                  onClick={() => onChoose(selectedResidence)}
                  className={classNames(
                    isChoosed
                      ? "bg-gradient-to-t from-[#D6A072] to-[#FAE4BC] text-black cursor-default"
                      : "bg-[#180F0B] text-light hover:bg-gradient-to-t hover:from-[#D6A072] hover:to-[#FAE4BC] hover:text-black",
                    "absolute right-6 border border-light/70 text-sm font-medium w-32 h-10 rounded-md -translate-y-[calc(100%_+_1rem)] transition-colors duration-500"
                  )}
                >
                  {isChoosed
                    ? $t("pages.form.chooseRoom.choosed")
                    : $t("pages.form.chooseRoom.choose")}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
