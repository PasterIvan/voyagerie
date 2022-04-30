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

type LineProps = (
  | { withStar: true; isRtl?: boolean }
  | { withStar?: false }
) & {
  hasInnerGutters?: boolean;
  noGutters?: boolean;
};

const Line: React.FC<{
  className?: string;
  hasInnerGutters?: boolean;
  noGutters?: boolean;
  isRtl?: boolean;
  withStar?: boolean;
}> = ({
  className,
  withStar = false,
  noGutters = false,
  hasInnerGutters = false,
  isRtl = false,
}) => {
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
  } & LineProps
> = ({ children, className, ...props }) => {
  return (
    <Container className={className}>
      <Line isRtl {...props} />
      {children}
      <Line {...props} />
    </Container>
  );
};

export const Lines = {
  Container,
  HorizontalLine,
  Line,
};
