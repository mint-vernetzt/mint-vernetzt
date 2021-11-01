import { getPaktDataByCategory, getUserCardsProps } from "./dataTransformer";

describe("getPaktDataByCategory", () => {
  const edges: GatsbyTypes.ProjectPageQuery["paktData"]["edges"] = [
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
    const usersData: GatsbyTypes.ProjectPageQuery["usersData"] = {
      nodes: [
        {
          featuredImage: {
            node: {
              sourceUrl: "",
              localFile: {
                childImageSharp: {
                  fluid: {
                    src: "users-image.jpg",
                  },
                },
              },
            },
          },
          contactInformations: {
            firstName: "MyFirstname",
            lastName: "MyLastname",
            position: "MyPosition",
            organization: [
              {
                id: "SOMEID",
                title: "Organizationname",
                organizationInformations: {
                  url: "https://some-url.test/",
                  logo: {
                    altText: "Organizationname",
                    localFile: {
                      childImageSharp: {
                        fluid: {
                          src: "organisation-logo.png",
                        },
                      },
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
});
