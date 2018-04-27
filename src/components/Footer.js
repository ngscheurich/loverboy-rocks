import React from "react";
import GitHubButton from "react-github-button";

export default () => (
  <footer className="text-base text-white leading-normal antialiased container py-8 md:flex justify-between">
    <div className="mb-4 md:mb-0">
      <p className="mb-2">
        Copyright © 2018{" "}
        <a
          className="text-grey-light hover:text-blue no-underline border-b border-grey hover:border-blue"
          href="https://nick.scheurich.me/"
        >
          N. G. Scheurich
        </a>{" "}
        (MIT)
      </p>
      <p>
        Löverboy is not affiliated with the *awesome*{" "}
        <a
          className="text-grey-light hover:text-blue no-underline border-b border-grey hover:border-blue"
          href="https://love2d.org/"
        >
          LÖVE framework
        </a>.
      </p>
    </div>

    <div>
      <GitHubButton
        type="forks"
        size="large"
        namespace="ngscheurich"
        repo="loverboy-website"
      />
    </div>
  </footer>
);
