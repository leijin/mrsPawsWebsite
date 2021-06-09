import * as React from "react";
import Container from "./Container";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import _get from "lodash/get";

export function DogGrid() {
  const data = useStaticQuery(graphql`
    query InstagramPosts {
      allInstagramContent {
        edges {
          node {
            id
            caption
            localImage {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 500
                  height: 500
                )
              }
            }
          }
        }
      }
    }
  `);

  const arrayOfInstaImages = _get(data, "allInstagramContent.edges");
  const image = getImage(arrayOfInstaImages[1].node.localImage);

  console.log(arrayOfInstaImages, image);
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
            alt="A picture of one of the dogs from Mrs Paws walk or hike"
            image={image}
            className="border-[3px] border-primary rounded-xl absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative pb-[100%]">
          <StaticImage
            placeholder="blurred"
            alt="A picture of one of the dogs from Mrs Paws walk or hike"
            src="https://source.unsplash.com/collection/1254279/800x600"
            className="border-[3px] border-primary-light rounded-xl absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative pb-[100%]">
          <StaticImage
            placeholder="blurred"
            alt="A picture of one of the dogs from Mrs Paws walk or hike"
            src="https://source.unsplash.com/collection/1254279/800x600"
            className="border-[3px] border-primary-light rounded-xl absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative pb-[100%]">
          <StaticImage
            placeholder="blurred"
            alt="A picture of one of the dogs from Mrs Paws walk or hike"
            src="https://source.unsplash.com/collection/1254279/800x600"
            className="border-[3px] border-primary rounded-xl absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative pb-[100%]">
          <StaticImage
            placeholder="blurred"
            alt="A picture of one of the dogs from Mrs Paws walk or hike"
            src="https://source.unsplash.com/collection/1254279/800x600"
            className="border-[3px] border-primary rounded-xl absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative pb-[100%]">
          <StaticImage
            placeholder="blurred"
            alt="A picture of one of the dogs from Mrs Paws walk or hike"
            src="https://source.unsplash.com/collection/1254279/800x600"
            className="border-[3px] border-primary-dark rounded-xl absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative pb-[100%]">
          <StaticImage
            placeholder="blurred"
            alt="A picture of one of the dogs from Mrs Paws walk or hike"
            src="https://source.unsplash.com/collection/1254279/800x600"
            className="border-[3px] border-primary-dark rounded-xl absolute h-full w-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
}

// export const query = graphql`
//   query InstagramPosts {
//     allInstagramContent {
//       edges {
//         node {
//           id
//           caption
//           localImage {
//             childImageSharp {
//               gatsbyImageData(
//                 layout: CONSTRAINED
//                 placeholder: BLURRED
//                 width: 500
//                 height: 500
//               )
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default DogGrid;
