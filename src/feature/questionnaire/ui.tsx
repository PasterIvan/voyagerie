import {useGate, useStore} from "effector-react";
import {Modal} from "shared/components/ModalLayout";
import {$questions, fx, gates, modal} from "./model";
import {ReactComponent as DocsIcon} from "./config/docs-icon.svg";
import {useEffect, useMemo, useState} from "react";
import classNames from "classnames";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import {useTranslation} from "entities/language/lib";
import {toast} from "react-toastify";

export const Questionnaire = () => {
    const {$t, $i18n} = useTranslation();
    const [isSuccessScreen, setIsSuccessScreen] = useState(false);

    const isQuestionsLoading = useStore(fx.getQuestions.pending);
    const isSending = useStore(fx.sendQuestionary.pending);

    const isLoading = isQuestionsLoading || isSending;

    const steps = useStore($questions);

    const stepPercentLength = steps ? Math.floor(100 / steps.length) : 0;

    const [inputs, setInputs] = useState<Record<number, string | undefined>>(
        () => ({})
    );

    const isOpen = useStore(modal.$isOpen);
    const [isFocused, setIsFocused] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const [isShownError, setIsShownError] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const currentFields = useMemo(
        () => steps && steps[currentStep],
        [steps, currentStep]
    );

    const shouldValidate = currentFields?.isRequired;
    const isPrevEnabled = currentStep > 0;
    const isNextEnabled = steps && currentStep < steps.length - 1;
    const input = inputs[currentStep];

    const isLastStep = steps && currentStep === steps.length - 1;
    const isInputsValid = useMemo(
        () => Object.values(inputs).every(Boolean),
        [inputs]
    );

    const canFinish = isInputsValid && isLastStep && isValid;

    useEffect(() => {
        if (isLoading) return;
        if (!currentFields) return;

        if (!shouldValidate && !isValid) {
            setIsValid(true);
            return;
        }
        if (!input) {
            setIsValid(false);
            return;
        }

        setIsValid(true);
    }, [currentFields, isLoading, isValid, currentStep, shouldValidate, input]);

    useEffect(() => {
        if (isLoading) return;

        setIsShownError(false);
    }, [isLoading, currentStep]);

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

        fx.sendQuestionary(inputs);
    };

    useGate(gates.pageGate, {
        successSendCallback: () => {
            onResetForm();
            setIsSuccessScreen(true);
        },
        failedSendCallback: () => {
            toast($t("toasts.sendServerError"), {
                type: "error",
            });
        },
    });

    useEffect(() => {
        const modalCloseWatcher = modal.events.closeModal.watch(() => {
            setIsSuccessScreen(false);
        });

        return () => modalCloseWatcher.unsubscribe();
    }, []);

    const successComponent = isSuccessScreen && (
        <>
      <span className="pb-4 text-[#F2F2F2] text-2xl font-normal">
        {$t("pages.form.resultModal.title")}
      </span>
            <button
                onClick={() => modal.events.closeModal()}
                className="my-auto w-full bg-accent hover:bg-black text-black hover:text-accent hover:border-accent hover:border text-xl font-light py-6 px-2 text-center md:mx-2"
            >
                {$t("pages.form.resultModal.sended")}
            </button>
        </>
    );

    const loadingComponent =
        !currentFields ||
        (isLoading && (
            <div className="w-full h-full flex justify-center items-center">
                <div className="lds-hourglass"/>
            </div>
        ));

    return (
        <Modal.Layout
            withClose={false}
            className="max-w-3xl md:max-h-[560px] w-full h-full !m-auto !inset-0 lg:!inset-10"
            isOpen={isOpen}
            onClose={() => modal.events.closeModal()}
        >
            <div
                className="overflow-auto w-full h-full bg-black border-light/50 !m-auto border relative flex flex-col">
                <div
                    className="flex-shrink-0 px-4 md:px-11 min-h-[90px] text-[#F2F2F2] grid grid-cols-[auto_auto] items-center">
                    <div
                        className="flex text-sm font-light justify-self-start justify-center items-center">
                        <DocsIcon className="inline mr-2"/>
                        <div>{$t("questionarie.label")}</div>
                    </div>
                    <div className="justify-self-end flex items-center">
                        {steps && !isLoading && !isSuccessScreen && (
                            <>
                                ({currentStep + 1}/{steps.length})
                            </>
                        )}
                        <AiOutlineClose
                            className={classNames(
                                "ml-1 z-50 inline lg:hidden hover:text-accent cursor-pointer w-6 h-6"
                            )}
                            onClick={() => modal.events.closeModal()}
                        />
                    </div>
                </div>
                <div
                    className={classNames(
                        "transition-all duration-700 ease-out flex-shrink-0 h-[5px] ml-auto col-span-2 bg-[#CBCBCB]",
                        isLoading && "opacity-0"
                    )}
                    style={{width: 100 - currentStep * stepPercentLength + "%"}}
                />
                <div className="p-4 md:p-11 flex flex-col flex-grow">
                    {successComponent || loadingComponent || (
                        <>
                            <div className="text-[#F2F2F2] text-2xl mt-auto md:mt-0">
                                {currentFields.question[$i18n]}
                            </div>
                            <div
                                className="w-full flex flex-col pt-3 pb-12 mb-auto md:mb-0">
                                <label
                                    className={classNames(
                                        !isFocused ? "text-[#B2B2B2]" : "text-light",
                                        "block font-light text-sm tracking-wide mb-2"
                                    )}
                                    htmlFor="input"
                                >
                                    {currentFields.suggestion?.[$i18n]}
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
                                    placeholder={currentFields.placeholder[$i18n]}
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
                  {$t("pleaseFillInput")}
                </span>

                            </div>
                            <div
                                className="flex-shrink-0 w-full flex md:mt-auto justify-between">
                                <button
                                    onClick={onPrevHandler}
                                    className={classNames(
                                        !isPrevEnabled
                                            ? "bg-[#7A7A7A] cursor-not-allowed"
                                            : "bg-accent hover:bg-black hover:text-light border border-transparent hover:border-light",
                                        "rounded-full py-3 px-8 flex justify-center items-center"
                                    )}
                                >
                                    <BsArrowLeft className="inline"/>
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
                                    <BsArrowRight className="inline"/>
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
                                    <span
                                        className="hidden lg:inline pr-2">Отправить</span>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Modal.Layout>
    );
};
