export type PaktDataByCategory = {
  [key: string]: {
    name: string;
    slug: string;
  }[];
};

export type PaktDataEdges = {
  node: {
    frontmatter: {
      slug: string;
      name: string;
      category: string;
    };
  };
}[];

export const getPaktDataByCategory = (
  paktData: PaktDataEdges
): PaktDataByCategory => {
  return paktData.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.node.frontmatter.category]: [
        ...(acc[cur.node.frontmatter.category] || []),
        { ...cur.node.frontmatter },
      ],
    }),
    {}
  );
};
