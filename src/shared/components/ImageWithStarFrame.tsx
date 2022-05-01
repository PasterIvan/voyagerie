import { ReactComponent as LogoSmall } from "app/assets/images/logo-small.svg";
import { StarFrame, StarFrameProps } from "./StarFrame";

export const ImageWithLogo = ({
  src,
  name,
  frameProps,
}: {
  src?: string;
  name: string;
  frameProps?: StarFrameProps;
}) => {
  return (
    <StarFrame {...frameProps} className="relative mt-16 h-60 w-full">
      <div className="w-full h-full overflow-hidden">
        <img className="max-w-none moving-block object-cover" src={src} />
      </div>
      <LogoSmall className="absolute left-10 -top-7" />
      <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-[#000000]/0 to-[#000000] opacity-75" />
      <div className="absolute text-light left-10 bottom-6 text-5xl font-medium">
        {name}
      </div>
    </StarFrame>
  );
};
