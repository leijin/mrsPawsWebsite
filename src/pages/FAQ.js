import * as React from "react";
import {
  Navbar,
  Footer,
  InsidePageBanner,
  PageTitle,
  FAQMainSection,
} from "../components";

const generalFAQs = [
  {
    question: "What is your vaccination policy?",
    answer: {
      text: `Clients must show proof of vaccination or titre testing for Bordatella, Rabies, and DHPP. 
    Clients are also strongly encouraged to have their pets on preventative flea and tick medication year round.`,
    },
  },
  {
    question: "What is your cancellation policy?",
    answer: {
      text: "Clients may cancel or reschedule a walk with 24 hours notice. Last minute cancellations are non-refundable.",
    },
  },
  {
    question: "Do you accept intact dogs? (Not spayed/neutered)",
    answer: {
      text: "We usually will not accept intact dogs for group hikes, however private walks and boarding are on a case-by-case basis. Please contact us for more information.",
    },
  },
  {
    question: "Are you Pet First Aid certified?",
    answer: { text: "Yes, I am certified with Walks N’ Wags Pet First Aid" },
  },
  {
    question: "Do you only take care of dogs?",
    answer: {
      text: "No, I can also care for cats and small animals! Please contact me for more information.",
    },
  },
  {
    question: "Do you use a special software to manage your business?",
    answer: {
      text: "Yes! We use Time To Pet, which is a software developed for pet care business owners. It manages scheduling, pet profiles, invoicing, and has a Client Portal. In the Client Portal, you can set up your dogs’ profile, request services, put your credit card on file, and so much more!",
    },
  },
];

const dogWalkingFAQs = [
  {
    question:
      "What is the process for getting my dog registered for dog walks?",
    answer: {
      paragraphs: [
        `Once you’ve filled out our client intake form and provided proof of vaccinations, the next step is a meet-and-greet and assessment!`,
        `During the meet-and-greet, we will go over all necessary information required for our services. I’ll greet your dog and spend some time giving pets and love, so there’s no stranger danger on their first hike! After the meet-and-greet, I will take your dog on their inaugural hike and assess how they do in the van and with a small pack of calm friends. If everything goes smoothly, then your pup will officially be a member of the Pack!`,
      ],
    },
  },
  {
    question:
      "What requirements does my dog need to meet to join the Group Hikes?",
    answer: {
      list: [
        "Spayed/Neutered",
        "Licensed with the city",
        "Up to date on vaccinations",
        " Good recall and can play well with the pack",
        "No aggression or flightiness",
        "Must be fit and healthy and able to keep up with the pack",
      ],
    },
  },
  {
    question: "Where do you walk my dog?",
    answer: {
      text: "We go to various off-leash friendly parks and trails in Burnaby, New Westminster, and occasionally Vancouver. Our pack usually can be spotted in Robert Burnaby Park, Confederation Park, Everett Crowley Park, Barnet Marine Park, and many other places!",
    },
  },
  {
    question: "Do I need to be home when you pick up and drop my dogs off? ",
    answer: {
      text: "No, aside from the initial meet-and-greet, you don’t have to be home when it's time for pick up/drop off. You can give me a copy of your house keys or your lock code and I will safely pick and drop your dog off for you. I keep client keys in a lockbox in my home when they are not being used, and I have them clearly labelled and organized. Should you wish to cancel services, I will return your keys to you immediately.",
    },
  },
  {
    question: "How does invoicing work?",
    answer: {
      text: "Invoices are due at the beginning of every month for the entire month. Invoices are sent out in the last week of every month via email. Payments can be made through cash, e-transfer, or credit card on Time To Pet.",
    },
  },
];

export function FAQ() {
  return (
    <>
      <Navbar />
      <InsidePageBanner />
      <PageTitle title="FAQ" />
      <FAQMainSection header="General Questions" faqs={generalFAQs} />
      <FAQMainSection header="Dog Walking Questions" faqs={dogWalkingFAQs} />
      <Footer />
    </>
  );
}

export default FAQ;
