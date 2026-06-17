// app/about/page.tsx

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
      "Built on transparency, accountability, and trust in every client interaction.",
  },
  {
    title: "Excellence",
    description:
      "Delivering professional insurance solutions backed by responsive service.",
  },
  {
    title: "Innovation",
    description:
      "Creating modern protection solutions for evolving personal and business risks.",
  },
  {
    title: "Customer Focus",
    description:
      "Every policy, process, and decision is centered around our clients.",
  },
];

const reasons = [
  "Rapid claims support when it matters most",
  "Comprehensive general and life insurance solutions",
  "Tailored coverage for individuals and businesses",
  "Professional risk advisory services",
  "Trusted local expertise and market knowledge",
  "Transparent service without unnecessary complexity",
];

const products = [
  {
    icon: HeartPulse,
    title: "Health Insurance",
  },
  {
    icon: Car,
    title: "Motor Insurance",
  },
  {
    icon: Building2,
    title: "Property Insurance",
  },
  {
    icon: Ship,
    title: "Marine Insurance",
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
  },
  {
    icon: Shield,
    title: "Life Insurance",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}

      <section className="relative overflow-hidden bg-slate-950 py-32 lg:py-40">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900" />
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <Container>
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur-md">
              About Koryom Insurance
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
              Your World,
              <span className="block text-cyan-300">Protected.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              We manage the risks of today so you can focus on building a
              bolder tomorrow. Koryom Insurance Company delivers reliable
              protection solutions for individuals, families, organizations,
              and businesses across South Sudan.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-slate-950 transition hover:-translate-y-1"
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO WE ARE */}

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Who We Are
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                Protecting Futures Through Trust & Excellence
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
                <p>
                  Koryom Insurance Company Limited was officially registered on
                  28 February 2020 and has grown into a trusted provider of
                  comprehensive insurance solutions.
                </p>

                <p>
                  We provide a wide range of general and life insurance products
                  tailored to the evolving needs of individuals, families,
                  institutions, and businesses.
                </p>

                <p>
                  At Koryom, we do more than sell policies. We provide peace of
                  mind. Our experienced team works closely with clients to
                  identify risks, develop practical protection strategies, and
                  deliver responsive support when it matters most.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[40px] bg-slate-100">
                <Image
                  src="/images/about/about-company.jpg"
                  alt="Koryom Insurance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MISSION + VISION */}

      <section className="bg-slate-50 py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-white p-10 shadow-sm">
              <Award className="mb-6 text-blue-600" size={36} />

              <h3 className="text-3xl font-bold text-slate-900">Vision</h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                To be the most trusted insurance partner, providing innovative,
                accessible, and dependable protection solutions that empower
                communities and businesses to thrive confidently.
              </p>
            </div>

            <div className="rounded-[32px] bg-slate-950 p-10 text-white">
              <Shield className="mb-6 text-cyan-400" size={36} />

              <h3 className="text-3xl font-bold">Mission</h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                To deliver comprehensive insurance products, professional risk
                advisory services, and responsive claims support that protect
                our clients against uncertainty.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* VALUES */}

      <section className="py-24">
        <Container>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Values
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Principles That Guide Every Decision
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[28px] border border-slate-200 p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-slate-950 py-24 text-white">
        <Container>
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Why Choose Us
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Service With Excellence
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                We go beyond the fine print to ensure every interaction is
                handled with professionalism, attention to detail, and genuine
                commitment to client success.
              </p>
            </div>

            <div className="space-y-5">
              {reasons.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <CheckCircle2 className="mt-1 text-cyan-400" size={20} />

                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PRODUCTS */}

      <section className="py-24">
        <Container>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Expertise
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Comprehensive Insurance Solutions
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.title}
                  className="group rounded-[28px] border border-slate-200 p-8 transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  <Icon
                    size={34}
                    className="text-blue-600 transition group-hover:scale-110"
                  />

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {product.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* STATS */}

      <section className="bg-slate-50 py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="text-center">
              <Clock3 className="mx-auto text-blue-600" size={34} />
              <h3 className="mt-4 text-5xl font-bold text-slate-900">2020</h3>
              <p className="mt-2 text-slate-600">Established</p>
            </div>

            <div className="text-center">
              <Shield className="mx-auto text-blue-600" size={34} />
              <h3 className="mt-4 text-5xl font-bold text-slate-900">15+</h3>
              <p className="mt-2 text-slate-600">Insurance Products</p>
            </div>

            <div className="text-center">
              <Users className="mx-auto text-blue-600" size={34} />
              <h3 className="mt-4 text-5xl font-bold text-slate-900">100%</h3>
              <p className="mt-2 text-slate-600">Client Focused</p>
            </div>

            <div className="text-center">
              <Award className="mx-auto text-blue-600" size={34} />
              <h3 className="mt-4 text-5xl font-bold text-slate-900">24/7</h3>
              <p className="mt-2 text-slate-600">Support & Guidance</p>
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
              Ready to Protect What Matters Most?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
              Partner with Koryom Insurance and gain the confidence that comes
              from comprehensive protection, professional support, and trusted
              expertise.
            </p>

            <div className="mt-10">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-slate-950 transition hover:-translate-y-1"
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}