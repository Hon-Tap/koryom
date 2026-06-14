"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  BadgeCheck,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/ui/container";

const features = [
  {
    icon: Award,
    title: "Commitment to Excellence",
    description:
      "Every client interaction is handled with professionalism, attention to detail and exceptional service.",
  },
  {
    icon: ShieldCheck,
    title: "Comprehensive Coverage",
    description:
      "From medical and motor insurance to marine, travel and life solutions tailored to your needs.",
  },
  {
    icon: BadgeCheck,
    title: "Integrity-Driven Claims",
    description:
      "Transparent and efficient claims processing designed to provide support when it matters most.",
  },
  {
    icon: TrendingUp,
    title: "Proactive Risk Management",
    description:
      "Helping individuals and businesses identify risks and safeguard valuable assets before losses occur.",
  },
];

const values = [
  "Integrity & Transparency",
  "Rapid Claims Response",
  "Customer-Centered Service",
  "Trusted Insurance Expertise",
];

export default function WhyChooseKoryomSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/50 blur-3xl" />
      </div>

      <Container className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-4xl text-center lg:mb-20"
        >
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-[#2f3e9e] shadow-sm">
            Why Choose Koryom
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Protection Built On
            <span className="block text-[#2f3e9e]">
              Trust & Excellence
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Delivering dependable insurance solutions through integrity,
            transparency, innovation and exceptional customer care.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:gap-16">
          {/* Features Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
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
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-[#2f3e9e] transition-all duration-300 group-hover:scale-110">
                    <Icon size={26} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Image + Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[32px] border border-white/50 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
              <div className="relative">
                <Image
                  src="/images/cons.jpg"
                  alt="Why Choose Koryom"
                  width={1000}
                  height={800}
                  className="h-[280px] w-full object-cover sm:h-[350px] lg:h-[420px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Your World, Protected
                  </h3>

                  <p className="mt-2 max-w-lg text-sm text-slate-200 sm:text-base">
                    We manage the risks of today so you can focus on
                    building a bolder tomorrow.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid gap-4">
                  {values.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#2f3e9e]" />

                      <span className="font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-3xl font-bold text-[#2f3e9e]">
                        Since 2020
                      </h4>

                      <p className="mt-1 text-sm text-slate-500">
                        Serving Individuals, Families & Businesses
                      </p>
                    </div>

                    <div className="rounded-2xl bg-blue-50 px-4 py-3 text-right">
                      <p className="text-sm font-semibold text-[#2f3e9e]">
                        South Sudan
                      </p>

                      <p className="text-xs text-slate-500">
                        Trusted Insurance Partner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}