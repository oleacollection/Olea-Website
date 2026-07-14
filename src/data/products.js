// Olea Collection — Product Catalogue Data
// Using picsum.photos for high-quality placeholder images

const products = [
  // ─── TOPS ───
  {
    id: 1,
    name: "Money Is The Motive",
    price: 799,
    category: "tshirts",
    image: '/catalogue/1_1.jpeg',
    images: [
      "/catalogue/1_1.jpeg",
      "/catalogue/1_2.jpeg",
      "/catalogue/1_3.jpeg"
    ],
    description: "240GSM Acid Wash Premium Oversized Tee",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Pink Phantom",
    price: 799,
    category: "tshirts",
    image: "/catalogue/2_1.jpeg",
    images: [
      "/catalogue/2_1.jpeg",
      "/catalogue/2_2.jpeg",
      "/catalogue/2_3.jpeg"
    ],
    description: "240GSM Acid Wash Premium Oversized Tee",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Marlboro Red",
    price: 699,
    category: "tshirts",
    image: "/catalogue/3_1.jpeg",
    images: [
      "/catalogue/3_1.jpeg",
      "/catalogue/3_2.jpeg",
      "/catalogue/3_3.jpeg",
    ],
    description: "240GSM White premium oversized tee with edgy Marlboro design built for the OGs",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "404: Love Found",
    price: 699,
    category: "tshirts",
    image: "/catalogue/8_1.jpeg",
    images: [
      "/catalogue/8_1.jpeg",
      "/catalogue/8_2.jpeg",
      "/catalogue/8_3.jpeg",
    ],
    description: "240GSM Olive premium oversized tee made for mixed signals and questionable decisions",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "God's Plan Tee",
    price: 999,
    category: "tshirts",
    image: "/catalogue/5_1.jpeg",
    images: [
      "/catalogue/5_1.jpeg",
      "/catalogue/5_2.jpeg"
    ],
    description: "240GSM Fullsleeve tshirt, light and breathable waffle fabric, cool screen-printed design both on front and sleeves",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Waffle Tank",
    price: 499,
    category: "tshirts",
    image: "/catalogue/6_1.jpeg",
    images: [
      "/catalogue/6_1.jpeg",
      "/catalogue/6_2.jpeg",
    ],
    description: "240GSM Cutsleeve tank, light and breathable waffle fabric",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Icarus' Tee",
    price: 999,
    category: "tshirts",
    image: "/catalogue/7_1.jpeg",
    images: [
      "/catalogue/7_1.jpeg",
      "/catalogue/7_2.jpeg"
    ],
    description: "240GSM Fullsleeve tshirt, light and breathable waffle fabric, cool screen-printed design both on front and sleeves",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Solid Tee Pair",
    price: 599,
    category: "tshirts",
    image: "/catalogue/4_1.jpeg",
    images: [
      "/catalogue/4_1.jpeg",
      "/catalogue/4_2.jpeg",
    ],
    description: "Get 2 oversized solid tees at just ₹ 599",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "Customized Oversized Tshirt",
    price: 799,
    category: "tshirts",
    image: "/catalogue/9_1.jpeg",
    images: [
      "/catalogue/9_1.jpeg",
    ],
    description: "Create an oversized tee that’s 100% you. Add your own text, graphics, memories, inside jokes, or whatever lives rent-free in your head",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 10,
    name: "Women's Classic Tank Top",
    price: 399,
    category: "tops",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=800&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=800&fit=crop&q=80"
    ],
    description: "[PLACEHOLDER] Description for women's classic tank top.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 11,
    name: "Women's Ribbed Tank",
    price: 499,
    category: "tops",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&q=80"
    ],
    description: "[PLACEHOLDER] Description for women's ribbed tank top.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 12,
    name: "Women's Crop Tank Top",
    price: 599,
    category: "tops",
    image: "https://images.unsplash.com/photo-1509180775533-3d758066bb73?w=600&h=800&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1509180775533-3d758066bb73?w=600&h=800&fit=crop&q=80"
    ],
    description: "[PLACEHOLDER] Description for women's crop tank top.",
    sizes: ["S", "M", "L"],
  },
]
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
  { id: "tshirts", label: "T-shirts" },
  { id: "bottoms", label: "Bottoms" },
  { id: "dresses", label: "Dresses" },
  { id: "accessories", label: "Accessories" },
  { id: "tops", label: "Tops" },
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
