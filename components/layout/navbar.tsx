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
} from "lucide-react";

import Container from "../ui/container";

const products = [
  {
    title: "Motor Insurance",
    href: "/products/motor-insurance",
  },
  {
    title: "Medical Insurance",
    href: "/products/medical-insurance",
  },
  {
    title: "Property Insurance",
    href: "/products/property-insurance",
  },
  {
    title: "Business Insurance",
    href: "/products/business-insurance",
  },
  {
    title: "Travel Insurance",
    href: "/products/travel-insurance",
  },
  {
    title: "Marine Insurance",
    href: "/products/marine-insurance",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          sticky top-0 z-50
          border-b border-slate-200/70
          bg-white/95
          backdrop-blur-xl
          transition-all duration-500
          ${
            scrolled
              ? "shadow-xl shadow-slate-200/50"
              : "shadow-sm"
          }
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
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center"
            >
              <Image
                src="/logo (3).png"
                alt="Koryom Insurance"
                width={300}
                height={90}
                priority
                className={`
                  w-auto object-contain
                  transition-all duration-500
                  ${
                    scrolled
                      ? "h-14 lg:h-16"
                      : "h-16 lg:h-[72px]"
                  }
                `}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {[
                { title: "Home", href: "/" },
                { title: "About Us", href: "/about" },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="
                    group relative
                    font-medium text-slate-700
                    transition-all duration-300
                    hover:text-[#2f3e9e]
                  "
                >
                  {item.title}

                  <span
                    className="
                      absolute -bottom-2 left-0
                      h-[2px] w-0
                      bg-[#2f3e9e]
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}

              {/* Products */}
              <div className="group relative">
                <button
                  className="
                    flex items-center gap-1
                    font-medium text-slate-700
                    transition-all duration-300
                    hover:text-[#2f3e9e]
                  "
                >
                  Products

                  <ChevronDown
                    className="
                      h-4 w-4
                      transition-transform duration-300
                      group-hover:rotate-180
                    "
                  />
                </button>

                {/* Triangle */}
                <div
                  className="
                    invisible opacity-0
                    absolute left-1/2 top-full
                    -translate-x-1/2 translate-y-3
                    transition-all duration-300
                    group-hover:visible
                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                >
                  <div
                    className="
                      mx-auto h-4 w-4
                      rotate-45
                      border-l border-t border-slate-100
                      bg-white
                    "
                  />

                  <div
                    className="
                      mt-[-8px]
                      w-80
                      rounded-3xl
                      border border-slate-100
                      bg-white
                      p-4
                      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                    "
                  >
                    <div className="mb-3 border-b border-slate-100 pb-3">
                      <h4 className="font-semibold text-slate-900">
                        Insurance Products
                      </h4>

                      <p className="mt-1 text-sm text-slate-500">
                        Protection tailored to your needs.
                      </p>
                    </div>

                    <div className="space-y-1">
                      {products.map((product) => (
                        <Link
                          key={product.title}
                          href={product.href}
                          className="
                            block rounded-xl
                            px-4 py-3
                            text-slate-700
                            transition-all duration-300
                            hover:bg-slate-50
                            hover:pl-5
                            hover:text-[#2f3e9e]
                          "
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {[
                { title: "Claims", href: "/claims" },
                { title: "Resources", href: "/resources" },
                { title: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="
                    group relative
                    font-medium text-slate-700
                    transition-all duration-300
                    hover:text-[#2f3e9e]
                  "
                >
                  {item.title}

                  <span
                    className="
                      absolute -bottom-2 left-0
                      h-[2px] w-0
                      bg-[#2f3e9e]
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/quote"
              className="
                group hidden lg:flex
                items-center gap-2
                rounded-full
                bg-[#2f3e9e]
                px-7 py-3.5
                font-semibold text-white
                shadow-lg shadow-[#2f3e9e]/20
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#1f2d7a]
                hover:shadow-xl
              "
            >
              Get a Quote

              <ArrowRight
                className="
                  h-4 w-4
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            {/* Premium Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="
                lg:hidden
                relative
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-slate-200
                bg-white
                shadow-sm
                transition-all duration-300
                hover:border-[#2f3e9e]
                hover:shadow-lg
              "
            >
              <div className="relative h-5 w-5">
                <span
                  className="
                    absolute right-0 top-0
                    h-[3px] w-5
                    rounded-full bg-slate-800
                  "
                />

                <span
                  className="
                    absolute right-0 top-[8px]
                    h-[3px] w-3
                    rounded-full bg-slate-800
                  "
                />

                <span
                  className="
                    absolute right-0 top-4
                    h-[3px] w-5
                    rounded-full bg-slate-800
                  "
                />
              </div>
            </button>
          </div>
        </Container>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`
          fixed inset-0 z-[60]
          bg-black/40 backdrop-blur-sm
          transition-all duration-500
          ${
            mobileOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />

      {/* Drawer */}
      <div
        className={`
          fixed right-0 top-0 z-[70]
          h-screen w-[88%] max-w-sm
          bg-white
          shadow-[0_0_80px_rgba(0,0,0,0.15)]
          transition-all duration-500
          ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 p-6">
            <Image
              src="/logo (3).png"
              alt="Koryom Insurance"
              width={220}
              height={70}
              className="h-14 w-auto"
            />

            <button
              onClick={() => setMobileOpen(false)}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                bg-slate-100
              "
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="space-y-6">
              <Link href="/" className="block text-lg font-medium">
                Home
              </Link>

              <Link href="/about" className="block text-lg font-medium">
                About Us
              </Link>

              <div>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="
                    flex w-full items-center
                    justify-between
                    text-lg font-medium
                  "
                >
                  Products

                  <ChevronDown
                    className={`
                      transition-transform duration-300
                      ${productsOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all duration-500
                    ${
                      productsOpen
                        ? "max-h-96 mt-4"
                        : "max-h-0"
                    }
                  `}
                >
                  <div className="space-y-4 pl-4">
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

              <Link href="/resources" className="block text-lg font-medium">
                Resources
              </Link>

              <Link href="/contact" className="block text-lg font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-100 p-6">
            <div className="mb-6 space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>+211 927 815 160</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>koryominsurance65@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>Juba, South Sudan</span>
              </div>
            </div>

            <Link
              href="/quote"
              className="
                flex w-full items-center
                justify-center gap-2
                rounded-full
                bg-[#2f3e9e]
                py-4
                font-semibold
                text-white
                transition-all duration-300
                hover:bg-[#1f2d7a]
              "
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