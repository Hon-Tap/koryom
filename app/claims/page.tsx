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
    title: "Notify Us",
    description:
      "Initiate your request immediately by providing the fundamental details of the loss or incident.",
  },
  {
    icon: Upload,
    title: "Submit Documents",
    description:
      "Upload corresponding receipts, photos, and validation reports directly to our secure clearing team.",
  },
  {
    icon: Search,
    title: "Assessment",
    description:
      "Our specialized underwriters and assessors examine the case parameters objectively and rapidly.",
  },
  {
    icon: CheckCircle2,
    title: "Settlement",
    description:
      "Approved claims are disbursed swiftly in total accordance with your policy structure.",
  },
];

const claimTypes = [
  {
    icon: HeartPulse,
    title: "Medical Claims",
    description:
      "In-patient diagnostics, out-patient clinic schedules, and tailored corporate medical schemes.",
  },
  {
    icon: Car,
    title: "Motor Claims",
    description:
      "Direct mitigation covering comprehensive private transit and third-party commercial vehicles.",
  },
  {
    icon: Building2,
    title: "Property Claims",
    description:
      "Indemnity guarding against structural fire, active burglary, and domestic package damages.",
  },
  {
    icon: Ship,
    title: "Marine Claims",
    description:
      "Strategic protection matrices covering cargo shipments, open sea transit, and logistics.",
  },
  {
    icon: Briefcase,
    title: "Business Claims",
    description:
      "Comprehensive liability, cash-in-transit protection, and fidelity guarantee structures.",
  },
  {
    icon: Shield,
    title: "Life Claims",
    description:
      "Group life parameters, secure credit life setups, and rapid-disbursal last expense clauses.",
  },
];

const documents = [
  "Completed and signed Koryom claim notification form",
  "Copy of active, validated policy schedule",
  "Official national identification documents",
  "Verifiable Police Abstract or incident report (where applicable)",
  "Dated photographic proof of property or vehicle damage",
  "Itemized medical bills, prescriptions, and official hospital receipts",
  "Professional third-party repair estimates and evaluations",
  "Fiduciary supporting statements requested by underwriting staff",
];

const faqsData = [
  {
    question: "How soon should I report a claim?",
    answer:
      "All claims should ideally be reported immediately or within 24–48 hours of the incident. Prompt notification ensures our forensic assessment teams can gather clear parameters, leading to a much faster settlement pipeline.",
  },
  {
    question: "What primary documents are mandatory?",
    answer:
      "While specific documentation varies based on exposure class (e.g., medical vs. motor), you will universally need a completed Claim Form, your active Policy Schedule, a Government-issued ID, and official verification (such as medical invoices, police reports, or damage photographs).",
  },
  {
    question: "How long does the assessment and settlement process take?",
    answer:
      "Our target is always minimal disruption. For straightforward claims with completely submitted documentation, processing can be completed within a few business days. Complex structural or marine exposures may require more thorough, collaborative assessments.",
  },
  {
    question: "Can corporate entities submit high-exposure claims?",
    answer:
      "Yes. Koryom Insurance Company Limited is structurally and financially built to handle high-capacity enterprise claims. Our risk engineers work directly with corporate managers to evaluate multi-layered exposures.",
  },
];

export default function ClaimsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white antialiased selection:bg-blue-500 selection:text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 py-32 sm:py-40 lg:py-48">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950" />
          <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
              Claims Support Center
            </span>

            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Fast, Fair &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Transparent Claims.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg md:text-xl">
              At Koryom, a claim is not an administrative delay—it is our primary promise kept. Our experienced adjusters operate with transparency and speed to resolve exposures, keeping your journey moving.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
              <a
                href="#report-now"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow"
              >
                Report a Claim
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-slate-700 hover:bg-slate-900"
              >
                View Coverage
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* THREE PILLARS PROMISE */}
      <section className="relative -mt-16 z-20">
        <Container>
          <div className="rounded-3xl border border-slate-200/50 bg-white p-8 shadow-xl md:p-12 lg:p-16">
            <div className="grid gap-12 md:grid-cols-3 md:divide-x md:divide-slate-100">
              <div className="flex flex-col items-start text-left md:px-4 first:pl-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Clock3 size={24} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">Rapid Response</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Our claims triage team answers queries rapidly, setting clear expectations from the first minute of your notification.
                </p>
              </div>

              <div className="flex flex-col items-start text-left md:px-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">Fair Assessment</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Every claim parameter is reviewed objectively by credentialed underwriters against simple, transparent contract terms.
                </p>
              </div>

              <div className="flex flex-col items-start text-left md:px-8 last:pr-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">Reliable Settlement</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Disbursals are expedited seamlessly through verified channels, ensuring you rebuild, recover, and resume securely.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-24 sm:py-32 bg-slate-50/50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Operational Pathway
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Simple, Stress-Free Claims Architecture
            </h2>
            <p className="mt-4 text-base text-slate-600">
              We have eliminated administrative friction to design a clear, four-step verification timeline.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-200 group-hover:scale-105">
                    <Icon size={22} />
                  </div>

                  <span className="absolute top-6 right-6 text-xs font-bold text-slate-300 group-hover:text-blue-200 transition-colors">
                    0{index + 1}
                  </span>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CLAIM TYPES MATRIX */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Operational Competencies
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Sectors We Actively Indemnify
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Our structured claims division maintains specialized desks for diverse asset, medical, and liability lines.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {claimTypes.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200/80 p-6 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50/50 hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-200 group-hover:scale-105">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* DOCUMENTS REQUIRED (DARK INTERCEPT) */}
      <section className="bg-slate-950 py-24 sm:py-32 text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Documentation
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Preparing Your Submissions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Having clear evidence accelerates claim resolution. Please gather these primary files before initiating formal claims reporting.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-sm">
                <div className="grid gap-4 sm:grid-cols-1">
                  {documents.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-2 transition-colors duration-150 hover:bg-white/[0.02] rounded-lg"
                    >
                      <CheckCircle2 className="mt-1 shrink-0 text-cyan-400" size={16} />
                      <span className="text-sm font-medium text-slate-300 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SUPPORT & EMERGENCY ASSISTANCE */}
      <section id="report-now" className="py-24 sm:py-32 scroll-mt-6">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-xl md:p-16">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Direct Contact Pipeline
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Need Immediate Support?
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Our claims team is fully available to guide you through initial damage evaluations, documentation filing, or direct on-site requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="group rounded-2xl border border-slate-200/60 bg-white p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Phone size={22} />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">Call Directly</h3>
                <p className="mt-2 text-sm text-slate-600 font-semibold hover:text-blue-600">
                  +211 927 815 160
                </p>
                <p className="text-xs text-slate-400 mt-1">Sovereign Juba Line</p>
              </div>

              <div className="group rounded-2xl border border-slate-200/60 bg-white p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail size={22} />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">Email Claims Desk</h3>
                <p className="mt-2 text-sm text-slate-600 font-semibold break-all hover:text-blue-600">
                  Koryominsuranc65@gmail.com
                </p>
                <p className="text-xs text-slate-400 mt-1">24 Hour Monitoring</p>
              </div>

              <div className="group rounded-2xl border border-slate-200/60 bg-white p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={22} />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">Visit HQ</h3>
                <p className="mt-2 text-sm text-slate-600 font-semibold">
                  Buluk National Traffic Police HQs
                </p>
                <p className="text-xs text-slate-400 mt-1">Juba, South Sudan</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ SECTION (WITH INTERACTIVE ACCORDIONS) */}
      <section className="bg-slate-50 border-t border-slate-200/60 py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Support Framework
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                Frequently Asked Inquiries
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faqsData.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between p-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <HelpCircle className="shrink-0 text-blue-600" size={18} />
                        <span className="font-bold text-slate-900 text-base sm:text-lg">
                          {faq.question}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="text-slate-400 shrink-0" size={18} />
                      ) : (
                        <ChevronDown className="text-slate-400 shrink-0" size={18} />
                      )}
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="border-t border-slate-100 p-6 bg-slate-50 text-sm leading-relaxed text-slate-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ACTION PLAN CTA */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-blue-950 via-slate-950 to-cyan-950 opacity-90" />

        <Container className="relative z-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-xl sm:p-16 lg:p-20">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              We Stand Ready to Serve You
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
              Get in touch with Koryom’s dedicated claim representatives to navigate resolution seamlessly, objectively, and transparently.
            </p>

            <div className="mt-10">
              <a
                href="#report-now"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Start Your Claim Setup
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}