"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  Clock,
} from "lucide-react";

import Container from "@/components/ui/container";

export default function ContactPage() {
  const [type, setType] = useState<"quote" | "inquiry">("quote");

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.25),transparent_60%)]" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 text-cyan-400 mb-4">
              <ShieldCheck size={18} />
              <span className="text-sm tracking-wide">
                Trusted Insurance Support
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Let’s Secure What Matters Most
            </h1>

            <p className="mt-5 text-slate-300 text-lg">
              Fast responses. Real humans. Reliable protection tailored to your
              needs.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <Clock size={16} /> Replies within 24h
              </span>
              <span className="flex items-center gap-2">
                <Phone size={16} /> Direct agent support
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle size={16} /> WhatsApp available
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="pb-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT: FORM SWITCH */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-xl"
            >
              {/* Toggle */}
              <div className="flex bg-slate-800 rounded-xl p-1 mb-6">
                <button
                  onClick={() => setType("quote")}
                  className={`flex-1 py-2 rounded-lg text-sm transition ${
                    type === "quote"
                      ? "bg-cyan-500 text-black font-semibold"
                      : "text-slate-300"
                  }`}
                >
                  Request Quote
                </button>
                <button
                  onClick={() => setType("inquiry")}
                  className={`flex-1 py-2 rounded-lg text-sm transition ${
                    type === "inquiry"
                      ? "bg-cyan-500 text-black font-semibold"
                      : "text-slate-300"
                  }`}
                >
                  General Inquiry
                </button>
              </div>

              {/* FORM */}
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    placeholder="Full Name"
                    className="w-full bg-slate-800 rounded-xl px-4 py-3 outline-none border border-slate-700 focus:border-cyan-500"
                  />
                  <input
                    placeholder="Phone Number"
                    className="w-full bg-slate-800 rounded-xl px-4 py-3 outline-none border border-slate-700 focus:border-cyan-500"
                  />
                </div>

                <input
                  placeholder="Email Address"
                  className="w-full bg-slate-800 rounded-xl px-4 py-3 outline-none border border-slate-700 focus:border-cyan-500"
                />

                {type === "quote" && (
                  <select className="w-full bg-slate-800 rounded-xl px-4 py-3 outline-none border border-slate-700 focus:border-cyan-500">
                    <option>Insurance Type</option>
                    <option>Motor Insurance</option>
                    <option>Medical Insurance</option>
                    <option>Property Insurance</option>
                    <option>Business Insurance</option>
                  </select>
                )}

                <textarea
                  rows={5}
                  placeholder={
                    type === "quote"
                      ? "Tell us what you want to insure..."
                      : "How can we help you?"
                  }
                  className="w-full bg-slate-800 rounded-xl px-4 py-3 outline-none border border-slate-700 focus:border-cyan-500"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl transition"
                >
                  <Send size={18} />
                  {type === "quote" ? "Get My Quote" : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* RIGHT: CONTACT INFO */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold mb-4">Contact Details</h3>

                <div className="space-y-4 text-slate-300">
                  <div className="flex items-center gap-3">
                    <Phone size={18} /> +211 XXX XXX XXX
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} /> support@insurance.com
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle size={18} /> WhatsApp Support Available
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold mb-4">Visit Us</h3>

                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin size={18} />
                  <p>
                    Central Business District, Juba, South Sudan
                    <br />
                    Mon - Fri: 8:00 AM - 5:00 PM
                  </p>
                </div>

                <div className="mt-4 h-40 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 text-sm">
                  Map Embed Placeholder
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-slate-800 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-white mb-2">
                  Prefer Instant Response?
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  Chat with a real agent on WhatsApp for faster assistance.
                </p>

                <button className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold px-4 py-2 rounded-xl transition">
                  <MessageCircle size={18} />
                  Open WhatsApp
                </button>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 border-t border-slate-800">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">
              Insurance should never wait until it’s too late.
            </h2>
            <p className="text-slate-400 mt-3">
              Start your protection journey today with a fast, guided quote.
            </p>

            <button className="mt-6 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl transition">
              Start Protection
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}