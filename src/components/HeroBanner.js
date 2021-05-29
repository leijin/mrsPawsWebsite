import * as React from "react";

import BannerImage from "../images/hero_banner.jpg";

export function HeroBanner() {
  return (
    <>
      <div className="w-[47.5%] bg-primary-dark bg-opacity-60 absolute flex flex-col justify-center items-center h-52 md:h-60 lg:h-[32rem] 2xl:h-[50rem]">
        <p className="text-white font-heroHeadline font-medium text-4xl leading-[2.85rem] max-w-[150px] md:text-5xl md:max-w-[270px] lg:text-6xl lg:max-w-full 2xl:text-[5rem]">
          Come For An Adventure With Us
        </p>
      </div>
      <img
        src={BannerImage}
        className="w-full object-center object-cover h-52 md:h-60 lg:h-[32rem] 2xl:h-[50rem]"
      />
    </>
  );
}

export default HeroBanner;
