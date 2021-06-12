import * as React from "react";
import Container from "./Container";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import _get from "lodash/get";

export function DogGrid() {
  const data = useStaticQuery(graphql`
    query InstagramPosts {
      allInstagramContent(
        limit: 7
        filter: { media_type: { in: ["IMAGE", "CAROUSEL_ALBUM"] } }
      ) {
        edges {
          node {
            id
            media_id
            media_type
            permalink
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
  const firstImage = imageArray.slice(0, 1)[0];
  const arrayOfInstaImages = imageArray.slice(1);
  console.log(firstImage);
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
      <div className="grid grid-cols-2 gap-2 mt-10 md:grid-rows-2 md:grid-cols-5 max-h-full lg:max-h-[500px]">
        <div className="relative pb-[100%] mb-2 col-span-2 md:row-span-2">
          <a href={firstImage.node.permalink} target="_blank">
            <GatsbyImage
              layout="constrained"
              alt="A picture of one of the dogs from Mrs Paws walk or hike"
              image={getImage(firstImage.node.localImage)}
              className="border-[3px] border-primary rounded-xl absolute h-full w-full "
            />
          </a>
        </div>
        {arrayOfInstaImages.map((image, index) => {
          return (
            <div className="relative pb-[100%]" key={index}>
              <a href={image.node.permalink} target="_blank">
                <GatsbyImage
                  layout="constrained"
                  alt="A picture of one of the dogs from Mrs Paws walk or hike"
                  image={getImage(image.node.localImage)}
                  className={`border-[4px] ${
                    index % 2 ? "border-primary-light" : "border-primary-dark"
                  } rounded-lg absolute h-full w-full`}
                />
              </a>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default DogGrid;
