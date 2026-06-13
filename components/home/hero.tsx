"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/container";

const slides = [
  {
    badge: "Trusted Insurance Partner in South Sudan",
    title: "Protect What",
    highlight: "Matters Most",
    description: "Comprehensive insurance solutions designed for families, businesses, and communities across South Sudan. Protection today, confidence tomorrow.",
    tabTitle: "Medical Insurance",
    tabSubtitle: "Quality Healthcare Protection",
    image: "/images/medic.jpg",
  },
  {
    badge: "Drive Securely Anywhere",
    title: "Protection You",
    highlight: "Can Trust",
    description: "Reliable insurance solutions for individuals, families and businesses across South Sudan. Protecting what matters today while securing your future tomorrow.",
    tabTitle: "Motor Insurance",
    tabSubtitle: "Drive With Confidence",
    image: "/images/motor.jpg",
  },
  {
    badge: "Secure Your Assets",
    title: "Safeguard Your",
    highlight: "Investments",
    description: "Ensure your commercial properties, homes, and private assets are robustly covered against unforeseen risks across South Sudan.",
    tabTitle: "Property Insurance",
    tabSubtitle: "Secure Your Investments",
    image: "/images/hero-ss.jpg",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = useCallback((index: number) => {
    if (index === activeSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSlide(index);
      setIsAnimating(false);
    }, 300);
  }, [activeSlide]);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((activeSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [handleSlideChange, activeSlide]);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center pt-24 pb-12 lg:py-0">
      {/* Decorative ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <Container className="relative w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE CONTENT - Dynamic Fade-Sync */}
          <div className={`col-span-1 lg:col-span-6 flex flex-col justify-center transition-all duration-300 ${
            isAnimating ? "opacity-40 translate-y-2" : "opacity-100 translate-y-0"
          }`}>
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-200/80 bg-white/90 px-4 py-1.5 text-xs lg:text-sm font-semibold text-[#2f3e9e] shadow-sm tracking-wide">
                {slides[activeSlide].badge}
              </span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.1]">
              {slides[activeSlide].title}
              <span className="block text-[#2f3e9e] mt-1 lg:mt-2">
                {slides[activeSlide].highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
              {slides[activeSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                href="/quote"
                className="rounded-full bg-[#2f3e9e] px-8 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#24317f] active:translate-y-0 w-full sm:w-auto"
              >
                Get a Quote
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-center font-semibold text-slate-700 transition-all duration-300 hover:border-[#2f3e9e] hover:text-[#2f3e9e] w-full sm:w-auto"
              >
                Explore Products
              </Link>
            </div>

            {/* Micro Stats Row */}
            <div className="mt-12 pt-8 border-t border-slate-200/60 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2f3e9e]">25+</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2f3e9e]">10K+</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Policies Issued</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2f3e9e]">24/7</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Claims Support</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE VIEWPORT CONTAINER */}
          <div className="col-span-1 lg:col-span-6 relative h-[420px] sm:h-[500px] lg:h-[650px] w-full flex flex-col justify-end lg:justify-center">
            
            {/* The Slidestream Image Box with Curve Aspect */}
            <div 
              className="absolute inset-y-0 left-0 lg:left-8 right-0 lg:-right-[10vw] rounded-3xl lg:rounded-none overflow-hidden shadow-2xl lg:shadow-none"
              style={{
                clipPath: typeof window !== 'undefined' && window.innerWidth >= 1024 
                  ? "ellipse(100% 100% at 100% 30%)" 
                  : "none"
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.tabTitle}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    activeSlide === index 
                      ? "opacity-100 scale-100 pointer-events-auto" 
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.tabTitle}
                    fill
                    priority={index === 0}
                    sizes="(max-w-1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  {/* Premium overlay tint to unify graphics */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-transparent lg:from-[#2f3e9e]/20" />
                </div>
              ))}
            </div>

            {/* FLOATING TABS SELECTOR - Transformed Responsively */}
            {/* Mobile/Tablet: Horizontal Pill Row | Desktop: Stacked Absolute Layer */}
            <div className="relative lg:absolute left-0 lg:-left-4 z-30 mt-6 lg:mt-0 px-4 lg:px-0 max-w-full overflow-x-auto no-scrollbar">
              <div className="flex lg:flex-col gap-3 pb-3 lg:pb-0 whitespace-nowrap lg:whitespace-normal">
                {slides.map((slide, index) => (
                  <button
                    key={slide.tabTitle}
                    onClick={() => handleSlideChange(index)}
                    className={`flex flex-col text-left min-w-[220px] sm:min-w-[260px] lg:w-[290px] rounded-2xl lg:rounded-[24px] p-4 lg:p-5 transition-all duration-300 border backdrop-blur-md ${
                      activeSlide === index
                        ? "bg-[#2f3e9e] text-white border-transparent shadow-[0_15px_35px_rgba(47,62,158,0.3)] scale-100"
                        : "bg-white/90 text-slate-900 border-slate-200/60 shadow-md hover:bg-white hover:-translate-y-0.5 lg:hover:translate-x-2"
                    }`}
                  >
                    <h4 className="font-bold text-sm sm:text-base leading-snug">
                      {slide.tabTitle}
                    </h4>
                    <p className={`text-xs mt-1 font-medium transition-colors ${
                      activeSlide === index ? "text-blue-200" : "text-slate-500"
                    }`}>
                      {slide.tabSubtitle}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Linear Progress Bars Indicator (Bottom Safe Corner) */}
            <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-0 z-30 flex gap-2 bg-slate-950/20 backdrop-blur-sm p-2 rounded-full lg:bg-transparent lg:backdrop-blur-none lg:p-0">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeSlide === index ? "w-10 bg-[#2f3e9e] lg:bg-[#2f3e9e]" : "w-4 bg-white lg:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </Container>
      
      {/* Hide scrollbar utility styles for mobile pill navigation slider row */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}