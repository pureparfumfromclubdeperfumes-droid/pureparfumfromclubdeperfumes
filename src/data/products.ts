export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: "Designer" | "Middle Eastern" | "Decant" | "Tester";
  size: string;
  price: number;
  description: string;
};

export const products: Product[] = [
  {
    slug: "sauvage-edt",
    name: "Sauvage EDT",
    brand: "Dior",
    category: "Designer",
    size: "100ml",
    price: 8999,
    description:
      "A fresh, radiant scent with bergamot and ambroxan. One of the most popular designer fragrances worldwide.",
  },
  {
    slug: "bleu-de-chanel",
    name: "Bleu de Chanel EDP",
    brand: "Chanel",
    category: "Designer",
    size: "100ml",
    price: 10499,
    description:
      "A woody aromatic fragrance for men, known for its versatility and long-lasting sillage.",
  },
  {
    slug: "asad",
    name: "Asad",
    brand: "Lattafa",
    category: "Middle Eastern",
    size: "100ml",
    price: 2499,
    description:
      "A bold, spicy oriental fragrance inspired by luxury ouds, offering great value for money.",
  },
  {
    slug: "hawas",
    name: "Hawas",
    brand: "Rasasi",
    category: "Middle Eastern",
    size: "100ml",
    price: 2199,
    description:
      "A fresh, sporty scent with citrus and woody notes, popular for daily wear.",
  },
  {
    slug: "sauvage-decant-10ml",
    name: "Sauvage EDT (Decant)",
    brand: "Dior",
    category: "Decant",
    size: "10ml",
    price: 1299,
    description:
      "Try before you commit to a full bottle. Authentic decant drawn from a sealed original.",
  },
  {
    slug: "bleu-de-chanel-tester",
    name: "Bleu de Chanel EDP (Tester)",
    brand: "Chanel",
    category: "Tester",
    size: "100ml",
    price: 8499,
    description:
      "Same fragrance, tester packaging. Great for those who don't need retail box presentation.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
