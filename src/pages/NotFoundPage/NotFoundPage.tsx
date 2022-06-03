import { useTranslation } from "entities/language/lib";
import { useScrollToTop } from "shared/lib/hooks/useScrollToTop";
import { ErrorWidget } from "widgets/ErrorComponent/ErrorWidget";

export default ({ isMain }: { isMain?: boolean | undefined }) => {
  useScrollToTop();
  const { $t } = useTranslation();

  return (
    <ErrorWidget isMain={isMain} code="404" message={$t("pages.p404.label")} />
  );
};
