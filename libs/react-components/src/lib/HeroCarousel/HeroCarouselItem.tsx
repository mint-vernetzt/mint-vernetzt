import * as React from "react";

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
    <div className="hero hero-index flex items-end md:items-top rounded-3xl relative overflow-hidden">
      {image}
      <div className="hero-text absolute top-0 left-0 min-h-3/4 md:min-h-full right-0 py-12 px-4 lg:py-16 md:px-12 lg:px-20">
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

export default HeroCarouselItem;
