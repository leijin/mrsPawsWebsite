import * as React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Button from "./Button";

export function PriceCard({
  title,
  description,
  serviceFeatures,
  ctaText,
  prices,
  specialCondition = false,
}) {
  return (
    <div className="mt-1 bg-white pb-16 sm:mt-8 sm:pb-10 lg:pb-16">
      <div className="relative">
        <div className="absolute inset-0 h-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-primary-light max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
            <div className="flex-1 bg-white px-6 py-8 lg:p-12">
              <h3 className="font-headline text-2xl font-bold text-gray-900 sm:text-3xl">
                {title}
              </h3>
              {description.map(({ text, header }) => {
                const headerText = header ? (
                  <span className="font-primary font-bold text-gray-700">
                    {header}
                  </span>
                ) : null;
                return (
                  <div className="mt-6">
                    {headerText}
                    <p className="font-primary text-base text-gray-700">
                      {text}
                    </p>
                  </div>
                );
              })}

              <div className="mt-8">
                {serviceFeatures.length ? (
                  <div className="flex items-center">
                    <h4 className="font-headline flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-primary">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                ) : null}

                <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                  {serviceFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start lg:col-span-1"
                    >
                      <div className="flex-shrink-0">
                        <CheckCircleIcon
                          className="h-5 w-5 text-primary-dark"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="font-primary ml-3 text-sm text-gray-700">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
              {prices.map((price) => (
                <div className="font-headline mt-4 flex items-center justify-center text-2xl font-bold text-gray-900">
                  <span>{price}</span>
                </div>
              ))}
              {specialCondition ? (
                <p className="font-primary mt-4 text-sm text-gray-600 font-medium">
                  {specialCondition}
                </p>
              ) : null}
              <div className="mt-6">
                <Button className="px-6 py-3">{ctaText}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
