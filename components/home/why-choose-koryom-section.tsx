"use client";

import Image from "next/image";
import {
  Award,
  ShieldCheck,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/container";

const features = [
  {
    icon: Award,
    title: "Commitment to Excellence",
    description:
      "Every client interaction is handled with professionalism and exceptional service.",
  },
  {
    icon: ShieldCheck,
    title: "Comprehensive Coverage",
    description:
      "Insurance solutions tailored for individuals, families and businesses.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Claims Process",
    description:
      "Transparent and responsive claims support when you need it most.",
  },
  {
    icon: TrendingUp,
    title: "Risk Management",
    description:
      "Helping clients identify and reduce risks before losses occur.",
  },
];

export default function WhyChooseKoryomSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-32">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#2f3e9e]">
            Why Choose Koryom
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Built On Trust.
            <span className="block text-[#2f3e9e]">
              Focused On Protection.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Delivering dependable insurance solutions through
            integrity, transparency and exceptional customer care.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/construction.png"
              alt="Why Choose Koryom"
              width={1200}
              height={900}
              className="h-[420px] w-full object-cover lg:h-[620px]"
            />
          </div>

          {/* Content */}
          <div>
            <div className="grid gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex gap-5"
                  >
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Icon
                        size={24}
                        className="text-[#2f3e9e]"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-2 leading-relaxed text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Panel */}
            <div className="mt-12 rounded-3xl bg-white p-8 shadow-sm">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h4 className="text-3xl font-bold text-[#2f3e9e]">
                    2020
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Established
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-[#2f3e9e]">
                    24/7
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Claims Support
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-[#2f3e9e]">
                    SS
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Nationwide Reach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}