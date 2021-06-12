import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function HeroBanner() {
  return (
    <>
      <div className="w-[47.5%] bg-primary-dark bg-opacity-60 absolute flex flex-col justify-center items-center h-52 md:h-60 lg:h-[32rem] 2xl:h-[50rem] z-10">
        <p className="text-white font-heroHeadline font-medium text-4xl leading-[2.85rem] max-w-[150px] md:text-5xl md:max-w-[270px] xl:text-6xl xl:max-w-full 2xl:text-[5rem]">
          Come For An Adventure With Us
        </p>
      </div>
      <StaticImage
        src={"../images/hero_banner.jpg"}
        loading="eager"
        alt="Hero banner on the home page. A golden retriever looking over the valley on top of the hill"
        placeholder="blurred"
        className="w-full object-center object-cover h-52 md:h-60 lg:h-[32rem] 2xl:h-[50rem]"
      />
    </>
  );
}

export default HeroBanner;
