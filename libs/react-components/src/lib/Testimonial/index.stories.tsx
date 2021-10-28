import { Meta, Story } from "@storybook/react";
import faker from "faker";
import { Testimonial, TestimonialProps } from "./Testimonial";

export default {
  component: Testimonial,
  title: "Components/Testimonial",
} as Meta;

export const Component: Story<TestimonialProps> = (args) => (
  <Testimonial {...args} />
);
Component.storyName = "component";
Component.args = {
  name: `${faker.name.firstName(0)} ${faker.name.lastName()}`,
  jobTitle: faker.name.jobTitle(),
  description: faker.lorem.paragraph(),
};
