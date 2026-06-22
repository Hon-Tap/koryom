"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldAlert,
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
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative w-full bg-slate-950 border-t border-slate-900 text-white selection:bg-blue-600 selection:text-white font-sans antialiased overflow-hidden">
      <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Links Framework Matrix */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Brand System + Flattened Newsletter (Balances Height) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block transition-opacity duration-150 hover:opacity-90">
              <Image
                src="/logo (3).png"
                alt="Koryom Insurance"
                width={150}
                height={50}
                className="h-9 w-auto object-contain brightness-110"
                priority
              />
            </Link>
            <p className="text-xs leading-relaxed text-slate-400 font-normal tracking-wide max-w-sm">
              Koryom Insurance Company Limited delivers precision risk-engineered asset protection structures built for modern corporate operations in South Sudan.
            </p>
            
            {/* Minimalist Structured Form Factor instead of pill variations */}
            <div className="pt-2 max-w-sm">
              <form onSubmit={handleSubscribe} className="flex border border-slate-800 bg-slate-900/20 focus-within:border-slate-700 transition-colors rounded-none">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Corporate email updates"
                  className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder-slate-600 outline-none rounded-none"
                  disabled={subscribed}
                />
                <button
                  type="submit"
                  className="flex shrink-0 items-center justify-center bg-slate-900 border-l border-slate-800 hover:bg-slate-800 px-4 text-xs font-bold uppercase tracking-wider text-slate-300 transition-colors disabled:bg-emerald-950 disabled:text-emerald-400 rounded-none"
                  disabled={subscribed}
                  aria-label="Register Email"
                >
                  {subscribed ? <Check className="h-3.5 w-3.5" /> : "Join"}
                </button>
              </form>
              {subscribed && (
                <p className="text-[10px] text-emerald-400 mt-1.5 font-medium uppercase tracking-wide">
                  Email registered to advisory board updates.
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-xs text-slate-400 transition-colors duration-150 hover:text-white font-normal"
                  >
                    <span className="w-1 h-[1px] bg-slate-700 group-hover:w-2 group-hover:bg-blue-500 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Products */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Protection Lines
            </h3>
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product}>
                  <span className="group flex items-center gap-1.5 text-xs text-slate-400 transition-colors duration-150 hover:text-slate-200 cursor-pointer font-normal">
                    <span className="w-1 h-[1px] bg-slate-800 group-hover:bg-slate-500" />
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Operational Headquarters */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Headquarters
            </h3>
            <div className="space-y-3 text-xs font-normal tracking-wide text-slate-400">
              <div className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="h-4 w-4 shrink-0 text-slate-500 pt-0.5" />
                <span>Buluk National Traffic Police HQs, Juba, South Sudan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                <a href="tel:+211927815160" className="hover:text-white transition-colors">
                  +211 927 815 160
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                <a href="mailto:info@koryominsurance.com" className="hover:text-white transition-colors break-all">
                  info@koryominsurance.com
                </a>
              </div>
            </div>

            {/* Industrial Tag + Flat Sharp Social Blocks */}
            <div className="pt-2 flex flex-wrap items-center gap-4 justify-between lg:justify-start">
              <div className="inline-flex items-center gap-1.5 border border-slate-900 bg-slate-900/30 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400 rounded-none">
                <ShieldAlert className="h-3 w-3 text-blue-500" />
                Est. 2020
              </div>
              <div className="flex items-center gap-2">
                {[
                  { icon: LinkedinIcon, label: "LinkedIn" },
                  { icon: FacebookIcon, label: "Facebook" },
                  { icon: TwitterIcon, label: "Twitter" }
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a key={i} href="#" aria-label={social.label} className="flex h-7 w-7 items-center justify-center border border-slate-900 bg-slate-900/20 text-slate-500 transition-colors hover:border-slate-700 hover:bg-slate-900 hover:text-white rounded-none">
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Closing Metadata Framework */}
        <div className="border-t border-slate-900 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-600">
            <p className="text-center sm:text-left leading-normal">
              © {new Date().getFullYear()} Koryom Insurance Company Limited. Statutory Protection Corporate Infrastructure.
            </p>
            <div className="flex gap-5 shrink-0">
              <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-slate-400 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>

      </Container>
    </footer>
  );
}