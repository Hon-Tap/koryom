
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Users,
  Clock3,
  Handshake,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/container";

const features = [
  {
    icon: ShieldCheck,
    title: "Fast Claims Settlement",
    description:
      "Efficient and transparent claims processing that ensures support when it matters most.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Expertise",
    description:
      "Professional insurance specialists committed to protecting your future.",
  },
  {
    icon: Users,
    title: "Customer-Centered Service",
    description:
      "Personalized insurance solutions tailored to individuals and businesses.",
  },
  {
    icon: Clock3,
    title: "Responsive Support",
    description:
      "Dedicated assistance and guidance whenever you need help.",
  },
  {
    icon: Handshake,
    title: "Reliable Protection",
    description:
      "Comprehensive coverage built on trust, integrity and accountability.",
  },
  {
    icon: TrendingUp,
    title: "Financial Strength",
    description:
      "Strong foundations that allow us to honor commitments with confidence.",
  },
];

export default function WhyChooseKoryomSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#dbeafe,_transparent_35%),radial-gradient(circle_at_bottom_right,_#cffafe,_transparent_35%),white]" />

      <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-3xl" />

      <Container className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center lg:mb-24"
        >
          <span className="inline-flex rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold tracking-[0.25em] text-cyan-700 backdrop-blur-sm">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Protection Backed By
            <span className="block bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
              Trust & Excellence
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Delivering dependable insurance solutions through expertise,
            transparency and exceptional customer service across South Sudan.
          </p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/why-choose.jpg"
                alt="Koryom Insurance"
                width={900}
                height={1200}
                className="h-[450px] w-full object-cover object-center sm:h-[550px] lg:h-[700px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Protection You Can Trust
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-200 sm:text-base">
                  Helping individuals, families and businesses safeguard
                  their future through reliable insurance solutions.
                </p>
              </div>
            </div>

            {/* Floating Experience Card */}
            <div className="absolute bottom-5 right-5 rounded-3xl border border-white/20 bg-white/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:px-6 sm:py-5 lg:-bottom-8 lg:-right-8">
              <div className="text-3xl font-bold text-blue-700 lg:text-4xl">
                15+
              </div>

              <div className="text-sm text-slate-600">
                Years of Excellence
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-200 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-cyan-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700 group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <h3 className="mb-3 text-lg font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>

                    <div className="mt-4 flex items-center text-sm font-medium text-blue-700 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn More
                      <ArrowRight
                        size={16}
                        className="ml-2"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

