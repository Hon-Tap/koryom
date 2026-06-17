"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  X,
  Sparkles,
} from "lucide-react";

import Container from "../ui/container";

const products = [
  { title: "Motor Insurance", href: "/products" },
  { title: "Medical Insurance", href: "/products" },
  { title: "Property Insurance", href: "/products" },
  { title: "Business Insurance", href: "/products" },
  { title: "Travel Insurance", href: "/products" },
  { title: "Marine Insurance", href: "/products" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          sticky top-0 z-50
          border-b border-slate-200/60
          bg-white/90 backdrop-blur-2xl
          transition-all duration-500
          ${scrolled ? "shadow-xl shadow-slate-200/40" : "shadow-sm"}
        `}
      >
        <Container>
          <div
            className={`
              flex items-center justify-between
              transition-all duration-500
              ${scrolled ? "h-20" : "h-24"}
            `}
          >
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo (3).png"
                alt="Koryom Insurance"
                width={300}
                height={90}
                priority
                className={`
                  w-auto object-contain
                  transition-all duration-500
                  ${scrolled ? "h-14 lg:h-16" : "h-16 lg:h-[72px]"}
                `}
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10">
              {[
                { title: "Home", href: "/" },
                { title: "About Us", href: "/about" },
                { title: "Claims", href: "/claims" },
                { title: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="relative font-medium text-slate-700 hover:text-[#2f3e9e] transition"
                >
                  {item.title}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#2f3e9e] transition-all group-hover:w-full" />
                </Link>
              ))}

              {/* PRODUCTS DROPDOWN */}
              <div className="relative group">
                <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-[#2f3e9e] transition">
                  Products
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>

                <div
                  className="
                    absolute left-1/2 top-full -translate-x-1/2 pt-4
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300
                  "
                >
                  {/* triangle */}
                  <div className="mx-auto h-4 w-4 rotate-45 bg-white border-l border-t border-slate-100" />

                  <div className="w-80 rounded-3xl border border-slate-100 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.12)] p-4">
                    <div className="mb-3 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2 text-[#2f3e9e] font-semibold">
                        <Sparkles size={16} />
                        Insurance Products
                      </div>
                      <p className="text-sm text-slate-500 mt-1">
                        Explore protection built for every stage of life.
                      </p>
                    </div>

                    <div className="space-y-1">
                      {products.map((product) => (
                        <Link
                          key={product.title}
                          href={product.href}
                          className="block px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 hover:pl-5 hover:text-[#2f3e9e] transition-all"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* CTA */}
            <Link
              href="/quote"
              className="hidden lg:flex items-center gap-2 bg-[#2f3e9e] text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-[#2f3e9e]/20 hover:-translate-y-1 hover:bg-[#1f2d7a] transition"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-5 w-5">
                <span className="absolute top-0 right-0 h-[3px] w-5 bg-slate-800 rounded-full" />
                <span className="absolute top-2 w-3 h-[3px] bg-slate-800 rounded-full right-0" />
                <span className="absolute top-4 h-[3px] w-5 bg-slate-800 rounded-full right-0" />
              </div>
            </button>
          </div>
        </Container>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`
          fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition
          ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`
          fixed right-0 top-0 z-[70]
          h-screen w-[88%] max-w-sm
          bg-white shadow-2xl
          transition-transform duration-500
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col">
          {/* HEADER */}
          <div className="flex items-center justify-between p-6 border-b">
            <Image
              src="/logo (3).png"
              alt="Koryom Insurance"
              width={200}
              height={60}
              className="h-12 w-auto"
            />

            <button
              onClick={() => setMobileOpen(false)}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* NAV */}
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
            <Link href="/" className="block text-lg font-medium">
              Home
            </Link>

            <Link href="/about" className="block text-lg font-medium">
              About Us
            </Link>

            {/* PRODUCTS MOBILE */}
            <div>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex w-full items-center justify-between text-lg font-medium"
              >
                Products
                <ChevronDown
                  className={`transition-transform ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  productsOpen ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                <div className="space-y-3 pl-4">
                  {products.map((product) => (
                    <Link
                      key={product.title}
                      href={product.href}
                      className="block text-slate-600"
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/claims" className="block text-lg font-medium">
              Claims
            </Link>

            <Link href="/contact" className="block text-lg font-medium">
              Contact
            </Link>
          </div>

          {/* FOOTER */}
          <div className="border-t p-6 space-y-4">
            <div className="text-sm text-slate-600 space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                +211 927 815 160
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                koryominsurance65@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                Juba, South Sudan
              </div>
            </div>

            <Link
              href="/quote"
              className="w-full flex items-center justify-center gap-2 bg-[#2f3e9e] text-white py-4 rounded-full font-semibold"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}