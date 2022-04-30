import { HorizontalButtons } from "entities/language/components/HorizontalButtons";
import { ContactsBlock } from "./components/ContactsBlock";
import { ReactComponent as Logo } from "app/assets/images/logo.svg";
import classNames from "classnames";

import { MainText } from "./components/MainText";
import { Lines } from "shared/components/Lines";
import { FaqBlock } from "./components/FaqBlock";
import { FenceList } from "shared/components/FenceList";
import { PlaceCard } from "entities/place/ui/ui";
import { placesMock } from "entities/place/config/mock";
import { useNavigate } from "react-router-dom";
import { routes } from "pages/Routing";
import { useTranslation } from "entities/language/lib";

export const MainPage = () => {
  const navigate = useNavigate();
  const { $t } = useTranslation();

  return (
    <div
      className={classNames(
        "background flex justify-center bg-black-background px-8"
      )}
    >
      <div className="w-[927px] border-accent/25 border-x flex flex-col items-center mr-28">
        <ContactsBlock className="w-[450px]" />
        <Logo className="w-[450px] pt-6 h-auto" />
        <Lines.HorizontalLine withStar hasInnerGutters className="pt-16">
          <HorizontalButtons />
        </Lines.HorizontalLine>
        <MainText className="pt-16 pb-8" />
        <Lines.Container>
          <Lines.Line isRtl withStar hasInnerGutters />
          <span className="text-2xl font-light bg-gradient-to-t from-[#FAE4BC] to-[#D6A072] bg-clip-text text-fill-transparent text-accent">
            {$t("pages.main.chooseCountryText")}
          </span>
          <FaqBlock className="flex-grow basis-0">
            <Lines.Line hasInnerGutters />
          </FaqBlock>
        </Lines.Container>
        <FenceList
          className="w-full max-w-2xl"
          items={placesMock}
          render={(item) => (
            <PlaceCard
              {...item}
              key={item.slug}
              onClick={() => navigate(`${routes.place}/${item.slug}`)}
            />
          )}
        />
      </div>
    </div>
  );
};
