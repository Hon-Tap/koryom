"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  HeartPulse,
  Car,
  Building2,
  Ship,
  Shield,
  Plane,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/components/ui/container";

const categories = [
  {
    id: "health",
    title: "Health Insurance & Medical Schemes",
    subtitle: "In-Patient • Out-Patient • Medical Schemes",
    description:
      "Precision-managed care framework offering affordable healthcare protection optimized for individuals, families, and enterprise workforces.",
    icon: HeartPulse,
    image: "/images/products/health-insurance.png",
    benefits: [
      "In-Patient Hospitalization Cover",
      "Out-Patient Day-to-Day Wellness",
      "Direct Billing Hospital Networks",
      "Corporate Managed Health Plans",
    ],
  },
  {
    id: "motor",
    title: "Motor Vehicle Insurance Matrix",
    subtitle: "Comprehensive • Third Party",
    description:
      "Robust asset protection ensuring complete operational indemnity for personal, commercial logistics, and heavy corporate transport fleets.",
    icon: Car,
    image: "/images/products/motor-insurance.png",
    benefits: [
      "Comprehensive Accidental Damage",
      "Third Party Operational Liability",
      "Theft, Fire & Malicious Damage",
      "Sovereign & Special Perils Cover",
    ],
  },
  {
    id: "property",
    title: "Property & Asset Mitigation",
    subtitle: "Fire • Burglary • Domestic Package",
    description:
      "Engineered structural policies shielding high-value office premises, complex physical hardware, and crucial industrial assets from catastrophic loss.",
    icon: Building2,
    image: "/images/products/property-insurance.png",
    benefits: [
      "Fire & Allied Natural Perils Protection",
      "Burglary & Forced Entry Cover",
      "Comprehensive Domestic Packages",
      "Fixed Portable Asset Insurance",
    ],
  },
  {
    id: "marine",
    title: "Marine & Cargo Transit Security",
    subtitle: "Marine • Goods • Cash In Transit",
    description:
      "End-to-end global supply chain risks coverage guarding freight across maritime corridors, air freight, and overland cross-border transit.",
    icon: Ship,
    image: "/images/products/marine-insurance.png",
    benefits: [
      "International Marine Transit Cargo",
      "Overland Goods in Transit Indemnity",
      "Secure Cash-In-Transit Risk Cover",
      "Loading & Discharge Protection",
    ],
  },
  {
    id: "life",
    title: "Life Insurance & Credit Solutions",
    subtitle: "Group Life • Credit Life",
    description:
      "Structured institutional financial safeguards designed to stabilize workforce welfare and protect against corporate debt liabilities.",
    icon: Shield,
    image: "/images/products/life-insurance.png",
    benefits: [
      "Group Life Corporate Frameworks",
      "Credit Life Debt Protection Protection",
      "Compassionate Critical Last Expenses",
      "Permanent Total Disability Riders",
    ],
  },
  {
    id: "travel",
    title: "Global Travel Insurance Portfolio",
    subtitle: "Business & Leisure Travel",
    description:
      "Uncompromising international security coverage designed to keep executive missions and cross-border operations entirely stress-free.",
    icon: Plane,
    image: "/images/products/travel-insurance.png",
    benefits: [
      "Emergency Medical Evacuation Cover",
      "Trip Delays & Absolute Cancellation",
      "Lost Luggage Recovery Compensation",
      "International Third-Party Liabilities",
    ],
  },
];

export default function QuotePage() {
  const [active, setActive] = useState("health");
  const [hovered, setHovered] = useState<string | null>(null);

  const current = useMemo(
    () =>
      categories.find((item) => item.id === (hovered || active)) || categories[0],
    [active, hovered]
  );

  return (
    <main className="relative min-h-screen bg-white font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* 1. ARCHITECTURAL MINIMAL BACKGROUND GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-px bg-slate-950">
          <div className="bg-white h-full" />
          <div className="bg-white h-full" />
          <div className="bg-white h-full" />
          <div className="bg-white h-full" />
        </div>
      </div>

      {/* 2. CORPORATE HEADER SYSTEM */}
      <section className="relative z-10 pt-20 pb-12 border-b border-slate-100">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 rounded-none">
              <Sparkles className="h-3 w-3 text-blue-600" />
              Underwriting Architectures
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-slate-950 tracking-tight">
              Institutional Risk <span className="font-sans font-bold text-blue-600 uppercase tracking-tight block sm:inline">Protection Plans</span>
            </h1>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-normal max-w-2xl mx-auto tracking-wide">
              Explore Koryom Insurance risk frameworks meticulously engineered to shield assets, workforce infrastructure, corporate liability, and long-term futures throughout South Sudan.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. INTERACTIVE CONTROL WORKSPACE */}
      <section className="relative z-10 py-16">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            
            {/* Pipeline Category Toggles Grid */}
            <div className="lg:col-span-7 grid gap-px bg-slate-200 border border-slate-200 shadow-sm">
              {categories.map((item) => {
                const Icon = item.icon;
                const isActive = item.id === active;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered(null)}
                    className={`group relative p-6 text-left transition-all duration-200 rounded-none overflow-hidden ${
                      isActive 
                        ? "bg-slate-950 text-white" 
                        : "bg-white text-slate-900 hover:bg-slate-50/70"
                    }`}
                  >
                    {/* Active Left Indicator Strip */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all ${
                      isActive ? "bg-blue-500" : "bg-transparent group-hover:bg-slate-300"
                    }`} />

                    <div className="flex items-start gap-4 justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 border transition-colors ${
                            isActive ? "bg-slate-900 border-slate-800 text-blue-400" : "bg-slate-50 border-slate-200 text-slate-700 group-hover:text-blue-600"
                          }`}>
                            <Icon size={16} className="shrink-0" />
                          </div>
                          <span className={`text-[9px] font-black uppercase tracking-widest ${
                            isActive ? "text-slate-400" : "text-blue-600"
                          }`}>
                            {item.subtitle.split("•")[0].trim()}
                          </span>
                        </div>

                        <h3 className={`text-sm font-bold uppercase tracking-tight ${
                          isActive ? "text-white" : "text-slate-950"
                        }`}>
                          {item.title}
                        </h3>

                        <p className={`text-[11px] leading-relaxed max-w-lg ${
                          isActive ? "text-slate-400" : "text-slate-500"
                        }`}>
                          {item.description}
                        </p>
                      </div>

                      <div className={`shrink-0 pt-1 transition-transform group-hover:translate-x-1 ${
                        isActive ? "text-blue-400" : "text-slate-300 group-hover:text-slate-900"
                      }`}>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Premium Synchronized Monitor Panel */}
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              
              <div className="border border-slate-200 bg-white shadow-sm p-8 space-y-6 relative overflow-hidden">
                
                {/* Structural Image Showcase Window */}
                <div className="relative h-48 w-full bg-slate-950 border border-slate-900 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="relative z-10 p-4 border border-white/10 bg-white/5 backdrop-blur-md text-white">
                    <current.icon size={28} className="text-blue-400" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-[9px] font-black tracking-widest text-blue-600 uppercase">
                    Active Inspection Console
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-tight text-slate-950">
                    {current.title}
                  </h2>
                  <p className="text-xs leading-relaxed text-slate-500 font-normal">
                    {current.description}
                  </p>
                </div>

                {/* Benefits Checklist Matrix */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  {current.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                      <span className="tracking-wide text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/quote?scheme=${current.id}`}
                    className="w-full flex items-center justify-center gap-2 border border-slate-900 bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider py-3.5 transition-colors rounded-none"
                  >
                    Initialize Coverage Request
                    <ArrowUpRight size={14} className="text-slate-400" />
                  </Link>
                </div>
              </div>

              {/* Expert Advisory Segment */}
              <div className="border border-slate-900 bg-slate-950 p-6 text-white space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-900 border border-slate-800 text-blue-400">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      Need Sovereign Advisory?
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Tailored regional compliance consultancy.
                    </p>
                  </div>
                </div>
                
                <p className="text-[11px] leading-relaxed text-slate-400 font-light">
                  Our professional underwriting desk evaluates corporate risk profiles to arrange maximum coverage limits within domestic budget constraints.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  Brief Corporate Desk
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* 4. SOLID END-RUN CALL TO ACTION FRAME */}
      <section className="relative z-10 py-16 bg-slate-50 border-t border-slate-200">
        <Container className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-slate-950">
            Secure Your Operational <span className="font-sans font-black uppercase tracking-tight text-blue-600">Balance Sheet</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-normal max-w-xl mx-auto leading-relaxed">
            Ensure long-term structural safety across South Sudan landscapes with precise risk engineering frameworks deployed directly by Koryom Insurance specialists.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-slate-900 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold uppercase tracking-wider px-6 py-3.5 transition-colors rounded-none shadow-sm"
            >
              Get Started Today
              <ArrowRight size={14} className="text-slate-500" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}