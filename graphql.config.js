module.exports = {
  schema: ["apps/website/src/__generated__/gatsby-introspection.json"],
  documents: ["apps/website/src/__generated__/gatsby-plugin-documents.graphql"],
  extensions: {
    endpoints: {
      default: {
        url: "http://localhost:4200/___graphql",
        headers: {
          "user-agent": "JS GraphQL",
        },
        introspect: false,
      },
    },
  },
};
