import React from "react";
import homeHero from "../../assets/images/homeHero.png";
function Hero() {
  return (
    <>
      <div className="h-full mt-10">
        <img
          src={homeHero}
          alt="heroPhoto"
          className="pt-0 px-50 pb-0 h-fit w-auto"
        />
      </div>
    </>
  );
}

export default Hero;
