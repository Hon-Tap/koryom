"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  BadgeCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/container";

const features = [
  {
    icon: Award,
    title: "Commitment to Excellence",
    description:
      "We uphold the highest standards of professionalism, financial accountability, and risk management in every institutional engagement.",
  },
  {
    icon: ShieldCheck,
    title: "Comprehensive Protection",
    description:
      "From bespoke commercial underwriting to specialized retail coverage, our assets are structured around complex modern exposures.",
  },
  {
    icon: BadgeCheck,
    title: "Responsive Claims Support",
    description:
      "An optimized, highly transparent claims process engineered for operational turnaround efficiency when mitigation is required.",
  },
  {
    icon: TrendingUp,
    title: "Proactive Risk Management",
    description:
      "We partner with industries to identify, isolate, and neutralize balance-sheet liabilities before they develop into costly disruptions.",
  },
];

const stats = [
  {
    value: "2020",
    label: "Established Base",
  },
  {
    value: "24/7",
  },
  {
    value: "NATIONWIDE",
    label: "Underwriting Reach",
  },
];

export default function WhyChooseKoryomSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-slate-200">
      {/* Industrial Grid Architecture Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:32px_32px]" />

      <Container className="relative z-10">
        
        {/* Top Corporate Segment Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-slate-200">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-blue-800">
              <span className="h-2 w-2 bg-blue-800 rounded-none" />
              Corporate Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
              Built On Corporate Trust. Focused On Asset Protection.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Koryom Insurance Company Limited combines regional market expertise with robust financial capacity to secure corporate interests across complex operational environments.
            </p>
          </div>
        </div>

        {/* Dynamic Structural Grid Framework */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Sharp Visual Anchor Frame */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-[4/5] w-full bg-slate-900 border border-slate-200 rounded-none overflow-hidden group">
              <Image
                src="/images/construction.png"
                alt="Koryom Commercial Risk Underwriting Infrastructure"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center brightness-90 contrast-[1.02] rounded-none transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
              
              {/* Bottom Fixed Overlay Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-slate-950/80 backdrop-blur-sm border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black tracking-widest text-blue-400 uppercase">Operational Security</p>
                  <p className="text-sm font-bold text-white uppercase mt-0.5">Protecting What Matters Most</p>
                </div>
                <div className="h-2 w-2 bg-blue-500 rounded-none" />
              </div>
            </div>

            {/* Flat Structural Stats Panel - Clean Block Division */}
            <div className="bg-slate-950 text-white p-8 rounded-none border border-slate-800 grid grid-cols-3 gap-6 divide-x divide-slate-800">
              {stats.map((stat, idx) => (
                <div key={idx} className={`${idx > 0 ? "pl-6" : ""}`}>
                  <p className="text-2xl sm:text-3xl font-black text-blue-500 tracking-tight leading-none uppercase">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-2 leading-tight">
                    {stat.label || "Continuous Monitoring"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Professional Feature Grid Matrix */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="bg-white border border-slate-200 p-6 rounded-none flex flex-col justify-between space-y-6 hover:border-slate-400 transition-colors duration-200"
                  >
                    <div className="space-y-4">
                      <div className="h-10 w-10 bg-slate-100 text-slate-900 rounded-none flex items-center justify-center border border-slate-200">
                        <IconComponent className="h-5 w-5 stroke-[1.75]" />
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="pt-2 flex items-center gap-2 text-[11px] font-black text-blue-800 uppercase tracking-wider group cursor-pointer">
                      <span>Verification Framework</span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Statement Card Panel */}
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-none space-y-2">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-800 rounded-none" />
                Institutional Insurance Infrastructure
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                We build enduring commercial partnerships through continuous risk transparency, compliance alignment, and agile financial response capacity. Our mandate is to safeguard asset liquidity today while preparing organizations for tomorrow's complex security parameters.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}