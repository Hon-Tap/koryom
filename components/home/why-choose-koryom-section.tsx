"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  BadgeCheck,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/container";

const features = [
  {
    icon: Award,
    title: "Commitment to Excellence",
    description:
      "We uphold the highest standards of professionalism, service quality, and accountability in every client engagement.",
  },
  {
    icon: ShieldCheck,
    title: "Comprehensive Protection",
    description:
      "From personal insurance to corporate risk solutions, our products are designed around real-world protection needs.",
  },
  {
    icon: BadgeCheck,
    title: "Responsive Claims Support",
    description:
      "A transparent claims process focused on efficiency, fairness, and delivering support when clients need it most.",
  },
  {
    icon: TrendingUp,
    title: "Proactive Risk Management",
    description:
      "We help individuals and organizations identify, mitigate, and manage risks before they become costly challenges.",
  },
];

const stats = [
  {
    value: "2020",
    label: "Established",
  },
  {
    value: "24/7",
    label: "Client Support",
  },
  {
    value: "SS",
    label: "Nationwide Reach",
  },
];

export default function WhyChooseKoryomSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-slate-200/60 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f010_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f010_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Why Choose Koryom
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Built On Trust.
            <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Focused On Protection.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Combining expertise, transparency, and customer-focused service to
            deliver dependable insurance solutions for individuals,
            businesses, and institutions.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center xl:gap-20">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[36px] border border-white bg-white shadow-[0_25px_80px_rgba(15,23,42,0.10)]">
              <div className="relative h-[420px] sm:h-[500px] lg:h-[700px]">
                <Image
                  src="/images/construction.png"
                  alt="Why Choose Koryom"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                {/* Floating Card */}
                <div className="absolute left-6 top-6 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    Trusted Protection
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    Insurance With Confidence
                  </p>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl">
                    Customer First Approach
                  </span>

                  <h3 className="mt-5 text-3xl font-black text-white lg:text-5xl">
                    Protecting What Matters Most
                  </h3>

                  <p className="mt-4 max-w-xl text-slate-200">
                    Our mission is to provide reliable insurance solutions that
                    empower individuals and businesses to move forward with
                    confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 left-6 right-6 hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl lg:block">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <h4 className="text-3xl font-black text-blue-700">
                      {stat.value}
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-5">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
                        <Icon size={24} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl font-bold text-slate-900">
                            {feature.title}
                          </h3>

                          <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-700" />
                        </div>

                        <p className="mt-3 leading-relaxed text-slate-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 lg:hidden">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm"
                >
                  <h4 className="text-2xl font-black text-blue-700">
                    {stat.value}
                  </h4>

                  <p className="mt-2 text-xs text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Statement */}
            <div className="mt-8 rounded-[32px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold">
                More Than Insurance.
              </h3>

              <p className="mt-3 leading-relaxed text-blue-100">
                We build lasting relationships through trust, expertise, and
                dependable protection. Our goal is to help every client feel
                secure today while preparing confidently for tomorrow.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}