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
  CheckCircle2,
  Users,
  Briefcase,
  Building2,
  Sparkles,
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
      "Comprehensive healthcare protection designed to ensure access to quality medical services and financial peace of mind.",
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
      "Protect your vehicles against accidents, theft, fire, and third-party liabilities with flexible coverage solutions.",
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
      "Protect buildings, inventory, equipment, and valuable assets from fire, burglary, and unexpected losses.",
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
      "Protect cargo and goods throughout domestic and international transportation routes.",
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
      "Travel confidently with protection against medical emergencies, disruptions, and travel-related risks.",
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
    image: "/images/in-patient.png",
    category: "Life Protection",
    audience: "Individuals, Families & Organisations",
    description:
      "Long-term financial protection solutions that secure your family's future and organizational commitments.",
    highlights: [
      "Group Life Cover",
      "Credit Life",
      "Last Expense Cover",
      "Family Protection",
    ],
    stat: "Long-Term Financial Security",
  },
];

const stats = [
  {
    icon: Users,
    title: "Individuals",
  },
  {
    icon: Building2,
    title: "Businesses",
  },
  {
    icon: Briefcase,
    title: "Corporate Teams",
  },
];

export default function InsuranceProductsSection() {
  const [active, setActive] = useState(products[0]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f010_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f010_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Insurance Solutions
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Protection Designed For
            <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Every Stage Of Life
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Discover tailored insurance solutions designed to protect
            individuals, families, businesses, and valuable assets across
            South Sudan and beyond.
          </p>
        </div>

        {/* Product Selector */}
        <div className="mt-14">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-none">
            {products.map((product) => {
              const Icon = product.icon;
              const activeState = active.id === product.id;

              return (
                <button
                  key={product.id}
                  onClick={() => setActive(product)}
                  className={`group flex min-w-[120px] flex-col items-center gap-3 rounded-3xl border p-4 transition-all duration-500 ${
                    activeState
                      ? "border-blue-700 bg-blue-700 text-white shadow-xl"
                      : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      activeState
                        ? "bg-white/15"
                        : "bg-slate-100 text-blue-700"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <span className="text-sm font-semibold">
                    {product.short}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left Image */}
              <div className="relative h-[420px] lg:h-auto min-h-[650px] overflow-hidden">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-1000"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10" />

                {/* Floating Cards */}
                <div className="absolute right-6 top-6 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    Coverage
                  </p>
                  <p className="mt-1 font-bold">{active.stat}</p>
                </div>

                <div className="absolute bottom-6 left-6 max-w-lg">
                  <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl">
                    {active.category}
                  </span>

                  <h3 className="mt-5 text-3xl font-black text-white lg:text-5xl">
                    {active.title}
                  </h3>

                  <p className="mt-4 text-slate-200">
                    {active.description}
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-center p-8 lg:p-14">
                <div className="inline-flex w-fit items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                  {active.audience}
                </div>

                <h3 className="mt-6 text-3xl font-black text-slate-950 lg:text-4xl">
                  What's Included
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Designed to provide dependable protection, financial security,
                  and peace of mind through comprehensive coverage options.
                </p>

                {/* Benefits */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {active.highlights.map((item) => (
                    <div
                      key={item}
                      className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-lg"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                          <CheckCircle2 size={16} />
                        </div>

                        <span className="font-semibold text-slate-800">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature Banner */}
                <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-700 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <Clock3 className="h-6 w-6" />

                    <div>
                      <h4 className="font-bold">Coverage Highlight</h4>
                      <p className="text-sm text-blue-100">
                        {active.stat}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Audience Cards */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-3xl border border-slate-200 bg-white p-4 text-center transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                          <Icon className="h-5 w-5 text-blue-700" />
                        </div>

                        <p className="mt-3 text-sm font-semibold text-slate-900">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Area */}
                <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <h4 className="text-xl font-bold text-slate-950">
                    Ready to protect what matters most?
                  </h4>

                  <p className="mt-2 text-slate-600">
                    Speak with our team and receive a tailored quotation based
                    on your specific protection needs.
                  </p>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/quote"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-900 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-800"
                    >
                      Get a Quote
                      <ArrowRight size={18} />
                    </Link>

                    <Link
                      href="/products"
                      className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700"
                    >
                      Explore Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}