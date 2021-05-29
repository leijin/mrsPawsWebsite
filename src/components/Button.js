import * as React from "react";

export default function Button({
  className,
  children,
  href = "https://www.timetopet.com/portal/mrspawspets",
}) {
  return (
    <button
      type="button"
      className={`${className} inline-flex items-center px-2 py-1 border border-transparent font-primary text-lg font-normal rounded-md shadow-sm text-white bg-secondary hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 lg:px-4 lg:py-2 lg:text-xl`}
    >
      <a href={href}>{children}</a>
    </button>
  );
}
