import * as React from "react";
import {
  Navbar,
  HeroBanner,
  Intro,
  ServicesGrid,
  CTABar,
  DogGrid,
} from "../components";

export function HomePage() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Intro />
      <ServicesGrid />
      <CTABar />
      <DogGrid />
    </>
  );
}

export default HomePage;
