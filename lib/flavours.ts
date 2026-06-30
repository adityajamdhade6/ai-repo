export type Flavour = {
  id: string;
  /** 01–05, shown as an editorial index */
  index: string;
  name: string;
  /** small kicker above the headline */
  kicker: string;
  /** the big two-line poster headline */
  headline: [string, string];
  /** one short supporting line — max one sentence */
  line: string;
  heat: number; // 0–4
  /** flavour-world background */
  bg: string;
  /** text colour that reads on bg */
  on: string;
  /** single accent used inside the pack + small marks */
  accent: string;
  /** softer tone for the lower pack body */
  wave: string;
  /** optional real product photo; drop a file in public/products */
  image?: string;
};

export const FLAVOURS: Flavour[] = [
  {
    id: "magic-masala",
    index: "01",
    name: "Magic Masala",
    kicker: "The crowd favourite",
    headline: ["Loud", "by nature."],
    line: "Dry mango, red chilli, toasted spice.",
    heat: 3,
    bg: "#D8552A",
    on: "#FCEFE2",
    accent: "#F4A93B",
    wave: "#B6431E",
  },
  {
    id: "pani-puri",
    index: "02",
    name: "Pani Puri",
    kicker: "Chaos, bottled",
    headline: ["Cool,", "then kick."],
    line: "Mint, black salt, a sour little rush.",
    heat: 2,
    bg: "#1F7A4D",
    on: "#EAF6EC",
    accent: "#A8D88E",
    wave: "#155C39",
  },
  {
    id: "zeera",
    index: "03",
    name: "Zeera",
    kicker: "The purist",
    headline: ["Nothing", "to hide."],
    line: "Toasted cumin. Sea salt. That's it.",
    heat: 1,
    bg: "#E3D4AE",
    on: "#322713",
    accent: "#A9803E",
    wave: "#CDB988",
  },
  {
    id: "methi",
    index: "04",
    name: "Methi",
    kicker: "Quietly classic",
    headline: ["A grown-up", "crunch."],
    line: "Fenugreek, ajwain, a little earth.",
    heat: 1,
    bg: "#5E6B33",
    on: "#F1F0E0",
    accent: "#C3CF84",
    wave: "#48541F",
  },
  {
    id: "schezwan",
    index: "05",
    name: "Schezwan",
    kicker: "Handle with care",
    headline: ["Plays", "with fire."],
    line: "Sichuan heat, roasted garlic, long burn.",
    heat: 4,
    bg: "#B11E26",
    on: "#FAE9E2",
    accent: "#F2895A",
    wave: "#8E141B",
  },
];
