import classNames from "classnames";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";

type imagePropsType = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const ImageWithLoader = ({
  element,
  className,
  imgClassName,
  shouldStopOnError = true,
  src,
  onLoad,
  onError,
  isLoading,
  ...props
}: {
  isLoading?: boolean;
  shouldStopOnError?: boolean;
  element?: (props: imagePropsType) => JSX.Element;
  className?: string;
  imgClassName?: string;
} & imagePropsType) => {
  const [isImgLoaded, setIsImgLoaded] = useState(true);
  const previousSrcRef = useRef<string | undefined>();
  useEffect(() => {
    if (previousSrcRef.current && src && previousSrcRef.current !== src) {
      setIsImgLoaded(false);
    }

    previousSrcRef.current = src;
  }, [src]);

  const onLoadHandler = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setIsImgLoaded(true);
      onLoad?.(e);
    },
    [onLoad]
  );

  const onErrorHandler = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (shouldStopOnError) {
        setIsImgLoaded(true);
      }
      onError?.(e);
    },
    [shouldStopOnError, onError]
  );

  const Element = element || "img";

  return (
    <div className={classNames(className, "overflow-hidden relative")}>
      <Element
        onLoad={onLoadHandler}
        onError={onErrorHandler}
        className={classNames(
          imgClassName,
          "z-0 w-full h-full object-cover",
          !isImgLoaded && "opacity-40"
        )}
        src={src}
        {...props}
      />
      <div
        className={classNames(
          "absolute w-full h-full top-0 left-0 flex justify-center items-center",
          !isLoading && isImgLoaded && "hidden"
        )}
      >
        <div className="lds-hourglass" />
      </div>
    </div>
  );
};
