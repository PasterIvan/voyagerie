import { ReactComponent as Boat } from "./boat.svg";
import { ReactComponent as Plane } from "./plane.svg";
import { ReactComponent as Maize } from "./maize.svg";
import { FunctionComponent, SVGProps } from "react";
import { PlaceType } from "entities/location/models";

export const transferIcons: Record<
  PlaceType["transferType"],
  FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>
> = {
  "air-water": Maize,
  air: Plane,
  water: Boat,
};
