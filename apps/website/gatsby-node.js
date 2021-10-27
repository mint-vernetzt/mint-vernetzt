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
};

// Prevents following error:
// Type with name "WpBlockAttributesObject" does not exists.
// See: https://github.com/wp-graphql/wp-graphql/issues/1460#issuecomment-742235504
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type WpBlockAttributesObject {
      foobar: String
    }
  `;
  createTypes(typeDefs);
};
