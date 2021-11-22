import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export interface SEOProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  children: React.ReactNode;
}

const SEO = ({ title, description, image, slug, children }: SEOProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      favicon: file(name: { eq: "favicon" }) {
        publicURL
      }
      social: file(name: { eq: "mintvernetzt_og-img" }) {
        publicURL
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang: `de` }}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <title>{title}</title>
      <meta
        name="description"
        content={description || data.site.siteMetadata.description}
      />
      <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}${slug}`} />
      <link rel="shortcut icon" href={data.favicon.publicURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mintvernetzt" />
      <meta name="og:title" content={title} />
      <meta
        name="og:description"
        content={description || data.site.siteMetadata.description}
      />
      <meta
        name="og:image"
        content={`${data.site.siteMetadata.siteUrl}${
          image || data.social.publicURL
        }`}
      />
      <meta
        name="image"
        property="og:image"
        content={`${data.site.siteMetadata.siteUrl}${
          image || data.social.publicURL
        }`}
      />
      <meta name="og:type" content="website" />
      <meta
        name="og:url"
        content={`${data.site.siteMetadata.siteUrl}${slug}`}
      />
      <meta name="og:site_name" content={data.site.siteMetadata.title} />
      {children}
    </Helmet>
  );
};

export default SEO;
