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
    <span className="text-light md:text-base text-sm font-semibold">
      {items.map((item, i) => (
        <React.Fragment key={item.name}>
          <button
            className={classNames(
              "inline capitalize",
              item.route ? "hover:text-accent cursor-pointer" : "cursor-default"
            )}
            onClick={() => {
              item.onClick?.();
              item.route && navigate(item.route);
            }}
          >
            {item.name}
          </button>
          {i !== items.length - 1 && (
            <>
              <span className="md:inline hidden text-xs"> / </span>
              <span className="md:hidden inline text-accent text-xs">
                {" > "}
              </span>
            </>
          )}
        </React.Fragment>
      ))}
    </span>
  );
};
