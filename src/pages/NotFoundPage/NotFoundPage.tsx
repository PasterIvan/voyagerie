import { useTranslation } from "entities/language/lib";
import { useScrollToTop } from "shared/lib/hooks/useScrollToTop";
import { ErrorWidget } from "widgets/ErrorComponent/ErrorWidget";

export default () => {
  useScrollToTop();
  const { $t } = useTranslation();

  return <ErrorWidget code="404" message={$t("pages.p404.label")} />;
};
