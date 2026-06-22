"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  HeartPulse,
  Car,
  Home,
  Anchor,
  Plane,
  ShieldCheck,
  ArrowUpRight,
  Briefcase,
  HardHat,
  Sparkles,
  ChevronRight,
  Award,
} from "lucide-react";

import Container from "../ui/container";

const products = [
  {
    id: "health",
    title: "Health Insurance & Medical Schemes",
    short: "Health & Medical",
    icon: HeartPulse,
    image: "/images/health.jpg",
    category: "Managed Care Framework",
    tagline: "Quality healthcare made accessible, affordable, and stress-free.",
    features: ["In-Patient Hospitalization Cover", "Out-Patient Day-to-Day Wellness", "Direct Billing Hospital Network", "Chronic Support & Wellness Programs"],
    accentColor: "bg-blue-600",
    borderColor: "border-blue-600",
    textColor: "text-blue-600",
  },
  {
    id: "motor",
    title: "Motor Vehicle Insurance",
    short: "Motor Vehicle",
    icon: Car,
    image: "/images/motor.jpg",
    category: "Asset Protection",
    tagline: "Tailored options ensuring you are always on the move with peace of mind.",
    features: ["Comprehensive Accidental Damage", "Third-Party Liability (TPO)", "Theft & Fire Compensation", "Special Perils (Floods & Riots)"],
    accentColor: "bg-emerald-600",
    borderColor: "border-emerald-600",
    textColor: "text-emerald-600",
  },
  {
    id: "property",
    title: "Property: Fire & Burglary Insurance",
    short: "Property & Asset",
    icon: Home,
    image: "/images/property.jpg",
    category: "Risk Mitigation",
    tagline: "Robust policies designed to shield physical assets from damage and loss.",
    features: ["Fire & Allied Perils Protection", "Burglary & Housebreaking Entry", "Forcible Structural Damage Repairs", "All Risk Portable Asset Protection"],
    accentColor: "bg-slate-900",
    borderColor: "border-slate-900",
    textColor: "text-slate-900",
  },
  {
    id: "marine",
    title: "Marine & Goods in Transit",
    short: "Marine & Transit",
    icon: Anchor,
    image: "/images/marin.png",
    category: "Supply Chain Security",
    tagline: "Comprehensive cargo security across maritime corridors, air, and land routes.",
    features: ["Global Supply Chain Risks", "Vessel Grounding & Collision Cover", "Loading & Offloading Operations", "Overturning & Malicious Damage"],
    accentColor: "bg-cyan-600",
    borderColor: "border-cyan-600",
    textColor: "text-cyan-600",
  },
  {
    id: "construction",
    title: "Constructors All Risks (CAR)",
    short: "Constructors CAR",
    icon: HardHat,
    image: "/images/construction.png",
    category: "Engineering Industry",
    tagline: "Specialized, all-in-one risk management solutions for contract works.",
    features: ["Contract Works Damage Protection", "Plant & Heavy site Machinery", "Stored On-Site Building Materials", "Third-Party Operational Liability"],
    accentColor: "bg-amber-600",
    borderColor: "border-amber-600",
    textColor: "text-amber-600",
  },
  {
    id: "liability",
    title: "Fidelity Guarantee & Liabilities",
    short: "Fidelity & Liability",
    icon: Briefcase,
    image: "/images/fidelity.jpg",
    category: "Corporate Safeguards",
    tagline: "Protecting organizational financial health from specialized internal threats.",
    features: ["Employees Liability Work-Injuries", "Fidelity Guarantee Employee Fraud", "Forgery & Embezzlement Protection", "Personal Accident Evacuation Cover"],
    accentColor: "bg-violet-600",
    borderColor: "border-violet-600",
    textColor: "text-violet-600",
  },
  {
    id: "travel",
    title: "Travel Insurance Portfolio",
    short: "Travel Security",
    icon: Plane,
    image: "/images/travel.jpg",
    category: "Global Companionship",
    tagline: "Ensuring your business and leisure journeys remain entirely stress-free.",
    features: ["Emergency Medical Expenses Cover", "Trip Cancellations & Disruptions", "Baggage Loss & Secure Recovery", "Flight Delays & Connections Cover"],
    accentColor: "bg-indigo-600",
    borderColor: "border-indigo-600",
    textColor: "text-indigo-600",
  },
  {
    id: "life",
    title: "Life Insurance & Credit Life",
    short: "Life & Credit Solutions",
    icon: ShieldCheck,
    image: "/images/in-patient.png",
    category: "Financial Security",
    tagline: "Structured corporate frameworks securing long-term workforce welfare.",
    features: ["Employees Group Life Frameworks", "Credit Life Loan Debt Protection", "Permanent Total Disability Riders", "Compassionate Last Expense Payouts"],
    accentColor: "bg-rose-600",
    borderColor: "border-rose-600",
    textColor: "text-rose-600",
  },
];

export default function InsuranceProductsSection() {
  const [active, setActive] = useState(products[0]);

  return (
    <section className="relative bg-slate-50/50 py-20 lg:py-24 border-t border-b border-slate-200/60 overflow-hidden font-sans antialiased">
      <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Crisp Header System */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-16">
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900 border border-slate-200 shadow-sm rounded-none">
            <Sparkles className="h-3 w-3 text-blue-600" />
            Underwriting Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
            Comprehensive Corporate Risks Tailored
          </h2>
          <div className="w-12 h-1 bg-slate-900 mx-auto my-2 rounded-none" />
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto font-normal leading-relaxed tracking-wide">
            Koryom Insurance Company Limited manages complex risk exposures across South Sudan, delivering protection grounded in structural excellence.
          </p>
        </div>

        {/* Dynamic Architectural Layout Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start border border-slate-200 bg-white shadow-sm rounded-none">
          
          {/* Left Hand Sharp Vertical Menu Container */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto scrollbar-none border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/50">
            {products.map((product) => {
              const IconComponent = product.icon;
              const isSelected = active.id === product.id;

              return (
                <button
                  key={product.id}
                  onClick={() => setActive(product)}
                  className={`relative flex items-center justify-between gap-4 px-5 py-4 text-xs font-bold tracking-wider uppercase transition-all duration-200 text-left w-full border-r lg:border-r-0 lg:border-b border-slate-200/60 last:border-0 rounded-none ${
                    isSelected 
                      ? "text-slate-950 bg-white" 
                      : "text-slate-500 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <div className="flex items-center gap-3.5 relative z-10">
                    <IconComponent className={`h-4 w-4 shrink-0 ${isSelected ? product.textColor : "text-slate-400"}`} />
                    <span className="font-bold tracking-wide">{product.short}</span>
                  </div>
                  
                  <ChevronRight className={`h-3 w-3 transition-transform hidden lg:block relative z-10 ${isSelected ? "translate-x-0 text-slate-900" : "-translate-x-1 text-transparent"}`} />

                  {/* Left Side Highlight bar indicator replacing the round pill backdrops */}
                  {isSelected && (
                    <motion.div
                      layoutId="verticalSelectionIndicator"
                      className={`absolute left-0 top-0 bottom-0 w-1 ${product.accentColor} pointer-events-none z-20`}
                      transition={{ type: "spring", stiffness: 500, damping: 38 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Hand Hard-Edged Display Workspace Frame */}
          <div className="lg:col-span-8 min-h-[440px] bg-white rounded-none flex flex-col justify-stretch">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 h-full flex-1 rounded-none"
              >
                
                {/* Visual Cover Frame (Sharp Edges) */}
                <div className="md:col-span-5 relative min-h-[240px] md:min-h-full bg-slate-950 overflow-hidden rounded-none">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover object-center scale-100 brightness-[0.6] transition-transform duration-500 ease-out"
                  />
                  
                  {/* Category Micro Tag — Sharp Corner Block */}
                  <div className="absolute top-0 left-0 z-20 bg-slate-900 text-white px-3 py-1.5 flex items-center gap-1.5 border-b border-r border-white/10 rounded-none">
                    <Award className="h-3 w-3 text-amber-400" />
                    <span className="text-[9px] uppercase font-bold tracking-widest">{active.category}</span>
                  </div>
                </div>

                {/* Text Content Scope Details */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-8 bg-white rounded-none">
                  
                  <div className="space-y-3.5">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">
                      {active.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal tracking-wide">
                      {active.tagline}
                    </p>
                  </div>

                  {/* Sharp Matrix Checklist Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {active.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-2.5 bg-slate-50 border border-slate-200/70 rounded-none"
                      >
                        <div className={`h-1.5 w-1.5 ${active.accentColor} shrink-0 rounded-none`} />
                        <span className="text-[11px] font-bold text-slate-700 tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Refined Sharp Industrial CTA Framework */}
                  <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-none">
                    <Link
                      href={`/quote?scheme=${active.id}`}
                      className={`inline-flex items-center justify-center gap-2 text-xs font-bold tracking-wider uppercase text-white px-5 py-3 transition-colors rounded-none shadow-sm ${active.accentColor} hover:bg-opacity-90 active:scale-98`}
                    >
                      Request Quotation
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center text-xs font-bold tracking-wider uppercase text-slate-900 hover:text-slate-700 transition-colors px-3 py-2 border border-slate-200 hover:border-slate-300 bg-white rounded-none"
                    >
                      Consult Underwriter
                    </Link>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </section>
  );
}