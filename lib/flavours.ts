export type Ingredient = "chilli" | "coriander" | "mint" | "puri" | "lime" | "cumin" | "methi" | "peppercorn" | "garlic";

export type Flavour = {
  id: string;
  name: string;
  /** small label shown above the name */
  kicker: string;
  /** one-sentence description */
  line: string;
  heat: number; // 0-4
  price: number;
  /** section background colour */
  bg: string;
  /** text/ink colour that reads on bg */
  on: string;
  /** secondary tone-on-tone shape colour */
  tone: string;
  /** ingredients that float around the pack */
  ingredients: Ingredient[];
  /** optional real product photo: drop a file in public/products and set the path */
  image?: string;
};

export const FLAVOURS: Flavour[] = [
  {
    id: "magic-masala",
    name: "magic masala",
    kicker: "the classic",
    line: "Tangy. Spiced. The one that started it all.",
    heat: 3,
    price: 99,
    bg: "#FF1E63",
    on: "#111111",
    tone: "#E0154F",
    ingredients: ["chilli", "coriander", "cumin"],
  },
  {
    id: "pani-puri",
    name: "pani puri",
    kicker: "street favourite",
    line: "Sour, minty, ridiculously moreish.",
    heat: 2,
    price: 99,
    bg: "#FF6A00",
    on: "#111111",
    tone: "#E65E00",
    ingredients: ["mint", "puri", "lime"],
  },
  {
    id: "jeera",
    name: "jeera",
    kicker: "the purist",
    line: "Toasted cumin. Sea salt. Nothing extra.",
    heat: 1,
    price: 89,
    bg: "#FFE600",
    on: "#111111",
    tone: "#E6CE00",
    ingredients: ["cumin", "coriander"],
  },
  {
    id: "methi",
    name: "methi",
    kicker: "quietly bold",
    line: "Earthy fenugreek with a peppery kick.",
    heat: 1,
    price: 89,
    bg: "#0B9D3A",
    on: "#F7F3EB",
    tone: "#098A33",
    ingredients: ["methi", "cumin"],
  },
  {
    id: "schezwan",
    name: "schezwan",
    kicker: "handle with care",
    line: "Fiery, garlicky, gloriously loud.",
    heat: 4,
    price: 99,
    bg: "#FF1D25",
    on: "#F7F3EB",
    tone: "#E4141C",
    ingredients: ["chilli", "garlic", "peppercorn"],
  },
];
