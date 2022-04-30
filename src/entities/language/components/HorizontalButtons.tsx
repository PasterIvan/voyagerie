import { reflect } from "@effector/reflect";
import { switchLanguagesConfig, switchLanguagesModel } from "..";
import { LanguageType } from "../models";
import classNames from "classnames";

const View: React.FC<{
  className?: string;
  languages: LanguageType[];
  onSwitch: (element: LanguageType) => void;
  value: LanguageType;
}> = ({ languages, onSwitch, value, className }) => {
  return (
    <div className={className}>
      {languages.map((language) => (
        <button
          className={classNames(
            "w-32 h-8 rounded-sm text-light mx-[0.5px]",
            language.code === value.code
              ? "bg-gradient-to-b from-[#79BFD6] to-[#1C8699] cursor-default"
              : "opacity-25 border border-accent hover:opacity-100"
          )}
          onClick={() => onSwitch(language)}
          key={language.code}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
};

export const HorizontalButtons = reflect({
  view: View,
  bind: {
    languages: switchLanguagesConfig.languages,
    onSwitch: switchLanguagesModel.events.switchLanguage,
    value: switchLanguagesModel.$currentLanguage,
  },
});
