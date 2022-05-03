import classNames from "classnames";
import { useStore } from "effector-react";
import { $hostel } from "entities/hostels/models";
import { useTranslation } from "entities/language/lib";
import { FaqBlock } from "pages/MainPage/components/FaqBlock";
import { useState } from "react";
import { ImageWithStarFrame } from "shared/components/ImageWithStarFrame";
import { Lines } from "shared/components/Lines";

import { Swiper, SwiperSlide } from "swiper/react";

export const HostelPage = () => {
  const hostel = useStore($hostel);

  // const { id } = useParams();
  const { $t, $i18n } = useTranslation();

  if (!hostel) return null;

  return (
    <div
      className={classNames(
        "background flex justify-center bg-black-background px-8"
      )}
    >
      <div className="border-accent/25 border-x flex flex-col items-center mr-28">
        <ImageWithStarFrame src={hostel.image} />
        <div className="p-10 w-full">
          <div className="w-full text-accent text-lg font-light">
            {hostel.place[$i18n]}
          </div>
          <div className="flex w-full text-accent font-medium text-5xl justify-between items-center">
            <span className="basis-0 flex-grow pr-8">{hostel.name[$i18n]}</span>
            <FaqBlock elementClassName="-mr-[5.5rem]" />
          </div>
          <div className="pt-6 max-w-3xl text-lg text-light">
            {hostel.description[$i18n]}
          </div>
          <Lines.HorizontalLine className="my-6 text-accent/25">
            <Lines.Star />
          </Lines.HorizontalLine>
          <div className="grid grid-cols-4 gap-y-6">
            <div className="col-span-1 text-accent text-lg font-medium">
              {$t("pages.hostel.restuartants")}
            </div>
            <div
              className="col-span-3 text-light text-sm flex-grow"
              dangerouslySetInnerHTML={{
                __html: hostel.content.restorans[$i18n],
              }}
            />
            <div className="col-span-1 text-accent text-lg font-medium">
              {$t("pages.hostel.health")}
            </div>
            <div
              className="col-span-3 text-light text-sm flex-grow"
              dangerouslySetInnerHTML={{
                __html: hostel.content.health[$i18n],
              }}
            />
            <div className="col-span-1 text-accent text-lg font-medium">
              {$t("pages.hostel.children")}
            </div>
            <div
              className="col-span-3 text-light text-sm flex-grow"
              dangerouslySetInnerHTML={{
                __html: hostel.content.child[$i18n],
              }}
            />
          </div>
          <Lines.HorizontalLine className="my-6 text-accent/25">
            <Lines.Star />
          </Lines.HorizontalLine>
          <div className="text-accent text-lg font-medium pb-6">
            {$t("pages.hostel.galery")}
          </div>
          <Swiper slidesPerView={3.4} className="h-40" spaceBetween={20}>
            {hostel.gallery.map((image, idx) => (
              <SwiperSlide className="rounded overflow-hidden" key={idx}>
                <img className="w-full h-full object-cover" src={image} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Lines.HorizontalLine className="my-6 text-accent/25">
            <Lines.Star />
          </Lines.HorizontalLine>
        </div>
      </div>
    </div>
  );
};
