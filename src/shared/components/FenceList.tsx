import classNames from "classnames";
import { ReactElement } from "react";

export const FenceList: <T>(props: {
  className?: string;
  items: T[];
  render: (item: T & { className: string }) => React.ReactElement;
}) => ReactElement = ({ className, items, render }) => {
  return (
    <div className={classNames("grid grid-cols-2 gap-5", className)}>
      {items.map((item, i) =>
        render({
          ...item,
          className: (i + 1) % 3 === 0 ? "col-span-2" : "col-span-1",
        })
      )}
    </div>
  );
};
