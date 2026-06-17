"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  Car,
  Building2,
  Ship,
  Shield,
  Plane,
  Briefcase,
  Users,
  CheckCircle2,
} from "lucide-react";

const categories = [
  {
    id: "health",
    title: "Health Insurance",
    subtitle: "In-Patient • Out-Patient • Medical Schemes",
    description:
      "Affordable healthcare protection for individuals, families and organizations.",
    icon: HeartPulse,
    color:
      "from-cyan-500 via-blue-600 to-blue-700",
    glow: "bg-cyan-500/20",
    image: "/images/products/health-insurance.png",
    benefits: [
      "In-Patient Cover",
      "Out-Patient Cover",
      "Medical Schemes",
      "Corporate Health Plans",
    ],
  },
  {
    id: "motor",
    title: "Motor Insurance",
    subtitle: "Comprehensive • Third Party",
    description:
      "Protection for personal, commercial and fleet vehicles.",
    icon: Car,
    color:
      "from-blue-600 via-blue-700 to-slate-900",
    glow: "bg-blue-500/20",
    image: "/images/products/motor-insurance.png",
    benefits: [
      "Comprehensive Cover",
      "Third Party Cover",
      "Theft & Fire",
      "Special Perils",
    ],
  },
  {
    id: "property",
    title: "Property Insurance",
    subtitle: "Fire • Burglary • Domestic Package",
    description:
      "Secure homes, offices, equipment and valuable assets.",
    icon: Building2,
    color:
      "from-cyan-500 via-sky-600 to-blue-700",
    glow: "bg-sky-500/20",
    image: "/images/products/property-insurance.png",
    benefits: [
      "Fire & Allied Perils",
      "Burglary Protection",
      "Domestic Package",
      "Asset Protection",
    ],
  },
  {
    id: "marine",
    title: "Marine & Transit",
    subtitle: "Marine • Goods • Cash In Transit",
    description:
      "Protection for cargo, goods and valuable business assets in transit.",
    icon: Ship,
    color:
      "from-blue-500 via-cyan-600 to-teal-600",
    glow: "bg-cyan-500/20",
    image: "/images/products/marine-insurance.png",
    benefits: [
      "Marine Transit",
      "Goods In Transit",
      "Cash In Transit",
      "Cargo Protection",
    ],
  },
  {
    id: "life",
    title: "Life Insurance",
    subtitle: "Group Life • Credit Life",
    description:
      "Financial security and peace of mind for families and employees.",
    icon: Shield,
    color:
      "from-blue-700 via-slate-800 to-slate-950",
    glow: "bg-blue-500/20",
    image: "/images/products/life-insurance.png",
    benefits: [
      "Group Life",
      "Credit Life",
      "Last Expense",
      "Disability Benefits",
    ],
  },
  {
    id: "travel",
    title: "Travel Insurance",
    subtitle: "Business & Leisure Travel",
    description:
      "Stay protected wherever your journey takes you.",
    icon: Plane,
    color:
      "from-cyan-500 via-blue-600 to-indigo-700",
    glow: "bg-indigo-500/20",
    image: "/images/products/travel-insurance.png",
    benefits: [
      "Emergency Medical",
      "Trip Delays",
      "Lost Luggage",
      "Personal Liability",
    ],
  },
];

export default function QuotePage() {
  const [active, setActive] = useState("health");
  const [hovered, setHovered] = useState<string | null>(null);

  const current = useMemo(
    () =>
      categories.find(
        (item) => item.id === (hovered || active)
      ) || categories[0],
    [active, hovered]
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[40rem] w-[40rem] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[40rem] w-[40rem] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      {/* Hero */}

      <section className="relative z-10 px-6 pt-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              Insurance Solutions
            </span>

            <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
              Find The Perfect
              <span className="block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                Protection Plan
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
              Explore Koryom Insurance products designed
              to protect your health, family, property,
              business and future. Select a solution below
              to discover coverage tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Stage */}

      <section className="relative z-10 px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Cards Grid */}

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {categories.map((item) => {
                const Icon = item.icon;

                const isActive =
                  item.id === active;

                return (
                  <button
                    key={item.id}
                    onClick={() =>
                      setActive(item.id)
                    }
                    onMouseEnter={() =>
                      setHovered(item.id)
                    }
                    onMouseLeave={() =>
                      setHovered(null)
                    }
                    className={`group relative overflow-hidden rounded-[32px] bg-white text-left shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.15)]
                      
                      ${
                        isActive
                          ? "ring-2 ring-blue-500"
                          : ""
                      }`}
                  >
                    <div
                      className={`absolute -right-12 -top-12 h-40 w-40 rounded-full ${item.glow} blur-3xl`}
                    />

                    <div
                      className={`h-44 bg-gradient-to-br ${item.color} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-40 object-contain transition duration-700 group-hover:scale-110 group-hover:-translate-y-2"
                        />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                        <Icon
                          size={22}
                          className="text-blue-700"
                        />
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-blue-700">
                        {item.subtitle}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 font-semibold text-blue-700">
                        Explore Coverage
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Showcase Panel */}

            <div className="sticky top-28 h-fit">
              <div className="overflow-hidden rounded-[36px] bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
                <div
                  className={`relative h-72 bg-gradient-to-br ${current.color}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="h-60 object-contain transition-all duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-slate-900">
                    {current.title}
                  </h2>

                  <p className="mt-4 leading-relaxed text-slate-600">
                    {current.description}
                  </p>

                  <div className="mt-8 space-y-4">
                    {current.benefits.map(
                      (benefit) => (
                        <div
                          key={benefit}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-blue-600"
                          />

                          <span className="text-slate-700">
                            {benefit}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-10">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                    >
                      Request Quote
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[28px] bg-slate-950 p-8 text-white">
                <Users
                  size={28}
                  className="text-cyan-400"
                />

                <h3 className="mt-4 text-xl font-bold">
                  Need Expert Guidance?
                </h3>

                <p className="mt-3 text-slate-300">
                  Our team will help you identify the
                  right coverage based on your needs,
                  budget and risk profile.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-400"
                >
                  Talk To Our Team
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="relative z-10 px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-[40px] bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-600 p-10 text-center text-white shadow-2xl lg:p-16">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Protect What Matters Most
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Whether you need health, motor,
            property, marine, travel or life
            insurance, Koryom Insurance has a
            solution designed for you.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-900 transition-all duration-300 hover:-translate-y-1"
          >
            Get Started Today
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}