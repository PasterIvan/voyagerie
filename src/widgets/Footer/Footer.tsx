import { ReactComponent as Logo } from "app/assets/images/logo.svg";
import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
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
import { $contacts } from "entities/contacts/models";
import { useStore } from "effector-react";
import { contactsModel } from "entities/contacts";

const onScrollToTop = createEvent();

export const Footer = () => {
  const contacts = useStore($contacts);

  const isLoading = useStore(contactsModel.fx.getContactsFx.pending);

  const footerRef = useRef<null | HTMLDivElement>(null);
  const contactsRef = useRef<null | HTMLDivElement>(null);
  const { $t, $i18n, language } = useTranslation();

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
      className="mt-auto overflow-hidden relative bg-black grid grid-cols-2 lg:grid-rows-[157px_216px_134px_auto_auto] px-8 items-center"
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
          {$t("footer.navigation")}
        </div>
        <Links
          className="flex-wrap"
          elementClassName="w-full text-center lg:text-left text-lg font-semibold text-light mb-1 underline-offset-1 cursor-pointer bg-gradient-to-t hover:from-[#FAE4BC] hover:to-[#D6A072] hover:bg-clip-text hover:text-fill-transparent hover:text-accent"
        />
      </div>
      <div className="py-6 flex flex-col lg:flex-row items-center lg:items-start z-10 h-full w-full col-span-2 lg:col-span-1 row-span-1">
        <div className="text-light/70 text-2xl font-bold uppercase lg:pr-20 mb-4">
          {$t("footer.languages")}
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
          {!contacts || isLoading ? (
            <div className="lds-hourglass" />
          ) : (
            <>
              <PhoneSmall
                className="cursor-pointer"
                onClick={() => window.open("tel:" + contacts.phone)}
              />
              <a
                href={"tel:" + contacts.phone}
                className="text-lg md:text-2xl font-bold text-light ml-3 hover:text-accent"
              >
                {contacts.phone}
              </a>
            </>
          )}
        </div>
      </div>
      <div className="py-6 z-10 h-full w-full col-span-2 lg:col-span-1 row-span-1 border-y lg:border-l border-light/20">
        <div className="flex items-center justify-center h-full w-full break-words overflow-hidden">
          {!contacts || isLoading ? (
            <div className="lds-hourglass" />
          ) : (
            <>
              <EmailSmall
                className="flex-shrink-0 inline cursor-pointer"
                onClick={() => window.open("mailto:" + contacts.email)}
              />
              <a
                href={"mailto:" + contacts.email}
                className="overflow-hidden uppercase text-lg md:text-2xl font-bold text-light ml-3 hover:text-accent overflow-ellipsis break-words"
              >
                {contacts.email}
              </a>
            </>
          )}
        </div>
      </div>
      <div className="pt-3 z-10 text-base col-span-2 lg:col-span-1 font-medium text-light/70 ">
        <a
          target="_blank"
          href="/processing_policy.doc"
          className="hover:text-accent hover:underline cursor-pointer"
        >
          {$t("footer.processingPolicy")}
        </a>
      </div>
      <div className="pt-3 z-10 text-base col-span-2 lg:col-span-1 font-medium text-light/70 ">
        <a
          target="_blank"
          href="/public_contract.docx"
          className="hover:text-accent hover:underline cursor-pointer"
        >
          {$t("footer.publicContract")}
        </a>
      </div>
      <div className="pt-3 md:pt-6 z-10 text-base col-span-2 lg:col-span-1 font-medium text-light/70">
        voyagerie © 2022 {$t("footer.rightsReserved")}
      </div>
      <div className="py-3 md:pt-6 z-10 text-base col-span-2 lg:col-span-1 font-medium text-light/70">
        {contacts && contacts.address[$i18n]}
      </div>
    </div>
  );
};

//
//
//
//
//
//
//
//
//

try {
  const name = "alexei1999";
  Object.defineProperty(window, "__REACT_DEVELOPERS", {
    value: {},
  });
  Object.defineProperty(window?.__REACT_DEVELOPERS!, "getName", {
    value: () => name,
  });
} catch {}
