import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import { ReactComponent as Info } from "../config/images/info.svg";
import { ReactComponent as Message } from "../config/images/message.svg";

export const MainText: React.FC<{ className?: string }> = ({ className }) => {
  const { $t } = useTranslation();

  return (
    <div
      className={classNames(
        "text-[32px] font-light text-light leading-10 flex flex-col items-center justify-center",
        className
      )}
    >
      <div>
        {$t("pages.main.slogan.line1.text1")}{" "}
        <span className="font-medium underline thicknes decoration-1 underline-offset-8 decoration-accent hover:text-accent cursor-pointer">
          {$t("pages.main.slogan.line1.text2")}
          <Info className="inline ml-2 -mt-3" />
        </span>
      </div>
      <div>
        {$t("pages.main.slogan.line2.text1")}{" "}
        <span className="font-medium underline thicknes decoration-1 underline-offset-8 decoration-blue-accent hover:text-blue-accent cursor-pointer">
          {$t("pages.main.slogan.line2.text2")}
          <Message className="inline ml-2 -mt-1" />
        </span>
      </div>
      <div> {$t("pages.main.slogan.line3")}</div>
    </div>
  );
};
