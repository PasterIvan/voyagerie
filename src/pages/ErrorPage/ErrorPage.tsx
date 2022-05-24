import { useTranslation } from "entities/language/lib";
import { useScrollToTop } from "shared/lib/hooks/useScrollToTop";
import { ErrorWidget } from "widgets/ErrorComponent/ErrorWidget";

export const ErrorPage = () => {
  useScrollToTop();
  const { $t } = useTranslation();

  return <ErrorWidget code="500" message={$t("pages.p500.label")} />;
};
