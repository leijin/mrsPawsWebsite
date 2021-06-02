import * as React from "react";
import { Navbar, HeroBanner, Intro, ServicesGrid, CTABar } from "../components";

export function HomePage() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Intro />
      <ServicesGrid />
      <CTABar />
    </>
  );
}

export default HomePage;
