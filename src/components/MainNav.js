import * as React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  AnnotationIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
  AtSymbolIcon,
} from "@heroicons/react/outline";

import Logo from "../images/logo.jpeg";
import LogoText from "../images/logo_text.jpg";
import Button from "./Button";
import useWindowSize from "../utils/hooks/useWindowSize";

const mobileNavItems = [
  {
    name: "About",
    href: "/about",
    icon: AnnotationIcon,
  },
  {
    name: "Services",
    href: "/services",
    icon: SparklesIcon,
  },
  {
    name: "FAQ",
    href: "/FAQ",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: AtSymbolIcon,
  },
];

export default function MainNavBar() {
  const windowSize = useWindowSize();
  const ResponsiveLogo = windowSize.width >= 1024 ? LogoText : Logo;

  return (
    <Popover className="relative bg-white z-20">
      {({ open }) => (
        <>
          <div className="container max-w-7xl flex justify-between items-center py-2 md:justify-between md:py-3">
            <div className="flex justify-start md:flex-auto lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Company Logo</span>
                <img
                  className="h-18 w-auto md:h-19 lg:h-20 transform-gpu"
                  src={ResponsiveLogo}
                  alt="Mrs Paws Pets Services Logo Without Script"
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-dark">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex md:flex-auto md:justify-around">
              <a
                href="/about"
                className="text-xl font-headline font-medium text-gray-600 hover:text-gray-900 lg:text-2xl"
              >
                About
              </a>
              <a
                href="/services"
                className="text-xl font-headline font-medium text-gray-600 hover:text-gray-900 lg:text-2xl"
              >
                Services
              </a>
              <a
                href="/FAQ"
                className="text-xl font-headline font-medium text-gray-600 hover:text-gray-900 lg:text-2xl"
              >
                FAQ
              </a>
              <a
                href="/contact"
                className="text-xl font-headline font-medium text-gray-600 hover:text-gray-900 lg:text-2xl"
              >
                Contact
              </a>
            </div>

            <span className="hidden md:flex md:flex-auto items-center justify-end lg:w-0">
              <Button>Book a Walk</Button>
            </span>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-18 w-auto"
                        src={Logo}
                        alt="Mrs Paws Pets Services Logo Without Script"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-dark">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      {mobileNavItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-lg font-primary font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <a
                    href="https://www.timetopet.com/portal/mrspawspets"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-primary font-bold text-white bg-secondary hover:bg-secondary-dark"
                  >
                    Book a walk!
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
