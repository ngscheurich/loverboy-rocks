import React from "react";

export default () => (
  <header className="text-white antialiased container py-xl md:py-2xl">
    <div className="md:flex items-center mb-8 md:mb-xl">
      <div className="md:w-1/3 text-center text-xxl md:text-xxxl">💘</div>
      <div className="md:w-2/3 max-w-md">
        <h1 className="font-display text-3xl md:text-5xl text-center md:text-left leading-tight mb-2">
          Löverboy
        </h1>
        <p className="leading-normal text-lg md:text-2xl text-blue-lighter">
          Löverboy makes it easy to add Lua libraries to your{" "}
          <strong>
            <a
              className="text-white no-underline hover:underline"
              href="https://love2d.org/"
            >
              LÖVE
            </a>
          </strong>{" "}
          project with a simple set of commands. Library files are added
          directly to your project directory so distributing your game is a{" "}
          <strong>snap</strong>.
        </p>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="bg-pink-dark text-white rounded w-full md:w-auto">
        <pre className="m-6 overflow-x-auto leading-normal font-mono font-bold text-sm">
          echo "$(curl -fSsL
          https://raw.githubusercontent.com/ngscheurich/loverboy/master/install)"
          | /bin/sh
        </pre>
      </div>
    </div>
  </header>
);
