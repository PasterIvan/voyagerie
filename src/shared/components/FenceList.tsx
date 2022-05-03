import classNames from "classnames";
import { ReactElement } from "react";

export const FenceList: <T>(props: {
  className?: string;
  items: T[];
  render: (item: T & { className: string }) => React.ReactElement;
}) => ReactElement = ({ className, items, render }) => {
  return (
    <div className={classNames("grid grid-cols-2", className)}>
      {items.map((item, i) => {
        const isLastOdd = i === items.length - 1 && (i + 1) % 3 === 1;
        const isThird = (i + 1) % 3 === 0;
        return render({
          ...item,
          className: isThird || isLastOdd ? "col-span-2" : "col-span-1",
        });
      })}
    </div>
  );
};
