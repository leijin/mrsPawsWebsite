import * as React from "react";

import BannerImage from "../images/inside_page_banner.jpg";

export function InsidePageBanner() {
  return (
    <>
      <div className="w-full bg-primary bg-opacity-60 absolute h-36 md:h-48 lg:h-52 2xl:h-56"></div>
      <img
        src={BannerImage}
        className="w-full object-center object-cover h-36 md:h-48 lg:h-52 2xl:h-56"
      />
    </>
  );
}

export default InsidePageBanner;
