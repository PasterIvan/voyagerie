import { useState, useCallback } from "react";

import placeholderImg from "app/assets/images/placeholder-image.svg";
import classNames from "classnames";

type imagePropsType = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const ImageWithError = ({
  element,
  onLoad,
  onError,
  src,
  placeholder = placeholderImg,
  className,
  successClassName,
  errorClassName,
  ...props
}: {
  placeholder?: string;
  successClassName?: string;
  errorClassName?: string;
  element?: (props: imagePropsType) => JSX.Element;
} & imagePropsType) => {
  const [isError, setError] = useState(false);

  const onLoadHandler = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      onLoad?.(e);
    },
    [isError, onLoad]
  );

  const onErrorHandler = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setError(true);
      onError?.(e);
    },
    [onError]
  );

  const Element = element || "img";

  return (
    <Element
      className={classNames(
        className,
        !isError && successClassName,
        isError && errorClassName
      )}
      onLoad={onLoadHandler}
      onError={onErrorHandler}
      src={isError ? placeholder : src}
      {...props}
    />
  );
};
