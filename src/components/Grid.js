import * as React from "react";

export function Grid({ children }) {
  return (
    <div className="grid grid-cols-4 gap-4 mx-4 h-screen md:grid-cols-8 md:mx-6 md:gap-6 xl:grid-cols-12 xl:gap-8 xl:mx-8 2xl:mx-16">
      {children}
    </div>
  );
}

export default Grid;
