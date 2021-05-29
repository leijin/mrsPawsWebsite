import * as React from "react";

import BannerImage from "../images/hero_banner.jpg";

export function HeroBanner() {
  return (
    <>
      <div className="w-[47.5%] bg-primary-dark bg-opacity-60 h-52 absolute container flex flex-col justify-center">
        <p className="text-white font-heroHeadline font-medium text-4xl leading-[2.85rem]">
          Come For An Adventure With Us
        </p>
      </div>
      <img
        src={BannerImage}
        className="w-full h-52 object-center object-cover"
      />
    </>
  );
}

export default HeroBanner;
