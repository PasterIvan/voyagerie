import classNames from "classnames";
import { useTranslation } from "entities/language/lib";

export const HostelPage = () => {
  // const { id } = useParams();
  const { $t } = useTranslation();

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
