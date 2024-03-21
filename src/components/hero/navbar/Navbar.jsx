import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "../../button/Button";

function Navbar() {
  return (
    <div className="flex px-10 items-center py-12">
      <div className="w-3/12">
        <Logo />
      </div>
      <div className="w-6/12">
        <Nav />
      </div>
      <div className="w-3/12 text-right">
        <Button variant="outline-yellow">Kontak</Button>
      </div>
    </div>
  );
}

export default Navbar;
