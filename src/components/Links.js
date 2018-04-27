import React from "react";
import PropTypes from "prop-types";
import * as Icons from "react-feather";

const Links = ({ className }) => (
  <div className={`text-sm ${className}`}>
    <a
      className="flex items-center text-blue-dark no-underline mb-4"
      href="https://github.com/ngscheurich/loverboy"
    >
      <Icons.Github className="mr-3" />
      <span className="text-pink-dark hover:text-pink">
        https://github.com/ngscheurich/loverboy
      </span>
    </a>

    <a
      className="flex items-center text-blue-dark no-underline mb-4"
      href="https://twitter.com/ngscheurich"
    >
      <Icons.Twitter className="mr-3" />
      <span className="text-pink-dark hover:text-pink">
        https://twitter.com/ngscheurich
      </span>
    </a>

    <a
      className="flex items-center text-blue-dark no-underline mb-4"
      href="https://love2d.org/"
    >
      <Icons.Heart className="mr-3" />
      <span className="text-pink-dark hover:text-pink">https://love2d.org</span>
    </a>
  </div>
);

Links.propTypes = { className: PropTypes.string };

export default Links;
