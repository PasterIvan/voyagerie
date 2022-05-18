import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import { mainPageModel } from "pages/MainPage";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RoutesPaths } from "shared/config/constants";
import { footerModel } from "widgets/Footer";

export const navigateRoutesConfig: {
  key: RoutesPaths;
  route?: RoutesPaths;
  className?: string;
  onClick?: () => void;
}[] = [
  { key: RoutesPaths.Main, route: RoutesPaths.Main },
  {
    key: RoutesPaths.Location,
    route: RoutesPaths.Main,
    onClick: () => {
      mainPageModel.events.scrollToLocations();
    },
  },
  {
    key: RoutesPaths.Help,
    onClick: () => {
      footerModel.events.scrollToContacts();
    },
  },
];

export const Links = ({
  className,
  elementClassName,
}: {
  className?: string;
  elementClassName?: string;
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { $t } = useTranslation();

  return (
    <div className={className}>
      {navigateRoutesConfig.map((config) => (
        <div
          onClick={() => {
            config.onClick?.();
            config.route && navigate(config.route);
          }}
          key={config.key}
          className={classNames(
            elementClassName,
            pathname === config.key && "underline"
          )}
        >
          {$t("navbarRoutes")[config.key]}
        </div>
      ))}
    </div>
  );
};
