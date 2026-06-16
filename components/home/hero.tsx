"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, CheckCircle2, Users, Sparkles } from "lucide-react";
import Container from "../ui/container";

const stats = [
  {
    value: "6+",
    label: "Years of Trust",
    icon: Shield,
  },
  {
    value: "5k+",
    label: "Active Policies",
    icon: CheckCircle2,
  },
  {
    value: "24/7",
    label: "Dedicated Care",
    icon: Users,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] pt-32 pb-24 lg:pt-44 lg:pb-36 text-slate-900">
      
      {/* Premium Editorial Tech-Grid Background Layer (Light Mode) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {/* Soft elegant ambient glows for depth */}
        <div className="absolute -top-40 -right-40 h-[800px] w-[800px] rounded-full bg-gradient-to-bl from-blue-100/40 via-indigo-50/20 to-transparent blur-[130px]" />
        <div className="absolute bottom-0 left-10 h-[500px] w-[500px] rounded-full bg-blue-50/30 blur-[100px]" />
        
        {/* Ultra-fine minimalist modern grid mapping */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Architectural Grid Center Line Accent */}
        <div className="absolute top-0 left-1/2 h-full w-[1px] bg-gradient-to-b from-slate-200/60 via-slate-100/40 to-transparent hidden lg:block" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-12 xl:gap-24">
          
          {/* Left Column: Premium Brand Positioning */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            
            {/* Minimalist Tech Pill Tag */}
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-blue-700 backdrop-blur-md lg:mx-0 w-fit">
              <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
              <span>Redefining Protection for South Sudan</span>
            </div>

            {/* Giant Clean Editorial Headline */}
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-5xl xl:text-7xl leading-[1.05] font-sans">
              Your World. <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 bg-clip-text text-transparent">
                Unconditionally <br className="hidden xl:block" /> Protected.
              </span>
            </h1>

            {/* Premium Refined Copy */}
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 font-normal">
              From enterprise infrastructure scale to critical family milestones, we deploy world-class, bulletproof asset protection architecture customized for those building the future.
            </p>

            {/* Elevated, High-Intent Call To Actions */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/quote"
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/20 sm:w-auto"
              >
                <span>Get an Instant Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/products"
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 sm:w-auto"
              >
                Explore Portfolios
              </Link>
            </div>

            {/* Sleek Minimalist Separator Line */}
            <div className="my-12 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:from-slate-200/80 lg:to-transparent" />

            {/* Clean Non-Card Matrix Stats Layout */}
            <div className="grid grid-cols-3 gap-4 text-left">
              {stats.map((stat, idx) => {
                return (
                  <div key={idx} className="relative pl-2 sm:pl-6 first:pl-0 border-l border-slate-200 first:border-0">
                    <span className="block text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl tracking-tight">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-End Light Asymmetric Bento Framework */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none lg:pl-6">
            
            {/* Main Crisp Bento Visual Frame */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-2xl lg:aspect-[1.1/1]">
              <Image
                src="/images/car.jpg"
                alt="Premium Corporate Infrastructure Asset Protection"
                width={1200}
                height={1000}
                priority
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              {/* Soft vignette overlay to ensure text contrast over the graphic asset */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-90" />
              
              {/* Contextual Premium Glass Pill Overlay */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/40 bg-white/75 p-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 border border-blue-600/20">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">National Coverage Grid</h4>
                    <p className="text-xs text-slate-600 mt-0.5 font-medium">Decentralized response networks active across all major regions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro-Status Indicator Tag */}
            <div className="absolute -top-6 -left-6 hidden sm:flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white p-3 shadow-xl backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-emerald-500 relative">
                <div className="absolute inset-0 h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <span className="text-xs font-bold tracking-wide text-slate-700">Claims Settlement Engine Active</span>
            </div>

            {/* Abstract Offset Frame Shadow */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-dashed border-slate-300/60" />
          </div>
          
        </div>
      </Container>
    </section>
  );
}