import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import FlavourSection from "@/components/FlavourSection";
import Interstitial from "@/components/Interstitial";
import BrandStory from "@/components/BrandStory";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import { FLAVOURS } from "@/lib/flavours";

// quiet lines that sit between the flavour worlds
const BREATHERS = [
  "Thin. Crisp. Honest.",
  "Never fried. Always roasted.",
  "Snack like you mean it.",
  "Built to be shared.",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BrandStatement />

        {FLAVOURS.map((flavour, i) => (
          <div key={flavour.id}>
            <FlavourSection flavour={flavour} index={i} />
            {i < FLAVOURS.length - 1 && <Interstitial text={BREATHERS[i]} />}
          </div>
        ))}

        <BrandStory />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
