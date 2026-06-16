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
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";

import Container from "../ui/container";

const portfolios = [
  {
    icon: Car,
    title: "Comprehensive & Third-Party Motor",
    description:
      "Enterprise fleet optimization and executive vehicle protection programs engineered against regional operational hazards.",
    badge: "Asset Protection",
  },
  {
    icon: Truck,
    title: "Goods in Transit Logistics",
    description:
      "Securing commercial freight corridors, supply chains, and high-value cargo distribution across all key economic networks.",
    badge: "Supply Chain",
  },
  {
    icon: PlaneTakeoff,
    title: "Umbrella Travel Insurance",
    description:
      "Global institutional travel risk management and medical evacuation infrastructure for corporate executives and teams.",
    badge: "Global Risk",
  },
  {
    icon: Coins,
    title: "Money & Specie Infrastructure",
    description:
      "High-security coverage models protecting cash-in-transit, bank vaults, liquid assets, and financial institution liabilities.",
    badge: "Capital Security",
  },
];

const capabilities = [
  "Institutional Capacity & High Capital Retention",
  "Custom Corporate Risk Underwriting Models",
  "Expedited Claims Liquidation Engine",
  "Regulatory Compliance Infrastructure",
];

const commercialGallery = [
  {
    src: "/images/umb.png",
    alt: "Premium commercial fleet logistics and comprehensive motor asset protection",
    span: "col-span-2 aspect-[21/9]"
  },
  {
    src: "/images/cargo.png",
    alt: "Cargo transit and logistics insurance line",
    span: "col-span-1 aspect-square"
  },
  {
    src: "/images/money.png",
    alt: "Secure financial capital and money-in-transit underwriting",
    span: "col-span-1 aspect-square"
  }
];

export default function WhoWeServeSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-24 lg:py-36 text-slate-900">
      
      {/* Decorative Structural Lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none opacity-40">
        <div className="absolute top-0 right-1/4 h-full w-[1px] bg-gradient-to-b from-slate-200 via-transparent to-transparent" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-12 xl:gap-20">
          
          {/* Left Column: Corporate Value Proposition */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
              Institutional Portfolios
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-5xl xl:text-6xl leading-[1.1]">
              Securing Commerce <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                & Capital Infrastructure
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg max-w-xl font-normal">
              Koryom shifts insurance from a reactive policy to corporate stability infrastructure. We underwrite the core operations driving South Sudan's commercial development.
            </p>

            {/* Premium Linear Checkmarks */}
            <div className="mt-8 space-y-4">
              {capabilities.map((item) => (
                <div key={item} className="flex items-start gap-3.5">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600 border border-blue-100">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  </div>
                  <span className="font-semibold text-slate-700 text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-slate-900 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Corporate Capabilities
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Premium High-Intent Commercial Grid Matrix */}
          <div className="grid grid-cols-2 gap-4">
            {commercialGallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md group ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-103 brightness-[0.93]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Area: Asymmetrical Re-engineered Portfolio Cards */}
        <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {portfolios.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
              >
                <div>
                  {/* Card Header Label Area */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-800 border border-slate-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                  <span>Analyze Matrix</span>
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}