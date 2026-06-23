"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  Upload,
  Search,
  CheckCircle2,
  Clock3,
  Phone,
  Mail,
  MapPin,
  HeartPulse,
  Car,
  Building2,
  Ship,
  Briefcase,
  Shield,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import Container from "@/components/ui/container";

const processSteps = [
  {
    icon: FileText,
    title: "1. Notice of Loss",
    description: "Initiate formal reporting immediately by providing critical timeline markers and incident parameters.",
  },
  {
    icon: Upload,
    title: "2. Evidence Lodgement",
    description: "Submit all itemized receipts, validations, and photographic material securely to our clearing desk.",
  },
  {
    icon: Search,
    title: "3. Legal & Risk Audit",
    description: "Specialized underwriters evaluate structural claim parameters objectively against contract provisions.",
  },
  {
    icon: CheckCircle2,
    title: "4. Fast Liquidation",
    description: "Approved settlements are disbursed cleanly through verified banking coordinates with zero friction.",
  },
];

const claimTypes = [
  { icon: Building2, title: "Asset & Property Claims", description: "Indemnity structures guarding against structural fire, active burglary, and corporate compound damages." },
  { icon: Car, title: "Motor Fleet Claims", description: "Direct commercial mitigation covering comprehensive private transit portfolios and logistics machinery." },
  { icon: Ship, title: "Marine Cargo Claims", description: "Strategic protection matrices tracking international ocean-freight transit and inland supply chain distributions." },
  { icon: Briefcase, title: "Enterprise Liability", description: "Advanced liability, cash-in-transit parameters, and professional fidelity guarantee structures." },
  { icon: HeartPulse, title: "Corporate Medical", description: "In-patient diagnostics and specialized corporate medical schemes managed via authorized provider frameworks." },
  { icon: Shield, title: "Group Life Schemes", description: "Group life structures, secure credit insurance protection, and structured capital security lines." },
];

const documents = [
  "Executed Koryom Corporate Claim Form",
  "Validated Policy Schedule & Certificate copy",
  "Official Identification (Passport or Corporate ID)",
  "Authenticated Police Abstract or Incident Report",
  "Dated photographic proof of structural/vehicular damage",
  "Itemized medical invoices and certified hospital receipts",
];

const faqsData = [
  {
    question: "What is the standard notification window?",
    answer: "Incidents must be registered within 24 to 48 hours. Swift notifications enable our regional claims risk engineers to compile clean validation parameters, facilitating faster payment tracks.",
  },
  {
    question: "Can multi-currency settlements be executed?",
    answer: "Yes. Given our unique positioning across South Sudanese markets, our underwriting infrastructure accommodates diverse financial clearances tailored to multi-tiered risk structures.",
  },
  {
    question: "How long does a complex assessment pipeline take?",
    answer: "Standard retail lines settle within days of complete file log submission. Major structural, commercial property, or marine transit evaluations are prioritized for fast-track processing to limit operational downtime.",
  },
];

export default function ClaimsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="bg-slate-50 antialiased selection:bg-blue-600 selection:text-white">
      
      {/* SECTION 1: INSTITUTIONAL HERO */}
      <section className="relative py-24 lg:py-32 bg-slate-950 text-white overflow-hidden border-b border-blue-900/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-blue-950/90" />
        </div>

        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-l-2 border-blue-500 pl-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-blue-400 block">
                Fiduciary Commitment & Integrity
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white">
                Claims Liquidation & Settlement
              </h1>
              <p className="text-sm text-slate-400 max-w-xl font-normal leading-relaxed">
                At Koryom, claims processing is the ultimate validation of our pledge. We mitigate complex sovereign risks through transparent verification pipelines.
              </p>
            </div>
            
            <div className="flex sm:items-center gap-4 shrink-0">
              <a
                href="#intake"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-none transition-colors duration-200"
              >
                Initiate Filing
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: THREE CORE PILARS */}
      <section className="bg-white border-b border-slate-200">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-8 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex gap-4 items-start pt-6 md:pt-0 first:pt-0">
              <Clock3 className="text-blue-600 shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-lg">Guaranteed Response</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">Immediate triage deployment following transmission of incident notifications.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start pt-6 md:pt-0 md:pl-8">
              <ShieldCheck className="text-blue-600 shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-lg">Objective Validation</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">Claims parameters are strictly cross-examined against contract structures without administrative delay.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start pt-6 md:pt-0 md:pl-8">
              <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-lg">Liquidation Velocity</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">Rapid disbursal architecture built to insulate your enterprise from prolonged disruption.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: OPERATIONAL TIMELINE */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl border-l-2 border-blue-600 pl-4 mb-12">
            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 block">Workflow Metrics</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">The Verification Architecture</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="bg-white border border-slate-200 p-6 flex flex-col justify-between transition-all duration-200 hover:border-blue-500">
                  <div>
                    <div className="h-10 w-10 flex items-center justify-center bg-slate-50 text-blue-600 border border-slate-100">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-6 font-serif font-bold text-base text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 4: COVERAGE MATRIX */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl border-l-2 border-blue-600 pl-4 mb-12">
            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 block">Sovereign Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">Specialized Portfolios Handled</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {claimTypes.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 border border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-150">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-blue-50 text-blue-600 shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 5: COMPLIANCE DOCUMENTATION */}
      <section className="bg-slate-950 py-20 text-white">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 border-l-2 border-blue-500 pl-4">
              <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 block">Risk Controls</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">Required Documentation</h2>
              <p className="mt-4 text-xs leading-relaxed text-slate-400 max-w-sm">
                Compiling these primary verification records beforehand accelerates clearance protocols and guarantees seamless desk dispatch.
              </p>
            </div>

            <div className="lg:col-span-7 bg-slate-900 border border-blue-900/30 p-6 md:p-8">
              <div className="grid gap-3 sm:grid-cols-1">
                {documents.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 py-2 border-b border-slate-800 last:border-b-0">
                    <CheckCircle2 className="shrink-0 text-blue-400" size={14} />
                    <span className="text-xs text-slate-300 font-normal tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6: INTAKE PIPELINE */}
      <section id="intake" className="py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-6">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl border-l-2 border-blue-600 pl-4 mb-12">
            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 block">Direct Assistance</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">Immediate Claims Lodgement</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="border border-slate-200 bg-slate-50/50 p-6">
              <Phone className="text-blue-600 mb-4" size={18} />
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400">Institutional Phone Line</h3>
              <p className="mt-2 text-sm font-bold text-slate-900">+211 927 815 160</p>
              <p className="text-[10px] text-slate-500 mt-1">Direct Headquarters Line</p>
            </div>

            <div className="border border-slate-200 bg-slate-50/50 p-6">
              <Mail className="text-blue-600 mb-4" size={18} />
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400">Underwriting Desk</h3>
              <p className="mt-2 text-sm font-bold text-slate-900 break-all">info@koryominsurance.com</p>
              <p className="text-[10px] text-slate-500 mt-1">24/7 Digital Intake Pipeline</p>
            </div>

            <div className="border border-slate-200 bg-slate-50/50 p-6">
              <MapPin className="text-blue-600 mb-4" size={18} />
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400">HQ Secretariat</h3>
              <p className="mt-2 text-sm font-bold text-slate-900">Buluk National Traffic Police HQs</p>
              <p className="text-[10px] text-slate-500 mt-1">Juba, South Sudan</p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 7: FAQ ARCHITECTURE */}
      <section className="bg-slate-50 py-20">
        <Container className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 block">Support Protocol</span>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-1">Frequently Examined Questions</h2>
          </div>

          <div className="space-y-2">
            {faqsData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="border border-slate-200 bg-white transition-all">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left transition-colors duration-150 hover:bg-slate-50"
                  >
                    <span className="font-serif font-bold text-slate-900 text-sm sm:text-base">{faq.question}</span>
                    {isOpen ? <ChevronUp className="text-slate-400 shrink-0" size={16} /> : <ChevronDown className="text-slate-400 shrink-0" size={16} />}
                  </button>

                  <div className={`transition-all overflow-hidden duration-200 ${isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
                    <div className="border-t border-slate-100 p-5 bg-slate-50 text-xs leading-relaxed text-slate-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}