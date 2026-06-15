"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BriefcaseBusiness,
  FileCheck2,
  Search,
} from "lucide-react";

import Container from "@/components/ui/container";

const services = [
  {
    icon: ShieldCheck,
    title: "Insurance Brokerage",
    description:
      "Helping clients identify and secure suitable insurance solutions for their unique needs.",
  },
  {
    icon: Search,
    title: "Risk Assessment",
    description:
      "Evaluating potential exposures and providing practical recommendations to reduce risk.",
  },
  {
    icon: FileCheck2,
    title: "Claims Support",
    description:
      "Professional assistance throughout the claims process to ensure a smooth experience.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Advisory",
    description:
      "Tailored insurance and risk management guidance for businesses and organizations.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
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
            Our Expertise
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            More Than
            <span className="block text-[#2f3e9e]">
              Insurance Policies
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            We provide professional insurance brokerage, advisory and
            risk management services that help individuals, businesses
            and organizations make informed decisions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#2f3e9e]/20 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-[#2f3e9e] transition-all duration-300 group-hover:bg-[#2f3e9e] group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}