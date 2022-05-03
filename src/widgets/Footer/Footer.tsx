import { ReactComponent as Logo } from "app/assets/images/logo.svg";
import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import { useLocation, useNavigate } from "react-router-dom";
import { EMAIL, PHONE, RoutesPaths } from "shared/config/constants";
import Flag from "react-world-flags";
import { ArrowDown } from "pages/MainPage/config/images/ArrowDown";
import { switchLanguagesConfig, switchLanguagesModel } from "entities/language";
import { EmailSmall } from "./config/EmailSmall";
import { PhoneSmall } from "./config/PhoneSmall";
import { createEvent } from "effector";

import { ReactComponent as Lines } from "./config/lines-footer.svg";

export const onArrayDown = createEvent();

const navibarConfig: { route: RoutesPaths; className?: string }[] = [
  { route: RoutesPaths.Main },
  { route: RoutesPaths.Place },
  { route: RoutesPaths.Help },
];

export const Footer = () => {
  const { $t, language } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="relative bg-black grid grid-cols-2 grid-rows-[157px_216px_134px_75px] px-8 items-center">
      <Lines className="z-0 absolute left-0 top-0" />
      <div className="z-10 h-full w-full col-span-2 row-span-1 grid grid-cols-3 items-center border-b border-b-light/20 pb-2">
        <ArrowDown
          onClick={() => onArrayDown()}
          className="cursor-pointer col-span-1 rotate-180"
        />
        <Logo className="inline w-72 h-20 items-center mx-auto" />
      </div>
      <div className="z-10 h-full w-full col-span-1 row-span-1 flex py-6">
        <span className="text-light/70 text-2xl font-bold uppercase pr-20">
          Навигация
        </span>
        <div>
          {navibarConfig.map((config) => (
            <div
              onClick={() => navigate(config.route)}
              key={config.route}
              className={classNames(
                "text-lg font-semibold text-light mb-1 underline-offset-1 cursor-pointer hover:from-[#FAE4BC] hover:to-[#D6A072] hover:bg-clip-text hover:text-fill-transparent hover:text-accent",
                pathname === config.route && "underline bg-gradient-to-t"
              )}
            >
              {$t("navbarRoutes")[config.route]}
            </div>
          ))}
        </div>
      </div>
      <div className="z-10 h-full w-full col-span-1 row-span-1 flex py-6">
        <span className="text-light/70 text-2xl font-bold uppercase pr-20">
          Языки
        </span>
        <div>
          {switchLanguagesConfig.languages.map((config) => (
            <div
              onClick={() => switchLanguagesModel.events.switchLanguage(config)}
              key={config.key}
              className={classNames(
                "text-lg font-semibold text-light mb-1 underline-offset-1 cursor-pointer hover:from-[#FAE4BC] hover:to-[#D6A072] hover:bg-clip-text hover:text-fill-transparent hover:text-accent",
                language.key === config.key && "underline bg-gradient-to-t"
              )}
            >
              <Flag className="inline h-4 w-4 pb-1" code={config.code} />{" "}
              {config.label}
            </div>
          ))}
        </div>
      </div>
      <div className="z-10 h-full w-full col-span-1 row-span-1 border-y border-r border-light/20">
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
      <div className="z-10 h-full w-full col-span-1 row-span-1 border-y border-l border-light/20">
        <div className="flex items-center justify-center h-full w-full">
          <EmailSmall
            className="cursor-pointer"
            onClick={() => window.open("mailto:" + EMAIL)}
          />
          <a
            href={"mailto:" + EMAIL}
            className="uppercase text-2xl font-bold text-light ml-3 hover:text-accent"
          >
            {EMAIL}
          </a>
        </div>
      </div>
      <div className="z-10 text-base font-medium text-light/70">
        voyagerie © 2022 Все права защищены
      </div>
    </div>
  );
};
