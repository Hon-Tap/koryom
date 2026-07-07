"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/container";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-28 lg:py-36">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Decorative Blobs */}
      <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-slate-300/20 blur-3xl" />

      <Container className="relative z-10 max-w-6xl">

        <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-gradient-to-br from-slate-500 via-slate-400 to-slate-500 px-8 py-20 shadow-[0_35px_80px_rgba(15,23,42,.18)] backdrop-blur-xl sm:px-14 lg:px-24 lg:py-28">

          {/* subtle pattern */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-[length:24px_24px]" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-md shadow-lg">

              <ShieldCheck className="h-4 w-4 text-sky-300" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                Enterprise Risk Protection
              </span>

            </div>

            {/* Heading */}

            <h2 className="mt-10 font-serif text-5xl font-medium leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">

              Protect What Matters

              <span className="mt-2 block italic text-blue-400">
                Most Today
              </span>

            </h2>

            {/* Divider */}

            <div className="mx-auto mt-8 h-[3px] w-24 rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

            {/* Description */}

            <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-slate-100">

              Whether protecting commercial assets, underwriting transport
              operations, or safeguarding workforce wellbeing, Koryom
              Insurance delivers dependable coverage engineered for resilience,
              continuity, and long-term confidence.

            </p>

            {/* Buttons */}

            <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-700/40"
              >
                Request Quote

                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-10 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900"
              >
                Explore Solutions
              </Link>

            </div>

            {/* Trust Indicators */}

            <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-5 text-sm text-slate-100">

              <div className="flex items-center gap-2">

                <CheckCircle2 className="h-5 w-5 text-blue-300" />

                Licensed & Trusted

              </div>

              <div className="flex items-center gap-2">

                <CheckCircle2 className="h-5 w-5 text-blue-300" />

                Corporate Risk Solutions

              </div>

              <div className="flex items-center gap-2">

                <CheckCircle2 className="h-5 w-5 text-blue-300" />

                Fast Claims Support

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}