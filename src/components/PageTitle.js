import * as React from "react";
import { Container } from "./index";

export function PageTitle({ title }) {
  return (
    <Container className="xl:pb-2 2xl:pb-0 ">
      <div className="flex flex-col">
        <h1
          style={{ fontVariant: "small-caps" }}
          className="text-gray-900 font-headline text-4xl font-semibold md:text-5xl 2xl:text-6xl"
        >
          {title}
        </h1>
        <span className="h-[2px] w-3/4 mt-1 bg-secondary rounded-lg md:h-[3px] md:max-w-xs md:mt-2 lg:h-1 lg:max-w-md xl:max-w-lg" />
      </div>
    </Container>
  );
}

export default PageTitle;
