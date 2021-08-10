import { Meta, Story } from "@storybook/react";
import { DOMAttributes } from "react";

enum Colors {
  BeigeOriginal = "Beige Original",
  BeigeTest01 = "Beige TEST 01",
  BeigeTest02 = "Beige TEST 02",
  BeigeTest03 = "Beige TEST 03",
  Blue = "Blue",
  Lilac = "Lilac",
  Yellow = "Yellow",
  Green = "Green",
  Salmon = "Salmon",
  White = "White",
}

const ColorMap = {
  [Colors.BeigeOriginal]: "#efe8e6",
  [Colors.BeigeTest01]: "#f2edeb",
  [Colors.BeigeTest02]: "#f4efee",
  [Colors.BeigeTest03]: "#f6f21",
  [Colors.Blue]: "#154194",
  [Colors.Lilac]: "#b16fab",
  [Colors.Yellow]: "#fcc433",
  [Colors.Green]: "#00a87a",
  [Colors.Salmon]: "#ee7775",
  [Colors.White]: "#ffffff",
};

export interface ColorPalletProps {
  backgroundColor: Colors;
  customBackgroundColor?: String;
  backgroundOpacity?: Number;
  fontSize: Number;
  customColor?: String;
  color: Colors;
  text: String;
  bold: Boolean;
  italic: Boolean;
}

const defaultText =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n,./:()!?#@&0123456789";

function ColorPallet(props: ColorPalletProps) {
  const {
    fontSize = 12,
    text,
    customColor,
    customBackgroundColor,
    bold,
    italic,
  } = props;
  const backgroundColor = (customBackgroundColor ||
    ColorMap[props.backgroundColor]) as "'currentcolor'";
  const color = (customColor || ColorMap[props.color]) as "'currentcolor";

  let classes = "w-full p-2 break-words";

  if (bold) {
    classes = `${classes} font-bold`;
  }
  if (italic) {
    classes = `${classes} italic`;
  }

  return (
    <>
      <div className="p-2 bg-gray-500 text-white text-right">
        font size: <i>{fontSize}rem</i>
      </div>
      <div
        className={classes}
        style={{
          backgroundColor,
          color,
        }}
      >
        <p className="leading-none" style={{ fontSize: `${fontSize}rem` }}>
          {text}
        </p>
      </div>
    </>
  );
}

export default {
  component: ColorPallet,
  title: "Style Guide/Color Pallet",
  parameters: {
    docs: {
      page: null,
    },
  },
  argTypes: {
    backgroundColor: {
      control: {
        options: Colors,
        type: "select",
      },
    },
    customBackgroundColor: {
      control: {
        type: "color",
      },
    },
    color: {
      control: {
        options: Colors,
        type: "select",
      },
    },
    customColor: {
      control: {
        type: "color",
      },
    },
    fontSize: {
      control: {
        type: "range",
        min: 0.5,
        step: 0.125,
        max: 8,
      },
    },
    text: {
      control: {
        type: "text",
      },
    },
  },
} as Meta;

export const Playground: Story<ColorPalletProps> = (args) => {
  return <ColorPallet {...args} />;
};

Playground.args = {
  backgroundColor: Colors.BeigeOriginal,
  color: Colors.Blue,
  fontSize: 1,
  text: defaultText,
  bold: false,
  italic: false,
};
