import React from "react";
import NavItem from "./NavItem";

function Nav() {
  return (
    <>
      <ul className="flex items-center justify-center space-x-10">
        <NavItem>Profile</NavItem>
        <NavItem>Skills</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
      </ul>
    </>
  );
}

export default Nav;
