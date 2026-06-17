import Hero from "@/components/home/hero";
import TrustSection from "@/components/home/trust-section";
import InsuranceProductsSection from "@/components/home/insurance-products-section";
import WhyChooseKoryomSection from "@/components/home/why-choose-koryom-section";
import StatsSection from "@/components/home/stats-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import PartnersSection from "@/components/home/partners-section";
import CTASection from "@/components/home/cta-section";
// import Footer from "@/components/layout/footer";

// import Navbar from "@/components/layout/navbar";
// import TopBar from "@/components/layout/top-bar";

export default function Home() {
  return (
    <>
      {/* <TopBar />
      <Navbar /> */}

      <main>
        <Hero />
        <TrustSection />
        <InsuranceProductsSection />
        <WhyChooseKoryomSection />
        <StatsSection />
        <TestimonialsSection />
        <PartnersSection />
        <CTASection />
      </main>
      {/* <Footer /> */}
    </>
  );
}