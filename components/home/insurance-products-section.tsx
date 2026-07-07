"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  Award,
  ChevronRight,
} from "lucide-react";

import Container from "../ui/container";

const productMatrix = [
  {
    id: "health",
    title: "Health Insurance & Medical Schemes",
    short: "Health & Medical",
    icon: HeartPulse,
    image: "/images/health.jpg",
    category: "Managed Care Framework",
    tagline: "Quality healthcare made accessible, affordable, and stress-free.",
    features: ["In-Patient Hospitalization Cover", "Out-Patient Day-to-Day Wellness", "Direct Billing Hospital Network", "Chronic Support Schemes"],
  },
  {
    id: "motor",
    title: "Motor Vehicle Insurance",
    short: "Motor Vehicle",
    icon: Car,
    image: "/images/motor.jpg",
    category: "Asset Protection",
    tagline: "Tailored options ensuring you are always on the move with peace of mind.",
    features: ["Comprehensive Accidental Damage", "Third-Party Liability (TPO)", "Theft & Fire Compensation", "Special Perils Coverage"],
  },
  {
    id: "property",
    title: "Property: Fire & Burglary Insurance",
    short: "Property & Asset",
    icon: Home,
    image: "/images/property.jpg",
    category: "Risk Mitigation",
    tagline: "Robust policies designed to shield physical assets from damage and loss.",
    features: ["Fire & Allied Perils Protection", "Burglary & Housebreaking Entry", "Forcible Structural Repairs", "All Risk Portable Assets"],
  },
  {
    id: "marine",
    title: "Marine & Goods in Transit",
    short: "Marine & Transit",
    icon: Anchor,
    image: "/images/marin.png",
    category: "Supply Chain Security",
    tagline: "Comprehensive cargo security across maritime corridors, air, and land routes.",
    features: ["Global Supply Chain Risks", "Vessel Grounding & Collision", "Loading & Offloading Actions", "Overturning & Malicious Damage"],
  },
  {
    id: "construction",
    title: "Constructors All Risks (CAR)",
    short: "Constructors CAR",
    icon: HardHat,
    image: "/images/construction.png",
    category: "Engineering Industry",
    tagline: "Specialized, all-in-one risk management solutions for contract works.",
    features: ["Contract Works Damage Protection", "Plant & Heavy Site Machinery", "Stored On-Site Materials", "Third-Party Operational Liability"],
  },
  {
    id: "liability",
    title: "Fidelity Guarantee & Liabilities",
    short: "Fidelity & Liability",
    icon: Briefcase,
    image: "/images/fidelity.jpg",
    category: "Corporate Safeguards",
    tagline: "Protecting organizational financial health from specialized internal threats.",
    features: ["Employees Liability Work-Injuries", "Fidelity Guarantee Fraud Cover", "Forgery & Embezzlement Protection", "Personal Accident Evacuation"],
  },
  {
    id: "travel",
    title: "Travel Insurance Portfolio",
    short: "Travel Security",
    icon: Plane,
    image: "/images/travel.jpg",
    category: "Global Companionship",
    tagline: "Ensuring your business and leisure journeys remain entirely stress-free.",
    features: ["Emergency Medical Expenses", "Trip Cancellations & Disruptions", "Baggage Loss Secure Recovery", "Flight Delays & Connections"],
  },
  {
    id: "life",
    title: "Life Insurance & Credit Life",
    short: "Life & Credit Solutions",
    icon: ShieldCheck,
    image: "/images/in-patient.png",
    category: "Financial Security",
    tagline: "Structured corporate frameworks securing long-term workforce welfare.",
    features: ["Employees Group Life Frameworks", "Credit Life Loan Debt Protection", "Permanent Total Disability Riders", "Compassionate Last Expenses"],
  },
];

export default function InsuranceProductsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative bg-slate-50 py-20 lg:py-32 font-sans antialiased overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-slate-200/50 to-transparent pointer-events-none -z-10" />

      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- INSTITUTIONAL HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-slate-200/60 rounded-none px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-700">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              Corporate Underwriting Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-slate-900 tracking-tight">
              Comprehensive Institutional <br className="hidden sm:block" /> Risk Portfolios
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-xl">
              Koryom Insurance Company Limited manages complex risk exposures across South Sudan, delivering mitigation frameworks grounded in structural excellence.
            </p>
          </div>
          
          <div className="shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-slate-900 text-white hover:bg-blue-600 text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-none transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-600/20"
            >
              Download Risk Matrix
              <ArrowUpRight className="h-4 w-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* --- PREMIUM SHARP CARD GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {productMatrix.map((product) => {
            const Icon = product.icon;
            const isTargeted = hoveredCard === product.id;

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-none border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-500 relative z-0"
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* 1. Image Header Section */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Top Category Badge (Pill shape to match image) */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase text-slate-800 shadow-sm">
                    <Award className="h-3 w-3 text-blue-600" />
                    {product.category}
                  </div>

                  {/* Overlapping Floating Icon Badge (Circular) */}
                  <div className="absolute -bottom-6 right-6 z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-[0_4px_15px_-3px_rgba(0,0,0,0.1)] transform transition-transform duration-500 group-hover:-translate-y-1">
                    <Icon className={`h-5 w-5 transition-colors duration-300 ${isTargeted ? "text-blue-600" : "text-slate-700"}`} />
                  </div>
                </div>

                {/* 2. Text & Features Body */}
                <div className="flex flex-col flex-grow p-6 pt-10 relative z-0">
                  <div className="space-y-3 mb-6">
                    <h3 className={`text-[17px] font-bold tracking-tight leading-tight transition-colors duration-300 pr-4 ${isTargeted ? "text-blue-600" : "text-slate-900"}`}>
                      {product.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed font-normal">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Technical Feature Matrix Lines */}
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 group/feature">
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 mt-[2px] text-blue-500/70 group-hover/feature:text-blue-600 transition-colors" />
                        <span className="text-[12px] font-medium text-slate-600 group-hover/feature:text-slate-900 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 3. Bottom Action Anchors */}
                  <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                    <Link
                      href={`/quote?scheme=${product.id}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Request Quote
                      <ArrowUpRight className="h-3.5 w-3.5 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    
                    <Link
                      href="/contact"
                      className="text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-800 transition-colors"
                    >
                      Consult
                    </Link>
                  </div>
                </div>

                {/* Active Indicator Bar (Bottom) */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transition-transform duration-500 ease-out transform origin-left ${
                    isTargeted ? "scale-x-100" : "scale-x-0"
                  }`} 
                />
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}