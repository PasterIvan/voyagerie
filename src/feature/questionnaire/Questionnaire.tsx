import { useStore } from "effector-react";
import { Modal } from "shared/components/ModalLayout";
import { modal } from "./model";
import { ReactComponent as DocsIcon } from "./config/docs-icon.svg";
import { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const steps = [
  {
    question: "Когда вы хотите поехать в путешествие?",
    suggestion: "Укажите период или конкретные даты",
    placeholder: "В пятницу , 13-того",
    isRequired: true,
  },
  {
    question: "Вы уже решили  в какую страну вы хотите поехать?",
    suggestion:
      "Если у да - укажите страну, если  нет - напишите чего ждете от отдыхв и мы предложим подходящее направление",
    placeholder: "На Мальдивы",
    isRequired: true,
  },
  {
    question: "В каком составе вы планируете поехать?",
    suggestion:
      "Укажите возраст гостей. Сколько нужно номеров / вилл? Вы хотите поселиться все вместе или раздельно?",
    placeholder: "Я жена. Дети",
    isRequired: true,
  },
  {
    question: "Что для вас важно во время отдыха?",
    suggestion:
      "Кому-то важно кулинарное разнообразие ии наличие сёрфинга или большого тенниса, или детский досуг, а может только для взрослых....",
    placeholder: "Семейный тюлень. Больше аниматоров для младшего.",
    isRequired: true,
  },
  {
    question: "Какой планируемый бюджет вашего отдыха?",
    suggestion:
      "Есть дорогущие суперлюксовые отели, а есть более приемлемые пятерки. на что вы ориентируетесь?",
    placeholder: "15000",
    isRequired: true,
  },
  {
    question: "Помочь вам с авиабилетами?",
    placeholder: "Да,только прямые рейсы.",
    isRequired: true,
  },
  {
    question:
      "Укажите пожалуйсат как вас зовут и куда вам прислать предложение",
    suggestion:
      "Как с вами лучше связаться: по  вaтсапу или телеграмму? По телефону?",
    placeholder: "+7 555 555 55 55, Иван Иванов",
    isRequired: true,
  },
];

const stepPercentLength = Math.floor(100 / steps.length);

export const Questionnaire = () => {
  const [inputs, setInputs] = useState<Record<number, string | undefined>>(
    () => ({})
  );

  const isOpen = useStore(modal.$isOpen);
  const [isFocused, setIsFocused] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const [isShownError, setIsShownError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const currentFields = useMemo(() => steps[currentStep], [currentStep]);

  const shouldValidate = currentFields.isRequired;
  const isPrevEnabled = currentStep > 0;
  const isNextEnabled = currentStep < steps.length - 1;
  const input = inputs[currentStep];

  const isLastStep = currentStep === steps.length - 1;
  const isInputsValid = useMemo(
    () => Object.values(inputs).every(Boolean),
    [inputs]
  );

  const canFinish = isInputsValid && isLastStep && isValid;

  useEffect(() => {
    if (!shouldValidate && !isValid) {
      setIsValid(true);
      return;
    }
    if (!input) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
  }, [isValid, currentStep, shouldValidate, input]);

  useEffect(() => {
    setIsShownError(false);
  }, [currentStep]);

  const onResetForm = () => {
    setInputs({});
    setCurrentStep(0);
  };

  const onNextHandler = () => {
    if (!isNextEnabled) return;
    if (!isValid) {
      setIsShownError(true);
      return;
    }

    setCurrentStep(currentStep + 1);
  };
  const onPrevHandler = () => {
    if (!isPrevEnabled) return;

    setCurrentStep(currentStep - 1);
  };
  const onFinishHandler = () => {
    if (!canFinish) return;

    onResetForm();
    modal.events.closeModal();
  };

  return (
    <Modal.Layout
      withClose={false}
      className="max-w-3xl md:max-h-[560px] w-full h-full !m-auto !inset-0 lg:!inset-10"
      isOpen={isOpen}
      onClose={() => modal.events.closeModal()}
    >
      <div className="overflow-auto w-full h-full bg-black border-light/50 !m-auto border relative flex flex-col">
        <div className="flex-shrink-0 px-4 md:px-11 min-h-[90px] text-[#F2F2F2] grid grid-cols-[auto_auto] items-center">
          <div className="flex text-sm font-light justify-self-start justify-center items-center">
            <DocsIcon className="inline mr-2" />
            <div>Заполните данные о планируемом путешествии.</div>
          </div>
          <div className="justify-self-end flex items-center">
            {currentStep + 1}/{steps.length}{" "}
            <AiOutlineClose
              className={classNames(
                "ml-1 z-50 inline lg:hidden hover:text-accent cursor-pointer w-6 h-6"
              )}
              onClick={() => modal.events.closeModal()}
            />
          </div>
        </div>
        <div
          className="transition-all duration-700 ease-out flex-shrink-0 h-[5px] ml-auto col-span-2 bg-[#CBCBCB]"
          style={{ width: 100 - currentStep * stepPercentLength + "%" }}
        />
        <div className="p-4 md:p-11 flex flex-col flex-grow">
          <div className="text-[#F2F2F2] text-2xl mt-auto md:mt-0">
            {currentFields.question}
          </div>
          <div className="w-full flex flex-col pt-3 pb-12 mb-auto md:mb-0">
            <label
              className={classNames(
                !isFocused ? "text-[#B2B2B2]" : "text-light",
                "block font-light text-sm tracking-wide mb-2"
              )}
              htmlFor="input"
            >
              {currentFields.suggestion}
            </label>
            <textarea
              value={input || ""}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => {
                setIsShownError(false);
                setInputs({
                  ...inputs,
                  [currentStep]: e.target.value || undefined,
                });
              }}
              placeholder={currentFields.placeholder}
              id="input"
              className={classNames(
                isShownError ? "border-b-[red]" : "border-b-accent/50",
                "min-h-[50px] px-0 form-check-input bg-transparent border-x-0 border-t-0 focus:ring-0  placeholder-light/25 hover:placeholder-light/50 focus:placeholder-light/50 focus:border-accent border-b text-[#C4C4C4]"
              )}
            />
            <span
              className={classNames(
                "text-[red] mt-2",
                !isShownError && "hidden"
              )}
            >
              Пожалуйста, заполните все обязательные поля
            </span>
          </div>
          <div className="flex-shrink-0 w-full flex md:mt-auto justify-between">
            <button
              onClick={onPrevHandler}
              className={classNames(
                !isPrevEnabled
                  ? "bg-[#7A7A7A] cursor-not-allowed"
                  : "bg-accent hover:bg-black hover:text-light border border-transparent hover:border-light",
                "rounded-full py-3 px-8 flex justify-center items-center"
              )}
            >
              <BsArrowLeft className="inline" />
              <span className="hidden lg:inline pl-2">Назад</span>
            </button>
            <button
              onClick={onNextHandler}
              className={classNames(
                isLastStep && "hidden",
                !isNextEnabled
                  ? "bg-[#7A7A7A] cursor-not-allowed"
                  : "bg-accent hover:bg-black hover:text-light border border-transparent hover:border-light",
                "rounded-full py-3 px-8 flex justify-center items-center"
              )}
            >
              <span className="hidden lg:inline pr-2">Вперед</span>
              <BsArrowRight className="inline" />
            </button>
            <button
              onClick={onFinishHandler}
              className={classNames(
                !isLastStep && "hidden",
                !canFinish
                  ? "bg-[#7A7A7A] cursor-not-allowed"
                  : "bg-accent hover:bg-black hover:text-light border border-transparent hover:border-light",
                "rounded-full py-3 px-8 flex justify-center items-center"
              )}
            >
              <span className="hidden lg:inline pr-2">Отправить</span>
            </button>
          </div>
        </div>
      </div>
    </Modal.Layout>
  );
};
