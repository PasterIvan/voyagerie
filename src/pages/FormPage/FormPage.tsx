import classNames from "classnames";
import { useStore } from "effector-react";
import { useTranslation } from "entities/language/lib";
// import { useParams } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import { RoutesPaths } from "shared/config/constants";
import { Header } from "widgets/Header/Header";
import { Breadcrumb } from "shared/components/Breadcrumb";
import { mainPageModel } from "pages/MainPage";
import { $place, ResidenceType } from "entities/place/models";
import { Lines } from "shared/components/Lines";
import { useScrollToTop } from "shared/lib/hooks/useScrollToTop";
import DatePicker from "react-datepicker";
import { ImageWithLoader } from "shared/components/ImageWithLoader";
import { ResidenceChooser } from "./components/ResidenceChooser";
import { ReactComponent as PlaneUp } from "./config/plane-up.svg";
import { ReactComponent as PlaneDown } from "./config/plane-down.svg";
import { ReactComponent as Calendar } from "./config/calendar.svg";
import dayjs from "dayjs";
import { useForm } from "effector-forms";
import { formSchema, successModal } from "./models";
import { Counter } from "shared/components/Counter";
import { ordinalNumbers } from "shared/config/locales/constants";
import { useNavigate } from "react-router-dom";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
import { modals } from "widgets/modals/models";
import { Modal } from "shared/components/ModalLayout";
// import { createForm, useForm } from "effector-forms";
import { AiOutlineClose } from "react-icons/ai";

const foodType = [
  { label: "AO", description: "Только проживание" },
  { label: "BB", description: "Только завтрак" },
  { label: "HB", description: "Полупансион" },
  { label: "FB", description: "Полный пансион" },
];

export default function FormPage() {
  useScrollToTop();
  const isOpen = useStore(successModal.$isOpen);
  const { fields } = useForm(formSchema);

  // useForm(formSchema);

  // const { id } = useParams();
  const place = useStore($place);
  const navigate = useNavigate();

  const { $t, $i18n } = useTranslation();

  const [selectedResidence, setSelectedResidence] =
    useState<ResidenceType | null>(null);
  const [choosedResidence, setChoosedResidence] =
    useState<ResidenceType | null>(null);

  // useEffect(() => {
  //   const closeModalHandler = successModal.events.closeModal.watch(() => {
  //     navigate(-1);
  //   });

  //   return () => {
  //     closeModalHandler();
  //   };
  // }, []);

  useEffect(() => {
    if (dayjs(fields.dateFrom.value).isAfter(dayjs(fields.dateTo.value))) {
      fields.dateTo.onChange(fields.dateFrom.value);
    }
  }, [fields.dateFrom.value, fields.dateTo.value]);

  useEffect(() => {
    if (!fields.foodType.value) {
      fields.foodType.onChange(foodType[0].label);
    }
  }, [fields.foodType.value]);

  useEffect(() => {
    if (!selectedResidence && place?.residences?.length) {
      setSelectedResidence(place.residences[0]);
    }
  }, [selectedResidence, place?.residences]);

  const formRef = useRef<HTMLDivElement | null>(null);
  const previousChoosedResidenceRef = useRef<ResidenceType | null>(null);
  useEffect(() => {
    if (!previousChoosedResidenceRef.current && choosedResidence) {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    previousChoosedResidenceRef.current = choosedResidence;
  }, [choosedResidence]);

  if (!place) return null;

  return (
    <>
      <Modal.Layout
        withClose={false}
        isOpen={isOpen}
        onClose={() => successModal.events.closeModal()}
        className="max-w-3xl max-h-96 w-full h-full !m-auto"
      >
        <div className="w-full h-full bg-black !m-auto border border-accent relative py-8 px-11 flex flex-col">
          <AiOutlineClose
            className="z-50 text-accent hover:text-light cursor-pointer absolute w-8 h-8 right-4 top-4"
            onClick={() => successModal.events.closeModal()}
          />
          <span className="text-[#F2F2F2] text-2xl font-normal">
            Спасибо. Наш менеджер скоро свяжется с вами!
          </span>
          <button
            onClick={() => successModal.events.closeModal()}
            className="my-auto w-full bg-accent hover:bg-black text-black hover:text-accent hover:border-accent hover:border text-xl font-light py-6 text-center"
          >
            Данные успешно отправлены
          </button>
        </div>
      </Modal.Layout>
      <div
        className={classNames("flex justify-center bg-black-background w-full")}
      >
        <div className="flex flex-col items-center w-full">
          <Header
            faqClassName="hidden sm:inline"
            containerClassName="gap-y-0 grid-cols-1 sm:grid-cols-[auto_auto] rounded-b-2xl border border-light/20 p-4"
            className="min-h-[500px]"
            leftBottomElement={
              <Breadcrumb
                items={[
                  { name: $t("pages.main.name"), route: RoutesPaths.Main },
                  {
                    name: $t("pages.location.name"),
                    route: RoutesPaths.Main,
                    onClick: () => mainPageModel.events.scrollToLocations(),
                  },
                  {
                    name: place.location[$i18n],
                    route: `${RoutesPaths.Location}/${place.locationSlug}`,
                  },
                  {
                    name: place.name[$i18n],
                    route: `${RoutesPaths.Place}/${place.slug}`,
                  },
                  { name: $t("pages.form.orderText") },
                ]}
              />
            }
            childrenClassName="flex flex-col justify-around"
            absoluteElementsElement={
              <img
                className="max-w-none moving-block object-cover"
                src={place.image}
              />
            }
          >
            <div className="text-light text-4xl sm:text-[64px] font-normal mx-auto md:max-w-[850px] item text-center leading-0 sm:leading-[70px] max-w-full break-words">
              {place.name[$i18n]}
            </div>
          </Header>
          <div className="w-full px-4 py-8 md:py-16 flex flex-col items-center background">
            <Lines.HorizontalLine className="text-accent-dark/50 max-w-5xl">
              <Lines.Star />
            </Lines.HorizontalLine>
            <ResidenceChooser
              onChoose={(selectedResidence) => {
                setChoosedResidence(selectedResidence);
              }}
              onSelect={(choosedResidence) => {
                setSelectedResidence(choosedResidence);
              }}
              selectedResidence={selectedResidence}
              choosedResidence={choosedResidence}
              residences={place.residences}
            />
            <div ref={formRef} />
            <div
              className={classNames(
                Boolean(choosedResidence)
                  ? "py-8 md:py-16 scale-y-1"
                  : "p-0 h-0 scale-y-0",
                "max-w-4xl w-full flex flex-col transition-[transform_padding] duration-600"
              )}
            >
              <div className="text-accent font-medium text-lg pb-6">
                Вы выбрали:
              </div>
              <div className="flex flex-col md:flex-row">
                <ImageWithLoader
                  className="mx-auto md:mx-0 w-full md:w-52 h-40 rounded shrink-0"
                  src={choosedResidence?.image}
                />
                <div className="mt-6 md:mt-0 min-h-40 pl-0 md:pl-10 flex flex-col justify-start items-start pb-1 max-w-xl">
                  <div className="text-accent text-2xl md:text-3xl font-medium">
                    {choosedResidence?.name[$i18n]}
                  </div>
                  <div
                    className="pt-2 pb-4 text-light text-sm font-medium"
                    dangerouslySetInnerHTML={{
                      __html: choosedResidence?.description[$i18n] ?? "",
                    }}
                  />
                  <div
                    className={classNames(
                      "mt-auto bg-accent text-black rounded-md px-2 py-1 leading-none text-sm font-medium"
                    )}
                  >
                    от{" "}
                    {choosedResidence?.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                </div>
              </div>
              <Lines.HorizontalLine className="md:pt-10 text-accent-dark/50">
                <Lines.Star />
              </Lines.HorizontalLine>
              <div className="grid grid-cols-2 md:grid-rows-[auto_auto_auto_auto_auto_auto] gap-x-6">
                <div className="order-1 pb-3 text-accent font-medium text-lg col-span-2">
                  Даты путешествия
                </div>
                <DatePicker
                  wrapperClassName="order-2 col-span-2 md:col-span-1"
                  selected={fields.dateFrom.value?.toDate()}
                  customInput={
                    <button className="group flex items-center px-5 py-4 h-12 w-full bg-brown-background/10 overflow-hidden">
                      <PlaneDown />
                      <span className="text-sm text-accent pl-2">Заезд</span>
                      <span className="ml-auto text-lg font-normal text-light group-focus:text-accent group-hover:text-accent">
                        {dayjs(fields.dateFrom.value).format("DD MMMM YYYY")}
                      </span>
                      <Calendar className="ml-4 text-light group-focus:text-accent group-hover:text-accent" />
                    </button>
                  }
                  onChange={(value) => fields.dateFrom.onChange(dayjs(value))}
                  portalId="root-portal-1"
                />
                <DatePicker
                  wrapperClassName="order-3 col-span-2 md:col-span-1"
                  selected={fields.dateTo.value?.toDate()}
                  customInput={
                    <button className="mt-2 md:mt-0 group flex items-center px-5 h-12 w-full bg-brown-background/10 overflow-hidden">
                      <PlaneUp />

                      <span className="text-sm text-accent pl-2">Отъезд</span>
                      <span className="ml-auto text-lg font-normal text-light group-focus:text-accent group-hover:text-accent">
                        {dayjs(fields.dateTo.value).format("DD MMMM YYYY")}
                      </span>
                      <Calendar className="ml-4 text-light group-focus:text-accent group-hover:text-accent" />
                    </button>
                  }
                  onChange={(value) => fields.dateTo.onChange(dayjs(value))}
                  portalId="root-portal-2"
                />
                <div className="order-4 mt-6 md:mt-4 cursor-pointer col-span-2 flex items-center">
                  <input
                    onClick={() =>
                      fields.suggestTickets.onChange(
                        !fields.suggestTickets.value
                      )
                    }
                    className="hover:focus:text-black form-check-input checked:bg-black border !border-light text-accent-dark !ring-accent-dark cursor-pointer rounded w-6 h-6"
                    type="checkbox"
                    checked={fields.suggestTickets.value}
                  />
                  <button
                    onClick={() =>
                      fields.suggestTickets.onChange(
                        !fields.suggestTickets.value
                      )
                    }
                    className="pl-3 text-sm font-normal text-light"
                  >
                    Предложить варианты авиабилетов
                  </button>
                </div>
                <div className="order-5 pt-6 md:pt-10 pb-4 text-accent font-medium text-lg col-span-2">
                  Количество гостей
                </div>
                <div className="order-6 col-span-2 md:col-span-1 px-5 bg-brown-background/10 flex items-center h-12">
                  <span className="text-sm text-light">Взрослые</span>
                  <Counter
                    unsigned
                    onChange={fields.adultsCount.onChange}
                    leftButtonClassName="ml-auto"
                    count={fields.adultsCount.value}
                  />
                </div>
                <div className="mt-2 md:mt-0 order-7 col-span-2 md:col-span-1 px-5 bg-brown-background/10 flex items-center h-12">
                  <span className="text-sm text-light">Дети</span>
                  <Counter
                    unsigned
                    onChange={fields.childCount.onChange}
                    leftButtonClassName="ml-auto"
                    count={fields.childCount.value}
                    max={10}
                  />
                </div>
                <div className="col-span-2 md:col-span-1 order-9 md:order-8 flex flex-col">
                  <div className="pt-10 pb-4 text-accent font-medium text-lg col-span-2">
                    Тип питания
                  </div>
                  {foodType.map((type, i) => (
                    <div
                      onClick={() => {
                        fields.foodType.onChange(type.label);
                      }}
                      key={type.label}
                      className={classNames(
                        fields.foodType.value !== type.label
                          ? "group bg-brown-background/10 "
                          : "bg-accent",
                        i && "mt-2",
                        "cursor-pointer px-5 flex justify-between items-center h-12"
                      )}
                    >
                      <span
                        className={classNames(
                          fields.foodType.value !== type.label
                            ? "text-light"
                            : "text-black",
                          "text-lg group-hover:text-accent"
                        )}
                      >
                        {type.label}
                      </span>
                      <span
                        className={classNames(
                          fields.foodType.value !== type.label
                            ? "text-light/50"
                            : "text-black",
                          "text-sm group-hover:text-accent group-hover:opacity-100"
                        )}
                      >
                        {type.description}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className={classNames(
                    fields.childCount.value
                      ? "opacity-100"
                      : "opacity-0 hidden",
                    "md:flex col-span-2 md:col-span-1 order-8 md:order-9 flex-col duration-1000 transition-opacity"
                  )}
                >
                  <div
                    className={classNames(
                      "h-10 border-r border-r-accent/50 mr-20"
                    )}
                  />
                  <div
                    className={classNames(
                      "rounded border border-accent/50 py-4 px-6 flex-col text-light text-lg font-normal"
                    )}
                  >
                    <span>Укажите возраст каждого из детей</span>
                    <hr className="text-accent/10 my-3" />
                    {Array.from({ length: fields.childCount.value }).map(
                      (_, i) => (
                        <div
                          key={i}
                          className={classNames(
                            i && "mt-2",
                            "h-8 flex justify-between items-center"
                          )}
                        >
                          <span className="text-xs font-normal ">
                            <span className="capitalize">
                              {ordinalNumbers[$i18n][i]}
                            </span>{" "}
                            ребенок
                          </span>
                          <input
                            max={18}
                            min={0}
                            defaultValue={0}
                            type="number"
                            className="form-control text-center text-lg bg-light rounded-md font-normal uppercase placeholder-[#C4C4C4] focus:ring-accent/50 focus:border-accent/50 border border-accent/50 text-[#C4C4C4] p-1 h-full w-20 bg-transparent"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="order-9 pt-10 pb-4 text-accent font-medium text-lg col-span-2">
                  Комментарии и пожелания
                </div>
                <textarea
                  placeholder={
                    "Например, пришлите пожалуйста, цены с полупансионом и только с завтраками.\nНапример, только прямые рейсы, бизнес-класс."
                  }
                  className="order-10 form-check-input min-h-[140px] md:min-h-[96px] p-4 col-span-2 form-control text-lg bg-light rounded-md font-normal placeholder-light/25 focus:ring-accent/50 focus:border-accent/50 border border-accent/50 text-[#C4C4C4] w-full bg-transparent"
                />
                <div className="order-11 pt-10 pb-4 text-accent font-medium text-lg col-span-2">
                  Куда вам отправить предложение
                </div>
                <div className="order-12 mb-14 md:mb-20 col-span-2 relative">
                  <input
                    placeholder={"Номер телефона, или Ватсапп, или Телеграмм"}
                    className="form-check-input pr-40 p-4 form-control text-lg bg-light rounded-md font-normal placeholder-light/25 focus:ring-accent/50 focus:border-accent/50 border border-accent/50 text-[#C4C4C4] w-full bg-transparent"
                  />
                  <div className="absolute inset-y-0 right-0 flex">
                    <button className="group border-l border-l-light/10 h-full flex items-center px-3">
                      <FaWhatsapp className="cursor-pointer group-hover:text-[#25D366] group-focus:text-[#25D366] text-accent/25 w-6 h-6" />
                    </button>
                    <button className="group border-l border-l-light/10 h-full flex items-center px-3">
                      <FaTelegramPlane className="cursor-pointer group-hover:text-[#229ED9] group-focus:text-[#229ED9] text-accent/25 w-6 h-6" />
                    </button>
                    <button className="group border-l border-l-light/10 h-full flex items-center px-3">
                      <CgPhone className="cursor-pointer group-focus:text-gray-400 group-hover:text-gray-400 text-accent/25 w-6 h-6" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => navigate(-1)}
                  className="mt-4 md:mt-0 col-span-2 md:col-span-1 order-[14] md:order-[13] transition-colors duration-700 text-2xl font-medium h-16 border border-accent/50 hover:border-light rounded w-full text-accent  hover:bg-black hover:text-light"
                >
                  Назад
                </button>
                <button
                  onClick={() => successModal.events.openModal()}
                  className="col-span-2 md:col-span-1 order-[13] md:order-[14] transition-colors duration-700 text-2xl font-medium h-16 border bg-light rounded w-full text-black hover:border-black hover:text-black hover:bg-accent"
                >
                  Отправить запрос
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
