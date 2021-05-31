import * as React from "react";
import DogWalkder from "../assets/dog_walking.svg";
import Container from "./Container";

export function Intro() {
  return (
    <Container className="md:mb-[-5rem]">
      {/* WELCOME HEADLINE */}
      <div className="flex flex-col items-center">
        <h1 className="text-center font-headline text-4xl font-extrabold pr-10 text-gray-900 md:text-5xl md:max-w-sm md:pr-[4rem] md:pb-1 xl:text-6xl xl:max-w-lg xl:pr-[5rem] 2xl:text-[4.5rem] 2xl:max-w-3xl 2xl:pr-[8rem] ">
          Welcome to
        </h1>
        <h1 className="text-center font-heroHeadline text-4xl font-medium text-primary pl-10 md:text-5xl md:max-w-sm md:pl-[4rem] md:pt-1 xl:text-6xl xl:max-w-lg xl:pl-[5rem] 2xl:text-[4.5rem] 2xl:max-w-3xl 2xl:pl-[8rem]">
          Mrs Paws Pet Services
        </h1>
      </div>
      {/* WELCOME TEXT AND IMAGE */}
      <div className="flex flex-col-reverse items-center md:flex-row md:space-x-2 md:items-start">
        <div className="md:flex-1 md:flex md:flex-col md:pt-10 lg:justify-start lg:pt-20 2xl:pt-28">
          <p className="text-gray-700 font-primary text-lg md:text-lg md:pb-1 lg:text-xl">
            Mrs paws is coming to town... to help you take the load off your
            busy schedule!
          </p>
          <br />
          <p className="text-gray-700 font-primary text-lg md:text-lg md:pt-2 lg:text-xl">
            {" "}
            We provide reliable, caring, and positive dog walking and/or pet
            care experience for your special four-legged friend. Mrs Paws Pet
            Services operates primarily within Burnaby and New Westminster.
          </p>
        </div>
        <DogWalkder className="mb-4 sm:w-[425px] sm:h-[425px] md:flex-1 md:relative md:bottom-24 lg:w-[500px] lg:h-[500px] 2xl:w-[550px] 2xl:h-[550px]" />
      </div>
    </Container>
  );
}

export default Intro;
