import * as React from "react";
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { HeroCarouselItem, HeroCarouselItemProps } from "./HeroCarouselItem";

/* eslint-disable-next-line */
export interface HeroCarouselProps {
  items: HeroCarouselItemProps[];
}

export function HeroCarousel(props: HeroCarouselProps) {
  const { items } = props;
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".next-slide",
          prevEl: ".prev-slide",
        }}
        pagination={{
          clickable: true,
          // el: 'swiper-pagination',
          type: "bullets",
          bulletElement: "span",
          bulletClass: "swiper-pagination-bullet bg-gray-600 opacity-100",
          bulletActiveClass: "swiper-pagination-bullet-active bg-blue-500",
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '" role="button" aria-label="Gehe zu Slide ' +
              (index + 1) +
              '"></span>'
            );
          },
        }}
      >
        {items?.length > 0 && (
          <>
            {items.map((item, index) => (
              <SwiperSlide>
                <HeroCarouselItem
                  headline={item.headline}
                  excerpt={item.excerpt}
                  image={item.image}
                  url={item.url}
                />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>

      <div className="prev-slide h-full absolute left-0.5 sm:left-6 top-0 w-10 lg:w-16 flex items-center z-10 md:pl-2 lg:pl-6 hover:text-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="33"
          viewBox="0 0 18 33"
        >
          <path d="M17.143.86a1.214 1.214 0 0 1 0 1.718L3.433 16.284l13.71 13.708a1.216 1.216 0 1 1-1.719 1.72L.857 17.142a1.214 1.214 0 0 1 0-1.719L15.424.857a1.214 1.214 0 0 1 1.72 0v.002Z" />
        </svg>
      </div>
      <div className="next-slide h-full absolute right-0.5 sm:right-6 top-0 w-10 lg:w-16 flex justify-end items-center z-10 md:pr-2 lg:pr-6 hover:text-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="33"
          viewBox="0 0 18 33"
        >
          <path d="M.857 31.707a1.214 1.214 0 0 1 0-1.72l13.71-13.705L.857 2.574A1.216 1.216 0 1 1 2.576.854l14.567 14.569a1.214 1.214 0 0 1 0 1.719L2.576 31.709a1.214 1.214 0 0 1-1.72 0v-.002Z" />
        </svg>
      </div>
    </>
  );
}

export default HeroCarousel;
