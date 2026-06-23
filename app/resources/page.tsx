"use client";

import { useState } from "react";
import { 
  FileText, 
  Download, 
  ArrowUpRight, 
  ShieldAlert, 
  BookOpen, 
  FileCheck, 
  ExternalLink,
  Search,
  Filter
} from "lucide-react";
import Container from "@/components/ui/container";

// Premium Institutional Resource Assets
const resourceCategories = [
  { id: "all", name: "All Registries" },
  { id: "claims", name: "Claims & Induction" },
  { id: "regulatory", name: "Corporate Compliance" },
  { id: "briefs", name: "Market Briefings" }
];

const resourcesData = [
  {
    title: "Corporate Claim Notification Registry",
    description: "The primary statutory master form required to initiate formal loss evaluations across all institutional property and asset structures.",
    category: "claims",
    fileSize: "4.2 MB",
    fileType: "PDF Document",
    version: "v2026.1"
  },
  {
    title: "Sovereign Risk Mitigation & Compliance Charter",
    description: "Official statutory handbook detailing underwriting benchmarks, corporate anti-fraud mandates, and South Sudan regulatory updates.",
    category: "regulatory",
    fileSize: "8.7 MB",
    fileType: "PDF Document",
    version: "v2025.4"
  },
  {
    title: "East African Logistics & Marine Transit Protocol",
    description: "A comprehensive operational blueprint covering cargo tracking, security escorts, and cross-border liability insurance requirements.",
    category: "briefs",
    fileSize: "3.1 MB",
    fileType: "Technical Briefing",
    version: "v2026.2"
  },
  {
    title: "Motor Fleet Comprehensive Policy Provisions",
    description: "Detailed legal framework outlining standard commercial fleet usage terms, exclusion criteria, and direct emergency dispatch channels.",
    category: "claims",
    fileSize: "2.9 MB",
    fileType: "PDF Document",
    version: "v2024.9"
  },
  {
    title: "Group Life & Fiduciary Escrow Guidelines",
    description: "Regulatory parameters protecting corporate entities, employee benefit distributions, and secure credit life operational matrices.",
    category: "regulatory",
    fileSize: "5.5 MB",
    fileType: "Legal Framework",
    version: "v2026.1"
  }
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Clean, instantaneous analytical filter matching the Koryom profile
  const filteredResources = resourcesData.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-slate-50 antialiased selection:bg-blue-600 selection:text-white min-h-screen">
      
      {/* SECTION 1: HIGH-IMPACT HERO WITH STAGGERED FADE-IN */}
      <section className="relative py-24 lg:py-32 bg-slate-950 text-white overflow-hidden border-b border-blue-900/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/98 to-blue-950/90" />
        </div>

        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-l-2 border-blue-500 pl-6 animate-fadeIn duration-700">
            <div className="max-w-3xl space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-blue-400 block tracking-widest animate-slideUp">
                Knowledge Base & Document Repository
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white animate-slideUp delay-100">
                Institutional Registries
              </h1>
              <p className="text-sm text-slate-400 max-w-xl font-normal leading-relaxed animate-slideUp delay-200">
                Access statutory filing paperwork, underwriting parameters, compliance directives, and specialized sector analyses curated by Koryom.
              </p>
            </div>
            
            <div className="shrink-0 pb-1 animate-slideUp delay-300">
              <span className="text-[11px] text-slate-500 font-mono">
                System Registry Synchronization Active // 2026
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: INTUITIVE FILTER AND CONTROL MATRIX */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Category Navigation Track */}
            <div className="flex flex-wrap gap-1 items-center overflow-x-auto no-scrollbar">
              {resourceCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`text-xs font-bold uppercase tracking-wider py-2.5 px-4 transition-all duration-300 border ${
                    activeCategory === category.id
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-transparent border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Micro Search Controller */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input
                type="text"
                placeholder="Query repository documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 pl-9 pr-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* SECTION 3: ANIMATED DOCUMENT MATRIX CONTENT GRID */}
      <section className="py-16 lg:py-24">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredResources.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
              {filteredResources.map((resource, index) => (
                <div
                  key={resource.title}
                  style={{ animationDelay: `${index * 75}ms` }}
                  className="bg-white border border-slate-200 p-6 flex flex-col justify-between transition-all duration-300 hover:border-blue-500 hover:shadow-md group relative overflow-hidden animate-slideUp"
                >
                  {/* Subtle Top Accent Accent Indicator */}
                  <div className="absolute top-0 left-0 w-1 h-0 bg-blue-600 transition-all duration-300 group-hover:h-full" />
                  
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="p-2.5 bg-slate-50 border border-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100">
                        <FileText size={18} />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-1 uppercase tracking-wider">
                        {resource.version}
                      </span>
                    </div>

                    <h3 className="mt-5 font-serif font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                      {resource.title}
                    </h3>
                    
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed max-w-2xl">
                      {resource.description}
                    </p>
                  </div>

                  {/* Asset Footer Actions */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-3 text-slate-400">
                      <span className="font-medium text-slate-500">{resource.fileType}</span>
                      <span>•</span>
                      <span>{resource.fileSize}</span>
                    </div>
                    
                    <button className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors">
                      Download Asset
                      <Download size={12} className="transition-transform group-hover:translate-y-0.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            /* Targeted Fallback Empty State Container */
            <div className="text-center py-20 border border-dashed border-slate-200 bg-white max-w-xl mx-auto p-8 animate-fadeIn">
              <ShieldAlert className="mx-auto text-slate-300 mb-4" size={32} />
              <h3 className="font-serif font-bold text-slate-900 text-sm">No Matching Files Registered</h3>
              <p className="mt-1 text-xs text-slate-500 max-w-xs mx-auto">
                No institutional document correlates with your unique search parameter. Please refine your query constraints.
              </p>
            </div>
          )}

        </Container>
      </section>

      {/* SECTION 4: INLINE GLOBAL REINSURANCE CREDENTIALS */}
      <section className="bg-slate-950 text-white py-16 border-t border-blue-950">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            <div className="flex gap-4 items-start pt-6 md:pt-0 first:pt-0">
              <BookOpen className="text-blue-400 shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="font-serif font-bold text-white text-sm">Transparency Standard</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">All published legal risk schedules correspond entirely with national underwriting codes.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start pt-6 md:pt-0 md:pl-8">
              <FileCheck className="text-blue-400 shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="font-serif font-bold text-white text-sm">Dynamic File Delivery</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">Documents are reviewed and timestamped continuously by compliance leads at the Buluk Secretariat.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start pt-6 md:pt-0 md:pl-8">
              <ExternalLink className="text-blue-400 shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="font-serif font-bold text-white text-sm">External Inquiries</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">For authenticated sovereign certificates or bespoke policy definitions, approach our central corporate desk.</p>
              </div>
            </div>

          </div>
        </Container>
      </section>

    </main>
  );
}