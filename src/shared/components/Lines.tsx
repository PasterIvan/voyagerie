import { ReactNode } from "react";
import { ReactComponent as Star } from "app/assets/images/star.svg";
import classNames from "classnames";

const Container: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames("flex items-center w-full", className)}>
      {children}
    </div>
  );
};

type LineProps = {
  hasInnerGutters?: boolean;
  noGutters?: boolean;
  starPosition?: "left" | "right" | "none";
};

const Line: React.FC<
  {
    className?: string;
  } & LineProps
> = ({
  className,
  noGutters = false,
  hasInnerGutters = false,
  starPosition = "none",
}) => {
  const withStar = starPosition !== "none";
  const isRtl = starPosition === "right";

  return !isRtl ? (
    <>
      <hr
        className={classNames(
          className,
          {
            "-mr-4": !noGutters && withStar,
            "-mr-1": noGutters && withStar,
            "ml-2": hasInnerGutters,
            "mr-2": hasInnerGutters && !withStar,
          },
          "text-accent/25 flex-grow"
        )}
      />
      {withStar && (
        <Star
          className={classNames(
            !noGutters && "translate-x-[51%]",
            "opacity-25"
          )}
        />
      )}
    </>
  ) : (
    <>
      {withStar && (
        <Star
          className={classNames(
            !noGutters && "-translate-x-[51%]",
            "opacity-25"
          )}
        />
      )}
      <hr
        className={classNames(
          className,
          {
            "-ml-4": !noGutters && withStar,
            "-ml-1": noGutters && withStar,
            "mr-2": hasInnerGutters,
            "ml-2": hasInnerGutters && !withStar,
          },
          "text-accent/25 flex-grow"
        )}
      />
    </>
  );
};

const HorizontalLine: React.FC<
  {
    children: ReactNode;
    className?: string;
    withStar?: boolean;
  } & Omit<LineProps, "starPosition">
> = ({ children, className, withStar, ...props }) => {
  return (
    <Container className={className}>
      <Line starPosition={withStar ? "right" : undefined} {...props} />
      {children}
      <Line starPosition={withStar ? "left" : undefined} {...props} />
    </Container>
  );
};

export const Lines = {
  Container,
  HorizontalLine,
  Line,
  Star,
};
