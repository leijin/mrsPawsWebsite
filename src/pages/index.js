import * as React from "react";
import "@fontsource/sue-ellen-francisco";
import "@fontsource/spectral";
import "@fontsource/karla";

import {
  Navbar,
  HeroBanner,
  Intro,
  ServicesGrid,
  CTABar,
  DogGrid,
  Footer,
} from "../components";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Intro />
      <ServicesGrid />
      <CTABar />
      <DogGrid />
      <Footer />
    </>
  );
}

export default HomePage;
