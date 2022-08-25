import classNames from "classnames";
import { useState, useRef, useEffect, useCallback } from "react";
import { usePropRef } from "shared/lib/hooks/usePropRef";

type imagePropsType = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const ImageWithLoader = ({
  element,
  wrapperClassName,
  className,
  shouldStopOnError = true,
  loadOnEmpty = false,
  src,
  onLoad,
  onError,
  isLoading,
  onClick,
  children,
  ...props
}: {
  isLoading?: boolean;
  loadOnEmpty?: boolean;
  shouldStopOnError?: boolean;
  element?: (props: imagePropsType) => JSX.Element;
  wrapperClassName?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    options: Record<string, string | boolean | number | undefined | null>
  ) => void;
} & Omit<imagePropsType, "onClick">) => {
  const [isImgLoaded, setIsImgLoaded] = useState(true);
  const previousSrcRef = useRef<string | undefined>();
  useEffect(() => {
    if (previousSrcRef.current && src && previousSrcRef.current !== src) {
      setIsImgLoaded(false);
    }

    previousSrcRef.current = src;
  }, [src]);

  const onClickRef = usePropRef(onClick);
  const onClickHandler = useCallback(
    (
      e: React.MouseEvent<HTMLImageElement, MouseEvent>,
      options: Record<string, string | boolean | number>
    ) => {
      onClickRef.current?.(e, { ...options, isImgLoaded, src });
    },
    [isImgLoaded, onLoad]
  );

  const onLoadRef = usePropRef(onLoad);
  const onLoadHandler = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setIsImgLoaded(true);
      onLoadRef.current?.(e);
    },
    []
  );

  useEffect(() => {
    if (isImgLoaded && loadOnEmpty && !src) {
      setIsImgLoaded(false);
    }
  }, [isImgLoaded, loadOnEmpty, src]);

  const onErrorRef = usePropRef(onError);
  const onErrorHandler = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (shouldStopOnError) {
        setIsImgLoaded(true);
      }
      onErrorRef.current?.(e);
    },
    [shouldStopOnError]
  );

  const Element = element || "img";

  return (
    <div className={classNames(wrapperClassName, "overflow-hidden relative")}>
      <Element
        onClick={onClickHandler as imagePropsType["onClick"]}
        onLoad={onLoadHandler}
        onError={onErrorHandler}
        className={classNames(
          className,
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
      {children}
    </div>
  );
};
