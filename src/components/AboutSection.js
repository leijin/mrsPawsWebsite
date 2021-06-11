import * as React from "react";
import { Container } from "./index";
import { StaticImage } from "gatsby-plugin-image";

export function AboutSection() {
  return (
    <Container>
      <div className="flex flex-col space-y-6 md:space-y-10">
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-8 lg:space-x-12">
          <div className="flex flex-col space-y-3">
            <h2 className="text-gray-900 font-headline font-semibold text-2xl max-w-xs md:max-w-sm lg:max-w-full md:text-3xl xl:text-4xl">
              Hello my name is <span className="text-primary-dark">Maryam</span>
              , aka <span className="text-primary">Mrs Paws</span>
            </h2>
            <p className="font-primary text-lg text-gray-600 lg:text-xl">
              I’m Burnaby and New Westminster’s friendliest neighborhood dog
              walker!{" "}
            </p>
            <p className="font-primary text-lg text-gray-600 lg:text-xl">
              Over the past ten years I have worked with dogs in various
              capacities, including grooming salons, daycares, boarding kennels,
              and dog walking. Dogs have been my passion ever since I got my
              first dog, Bella, at 19 years old. Despite going to college to try
              and build a career in marketing, I realized that I preferred my
              coworkers to have four legs instead of two!
            </p>
            <p className="font-primary text-lg text-gray-600 lg:text-xl">
              I’m a proud dog mom of two pug mixes, Bella and Keeley, who are my
              entire world. I’m also a proud cat aunt of a sassy calico named
              Falafel, all of whom are featured in Mrs Paws’ logo.{" "}
            </p>
            <p className="font-primary text-lg text-gray-600 lg:text-xl">
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
          <StaticImage
            src={"../images/maryam_portrait.jpg"}
            placeholder="blurred"
            alt="Portrait of Maryam aka Mrs Paws with her two dogs Keeley and Bella"
            className="border-[7px] border-primary rounded-xl md:max-h-[400px]"
          />
        </div>
        <div className="flex max-w-full justify-around md:justify-center md:space-x-14">
          <div className="flex flex-col space-y-3 items-center">
            <h3 className="text-gray-900 font-headline font-semibold text-2xl max-w-xs md:max-w-full">
              Keeley
            </h3>
            <StaticImage
              src={"../images/keeley.jpg"}
              placeholder="blurred"
              alt="Maryam's dog Keeley"
              imgStyle={{ height: "10rem", width: "10rem" }}
              imgClassName="w-40 h-40 border-4 border-primary rounded-full md:w-48 md:h-48"
              className="w-40 h-40 rounded-full md:w-48 md:h-48"
            />
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <h3 className="text-gray-900 font-headline font-semibold text-2xl max-w-xs md:max-w-full">
              Bella
            </h3>
            <StaticImage
              src={"../images/bella.jpg"}
              placeholder="blurred"
              alt="Maryam's dog Bella"
              imgStyle={{ height: "10rem", width: "10rem" }}
              imgClassName="w-40 h-40 border-4 border-primary rounded-full md:w-48 md:h-48"
              className="w-40 h-40 rounded-full md:w-48 md:h-48"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutSection;
