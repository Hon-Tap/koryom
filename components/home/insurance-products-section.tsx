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
    <section className="relative bg-white py-16 lg:py-24 border-b border-slate-200 font-sans antialiased">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. CRISP INSTITUTIONAL HEADER FRAME */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-slate-800">
              <Sparkles className="h-3 w-3 text-blue-600" />
              Corporate Underwriting Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-slate-900 tracking-tight">
              Comprehensive Institutional Risk Portfolios
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed tracking-wide">
              Koryom Insurance Company Limited manages complex risk exposures across South Sudan, delivering mitigation frameworks grounded in structural excellence.
            </p>
          </div>
          
          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-slate-900 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold uppercase tracking-wider px-5 py-3 transition-colors"
            >
              Download Risk Matrix
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-500" />
            </Link>
          </div>
        </div>

        {/* 2. PREMIUM ADAPTIVE METRIC CARD GRID */}
        {/* Styled to precisely reference the design pattern visible in image_0a9ae4.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-slate-200 border-x border-b border-slate-200">
          {productMatrix.map((product) => {
            const Icon = product.icon;
            const isTargeted = hoveredCard === product.id;

            return (
              <div
                key={product.id}
                className="bg-white p-6 flex flex-col justify-between relative group/card transition-all duration-300 overflow-hidden min-h-[380px]"
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* 
                  Refined Graphic Background Structure matching image_0a9ae4.png.
                  Uses an elegant light-blend transparency matrix instead of muddy dark masks.
                */}
                <div 
                  className={`absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none ${
                    isTargeted ? "opacity-35" : "opacity-0"
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-right-bottom mix-blend-multiply filter contrast-115 brightness-105 transition-transform duration-700 scale-100 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/90 to-white/10" />
                </div>

                {/* Card Structural Info Core */}
                <div className="relative z-10 space-y-4">
                  
                  {/* Top Header Plate Row */}
                  <div className="flex items-center justify-between">
                    <div className="p-2 border border-slate-200 bg-slate-50 text-slate-900 group-hover/card:border-blue-200 group-hover/card:bg-blue-50 group-hover/card:text-blue-600 transition-colors">
                      <Icon className="h-4 w-4 shrink-0" />
                    </div>
                    
                    <div className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200/60 px-2 py-0.5 text-[8px] font-bold text-slate-400 tracking-wider uppercase group-hover/card:border-blue-100 group-hover/card:text-blue-500 transition-colors">
                      <Award className="h-2.5 w-2.5 text-slate-400 group-hover/card:text-blue-400" />
                      {product.category}
                    </div>
                  </div>

                  {/* Core Heading Text Area */}
                  <div className="space-y-1.5">
                    <h3 className={`text-sm font-bold tracking-tight uppercase transition-colors duration-200 ${
                      isTargeted ? "text-blue-600" : "text-slate-900"
                    }`}>
                      {product.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-normal font-normal">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Clean Technical Feature Matrix Lines */}
                  <div className="pt-4 space-y-2 border-t border-slate-100">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <span className={`w-1 h-1 transition-colors shrink-0 ${
                          isTargeted ? "bg-blue-600" : "bg-slate-300"
                        }`} />
                        <span className="text-[11px] font-medium text-slate-600 tracking-wide truncate">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Industrial Bottom Action Control Anchors */}
                <div className="relative z-10 pt-4 mt-6 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    href={`/quote?scheme=${product.id}`}
                    className="text-[10px] font-black uppercase tracking-wider text-blue-600 hover:text-blue-700 flex items-center gap-1 group/link"
                  >
                    Request Quote 
                    <ArrowUpRight className="h-3 w-3 transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    Consult Lines
                  </Link>
                </div>

                {/* Subtle Structural Bottom Active Indicator Bar aligned with image_0a9ae4.png */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transition-transform duration-300 transform origin-left ${
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