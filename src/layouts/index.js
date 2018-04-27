import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: data.site.siteMetadata.description },
        { name: "og:url", content: data.site.siteMetadata.url },
        { name: "og:description", content: data.site.siteMetadata.description },
        { name: "og:image", content: "" }
      ]}
    />
    <div>{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
