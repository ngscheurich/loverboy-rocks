import React from "react";
import PropTypes from "prop-types";

const Installation = ({ className }) => (
  <section className={className}>
    <h2 className="leading-tight mb-4">Installation</h2>
    <section className="mb-8">
      <h3 className="leading-tight mb-2">For the Brave</h3>
      <p className="leading-normal mb-4">
        Executing the following command in a terminal will install Löverboy on
        your system, assuming it meets the{" "}
        <a href="#" className="text-pink hover:underline no-underline">
          prerequisites
        </a>.
      </p>
      <div className="inline-block bg-white rounded w-full md:max-w-md">
        <pre className="m-6 overflow-x-auto leading-normal font-mono text-sm">
          $ echo "$(curl -fSsL
          https://raw.githubusercontent.com/ngscheurich/loverboy/master/install)"
          | /bin/sh
        </pre>
      </div>
    </section>

    <section>
      <h3 className="leading-tight mb-2">For the Wary</h3>
      <p className="leading-normal mb-4">
        You can also run the installation commands yourself, individually.
      </p>
      <div className="inline-block bg-white rounded w-full md:max-w-md">
        <pre className="m-6 overflow-x-auto leading-normal font-mono text-sm">
          $ luarocks install loverboy<br />
          $ git clone https://github.com/ngscheurich/loverboy-mfiles.git
          ~/.local/share/loverboy
        </pre>
      </div>
    </section>
  </section>
);

Installation.propTypes = { className: PropTypes.string };

export default Installation;
