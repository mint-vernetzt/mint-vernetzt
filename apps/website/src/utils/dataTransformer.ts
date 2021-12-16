import {
  NewsFeedItemProps,
  TagProps,
  UserCardProps,
  OrganizationBoxProps,
  EventNavigationItemProps,
  EventFeedItemProps,
} from "@mint-vernetzt/react-components";

export type PaktDataByCategory = {
  [key: string]: {
    name: string;
    slug: string;
    logo: any;
  }[];
};

export const getPaktDataByCategory = (
  paktData: GatsbyTypes.AboutPageQuery["paktData"]["edges"]
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
  usersData: GatsbyTypes.AboutPageQuery["usersData"]
): UserCardProps[] => {
  return usersData.nodes.map((user) => {
    const fullName =
      user.contactInformations.title !== null
        ? `${user.contactInformations.title} ${user.contactInformations.firstName} ${user.contactInformations.lastName}`
        : `${user.contactInformations.firstName} ${user.contactInformations.lastName}`;
    const organisation = user.contactInformations.organization[0] ?? null;

    return {
      name: fullName,
      email: user.contactInformations.email,
      position: user.contactInformations.position,
      avatar: {
        src:
          user.contactInformations.photo.localFile.childImageSharp.fluid.src ??
          "",
        alt: fullName,
      },
      organizationUrl: organisation.organizationInformations.url,
      organizationLogo: {
        src: organisation.organizationInformations.logo.localFile.publicURL,
        alt: organisation.title,
      },
    };
  });
};

export const getNewsItems = (
  newsItems:
    | GatsbyTypes.LandingPageQuery["newsItems"]
    | GatsbyTypes.NewsFeedQuery["allItems"]
): NewsFeedItemProps[] => {
  return newsItems.nodes.map((newsItem) => {
    const tagsProps: TagProps[] = newsItem.tags.nodes.map((tag) => {
      return { title: tag.name };
    });

    let image;
    if (
      newsItem.featuredImage !== undefined &&
      newsItem.featuredImage !== null
    ) {
      image = {
        src: newsItem.featuredImage.node.localFile.childImageSharp.fluid.src,
        alt: newsItem.featuredImage.node.altText,
      };
    }
    return {
      headline: newsItem.title,
      body: newsItem.excerpt.replace(/<[^>]*>/g, ""),
      date: new Date(newsItem.date),
      slug: `/news/${newsItem.slug}`,
      tagsProps,
      image,
    };
  });
};

export const getParentEventItems = (
  graphqlResult: GatsbyTypes.EventFeedQuery["events"]
): EventFeedItemProps[] => {
  const events = graphqlResult.nodes.map((event) => ({
    headline: event.title,
    body: event.excerpt.replace(/<[^>]*>/g, ""),
    slug: `/event/${event.slug}`,
    date: new Date(event.eventInformations.startDate),
    category:
      event.eventCategories.nodes.map((category) => category.name)[0] ?? null,
    tags: event.tags.nodes.map((tag) => tag.name) ?? [],
  }));
  return events;
};

export const getOrganizationsData = (
  organisations: GatsbyTypes.LandingPageQuery["organizationsData"]
): OrganizationBoxProps[] => {
  return organisations.nodes.map((organisation) => ({
    name: organisation.organizationInformations.name,
    description: organisation.organizationInformations.description,
    organizationUrl: organisation.organizationInformations.url,
    organizationLogo: {
      src: organisation.organizationInformations.logo.localFile.publicURL,
      alt: organisation.organizationInformations.logo.altText,
    },
  }));
};

export const sortRelatedEvents = (events: EventNavigationItemProps[]) => {
  return events.sort((a, b) => {
    if (a.date < b.date) return -1;
    if (a.date > b.date) return 1;

    return 0;
  });
};

const TIME_PATTERN = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/;
export const createDateTimeFrom = (date: string, time: string) => {
  return TIME_PATTERN.test(time) ? new Date(`${date}T${time}`) : new Date(date);
};

export const getRelatedEvents = (
  data: GatsbyTypes.EventQuery
): EventNavigationItemProps[] => {
  let relatedEvents = [];

  if (data.event.allChildren.nodes.length > 0) {
    relatedEvents = data.event.allChildren.nodes.map((item) => ({
      headline: item.title,
      date: createDateTimeFrom(
        item.eventInformations.startDate,
        item.eventInformations.startTime
      ),
      url: `/event/${item.slug}`,
    }));
  }

  if (data.event.allSiblings?.node?.wpChildren?.nodes?.length) {
    relatedEvents = data.event.allSiblings.node.wpChildren.nodes.map(
      (item) => ({
        headline: item.title,
        date: createDateTimeFrom(
          item.eventInformations.startDate,
          item.eventInformations.startTime
        ),
        url: `/event/${item.slug}`,
      })
    );
  }

  return sortRelatedEvents(relatedEvents);
};
