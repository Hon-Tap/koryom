"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  SearchCheck,
  FileSignature,
  Building2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/components/ui/container";

// Enhanced taxonomy matching corporate enterprise risk profile
const services = [
  {
    icon: ShieldAlert,
    title: "Strategic Underwriting",
    subtitle: "Risk Placement Architecture",
    description:
      "Bespoke institutional policy structuring and comprehensive market placement aligned precisely with local regulatory demands and complex regional risks across South Sudan.",
    accent: "bg-blue-600",
  },
  {
    icon: SearchCheck,
    title: "Risk Engineering",
    subtitle: "Vulnerability Assessments",
    description:
      "Advanced identification and scientific evaluation of structural, operational, and financial exposures, backed by data-driven operational blueprints to mitigate liability.",
    accent: "bg-emerald-600",
  },
  {
    icon: FileSignature,
    title: "Claims Execution",
    subtitle: "Advocacy & Asset Recovery",
    description:
      "Rigorous technical processing, end-to-end adjustment legalities, and prompt advocacy channels designed to fast-track settlement capital and enforce policy compliance.",
    accent: "bg-rose-600",
  },
  {
    icon: Building2,
    title: "Corporate Advisory",
    subtitle: "Balance Sheet Security",
    description:
      "Board-level risk advisory, continuity strategy consulting, and structural workforce benefit engineering built to maintain macro-stability against unexpected market disruptions.",
    accent: "bg-slate-900",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-white py-20 lg:py-24 border-b border-slate-200 overflow-hidden font-sans antialiased">
      {/* Structural Minimal Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-slate-200" />
      
      <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Crisp Header System matching the architectural layout design */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-16">
          <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900 border border-slate-200 rounded-none">
            <Sparkles className="h-3 w-3 text-blue-600" />
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
            More Than Just Insurance Policies
          </h2>
          <div className="w-12 h-1 bg-slate-900 mx-auto my-2 rounded-none" />
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto font-normal leading-relaxed tracking-wide">
            Koryom Insurance Company Limited bridges corporate vulnerabilities with structural risk mitigation, delivering operational continuity through precision engineering.
          </p>
        </div>

        {/* Industrial Contiguous Structural Grid Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-200 bg-slate-100 gap-px rounded-none overflow-hidden shadow-sm">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-white p-6 sm:p-8 flex flex-col justify-between items-start gap-8 transition-colors duration-250 hover:bg-slate-50/50 rounded-none"
              >
                {/* Visual Top Highlight Accent Indicator on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-slate-900 transition-colors pointer-events-none" />

                <div className="space-y-6 w-full">
                  {/* Clean Technical Icon Wrapper Box */}
                  <div className="inline-flex h-12 w-12 items-center justify-center border border-slate-200 bg-slate-50 text-slate-900 transition-all duration-300 rounded-none group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950">
                    <Icon className="h-5 w-5 shrink-0" />
                  </div>

                  {/* Service Descriptive Metadata Block */}
                  <div className="space-y-2">
                    <span className="block text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                      {service.subtitle}
                    </span>
                    <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <div className="w-6 h-[2px] bg-slate-200 transition-all group-hover:w-10 group-hover:bg-slate-900" />
                    <p className="pt-2 text-xs leading-relaxed text-slate-600 font-normal tracking-wide">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Micro Action Trigger Anchor */}
                <div className="pt-4 w-full border-t border-slate-100 flex items-center justify-between text-slate-400 group-hover:text-slate-900 transition-colors">
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                    Analyze Capabilities
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </div>
                
              </motion.div>
            );
          })}
        </div>
        
      </Container>
    </section>
  );
}