import shirtsImg from "@/assets/cat-shirts.jpg";
import trousersImg from "@/assets/cat-trousers.jpg";
import shoesImg from "@/assets/cat-shoes.jpg";
import beltsImg from "@/assets/cat-belts.jpg";
import capsImg from "@/assets/cat-caps.jpg";
import bagsImg from "@/assets/cat-bags.jpg";

export type CategorySlug = "shirts" | "trousers" | "shoes" | "belts" | "caps" | "bags";

export type Category = {
  slug: CategorySlug;
  name: string;
  short: string;
  blurb: string;
  image: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "shirts",
    name: "Men's Shirts",
    short: "Shirts",
    blurb: "Precision-cut shirting in crisp cotton — built for boardrooms and long evenings alike.",
    image: shirtsImg,
  },
  {
    slug: "trousers",
    name: "Trousers",
    short: "Trousers",
    blurb: "Tailored lines, considered drape, and fabrics that hold their shape all day.",
    image: trousersImg,
  },
  {
    slug: "shoes",
    name: "Shoes",
    short: "Shoes",
    blurb: "Hand-finished leather footwear designed to age beautifully with every wear.",
    image: shoesImg,
  },
  {
    slug: "belts",
    name: "Belts",
    short: "Belts",
    blurb: "Full-grain leather belts with quiet hardware — the detail that finishes a look.",
    image: beltsImg,
  },
  {
    slug: "caps",
    name: "Caps",
    short: "Caps",
    blurb: "Structured, logo-light headwear for the days style should feel effortless.",
    image: capsImg,
  },
  {
    slug: "bags",
    name: "Bags",
    short: "Bags",
    blurb: "Carry pieces made for travel, work, and everything between — refined, never loud.",
    image: bagsImg,
  },
];

export type Product = {
  id: string;
  name: string;
  category: CategorySlug;
  price: number;
  compareAt?: number;
  image: string;
  badge?: "New" | "Best Seller" | "Limited";
  colors: string[];
  sizes: string[];
  description: string;
  details: string[];
};

const APPAREL_SIZES = ["S", "M", "L", "XL", "XXL"];
const WAIST_SIZES = ["30", "32", "34", "36", "38"];
const SHOE_SIZES = ["40", "41", "42", "43", "44", "45"];
const BELT_SIZES = ["32", "34", "36", "38", "40"];
const ONE_SIZE = ["One Size"];

function build(
  id: string,
  name: string,
  category: CategorySlug,
  price: number,
  colors: string[],
  sizes: string[],
  description: string,
  extra: Partial<Product> = {},
): Product {
  const image = CATEGORIES.find((c) => c.slug === category)!.image;
  return {
    id,
    name,
    category,
    price,
    image,
    colors,
    sizes,
    description,
    details: [
      "Premium materials, responsibly sourced",
      "Designed in-house by ISMAILIFY",
      "Free delivery on orders over $150",
      "30-day easy returns",
    ],
    ...extra,
  };
}

export const PRODUCTS: Product[] = [
  build(
    "signature-oxford-shirt",
    "Signature Oxford Shirt",
    "shirts",
    89,
    ["White", "Navy"],
    APPAREL_SIZES,
    "A refined oxford cut with a clean collar roll and mother-of-pearl buttons. The everyday shirt, elevated.",
    { badge: "Best Seller", compareAt: 110 },
  ),
  build(
    "midnight-poplin-shirt",
    "Midnight Poplin Shirt",
    "shirts",
    95,
    ["Navy", "White"],
    APPAREL_SIZES,
    "Smooth poplin in deep navy with a sharp, slim silhouette that photographs beautifully.",
    { badge: "New" },
  ),
  build(
    "ivory-linen-shirt",
    "Ivory Linen Shirt",
    "shirts",
    99,
    ["White"],
    APPAREL_SIZES,
    "Breathable linen with a relaxed fall — warm-weather tailoring without the stiffness.",
  ),
  build(
    "violet-cuff-dress-shirt",
    "Violet Cuff Dress Shirt",
    "shirts",
    115,
    ["White", "Violet"],
    APPAREL_SIZES,
    "A crisp dress shirt finished with a discreet violet cuff lining — a signal, not a statement.",
    { badge: "Limited" },
  ),

  build(
    "tailored-navy-trouser",
    "Tailored Navy Trouser",
    "trousers",
    129,
    ["Navy"],
    WAIST_SIZES,
    "A clean-front trouser with a tapered leg and structured waistband that keeps its line all day.",
    { badge: "Best Seller" },
  ),
  build(
    "pleated-wool-trouser",
    "Pleated Wool Trouser",
    "trousers",
    149,
    ["Navy", "Charcoal"],
    WAIST_SIZES,
    "Single-pleat wool with a fluid drape — traditional craft, contemporary proportions.",
  ),
  build(
    "stretch-chino-trouser",
    "Stretch Chino Trouser",
    "trousers",
    109,
    ["Navy", "Stone"],
    WAIST_SIZES,
    "Comfort-stretch cotton twill cut for movement, from commute to weekend.",
    { badge: "New" },
  ),
  build(
    "evening-tuxedo-trouser",
    "Evening Tuxedo Trouser",
    "trousers",
    169,
    ["Navy"],
    WAIST_SIZES,
    "A satin-taped evening trouser built for occasions that deserve the extra care.",
    { badge: "Limited", compareAt: 199 },
  ),

  build(
    "classic-derby-shoe",
    "Classic Derby Shoe",
    "shoes",
    219,
    ["Black", "Brown"],
    SHOE_SIZES,
    "Hand-finished leather derby with a slim last and leather-lined comfort footbed.",
    { badge: "Best Seller" },
  ),
  build(
    "oxford-cap-toe-shoe",
    "Oxford Cap-Toe Shoe",
    "shoes",
    249,
    ["Black"],
    SHOE_SIZES,
    "The formal standard: closed lacing, sharp cap toe, and a polish that only deepens with time.",
  ),
  build(
    "leather-loafer",
    "Leather Loafer",
    "shoes",
    199,
    ["Brown", "Black"],
    SHOE_SIZES,
    "An easy slip-on with a softened apron and flexible sole — refinement without effort.",
    { badge: "New" },
  ),
  build(
    "minimal-court-sneaker",
    "Minimal Court Sneaker",
    "shoes",
    179,
    ["White", "Navy"],
    SHOE_SIZES,
    "A stripped-back leather sneaker designed to sit comfortably beside tailoring.",
  ),

  build(
    "full-grain-dress-belt",
    "Full-Grain Dress Belt",
    "belts",
    69,
    ["Brown", "Black"],
    BELT_SIZES,
    "Full-grain leather with a hand-burnished edge and a slim polished buckle.",
    { badge: "Best Seller" },
  ),
  build(
    "woven-leather-belt",
    "Woven Leather Belt",
    "belts",
    79,
    ["Brown"],
    BELT_SIZES,
    "A woven strap that adds texture to relaxed tailoring and denim alike.",
  ),
  build(
    "reversible-city-belt",
    "Reversible City Belt",
    "belts",
    85,
    ["Black", "Brown"],
    BELT_SIZES,
    "Two finishes, one belt — a rotating buckle switches from black to brown in seconds.",
    { badge: "New" },
  ),
  build(
    "violet-edge-belt",
    "Violet Edge Belt",
    "belts",
    89,
    ["Black", "Violet"],
    BELT_SIZES,
    "A black leather belt with a painted violet edge — the ISMAILIFY signature in miniature.",
    { badge: "Limited" },
  ),

  build(
    "navy-structured-cap",
    "Navy Structured Cap",
    "caps",
    45,
    ["Navy"],
    ONE_SIZE,
    "Washed cotton twill with a pre-curved brim and adjustable metal clasp.",
    { badge: "Best Seller" },
  ),
  build(
    "monogram-cotton-cap",
    "Monogram Cotton Cap",
    "caps",
    49,
    ["Navy", "White"],
    ONE_SIZE,
    "A quiet tonal monogram at the front panel — visible only up close.",
  ),
  build(
    "everyday-canvas-cap",
    "Everyday Canvas Cap",
    "caps",
    39,
    ["Navy", "Stone"],
    ONE_SIZE,
    "Lightweight canvas built for daily wear, with a soft unstructured crown.",
    { badge: "New" },
  ),
  build(
    "night-violet-cap",
    "Night Violet Cap",
    "caps",
    55,
    ["Violet", "Navy"],
    ONE_SIZE,
    "Deep violet twill with tonal stitching — a limited seasonal colourway.",
    { badge: "Limited" },
  ),

  build(
    "leather-weekender-bag",
    "Leather Weekender Bag",
    "bags",
    329,
    ["Navy", "Brown"],
    ONE_SIZE,
    "A structured travel bag with reinforced handles, a wide opening, and a detachable strap.",
    { badge: "Best Seller", compareAt: 379 },
  ),
  build(
    "city-tote-bag",
    "City Tote Bag",
    "bags",
    229,
    ["Navy", "Black"],
    ONE_SIZE,
    "A clean-lined tote sized for a laptop, documents, and the rest of the day.",
  ),
  build(
    "slim-messenger-bag",
    "Slim Messenger Bag",
    "bags",
    199,
    ["Navy"],
    ONE_SIZE,
    "A low-profile crossbody with an organised interior and a magnetic flap.",
    { badge: "New" },
  ),
  build(
    "executive-briefcase",
    "Executive Briefcase",
    "bags",
    389,
    ["Black", "Navy"],
    ONE_SIZE,
    "A formal briefcase in polished leather with a padded technology sleeve.",
    { badge: "Limited" },
  ),
];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const byCategory = (slug: string) => PRODUCTS.filter((p) => p.category === slug);
export const byBadge = (badge: Product["badge"]) => PRODUCTS.filter((p) => p.badge === badge);
