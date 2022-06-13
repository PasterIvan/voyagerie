import classNames from "classnames";
import { useTranslation } from "entities/language/lib";

export function PlaceListCard({
  className,
  onClick,
  isSelected,
  isChoosed,
  name,
  price,
}: {
  className?: string | boolean;
  onClick?: (el: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isSelected?: boolean;
  isChoosed?: boolean;
  name: string;
  price: number;
}) {
  const { $t } = useTranslation();

  return (
    <div
      className={classNames(
        "min-w-[200px] md:min-w-[none] flex items-center cursor-pointer",
        className
      )}
      onClick={(event) => {
        onClick?.(event);
      }}
    >
      <div
        className={classNames(
          {
            "border-accent bg-accent/10": isSelected,
            "border-light/25 hover:border-light/50": !isSelected && !isChoosed,
            "border-accent": !isSelected && isChoosed,
          },
          "h-full gap-y-3 flex flex-col items-start basis-0 flex-grow border rounded pt-4 pl-5"
        )}
      >
        <div
          className={classNames(
            isSelected || isChoosed ? "text-accent" : "text-light",
            "text-sm md:text-base font-semibold pr-4"
          )}
        >
          {name}
        </div>
        <div
          className={classNames(
            isSelected || isChoosed
              ? "bg-accent text-black"
              : "bg-light/25 text-light/50",
            "mt-auto rounded-tl-md px-2 py-1 leading-none ml-auto  text-sm font-medium"
          )}
        >
          {price && $t("moneyFrom") + " "}
          {price?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>
      <hr
        className={classNames(
          "text-accent w-5 hidden md:block",
          isSelected ? "visible" : "invisible"
        )}
      />
    </div>
  );
}
