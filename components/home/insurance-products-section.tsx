"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  HeartPulse,
  Car,
  Home,
  Ship,
  Plane,
  ShieldCheck,
  ArrowRight,
  Check,
  Users,
  Briefcase,
  Building2,
  Clock3,
} from "lucide-react";

import Container from "@/components/ui/container";

const products = [
  {
    id: "medical",
    title: "Medical Insurance",
    short: "Medical",
    icon: HeartPulse,
    image: "/images/med.png",
    category: "Health Protection",
    audience: "Individuals, Families & Corporate Teams",
    description:
      "Access quality healthcare with comprehensive medical protection designed to keep you and your loved ones covered when it matters most.",

    highlights: [
      "In-Patient Cover",
      "Out-Patient Cover",
      "Corporate Medical Plans",
      "Emergency Treatment",
    ],

    stat: "24/7 Medical Support",
  },

  {
    id: "motor",
    title: "Motor Vehicle Insurance",
    short: "Motor",
    icon: Car,
    image: "/images/motorinsur.png",
    category: "Vehicle Protection",
    audience: "Private, Commercial & Fleet Owners",
    description:
      "Protect your vehicle against accidents, theft, fire and third-party liabilities while staying confidently on the road.",

    highlights: [
      "Comprehensive Cover",
      "Third Party Liability",
      "Theft & Fire Protection",
      "Accidental Damage",
    ],

    stat: "Comprehensive & TPO Options",
  },

  {
    id: "property",
    title: "Fire & Burglary Insurance",
    short: "Property",
    icon: Home,
    image: "/images/property.png",
    category: "Property Protection",
    audience: "Homeowners & Businesses",
    description:
      "Secure buildings, office equipment, inventory and valuable assets against fire, burglary and unexpected losses.",

    highlights: [
      "Fire & Allied Perils",
      "Burglary Protection",
      "Asset Coverage",
      "Building Protection",
    ],

    stat: "Business & Home Security",
  },

  {
    id: "marine",
    title: "Marine & Transit Insurance",
    short: "Marine",
    icon: Ship,
    image: "/images/marin.png",
    category: "Cargo Protection",
    audience: "Importers, Exporters & Traders",
    description:
      "Comprehensive protection for cargo, goods and shipments throughout local and international transit.",

    highlights: [
      "Marine Cargo Cover",
      "Goods In Transit",
      "Import Protection",
      "Export Coverage",
    ],

    stat: "Global Transit Coverage",
  },

  {
    id: "travel",
    title: "Travel Insurance",
    short: "Travel",
    icon: Plane,
    image: "/images/travel.png",
    category: "Travel Protection",
    audience: "Business & Leisure Travellers",
    description:
      "Travel confidently with coverage against medical emergencies, trip interruptions and travel-related risks.",

    highlights: [
      "Medical Emergencies",
      "Trip Cancellation",
      "Lost Baggage",
      "Travel Assistance",
    ],

    stat: "Worldwide Travel Support",
  },

  {
    id: "life",
    title: "Life Insurance Solutions",
    short: "Life",
    icon: ShieldCheck,
    image: "/images/hero-ss.jpg",
    category: "Life Protection",
    audience: "Individuals, Families & Organisations",
    description:
      "Financial protection solutions including Group Life, Credit Life and Last Expense cover for lasting peace of mind.",

    highlights: [
      "Group Life Cover",
      "Credit Life",
      "Last Expense Cover",
      "Family Protection",
    ],

    stat: "Long-Term Financial Security",
  },
];

const trustStats = [
  {
    icon: Users,
    value: "Individuals",
    label: "Personal Protection",
  },
  {
    icon: Building2,
    value: "Businesses",
    label: "Corporate Solutions",
  },
  {
    icon: Briefcase,
    value: "Custom",
    label: "Tailored Coverage",
  },
];

export default function InsuranceProductsSection() {
  const [active, setActive] = useState(products[0]);

  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2f3e9e]">
            Insurance Solutions
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Protection Designed For
            <span className="block text-[#2f3e9e]">
              Every Stage Of Life
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Explore comprehensive insurance solutions designed to
            protect individuals, families, businesses and valuable
            assets across South Sudan.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-14">
          <div className="flex gap-3 overflow-x-auto pb-3">
            {products.map((product) => {
              const Icon = product.icon;
              const isActive = active.id === product.id;

              return (
                <button
                  key={product.id}
                  onClick={() => setActive(product)}
                  className={`group flex min-w-fit items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-[#2f3e9e] bg-[#2f3e9e] text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#2f3e9e]/30 hover:text-[#2f3e9e]"
                  }`}
                >
                  <Icon size={16} />
                  {product.short}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Product Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white"
          >
            <div className="grid lg:grid-cols-[1fr_1fr]">
              {/* Image */}
              <div className="relative h-[350px] sm:h-[450px] lg:h-[700px]">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {active.category}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-white lg:text-5xl">
                    {active.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-slate-200">
                    {active.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 lg:p-14">
                <div className="inline-flex w-fit items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                  {active.audience}
                </div>

                <h3 className="mt-6 text-3xl font-bold text-slate-950 lg:text-4xl">
                  What Is Covered
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Our {active.title.toLowerCase()} solution provides
                  reliable protection tailored to your needs while
                  ensuring peace of mind and financial security.
                </p>

                {/* Coverage */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {active.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2f3e9e]/10">
                        <Check
                          size={14}
                          className="text-[#2f3e9e]"
                        />
                      </div>

                      <span className="font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlight Card */}
                <div className="mt-8 rounded-3xl bg-[#2f3e9e] p-6 text-white">
                  <div className="flex items-center gap-3">
                    <Clock3 size={22} />

                    <div>
                      <h4 className="font-semibold">
                        Coverage Highlight
                      </h4>

                      <p className="text-sm text-blue-100">
                        {active.stat}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {trustStats.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-slate-200 p-4 text-center"
                      >
                        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                          <Icon
                            size={18}
                            className="text-[#2f3e9e]"
                          />
                        </div>

                        <p className="mt-3 font-semibold text-slate-900">
                          {item.value}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f3e9e] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#24317f]"
                  >
                    Get a Quote
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-[#2f3e9e] hover:text-[#2f3e9e]"
                  >
                    Learn More
                  </Link>
                </div>

                <p className="mt-4 text-sm text-slate-500">
                  Speak with our team for tailored recommendations
                  and a fast, no-obligation quotation.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}