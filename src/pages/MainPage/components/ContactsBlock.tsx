import classNames from "classnames";
import { EMAIL, PHONE } from "shared/config/constants";

export const ContactsBlock: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={classNames(
        className,
        "text-sm flex justify-between items-center border-b-[1px] border-b-[#1C8699]/25 h-9 text-[#79bfd6]"
      )}
    >
      <a className="hover:text-blue-accent" href={"tel:" + PHONE}>
        {PHONE}
      </a>
      <a className="hover:text-blue-accent" href={"mailto:" + EMAIL}>
        {EMAIL}
      </a>
    </div>
  );
};
