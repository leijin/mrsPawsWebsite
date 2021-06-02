import * as React from "react";
import Button from "./Button";
import Container from "./Container";

export function CTABar() {
  return (
    <Container>
      <div className="w-full bg-primary bg-opacity-60 flex flex-col items-center py-4 px-8 rounded-lg lg:flex-row lg:justify-between lg:px-14 lg:py-6">
        <p className="font-headline text-2xl text-center lg:text-3xl">
          Is your dog ready for the best walk of their life ?
        </p>
        <Button className="px-4 mt-4 md:px-5 lg:mt-0 lg:px-6 lg:py-3">
          Book a Walk
        </Button>
      </div>
    </Container>
  );
}

export default CTABar;
