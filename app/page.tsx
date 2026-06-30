import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FlavourSection from "@/components/FlavourSection";
import WhyInhaus from "@/components/WhyInhaus";
import IngredientsSection from "@/components/IngredientsSection";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import { FLAVOURS } from "@/lib/flavours";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {FLAVOURS.map((flavour, i) => (
          <FlavourSection key={flavour.id} flavour={flavour} index={i} />
        ))}
        <WhyInhaus />
        <IngredientsSection />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
