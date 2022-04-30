import classNames from "classnames";
import { useParams } from "react-router-dom";

export const PlacePage = () => {
  const { id } = useParams();
  console.log('id', id);

  return (
    <div
      className={classNames(
        "background flex justify-center bg-black-background px-8"
      )}
    >
      <div className="w-[927px] border-accent/25 border-x flex flex-col items-center mr-28"></div>
    </div>
  );
};
