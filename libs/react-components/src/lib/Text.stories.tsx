import { Meta, Story } from "@storybook/react";
import { Text, TextProps, TextKinds, TextColors } from "./Text";

export default {
  component: Text,
  title: "react components/Text",
} as Meta;

export const Playground: Story<TextProps> = (args) => <Text {...args} />;

const defaultText =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n,./:()!?#@&0123456789";

Playground.args = {
  children: defaultText,
  kind: TextKinds.H1,
};

export const Variants: Story = () => {
  return (
    <>
      <Text kind={TextKinds.H1}>Headline 1</Text>
      <Text kind={TextKinds.H2}>Headline 2</Text>
      <Text kind={TextKinds.H3}>Headline 3</Text>
      <Text kind={TextKinds.H4}>Headline 4</Text>
      <Text kind={TextKinds.H5}>Headline 5</Text>
      <Text kind={TextKinds.H6}>Headline 6</Text>
      <Text kind={TextKinds.P}>Paragraph</Text>
      <Text kind={TextKinds.H1} color={TextColors.Lilac}>
        Headline 1
      </Text>
      <Text kind={TextKinds.H2} color={TextColors.Lilac}>
        Headline 2
      </Text>
      <Text kind={TextKinds.H3} color={TextColors.Lilac}>
        Headline 3
      </Text>
      <Text kind={TextKinds.H4} color={TextColors.Lilac}>
        Headline 4
      </Text>
      <Text kind={TextKinds.H5} color={TextColors.Lilac}>
        Headline 5
      </Text>
      <Text kind={TextKinds.H6} color={TextColors.Lilac}>
        Headline 6
      </Text>
      <Text kind={TextKinds.P} color={TextColors.Lilac}>
        Paragraph
      </Text>
      <Text kind={TextKinds.H1} color={TextColors.Beige}>
        Headline 1
      </Text>
      <Text kind={TextKinds.H2} color={TextColors.Beige}>
        Headline 2
      </Text>
      <Text kind={TextKinds.H3} color={TextColors.Beige}>
        Headline 3
      </Text>
      <Text kind={TextKinds.H4} color={TextColors.Beige}>
        Headline 4
      </Text>
      <Text kind={TextKinds.H5} color={TextColors.Beige}>
        Headline 5
      </Text>
      <Text kind={TextKinds.H6} color={TextColors.Beige}>
        Headline 6
      </Text>
      <Text kind={TextKinds.P} color={TextColors.Beige}>
        Paragraph
      </Text>
    </>
  );
};

Variants.parameters = {
  controls: { disable: true },
};
