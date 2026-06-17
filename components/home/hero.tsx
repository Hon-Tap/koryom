"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Activity, ShieldAlert, CheckCircle, Shield } from "lucide-react";
import Container from "../ui/container";

const stats = [
  {
    value: "6+",
    label: "Years of Trust",
    accent: "text-blue-600",
  },
  {
    value: "5k+",
    label: "Active Policies",
    accent: "text-pink-600",
  },
  {
    value: "24/7",
    label: "Dedicated Care",
    accent: "text-purple-600",
  },
];

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[92dvh] flex items-center overflow-hidden bg-slate-50/50 pt-28 pb-16 lg:pt-36 lg:pb-24 text-slate-900">
      
      {/* Dynamic Ambient Art Background Layer (No sterile tech grids) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {/* Organic fluid blend pulling from the Koryom brand logo profile */}
        <div className="absolute top-[-25%] right-[-10%] w-[60dvw] h-[60dvw] rounded-full bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-transparent blur-[140px] animate-[pulse_10s_infinite_ease-in-out]" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[45dvw] h-[45dvw] rounded-full bg-pink-500/5 blur-[120px]" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-16">
          
          {/* Left Column: Bold Lifestyle Brand Positioning */}
          <div className="flex flex-col justify-center text-center lg:text-left lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* Playful Contrast Tag */}
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2 text-xs font-black tracking-wider uppercase text-blue-800 backdrop-blur-md lg:mx-0 w-fit shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-spin" style={{ animationDuration: '3s' }} />
              <span>Redefining Protection for South Sudan</span>
            </div>

            {/* Premium Asymmetric Giant Headline */}
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl xl:text-7xl leading-[1.05]">
              Your World. <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 drop-shadow-sm">
                Unconditionally
              </span> <br />
              Protected.
            </h1>

            {/* Friendly, Confident Narrative Copy */}
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 font-medium">
              From enterprise infrastructure scale to critical family milestones, we deploy world-class asset protection architecture customized for those building the future.
            </p>

            {/* High-Intent High-Contrast Actions */}
            <div className="pt-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/quote"
                className="group relative inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-700 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-blue-700/30 sm:w-auto"
              >
                <span>Get an Instant Quote</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>

              <Link
                href="/products"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm px-8 py-4 text-base font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 sm:w-auto"
              >
                Explore Portfolios
              </Link>
            </div>

            {/* Sleek Gradient Divider Line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:from-slate-200/80 lg:to-transparent" />

            {/* Clean Floating Matrix Trust Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0">
              {stats.map((stat, idx) => (
                <div key={idx} className="relative pl-3 sm:pl-6 first:pl-0 border-l border-slate-200 first:border-0 text-left">
                  <span className={`block text-2xl sm:text-3xl font-black tracking-tight ${stat.accent}`}>
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Creative Layered Visual Canvas */}
          <div 
            className="relative mx-auto w-full max-w-md lg:max-w-none lg:col-span-5 lg:pl-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            {/* The Dynamic Backdrop Blob - Morphing on User Interaction */}
            <div className={`absolute -z-10 w-72 h-72 sm:w-96 sm:h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out bg-purple-600/10
              ${isHovered ? 'rounded-[40%_60%_70%_30%_/_40%_40%_60%_60%] rotate-12 scale-110 bg-pink-500/10' : 'rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] rotate-0 scale-100'}
            `} />

            {/* Main Premium Floating Image Framework */}
            <div className={`relative aspect-square w-full overflow-hidden bg-white border border-slate-200/40 shadow-2xl transition-all duration-500 ease-out
              ${isHovered ? 'rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(30,41,59,0.15)] -translate-y-1' : 'rounded-[3rem]'}
            `}>
              <Image
                src="/images/car.jpg"
                alt="Premium Asset Protection Case Study"
                width={800}
                height={800}
                priority
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out scale-101"
                style={{ transform: isHovered ? 'scale(1.04)' : 'scale(1)' }}
              />
              
              {/* Soft colorful gradient overlay for visual depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80" />
              
              {/* Integrated Bottom Premium Status Pill */}
              <div className={`absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-white/80 p-4 shadow-lg backdrop-blur-md transition-all duration-500 ease-out
                ${isHovered ? 'translate-y-[-4px] bg-white/95 border-white/60' : 'translate-y-0'}
              `}>
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white shadow-md shadow-blue-700/20">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-extrabold text-slate-900">National Coverage Grid</h4>
                    <p className="text-xs text-slate-600 mt-0.5 font-semibold">Active rapid response across all operational major regions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Status Badge: Top Left Corner Escape */}
            <div className={`absolute -top-4 -left-4 flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white/95 backdrop-blur-md py-2.5 px-4 shadow-xl transition-all duration-500 ease-out
              ${isHovered ? '-rotate-2 scale-105 border-blue-100' : 'rotate-0 scale-100'}
            `}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-black text-slate-700 tracking-wide flex items-center gap-1.5 uppercase">
                <Activity className="h-3.5 w-3.5 text-emerald-500" />
                Settlement Active
              </span>
            </div>

            {/* Abstract Decorative Offset Outline */}
            <div className={`absolute -bottom-4 -right-4 -z-20 h-full w-full border-2 border-dashed border-slate-300/40 transition-all duration-500 ease-out
              ${isHovered ? 'translate-x-3 translate-y-3 border-blue-400/30 rounded-[2rem]' : 'translate-x-0 translate-y-0 rounded-[3rem]'}
            `} />
            
          </div>
          
        </div>
      </Container>
    </section>
  );
}