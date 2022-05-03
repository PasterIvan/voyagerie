import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import { ReactComponent as Info } from "../config/images/info.svg";
import { ReactComponent as Message } from "../config/images/message.svg";

export const MainText: React.FC<{ className?: string }> = ({ className }) => {
  const { $t } = useTranslation();

  return (
    <div
      className={classNames(
        "text-5xl font-semibold text-light leading-[53px] text-center",
        className
      )}
    >
      <span className="relative font-medium underline thicknes decoration-1 underline-offset-2 decoration-accent text-accent hover:text-light cursor-pointer">
        {$t("pages.main.slogan.line1.text1")}
        <Info className="absolute inline top-0 -right-4" />
      </span>{" "}
      {$t("pages.main.slogan.line1.text2")}{" "}
      <span className="relative font-medium underline thicknes decoration-1 underline-offset-2 decoration-blue-accent text-blue-accent hover:text-light cursor-pointer">
        {$t("pages.main.slogan.line2.text1")}
        <Message className="absolute inline top-0 -right-4" />
      </span>{" "}
      {$t("pages.main.slogan.line2.text2")} {$t("pages.main.slogan.line3")}
    </div>
  );
};
