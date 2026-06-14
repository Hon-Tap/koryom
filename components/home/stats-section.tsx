"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
  Building2,
  BriefcaseBusiness,
  Globe,
} from "lucide-react";

import Container from "@/components/ui/container";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Comprehensive Protection",
    description:
      "Insurance solutions designed for individuals, families, businesses and organizations.",
  },
  {
    icon: BadgeCheck,
    title: "Integrity & Transparency",
    description:
      "Built on trust, accountability and professional service delivery.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centered Service",
    description:
      "Dedicated support and personalized guidance whenever you need assistance.",
  },
  {
    icon: Building2,
    title: "Corporate Solutions",
    description:
      "Tailored coverage for companies, institutions and growing enterprises.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Risk Management",
    description:
      "Helping clients identify, manage and reduce exposure to unforeseen risks.",
  },
  {
    icon: Globe,
    title: "Nationwide Reach",
    description:
      "Serving communities, businesses and organizations across South Sudan.",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Why Clients Trust Us
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Protecting What
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Matters Most
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            We combine expertise, integrity and customer-focused service
            to deliver dependable insurance solutions for individuals,
            families and businesses across South Sudan.
          </p>
        </motion.div>

        {/* Featured Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-3xl font-bold text-white lg:text-4xl">
                Your World, Protected.
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-blue-100">
                We manage the risks of today so you can focus on
                building a bolder tomorrow with confidence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-xl">
                <div className="text-sm font-semibold text-cyan-200">
                  Since
                </div>

                <div className="mt-1 text-3xl font-bold text-white">
                  2020
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-xl">
                <div className="text-sm font-semibold text-cyan-200">
                  Coverage
                </div>

                <div className="mt-1 text-3xl font-bold text-white">
                  6+
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-300 transition-all duration-300 group-hover:scale-110">
                  <Icon size={26} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}