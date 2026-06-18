"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

import Container from "../ui/container";

const slides = [
  {
    title: "Your World. Unconditionally Protected.",
    description:
      "Comprehensive insurance solutions designed to safeguard families, businesses, investments, and the future you are building.",
    image: "/images/cargo.png",
  },
  {
    title: "In-Patient Medical Cover.",
    description:
      "Protection for hospital admissions, specialist treatment, surgery, accommodation, intensive care, and critical healthcare needs.",
    image: "/images/in-patient.png",
  },
  {
    title: "Out-Patient Medical Cover.",
    description:
      "Reliable access to consultations, diagnostics, laboratory services, prescriptions, and everyday healthcare support.",
    image: "/images/out-patient.png",
  },
];

const AUTO_PLAY_INTERVAL = 7000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate flex min-h-[90svh] items-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-all duration-[1800ms] ease-out ${
              currentSlide === index
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />

            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />
          </div>
        ))}
      </div>

      {/* Decorative Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />

      <Container className="relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Premium Glass Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
            {/* Card Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />

            <div className="relative">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                Redefining Protection
              </div>

              {/* Heading */}
              <h1 className="max-w-2xl text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                {slides[currentSlide].title}
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                {slides[currentSlide].description}
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/quote"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-900 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Learn More
                </Link>
              </div>

              {/* Bottom Controls */}
              <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                {/* Indicators */}
                <div className="flex items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      aria-label={`Slide ${index + 1}`}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-500 ${
                        currentSlide === index
                          ? "w-10 bg-white"
                          : "w-2.5 bg-white/35 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Floating Help Pill */}
      <div className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 lg:flex">
        <button className="group flex items-center gap-3 rounded-l-2xl border border-r-0 border-white/10 bg-blue-900/95 px-4 py-5 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:px-5">
          <HelpCircle className="h-5 w-5" />

          <span className="text-[10px] font-bold uppercase tracking-[0.25em] [writing-mode:vertical-lr]">
            Need Help?
          </span>
        </button>
      </div>
    </section>
  );
}