import ReactModal from "react-modal";
import SimpleBar from "simplebar-react";
import { AiOutlineClose } from "react-icons/ai";
import { ReactNode } from "react";
import classNames from "classnames";

ReactModal.setAppElement("#modal");

const ScrollContainer = ({
  children,
  style,
  ...props
}: {
  children: ReactNode;
  style?: React.CSSProperties;
} & SimpleBar.Props) => (
  <SimpleBar
    style={{
      maxHeight: "100%",
      paddingRight: "10px",
      ...style,
    }}
    {...props}
  >
    {children}
  </SimpleBar>
);

const Layout = ({
  children,
  onClose,
  withClose = true,
  overlayClassName,
  iconClassName,
  className,
  ...props
}: {
  children: ReactNode | ReactNode[];
  onClose: () => void;
  overlayClassName?: string;
  className?: string;
  iconClassName?: string;
  withClose?: boolean;
} & Omit<
  ReactModal.Props,
  "onRequestClose" | "overlayClassName" | "className"
>) => {
  return (
    <ReactModal
      onRequestClose={onClose}
      overlayClassName={classNames(
        overlayClassName,
        "z-[1000] bg-black/50 fixed inset-0"
      )}
      className={classNames(
        className,
        "border-none bg-transparent overflow-hidden rounded-none p-0 mt-0 mx-auto mb-auto absolute inset-0 md:inset-10 outline-none"
      )}
      {...props}
    >
      {withClose && (
        <AiOutlineClose
          className={classNames(
            iconClassName,
            "z-50 inline lg:hidden hover:text-light cursor-pointer absolute w-8 h-8 right-4 top-4"
          )}
          onClick={onClose}
        />
      )}
      {children}
    </ReactModal>
  );
};

export const Modal = {
  Layout,
  ScrollContainer,
};
