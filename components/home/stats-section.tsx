"use client";

import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Clock3,
  Briefcase,
  Building2,
  Award,
} from "lucide-react";

import Container from "@/components/ui/container";

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Clients Protected",
  },
  {
    icon: ShieldCheck,
    value: "95%",
    label: "Claims Success Rate",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Customer Support",
  },
  {
    icon: Briefcase,
    value: "6+",
    label: "Insurance Products",
  },
  {
    icon: Building2,
    value: "100+",
    label: "Corporate Partners",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-24">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
            Our Impact
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Trusted Across South Sudan
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100">
            Our commitment to excellence is reflected in the numbers and the
            confidence our clients place in us.
          </p>
        </div>

        <div className="relative z-10 mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white">
                  <Icon size={28} />
                </div>

                <div className="mb-2 text-5xl font-bold text-white">
                  {stat.value}
                </div>

                <div className="text-lg text-blue-100">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}