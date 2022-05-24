import { useStore } from "effector-react";
import { ReactComponent as MoneyGirl } from "../config/money-girl.svg";
import { Lines } from "shared/components/Lines";
import { modals } from "../models";
import { Modal } from "shared/components/ModalLayout";
import { questionnaireModel } from "feature/questionnaire";
import { useTranslation } from "entities/language/lib";
import { modalsMock } from "shared/api/modalsMock";

export const BestPrices = () => {
  const isLoading = false;

  const { $t, $i18n } = useTranslation();
  const isOpen = useStore(modals.bestPrices.$isOpen);
  return (
    <Modal.Layout
      className="max-w-[560px]"
      isOpen={isOpen}
      onClose={() => modals.bestPrices.events.closeModal()}
    >
      <Modal.ScrollContainer
        style={{
          background: "#FAE4BC",
          borderRadius: "10px",
          border: "1px solid #000000",
        }}
      >
        <div className="relative p-11 flex flex-col">
          <MoneyGirl className="mx-auto" />
          <Lines.HorizontalLine className="mx-auto color-[#555350] max-w-[270px] pt-5 pb-11">
            <Lines.Star />
          </Lines.HorizontalLine>
          {isLoading ? (
            <div className="h-36 flex justify-center items-center">
              <div className="lds-hourglass after:border-t-black after:border-b-black" />
            </div>
          ) : (
            <>
              <span className="mb-4 text-4xl font-semibold break-words md:break-normal">
                {modalsMock.bestPrices.title[$i18n]}
              </span>
              <div
                className="content-editor"
                dangerouslySetInnerHTML={{
                  __html: modalsMock.bestPrices.content[$i18n] || "",
                }}
              />
              <button
                onClick={() => {
                  modals.bestPrices.events.closeModal();
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
