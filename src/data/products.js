// Olea Collection — Product Catalogue Data
// Using picsum.photos for high-quality placeholder images

const products = [
  // ─── TOPS ───
  {
    id: 1,
    name: "Linen Blend Tee",
    price: 1299,
    category: "tops",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&q=80",
    description: "Relaxed-fit linen blend t-shirt in sage. Breathable, effortless.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Oversized Knit Polo",
    price: 1899,
    category: "tops",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop&q=80",
    description: "Chunky knit polo with dropped shoulders. Cozy meets cool.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Cropped Henley",
    price: 999,
    category: "tops",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop&q=80",
    description: "Ribbed cropped henley in cream. The everyday essential.",
    sizes: ["S", "M", "L", "XL"],
  },

  // ─── BOTTOMS ───
  {
    id: 4,
    name: "Wide Leg Trousers",
    price: 2199,
    category: "bottoms",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&q=80",
    description: "High-rise wide leg trousers in olive. Flowy and flattering.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Cargo Joggers",
    price: 1799,
    category: "bottoms",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop&q=80",
    description: "Relaxed cargo joggers with elastic cuffs. Street-ready.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Pleated Mini Skirt",
    price: 1499,
    category: "bottoms",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj9a?w=600&h=800&fit=crop&q=80",
    description: "Pleated mini skirt in warm brown. Retro with a twist.",
    sizes: ["S", "M", "L", "XL"],
  },

  // ─── DRESSES ───
  {
    id: 7,
    name: "Slip Midi Dress",
    price: 2799,
    category: "dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop&q=80",
    description: "Satin slip midi dress in champagne. Elegance, simplified.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Linen Shirt Dress",
    price: 2499,
    category: "dresses",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?w=600&h=800&fit=crop&q=80",
    description: "Belted linen shirt dress in olive. From brunch to sunset.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "Knit Bodycon Dress",
    price: 1999,
    category: "dresses",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop&q=80",
    description: "Ribbed knit bodycon in earth brown. Figure-hugging perfection.",
    sizes: ["S", "M", "L", "XL"],
  },

  // ─── ACCESSORIES ───
  {
    id: 10,
    name: "Woven Tote Bag",
    price: 1699,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop&q=80",
    description: "Hand-woven tote in natural cream. Your new everyday carry.",
    sizes: ["One Size"],
  },
  {
    id: 11,
    name: "Silk Hair Scarf",
    price: 699,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=800&fit=crop&q=80",
    description: "Printed silk scarf in olive tones. Tie it any way you like.",
    sizes: ["One Size"],
  },
  {
    id: 12,
    name: "Chunky Hoop Earrings",
    price: 599,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop&q=80",
    description: "Gold-tone chunky hoops. The finishing touch.",
    sizes: ["One Size"],
  },
];

export default products;

export const categories = [
  { id: "all", label: "All" },
  { id: "tops", label: "Tops" },
  { id: "bottoms", label: "Bottoms" },
  { id: "dresses", label: "Dresses" },
  { id: "accessories", label: "Accessories" },
];
