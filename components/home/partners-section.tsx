"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/container";

const partners = [
  "Nile Commercial Bank",
  "South Sudan Airlines",
  "MTN South Sudan",
  "Zain South Sudan",
  "KCB Bank",
  "Equatoria Group",
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
            Partners & Clients
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Trusted By Leading Organizations
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Building long-term relationships through reliability, trust and
            exceptional service.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
              }}
              className="flex h-32 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 text-center shadow-sm transition-all hover:shadow-xl"
            >
              <span className="text-xl font-semibold text-slate-700">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}