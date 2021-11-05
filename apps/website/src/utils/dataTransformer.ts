import {
  NewsFeedItemProps,
  TagProps,
  UserCardProps,
} from "@mint-vernetzt/react-components";

export type PaktDataByCategory = {
  [key: string]: {
    name: string;
    slug: string;
    logo: any;
  }[];
};

export const getPaktDataByCategory = (
  paktData: GatsbyTypes.ProjectPageQuery["paktData"]["edges"]
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

export const getUserCardsProps = (
  usersData: GatsbyTypes.ProjectPageQuery["usersData"]
): UserCardProps[] => {
  return usersData.nodes.map((user) => {
    const fullName = `${user.contactInformations.firstName} ${user.contactInformations.lastName}`;
    const organisation = user.contactInformations.organization[0] ?? null;

    return {
      name: fullName,
      position: user.contactInformations.position,
      avatar: {
        src:
          user.contactInformations.photo.localFile.childImageSharp.fluid.src ??
          "",
        alt: fullName,
      },
      organizationUrl: organisation.organizationInformations.url,
      organizationLogo: {
        src: organisation.organizationInformations.logo.localFile
          .childImageSharp.fluid.src,
        alt: organisation.title,
      },
    };
  });
};

export const getNewsItemsForLandingPage = (
  newsItems: GatsbyTypes.LandingPageQuery["newsItems"]
): NewsFeedItemProps[] => {
  return newsItems.nodes.map((newsItem) => {
    const tagsProps: TagProps[] = newsItem.tags.nodes.map((tag) => {
      return { title: tag.name };
    });
    return {
      headline: newsItem.title,
      body: newsItem.excerpt.replace(/<[^>]*>/g, ""),
      date: new Date(newsItem.date),
      slug: `/news/${newsItem.slug}`,
      tagsProps,
    };
  });
};
