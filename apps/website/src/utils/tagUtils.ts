import { ChipProps } from "@mint-vernetzt/react-components";

export function getUniqueTags(tags: ChipProps[][]): ChipProps[] {
  return [
    ...new Map(
      tags
        .reduce((acc, cur) => acc.concat(cur))
        .map((item) => [item.slug, item])
    ).values(),
  ];
}
