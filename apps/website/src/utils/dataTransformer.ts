import { UserCardProps } from "./../../../../libs/react-components/src/lib/UserCard/UserCard";

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
    const organisation = user.contactInformations.organization[0];

    return {
      name: fullName,
      position: user.contactInformations.position,
      avatar: {
        src: user.featuredImage?.node.localFile.childImageSharp.fluid.src ?? "",
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
