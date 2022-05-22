import { ReactComponent as Logo } from "app/assets/images/logo.svg";
import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import { ADDRESS, EMAIL, PHONE } from "shared/config/constants";
import Flag from "react-world-flags";
import { ArrowUp } from "app/assets/images/ArrowUp";
import { switchLanguagesConfig, switchLanguagesModel } from "entities/language";
import { EmailSmall } from "./config/EmailSmall";
import { PhoneSmall } from "./config/PhoneSmall";
import { createEvent } from "effector";

import { ReactComponent as Lines } from "./config/lines-footer.svg";
import { useEffect, useRef } from "react";
import { Links } from "widgets/Links/Links";
import { scrollToContacts, scrollToFooter } from "./models";

const onScrollToTop = createEvent();

export const Footer = () => {
  const footerRef = useRef<null | HTMLDivElement>(null);
  const contactsRef = useRef<null | HTMLDivElement>(null);
  const { language } = useTranslation();

  useEffect(() => {
    const scrollHandler = onScrollToTop.watch(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
    const scrollFooterHandler = scrollToFooter.watch(() => {
      footerRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    });
    const scrollToContactsHandler = scrollToContacts.watch(() => {
      contactsRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    });

    return () => {
      scrollHandler();
      scrollFooterHandler();
      scrollToContactsHandler();
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className="mt-auto overflow-hidden relative bg-black grid grid-cols-2 lg:grid-rows-[157px_216px_134px_75px] px-8 items-center"
    >
      <Lines className="z-0 absolute left-0 top-0" />
      <div className="justify-between sm:justify-center relative py-2 pb-4 z-10 h-full w-full col-span-2 row-span-1 flex items-center border-b border-b-light/20">
        <ArrowUp
          onClick={() => onScrollToTop()}
          className="hidden xs:inline sm:absolute left-0 cursor-pointer col-span-1"
        />
        <Logo className="inline w-72 h-20 items-center mx-auto xs:mx-0 sm:mx-auto" />
      </div>
      <div className="mx-auto pt-6 lg:py-6 items-center lg:items-start flex flex-col lg:flex-row z-10 h-full w-full col-span-2 lg:col-span-1 row-span-1">
        <div className="text-light/70 text-2xl font-bold uppercase lg:pr-20 mb-4">
          Навигация
        </div>
        <Links elementClassName="text-center lg:text-left text-lg font-semibold text-light mb-1 underline-offset-1 cursor-pointer bg-gradient-to-t hover:from-[#FAE4BC] hover:to-[#D6A072] hover:bg-clip-text hover:text-fill-transparent hover:text-accent" />
      </div>
      <div className="py-6 flex flex-col lg:flex-row items-center lg:items-start z-10 h-full w-full col-span-2 lg:col-span-1 row-span-1">
        <div className="text-light/70 text-2xl font-bold uppercase lg:pr-20 mb-4">
          Языки
        </div>
        <div>
          {switchLanguagesConfig.languages.map((config) => (
            <div
              onClick={() => switchLanguagesModel.events.switchLanguage(config)}
              key={config.key}
              className={classNames(
                "text-center lg:text-left text-lg font-semibold text-light mb-1 underline-offset-1 cursor-pointer bg-gradient-to-t hover:from-[#FAE4BC] hover:to-[#D6A072] hover:bg-clip-text hover:text-fill-transparent hover:text-accent",
                language.key === config.key && "underline"
              )}
            >
              <Flag className="inline h-auto w-4 pb-1" code={config.code} />{" "}
              {config.label}
            </div>
          ))}
        </div>
      </div>
      <div
        ref={contactsRef}
        className="py-6 z-10 h-full w-full col-span-2 lg:col-span-1 row-span-1 border-y lg:border-r border-light/20"
      >
        <div className="flex items-center justify-center h-full w-full">
          <PhoneSmall
            className="cursor-pointer"
            onClick={() => window.open("tel:" + PHONE)}
          />
          <a
            href={"tel:" + PHONE}
            className="text-2xl font-bold text-light ml-3 hover:text-accent"
          >
            {PHONE}
          </a>
        </div>
      </div>
      <div className="py-6 z-10 h-full w-full col-span-2 lg:col-span-1 row-span-1 border-y lg:border-l border-light/20">
        <div className="flex items-center justify-center h-full w-full break-words overflow-hidden">
          <EmailSmall
            className="flex-shrink-0 inline cursor-pointer"
            onClick={() => window.open("mailto:" + EMAIL)}
          />
          <a
            href={"mailto:" + EMAIL}
            className="overflow-hidden uppercase text-2xl font-bold text-light ml-3 hover:text-accent overflow-ellipsis break-words"
          >
            {EMAIL}
          </a>
        </div>
      </div>
      <div className="pt-3 md:pt-6 z-10 text-base col-span-2 lg:col-span-1 font-medium text-light/70">
        voyagerie © 2022 Все права защищены
      </div>
      <div className="py-3 md:pt-6 z-10 text-base col-span-2 lg:col-span-1 font-medium text-light/70">
        {ADDRESS}
      </div>
    </div>
  );
};
