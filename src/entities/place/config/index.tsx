import { ReactComponent as Boat } from "./boat.svg";
import { ReactComponent as Plane } from "./plane.svg";
import { ReactComponent as Maize } from "./maize.svg";
import { FunctionComponent, SVGProps } from "react";

export const transferIcons: Record<
  "air" | "water" | "air-water",
  FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>
> = {
  "air-water": Maize,
  air: Plane,
  water: Boat,
};
