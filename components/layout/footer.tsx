"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";

import Container from "@/components/ui/container";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const assetProtectionLines = [
  { label: "Health & Medical Schemes", href: "/products?line=health" },
  { label: "Motor Fleet Cover", href: "/products?line=motor" },
  { label: "Property & Asset Mitigation", href: "/products?line=property" },
  { label: "Marine & Transit Insurance", href: "/products?line=marine" },
  { label: "Constructors CAR Insurance", href: "/products?line=construction" },
  { label: "Fidelity Guarantee & Liabilities", href: "/products?line=liability" },
];

const ecosystemLinks = [
  { label: "Corporate Profile", href: "/about" },
  { label: "Underwriting Matrix", href: "/products" },
  { label: "Claims Intake Hub", href: "/claims" },
  { label: "Consultant Briefing", href: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleBriefingSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative w-full bg-slate-950 border-t border-slate-900 text-white selection:bg-blue-600 selection:text-white font-sans antialiased overflow-hidden">
      
      {/* Structural Minimal Grid Canvas Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-px bg-slate-800">
          <div className="bg-slate-950 h-full" />
          <div className="bg-slate-950 h-full" />
          <div className="bg-slate-950 h-full" />
          <div className="bg-slate-950 h-full" />
        </div>
      </div>

      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. UPPER STRATEGIC REGISTRY SECTION */}
        <div className="py-12 border-b border-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <h3 className="text-sm font-bold tracking-tight text-white uppercase">
              Subscribe to the Risk Mitigation Executive Advisory
            </h3>
            <p className="text-xs text-slate-400 font-light max-w-xl leading-relaxed">
              Receive quarterly risk compliance bulletins, sovereign general policy briefings, and structural updates tailored for enterprises in South Sudan.
            </p>
          </div>
          
          <div className="lg:col-span-5 w-full">
            <form onSubmit={handleBriefingSubscribe} className="flex border border-slate-800 bg-slate-900/10 focus-within:border-blue-600 focus-within:bg-slate-900/30 transition-all rounded-none p-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter executive corporate email"
                className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder-slate-600 outline-none rounded-none font-medium"
                disabled={isSubscribed}
              />
              <button
                type="submit"
                className="flex shrink-0 items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 text-xs font-bold uppercase tracking-wider transition-colors disabled:bg-emerald-950 disabled:text-emerald-400 rounded-none gap-2"
                disabled={isSubscribed}
                aria-label="Register Email Channel"
              >
                {isSubscribed ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>Registered</span>
                  </>
                ) : (
                  <>
                    <span>Join Framework</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* 2. MAIN COHESIVE CORE LINKS MATRIX */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Brand Presentation Profile Block */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block transition-opacity duration-150 hover:opacity-90">
              <Image
                src="/logo (3).png"
                alt="Koryom Insurance Blueprint"
                width={160}
                height={52}
                className="h-10 w-auto object-contain brightness-110"
                priority
              />
            </Link>
            <p className="text-xs leading-relaxed text-slate-400 font-light tracking-wide max-w-sm">
              Koryom Insurance Company Limited delivers precision risk-engineered asset protection matrices engineered structurally for volatile operating landscapes across South Sudan.
            </p>
            
            <div className="flex items-center gap-2 pt-1">
              {[
                { icon: LinkedinIcon, label: "LinkedIn Platform" },
                { icon: FacebookIcon, label: "Facebook Channel" },
                { icon: TwitterIcon, label: "Twitter Stream" }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={i} 
                    href="#" 
                    aria-label={social.label} 
                    className="flex h-8 w-8 items-center justify-center border border-slate-900 bg-slate-900/10 text-slate-500 transition-all hover:border-slate-700 hover:bg-slate-900 hover:text-white rounded-none"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Core Navigation Pipeline */}
          <div className="lg:col-span-2 space-y-4 lg:pl-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400 border-l-2 border-blue-600 pl-2">
              Ecosystem Map
            </h4>
            <ul className="space-y-3">
              {ecosystemLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-xs text-slate-400 transition-colors duration-150 hover:text-white font-medium"
                  >
                    <span className="w-1 h-[1px] bg-slate-800 group-hover:w-2 group-hover:bg-blue-500 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Underwriting Products Coverage Matrix */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400 border-l-2 border-blue-600 pl-2">
              Underwriting Architectures
            </h4>
            <ul className="space-y-3">
              {assetProtectionLines.map((product) => (
                <li key={product.label}>
                  <Link
                    href={product.href}
                    className="group flex items-center gap-1.5 text-xs text-slate-400 transition-colors duration-150 hover:text-slate-200 font-medium"
                  >
                    <span className="w-1 h-[1px] bg-slate-800 group-hover:bg-slate-500 transition-all" />
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Institutional Headquarters Base Grid */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400 border-l-2 border-blue-600 pl-2">
              Operational Base
            </h4>
            <div className="space-y-3.5 text-xs font-normal tracking-wide text-slate-400">
              <div className="flex items-start gap-3 leading-relaxed">
                <MapPin className="h-4 w-4 shrink-0 text-slate-600 pt-0.5" />
                <span className="font-light">Buluk National Traffic Police HQs,<br />Juba, Central Equatoria,<br />South Sudan</span>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-900/60 pt-3">
                <Phone className="h-3.5 w-3.5 shrink-0 text-slate-600" />
                <a href="tel:+211927815160" className="hover:text-white font-medium transition-colors">
                  +211 927 815 160
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-3.5 w-3.5 shrink-0 text-slate-600" />
                <a href="mailto:info@koryominsurance.com" className="hover:text-white font-medium transition-colors break-all">
                  info@koryominsurance.com
                </a>
              </div>
            </div>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 border border-slate-900 bg-slate-900/20 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-slate-400 rounded-none">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
                Licenced Operator Est. 2020
              </div>
            </div>
          </div>

        </div>

        {/* 3. CLOSING COMPLIANCE & LEGAL BLUEPRINT TRACK */}
        <div className="border-t border-slate-900 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] uppercase font-bold tracking-widest text-slate-600">
            <p className="text-center sm:text-left leading-normal">
              © {new Date().getFullYear()} Koryom Insurance Company Limited. Statutory Protection Infrastructure. All Rights Reserved.
            </p>
            <div className="flex gap-6 shrink-0">
              <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
                Privacy Matrix
              </Link>
              <Link href="/terms" className="hover:text-slate-400 transition-colors">
                Terms of Indemnity
              </Link>
            </div>
          </div>
        </div>

      </Container>
    </footer>
  );
}