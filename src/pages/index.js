import * as React from "react";
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
