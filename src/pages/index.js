import * as React from "react";
import { Navbar, HeroBanner, Intro, ServicesGrid } from "../components";

export function HomePage() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Intro />
      <ServicesGrid />
    </>
  );
}

export default HomePage;
