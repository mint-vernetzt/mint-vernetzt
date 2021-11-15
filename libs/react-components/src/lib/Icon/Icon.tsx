import React from "react";

export interface IconProps {
  type: IconType;
  width?: string;
  height?: string;
}

export enum IconType {
  Flag = "Flag",
  Gem = "Gem",
  LightBulb = "LightBulb",
  Magic = "Magic",
}

const Paths = {
  Flag: {
    d: "M12.778,0.085 C12.9165502,0.17767976 12.9998028,0.333309691 13,0.5 L13,8 C13,8.20429019 12.8756288,8.38800405 12.686,8.464 L12.5,8 L12.686,8.464 L12.683,8.465 L12.677,8.468 L12.654,8.477 C12.5225296,8.52925472 12.390177,8.579262 12.257,8.627 C11.993,8.722 11.626,8.85 11.21,8.977 C10.394,9.229 9.331,9.5 8.5,9.5 C7.653,9.5 6.952,9.22 6.342,8.975 L6.314,8.965 C5.68,8.71 5.14,8.5 4.5,8.5 C3.8,8.5 2.862,8.73 2.063,8.977 C1.70525488,9.08849386 1.35077623,9.21021043 1,9.342 L1,15.5 C1,15.7761424 0.776142375,16 0.5,16 C0.223857625,16 8.8817842e-16,15.7761424 8.8817842e-16,15.5 L8.8817842e-16,0.5 C8.8817842e-16,0.223857625 0.223857625,0 0.5,0 C0.776142375,0 1,0.223857625 1,0.5 L1,0.782 C1.226,0.703 1.496,0.612 1.79,0.522 C2.606,0.272 3.67,0 4.5,0 C5.34,0 6.024,0.277 6.621,0.519 L6.664,0.537 C7.286,0.788 7.828,1 8.5,1 C9.2,1 10.138,0.77 10.937,0.523 C11.3923126,0.380812212 11.8422793,0.222039685 12.286,0.047 L12.305,0.04 L12.309,0.038 L12.31,0.038 M12,1.221 C11.78,1.299 11.52,1.388 11.234,1.476 C10.424,1.728 9.362,1.999 8.5,1.999 C7.614,1.999 6.908,1.713 6.297,1.465 L6.289,1.462 C5.662,1.21 5.139,1 4.5,1 C3.831,1 2.894,1.229 2.085,1.478 C1.72010805,1.59058256 1.35831054,1.71296015 1,1.845 L1,8.278 C1.22,8.2 1.48,8.111 1.766,8.023 C2.576,7.77 3.638,7.5 4.5,7.5 C5.347,7.5 6.048,7.78 6.658,8.025 L6.686,8.035 C7.32,8.29 7.86,8.5 8.5,8.5 C9.168,8.5 10.106,8.271 10.915,8.022 C11.2798885,7.9094069 11.6416858,7.7870294 12,7.655 L12,1.222 L12,1.221 Z",
    transform: "translate(10 8)",
  },
  Gem: {
    d: "M3.1,0.2 C3.19442719,0.0740970787 3.34262135,0 3.5,0 L12.5,0 C12.6573787,0 12.8055728,0.0740970787 12.9,0.2 L15.876,4.174 C16.025,4.359 16.032,4.624 15.886,4.818 L8.4,14.8 C8.30557281,14.9259029 8.15737865,15 8,15 C7.84262135,15 7.69442719,14.9259029 7.6,14.8 L0.1,4.8 C-0.0333333333,4.62222222 -0.0333333333,4.37777778 0.1,4.2 L3.1,0.2 Z M14.486,3.985 L12.68,1.575 L11.904,3.988 L14.486,3.985 L14.486,3.985 Z M10.853,3.989 L11.814,1 L4.186,1 L5.149,3.995 L10.853,3.989 L10.853,3.989 Z M5.47,4.995 L8,12.866 L10.532,4.99 L5.47,4.995 Z M4.099,3.996 L3.319,1.574 L1.501,3.999 L4.099,3.996 Z M1.499,5 L6.612,11.817 L4.42,4.997 L1.5,5 L1.499,5 Z M9.388,11.817 L14.511,4.987 L11.583,4.989 L9.388,11.817 L9.388,11.817 Z",
    transform: "translate(8 9)",
  },
  LightBulb: {
    d: "M3.62164371e-06,6.00074089 C3.62164371e-06,3.2731446 1.83962054,0.88870705 4.47800104,0.196803965 C7.11638154,-0.495099121 9.88946285,0.679658144 11.2279321,3.05626954 C12.5664013,5.43288093 12.1334162,8.41324307 10.1740073,10.3107409 C9.97100726,10.5067409 9.81500726,10.7107409 9.72100726,10.9297409 L8.95900726,12.6987409 C8.87998262,12.8819844 8.69956444,13.0006909 8.50000362,13.0007409 C8.77614963,13.0007409 9.00000362,13.2245985 9.00000362,13.5007409 C9.00000362,13.7768833 8.77614963,14.0007409 8.50000362,14.0007409 C8.77614963,14.0007409 9.00000362,14.2245985 9.00000362,14.5007409 C9.00000362,14.7768833 8.77614963,15.0007409 8.50000362,15.0007409 L8.27600726,15.4477409 C8.10674372,15.7864703 7.76067297,16.0005387 7.38200726,16.0007409 L4.61800726,16.0007409 C4.23934155,16.0005387 3.8932708,15.7864703 3.72400726,15.4477409 L3.50000362,15.0007409 C3.22386488,15.0007409 3.00000362,14.7768833 3.00000362,14.5007409 C3.00000362,14.2245985 3.22386488,14.0007409 3.50000362,14.0007409 C3.22386488,14.0007409 3.00000362,13.7768833 3.00000362,13.5007409 C3.00000362,13.2245985 3.22386488,13.0007409 3.50000362,13.0007409 C3.30008695,13.0010905 3.11917552,12.8823182 3.04000726,12.6987409 L2.27900726,10.9287409 C2.17004652,10.6949972 2.01611749,10.4850013 1.82600726,10.3107409 C0.657380092,9.18160155 -0.00178279964,7.6257461 3.62164371e-06,6.00074089 Z M6.00000726,1.00074055 C3.96287991,1.00039505 2.12922379,2.23597072 1.36466558,4.12418116 C0.60010737,6.01239161 1.05753492,8.17565351 2.52100726,9.59274089 C2.78400726,9.84674089 3.03500726,10.1567409 3.19700726,10.5337409 L3.83000726,12.0007405 L8.17200726,12.0007405 L8.80400726,10.5337409 C8.96600726,10.1567409 9.21700726,9.84674089 9.48000726,9.59274089 C10.9436107,8.17552677 11.400977,6.01202051 10.6361616,4.1237175 C9.87134609,2.2354145 8.03731685,0.999987448 6.00000726,1.00074055 Z",
    transform: "translate(10 8)",
  },
  Magic: {
    d: "M8.90693382,2.30466379 C8.90693382,2.5779207 9.12846693,2.79943919 9.40174186,2.79943919 C9.67501679,2.79943919 9.8965499,2.5779207 9.8965499,2.30466379 L9.8965499,0.494775395 C9.8965499,0.22151849 9.67501679,0 9.40174186,0 C9.12846693,0 8.90693382,0.22151849 8.90693382,0.494775395 L8.90693382,2.30466379 L8.90693382,2.30466379 Z M13.3602062,2.33929807 C13.5477247,2.14515865 13.5450429,1.83656432 13.3541787,1.64571273 C13.1633145,1.45486114 12.8546998,1.45217954 12.6605476,1.63968566 L11.380974,2.91917483 C11.2523454,3.0434003 11.2007587,3.22735949 11.2460413,3.40034753 C11.2913238,3.57333557 11.4264287,3.7084315 11.5994281,3.75371108 C11.7724276,3.79899067 11.9563989,3.74740736 12.0806326,3.61878724 L13.3602062,2.33929807 L13.3602062,2.33929807 Z M6.72285114,3.61878724 C6.84708481,3.74740736 7.03105613,3.79899067 7.20405559,3.75371108 C7.37705504,3.7084315 7.51215988,3.57333557 7.55744245,3.40034753 C7.60272503,3.22735949 7.55113832,3.0434003 7.42250971,2.91917483 L6.14293612,1.63968566 C5.9487839,1.45217954 5.64016921,1.45486114 5.44930503,1.64571273 C5.25844084,1.83656432 5.25575906,2.14515865 5.44327756,2.33929807 L6.72285114,3.61878724 Z M6.10829956,6.09266422 C6.38157449,6.09266422 6.6031076,5.87114573 6.6031076,5.59788882 C6.6031076,5.32463192 6.38157449,5.10311343 6.10829956,5.10311343 L4.29829176,5.10311343 C4.02501683,5.10311343 3.80348372,5.32463192 3.80348372,5.59788882 C3.80348372,5.87114573 4.02501683,6.09266422 4.29829176,6.09266422 L6.10829956,6.09266422 L6.10829956,6.09266422 Z M14.505192,6.09266422 C14.7784669,6.09266422 15,5.87114573 15,5.59788882 C15,5.32463192 14.7784669,5.10311343 14.505192,5.10311343 L12.6951842,5.10311343 C12.4219092,5.10311343 12.2003761,5.32463192 12.2003761,5.59788882 C12.2003761,5.87114573 12.4219092,6.09266422 12.6951842,6.09266422 L14.505192,6.09266422 Z M12.6605476,9.55609198 C12.7847813,9.68471211 12.9687526,9.73629542 13.141752,9.69101583 C13.3147515,9.64573624 13.4498563,9.51064031 13.4951389,9.33765227 C13.5404215,9.16466423 13.4888348,8.98070505 13.3602062,8.85647957 L12.0806326,7.5769904 C11.9563989,7.44837028 11.7724276,7.39678697 11.5994281,7.44206656 C11.4264287,7.48734615 11.2913238,7.62244208 11.2460413,7.79543012 C11.2007587,7.96841816 11.2523454,8.15237734 11.380974,8.27660281 L12.6605476,9.55609198 Z M8.90693382,10.7010022 C8.90693382,10.9742592 9.12846693,11.1957776 9.40174186,11.1957776 C9.67501679,11.1957776 9.8965499,10.9742592 9.8965499,10.7010022 L9.8965499,8.89111385 C9.8965499,8.61785695 9.67501679,8.39633846 9.40174186,8.39633846 C9.12846693,8.39633846 8.90693382,8.61785695 8.90693382,8.89111385 L8.90693382,10.7010022 Z M10.741682,5.65726187 C10.9341875,5.464166 10.9341875,5.15173488 10.741682,4.95863901 L10.0410338,4.25803705 C9.84781138,4.06488567 9.53459775,4.06488567 9.34137528,4.25803705 L8.06180169,5.53851577 C7.86863757,5.73172549 7.86863757,6.04491846 8.06180169,6.23812818 L8.76244988,6.93873014 C8.95567234,7.13188152 9.26888598,7.13188152 9.46210844,6.93873014 L10.741682,5.65924097 L10.741682,5.65726187 Z M7.7728338,8.62591424 C7.96533931,8.43281837 7.96533931,8.12038725 7.7728338,7.92729138 L7.07218562,7.22668942 C6.87896315,7.03353805 6.56574952,7.03353805 6.37252705,7.22668942 L0.144873091,13.4549221 C-0.0482910302,13.6481318 -0.0482910302,13.9613248 0.144873091,14.1545345 L0.845521272,14.8551365 C1.03874374,15.0482878 1.35195737,15.0482878 1.54517984,14.8551365 L7.7728338,8.62591424 L7.7728338,8.62591424 Z",
    transform: "translate(9 9)",
  },
};

export function Icon(props: IconProps) {
  const { type, width = "1rem", height = "1rem" } = props;
  console.log(type);
  return (
    <svg
      className=""
      style={{}}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill="#000000" {...Paths[type]} />
    </svg>
  );
}

export default Icon;
