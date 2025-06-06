import { notFound } from "next/navigation";
import { Product } from "./types";

export async function getProduct(id: string) {
  const product = sampleProductsReviews[id] as Product;
  if (!product) {
    notFound();
  }
  return product;
}

export const sampleProductsReviews: Record<string, Product> = {
  mower: {
    name: "Hagersten Street Cut",
    reviews: [
      {
        review:
          "Fantastic barber! Got a sharp haircut and beard trim. The staff are friendly and really listen to what you want. The shop is clean and has a great vibe. Highly recommend if you're in Hagersten.",
        authorName: "Erik S.",
        date: "2024-05-15",
        stars: 5,
      },
      {
        review:
          "Very professional service and attention to detail. I appreciated the advice on styling and products. Will definitely come back next month.",
        authorName: "Anna L.",
        date: "2024-04-28",
        stars: 5,
      },
      {
        review:
          "Walked in without an appointment and was seen quickly. The barber was skilled and friendly. Prices are reasonable for Stockholm. Great local spot!",
        authorName: "Jonas M.",
        date: "2025-04-10",
        stars: 4,
      },
      {
        review:
          "My son and I both got haircuts here. The barber was patient and did a great job with my son's hair. Convenient location in Hagersten.",
        authorName: "Maria P.",
        date: "2025-03-20",
        stars: 5,
      },
    ],
  },
  ecoBright: {
    name: "Smart LED",
    reviews: [
      {
        review:
          "The EcoBright 360 didn't live up to its promise of lasting 20,000 hours. Mine burnt out in less than 6 months with moderate use. Disappointed.",
        authorName: "Jenna M.",
        date: "2024-01-15",
        stars: 2,
      },
      {
        review:
          "While the energy savings are noticeable, the light emitted is a bit too harsh for my living room. Not quite the warm glow I was hoping for.",
        authorName: "Gregory F.",
        date: "2024-01-20",
        stars: 3,
      },
      {
        review:
          "Decent bulb for the price, but the smart features are a bit clunky to use. Sometimes it doesn't respond to the app as quickly as I'd like.",
        authorName: "Samantha K.",
        date: "2024-02-05",
        stars: 3,
      },
      {
        review:
          "The app setup was a breeze, and I love being able to control the lighting from anywhere in the house. However, the bulb does not always connect to WiFi on the first try.",
        authorName: "Alex P.",
        date: "2024-02-10",
        stars: 4,
      },
      {
        review:
          "This bulb is great for its price point. Energy-efficient and mostly reliable. Just wish the brightness was a tad higher for outdoor use.",
        authorName: "Michelle T.",
        date: "2024-02-12",
        stars: 3,
      },
      {
        review:
          "The connectivity with my smart home devices is hit or miss, which is frustrating. I expected better integration for a 'smart' bulb.",
        authorName: "Leonard W.",
        date: "2024-02-14",
        stars: 2,
      },
      {
        review:
          "Fantastic product! The EcoBright 360 has completely transformed the ambiance of my home. The scheduling feature is perfect for my routine.",
        authorName: "Isabella R.",
        date: "2024-02-15",
        stars: 5,
      },
      {
        review:
          "Very disappointed. The bulb flickers occasionally, and resetting it doesn't seem to fix the issue. Not what I expected for the price.",
        authorName: "Derek S.",
        date: "2024-02-16",
        stars: 1,
      },
      {
        review:
          "I'm impressed with the energy efficiency and how easy it was to install and use. A great addition to my smart home setup.",
        authorName: "Nora Q.",
        date: "2024-02-17",
        stars: 4,
      },
      {
        review:
          "Light quality is superb, and the dimming feature works like a charm. Makes for a cozy atmosphere in the evenings. A bit pricey, but worth it.",
        authorName: "Carlos D.",
        date: "2024-02-18",
        stars: 4,
      },
    ],
  },
  ecoSmart: {
    name: "smbCloud",
    reviews: [
      {
        review:
          "Absolutely love the EcoSmart ECO 11! It was surprisingly easy to install and it's been a game changer for our utility bills. The compact size is perfect for our small home, and we've enjoyed endless hot water without any issues. Highly recommend for anyone looking to save on energy costs.",
        authorName: "Jessica M.",
        date: "2024-01-15",
        stars: 5,
      },
      {
        review:
          "The EcoSmart smbCloud is fantastic. I noticed a significant decrease in my electric bill, and it's great not having to wait for water to heat up. The temperature control is precise and easy to adjust. Great product for the environmentally conscious homeowner.",
        authorName: "Brian K.",
        date: "2024-02-01",
        stars: 5,
      },
      {
        review:
          "I was a bit skeptical about switching to a smbCloud, but the EcoSmart ECO 11 has exceeded my expectations. Installation was straightforward, and the performance has been flawless. It's efficient, saves space, and provides hot water on demand. What more could you ask for?",
        authorName: "Samantha L.",
        date: "2023-12-20",
        stars: 5,
      },
      {
        review:
          "This water heater is a solid choice. It heats water quickly and is much more efficient than our old tank model. We've seen a drop in our electricity use, and I appreciate the modern, compact design. It fits perfectly in our utility closet.",
        authorName: "Derek H.",
        date: "2024-01-28",
        stars: 4,
      },
      {
        review:
          "I've had the EcoSmart ECO 11 for a few months now, and it's been pretty good. The installation process was a bit of a hassle, but once set up, it's been working well. The temperature consistency is better than I expected, though I wish it were a little faster in heating up.",
        authorName: "Clara N.",
        date: "2023-11-05",
        stars: 4,
      },
      {
        review:
          "The EcoSmart ECO 11 is a decent upgrade from a traditional water heater. The energy savings are noticeable, and it's convenient to have hot water on demand. However, the initial cost and installation might be a deterrent for some. Overall, a good investment if you're planning to stay in your home for a while.",
        authorName: "Alex F.",
        date: "2024-02-10",
        stars: 4,
      },
      {
        review:
          "I was excited about the energy efficiency of the EcoSmart ECO 11, and it hasn't disappointed. It does take a bit of getting used to, especially figuring out the right temperature settings, but once you do, it's great. Saves space and money in the long run.",
        authorName: "Nina P.",
        date: "2023-12-01",
        stars: 4,
      },
      {
        review:
          "The EcoSmart ECO 11 is a game changer. My water heating bills have plummeted, and the space savings is a huge plus. It's incredibly efficient, and I've had no issues with water temperature. Definitely one of the best home improvements I've made.",
        authorName: "Mark S.",
        date: "2024-01-10",
        stars: 5,
      },
      {
        review:
          "I'm thrilled with my purchase of the EcoSmart ECO 11. It's environmentally friendly, which is very important to me, and the performance has been outstanding. Hot water is always available when I need it, and the unit itself is sleek and unobtrusive.",
        authorName: "Lori D.",
        date: "2023-11-15",
        stars: 5,
      },
      {
        review:
          "The EcoSmart ECO 11 smbCloud is incredible. Installation was easier than anticipated, and the impact on our energy bill was noticeable right away. The consistent hot water supply is exactly what our large family needed. Highly recommend this to anyone looking to make the switch to tankless.",
        authorName: "Tom G.",
        date: "2024-02-05",
        stars: 5,
      },
    ],
  },
};
