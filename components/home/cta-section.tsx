"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import Container from "@/components/ui/container";

export default function CTASection() {
  return (
    <section className="relative w-full bg-slate-950 py-16 lg:py-20 border-b border-slate-900 overflow-hidden font-sans antialiased">
      
      {/* Structural Subtle Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <Container className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border border-slate-800 bg-slate-900/40 p-8 sm:p-12 lg:p-14 text-center rounded-none backdrop-blur-sm">
          
          {/* Institutional Status Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-900/80 px-3 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-blue-400 border border-slate-800 mb-6">
            <ShieldCheck className="h-3 w-3 text-blue-500 shrink-0" />
            Institutional Continuity Secured
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase leading-tight">
            Protect What Matters <span className="text-blue-500 font-black">Most Today</span>
          </h2>
          
          {/* Minimal Line Separator */}
          <div className="w-10 h-0.5 bg-slate-800 mx-auto my-4" />

          {/* Core Subtext */}
          <p className="mx-auto max-w-xl text-xs sm:text-sm leading-relaxed text-slate-400 font-normal tracking-wide">
            Whether underwriting fleet logistics, securing physical commercial assets, or safeguarding team wellness schemes, Koryom Insurance delivers risk solutions engineered for long-term operational stability.
          </p>

          {/* Action Call Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-150 rounded-none shadow-sm"
            >
              Request Quote
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:text-white transition-colors rounded-none"
            >
              Explore Solutions
            </Link>
          </div>
          
        </div>
      </Container>
    </section>
  );
}