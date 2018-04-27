import React from "react";
import PropTypes from "prop-types";

const Tour = ({ className }) => (
  <div className={className}>
    <div className="leading-normal antialiased font-mono text-sm bg-blue-dark text-blue-lighter rounded p-6 leading-normal">
      <div>
        <span className="text-pink">$</span> loverboy search physics
      </div>
      <div className="font-bold">==> Searching local metafiles...</div>
      <div>windfield</div>
      <div className="mb-4">bump.lua</div>

      <div>
        <span className="text-pink">$</span> loverboy info bump.lua
      </div>
      <div className="font-bold">bump.lua</div>
      <div>Lua collision-detection library for axis-aligned rectangles.</div>
      <div className="underline">https://github.com/kikito/bump.lua</div>
      <div>Versions: v3.1.7, v3.1.6-2, v3.1.6, v3.1.5, 3.1.4, v3.1.3</div>
      <div className="mb-4">Tags: physics</div>

      <div>
        <span className="text-pink">$</span> loverboy add bump.lua
      </div>
      <div className="font-bold">==> Adding bump.lua (v3.1.7)...</div>
      <div>&nbsp;&nbsp;* lib/bump.lua</div>
      <div>Done!</div>
    </div>
  </div>
);

Tour.propTypes = { className: PropTypes.string };

export default Tour;
