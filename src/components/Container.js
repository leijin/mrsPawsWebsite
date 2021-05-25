import * as React from "react";

export function Container({ children, className }) {
  return (
    <div className={`${className} h-full w-full px-2 xl:px-4`}>{children}</div>
  );
}

export default Container;
