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
      "Drop In: $30",
      "1-2 Per Week: $28 (each)",
      "2-3 Per Week: $27 (each)",
      "4+ Per Week: $26 (each)",
    ],
    specialCondition: "*2nd dog is 50% off",
  },
  {
    title: "Private Walk",
    description: [
      {
        text: "Ideal for young puppies, senior dogs, and dogs that prefer to walk solo. On leash unless otherwise requested by the owner",
      },
    ],

    serviceFeatures: [
      "Can range from 15 minutes to 1 hour",
      "Pickup and dropoff",
    ],
    ctaText: "Book Your Walk",
    prices: ["15 Minutes: $20", "30 Minutes: $25", "1 Hour: $35"],
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
    prices: ["Per Night: $50"],
  },
  {
    title: "Dog Sitting",
    description: [
      {
        text: "In home daycare, ranging from minimum 2 hours to maximum 12 (after 12 hours the service is considered to be boarding). Usually done in my home",
      },
      {
        text: "* Please note that pick up/drop off is not included unless a walk has already been scheduled for that day",
      },
    ],
    serviceFeatures: [
      "Minimum of one walk, depending on the length of stay",
      "Feeding (if required) and providing fresh water",
      "Play time and an abundance of cuddles",
      "Potty breaks as necessary",
      "Administering medication if required",
    ],
    ctaText: "Book Dog Sitting",
    prices: ["Starts at $20"],
  },
  {
    title: "Cat Sitting",
    description: [
      {
        text: "Because cats are territorial and sensitive to changes in their environment, cat sitting will always be done in the comfort of your own home. This is to minimize stress on your cat, as well as help nurture a bond between myself and your cat.",
      },
    ],
    serviceFeatures: [
      "Minimum of 2 visits a day, morning and evening",
      "Feeding and providing fresh water",
      "Cuddles and playtime",
      "Photo/Video updates",
      "Maintaining a fresh and clean litter box ",
      "Administering medication if required",
      "Watering your plants if necessary",
      "Collecting your mail and putting out the trash/recycling if necessary",
    ],
    ctaText: "Book Cat Sitting",
    prices: ["Per day: $50"],
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

export function Services() {
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
