import { Meta, Story } from "@storybook/react";
import faker from "faker";

// Import Swiper styles
import { HeroCarousel, HeroCarouselProps } from "./HeroCarousel";

//import { Testimonial, TestimonialProps } from "./Testimonial";

export default {
  component: HeroCarousel,
  title: "Components/HeroCarousel",
} as Meta;

export const HeroCarouselStory: Story<HeroCarouselProps> = (args) => (
  <HeroCarousel {...args} />
);
HeroCarouselStory.storyName = "component";
HeroCarouselStory.args = {
  items: Array(5)
    .fill(null)
    .map((item, index) => ({
      headline: faker.lorem.words(),
      excerpt: faker.lorem.words(),
      image: faker.image.image(),
      url: `https://some-url-${index}.test/`,
    })),
};
