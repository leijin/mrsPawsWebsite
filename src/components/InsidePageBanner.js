import * as React from "react";

import BannerImage from "../images/inside_page_banner.jpg";

export function InsidePageBanner() {
  return (
    <>
      <div className="w-full bg-primary bg-opacity-60 absolute h-52 md:h-60 lg:h-[32rem] 2xl:h-[50rem]"></div>
      <img
        src={BannerImage}
        className="w-full object-center object-cover h-52 md:h-60 lg:h-[32rem] 2xl:h-[50rem]"
      />
    </>
  );
}

export default InsidePageBanner;
