import classNames from "classnames";
import { useState, useRef, useEffect } from "react";

export const ImageWithLoader = ({
  className,
  src,
  alt,
}: { className?: string; src?: string; alt?: string } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  const [isImgLoaded, setIsImgLoaded] = useState(true);
  const previousSrcRef = useRef<string | undefined>();
  useEffect(() => {
    if (previousSrcRef.current && src && previousSrcRef.current !== src) {
      setIsImgLoaded(false);
    }

    previousSrcRef.current = src;
  }, [src]);

  return (
    <div className={classNames(className, "overflow-hidden relative")}>
      <img
        alt={alt}
        onLoad={() => {
          setIsImgLoaded(true);
        }}
        onError={() => {
          setIsImgLoaded(true);
        }}
        src={src}
        className={classNames(
          "z-0 w-full h-full object-cover",
          !isImgLoaded && "opacity-40"
        )}
      />
      <div
        className={classNames(
          "absolute w-full h-full top-0 left-0 flex justify-center items-center",
          isImgLoaded && "hidden"
        )}
      >
        <div className="lds-hourglass" />
      </div>
    </div>
  );
};
