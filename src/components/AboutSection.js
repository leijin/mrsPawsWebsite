import * as React from "react";
import { Container } from "./index";
import MaryamPortrait from "../images/maryam_portrait.jpg";
import Keeley from "../images/keeley.jpg";
import Bella from "../images/bella.jpg";

export function AboutSection() {
  return (
    <Container>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-3">
            <h2 className="text-gray-900 font-headline font-semibold text-2xl max-w-xs md:max-w-full">
              Hello my name is <span className="text-primary-dark">Maryam</span>
              , aka <span className="text-primary">Mrs Paws</span>
            </h2>
            <p className="font-primary text-lg text-gray-700">
              I’m Burnaby and New Westminster’s friendliest neighborhood dog
              walker!{" "}
            </p>
            <p className="font-primary text-lg text-gray-700">
              Over the past ten years I have worked with dogs in various
              capacities, including grooming salons, daycares, boarding kennels,
              and dog walking. Dogs have been my passion ever since I got my
              first dog, Bella, at 19 years old. Despite going to college to try
              and build a career in marketing, I realized that I preferred my
              coworkers to have four legs instead of two!
            </p>
            <p className="font-primary text-lg text-gray-700">
              I’m a proud dog mom of two pug mixes, Bella and Keeley, who are my
              entire world. I’m also a proud cat aunt of a sassy calico named
              Falafel, all of whom are featured in Mrs Paws’ logo.{" "}
            </p>
            <p className="font-primary text-lg text-gray-700">
              As someone who is madly in love with my own dogs, I understand how
              important it is to find someone that you can trust when caring for
              your own fur child. My pledge to my clients is to always treat
              your pet like one of my own, and that means not taking any risks
              when it comes to safety. This means I keep my pack numbers low to
              ensure a high standard of care as well as to create a positive and
              stress-free environment for your pet. I am professional, reliable
              and trustworthy. I am passionate about my pack.
            </p>
          </div>
          <img
            src={MaryamPortrait}
            className="border-[7px] border-primary rounded-xl"
          />
        </div>
        <div className="flex max-w-full justify-around">
          <div className="flex flex-col space-y-3 items-center">
            <h2 className="text-gray-900 font-headline font-semibold text-2xl max-w-xs md:max-w-full">
              Keeley
            </h2>
            <img
              src={Keeley}
              className="w-36 h-36 border-4 border-primary rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <h2 className="text-gray-900 font-headline font-semibold text-2xl max-w-xs md:max-w-full">
              Bella
            </h2>
            <img
              src={Bella}
              className="w-36 h-36 border-4 border-primary rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutSection;
