"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import Container from "@/components/ui/container";

const testimonials = [
  {
    name: "John Deng",
    role: "Business Owner",
    quote:
      "Koryom Insurance provided exceptional support when our business faced unexpected losses. Their claims process was fast, transparent and professional.",
  },
  {
    name: "Mary Ajak",
    role: "Medical Insurance Client",
    quote:
      "The medical insurance coverage gave my family peace of mind. Their customer service team was responsive and genuinely helpful.",
  },
  {
    name: "Peter Bol",
    role: "Vehicle Owner",
    quote:
      "After an accident, Koryom handled everything efficiently. I highly recommend them to anyone seeking reliable insurance protection.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Trusted by individuals, families and businesses across South Sudan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="rounded-[32px] bg-white p-8 shadow-lg"
            >
              <Quote className="mb-6 text-cyan-600" size={40} />

              <p className="mb-8 leading-relaxed text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}