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
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=800&fit=crop&q=80"
    ],
    description: "Relaxed-fit linen blend t-shirt in sage. Breathable, effortless.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Oversized Knit Polo",
    price: 1899,
    category: "tops",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop&q=80"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&q=80"
    ],
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

// ─── CORPORATE GIFTING PRODUCTS ───
export const corporateGiftingProducts = [
  {
    id: "cg-1",
    name: "Branded Notebook Set",
    price: 499,
    category: "corporate-gifting",
    type: "corporate",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=800&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=800&fit=crop&q=80"
    ],
    description: "Premium hardbound notebooks with custom branding. Ideal for conferences and onboarding kits.",
    minQty: 25,
  },
  {
    id: "cg-2",
    name: "Executive Pen & Card Holder",
    price: 899,
    category: "corporate-gifting",
    type: "corporate",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&h=800&fit=crop&q=80",
    description: "Sleek metal pen paired with a leather cardholder. A sophisticated duo for professionals.",
    minQty: 10,
  },
  {
    id: "cg-3",
    name: "Eco Bamboo Desk Organiser",
    price: 749,
    category: "corporate-gifting",
    type: "corporate",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=800&fit=crop&q=80",
    description: "Sustainable bamboo organiser with phone stand. Your brand, the eco-friendly way.",
    minQty: 15,
  },
  {
    id: "cg-4",
    name: "Premium Gift Hamper Box",
    price: 1999,
    category: "corporate-gifting",
    type: "corporate",
    image: "https://images.unsplash.com/photo-1607469256872-48074e807b0f?w=600&h=800&fit=crop&q=80",
    description: "Curated hamper with artisan snacks, candle & branded packaging. Festive season favourite.",
    minQty: 5,
  },
  {
    id: "cg-5",
    name: "Custom Logo Tote Bag",
    price: 349,
    category: "corporate-gifting",
    type: "corporate",
    image: "https://images.unsplash.com/photo-1597633425046-08f5110420b5?w=600&h=800&fit=crop&q=80",
    description: "Heavy-duty canvas tote with screen-printed company logo. Events & trade shows essential.",
    minQty: 50,
  },
  {
    id: "cg-6",
    name: "Wireless Charger Pad",
    price: 1299,
    category: "corporate-gifting",
    type: "corporate",
    image: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=600&h=800&fit=crop&q=80",
    description: "Sleek wireless charging pad with engraved branding. Tech-savvy gifting at its finest.",
    minQty: 10,
  },
];

// ─── PERSONAL GIFTING PRODUCTS ───
export const personalGiftingProducts = [
  {
    id: "pg-1",
    name: "Custom Name Keychain",
    price: 299,
    category: "personal-gifting",
    type: "personal",
    image: "https://images.unsplash.com/photo-1622560480654-996b3d3066d7?w=600&h=800&fit=crop&q=80",
    description: "Laser-cut stainless steel keychain with your name or initials. The perfect everyday accessory.",
    customPlaceholder: "Enter name or initials",
  },
  {
    id: "pg-2",
    name: "Engraved Wooden Photo Frame",
    price: 799,
    category: "personal-gifting",
    type: "personal",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&h=800&fit=crop&q=80",
    description: "Handcrafted wooden frame with custom engraved message. Cherish moments beautifully.",
    customPlaceholder: "Enter message to engrave",
  },
  {
    id: "pg-3",
    name: "Personalised Scented Candle",
    price: 599,
    category: "personal-gifting",
    type: "personal",
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=800&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&h=800&fit=crop&q=80"
    ],
    description: "Soy wax candle in a ceramic jar with a custom printed label. Warmth with a personal touch.",
    customPlaceholder: "Enter label text (e.g. a name or quote)",
  },
  {
    id: "pg-4",
    name: "Custom Embroidered Pouch",
    price: 449,
    category: "personal-gifting",
    type: "personal",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop&q=80",
    description: "Cotton canvas pouch with hand-embroidered initials. A thoughtful everyday essential.",
    customPlaceholder: "Enter initials (max 3 letters)",
  },
  {
    id: "pg-5",
    name: "Name Necklace — Gold Plated",
    price: 999,
    category: "personal-gifting",
    type: "personal",
    image: "https://images.unsplash.com/photo-1515562141589-67f0d569b6c4?w=600&h=800&fit=crop&q=80",
    description: "Delicate gold-plated necklace with a custom name pendant. Elegance, personalised.",
    customPlaceholder: "Enter name for pendant",
  },
  {
    id: "pg-6",
    name: "Custom Illustration Print",
    price: 1299,
    category: "personal-gifting",
    type: "personal",
    image: "https://images.unsplash.com/photo-1579762715118-a6f1d789a8ce?w=600&h=800&fit=crop&q=80",
    description: "Hand-drawn digital illustration printed on archival paper. Send a photo, get art.",
    customPlaceholder: "Describe what you'd like illustrated",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "tops", label: "Tops" },
  { id: "bottoms", label: "Bottoms" },
  { id: "dresses", label: "Dresses" },
  { id: "accessories", label: "Accessories" },
];

// Alias for clarity in the new category hierarchy
export const clothingSubcategories = categories;

export const mainCategories = [
  {
    id: "clothing",
    label: "Clothing",
    tagline: "Curated for the effortlessly cool",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=1200&fit=crop&q=80",
  },
  {
    id: "corporate-gifting",
    label: "Corporate Gifting",
    tagline: "Elevate your professional relationships",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=1200&fit=crop&q=80",
  },
  {
    id: "personal-gifting",
    label: "Personal Gifting",
    tagline: "Thoughtful gifts for every occasion",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238f7e1?w=800&h=1200&fit=crop&q=80",
  },
];
