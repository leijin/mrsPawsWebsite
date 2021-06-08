import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTree,
  faDog,
  faPaw,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";

import Container from "./Container";
import useWindowSize from "../utils/hooks/useWindowSize";

export function ServicesGrid() {
  const { width } = useWindowSize();

  const features = [
    {
      name: "Group Dog Hikes",
      description:
        "Our group hikes are ideal for social and well-trained dogs. In a small pack of other four-legged friends, your pup will enjoy a fun-filled adventure in dog-friendly trails, beaches, and parks.",
      icon: faTree,
      colour: "bg-primary-dark",
    },
    {
      name: "Individual Dog Walks",
      description:
        "Our private walks are ideal for puppies, senior dogs, or dogs that prefer to be the center of attention.",
      icon: faDog,
      colour: "bg-primary",
    },
    {
      name: "Pet Sitting",
      description:
        "Is your dog not a fan of day care? Would you prefer your dog had one-on-one care instead of sharing the attention? Our pet sitting services provide that personalized in-home care to give you and your dog peace of mind.",
      icon: faPaw,
      colour: width >= 768 ? "bg-primary" : "bg-primary-dark",
    },
    {
      name: "Pet Boarding",
      description:
        "If you need to travel and a kennel doesn't sound like you or your pup's idea of a good time, try our in-home pet boarding services instead! Your dog will receive 24/7 care and attention in a calm and personal environment. Space is limited to one client per board, so book today!",
      icon: faHotel,
      colour: width >= 768 ? "bg-primary-dark" : "bg-primary",
    },
  ];

  return (
    <Container>
      <div className="lg:text-center">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight font-headline text-gray-900 md:text-4xl">
          Some of our Services
        </h2>
        <p className="font-primary text-lg mt-4 max-w-2xl text-gray-600 lg:mx-auto lg:text-xl">
          Whether you are working from home and need someone to exercise your
          dog for you, or you are travelling and need someone to care for your
          pet(s), Mrs Paws Pet Services can help. We offer a variety of services
          and work hard to accommodate your needs and schedule.
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div
                  className={`${feature.colour} absolute flex items-center justify-center h-12 w-12 rounded-md text-white`}
                >
                  <FontAwesomeIcon
                    icon={feature.icon}
                    style={{ width: "1.4rem", height: "1.4rem" }}
                    aria-hidden="true"
                  />
                </div>
                <p className="font-primary ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="font-primary mt-2 ml-16 text-base text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  );
}

export default ServicesGrid;
