"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  SearchCheck,
  FileSignature,
  Building2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/ui/container";

// Enhanced taxonomy mapped directly to the industrial pillars shown in image_0aa685.jpg
const services = [
  {
    num: "1",
    icon: ShieldAlert,
    title: "Commitment to Excellence",
    subtitle: "Risk Placement Architecture",
    description:
      "We go beyond the fine print to ensure that every client interaction is handled with the highest level of professionalism, structural execution, and precise attention to detail.",
    textColor: "text-blue-600",
    borderColor: "border-blue-500",
  },
  {
    num: "2",
    icon: Building2,
    title: "Comprehensive Coverage",
    subtitle: "Balance Sheet Security",
    description:
      "Our diverse underwritten portfolio ranges from Marine and Construction to Personal Health and Corporate Group Life, allowing us to engineer bespoke insurance matrices.",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-500",
  },
  {
    num: "3",
    icon: FileSignature,
    title: "Integrity-Driven Claims",
    subtitle: "Advocacy & Asset Recovery",
    description:
      "Our primary objective is to minimize your corporate operational downtime and provide rapid financial capital deployment when it matters most, entirely free of bureaucratic hurdles.",
    textColor: "text-orange-600",
    borderColor: "border-orange-500",
  },
  {
    num: "4",
    icon: SearchCheck,
    title: "Proactive Risk Management",
    subtitle: "Vulnerability Assessments",
    description:
      "Our elite risk-engineering desk provides insightful advisory guidance to help enterprises identify operational vulnerabilities before they manifest as critical liabilities.",
    textColor: "text-amber-600",
    borderColor: "border-amber-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 py-20 lg:py-28 overflow-hidden font-sans antialiased text-white">
      
      {/* Decorative Overlay Watermark representing corporate handshake textures from image_0aa685.jpg */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/handshake-overlay.jpg')] bg-cover bg-center mix-blend-overlay pointer-events-none" />
      
      {/* Abstract Soft Radial Glow behind the central content structure */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: CRISP INSTITUTIONAL HEADLINE GRID */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white border border-white/20">
              <Sparkles className="h-3 w-3 text-blue-300" />
              Core Competencies
            </div>
            
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase text-white drop-shadow-sm">
                Why <br className="hidden lg:block" />Choose Us
              </h2>
              <div className="w-16 h-1 bg-white/80 mt-4" />
            </div>

            <p className="text-xs sm:text-sm text-blue-100/80 max-w-md font-light leading-relaxed tracking-wide">
              Koryom Insurance Company Limited bridges corporate vulnerabilities with structural risk mitigation, delivering operational continuity through precision engineering.
            </p>
          </div>

          {/* RIGHT COLUMN: RE-ENGINEERED COMPREHENSIVE FLUID PILLAR PLATFORM */}
          {/* Formulated systematically to follow the exact 4-node content flow inside image_0aa685.jpg */}
          <div className="lg:col-span-8 relative">
            
            {/* Embedded Central Structural Badge Core */}
            <div className="absolute hidden xl:flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-16 h-16 bg-white shadow-xl rounded-full border-4 border-slate-100">
              <CheckCircle2 className="h-7 w-7 text-blue-600 animate-pulse" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group relative bg-white p-6 lg:p-8 flex flex-col justify-between items-start min-h-[240px] rounded-none transition-all duration-300 hover:shadow-2xl border-l-4 shadow-md"
                    style={{ borderLeftColor: `var(--tw-border-opacity)` }}
                  >
                    {/* Architectural Border Visual Alignment */}
                    <div className={`absolute top-0 left-0 bottom-0 w-1 ${service.borderColor} opacity-100`} />

                    <div className="space-y-4 w-full">
                      {/* Metric Numeric Identifier Header Row */}
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <span className={`text-xl font-black tracking-tight ${service.textColor}`}>
                            {service.num}
                          </span>
                          <span className="w-4 h-px bg-slate-200" />
                          <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                            {service.subtitle}
                          </span>
                        </div>
                        
                        <div className="p-2 bg-slate-50 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                          <Icon className="h-4 w-4 shrink-0" />
                        </div>
                      </div>

                      {/* Main Service Description Segment */}
                      <div className="space-y-2">
                        <h3 className={`text-base font-bold uppercase tracking-tight ${service.textColor}`}>
                          {service.title}
                        </h3>
                        <p className="text-[11px] leading-relaxed text-slate-600 font-normal tracking-wide">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Technical Border Trim Element */}
                    <div className="w-full pt-4 mt-2 border-t border-slate-50 flex items-center justify-between text-slate-300 group-hover:text-slate-900 transition-colors">
                      <span className="text-[9px] uppercase font-black tracking-widest opacity-0 transform -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                        Institutional Framework
                      </span>
                      <div className={`w-1.5 h-1.5 rounded-full ${service.textColor} opacity-30 group-hover:opacity-100 transition-opacity`} />
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}