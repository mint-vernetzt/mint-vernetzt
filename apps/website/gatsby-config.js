require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    title: `MINTvernetzt`,
    description: `MINTvernetzt ist die Service- und Anlaufstelle für die Community der MINT-Akteur:innen in Deutschland.`,
    // TODO add SITE_URL to .env
    //siteUrl: `${process.env.SITE_URL}`,
    siteUrl: `http://localhost:4200/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        svgo: false,
        ref: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
      options: {
        path: __dirname,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MINTvernetzt`,
        short_name: `MINTvernetzt`,
        start_url: `/`,
        background_color: `#154194`,
        theme_color: `#154194`,
        display: `minimal-ui`,
        icon: `src/images/logo-mint.svg`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${process.env.CMS_API}`,
      },
    },
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        outputPath: `src/__generated__/gatsby-types.d.ts`,
        emitSchema: {
          "src/__generated__/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pakt`,
        path: `src/data/pakt/`,
      },
    },
  ],
};
