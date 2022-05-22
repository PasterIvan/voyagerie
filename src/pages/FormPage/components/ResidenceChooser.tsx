import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import { PlaceListCard } from "entities/place/components/PlaceListCard";
import { ResidenceType } from "entities/place/models";
import { ImageWithLoader } from "shared/components/ImageWithLoader";
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
  const { $t, $i18n } = useTranslation();

  const isChoosed =
    choosedResidence &&
    selectedResidence &&
    choosedResidence?.id === selectedResidence?.id;

  return (
    <div className="max-w-5xl h-full max-h-[1000px] md:max-h-[500px] w-full pt-8 flex flex-col overflow-hidden border-light md:border-b">
      <span className="pl-4 text-lg font-medium text-accent">
        {$t("pages.form.labels.chooseRoom")}
      </span>
      <div className="flex flex-col md:flex-row overflow-hidden pt-6">
        <SimpleBar
          direction="rtl"
          data-simplebar-direction="rtl"
          className="md:pt-0 md:h-auto order-2 md:order-1 flex-grow md:basis-2/5 pb-4 md:pb-0 pl-0 md:pl-4 w-full"
        >
          <div className="gap-x-4 flex md:flex-col items-stretch">
            {residences.map((residence, i) => (
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
            ))}
          </div>
        </SimpleBar>
        <div className="pb-4 md:pb-0 flex-shrink-0 h-[300px] md:h-auto order-1 md:order-2 md:basis-3/5 flex flex-col">
          <ImageWithLoader
            className="w-full flex-grow rounded-t-md border border-accent border-b-0"
            src={selectedResidence?.image}
          />
          <div className="h-28 md:h-20 basis-20 flex-shrink-0 flex-grow-0 bg-light flex items-start relative">
            <div className="pt-6 md:pt-4 px-4 pb-4 w-full md:w-[70%] h-full flex">
              <SimpleBar className="w-full h-full text-xs font-medium pr-3">
                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedResidence?.description[$i18n] ?? "",
                  }}
                />
              </SimpleBar>
            </div>
            <button
              onClick={() => onChoose(selectedResidence)}
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
          </div>
        </div>
      </div>
    </div>
  );
}
