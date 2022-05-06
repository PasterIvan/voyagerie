import classNames from "classnames";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Breadcrumb = ({
  items,
}: {
  items: { name: string; route?: string; onClick?: () => void }[];
}) => {
  const navigate = useNavigate();

  return (
    <span className="text-light text-base font-semibold">
      {items.map((item, i) => (
        <React.Fragment key={item.name}>
          <span
            className={classNames(
              item.route && "hover:text-accent cursor-pointer"
            )}
            onClick={() => {
              item.onClick?.();
              item.route && navigate(item.route);
            }}
          >
            {item.name}
          </span>
          {i !== items.length - 1 && " / "}
        </React.Fragment>
      ))}
    </span>
  );
};
