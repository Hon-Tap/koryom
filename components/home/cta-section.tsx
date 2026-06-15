"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden py-24 lg:py-32">
      {/* Background layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-800" />

      {/* Soft glow accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <Container>
        <div className="relative z-10 mx-auto max-w-5xl rounded-[2.5rem] border border-white/15 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-2xl sm:p-12 lg:p-20">
          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
            Protect What Matters Most Today
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Whether it’s your family, business, vehicle, or investments,
            Koryom Insurance gives you the confidence to move forward without
            uncertainty.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-blue-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              Get a Quote
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/services"
              className="rounded-2xl border border-white/25 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}