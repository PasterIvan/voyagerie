import classNames from "classnames";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const Counter = ({
  max,
  unsigned = false,
  leftButtonClassName,
  rightButtonClassName,
  count,
  onChange,
}: {
  max?: number;
  unsigned?: boolean;
  leftButtonClassName?: string;
  rightButtonClassName?: string;
  count: number;
  onChange?: (count: number) => void;
}) => {
  return (
    <>
      <button
        onClick={() => {
          if (unsigned && count <= 0) return;
          onChange?.(count - 1);
        }}
        className={classNames(
          leftButtonClassName,
          "cursor-pointer rounded-full w-8 h-8 flex justify-center items-center bg-brown-dark hover:bg-accent"
        )}
      >
        <AiOutlineMinus className="w-5 h-5" />
      </button>
      <span className="font-normal text-lg text-light px-3 flex-shrink-0 box-content text-center min-w-[32px]">
        {count}
      </span>
      <button
        onClick={() => {
          if (max && count >= max) return;
          onChange?.(count + 1);
        }}
        className={classNames(
          rightButtonClassName,
          "cursor-pointer rounded-full w-8 h-8 flex justify-center items-center bg-brown-dark hover:bg-accent"
        )}
      >
        <AiOutlinePlus className="w-5 h-5" />
      </button>
    </>
  );
};
