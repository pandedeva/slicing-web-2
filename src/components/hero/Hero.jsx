import React from "react";
import Navbar from "./navbar/Navbar";
import Button from "../button/Button";

function Hero() {
  return (
    <div className="h-[712px] bg-hero">
      <div className="container mx-auto">
        <Navbar />
        {/* hero section */}
        <div className="text-center pt-24">
          <h1 className="text-3xl w-7/12 mx-auto text-white font-mono font-semibold mb-4 leading-relaxed">Saya seorang front-end engineer, back-end engineer, dan juga UI designer</h1>
          <p className="text-lg text-white mx-auto opacity-60 w-4/12 leading-relaxed tracking-wide">Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI design.</p>
          <Button className="mt-14" variant="yellow">
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
