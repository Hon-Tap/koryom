"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/container";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Request a Quote",
    description:
      "Share your insurance requirements and our team will guide you through the available options.",
  },
  {
    icon: ShieldCheck,
    step: "02",
    title: "Choose Your Coverage",
    description:
      "Select a solution tailored to your personal, family or business protection needs.",
  },
  {
    icon: BadgeCheck,
    step: "03",
    title: "Stay Protected",
    description:
      "Enjoy ongoing support and dependable claims assistance whenever you need us.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#2f3e9e]">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Simple Insurance.
            <span className="block text-[#2f3e9e]">
              Clear Process.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Getting insured with Koryom is straightforward. From
            selecting the right coverage to receiving support when it
            matters most, we're with you every step of the way.
          </p>
        </motion.div>

        {/* Process Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative rounded-3xl border border-slate-200 bg-white p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-[#2f3e9e]">
                    <Icon size={24} />
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {item.description}
                </p>

                {index !== steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white">
                      <ArrowRight
                        size={18}
                        className="text-[#2f3e9e]"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500">
            Need help choosing the right cover? Our team is ready to
            provide guidance tailored to your needs.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}