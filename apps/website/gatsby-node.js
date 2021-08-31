const path = require("path");

exports.createPages = async (props) => {
  const { graphql, actions } = props;
  const { createPage } = actions;
  const posts = await graphql(`
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
  posts.data.allWpPost.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/Post.tsx`),
      context: {
        slug: node.slug,
      },
    });
  });
};
