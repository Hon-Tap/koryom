"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Building2,
  Landmark,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Container from "../ui/container";

const sectors = [
  {
    icon: Users,
    title: "Individuals & Families",
    description:
      "Protecting health, property, vehicles and financial wellbeing through reliable insurance solutions tailored to everyday life.",
  },
  {
    icon: Briefcase,
    title: "Businesses & SMEs",
    description:
      "Helping businesses operate confidently with risk management and insurance solutions that protect assets, operations and employees.",
  },
  {
    icon: Building2,
    title: "NGOs & Development Partners",
    description:
      "Supporting humanitarian organizations, development projects and non-profit initiatives with dependable insurance protection.",
  },
  {
    icon: Landmark,
    title: "Government & Institutions",
    description:
      "Providing professional insurance services and risk solutions for public institutions, agencies and large organizations.",
  },
];

const highlights = [
  "Tailored Insurance Solutions",
  "Professional Risk Advisory",
  "Responsive Claims Support",
  "Trusted Local Expertise",
];

const gallery = [
  "/images/family.jpg",
  "/images/business.jpg",
  "/images/healthcare.jpg",
  "/images/community.jpg",
];

export default function WhoWeServeSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Content */}
          <div>
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#2f3e9e]">
              Who We Serve
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Serving South Sudan
              <span className="block text-[#2f3e9e]">
                With Confidence
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              From families protecting their future to businesses,
              NGOs and institutions managing complex risks, Koryom
              delivers insurance solutions designed around the unique
              needs of every client.
            </p>

            <div className="mt-10 grid gap-4">
              {highlights.map((item) => (
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

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#2f3e9e] px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#24317f]"
            >
              Learn More About Koryom
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Image Collage */}
          <div className="grid grid-cols-2 gap-4">
            {gallery.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`relative overflow-hidden rounded-3xl ${
                  index === 1 || index === 2
                    ? "h-[260px] lg:h-[320px]"
                    : "h-[220px] lg:h-[280px]"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Audience Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-[#2f3e9e] transition duration-300 group-hover:bg-[#2f3e9e] group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {sector.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {sector.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}