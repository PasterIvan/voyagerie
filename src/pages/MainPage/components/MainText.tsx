import classNames from "classnames";
import { ReactComponent as Info } from "../config/images/info.svg";
import { ReactComponent as Message } from "../config/images/message.svg";

export const MainText: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={classNames(
        "text-[32px] font-light text-light leading-10 flex flex-col items-center justify-center",
        className
      )}
    >
      <div>
        Мы предлагаем{" "}
        <span className="font-medium underline thicknes decoration-1 underline-offset-8 decoration-accent hover:text-accent cursor-pointer">
          лучшие цены
          <Info className="inline ml-2 -mt-3" />
        </span>
      </div>
      <div>
        и{" "}
        <span className="font-medium underline thicknes decoration-1 underline-offset-8 decoration-blue-accent hover:text-blue-accent cursor-pointer">
          полное сопровождение
          <Message className="inline ml-2 -mt-1" />
        </span>
      </div>
      <div>по люксовым направлениям.</div>
    </div>
  );
};
