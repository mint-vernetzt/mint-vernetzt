import {
  NewsFeedItemProps,
  UserCardProps,
  OrganizationBoxProps,
  EventNavigationItemProps,
  EventFeedItemProps,
  ChipProps,
} from "@mint-vernetzt/react-components";
import { Link } from "gatsby";

import Img from "gatsby-image";

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
    const tags: ChipProps[] = newsItem.tags.nodes.map((tag) => {
      return { title: tag.name, slug: tag.slug };
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
      tags,
      image,
    };
  });
};

export const getParentEventItems = (
  graphqlResult: GatsbyTypes.EventFeedQuery["events"]["nodes"]
): EventFeedItemProps[] => {
  const events = graphqlResult.map((event) => ({
    headline: event.title,
    body: event.excerpt.replace(/<[^>]*>/g, ""),
    slug: `/event/${event.slug}`,
    date: new Date(event.eventInformations.startDate),
    category:
      event.eventCategories.nodes.map((category) => category.name)[0] ?? null,
    tags:
      event.tags.nodes.map((tag) => ({ slug: tag.slug, title: tag.name })) ??
      [],
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

export const getTeasersData = (data: GatsbyTypes.LandingPageQuery) => {
  return data.teasers.nodes.map((teaser) => {
    let url: string;
    if (teaser.teaserInformations.post === null) {
      url = teaser.teaserInformations.pagePath;
    } else {
      let prefix =
        teaser.teaserInformations.post[0]?.__typename === "WpNewsItem"
          ? "/news"
          : "/event";
      url = `${prefix}/${teaser.teaserInformations.post[0].slug}`;
    }

    let image;
    if (teaser.teaserInformations.image !== null) {
      image = teaser.teaserInformations.image.localFile.childImageSharp.fluid;
    } else {
      image =
        teaser.teaserInformations.post[0].featuredImage.node.localFile
          .childImageSharp.fluid;
    }

    return {
      image: <Img fluid={image} className="w-full h-3/4 md:h-full" />,
      headline: teaser.title,
      excerpt: teaser.excerpt.replace(/<[^>]*>/g, ""),
      url: (
        <Link to={url} className="btn-primary">
          {teaser.teaserInformations.buttonText || "Erfahre mehr"}
        </Link>
      ),
    };
  });
};
