import * as React from "react";
import {
  Navbar,
  Footer,
  InsidePageBanner,
  PageTitle,
  PriceCard,
  Container,
} from "../components";

const priceCards = [
  {
    title: "Group Hike",
    description: [
      {
        text: "Perfect for social dogs with good recall and obedience training",
      },
    ],
    serviceFeatures: [
      "Maximum 6 dogs per pack",
      "Pickup and dropoff",
      "1.5 hour off-leash group hike in approved off-leash trails",
    ],
    ctaText: "Book Your Hike",
    prices: [
      "Drop In: $30"
    ],
    specialCondition: "*2nd dog is 50% off",
  },
  {
    title: "Boarding",
    description: [
      {
        text: "Boarding is done in my home and is limited to one client at a time, with a maximum of two dogs from the same client. As space is limited, booking needs to be made at least 2 weeks in advance. Priority is given to recurring clients of Mrs Paws.",
      },
      {
        text: "* Please note that pick up/drop off is not included unless a walk has already been scheduled for that day. Clients must provide their own food",
      },
    ],
    serviceFeatures: [
      "A morning pack hike",
      "Feeding meals and providing fresh water",
      "Photos/videos and updates on your dog’s stay",
      "A minimum of one walk in the afternoon, usually two",
      "Administering medication if necessary",
      "Soft bedding; crates, if necessary",
    ],
    ctaText: "Book Boarding",
    prices: ["Per Night: $60"],
  },
  {
    title: "Miscellaneous",
    description: [
      {
        text: "Do you need someone to pick up or drop off your dog at daycare, a grooming appointment, or the vet but your schedule makes it difficult? Mrs Paws can help! Contact us to inquire about our dog taxi services.",
        header: "Dog Taxi:",
      },
      {
        text: "Do you need someone to look after Fido on your wedding day to ensure everything runs smoothly? Whether it's helping Fido pose for photos, walking him down the aisle as a ring bearer, or driving him home/boarding him after the ceremony, Mrs Paws can help you make your dream of having Fido at the wedding come true! Contact us to inquire for our wedding attendant services.",
        header: "Wedding Attendant:",
      },
    ],
    serviceFeatures: [],
    ctaText: "Book Another Service",
    prices: ["Price Varies"],
  },
];

function Services() {
  return (
    <>
      <Navbar />
      <InsidePageBanner />
      <PageTitle title="Services" />
      <Container>
        <p className="font-primary text-lg text-gray-600 lg:text-xl mb-3">
          Whether you are working from home and need someone to exercise your
          dog for you, or you are travelling and need someone to care for your
          pet(s), Mrs Paws Pet Services can help. We provide services such as
          private and group walks, in home boarding, cat sitting, and more! We
          are very flexible and will work hard to accommodate your needs.
        </p>
      </Container>
      {priceCards.map(
        ({
          title,
          description,
          ctaText,
          serviceFeatures,
          prices,
          specialCondition,
        }) => (
          <PriceCard
            key={title}
            title={title}
            description={description}
            serviceFeatures={serviceFeatures}
            ctaText={ctaText}
            prices={prices}
            specialCondition={specialCondition}
          />
        )
      )}
      <Footer />
    </>
  );
}

export default Services;
