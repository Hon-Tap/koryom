"use client";

import Hero from "@/components/home/hero";
import InsuranceProductsSection from "@/components/home/insurance-products-section";
import PartnersSection from "@/components/home/partners-section";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <main className="bg-white">
        {/* 1. The Executive Visual Hook */}
        <Hero />

        {/* 2. Immediate Matrix Interaction: Displays core underwriting lines with sharp tabs */}
        <InsuranceProductsSection />

        {/* 3. Corporate Validation: Institutional trust logos right after the products */}
        <PartnersSection />

        {/* 4. High-Contrast Conversion Anchor */}
        <CTASection />
      </main>
    </>
  );
}