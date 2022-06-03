import classNames from "classnames";
import { useStore } from "effector-react";
import { $contacts } from "entities/contacts/models";

export const ContactsBlock: React.FC<{ className?: string }> = ({
  className,
}) => {
  const contacts = useStore($contacts);

  return (
    <div
      className={classNames(
        className,
        "text-sm flex justify-between items-center border-b-[1px] border-b-[#1C8699]/25 h-9 text-[#79bfd6]"
      )}
    >
      <a className="hover:text-blue-accent" href={"tel:" + contacts?.phone}>
        {contacts?.phone}
      </a>
      <a className="hover:text-blue-accent" href={"mailto:" + contacts?.email}>
        {contacts?.email}
      </a>
    </div>
  );
};
