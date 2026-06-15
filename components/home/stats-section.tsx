"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Search,
  FileCheck2,
  Briefcase,
} from "lucide-react";

import Container from "@/components/ui/container";

const services = [
  {
    icon: Search,
    title: "Risk Assessment",
    description:
      "Identifying potential risks before they become costly challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Advisory",
    description:
      "Helping clients choose coverage that aligns with their needs and goals.",
  },
  {
    icon: FileCheck2,
    title: "Claims Assistance",
    description:
      "Guiding clients through the claims process with speed and clarity.",
  },
  {
    icon: Briefcase,
    title: "Corporate Solutions",
    description:
      "Supporting organizations with tailored risk and insurance strategies.",
  },
];

export default function AdvisorySection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#2f3e9e]">
            Beyond Insurance
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Helping Clients
            <span className="block text-[#2f3e9e]">
              Manage Risk Better
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Our role goes beyond providing insurance. We help clients
            understand risks, make informed decisions and navigate
            challenges with confidence.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-[#2f3e9e]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
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