import classNames from "classnames";
import sunIcon from "./images/sun.svg";
import seaIcon from "./images/sea.svg";

export type Sizes = "sm" | "md";

const sizeClasses: Record<
  Sizes,
  { block: string; container: string; icon: string }
> = {
  sm: {
    block: "px-2 py-1",
    container: "text-xs font-medium",
    icon: "w-3 h-3 mr-1",
  },
  md: {
    block: "px-4 py-2",
    container: "text-sm font-medium",
    icon: "w-5 h-5 mr-2",
  },
};
const mathSignSymbols: Record<number, string> = {
  "1": "+",
  "-1": "-",
  "0": "",
};

export const TemperatureCard: React.FC<{
  size?: Sizes;
  className?: string;
  airTemperature: number;
  waterTemperature: number;
}> = ({ size = "sm", className, airTemperature, waterTemperature }) => {
  return (
    <div
      className={classNames(
        className,
        "flex items-center bg-accent rounded",
        sizeClasses[size].container
      )}
    >
      <div
        className={classNames(
          "flex items-center border-r-[0.5px] border-[#180F0B]/10",
          sizeClasses[size].block
        )}
      >
        <img
          src={sunIcon}
          className={classNames("inline", sizeClasses[size].icon)}
        />
        {mathSignSymbols[Math.sign(airTemperature)]}
        {airTemperature}℃
      </div>
      <div
        className={classNames(
          "flex items-center border-l-[0.5px] border-[#180F0B]/10",
          sizeClasses[size].block
        )}
      >
        <img
          src={seaIcon}
          className={classNames("inline", sizeClasses[size].icon)}
        />
        {mathSignSymbols[Math.sign(waterTemperature)]}
        {waterTemperature}℃
      </div>
    </div>
  );
};
