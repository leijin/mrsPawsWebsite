import * as React from "react";
import Container from "./Container";

export function FAQMainSection({ header, faqs }) {
  return (
    <Container>
      <div className="bg-white">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="font-headline text-3xl font-bold text-gray-900 lg:text-4xl">
              {header}
            </h2>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-headline text-xl leading-6 font-medium text-gray-900 lg:text-2xl">
                    {faq.question}
                  </dt>
                  {faq.answer.paragraphs
                    ? faq.answer.paragraphs.map((paragraph) => (
                        <dd className="font-headline mt-2 text-lg text-gray-600 lg:text-xl">
                          {paragraph}
                        </dd>
                      ))
                    : null}
                  {faq.answer.list ? (
                    <dd className="font-headline mt-2 text-lg text-gray-600 lg:text-xl">
                      <ul className="pl-6 lg:pl-8">
                        {faq.answer.list.map((item) => (
                          <li className="list-item list-disc">{item}</li>
                        ))}
                      </ul>
                    </dd>
                  ) : null}
                  {faq.answer.text ? (
                    <dd className="font-headline mt-2 text-lg text-gray-600 lg:text-xl">
                      {faq.answer.text}
                    </dd>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FAQMainSection;
