import classNames from "classnames";
import { useStore } from "effector-react";
import { switchLanguagesConfig, switchLanguagesModel } from "entities/language";
import { $currentLanguage } from "entities/language/models";
import { useCallback, useMemo } from "react";
import Select, {
  components as _components,
  ControlProps,
  GroupBase,
  OptionProps,
  StylesConfig,
} from "react-select";
import Flag from "react-world-flags";
import { LocalesType } from "shared/config/locales/model";
import { iconsConfig } from "./config";

type OptionType = { value: string; label: string; code: string };

const { Option, Control } = _components;

const IconOption = (props: OptionProps<OptionType>) => {
  return (
    <Option {...props}>
      <div className="flex justify-between items-center">
        <img src={iconsConfig[props.data?.value as LocalesType]} />
        <span className={classNames("overflow-hidden w-0 md:w-auto mx-auto")}>
          {props.data.label}
        </span>
      </div>
    </Option>
  );
};

const IconControl = ({
  children,
  className,
  ...props
}: ControlProps<OptionType>) => {
  const language = useStore($currentLanguage);
  const value = useMemo(
    () => ({
      label: language.short,
      value: language.key,
      code: language.code,
    }),
    [language]
  );

  return (
    <Control className={classNames("!h-auto", className)} {...props}>
      <div className="flex bg-accent w-8 h-8 justify-center items-center rounded-full">
        <img className="" src={iconsConfig[value.value]} />
      </div>{" "}
      <span className="overflow-hidden w-0 md:w-auto mx-auto text-light">
        {children}
      </span>
    </Control>
  );
};

const items = switchLanguagesConfig.languages.map(({ short, key, code }) => ({
  label: short,
  value: key,
  code,
}));

const components = {
  DropdownIndicator: () => null,
  IndicatorSeparator: () => null,
  Option: IconOption,
  Control: IconControl,
};

const styles: StylesConfig<OptionType, boolean, GroupBase<OptionType>> = {
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected
      ? "rgba(239, 207, 165, 1)"
      : state.isFocused
      ? "rgba(239, 207, 165, 0.5)"
      : "transparent",
    color: state.isSelected ? "black" : "white",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: "700",
  }),
  control: (styles, state) => ({
    ...styles,
    boxShadow: state.isFocused ? "0 0 0 2px rgba(239, 207, 165, 0.5)" : "none",
    padding: "12px",
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "999999px",
    background: "transparent",
  }),
  container: (styles, state) => ({
    ...styles,
    backgroundColor: state.isFocused
      ? "rgba(0, 0, 0, 1)"
      : "rgba(0, 0, 0, 0.4)",
    borderRadius: "9999px",
    width: "100%",
    height: "53px",
    display: "flex",
    alignItems: "center",
  }),
  menu: (styles) => ({
    ...styles,
    zIndex: 999999,
    padding: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "5px",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "white",
    fontSize: "14px",
    fontWeight: "700",
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
};

export const ChooseLanguage = () => {
  const language = useStore($currentLanguage);
  const value = useMemo(
    () => ({
      label: language.short,
      value: language.key,
      code: language.code,
    }),
    [language]
  );

  const onChangeHanlder = useCallback(
    (option: { label: string; value: string } | null) => {
      const { value: key } = option || {};

      switchLanguagesModel.events.findLanguage(key);
    },
    []
  );

  return (
    <Select
      className="max-w-[7rem] flex-shrink-0"
      menuPortalTarget={document.body}
      options={items}
      isSearchable={false}
      components={components}
      value={value}
      styles={styles}
      //@ts-ignore
      onChange={onChangeHanlder}
    />
  );
};
