import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  Navbar,
  Footer,
  InsidePageBanner,
  PageTitle,
  Container,
} from "../components";

function Contact() {
  return (
    <>
      <Navbar />
      <InsidePageBanner />
      <PageTitle title="Contact" />
      <Container>
        <div className="flex-col space-y-3">
          <p className="font-primary text-lg text-gray-600 lg:text-xl mb-3">
            I am looking forward to speaking with you! The best way to get in
            touch is either via social media or email listed below.
          </p>
          <div className="flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ width: "3rem", height: "3rem" }}
                className="text-primary"
                aria-hidden="true"
              />
              <a href="https://www.facebook.com/mrspawspets/">
                <h2 className="text-gray-900 font-headline font-semibold text-xl max-w-xs md:max-w-sm lg:max-w-full md:text-3xl xl:text-4xl hover:text-primary-dark">
                  mrspawspets
                </h2>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                style={{ width: "3rem", height: "3rem" }}
                className="text-primary"
                aria-hidden="true"
              />
              <a href="https://www.instagram.com/mrspawspets/">
                <h2 className="text-gray-900 font-headline font-semibold text-xl max-w-xs md:max-w-sm lg:max-w-full md:text-3xl xl:text-4xl hover:text-primary-dark">
                  @mrspawspets
                </h2>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faEnvelopeSquare}
                style={{ width: "3rem", height: "3rem" }}
                className="text-primary"
                aria-hidden="true"
              />
              <a href="mailto:mrspaws@mrspawspetsservices.com">
                <h2 className="text-gray-900 font-headline font-semibold  max-w-xs md:max-w-sm lg:max-w-full md:text-3xl xl:text-4xl hover:text-primary-dark">
                  mrspaws@mrspawspetsservices.com
                </h2>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
