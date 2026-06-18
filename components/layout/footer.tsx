"use client";

import { useState, FormEvent } from "react";
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

// Custom line-art SVG components matching Lucide v0's visual weight to fix the ts(2305) deprecation error
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const products = [
  "Motor Insurance",
  "Medical Insurance",
  "Property Insurance",
  "Business Insurance",
  "Marine Insurance",
  "Life Insurance",
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Claims Center", href: "/claims" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-slate-900 text-white selection:bg-blue-500 selection:text-white">
      {/* Background Glow Designs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-12 -top-12 h-96 w-96 rounded-full bg-blue-900/10 blur-[100px]" />
        <div className="absolute -right-12 -bottom-12 h-96 w-96 rounded-full bg-cyan-900/10 blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="py-16 lg:py-24">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
            
            {/* BRAND HEADER & DESCRIPTION */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <Link
                  href="/"
                  className="mb-6 inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-90"
                >
                  <Image
                    src="/logo (3).png"
                    alt="Koryom Insurance"
                    width={180}
                    height={60}
                    className="h-auto w-auto max-h-12 object-contain"
                    priority
                  />
                </Link>

                <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
                  Koryom Insurance Company Limited delivers reliable, risk-engineered, and client-centric asset protection models for corporate structures and private individuals across South Sudan.
                </p>
              </div>

              <div className="mt-8">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-500/5 px-4.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  <ShieldCheck size={14} className="text-cyan-400" />
                  <span>Trusted Protection Since 2020</span>
                </div>
                
                {/* Social Media Link Handles */}
                <div className="mt-6 flex items-center gap-4">
                  <a href="#" aria-label="LinkedIn Profile" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 hover:text-white">
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Facebook Page" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 hover:text-white">
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Twitter Profile" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 hover:text-white">
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* QUICK NAVIGATION */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Quick Navigation
              </h3>
              <ul className="mt-6 space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                    >
                      <ArrowRight
                        size={12}
                        className="transition-transform duration-200 group-hover:translate-x-1 text-slate-500 group-hover:text-cyan-400"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CORE PRODUCTS */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Core Products
              </h3>
              <ul className="mt-6 space-y-4">
                {products.map((product) => (
                  <li key={product}>
                    <span className="text-sm text-slate-400 hover:text-slate-200 transition-colors duration-150 cursor-pointer flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60" />
                      {product}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* HEADQUARTERS & NEWSLETTER */}
            <div className="lg:col-span-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Headquarters
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 shrink-0 text-cyan-400" />
                  <span className="text-sm leading-relaxed text-slate-400">
                    Buluk National Traffic Police HQs, Juba, South Sudan
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-cyan-400" />
                  <a href="tel:+211927815160" className="text-sm text-slate-400 hover:text-white transition-colors duration-150">
                    +211 927 815 160
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-cyan-400" />
                  <a href="mailto:info@koryominsurance.com" className="text-sm text-slate-400 hover:text-white transition-colors duration-150 break-all">
                    info@koryominsurance.com
                  </a>
                </div>
              </div>

              {/* Newsletter Subscription Card Area */}
              <div className="mt-8 pt-6 border-t border-slate-900">
                <p className="text-xs text-slate-400 mb-3">
                  Subscribe to our advisory board for risk insights and policy updates.
                </p>
                <form onSubmit={handleSubscribe} className="relative flex overflow-hidden rounded-xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm focus-within:border-blue-500/60 focus-within:ring-1 focus-within:ring-blue-500/60 transition-all duration-200">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter business email"
                    className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-slate-500 outline-none"
                    disabled={subscribed}
                  />

                  <button
                    type="submit"
                    className="flex shrink-0 items-center justify-center bg-blue-600 px-5 text-white transition-all duration-200 hover:bg-blue-500 disabled:bg-emerald-600"
                    disabled={subscribed}
                    aria-label="Submit Email"
                  >
                    {subscribed ? <Check size={16} /> : <ArrowRight size={16} />}
                  </button>
                </form>
                {subscribed && (
                  <p className="text-[11px] text-emerald-400 mt-2 font-medium">
                    Successfully subscribed to our corporate newsletter!
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="relative z-10 border-t border-slate-900 py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Koryom Insurance Company Limited. Incorporated under the Insurance laws of South Sudan. All Rights Reserved.
            </p>

            <div className="flex gap-6 shrink-0">
              <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors duration-150">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-300 transition-colors duration-150">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
