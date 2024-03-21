import React from "react";

function NavItem({ children }) {
  return (
    <li>
      <a href="/#" className="text-white font-semibold text-lg opacity-60">
        {children}
      </a>
    </li>
  );
}

export default NavItem;
