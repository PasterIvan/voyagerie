import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import { ReactElement } from "react";

export const FenceList: <T>(props: {
  className?: string;
  items: T[];
  render: (
    item: T & { className: string; isLong?: boolean },
    i: number
  ) => React.ReactElement;
}) => ReactElement = ({ className, items, render }) => {
  const { $t } = useTranslation();
  if (!items.length) {
    return (
      <div className="w-full h-40 flex justify-center items-center">
        <div className="text-center text-light text-4xl">{$t("noData")}</div>
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-4",
        className
      )}
    >
      {items.map((item, i) => {
        const isLastOdd = i === items.length - 1 && (i + 1) % 3 === 1;
        const isThird = (i + 1) % 3 === 0;
        return render(
          {
            ...item,
            className:
              isThird || isLastOdd
                ? "col-span-1 lg:col-span-2 3xl:col-span-1"
                : "col-span-1",
          },
          i
        );
      })}
    </div>
  );
};
