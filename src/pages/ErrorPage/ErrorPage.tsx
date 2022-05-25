import { useTranslation } from "entities/language/lib";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesPaths } from "shared/config/constants";
import { useScrollToTop } from "shared/lib/hooks/useScrollToTop";
import { ErrorWidget } from "widgets/ErrorComponent/ErrorWidget";

export default () => {
  const navigate = useNavigate();
  useScrollToTop();
  const { $t } = useTranslation();

  useEffect(() => {
    const handler = () => {
      navigate(RoutesPaths.Main, {
        replace: true,
      });
    };

    window.onbeforeunload = handler;

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return <ErrorWidget code="500" message={$t("pages.p500.label")} />;
};
