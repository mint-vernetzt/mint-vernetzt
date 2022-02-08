import {
  formatDate,
  NewsFeedItemProps,
  OrganizationBoxProps,
} from "@mint-vernetzt/react-components";

import faker from "faker";

import {
  getNewsItems,
  getOrganizationsData,
  getPaktDataByCategory,
  getUserCardsProps,
  getParentEventItems,
  getRelatedEvents,
  createDateTimeFrom,
} from "./dataTransformer";

describe("getPaktDataByCategory", () => {
  const edges: GatsbyTypes.AboutPageQuery["paktData"]["edges"] = [
    {
      node: {
        frontmatter: {
          slug: "slug1",
          name: "name1",
          category: "category1",
        },
      },
    },
    {
      node: {
        frontmatter: {
          slug: "slug2",
          name: "name2",
          category: "category1",
        },
      },
    },
    {
      node: {
        frontmatter: {
          slug: "slug3",
          name: "name3",
          category: "category2",
        },
      },
    },
  ];

  const packByCategory = getPaktDataByCategory(edges);

  const categories = Object.keys(packByCategory);

  test("number of categories", () => {
    expect(categories.length).toBe(2);
  });

  test("exact categories and order of categories", () => {
    expect(categories).toStrictEqual(["category1", "category2"]);
  });

  test("exact number of members in category", () => {
    expect(packByCategory["category1"].length).toBe(2);
    expect(packByCategory["category2"].length).toBe(1);
  });

  test("exact members in category", () => {
    expect(packByCategory["category1"]).toStrictEqual([
      edges[0].node.frontmatter,
      edges[1].node.frontmatter,
    ]);

    expect(packByCategory["category2"]).toStrictEqual([
      edges[2].node.frontmatter,
    ]);
  });
});

describe("getUserCardsProps", () => {
  test("transformation as expected", () => {
    const usersData: GatsbyTypes.AboutPageQuery["usersData"] = {
      nodes: [
        {
          contactInformations: {
            firstName: "MyFirstname",
            lastName: "MyLastname",
            email: "test@test.test",
            position: "MyPosition",
            title: null,
            phone: "",
            photo: {
              altText: "MyFirstname MyLastname",
              localFile: {
                childImageSharp: {
                  fluid: {
                    src: "users-image.jpg",
                  },
                },
              },
            },
            organization: [
              {
                id: "SOMEID",
                title: "Organizationname",
                organizationInformations: {
                  url: "https://some-url.test/",
                  logo: {
                    altText: "Organizationname",
                    localFile: {
                      publicURL: "organisation-logo.png",
                    },
                  },
                },
              },
            ],
          },
        },
      ],
    };

    const userCardProps = getUserCardsProps(usersData);

    expect(userCardProps).toStrictEqual([
      {
        name: "MyFirstname MyLastname",
        email: "test@test.test",
        position: "MyPosition",
        avatar: {
          src: "users-image.jpg",
          alt: "MyFirstname MyLastname",
        },
        organizationUrl: "https://some-url.test/",
        organizationLogo: {
          src: "organisation-logo.png",
          alt: "Organizationname",
        },
      },
    ]);
  });

  test("transform user data with title", () => {
    const usersData: GatsbyTypes.AboutPageQuery["usersData"] = {
      nodes: [
        {
          contactInformations: {
            firstName: "MyFirstname",
            lastName: "MyLastname",
            position: "MyPosition",
            email: "test@test.test",
            title: "Dr.",
            phone: "",
            photo: {
              altText: "MyFirstname MyLastname",
              localFile: {
                childImageSharp: {
                  fluid: {
                    src: "users-image.jpg",
                  },
                },
              },
            },
            organization: [
              {
                id: "SOMEID",
                title: "Organizationname",
                organizationInformations: {
                  url: "https://some-url.test/",
                  logo: {
                    altText: "Organizationname",
                    localFile: {
                      publicURL: "organisation-logo.png",
                    },
                  },
                },
              },
            ],
          },
        },
      ],
    };
    const userCardProps = getUserCardsProps(usersData);

    expect(userCardProps[0].name).toBe(
      `${usersData.nodes[0].contactInformations.title} ${usersData.nodes[0].contactInformations.firstName} ${usersData.nodes[0].contactInformations.lastName}`
    );
  });
});

test("transform event items", () => {
  const input: GatsbyTypes.EventFeedQuery["events"] = {
    nodes: [
      {
        excerpt: "excerpt",
        content: "Content",
        eventInformations: {
          startTime: "13:07:34",
          startDate: "2021-11-08",
          endTime: "16:07:38",
          endDate: "2021-11-08",
        },
        eventCategories: {
          nodes: [
            {
              name: "Digitale Veranstaltung",
            },
          ],
        },
        tags: {
          nodes: [
            {
              name: "Allgemein",
              slug: "Allgemein",
            },
            {
              name: "Hackathon",
              slug: "Hackathon",
            },
          ],
        },
        title: "Parent Event",
        slug: "parent-event",
      },
    ],
  };

  const transformed = getParentEventItems(input);

  expect(transformed).toStrictEqual([
    {
      headline: "Parent Event",
      body: "excerpt",
      slug: "/event/parent-event",
      date: new Date("2021-11-08"),
      category: "Digitale Veranstaltung",
      tags: [
        { title: "Allgemein", slug: "Allgemein" },
        { title: "Hackathon", slug: "Hackathon" },
      ],
    },
  ]);
});

test("transform news items", () => {
  const date = faker.date.future();
  const title = faker.lorem.words();
  const excerpt = faker.lorem.paragraph();
  const slug = faker.lorem.slug();
  const tagName = faker.lorem.word();
  const image = {
    src: faker.image.image(),
    alt: faker.lorem.words(),
  };

  const input:
    | GatsbyTypes.LandingPageQuery["newsItems"]
    | GatsbyTypes.NewsFeedQuery["allItems"] = {
    nodes: [
      {
        date: date.toISOString(),
        title,
        excerpt: `<p>${excerpt}</p>`,
        slug,
        tags: {
          nodes: [
            {
              name: tagName,
              slug: tagName,
            },
          ],
        },
        featuredImage: {
          node: {
            altText: image.alt,
            localFile: {
              childImageSharp: {
                fluid: {
                  src: image.src,
                },
              },
            },
          },
        },
      },
    ],
  };

  const result: NewsFeedItemProps[] = getNewsItems(input);

  expect(result[0].headline).toBe(title);
  expect(formatDate(result[0].date)).toBe(formatDate(date));
  expect(result[0].body).toBe(excerpt);
  expect(result[0].slug).toBe(`/news/${slug}`);
  expect(result[0].tags[0].title).toBe(tagName);
  expect(result[0].image.src).toBe(image.src);
  expect(result[0].image.alt).toBe(image.alt);
});

test("transform organisation items for landing page", () => {
  const output: OrganizationBoxProps[] = [
    {
      name: "A Organisation Name",
      description: "A lorem Ipsum",
      organizationUrl: "https://www.url.test/A",
      organizationLogo: {
        src: "https://www.url.test/imageA.jpg",
        alt: "Logo Alternative A",
      },
    },
  ];

  const input: GatsbyTypes.LandingPageQuery["organizationsData"] = {
    nodes: [
      {
        organizationInformations: {
          name: output[0].name,
          description: output[0].description,
          url: output[0].organizationUrl,
          logo: {
            altText: output[0].organizationLogo.alt,
            localFile: {
              publicURL: output[0].organizationLogo.src,
            },
          },
        },
      },
    ],
  };

  const transformedOrganisations = getOrganizationsData(input);

  expect(transformedOrganisations).toStrictEqual(output);
});

describe("test date creation from string", () => {
  test("date without time", () => {
    const dateWithoutTime = createDateTimeFrom("2020-11-03", null);
    expect(dateWithoutTime).toStrictEqual(new Date("2020-11-03"));
  });

  test("date with valid time", () => {
    const dateWithTime = createDateTimeFrom("2020-11-03", "09:00:00");
    expect(dateWithTime).toStrictEqual(new Date("2020-11-03T09:00:00"));
  });

  test("date with invalid time", () => {
    const dateWithWeirdTime = createDateTimeFrom("2020-11-03", "aa:00:00");
    expect(dateWithWeirdTime).toStrictEqual(new Date("2020-11-03T00:00:00Z"));
  });
});
