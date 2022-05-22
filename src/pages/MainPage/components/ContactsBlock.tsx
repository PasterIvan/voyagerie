import classNames from "classnames";
import { infoMock } from "shared/api/infoMock";

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
      <a className="hover:text-blue-accent" href={"tel:" + infoMock.phone}>
        {infoMock.phone}
      </a>
      <a className="hover:text-blue-accent" href={"mailto:" + infoMock.email}>
        {infoMock.email}
      </a>
    </div>
  );
};
