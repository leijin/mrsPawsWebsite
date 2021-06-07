import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function InsidePageBanner() {
  return (
    <>
      <div className="w-full bg-primary bg-opacity-60 absolute h-32 md:h-48 lg:h-52 2xl:h-56 z-10" />
      <StaticImage
        src={"../images/inside_page_banner.jpg"}
        placeholder="blurred"
        className="w-full object-center object-cover h-32 md:h-48 lg:h-52 2xl:h-56"
      />
    </>
  );
}

export default InsidePageBanner;
