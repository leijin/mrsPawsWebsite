import * as React from "react";
import { Navbar, Footer, InsidePageBanner, PageTitle } from "../components";

export function About() {
  return (
    <>
      <Navbar />
      <InsidePageBanner />
      <PageTitle title="About" />
      <Footer />
    </>
  );
}

export default About;
