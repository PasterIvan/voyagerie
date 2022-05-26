import { useState, useCallback } from "react";

import placeholderImg from "app/assets/images/placeholder-image.svg";

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
  ...props
}: {
  placeholder?: string;
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
      onLoad={onLoadHandler}
      onError={onErrorHandler}
      src={isError ? placeholder : src}
      {...props}
    />
  );
};
