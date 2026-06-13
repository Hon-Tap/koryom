"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700" />

      <Container>
        <div className="relative z-10 rounded-[40px] border border-white/20 bg-white/10 p-12 text-center backdrop-blur-xl lg:p-20">
          <h2 className="mx-auto max-w-4xl text-4xl font-bold text-white lg:text-6xl">
            Protect What Matters Most Today
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Whether you are protecting your family, business, vehicle or
            investment, Koryom Insurance is ready to help you move forward with
            confidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-900 transition hover:-translate-y-1"
            >
              Get a Quote
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="rounded-2xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}