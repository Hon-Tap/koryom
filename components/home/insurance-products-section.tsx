"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  HeartPulse,
  Building2,
  Home,
  Plane,
  Ship,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/container";

const products = [
  {
    id: "motor",
    title: "Motor Insurance",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    description:
      "Protect your vehicle against accidents, theft, fire and third-party liabilities with comprehensive coverage.",
    benefits: [
      "Third Party Cover",
      "Comprehensive Cover",
      "Theft Protection",
      "Accident Assistance",
    ],
  },
  {
    id: "medical",
    title: "Medical Insurance",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    description:
      "Reliable healthcare protection for individuals, families and organizations across South Sudan.",
    benefits: [
      "Individual Plans",
      "Family Coverage",
      "Corporate Healthcare",
      "Emergency Support",
    ],
  },
  {
    id: "business",
    title: "Business Insurance",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    description:
      "Safeguard your business assets, employees and operations from unforeseen risks.",
    benefits: [
      "Property Protection",
      "Employee Coverage",
      "Liability Insurance",
      "Risk Management",
    ],
  },
  {
    id: "property",
    title: "Property Insurance",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    description:
      "Protect homes, offices and valuable assets against damage and loss.",
    benefits: [
      "Home Protection",
      "Office Coverage",
      "Asset Security",
      "Fire Protection",
    ],
  },
  {
    id: "travel",
    title: "Travel Insurance",
    icon: Plane,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    description:
      "Travel with confidence knowing you are protected against unexpected events.",
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
    icon: Ship,
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    description:
      "Comprehensive protection for cargo, vessels and goods in transit.",
    benefits: [
      "Cargo Protection",
      "Transit Coverage",
      "Import Protection",
      "Export Security",
    ],
  },
];

export default function InsuranceProductsSection() {
  const [active, setActive] = useState(products[0]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#dbeafe,_transparent_35%),radial-gradient(circle_at_bottom_right,_#cffafe,_transparent_35%),#f8fafc]" />

      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-100/50 blur-3xl" />

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <span className="inline-flex rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-700 backdrop-blur-sm">
            Our Products
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 lg:text-5xl">
            Insurance Solutions
            <span className="block bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
              For Every Need
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Comprehensive insurance products designed to protect
            individuals, families, businesses and investments across
            South Sudan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-10">
          {/* Navigation */}
          <div>
            {/* Mobile */}
            <div className="flex gap-3 overflow-x-auto pb-2 lg:hidden">
              {products.map((product) => {
                const Icon = product.icon;

                return (
                  <button
                    key={product.id}
                    onClick={() => setActive(product)}
                    className={`flex min-w-[190px] items-center gap-3 rounded-2xl border px-4 py-4 transition-all duration-300 ${
                      active.id === product.id
                        ? "border-blue-600 bg-white shadow-lg"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        active.id === product.id
                          ? "bg-blue-700 text-white"
                          : "bg-slate-100 text-blue-700"
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    <span className="text-sm font-semibold whitespace-nowrap">
                      {product.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Desktop */}
            <div className="hidden space-y-4 lg:block">
              {products.map((product) => {
                const Icon = product.icon;

                return (
                  <button
                    key={product.id}
                    onMouseEnter={() => setActive(product)}
                    onClick={() => setActive(product)}
                    className={`group flex w-full items-center gap-4 rounded-3xl border p-5 text-left transition-all duration-300 ${
                      active.id === product.id
                        ? "border-blue-600 bg-white shadow-xl"
                        : "border-slate-200 bg-white hover:border-cyan-300 hover:shadow-lg"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all ${
                        active.id === product.id
                          ? "bg-blue-700 text-white"
                          : "bg-slate-100 text-blue-700"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    <span className="font-semibold text-slate-900">
                      {product.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-[32px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
            >
              <div className="grid lg:h-[650px] lg:grid-cols-[1.1fr_0.9fr]">
                {/* Image */}
                <div className="relative h-[320px] sm:h-[420px] lg:h-full">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    priority
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white lg:bottom-10 lg:left-10 lg:max-w-md">
                    <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                      Insurance Solution
                    </div>

                    <h3 className="text-3xl font-bold lg:text-5xl">
                      {active.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-slate-200 lg:text-lg">
                      {active.description}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-6 sm:p-8 lg:p-10">
                  <span className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-600">
                    Coverage Benefits
                  </span>

                  <h3 className="mb-4 text-2xl font-bold text-slate-900 lg:text-3xl">
                    {active.title}
                  </h3>

                  <p className="mb-6 text-base leading-relaxed text-slate-600 lg:text-lg">
                    {active.description}
                  </p>

                  <div className="mb-8 grid gap-3">
                    {active.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-sm"
                      >
                        <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />

                        <span className="font-medium text-slate-700">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-3 self-start rounded-2xl bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800">
                    Get Quote
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}