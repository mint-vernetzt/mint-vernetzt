import { Story, Meta } from "@storybook/react";
import { Link, LinkProps } from "./Link";

export default {
  title: "Components/Link",
} as Meta;

export const Inline: Story<LinkProps> = (args) => {
  const { to } = args;
  return (
    <>
      This one is <Link to={to}>a link</Link>
    </>
  );
};
Inline.args = {
  to: "#",
};
Inline.storyName = "Inline";

export const External: Story<LinkProps> = (args) => {
  const { to } = args;
  return (
    <Link to={to} isExternal>
      External Link
    </Link>
  );
};
External.args = {
  to: "https://mint-vernetzt.de",
};
External.storyName = "External Link";

const Button = (props: any) => {
  const { to, children } = props;

  const handleClick = () => {
    alert(`Link target is ${to}`);
  };

  return (
    <button
      onClick={handleClick}
      className="border border-primary rounded px-2 py-1"
    >
      {children}
    </button>
  );
};
Button.displayName = "Button";

export const CustomComponent: Story<LinkProps> = (args) => {
  const { to } = args;

  return (
    <Link to={to} as={Button}>
      Link as custom button
    </Link>
  );
};
CustomComponent.args = {
  to: "#",
};
