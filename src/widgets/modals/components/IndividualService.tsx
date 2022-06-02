import { useStore } from "effector-react";
import { ReactComponent as OkGirl } from "../config/ok-girl.svg";
import { Lines } from "shared/components/Lines";
import { $modals, fx, models } from "../models";
import { Modal } from "shared/components/ModalLayout";
import { questionnaireModel } from "feature/questionnaire";
import { useTranslation } from "entities/language/lib";

export const IndividualService = () => {
  const isLoading = useStore(fx.getModalsFx.pending);
  const modals = useStore($modals);

  const { $t, $i18n } = useTranslation();
  const isOpen = useStore(models.individualService.$isOpen);

  return (
    <Modal.Layout
      className="max-w-[560px]"
      isOpen={isOpen}
      onClose={() => models.individualService.events.closeModal()}
    >
      <Modal.ScrollContainer
        style={{
          background: "#79BFD6",
          borderRadius: "10px",
          border: "1px solid #ffffff",
        }}
      >
        <div className="content-editor p-11 flex flex-col">
          <OkGirl className="mx-auto" />
          <Lines.HorizontalLine className="mx-auto color-[#555350] max-w-[270px] pt-5 pb-11">
            <Lines.Star />
          </Lines.HorizontalLine>
          {isLoading || !modals?.individualService ? (
            <div className="h-36 flex justify-center items-center">
              <div className="lds-hourglass after:border-t-black after:border-b-black" />
            </div>
          ) : (
            <>
              <span className="mb-4 text-4xl font-semibold break-words md:break-normal">
                {modals.individualService.title[$i18n]}
              </span>
              <div
                className="content-editor"
                dangerouslySetInnerHTML={{
                  __html: modals.individualService.content[$i18n] || "",
                }}
              />
              <button
                onClick={() => {
                  models.individualService.events.closeModal();
                  questionnaireModel.modal.events.openModal();
                }}
                className="w-40 h-14 rounded-full bg-black text-light text-sm font-semibold mt-9 hover:text-accent"
              >
                {$t("pages.main.button")}
              </button>
            </>
          )}
        </div>
      </Modal.ScrollContainer>
    </Modal.Layout>
  );
};
