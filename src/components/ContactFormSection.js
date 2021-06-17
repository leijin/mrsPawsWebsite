import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export function ContactFormSection() {
  return (
    <div className="relative bg-white">
      <div className="lg:grid lg:grid-cols-5">
        <div className="lg:col-span-2 lg:py-16 xl:pr-12">
          <div className=" lg:max-w-lg mx-auto">
            <p className="leading-6 font-primary pr-4 text-lg text-gray-600 lg:text-xl lg:pb-8">
              I am looking forward to speaking with you! The best way to get in
              touch is either via social media, email or this form right here.
              We operate primarily in Burnaby and New Westminster areas.
            </p>
            <dl className="mt-4 text-base text-gray-500 flex flex-col space-y-2">
              <dt className="sr-only">Facebook</dt>
              <dd className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  style={{ width: "3rem", height: "3rem" }}
                  className="text-primary-dark"
                  aria-hidden="true"
                />
                <a
                  href="https://www.facebook.com/mrspawspets/"
                  className="h-[max-content]"
                >
                  <h2 className="text-gray-800 font-headline font-semibold text-xl md:text-2xl xl:text-3xl hover:text-primary-dark">
                    mrspawspets
                  </h2>
                </a>
              </dd>
              <dt className="sr-only">Instagram</dt>
              <dd className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  style={{ width: "3rem", height: "3rem" }}
                  className="text-primary-dark"
                  aria-hidden="true"
                />
                <a
                  href="https://www.instagram.com/mrspawspets/"
                  className="h-[max-content]"
                >
                  <h2 className="text-gray-800 font-headline font-semibold text-xl md:text-2xl xl:text-3xl hover:text-primary-dark">
                    @mrspawspets
                  </h2>
                </a>
              </dd>
              <dt className="sr-only">Email</dt>
              <dd className="flex items-center space-x-1 md:space-x-3">
                <FontAwesomeIcon
                  icon={faEnvelopeSquare}
                  style={{ width: "3rem", height: "3rem" }}
                  className="text-primary-dark"
                  aria-hidden="true"
                />
                <a
                  href="mailto:mrspaws@mrspawspetsservices.com"
                  className="h-[max-content]"
                >
                  <h2 className="text-gray-800 font-headline font-semibold text-base md:text-2xl lg:text-xl hover:text-primary-dark">
                    mrspaws@mrspawspetsservices.com
                  </h2>
                </a>
              </dd>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-16 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              action="https://formsubmit.co/92b889d585418d4e8524f00ff41ff94f"
              method="POST"
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="full_name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:first: focus:border-primary-dark border-primary rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:first: focus:border-primary-dark border-primary rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:first: focus:border-primary-dark border-primary rounded-md"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:first: focus:border-primary-dark border prborder-primaryray-300 rounded-md"
                  placeholder="Message"
                  defaultValue={""}
                />
                <input type="text" name="_honey" className="hidden" />
              </div>
              <div>
                <button
                  type="submit"
                  className="font-primary text-lg inline-flex justify-center py-3 px-6 border border-transparent shadow-sm font-medium rounded-md text-white bg-secondary hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactFormSection;
