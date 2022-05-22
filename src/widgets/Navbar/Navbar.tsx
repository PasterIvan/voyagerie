import { ReactComponent as Logo } from "app/assets/images/logo.svg";
import { ReactComponent as Telephone } from "app/assets/images/telephone.svg";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutesPaths } from "shared/config/constants";
import { Links } from "widgets/Links/Links";
import { Lines } from "shared/components/Lines";
import { ChooseLanguage } from "widgets/ChooseLanguage/ChooseLanguage";
import { infoMock } from "shared/api/infoMock";

export const Navbar = ({ className }: { className?: string }) => {
  const isLoading = false;

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
          "order-1 w-44 h-auto mr-auto col-span-1"
        )}
        onClick={() =>
          pathname !== RoutesPaths.Main && navigate(RoutesPaths.Main)
        }
      />
      <Links
        elementClassName="text-xs font-bold uppercase text-light mx-4 underline-offset-1 cursor-pointer bg-gradient-to-t hover:from-[#FAE4BC] hover:to-[#D6A072] hover:bg-clip-text hover:text-fill-transparent hover:text-accent"
        className="lg:order-2 order-5 flex-grow w-full flex justify-around lg:justify-center col-span-3 lg:col-span-1 lg:py-0 self-center"
      />
      <Lines.Line className="lg:hidden order-4 text-light/20 col-span-3 -mx-4 my-4" />
      <div className="block lg:hidden order-2" />
      <div className="ml-auto order-3 flex col-span-1">
        <ChooseLanguage />
        {!isLoading && (
          <div
            onClick={() => window.open("tel:" + infoMock.phone)}
            className="flex-shrink-0 hidden lg:flex cursor-pointer bg-[#180F0B80] hover:bg-black rounded-full h-14 items-center p-3 ml-4"
          >
            <div className="bg-accent w-8 h-8 flex justify-center items-center rounded-full">
              <Telephone />
            </div>
            <span className="text-sm font-bold text-light mx-3">
              {infoMock.phone}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
