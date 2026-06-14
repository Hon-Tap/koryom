"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  HeartPulse,
  Car,
  Building2,
  Plane,
  Ship,
  CheckCircle2,
} from "lucide-react";

import Container from "../ui/container";

const products = [
  {
    name: "Medical",
    icon: HeartPulse,
  },
  {
    name: "Motor",
    icon: Car,
  },
  {
    name: "Property",
    icon: Building2,
  },
  {
    name: "Marine",
    icon: Ship,
  },
  {
    name: "Travel",
    icon: Plane,
  },
];

const trustPoints = [
  "Integrity & Transparency",
  "Rapid Claims Response",
  "Comprehensive Coverage",
  "Tailored Insurance Solutions",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-[#2f3e9e] shadow-sm">
              <Shield className="h-4 w-4" />
              Trusted Insurance Partner in South Sudan
            </div>

            <h1 className="mt-8 text-5xl font-extrabold leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl xl:text-8xl">
              Your World,
              <span className="mt-2 block text-[#2f3e9e]">
                Protected.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl">
              Comprehensive insurance solutions for individuals,
              families, businesses and organisations across South Sudan.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 lg:text-lg">
              We manage the risks of today so you can focus on
              building a bolder tomorrow.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f3e9e] px-8 py-4 font-semibold text-white shadow-xl shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#25338a]"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-[#2f3e9e] hover:text-[#2f3e9e]"
              >
                Explore Insurance Solutions
              </Link>
            </div>

            {/* Trust Features */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#2f3e9e]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Product Chips */}
            <div className="mt-10 flex flex-wrap gap-3">
              {products.map((product) => {
                const Icon = product.icon;

                return (
                  <Link
                    key={product.name}
                    href="/products"
                    className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-[#2f3e9e] hover:bg-[#2f3e9e] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {product.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-white/50 bg-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f3e9e]/20 via-transparent to-transparent z-10" />

              <Image
                src="/images/hero-ss.jpg"
                alt="Koryom Insurance"
                width={900}
                height={1000}
                priority
                className="h-[500px] w-full object-cover object-center lg:h-[700px]"
              />

              {/* Floating Trust Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-3xl border border-white/20 bg-white/90 p-6 backdrop-blur-xl shadow-xl">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#2f3e9e]" />
                  <h3 className="font-bold text-slate-900">
                    Trusted Insurance Solutions
                  </h3>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-slate-50 px-3 py-2 font-medium text-slate-700">
                    Medical Insurance
                  </div>

                  <div className="rounded-xl bg-slate-50 px-3 py-2 font-medium text-slate-700">
                    Motor Insurance
                  </div>

                  <div className="rounded-xl bg-slate-50 px-3 py-2 font-medium text-slate-700">
                    Property Insurance
                  </div>

                  <div className="rounded-xl bg-slate-50 px-3 py-2 font-medium text-slate-700">
                    Marine Insurance
                  </div>
                </div>

                <div className="mt-4 border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-[#2f3e9e]">
                    Serving Individuals, Families & Businesses Across South Sudan
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Accent */}
            <div className="absolute -top-6 -right-6 hidden h-28 w-28 rounded-full bg-blue-200/40 blur-2xl lg:block" />
            <div className="absolute -bottom-10 -left-10 hidden h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl lg:block" />
          </div>
        </div>
      </Container>
    </section>
  );
}