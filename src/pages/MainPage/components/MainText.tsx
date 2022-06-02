import classNames from "classnames";
import { useStore } from "effector-react";
import { useTranslation } from "entities/language/lib";
import { modalModels } from "widgets/modals";
import { ReactComponent as Info } from "../config/images/info.svg";
import { ReactComponent as Message } from "../config/images/message.svg";
import { $text, fx } from "../models";

export const MainText: React.FC<{ className?: string }> = ({ className }) => {
  const isLoading = useStore(fx.getMainTextFx.pending);

  const { $i18n } = useTranslation();

  const mainText = useStore($text);

  if (!mainText || isLoading) {
    return (
      <div className={classNames("flex justify-center")}>
        <div className="lds-hourglass" />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "break-words sm:break-normal max-w-full text-2xl sm:text-5xl sm:leading-[53px] font-semibold text-light text-center",
        className
      )}
    >
      <span
        onClick={() => modalModels.bestPrices.events.openModal()}
        className="font-medium underline thicknes decoration-1 underline-offset-2 decoration-accent text-accent hover:text-light cursor-pointer"
      >
        <span className="relative">
          {mainText[$i18n].line1.text1}
          <Info className="absolute inline -right-3 bottom-5 sm:bottom-9" />
        </span>
      </span>{" "}
      {mainText[$i18n].line1.text2}{" "}
      <span
        onClick={() => modalModels.individualService.events.openModal()}
        className="relative font-medium underline thicknes decoration-1 underline-offset-2 decoration-blue-accent text-blue-accent hover:text-light cursor-pointer"
      >
        {mainText[$i18n].line2.text1}
        <Message className="absolute inline -right-3 bottom-5 sm:bottom-9" />
      </span>{" "}
      {mainText[$i18n].line2.text2} {mainText[$i18n].line3}
    </div>
  );
};
