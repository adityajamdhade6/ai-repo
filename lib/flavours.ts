export type Ingredient = "chilli" | "coriander" | "mint" | "puri" | "lime" | "cumin" | "methi" | "peppercorn" | "garlic";

export type Flavour = {
  id: string;
  name: string;
  /** short two-word kicker shown above the name */
  kicker: string;
  /** one-line minimal description */
  line: string;
  /** longer support line */
  blurb: string;
  heat: number; // 0-4
  price: number;
  /** main background colour for the section */
  bg: string;
  /** ink/text colour that reads on bg */
  on: string;
  /** the coin / pack accent colour */
  accent: string;
  /** secondary colour for the wavy pattern */
  wave: string;
  /** ingredients that float around the pack */
  ingredients: Ingredient[];
  /** optional real product photo: drop a file in public/products and set the path */
  image?: string;
};

export const FLAVOURS: Flavour[] = [
  {
    id: "magic-masala",
    name: "Magic Masala",
    kicker: "The Crowd Favourite",
    line: "Bold, tangy, unmistakably street.",
    blurb: "A loud blend of dry mango, red chilli and toasted spice — the flavour everyone reaches for first.",
    heat: 3,
    price: 180,
    bg: "#E8612C",
    on: "#FFF7EE",
    accent: "#FFC04D",
    wave: "#C94A1B",
    ingredients: ["chilli", "coriander", "cumin"],
  },
  {
    id: "pani-puri",
    name: "Pani Puri",
    kicker: "Chaos, Bottled",
    line: "Minty, sour, impossibly fresh.",
    blurb: "That first-bite pani-puri rush — pudina, black salt and tang — rebuilt as a crisp little coin.",
    heat: 2,
    price: 180,
    bg: "#2F9E5B",
    on: "#F2FBF4",
    accent: "#BFE9C9",
    wave: "#247A47",
    ingredients: ["mint", "puri", "lime"],
  },
  {
    id: "zeera",
    name: "Zeera",
    kicker: "The Purist",
    line: "Toasted cumin. Sea salt. Nothing to hide.",
    blurb: "Stripped back to the roast itself — warm jeera and flake salt, the way a khakhra is meant to taste.",
    heat: 1,
    price: 170,
    bg: "#E4D2A6",
    on: "#2A2212",
    accent: "#A9853F",
    wave: "#CDB67F",
    ingredients: ["cumin", "coriander"],
  },
  {
    id: "methi",
    name: "Methi",
    kicker: "Quietly Classic",
    line: "Fenugreek, ajwain, earth.",
    blurb: "Hand-folded methi leaf and a pinch of ajwain — herbal, grown-up, and the most traditional of the lot.",
    heat: 1,
    price: 170,
    bg: "#6E7C3A",
    on: "#F6F8EC",
    accent: "#C7D88B",
    wave: "#56612C",
    ingredients: ["methi", "cumin"],
  },
  {
    id: "schezwan",
    name: "Schezwan",
    kicker: "Handle With Care",
    line: "Fiery, garlicky, gloriously loud.",
    blurb: "Sichuan-style heat with roasted garlic and a long burn — the coin people warn each other about.",
    heat: 4,
    price: 190,
    bg: "#D62828",
    on: "#FFF1F1",
    accent: "#FF9E6B",
    wave: "#A81D1D",
    ingredients: ["chilli", "garlic", "peppercorn"],
  },
];
