import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  HeartPulse,
  Car,
  Building2,
  Ship,
  Briefcase,
  Users,
  Award,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import Container from "@/components/ui/container";

const values = [
  {
    title: "Integrity",
    description:
      "Built on transparency, accountability, and absolute trust in every client interaction.",
  },
  {
    title: "Excellence",
    description:
      "Delivering rigorous, professional insurance solutions backed by responsive service.",
  },
  {
    title: "Innovation",
    description:
      "Creating modern protection frameworks engineered for evolving personal and corporate risks.",
  },
  {
    title: "Customer Focus",
    description:
      "Centering our operational model around client stability, protection, and long-term security.",
  },
];

const reasons = [
  "Rapid, dependable claims support when mitigation matters most",
  "Comprehensive general and risk-stochastic life insurance options",
  "Tailored risk-transference parameters for individuals and enterprise scales",
  "Professional underwriting and proactive advisory management",
  "Deep local expertise synced with robust regional market intelligence",
  "Transparent contractual coverage execution absolute of unnecessary complexity",
];

const products = [
  { icon: HeartPulse, title: "Health Insurance" },
  { icon: Car, title: "Motor Insurance" },
  { icon: Building2, title: "Property Insurance" },
  { icon: Ship, title: "Marine Insurance" },
  { icon: Briefcase, title: "Business Insurance" },
  { icon: Shield, title: "Life Insurance" },
];

export default function AboutPage() {
  return (
    <main className="bg-white antialiased">
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
              Koryom Insurance Company Limited
            </span>

            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Your World,{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Protected.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg md:text-xl">
              Engineered to manage uncertainty, we buffer today's risk parameters so you can execute tomorrow's vision. Delivering premier corporate and consumer protection solutions across South Sudan.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
              <Link
                href="/quote"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow"
              >
                Get a Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-slate-700 hover:bg-slate-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CORPORATE PROFILE */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Who We Are
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Mitigating Risk Through Trust & Operational Excellence
              </h2>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                <p>
                  Established as an incorporated enterprise on{" "}
                  <strong className="font-semibold text-slate-900">February 28, 2020</strong>, 
                  Koryom Insurance Company Limited has systematically scale-optimized its structural layout to stand as a definitive anchor for corporate risk advisory and complete insurance distribution models.
                </p>

                <p>
                  We align an expanding catalog of general risk protection matrixes with tailored life structures to guard against asset depreciation, volatile liabilities, and unforeseen disruptions affecting local families, NGOs, and commerce.
                </p>

                <p>
                  Rather than distributing static policies, Koryom integrates dynamic client consultations to pinpoint environmental and operational exposures. Our specialized risk specialists build clean protection portfolios coupled with responsive claim verification architecture.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xl ring-1 ring-slate-900/5">
                <Image
                  src="/images/marin.png"
                  alt="Koryom Corporate Operations"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CORE STRATEGY */}
      <section className="bg-slate-50 py-24 sm:py-32 border-y border-slate-100">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Award size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">Vision</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                To stand as the absolute benchmark of financial trust and accessible protection across regional structures, empowering businesses and civic societies to cultivate capital and legacy confidently.
              </p>
            </div>

            <div className="relative rounded-2xl bg-slate-950 p-8 shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-cyan-400 ring-1 ring-white/10">
                <Shield size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Mission</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                To design bulletproof indemnity systems, maintain high-standard actuarial governance, and administer predictive risk engineering framework solutions that immunize client assets against localized and macro uncertainties.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* STRATEGIC VALUES */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Culture
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Principles That Govern Our Underwriting
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative rounded-2xl border border-slate-200/80 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-slate-900 transition-colors duration-200 group-hover:text-blue-600">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY KORYOM */}
      <section className="bg-slate-950 py-24 sm:py-32 text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Why Partner With Us
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Engineered Performance, Professional Service
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                We design past superficial contract definitions to guarantee that fiscal exposures are structured with precise attention to detail, proactive compliance, and absolute fiduciary alignment.
              </p>
            </div>

            <div className="space-y-4 lg:col-span-7">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-xl border border-slate-900 bg-slate-900/40 p-5 backdrop-blur-sm transition-colors duration-200 hover:border-slate-800"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-400" size={18} />
                  <p className="text-sm font-medium text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* INSURANCE SOLUTIONS MATRIX */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Core Frameworks
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Comprehensive Capital & Asset Indemnity
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.title}
                  className="group flex items-center gap-5 rounded-2xl border border-slate-200/70 p-6 transition-all duration-200 hover:border-blue-200 hover:bg-slate-50/50 hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-200 group-hover:scale-105">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {product.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* PERFORMANCE METRICS */}
      <section className="bg-slate-50 py-20 border-t border-slate-200/60">
        <Container>
          <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Clock3 size={20} />
              </div>
              <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">2020</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">Incorporated</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Shield size={20} />
              </div>
              <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">15+</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">Product Matrixes</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Users size={20} />
              </div>
              <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">100%</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">Client Centric</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Award size={20} />
              </div>
              <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">24/7</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">Advisory Pipeline</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-blue-950 via-slate-950 to-cyan-950 opacity-90" />
        
        <Container className="relative z-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-xl sm:p-16 lg:p-20">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready to Protect What Matters Most?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
              Partner with Koryom Insurance Company Limited and insulate your corporate or personal trajectory with tailored, institutional-grade risk coverage.
            </p>

            <div className="mt-10">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Get a Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}