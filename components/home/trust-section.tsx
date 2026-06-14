"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Car,
  Building2,
  Ship,
  Plane,
  ArrowRight,
} from "lucide-react";

import Container from "../ui/container";

const products = [
  {
    icon: HeartPulse,
    title: "Medical Insurance",
    description:
      "Quality healthcare protection for individuals, families and corporate teams.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Car,
    title: "Motor Insurance",
    description:
      "Comprehensive and third-party vehicle protection for personal and business use.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Building2,
    title: "Property Insurance",
    description:
      "Protect homes, offices and commercial assets against unexpected losses.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Ship,
    title: "Marine & Transit",
    description:
      "Reliable coverage for goods, cargo and business assets in transit.",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description:
      "Peace of mind and protection wherever business or leisure takes you.",
    color: "from-cyan-500 to-teal-500",
  },
];

const floatingImages = [
  {
    src: "/images/medical.jpg",
    className: "left-0 top-0 h-52 w-52",
    duration: 6,
  },
  {
    src: "/images/motor.jpg",
    className: "right-0 top-20 h-64 w-64",
    duration: 8,
  },
  {
    src: "/images/property.jpg",
    className: "left-20 bottom-24 h-60 w-60",
    duration: 7,
  },
  {
    src: "/images/travel.jpg",
    className: "right-8 bottom-0 h-48 w-48",
    duration: 9,
  },
];

export default function InsuranceSolutionsSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-100/40 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#2f3e9e]">
              Insurance Solutions
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Protection For Every
              <span className="block bg-gradient-to-r from-[#2f3e9e] to-cyan-600 bg-clip-text text-transparent">
                Stage Of Life
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Discover comprehensive insurance solutions designed to
              protect individuals, families, businesses and organisations
              across South Sudan.
            </p>

            <div className="mt-10 space-y-4">
              {products.map((product, index) => {
                const Icon = product.icon;

                return (
                  <motion.div
                    key={product.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                    className="group"
                  >
                    <Link
                      href="/products"
                      className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:shadow-xl"
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.color} text-white`}
                      >
                        <Icon size={24} />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900">
                          {product.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-600">
                          {product.description}
                        </p>
                      </div>

                      <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:text-blue-700" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="relative h-[700px]">
            {floatingImages.map((image, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: image.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute overflow-hidden rounded-full shadow-[0_25px_80px_rgba(0,0,0,0.12)] ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}

            <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-200 to-blue-200 blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}