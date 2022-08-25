import React, { useState, useCallback, useEffect } from "react";

import placeholderImg from "app/assets/images/placeholder-image.svg";
import classNames from "classnames";
import { usePropRef } from "shared/lib/hooks/usePropRef";

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
  hideOnError = false,
  onClick,
  ...props
}: {
  hideOnError?: boolean;
  placeholder?: string;
  successClassName?: string;
  errorClassName?: string;
  element?: (props: imagePropsType) => JSX.Element;
  onClick?: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    options: Record<string, string | boolean | number | undefined | null>
  ) => void;
} & Omit<imagePropsType, "onClick"> &
  Record<string, any>) => {
  const [isError, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  const onLoadRef = usePropRef(onLoad);
  const onLoadHandler = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      onLoadRef.current?.(e);
    },
    [isError]
  );

  const onClickRef = usePropRef(onClick);
  const onClickHandler = useCallback(
    (
      e: React.MouseEvent<HTMLImageElement, MouseEvent>,
      options: Record<string, string | boolean | number>
    ) => {
      onClickRef.current?.(e, { ...options, hasError: isError, src });
    },
    [isError]
  );

  const onErrorRef = usePropRef(onError);
  const onErrorHandler = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setError(true);
      onErrorRef.current?.(e);
    },
    [onError]
  );

  const Element = element || "img";

  return (
    <Element
      className={classNames(
        hideOnError && isError ? "hidden" : "",
        className,
        !isError && successClassName,
        isError && errorClassName
      )}
      onLoad={onLoadHandler}
      onError={onErrorHandler}
      onClick={onClickHandler as imagePropsType["onClick"]}
      src={isError ? placeholder : src}
      {...props}
    />
  );
};
