"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  HeartPulse,
  Building2,
  Home,
  Plane,
  Ship,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/ui/container";

const products = [
  {
    id: "medical",
    title: "Medical Insurance",
    short: "Medical",
    icon: HeartPulse,
    image: "/images/medical.jpg",
    description:
      "Quality healthcare protection for individuals, families and corporate organizations.",
    benefits: [
      "In-Patient Cover",
      "Out-Patient Cover",
      "Corporate Plans",
      "Emergency Support",
    ],
  },
  {
    id: "motor",
    title: "Motor Insurance",
    short: "Motor",
    icon: Car,
    image: "/images/motor.jpg",
    description:
      "Comprehensive and third-party vehicle protection for personal and commercial use.",
    benefits: [
      "Third Party Cover",
      "Comprehensive Cover",
      "Theft Protection",
      "Accident Support",
    ],
  },
  {
    id: "property",
    title: "Property Insurance",
    short: "Property",
    icon: Home,
    image: "/images/property.jpg",
    description:
      "Protect homes, offices and valuable assets against damage and loss.",
    benefits: [
      "Home Protection",
      "Fire Cover",
      "Asset Security",
      "Office Coverage",
    ],
  },
  {
    id: "business",
    title: "Business Insurance",
    short: "Business",
    icon: Building2,
    image: "/images/business.jpg",
    description:
      "Reliable protection for businesses, employees and operations.",
    benefits: [
      "Liability Cover",
      "Employee Cover",
      "Asset Protection",
      "Risk Management",
    ],
  },
  {
    id: "travel",
    title: "Travel Insurance",
    short: "Travel",
    icon: Plane,
    image: "/images/travel.jpg",
    description:
      "Travel confidently with protection against unexpected disruptions.",
    benefits: [
      "Medical Emergencies",
      "Trip Delays",
      "Lost Baggage",
      "Travel Assistance",
    ],
  },
  {
    id: "marine",
    title: "Marine Insurance",
    short: "Marine",
    icon: Ship,
    image: "/images/marine.jpg",
    description:
      "Comprehensive cover for cargo, goods and marine transportation.",
    benefits: [
      "Cargo Cover",
      "Transit Protection",
      "Import Security",
      "Export Coverage",
    ],
  },
];

export default function InsuranceProductsSection() {
  const [active, setActive] = useState(products[0]);

  const activeIndex = products.findIndex(
    (product) => product.id === active.id
  );

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#dbeafe,_transparent_35%),radial-gradient(circle_at_bottom_right,_#cffafe,_transparent_35%),#f8fafc]" />

      <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/50 blur-3xl" />

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#2f3e9e] shadow-sm">
            Insurance Solutions
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Protection For Every
            <span className="block bg-gradient-to-r from-[#2f3e9e] to-cyan-600 bg-clip-text text-transparent">
              Need & Every Stage
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Discover insurance solutions designed to safeguard
            individuals, families, businesses and investments
            across South Sudan.
          </p>
        </div>

        {/* Product Navigation */}
        <div className="mb-8 lg:mb-10">
          <div className="-mx-4 overflow-hidden px-4">
            <div className="scrollbar-none flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {products.map((product) => {
                const Icon = product.icon;
                const isActive = active.id === product.id;

                return (
                  <button
                    key={product.id}
                    onClick={() => setActive(product)}
                    className={`group relative snap-start flex-shrink-0 rounded-[28px] border transition-all duration-500 ${
                      isActive
                        ? "border-[#2f3e9e] bg-[#2f3e9e] text-white shadow-xl shadow-blue-900/20"
                        : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex w-[145px] flex-col items-center p-5 text-center">
                      <div
                        className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl transition-all ${
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-blue-50 text-[#2f3e9e]"
                        }`}
                      >
                        <Icon size={22} />
                      </div>

                      <span className="text-sm font-bold leading-tight">
                        {product.short}
                      </span>

                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-cyan-400"
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-2 text-center text-xs font-medium text-slate-400 lg:hidden">
            ← Swipe to explore insurance solutions →
          </p>
        </div>

        {/* Featured Product */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-[32px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
          >
            <div className="grid lg:min-h-[650px] lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left Image */}
              <div className="relative h-[320px] sm:h-[420px] lg:h-auto">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />

                <div className="absolute right-5 top-5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(products.length).padStart(2, "0")}
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white lg:bottom-10 lg:left-10">
                  <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md">
                    Insurance Solution
                  </div>

                  <h3 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                    {active.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-200 lg:text-lg">
                    {active.description}
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-center bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-6 sm:p-8 lg:p-12">
                <span className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-600">
                  Coverage Benefits
                </span>

                <h3 className="text-2xl font-bold text-slate-950 lg:text-3xl">
                  {active.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">
                  {active.description}
                </p>

                {/* Benefits */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {active.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-cyan-600"
                      />

                      <span className="text-sm font-medium text-slate-700">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-3 rounded-2xl bg-[#2f3e9e] px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#24317f]"
                  >
                    Get a Quote
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/products"
                    className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-[#2f3e9e] hover:text-[#2f3e9e]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}