import * as React from "react";
import {
  Navbar,
  Footer,
  InsidePageBanner,
  PageTitle,
  AboutSection,
} from "../components";

export function About() {
  return (
    <>
      <Navbar />
      <InsidePageBanner />
      <PageTitle title="About" />
      <AboutSection />
      <Footer />
    </>
  );
}

export default About;
