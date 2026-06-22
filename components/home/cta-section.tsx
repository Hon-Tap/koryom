"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldAlert } from "lucide-react";

import Container from "@/components/ui/container";

export default function CTASection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 via-[#0b0f19] to-slate-950 py-20 lg:py-24 overflow-hidden font-sans antialiased">
      
      {/* Structural Architectural Blueprint Micro-Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Top Section Border Separator Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      {/* Technical Vertical Structural Framing Lines */}
      <div className="absolute left-0 bottom-0 top-0 w-1/4 border-r border-slate-900/60 pointer-events-none opacity-40 hidden lg:block" />
      <div className="absolute right-0 bottom-0 top-0 w-1/4 border-l border-slate-900/60 pointer-events-none opacity-40 hidden lg:block" />

      <Container className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border border-slate-800/80 bg-slate-950/70 p-8 sm:p-12 lg:p-16 text-center shadow-2xl rounded-none relative overflow-hidden backdrop-blur-sm">
          
          {/* Subtle Internal Geometric Accent Corner */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-700" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-700" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-700" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-700" />

          {/* Top Decorative Underwrite Micro-Tag */}
          <div className="inline-flex items-center gap-2 bg-slate-900 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-blue-400 border border-slate-800 mx-auto rounded-none mb-6">
            <ShieldAlert className="h-3 w-3 text-blue-500" />
            Institutional Continuity Secured
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.15]">
            Protect What Matters <span className="text-blue-500">Most Today</span>
          </h2>
          
          <div className="w-12 h-1 bg-slate-800 mx-auto my-5 rounded-none" />

          {/* Subtext */}
          <p className="mx-auto max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-400 font-normal tracking-wide text-balance">
            Whether securing strategic corporate property, underwriting fleet logistics, or anchoring employee health schemes, Koryom Insurance delivers the risk framework necessary to deploy enterprise capital with confidence.
          </p>

          {/* Actions Framework (Sharp Edges) */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-md mx-auto relative z-20">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 shadow-md rounded-none active:scale-98"
            >
              Get Corporate Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:rotate-45" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-700 transition-colors rounded-none"
            >
              Explore Protection Lines
            </Link>
          </div>
          
        </div>
      </Container>
    </section>
  );
}