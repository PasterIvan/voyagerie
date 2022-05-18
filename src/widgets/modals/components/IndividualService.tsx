import { useStore } from "effector-react";
import { ReactComponent as OkGirl } from "../config/ok-girl.svg";
import { Lines } from "shared/components/Lines";
import SimpleBar from "simplebar-react";
import { modals } from "../models";
import { Modal } from "shared/components/ModalLayout";

export const IndividualService = () => {
  const isOpen = useStore(modals.individualService.$isOpen);
  return (
    <Modal.Layout
      className="max-w-[560px]"
      isOpen={isOpen}
      onClose={() => modals.individualService.events.closeModal()}
    >
      <Modal.ScrollContainer
        style={{
          background: "#79BFD6",
          borderRadius: "10px",
          border: "1px solid #ffffff",
        }}
      >
        <div className="p-11 flex flex-col">
          <OkGirl className="mx-auto" />
          {/* <AiOutlineClose className="right-0 top-0 z-10" /> */}
          <Lines.HorizontalLine className="mx-auto color-[#555350] max-w-[270px] pt-5 pb-11">
            <Lines.Star />
          </Lines.HorizontalLine>
          <span className=" mb-4 text-4xl font-semibold">
            Индидуальный сервис и сопровождение
          </span>

          <p>
            Мы позаботимся о Вас с момента приобретения тура до вашего возврата
            домой.
          </p>
          <p className="pt-5">
            Мы поможем вам правильно и вовремя подготовиться к поездке,
            расскажем, что и как можно и нужно запланировать заранее и возьмем
            на себя решение любых задач, связанных с поездкой.
          </p>
          <p className="pt-5">
            В каждой из стран, с которыми мы работаем у нас есть партнеры,
            которые помогут решить любые вопросы на месте. Обращайтесь и сами
            сможете оценить наш сервис!
          </p>
          <p className="pt-5">Обращайтесь и сами сможете оценить наш сервис!</p>
          <button className="w-40 h-14 rounded-full bg-black text-light text-sm font-semibold mt-9 hover:text-accent">
            Оставить заявку
          </button>
        </div>
      </Modal.ScrollContainer>
    </Modal.Layout>
  );
};
