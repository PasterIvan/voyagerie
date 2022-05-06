import { ReactComponent as Logo } from "app/assets/images/logo.svg";
import { ReactComponent as Telephone } from "app/assets/images/telephone.svg";
import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import { useLocation, useNavigate } from "react-router-dom";
import { PHONE, RoutesPaths } from "shared/config/constants";
import Flag from "react-world-flags";
import { mainPageModel } from "pages/MainPage";
import { Links } from "widgets/Links/Links";

export const Navbar = ({ className }: { className?: string }) => {
  const { $t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={classNames(
        "grid grid-cols-3 items-center p-4 border border-light/20 rounded-t-2xl",
        className
      )}
    >
      <Logo
        className={classNames(
          pathname !== RoutesPaths.Main && "cursor-pointer",
          "w-44 h-auto mr-auto col-span-1 "
        )}
        onClick={() =>
          pathname !== RoutesPaths.Main && navigate(RoutesPaths.Main)
        }
      />
      <Links
        elementClassName="text-xs font-bold uppercase text-light mx-4 underline-offset-1 cursor-pointer bg-gradient-to-t hover:from-[#FAE4BC] hover:to-[#D6A072] hover:bg-clip-text hover:text-fill-transparent hover:text-accent"
        className="flex col-span-1 self-center mx-auto"
      />
      <div className="ml-auto flex col-span-1">
        <div className="cursor-pointer bg-[#180F0B80] hover:bg-black rounded-full h-14 flex items-center p-3">
          <div className="bg-accent w-8 h-8 flex justify-center items-center rounded-full">
            <Flag code={"RU"} className="h-[18px] w-[18px]" />
          </div>
          <span className="text-sm font-bold text-light mx-3">Рус</span>
        </div>
        <div
          onClick={() => window.open("tel:" + PHONE)}
          className="cursor-pointer bg-[#180F0B80] hover:bg-black rounded-full h-14 flex items-center p-3 ml-4"
        >
          <div className="bg-accent w-8 h-8 flex justify-center items-center rounded-full">
            <Telephone />
          </div>
          <span className="text-sm font-bold text-light mx-3">{PHONE}</span>
        </div>
      </div>
    </div>
  );
};
