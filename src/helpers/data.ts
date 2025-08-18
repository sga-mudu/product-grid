export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  isLiked?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "Noise-cancelling wireless headphones with 30hr battery",
    image: "./public/gaara.webp",
  },
  {
    id: 2,
    name: "Reusable Water Bottles",
    price: 10.99,
    description: "Eco-friendly, insulated, often featuring modern designs or brand logos",
    image: "/gaara.webp",
  },
  {
    id: 3,
    name: "Smart LED Light Bulbs",
    price: 5.99,
    description: "App-controlled color-changing bulbs compatible with Alexa/Google Home",
    image: "/gaara.webp",
  },
  {
    id: 4,
    name: "Portable Laptop Stand ",
    price: 7.99,
    description: "Adjustable, ergonomic stands to improve posture and airflow for laptop users",
    image: "/gaara.webp",
  },
  {
    id: 5,
    name: "Skin Care Serum",
    price: 7.99,
    description: "Lightweight serums targeting hydration, anti-aging, or brightening",
    image: "/gaara.webp",
  },
  {
    id: 6,
    name: "Phone Tripod with Remote",
    price: 7.99,
    description: "Used by vloggers, travelers, or for remote meetings and selfies",
    image: "/gaara.webp",
  },
  {
    id: 7,
    name: "Minimalist Wallet",
    price: 7.99,
    description: "Slim, metal or leather wallets designed to block card skimming",
    image: "/gaara.webp",
  },
  {
    id: 8,
    name: "Pet Hair Remover Roller",
    price: 7.99,
    description: "Manual roller for sofas, carpets, or clothes—popular with pet owners",
    image: "/gaara.webp",
  },
  {
    id: 9,
    name: "Electric Milk Frother",
    price: 7.99,
    description: "Compact device for making lattes, cappuccinos, or matcha at home",
    image: "/gaara.webp",
  },
  {
    id: 10,
    name: "Fitness Resistance Bands Set",
    price: 7.99,
    description: "Color-coded bands for strength training, often sold with a carry pouch and guide",
    image: "/gaara.webp",
  },
];