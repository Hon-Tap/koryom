"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  Truck,
  PlaneTakeoff,
  Coins,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "../ui/container";

const portfolios = [
  {
    icon: Car,
    title: "Motor Insurance",
    description:
      "Comprehensive and third-party protection for private vehicles, executive fleets, transport operators, and corporate mobility assets.",
    badge: "Mobility",
  },
  {
    icon: Truck,
    title: "Goods in Transit",
    description:
      "End-to-end cargo protection for supply chains, logistics operators, distributors, importers, and commercial freight movement.",
    badge: "Logistics",
  },
  {
    icon: PlaneTakeoff,
    title: "Travel Insurance",
    description:
      "International travel protection covering medical emergencies, trip disruptions, evacuations, and business travel risks.",
    badge: "Global Cover",
  },
  {
    icon: Coins,
    title: "Money Insurance",
    description:
      "Specialized coverage for cash-in-transit, vault storage, financial institutions, and high-value monetary assets.",
    badge: "Financial Risk",
  },
];

const capabilities = [
  "Tailored Corporate Risk Solutions",
  "Fast & Transparent Claims Processing",
  "Strong Financial Protection Capacity",
  "Regulatory Compliance & Governance",
];

const commercialGallery = [
  {
    src: "/images/umb.png",
    alt: "Commercial insurance solutions",
    span: "col-span-2 aspect-[21/10]",
  },
  {
    src: "/images/cargo.png",
    alt: "Cargo insurance",
    span: "col-span-1 aspect-square",
  },
  {
    src: "/images/money.png",
    alt: "Money insurance",
    span: "col-span-1 aspect-square",
  },
];

export default function WhoWeServeSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-slate-200/50 blur-3xl" />

        <div className="absolute inset-y-0 left-[12%] hidden w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent lg:block" />
        <div className="absolute inset-y-0 right-[12%] hidden w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent lg:block" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] xl:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              Commercial Protection
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl xl:text-6xl">
              Protecting Businesses,
              <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Capital & Operations
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Koryom Insurance delivers dependable protection for businesses,
              institutions, logistics networks, financial assets, and everyday
              operations. Our solutions help organizations operate with
              confidence in an evolving risk environment.
            </p>

            <div className="mt-10 space-y-4">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Sparkles className="h-4 w-4" />
                  </div>

                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-7 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800"
              >
                Explore Our Expertise
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {commercialGallery.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className={`group relative overflow-hidden rounded-[28px] border border-white bg-white shadow-xl ${image.span}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Portfolio Cards */}
        {/* <div className="mt-24 lg:mt-32">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
                Insurance Solutions
              </span>

              <h3 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
                Built Around Real Business Needs
              </h3>
            </div>

            <p className="max-w-lg text-slate-600">
              Industry-focused insurance products designed to strengthen
              resilience, reduce uncertainty, and protect what matters most.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {portfolios.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50" />
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="mt-7 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                      <span className="text-sm font-semibold text-slate-500 transition-colors duration-300 group-hover:text-blue-700">
                        Learn More
                      </span>

                      <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-700" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div> */}
      </Container>
    </section>
  );
}