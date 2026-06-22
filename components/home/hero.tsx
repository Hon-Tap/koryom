"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Shield,
} from "lucide-react";

import Container from "../ui/container";

const slides = [
  {
    title: "Koryom Corporate Risk Solutions",
    tagline: "Your World, Protected.",
    description: "We manage the risks of today so you can focus on building a bolder tomorrow. Comprehensive underwritings built for modern enterprise continuity.",
    image: "/images/cargo.png",
  },
  {
    title: "Comprehensive Medical Schemes",
    tagline: "Health & Wellbeing",
    description: "Thoughtfully engineered corporate medical networks taking the financial burden out of hospital stays, specialized admissions, and daily wellness.",
    image: "/images/in-patient.png",
  },
  {
    title: "Asset, Fleet & Property Protection",
    tagline: "General Insurance Lines",
    description: "Robust institutional security shields covering logistics, commercial structures, motor fleets, and operational vulnerabilities from unexpected disruptions.",
    image: "/images/out-patient.png",
  },
];

const AUTO_PLAY_INTERVAL = 6500;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-slate-950 overflow-hidden flex flex-col justify-between pt-24 lg:pt-28">
      
      {/* Structural Ambient Underlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {slides.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center brightness-[0.45] transition-transform duration-[6500ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
              {/* Refined Geometric Vignette Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />
            </div>
          );
        })}
      </div>

      {/* Main Framework Layout Section */}
      <div className="relative z-10 w-full flex-1 flex items-center min-h-[440px] lg:min-h-[480px] py-10">
        <Container>
          <div className="max-w-3xl space-y-5">
            
            {/* Animated Meta Subtitle */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md">
              <Shield className="h-3 w-3 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                {slides[currentSlide].tagline}
              </span>
            </div>

            {/* Premium Clean Headings */}
            <div className="space-y-3">
              <h1 
                key={`title-${currentSlide}`}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight animate-fade-in"
              >
                {slides[currentSlide].title}
              </h1>
              
              {/* Description Body Copy */}
              <p 
                key={`desc-${currentSlide}`}
                className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed text-balance animate-fade-in"
              >
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Control Decks & Actions Framework */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 hover:bg-rose-700 px-6 py-3 text-sm font-bold text-white tracking-wide shadow-lg shadow-rose-950/40 transition-all duration-250 active:scale-95"
              >
                Explore Corporate Lines
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              {/* Seamless Inline Slide Shifters */}
              <div className="flex items-center bg-slate-900/60 backdrop-blur-md rounded-xl p-1 border border-white/10">
                <button
                  onClick={prevSlide}
                  className="p-2 text-white/70 hover:text-white transition-colors hover:bg-white/5 rounded-lg"
                  aria-label="Previous frame"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="h-4 w-[1px] bg-white/10 mx-1" />
                <button
                  onClick={nextSlide}
                  className="p-2 text-white/70 hover:text-white transition-colors hover:bg-white/5 rounded-lg"
                  aria-label="Next frame"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        </Container>
      </div>

      {/* Corporate Discovery Form System — Secured cleanly inside the flow layout */}
      <div className="relative z-20 w-full bg-gradient-to-t from-slate-100 to-transparent pt-12">
        <Container>
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.12)] max-w-4xl mx-auto translate-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Discover the Ideal Insurance Plan
                </h2>
                <p className="text-xs text-slate-500 font-light">
                  Instantly browse our institutional risk solutions, policies, and health schemes.
                </p>
              </div>
              
              <div className="flex gap-1.5 self-start md:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              </div>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-stretch gap-2.5">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for a product, asset cover or medical scheme..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium"
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-all active:scale-98 shrink-0"
              >
                <SlidersHorizontal className="h-3.5 w-3.5 text-slate-500" />
                Filter Matrix
              </button>
            </form>
          </div>
        </Container>
      </div>

      {/* CSS Component Optimization Layer */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        }
      `}</style>
    </section>
  );
}