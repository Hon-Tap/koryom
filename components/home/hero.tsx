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
  Activity,
  Layers
} from "lucide-react";

import Container from "../ui/container";

const slides = [
  {
    title: "Koryom Corporate Risk Solutions",
    tagline: "Your World, Protected.",
    description: "We manage the risks of today so you can focus on building a bolder tomorrow. Comprehensive underwriting architectures engineered specifically for modern corporate resilience.",
    image: "/images/cargo.png",
    metaIcon: Shield,
    metaText: "Sovereign Asset Underwriting"
  },
  {
    title: "Comprehensive Medical Schemes",
    tagline: "Health & Wellbeing",
    description: "Thoughtfully structured corporate medical networks engineered to absorb the financial exposure of major hospital stays, critical care admissions, and preventative health portfolios.",
    image: "/images/in-patient.png",
    metaIcon: Activity,
    metaText: "Institutional Medical Care"
  },
  {
    title: "Asset, Fleet & Property Protection",
    tagline: "General Insurance Lines",
    description: "Robust physical mitigation matrices shielding commercial frameworks, multi-fleet logistics lines, and core infrastructure from sudden operational vulnerability.",
    image: "/images/out-patient.png",
    metaIcon: Layers,
    metaText: "Sovereign Asset Security"
  },
];

const AUTO_PLAY_INTERVAL = 7000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

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

  const CurrentMetaIcon = slides[currentSlide].metaIcon;

  return (
    <section className="relative w-full bg-slate-950 overflow-hidden flex flex-col justify-between border-b border-slate-200">
      
      {/* 1. STRUCTURAL BACKGROUND CANVASES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {slides.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center brightness-[0.32] contrast-[1.02] transition-transform duration-[7000ms] ease-out ${
                  isActive && isLoaded ? "scale-102" : "scale-100"
                }`}
              />
              {/* Flat dark mask instead of smoky multi-gradient blocks */}
              <div className="absolute inset-0 bg-slate-950/40" />
            </div>
          );
        })}
      </div>

      {/* 2. COMPACT STRUCTURAL FRAMEWORK CONTENT BLOCK */}
      <div className="relative z-10 w-full pt-16 pb-12 md:pt-20 md:pb-16">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            
            {/* Tagline Pill Frame */}
            <div 
              className={`inline-flex items-center gap-2 px-3 py-1 bg-slate-900/90 border border-white/10 backdrop-blur-sm transition-all duration-700 transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              <CurrentMetaIcon className="h-3 w-3 text-blue-500" />
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-blue-400">
                {slides[currentSlide].metaText}
              </span>
            </div>

            {/* Structured Content Layout */}
            <div className="space-y-3">
              <h1 
                key={`title-${currentSlide}`}
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight tracking-tight transition-all duration-500 ease-out ${
                  isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
              >
                {slides[currentSlide].title}
              </h1>
              
              <p 
                key={`desc-${currentSlide}`}
                className={`text-xs sm:text-sm text-slate-300 max-w-2xl font-light leading-relaxed transition-all duration-500 ease-out ${
                  isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: '150ms' }}
              >
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Core Strategy Buttons */}
            <div 
              className={`pt-2 flex items-center gap-3 transition-all duration-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold uppercase tracking-wider px-5 py-3 transition-colors shadow-sm"
              >
                Explore Solution Frameworks
                <ArrowUpRight className="h-3.5 w-3.5 text-blue-200" />
              </Link>

              {/* Seamless Inline Slide Shifters */}
              <div className="flex items-center bg-slate-900/90 backdrop-blur-sm p-0.5 border border-white/10">
                <button
                  onClick={prevSlide}
                  className="p-2 text-white/60 hover:text-white transition-colors hover:bg-white/5"
                  aria-label="Previous viewport"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <div className="h-3 w-[1px] bg-white/10" />
                <button
                  onClick={nextSlide}
                  className="p-2 text-white/60 hover:text-white transition-colors hover:bg-white/5"
                  aria-label="Next viewport"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

          </div>
        </Container>
      </div>

      {/* 3. INTEGRATED DISCOVERY BAR - FLUSH TO BOTTOM */}
      <div 
        className={`relative z-20 w-full bg-slate-950 px-4 sm:px-6 lg:px-8 transition-all duration-700 transform ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: '450ms' }}
      >
        <div className="bg-white border border-slate-200 max-w-4xl mx-auto translate-y-6 p-5 sm:p-6 shadow-sm">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Discover Your Strategic Insurance Framework
              </h2>
              <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                Instantly browse tailored underwriting architectures, commercial line products, and institutional health schemes.
              </p>
            </div>
            
            {/* Carousel Navigation Tracks */}
            <div className="flex gap-1.5 self-start md:self-auto">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1 transition-all duration-300 ${
                    currentSlide === idx ? "w-5 bg-blue-600" : "w-1.5 bg-slate-200"
                  }`}
                  aria-label={`Jump to panel view index ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Functional Form Element Group */}
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-stretch gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search corporate covers, liability matrices, marine protection plans..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:bg-white transition-all rounded-none font-medium"
              />
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-slate-200 bg-slate-50 hover:bg-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-700 transition-colors shrink-0 rounded-none"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 text-slate-500" />
              Filter Matrix
            </button>
          </form>
        </div>
      </div>

    </section>
  );
}