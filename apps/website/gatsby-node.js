const path = require("path");

exports.createPages = async (props) => {
  const { graphql, actions } = props;
  const { createPage } = actions;
  const result = await graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
      allWpOrganization {
        nodes {
          content
          slug
          title
          tags {
            nodes {
              name
              slug
            }
          }
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  `);
  result.data.allWpPost.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/Post.tsx`),
      context: {
        slug: node.slug,
      },
    });
  });
  result.data.allWpOrganization.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/Organization.tsx`),
      context: {
        slug: node.slug,
      },
    });
  });
};
