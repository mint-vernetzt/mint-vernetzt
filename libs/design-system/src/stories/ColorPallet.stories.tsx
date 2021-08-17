import { Meta, Story } from "@storybook/react";
import { DOMAttributes } from "react";

enum Colors {
  BeigeOriginal = "Beige Original",
  BeigeOriginal50 = "Beige Original 50%",
  BeigeTest01 = "Beige TEST 01",
  BeigeTest02 = "Beige TEST 02",
  BeigeTest03 = "Beige TEST 03",
  Blue = "Blue",
  Lilac = "Lilac",
  Lilac80 = "Lilac 80%",
  Lilac60 = "Lilac 60%",
  Lilac40 = "Lilac 40%",
  Yellow = "Yellow",
  Yellow80 = "Yellow 80%",
  Yellow60 = "Yellow 60%",
  Yellow40 = "Yellow 40%",
  Green = "Green",
  Green80 = "Green 80%",
  Green60 = "Green 60%",
  Green40 = "Green 40%",
  Salmon = "Salmon",
  Salmon80 = "Salmon 80%",
  Salmon60 = "Salmon 60%",
  Salmon40 = "Salmon 40%",
  White = "White",
}

const ColorMap = {
  [Colors.BeigeOriginal]: "#efe8e6",
  [Colors.BeigeOriginal50]: "#f7f3f2",
  [Colors.BeigeTest01]: "#f2edeb",
  [Colors.BeigeTest02]: "#f4efee",
  [Colors.BeigeTest03]: "#f6f21",
  [Colors.Blue]: "#154194",
  [Colors.Lilac]: "#b16fab",
  [Colors.Lilac80]: "#c18cbc",
  [Colors.Lilac60]: "#d0a9cd",
  [Colors.Lilac40]: "#e0c5dd",
  [Colors.Yellow]: "#fcc433",
  [Colors.Yellow80]: "#fdd05c",
  [Colors.Yellow60]: "#fddc85",
  [Colors.Yellow40]: "#fee7ad",
  [Colors.Green]: "#00a87a",
  [Colors.Green80]: "#33b995",
  [Colors.Green60]: "#66cbaf",
  [Colors.Green40]: "#99dcca",
  [Colors.Salmon]: "#ee7775",
  [Colors.Salmon80]: "#f19291",
  [Colors.Salmon60]: "#f5adac",
  [Colors.Salmon40]: "#f8c9c8",
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

interface CombinationProps {
  backgroundColor: Colors;
  color: Colors;
  fontSize: Number;
  bold?: Boolean;
}

function Combination(props: CombinationProps) {
  const { backgroundColor, color, bold } = props;
  const fontSize = `${props.fontSize}px`;
  return (
    <div
      className={`p-1 ${bold ? "font-bold" : ""}`.trimRight()}
      style={{
        color: ColorMap[color],
        backgroundColor: ColorMap[backgroundColor],
        fontSize,
      }}
    >
      {`${color}, ${backgroundColor}, ${fontSize} ${
        bold ? ", bold" : ""
      }`.trimRight()}
    </div>
  );
}

export const NotViolating = () => {
  return (
    <>
      <Combination
        backgroundColor={Colors.BeigeOriginal}
        color={Colors.Blue}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.BeigeOriginal}
        color={Colors.Lilac}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.BeigeOriginal}
        color={Colors.Lilac}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.BeigeOriginal50}
        color={Colors.Blue}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.BeigeOriginal50}
        color={Colors.Lilac}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.BeigeOriginal50}
        color={Colors.Lilac}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.Blue}
        color={Colors.BeigeOriginal}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.Blue}
        color={Colors.BeigeOriginal50}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.Blue}
        color={Colors.Lilac80}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.Blue}
        color={Colors.Lilac80}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.Blue}
        color={Colors.Yellow}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.Blue}
        color={Colors.Green}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.Blue}
        color={Colors.Green}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.Blue}
        color={Colors.Green60}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.Blue}
        color={Colors.Salmon}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.Blue}
        color={Colors.Salmon}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.Blue}
        color={Colors.Salmon60}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.Lilac}
        color={Colors.BeigeOriginal}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.Lilac}
        color={Colors.BeigeOriginal}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.Lilac}
        color={Colors.BeigeOriginal50}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.Lilac}
        color={Colors.BeigeOriginal50}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.Lilac}
        color={Colors.Yellow40}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.Lilac}
        color={Colors.Yellow40}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.Lilac80}
        color={Colors.Blue}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.Lilac80}
        color={Colors.Blue}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.Lilac60}
        color={Colors.Blue}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.Lilac40}
        color={Colors.Blue}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.Yellow}
        color={Colors.Blue}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.Yellow80}
        color={Colors.Blue}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.Yellow60}
        color={Colors.Blue}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.Yellow40}
        color={Colors.Blue}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.Yellow40}
        color={Colors.Lilac}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.Yellow40}
        color={Colors.Lilac}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.Green}
        color={Colors.Blue}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.Green}
        color={Colors.Blue}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.Green80}
        color={Colors.Blue}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.Green80}
        color={Colors.Blue}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.Green60}
        color={Colors.Blue}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.Salmon}
        color={Colors.Blue}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.Salmon}
        color={Colors.Blue}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.Salmon80}
        color={Colors.Blue}
        fontSize={24}
      />
      <Combination
        backgroundColor={Colors.Salmon80}
        color={Colors.Blue}
        fontSize={20}
        bold
      />
      <Combination
        backgroundColor={Colors.Salmon60}
        color={Colors.Blue}
        fontSize={12}
      />
      <Combination
        backgroundColor={Colors.Salmon40}
        color={Colors.Blue}
        fontSize={12}
      />
    </>
  );
};

NotViolating.parameters = {
  controls: { disable: true },
};
