import * as React from "react";
import Container from "./Container";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import _get from "lodash/get";

export function DogGrid() {
  const data = useStaticQuery(graphql`
    query InstagramPosts {
      allInstagramContent(limit: 7) {
        edges {
          node {
            id
            caption
            localImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const imageArray = _get(data, "allInstagramContent.edges");
  const firstImage = imageArray.slice(0, 1);
  const arrayOfInstaImages = imageArray.slice(1);

  return (
    <Container>
      <div className="lg:text-center">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight font-headline text-gray-900 md:text-4xl">
          Our Crew
        </h2>
        <p className="font-primary text-lg mt-4 max-w-2xl text-gray-600 lg:mx-auto lg:text-xl">
          Happy and tired doggos in their natural habitat.
          <br />
          Come with us on our next adventure !
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-10 md:grid-rows-2 md:grid-cols-5">
        <div className="relative pb-[100%] col-span-2 md:row-span-2">
          <GatsbyImage
            layout="constrained"
            alt="A picture of one of the dogs from Mrs Paws walk or hike"
            image={getImage(firstImage[0].node.localImage)}
            className="border-[3px] border-primary rounded-xl absolute h-full w-full object-cover"
          />
        </div>
        {arrayOfInstaImages.map((image, index) => {
          return (
            <div className="relative" key={index}>
              <GatsbyImage
                layout="constrained"
                alt="A picture of one of the dogs from Mrs Paws walk or hike"
                image={getImage(image.node.localImage)}
                className={`border-[3px] ${
                  index % 2 ? "border-primary-light" : "border-primary-dark"
                } rounded-xl absolute h-full w-full object-cover`}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default DogGrid;
