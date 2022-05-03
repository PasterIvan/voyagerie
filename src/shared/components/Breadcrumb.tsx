import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export const Breadcrumb = ({
  items,
}: {
  items: { name: string; route?: string }[];
}) => {
  const navigate = useNavigate();

  return (
    <span className="text-light text-base font-semibold">
      {items.map((item, i) => (
        <>
          <span
            key={item.name}
            className={classNames(
              item.route && "hover:text-accent cursor-pointer"
            )}
            onClick={() => item.route && navigate(item.route)}
          >
            {item.name}
          </span>
          {i !== items.length - 1 && " / "}
        </>
      ))}
    </span>
  );
};
