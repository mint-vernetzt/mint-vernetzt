export enum TextKinds {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
}

export enum TextColors {
  Beige = "beige",
  Blue = "blue",
  Lilac = "lilac",
}

export interface TextProps {
  kind?: TextKinds;
  color?: TextColors;
  children: React.ReactNode;
}

export function Text(props: TextProps) {
  const { kind = TextKinds.P, color = TextColors.Blue, children = "" } = props;
  const KindTag = kind as keyof JSX.IntrinsicElements;

  return <KindTag className={`text-${color}`}>{children}</KindTag>;
}

export default Text;
