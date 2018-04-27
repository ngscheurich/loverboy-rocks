import React from "react";
import PropTypes from "prop-types";

const Usage = ({ className }) => (
  <section className={className}>
    <h2 className="leading-tight mb-4">Usage</h2>
    <div className="inline-block leading-normal font-mono text-sm bg-white rounded w-full md:max-w-md">
      <pre className="m-6 overflow-x-auto">
        {`
Usage: loverboy [OPTIONS]

COMMANDS:
  add           Add a library to the current project
  info          Display information about a library
  search        Search available libraries
  update        Update local metafiles cache

OPTIONS:
  -v, --version Prints the program's version
  `}
      </pre>
    </div>
  </section>
);

Usage.propTypes = { className: PropTypes.string };

export default Usage;
