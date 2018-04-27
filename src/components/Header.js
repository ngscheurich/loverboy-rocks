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
          <strong>LÖVE</strong> project with a simple set of commands. Library
          files are added directly to your project directory so distributing
          your game is a <strong>snap</strong>.
        </p>
      </div>
    </div>

    <div className="flex justify-center">
      <code className="font-mono text-xs md:text-sm leading-normal font-bold bg-pink-dark text-white p-6 rounded">
        /bin/sh "$(curl -fSsL
        https://raw.githubusercontent.com/ngscheurich/loverboy/master/install)"
      </code>
    </div>
  </header>
);
