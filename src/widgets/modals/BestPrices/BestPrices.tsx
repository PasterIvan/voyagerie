import { useStore } from "effector-react";
import Modal from "react-modal";
import { $isOpen, closeModal } from "./models";
import { ReactComponent as MoneyGirl } from "./config/money-girl.svg";
import { Lines } from "shared/components/Lines";
import SimpleBar from "simplebar-react";

const customStyles: Modal.Styles = {
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    // inset: 0,
    background: "transparent",
    border: "none",
    borderRadius: "0px",
    overflow: "hidden",
    padding: 0,
    maxWidth: "560px",
    margin: "0 auto auto",
  },
};

export const BestPrices = () => {
  const isOpen = useStore($isOpen);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => closeModal()}
      portalClassName="modal-inset"
      style={customStyles}
    >
      <SimpleBar
        style={{
          maxHeight: "100%",
          paddingRight: "10px",
          background: "#FAE4BC",
          borderRadius: "10px",
          border: "1px solid #000000",
        }}
      >
        <div className="p-11 flex flex-col">
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
      </SimpleBar>
    </Modal>
  );
};
