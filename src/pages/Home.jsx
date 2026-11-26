import React from "react";

import Hero from "../components/Hero";
import Features from "../components/Features";
import WhyChoose from "../components/WhyChoose";
import AppsSection from "../components/AppsSection";
import AdvancedFeatures from "../components/AdvancedFeatures";
import CTASection from "../components/CTASection";
import CompleteSolutionAndSmarter from "../components/CompleteSolutionAndSmarter";
import SmarterPromoBanner from "../components/SmarterPromoBanner";
import FAQSection from "../components/FAQSection";

function Home() {
  return (
    <main className="w-full overflow-x-clip bg-white">

      {/* HERO SECTION */}
      <section id="home">
        <Hero />
      </section>

      {/* FEATURES SECTION */}
      <section id="features">
        <Features />
      </section>

      {/* WHY CHOOSE DELIFO */}
      <section id="why-choose">
        <WhyChoose />
      </section>

      {/* APPLICATIONS SECTION */}
      <section id="apps">
        <AppsSection />
      </section>

      {/* ADVANCED FEATURES */}
      <section id="advanced-features">
        <AdvancedFeatures />
      </section>

      {/* CALL TO ACTION */}
      <section id="cta">
        <CTASection />
      </section>

      {/* COMPLETE SOLUTION */}
      <section id="solutions">
        <CompleteSolutionAndSmarter />
      </section>

      {/* PROMOTIONAL BANNER */}
      <section id="promotion">
        <SmarterPromoBanner />
      </section>

      {/* FAQ SECTION */}
      <section id="faq">
        <FAQSection />
      </section>

    </main>
  );
}

export default Home;