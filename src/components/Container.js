import * as React from "react";

export function Container({ children, className }) {
  return (
    <div
      className={`${className} container max-w-7xl py-4 md:py-6 xl:py-8 2xl:py-12`}
    >
      {children}
    </div>
  );
}

export default Container;
