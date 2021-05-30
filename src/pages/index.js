import * as React from "react";
import { Navbar, HeroBanner } from "../components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <div className="container py-4 md:py-6 xl:py-8 2xl:py-10">
        {/* WELCOME HEADLINE */}
        <div className="flex flex-col items-center">
          <h1 className="text-center font-headline text-4xl font-extrabold pr-10 text-gray-900 md:text-5xl md:max-w-sm md:pr-[4rem] md:pb-1 xl:text-6xl xl:max-w-lg xl:pr-[5rem] 2xl:text-[5rem] 2xl:max-w-3xl 2xl:pr-[8rem] ">
            Welcome To
          </h1>
          <h1 className="text-center font-heroHeadline text-4xl font-medium text-primary pl-10 md:text-5xl md:max-w-sm md:pl-[4rem] md:pt-1 xl:text-6xl xl:max-w-lg xl:pl-[5rem] 2xl:text-[5rem] 2xl:max-w-3xl 2xl:pl-[8rem]">
            Mrs Paws Pet Services
          </h1>
        </div>
        {/* WELCOME TEXT AND IMAGE */}
        <div className=""></div>
      </div>
    </>
  );
};

export default HomePage;
