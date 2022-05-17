import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import { bestPricesModel } from "widgets/modals/BestPrices";
import { individualServiceModel } from "widgets/modals/IndividualService";
import { ReactComponent as Info } from "../config/images/info.svg";
import { ReactComponent as Message } from "../config/images/message.svg";

export const MainText: React.FC<{ className?: string }> = ({ className }) => {
  const { $t } = useTranslation();

  return (
    <div
      className={classNames(
        "break-words sm:break-normal max-w-full text-2xl sm:text-5xl sm:leading-[53px] font-semibold text-light text-center",
        className
      )}
    >
      <span
        onClick={() => bestPricesModel.events.openModal()}
        className="font-medium underline thicknes decoration-1 underline-offset-2 decoration-accent text-accent hover:text-light cursor-pointer"
      >
        <span className="relative">
          {$t("pages.main.slogan.line1.text1")}
          <Info className="absolute inline -right-3 bottom-5 sm:bottom-9" />
        </span>
      </span>{" "}
      {$t("pages.main.slogan.line1.text2")}{" "}
      <span
        onClick={() => individualServiceModel.events.openModal()}
        className="relative font-medium underline thicknes decoration-1 underline-offset-2 decoration-blue-accent text-blue-accent hover:text-light cursor-pointer"
      >
        {$t("pages.main.slogan.line2.text1")}
        <Message className="absolute inline -right-3 bottom-5 sm:bottom-9" />
      </span>{" "}
      {$t("pages.main.slogan.line2.text2")} {$t("pages.main.slogan.line3")}
    </div>
  );
};
