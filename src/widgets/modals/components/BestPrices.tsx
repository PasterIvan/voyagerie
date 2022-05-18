import { useStore } from "effector-react";
import { ReactComponent as MoneyGirl } from "../config/money-girl.svg";
import { Lines } from "shared/components/Lines";
import SimpleBar from "simplebar-react";
import { modals } from "../models";
import { Modal } from "shared/components/ModalLayout";

export const BestPrices = () => {
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
          <span className=" mb-4 text-4xl font-semibold">
            Лучшие ценовые предложения
          </span>
          <p>
            Мы фокусируемся на ограниченном количестве стран и работаем только с
            лучшими люксовыми отелями.
          </p>
          <p className="pt-5">
            Это позволяет нам выстраивать выгодное партнерство и предлагать
            нашим клиентам лучшие условия по люксовым отелям в тех направлениях,
            с которыми мы работаем.
          </p>
          <p className="pt-5">
            Попробуйте отправить заявку и вы будете приятно удивлены нашим
            предложением.
          </p>
          <p className="pt-5">
            Наши цены для Вас будут выгоднее цен напрямую от отеля или от
            агрегаторов, при этом вы еще получите персональный сервис и
            сопровождение до, в процессе и после отдыха!
          </p>
          <button className="w-40 h-14 rounded-full bg-black text-light text-sm font-semibold mt-9 hover:text-accent">
            Оставить заявку
          </button>
        </div>
      </Modal.ScrollContainer>
    </Modal.Layout>
  );
};
