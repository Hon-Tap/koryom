// app/products/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  Car,
  Building2,
  Ship,
  Shield,
  Briefcase,
  Plane,
  Users,
  Wallet,
  CheckCircle2,
  Award,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/container";

const products = [
  {
    title: "Health Insurance",
    icon: HeartPulse,
    image: "/images/products/health.jpg",
    description:
      "Comprehensive medical protection covering individuals, families and organizations.",
    features: [
      "In-Patient Cover",
      "Out-Patient Cover",
      "Medical Schemes",
      "Corporate Health Plans",
    ],
  },
  {
    title: "Motor Insurance",
    icon: Car,
    image: "/images/products/motor.jpg",
    description:
      "Reliable protection for personal vehicles, fleets and commercial transport.",
    features: [
      "Comprehensive Cover",
      "Third Party Cover",
      "Fire & Theft",
      "Special Perils",
    ],
  },
  {
    title: "Property Insurance",
    icon: Building2,
    image: "/images/products/property.jpg",
    description:
      "Protection against fire, burglary, damage and unforeseen losses.",
    features: [
      "Fire & Allied Perils",
      "Burglary Cover",
      "Domestic Package",
      "Asset Protection",
    ],
  },
  {
    title: "Marine & Transit",
    icon: Ship,
    image: "/images/products/marine.jpg",
    description:
      "Secure your cargo, shipments and business operations throughout transit.",
    features: [
      "Marine Transit",
      "Goods in Transit",
      "Cash in Transit",
      "Cargo Protection",
    ],
  },
  {
    title: "Business Protection",
    icon: Briefcase,
    image: "/images/products/business.jpg",
    description:
      "Designed to protect businesses, employees, operations and financial stability.",
    features: [
      "Employees Liability",
      "Fidelity Guarantee",
      "Risk Protection",
      "Corporate Solutions",
    ],
  },
  {
    title: "Travel Insurance",
    icon: Plane,
    image: "/images/products/travel.jpg",
    description:
      "Travel confidently with protection against unexpected disruptions worldwide.",
    features: [
      "Medical Emergencies",
      "Trip Delays",
      "Lost Luggage",
      "Personal Liability",
    ],
  },
  {
    title: "Life Insurance",
    icon: Shield,
    image: "/images/products/life.jpg",
    description:
      "Long-term financial protection and peace of mind for families and employees.",
    features: [
      "Group Life",
      "Credit Life",
      "Last Expense",
      "Disability Benefits",
    ],
  },
  {
    title: "Construction Insurance",
    icon: Building2,
    image: "/images/products/construction.jpg",
    description:
      "Specialized protection for contractors, equipment and construction projects.",
    features: [
      "Contract Works",
      "Plant & Machinery",
      "Materials Cover",
      "Site Protection",
    ],
  },
];

const advantages = [
  {
    icon: Clock3,
    title: "Rapid Claims Response",
  },
  {
    icon: ShieldCheck,
    title: "Comprehensive Coverage",
  },
  {
    icon: Award,
    title: "Professional Expertise",
  },
  {
    icon: Users,
    title: "Customer-Centered Service",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}

      <section className="relative overflow-hidden bg-slate-950 py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900" />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

        <Container>
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur-md">
              Insurance Solutions
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
              Protection Designed
              <span className="block text-cyan-300">
                Around Your World
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
              Explore comprehensive insurance solutions built for
              individuals, families, businesses and institutions.
              Wherever life takes you, Koryom Insurance is ready
              to protect what matters most.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1"
              >
                Request Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/claims"
                className="rounded-2xl border border-white/15 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Claims Support
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* INTRO */}

      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Products Portfolio
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-6xl">
              Insurance Solutions Built For Every Stage Of Life
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              From health and motor insurance to corporate,
              construction and life protection, our solutions
              are tailored to safeguard your future and keep
              your ambitions moving forward.
            </p>
          </div>
        </Container>
      </section>

      {/* PRODUCTS GRID */}

      <section className="pb-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.title}
                  className="group overflow-hidden rounded-[28px] bg-white shadow-[0_15px_50px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)]"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-5 left-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600">
                        <Icon size={22} />
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {product.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-slate-600">
                      {product.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-blue-600"
                          />

                          <span className="text-sm text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600"
                    >
                      Learn More
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FEATURE SECTION */}

      <section className="bg-slate-50 py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why Koryom
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                More Than Insurance,
                <br />
                A Trusted Partner
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                We combine local expertise, responsive support,
                innovative products and professional risk management
                to provide protection that truly works when you
                need it most.
              </p>

              <div className="mt-10 grid gap-5">
                {advantages.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                        <Icon className="text-blue-600" />
                      </div>

                      <span className="font-medium text-slate-800">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px]">
                <Image
                  src="/images/products/insurance-team.jpg"
                  alt="Insurance Experts"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CORPORATE */}

      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Corporate Solutions
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
              Protecting Businesses Across Industries
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {[
              "Employees Liability",
              "Marine In Transit",
              "Goods In Transit",
              "Fidelity Guarantee",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Wallet
                  size={28}
                  className="mx-auto text-blue-600"
                />

                <h3 className="mt-5 font-semibold text-slate-900">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-800" />

        <Container>
          <div className="relative rounded-[40px] border border-white/10 bg-white/10 p-12 text-center backdrop-blur-xl lg:p-20">
            <h2 className="mx-auto max-w-4xl text-4xl font-bold text-white lg:text-6xl">
              Ready To Find The Right Coverage?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
              Speak with our insurance specialists and discover
              a solution tailored to your needs, goals and future.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1"
              >
                Get A Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/about"
                className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                About Koryom
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}