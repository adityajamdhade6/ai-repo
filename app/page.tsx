import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import FlavourSection from "@/components/FlavourSection";
import WhyUs from "@/components/WhyUs";
import IngredientsSection from "@/components/IngredientsSection";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { FLAVOURS } from "@/lib/flavours";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Statement />
        {FLAVOURS.map((flavour, i) => (
          <FlavourSection key={flavour.id} flavour={flavour} index={i} />
        ))}
        <WhyUs />
        <IngredientsSection />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
