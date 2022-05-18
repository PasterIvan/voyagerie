import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import { ReactNode } from "react";
import { useHover } from "shared/lib/hooks/useHover";
import { footerModel } from "widgets/Footer";
import { ChatIcon } from "../config/images/ChatIcon";

export const FaqBlock: React.FC<{
  className?: string;
  elementClassName?: string;
  children?: ReactNode;
}> = ({ className, elementClassName, children }) => {
  const { $t } = useTranslation();

  const [refText, isHoveredText] = useHover();
  const [refCircle, isHoveredCircle] = useHover();

  return (
    <div className={classNames(className, "flex  items-center")}>
      {children}
      <div className={classNames("flex items-center", elementClassName)}>
        <div
          onClick={() => footerModel.events.scrollToContacts()}
          ref={refText}
          className="hidden xs:block cursor-pointer text-base text-light text-right pr-4"
        >
          <div className={"font-light"}>
            {$t("pages.main.supportText.line1")}
          </div>
          <div
            className={classNames(
              "font-medium",
              isHoveredText && "text-accent"
            )}
          >
            {$t("pages.main.supportText.line2")}
          </div>
        </div>
        <ChatIcon
          onClick={() => footerModel.events.scrollToContacts()}
          ref={refCircle}
          isHovered={isHoveredCircle}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};
