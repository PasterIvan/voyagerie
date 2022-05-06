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
  const { $i18n } = useTranslation();

  const isChoosed =
    choosedResidence &&
    selectedResidence &&
    choosedResidence?.id === selectedResidence?.id;

  return (
    <div className="max-w-5xl w-full pt-8 flex flex-col max-h-[500px] overflow-hidden border-b border-b-light">
      <span className="pl-4 text-lg font-medium text-accent">
        Выберите подходящую для вас виллу
      </span>
      <div className="flex overflow-hidden pt-6">
        <SimpleBar
          direction="rtl"
          data-simplebar-direction="rtl"
          className="basis-2/5 pl-4"
        >
          {residences.map((residence, i) => (
            <PlaceListCard
              key={residence.id}
              className={Boolean(i) && "mt-2"}
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
        </SimpleBar>
        <div className="basis-3/5 flex flex-col">
          <ImageWithLoader
            className="flex-grow w-full rounded-t-md border border-accent border-b-0"
            src={selectedResidence?.image}
          />
          <div className="h-20 basis-20 flex-shrink-0 flex-grow-0 bg-light flex items-start">
            <div className="p-4 w-[70%] h-full flex">
              <SimpleBar className="w-full h-full text-xs font-medium pr-2">
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
                "border border-light/70 text-sm font-medium w-32 h-10 rounded-md -translate-y-1/2 transition-colors duration-500"
              )}
            >
              {isChoosed ? "Выбрано" : "Выбрать"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
