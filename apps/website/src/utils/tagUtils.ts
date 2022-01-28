import { TagProps } from "@mint-vernetzt/react-components";

export function getAllowedTags(tags: TagProps[][]): TagProps[] {
  return [
    ...new Map(
      tags
        .reduce((acc, cur) => acc.concat(cur))
        .map((item) => [item.slug, item])
    ).values(),
  ];
}
