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
};
