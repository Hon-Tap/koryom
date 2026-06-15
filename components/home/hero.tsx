"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, CheckCircle2, Building2, Users } from "lucide-react";
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
    <section className="relative overflow-hidden bg-[#fafafa] pt-32 pb-20 lg:pt-40 lg:pb-32">
      
      {/* Premium Ambient Background Elements (PetleyHare Inspired Fluidity) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-200/30 to-indigo-100/20 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-[100px]" />
        {/* Subtle geometric grid texture line */}
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] lg:block" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-12 xl:gap-20">
          
          {/* Left Column: Core Positioning Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            
            {/* Trust Badge */}
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100/80 bg-blue-50/50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#2f3e9e] backdrop-blur-sm lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-[#2f3e9e] animate-pulse" />
              We manage the risks of today, focus on building a bolder tomorrow.
            </div>

            {/* Premium Punchy Slogan */}
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-5xl xl:text-6xl xl:leading-[1.1]">
              Your World.<br />
              <span className="relative inline-block text-[#2f3e9e]">
                Protected.
                <span className="absolute bottom-1 left-0 h-2 w-full bg-blue-100 -z-10 hidden sm:block" />
              </span>
            </h1>

            {/* Refined Contextual Copy */}
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
              From enterprise growth to family milestones, we deliver world-class, 
              reliable insurance infrastructure customized for individuals, families, 
              and corporations driving South Sudan forward.
            </p>

            {/* Streamlined Call To Actions */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/quote"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#2f3e9e] px-8 py-4.5 font-bold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#202d80] hover:shadow-xl sm:w-auto"
              >
                Get an Instant Quote
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/products"
                className="inline-flex w-full items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-8 py-4.5 font-bold text-slate-700 transition-all duration-300 hover:border-[#2f3e9e] hover:bg-slate-50 hover:text-[#2f3e9e] sm:w-auto"
              >
                Explore Portfolios
              </Link>
            </div>

            {/* High-End Matrix Stats Display */}
            <div className="mt-14 grid grid-cols-3 gap-3 rounded-3xl border border-slate-100 bg-white p-4 shadow-sm sm:gap-6 sm:p-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="relative text-center sm:text-left sm:pl-4 first:pl-0">
                    {idx > 0 && (
                      <div className="absolute inset-y-2 left-0 w-[1px] bg-slate-100 hidden sm:block" />
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <div className="mx-auto sm:mx-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2f3e9e]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xl font-extrabold text-slate-900 sm:text-2xl lg:text-3xl">
                        {stat.value}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Custom Asymmetric Image Architecture */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            
            {/* Offset Stylized Decorative Border Frame */}
            <div className="absolute -inset-3 rounded-[40px] rounded-tl-[100px] rounded-br-[100px] border-2 border-dashed border-[#2f3e9e]/20" />
            
            {/* Solid Geometric Background Shadow Accent */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[32px] rounded-tl-[80px] rounded-br-[80px] bg-[#2f3e9e]/5" />

            {/* Main Image Container with Unique Asymmetric Mask */}
            <div className="relative overflow-hidden rounded-[32px] rounded-tl-[80px] rounded-br-[80px] bg-slate-900 shadow-2xl">
              <Image
                src="/images/herok.jpg"
                alt="Koryom Insurance Corporate Protection"
                width={1200}
                height={750}
                priority
                className="h-[460px] w-full object-fit object-center transition-transform duration-700 hover:scale-105 sm:h-[540px] lg:h-[600px]"
              />
              {/* Sleek, deep color gradient overlay mapping */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Floating Live Indicator Badge */}
            <div className="absolute -bottom-6 left-6 max-w-[260px] rounded-2xl border border-white bg-white/95 p-4 shadow-xl backdrop-blur-md sm:-left-6 sm:bottom-10">
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">National Network</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Providing decentralized support lines across all major regions instantly.
                  </p>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </Container>
    </section>
  );
}