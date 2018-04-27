import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";
import "react-github-button/assets/style.css";
import favicon from "../static/favicon.ico";

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      link={[{ rel: "icon", href: favicon }]}
      meta={[
        { name: "description", content: data.site.siteMetadata.description },
        { name: "og:url", content: data.site.siteMetadata.url },
        { name: "og:description", content: data.site.siteMetadata.description }
      ]}
    />
    <div className="font-sans text-lg text-blue-dark bg-blue-dark">
      {children()}
    </div>
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
