import * as React from "react";

import {
  Navbar,
  Footer,
  InsidePageBanner,
  PageTitle,
  Container,
  ContactFormSection,
} from "../components";

function Contact() {
  return (
    <>
      <Navbar />
      <InsidePageBanner />
      <PageTitle title="Contact" />
      <Container>
        <ContactFormSection />
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
