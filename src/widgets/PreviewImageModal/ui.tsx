import classNames from "classnames";
import { useStore } from "effector-react";
import { Modal } from "shared/components/ModalLayout";
import { $currentImage, events, modalModel } from "./modal";
import { useEffect, useState } from "react";

export const ImageModal = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isOpen = useStore(modalModel.$isOpen);
  const image = useStore($currentImage);

  useEffect(() => {
    setIsLoading(true);
  }, [image]);

  const onClose = () => {
    events.resetImagePreview();
    modalModel.events.closeModal();
  };

  return (
    <Modal.Layout
      isOpen={isOpen}
      onClose={onClose}
      shouldHideClose={false}
      iconClassName="bg-black/50 rounded-full p-1 md:p-0 md:rounded-0 md:bg-transparent w-8 h-8 xl:w-16 xl:h-16 right-3 top-3 4xl:right-10 4xl:top-10 text-accent hover:!text-light"
      overlayClassName={classNames(
        "z-[1000] bg-black/50 fixed left-0 top-0 h-screen w-screen flex"
      )}
      className={classNames(
        "!relative mx-auto md:p-12 xl:p-20 4xl:p-32 !bg-black-background !mb-0 !inset-0 rounded-md w-full md:w-auto flex"
      )}
    >
      <img
        onError={() => setIsLoading(false)}
        onLoad={() => setIsLoading(false)}
        src={image || undefined}
        className="rounded-md min-w-[200px] min-h-[200px] max-h-full max-w-full m-auto w-full h-full object-contain md:object-cover md:h-auto md:w-auto"
        alt="preview"
      />
      <div
        className={classNames(
          "absolute w-full h-full top-0 left-0 flex justify-center items-center",
          !isLoading && "hidden"
        )}
      >
        <div className="lds-hourglass" />
      </div>
    </Modal.Layout>
  );
};
