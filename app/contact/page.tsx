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
  Building2,
  ArrowRight,
  Fingerprint
} from "lucide-react";

import Container from "@/components/ui/container";

// Premium timing parameters for institutional micro-interactions
const executiveEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: executiveEasing }
  }
};

export default function ContactPage() {
  const [type, setType] = useState<"quote" | "inquiry">("quote");

  return (
    <main className="w-full bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white min-h-screen">
      
      {/* SECTION 1: INSTITUTIONAL HERO CONTAINER */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-slate-950 text-white border-b border-blue-900/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/98 to-blue-950/90" />
        </div>

        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: executiveEasing }}
            className="border-l-2 border-blue-500 pl-6 max-w-4xl"
          >
            <div className="flex items-center gap-2 text-blue-400 mb-3">
              <ShieldCheck size={14} className="animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-[0.25em]">
                Fiduciary Engagement Matrix
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-none text-white">
              Secure Communications Desk
            </h1>

            <p className="mt-4 text-sm text-slate-400 max-w-xl font-normal leading-relaxed">
              Initiate contact with authorized underwriting agents at our Juba headquarters. We support sovereign capital structures, corporate fleet lines, and comprehensive enterprise assets.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-900 pt-4 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock size={12} className="text-blue-500" /> Intake Processing &lt; 24h
              </span>
              <span className="flex items-center gap-1.5">
                <Fingerprint size={12} className="text-blue-500" /> Direct Desk Access
              </span>
              <span className="flex items-center gap-1.5">
                <MessageCircle size={12} className="text-blue-500" /> Mobile Networks Synced
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 2: INTERACTIVE CONTROLS & COMPLIANCE CHANNELS */}
      <section className="py-20 lg:py-24">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT SIDE: SEGMENTED FORM PIPELINE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: executiveEasing }}
              className="lg:col-span-7 bg-white border border-slate-200 p-6 md:p-10 shadow-sm relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-600" />
              
              {/* Institutional Custom Toggle Layout */}
              <div className="flex border border-slate-200 mb-8 p-1 bg-slate-50">
                <button
                  type="button"
                  onClick={() => setType("quote")}
                  className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    type === "quote"
                      ? "bg-slate-950 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900 bg-transparent"
                  }`}
                >
                  Underwriting Quote
                </button>
                <button
                  type="button"
                  onClick={() => setType("inquiry")}
                  className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    type === "inquiry"
                      ? "bg-slate-950 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900 bg-transparent"
                  }`}
                >
                  General Directive
                </button>
              </div>

              {/* Secure Form Entry Point */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Legal Name</label>
                    <input
                      type="text"
                      placeholder="Corporate or Individual Name"
                      className="w-full text-xs bg-slate-50/50 text-slate-900 px-4 py-3 outline-none border border-slate-200 focus:border-blue-600 focus:bg-white transition-all rounded-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Contact Vector</label>
                    <input
                      type="tel"
                      placeholder="+211 Phone Number"
                      className="w-full text-xs bg-slate-50/50 text-slate-900 px-4 py-3 outline-none border border-slate-200 focus:border-blue-600 focus:bg-white transition-all rounded-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Secure Email Address</label>
                  <input
                    type="email"
                    placeholder="entity@domain.com"
                    className="w-full text-xs bg-slate-50/50 text-slate-900 px-4 py-3 outline-none border border-slate-200 focus:border-blue-600 focus:bg-white transition-all rounded-none"
                  />
                </div>

                {type === "quote" && (
                  <div className="space-y-1 animate-fadeIn">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Asset Parameters Portfolio</label>
                    <select className="w-full text-xs bg-slate-50 px-4 py-3 outline-none border border-slate-200 focus:border-blue-600 focus:bg-white transition-all rounded-none text-slate-700">
                      <option>Select Targeted Insurance Portfolio...</option>
                      <option>Asset & Property Protection</option>
                      <option>Motor Fleet Comprehensive Portfolio</option>
                      <option>Marine Cargo & Logistics Line</option>
                      <option>Enterprise Liability & Fidelity Guarantee</option>
                      <option>Corporate Medical Schemes</option>
                    </select>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Detailed Statement of Intent</label>
                  <textarea
                    rows={5}
                    placeholder={
                      type === "quote"
                        ? "Specify asset values, operation locations, and specific coverage parameters..."
                        : "Describe your governance question or specific structural requirements..."
                    }
                    className="w-full text-xs bg-slate-50/50 text-slate-900 px-4 py-3 outline-none border border-slate-200 focus:border-blue-600 focus:bg-white transition-all rounded-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider py-4 transition-colors rounded-none"
                >
                  <Send size={12} />
                  {type === "quote" ? "Transmit Quote Request" : "Dispatch Communications"}
                </button>
              </form>
            </motion.div>

            {/* RIGHT SIDE: ANCHORED OFFICE PROVISIONS */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-4"
            >
              {/* CARD 1: SECURE MATRIX LOGS */}
              <motion.div variants={itemVariants} className="bg-white border border-slate-200 p-6 shadow-sm">
                <h3 className="font-serif font-bold text-slate-900 text-sm border-b border-slate-100 pb-3 mb-4 uppercase tracking-wider text-xs">
                  Direct Verification Channels
                </h3>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex gap-4 items-start">
                    <div className="p-1.5 bg-slate-50 text-blue-600 border border-slate-100 shrink-0">
                      <Phone size={14} />
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase font-mono text-slate-400">Headquarters Support</span>
                      <p className="font-bold text-slate-900 mt-0.5">+211 927 815 160</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-1.5 bg-slate-50 text-blue-600 border border-slate-100 shrink-0">
                      <Mail size={14} />
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase font-mono text-slate-400">Underwriting Desk</span>
                      <p className="font-bold text-slate-900 mt-0.5 break-all">Koryominsuranc65@gmail.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CARD 2: PHYSICAL HEADQUARTER SECRETARIAT */}
              <motion.div variants={itemVariants} className="bg-white border border-slate-200 p-6 shadow-sm">
                <h3 className="font-serif font-bold text-slate-900 text-sm border-b border-slate-100 pb-3 mb-4 uppercase tracking-wider text-xs">
                  Physical HQ Secretariat
                </h3>

                <div className="flex gap-4 items-start text-xs text-slate-600">
                  <div className="p-1.5 bg-slate-50 text-blue-600 border border-slate-100 shrink-0">
                    <MapPin size={14} />
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-slate-900">Buluk National Traffic Police HQs</p>
                    <p className="text-slate-500 leading-relaxed">
                      Central Business Coordinates<br />
                      Juba, South Sudan
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-slate-400 bg-slate-50 border border-slate-100 px-2 py-1">
                      <Building2 size={10} /> Operational: Monday – Friday (08:00 – 17:00)
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CARD 3: MOBILE NETWORK DISPATCH */}
              <motion.div 
                variants={itemVariants} 
                className="bg-slate-950 text-white p-6 border border-slate-900 relative overflow-hidden"
              >
                <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 text-white pointer-events-none">
                  <MessageCircle size={140} />
                </div>
                
                <h3 className="font-serif font-bold text-white text-base mb-1">
                  Immediate Secure Dispatch?
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-5">
                  Bypass standard queue pipelines by establishing an authenticated encrypted link with a risk engineer over the WhatsApp mobile network.
                </p>

                <a 
                  href="https://wa.me/211927815160" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] uppercase tracking-wider px-5 py-3 transition-colors"
                >
                  <MessageCircle size={12} />
                  Establish Mobile Secure Uplink
                </a>
              </motion.div>

            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: SYSTEMIC CTA FOOTHOLD */}
      <section className="py-20 border-t border-slate-200 bg-slate-100/50">
        <Container className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-blue-600 block">
              Proactive Exposure Safeguards
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight max-w-xl mx-auto">
              Mitigate Risk Portfolios Prior to Adverse Occurrences
            </h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              Ensure long-term structural viability by establishing precise protective parameters today.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-none transition-colors"
              >
                Begin Strategy Intake
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}