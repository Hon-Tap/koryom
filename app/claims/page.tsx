// app/claims/page.tsx

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
} from "lucide-react";

import Container from "@/components/ui/container";

const process = [
  {
    icon: FileText,
    title: "Notify Us",
    description:
      "Report the incident immediately and provide basic information about the loss or damage.",
  },
  {
    icon: Upload,
    title: "Submit Documents",
    description:
      "Provide supporting documentation such as reports, photographs, invoices and policy details.",
  },
  {
    icon: Search,
    title: "Assessment",
    description:
      "Our claims specialists carefully review and verify all submitted information.",
  },
  {
    icon: CheckCircle2,
    title: "Settlement",
    description:
      "Approved claims are processed promptly in accordance with your policy terms.",
  },
];

const claimTypes = [
  {
    icon: HeartPulse,
    title: "Medical Claims",
    description:
      "In-patient, out-patient, medical schemes and healthcare related claims.",
  },
  {
    icon: Car,
    title: "Motor Claims",
    description:
      "Comprehensive and third-party motor vehicle insurance claims.",
  },
  {
    icon: Building2,
    title: "Property Claims",
    description:
      "Fire, burglary, domestic package and property damage claims.",
  },
  {
    icon: Ship,
    title: "Marine Claims",
    description:
      "Marine transit, goods in transit and cargo protection claims.",
  },
  {
    icon: Briefcase,
    title: "Business Claims",
    description:
      "Cash in transit, fidelity guarantee and liability related claims.",
  },
  {
    icon: Shield,
    title: "Life Claims",
    description:
      "Group life, last expense and credit life insurance claims.",
  },
];

const documents = [
  "Completed claim notification form",
  "Copy of policy schedule",
  "National identification document",
  "Police report (where applicable)",
  "Photographic evidence",
  "Medical reports and invoices",
  "Repair quotations or assessments",
  "Any additional supporting documentation",
];

const faqs = [
  {
    question: "How soon should I report a claim?",
    answer:
      "Claims should be reported immediately after an incident occurs to allow prompt assessment and support.",
  },
  {
    question: "What documents are required?",
    answer:
      "Required documents vary by claim type but generally include policy details, identification, reports and evidence of loss.",
  },
  {
    question: "How long does settlement take?",
    answer:
      "Settlement timelines depend on the complexity of the claim and the completeness of submitted documentation.",
  },
  {
    question: "Can businesses submit large claims?",
    answer:
      "Yes. Our team handles both personal and corporate claims across multiple insurance categories.",
  },
];

export default function ClaimsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}

      <section className="relative overflow-hidden bg-slate-950 py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900" />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

        <Container>
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur-md">
              Claims Support Center
            </span>

            <h1 className="mt-8 text-5xl font-bold text-white md:text-7xl">
              Fast, Fair &
              <span className="block text-cyan-300">
                Transparent Claims
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
              At Koryom Insurance, a claim is more than a process. It is a
              promise. Our dedicated team works quickly and professionally to
              help you recover, rebuild and move forward with confidence when
              unexpected events occur.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1"
              >
                Report a Claim
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/products"
                className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                View Coverage
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CLAIMS PROMISE */}

      <section className="py-24">
        <Container>
          <div className="rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 text-white shadow-2xl lg:p-16">
            <div className="grid gap-10 lg:grid-cols-3">
              <div>
                <Clock3 size={38} />
                <h3 className="mt-5 text-2xl font-bold">
                  Rapid Response
                </h3>
                <p className="mt-3 text-blue-100">
                  We respond quickly and guide you through every stage of the
                  claims process.
                </p>
              </div>

              <div>
                <ShieldCheck size={38} />
                <h3 className="mt-5 text-2xl font-bold">
                  Fair Assessment
                </h3>
                <p className="mt-3 text-blue-100">
                  Every claim is reviewed professionally and transparently.
                </p>
              </div>

              <div>
                <CheckCircle2 size={38} />
                <h3 className="mt-5 text-2xl font-bold">
                  Reliable Settlement
                </h3>
                <p className="mt-3 text-blue-100">
                  Efficient settlement designed to minimize disruption and help
                  you recover faster.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PROCESS */}

      <section className="bg-slate-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Claims Process
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
              Simple & Stress-Free
            </h2>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="group rounded-[32px] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                    <Icon className="text-blue-600" />
                  </div>

                  <div className="mt-6 text-sm font-semibold text-blue-600">
                    Step {index + 1}
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CLAIM TYPES */}

      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Coverage Areas
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
              Claims We Handle
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {claimTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[32px] border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  <Icon
                    size={34}
                    className="text-blue-600 transition duration-300 group-hover:scale-110"
                  />

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* DOCUMENTS */}

      <section className="bg-slate-950 py-24 text-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Documentation
              </span>

              <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                Required Documents
              </h2>

              <p className="mt-6 text-lg text-slate-300">
                To ensure faster processing, please prepare the following
                documentation before submitting your claim.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="space-y-5">
                {documents.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 text-cyan-400"
                    />

                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SUPPORT */}

      <section className="py-24">
        <Container>
          <div className="rounded-[40px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 shadow-xl lg:p-16">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Emergency Assistance
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Need Immediate Support?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
                Our team is ready to assist you with claim reporting,
                documentation guidance and policy support.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
                <Phone className="mx-auto text-blue-600" size={32} />

                <h3 className="mt-4 font-bold text-slate-900">
                  Call Us
                </h3>

                <p className="mt-2 text-slate-600">
                  +211 927 815 160
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
                <Mail className="mx-auto text-blue-600" size={32} />

                <h3 className="mt-4 font-bold text-slate-900">
                  Email Us
                </h3>

                <p className="mt-2 text-slate-600 break-all">
                  Koryominsuranc65@gmail.com
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
                <MapPin className="mx-auto text-blue-600" size={32} />

                <h3 className="mt-4 font-bold text-slate-900">
                  Visit Us
                </h3>

                <p className="mt-2 text-slate-600">
                  Buluk National Traffic Police HQs
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}

      <section className="bg-slate-50 py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                FAQs
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-16 space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[28px] bg-white p-8 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle
                      size={22}
                      className="mt-1 text-blue-600"
                    />

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {faq.question}
                      </h3>

                      <p className="mt-3 leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-800" />

        <Container>
          <div className="relative rounded-[40px] border border-white/10 bg-white/10 p-12 text-center backdrop-blur-xl lg:p-20">
            <h2 className="mx-auto max-w-4xl text-4xl font-bold text-white lg:text-6xl">
              We're Here When You Need Us Most
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
              Submit your claim today and let our team guide you through a
              seamless and transparent process.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1"
              >
                Start Your Claim
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}