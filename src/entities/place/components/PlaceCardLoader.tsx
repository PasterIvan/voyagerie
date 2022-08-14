import classNames from "classnames";

export const PlaceCardLoader = ({
  bottomBorder = true,
  topBorder = false,
}: {
  bottomBorder?: boolean;
  topBorder?: boolean;
}) => (
  <div className="px-7 group w-full h-72 md:h-80 rounded">
    <div
      className={classNames(
        bottomBorder && "border-b border-b-light/20",
        topBorder && "border-t border-t-light/20",
        "gap-x-10 lg:gap-x-0 py-7 w-full h-full relative"
      )}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="lds-hourglass" />
      </div>
    </div>
  </div>
);
