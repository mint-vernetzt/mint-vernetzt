import * as React from "react";
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

/* eslint-disable-next-line */
export interface HeroCarouselItemProps {
  headline: React.ReactNode;
  excerpt: React.ReactNode;
  image: React.ReactNode;
  url: React.ReactNode;
}

export function HeroCarouselItem(props: HeroCarouselItemProps) {
  const { headline, excerpt, image, url } = props;

  return (
    <div className="hero hero-index flex items-end rounded-3xl relative overflow-hidden">
      {image}
      <div className="hero-text absolute top-0 left-0 min-h-3/4 md:min-h-full right-0 py-12 px-4 lg:py-16 md:px-12 lg:px-20 md:flex md:items-center">
        <div className="md:w-3/4 xl:w-2/3">
          <h1 className="text-5xl lg:text-7xl leading-none text-blue-500 mb-2">
            {headline}
          </h1>
          <p className="font-bold mb-4 lg:text-2xl lg:leading-snug">
            {excerpt}
          </p>
          <p>{url}</p>
        </div>
      </div>
    </div>
  );
}

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
        autoplay={{ delay: 5000 }}
        loop={true}
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
              <SwiperSlide key={`slide-${index}`}>
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

      <div className="prev-slide h-full absolute left-0.5 md:left-6 top-0 w-10 lg:w-16 flex items-center z-10 md:pl-2 lg:pl-6 hover:text-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="33"
          viewBox="0 0 18 33"
        >
          <path d="M17.143.86a1.214 1.214 0 0 1 0 1.718L3.433 16.284l13.71 13.708a1.216 1.216 0 1 1-1.719 1.72L.857 17.142a1.214 1.214 0 0 1 0-1.719L15.424.857a1.214 1.214 0 0 1 1.72 0v.002Z" />
        </svg>
      </div>
      <div className="next-slide h-full absolute right-0.5 md:right-6 top-0 w-10 lg:w-16 flex justify-end items-center z-10 md:pr-2 lg:pr-6 hover:text-blue-400">
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
