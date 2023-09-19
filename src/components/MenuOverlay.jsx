import React from "react";
import Navlink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <div className="bg-gray-950 uppercase gap-y-2">
      <ul className="flex flex-col items-center py-8">
        {links.map((link, index) => (
          <li key={index}>
            <Navlink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
