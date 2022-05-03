import { useStore } from "effector-react";
import { useCallback, useMemo } from "react";
import { locales } from "shared/config/locales";
import { LocaleObject } from "shared/config/locales/model";
import { Paths } from "shared/lib/types";
import { $currentLanguage } from "./models";

export const useTranslation = () => {
  const language = useStore($currentLanguage);
  const locale = useMemo(() => locales[language.key], [language]);
  const translateFunction = useCallback(
    (path: Paths<LocaleObject>): any => {
      try {
        return (path as any)
          .split(".")
          .reduce(
            (obj: any, key: string | number) => (obj as any)[key],
            locale
          ) as unknown as string;
      } catch {
        return path;
      }
    },
    [locale]
  );

  return {
    $t: translateFunction,
    $i18n: language.key,
    language,
  };
};
