import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/container";

const products = [
  "Motor Insurance",
  "Medical Insurance",
  "Property Insurance",
  "Business Insurance",
  "Travel Insurance",
  "Marine Insurance",
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Claims", href: "/claims" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-900/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-900/20 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 py-20">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Company */}
            <div>
              <Link
                href="/"
                className="mb-6 flex items-center gap-4"
              >
                <Image
                  src="/logo (3).png"
                  alt="Koryom Insurance"
                  width={180}
                  height={60}
                  className="h-auto w-auto"
                />
              </Link>

              <p className="leading-relaxed text-slate-400">
                Koryom Insurance Company Limited provides reliable,
                innovative and customer-focused insurance solutions for
                individuals, families and businesses across South Sudan.
              </p>

              <div className="mt-6 flex items-center gap-3 text-cyan-400">
                <ShieldCheck size={18} />
                <span className="text-sm">
                  Trusted Protection Since 2012
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-lg font-semibold">
                Quick Links
              </h3>

              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-slate-400 transition hover:text-white"
                    >
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="mb-6 text-lg font-semibold">
                Products
              </h3>

              <ul className="space-y-4">
                {products.map((product) => (
                  <li
                    key={product}
                    className="text-slate-400"
                  >
                    {product}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-6 text-lg font-semibold">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-1 text-cyan-400"
                  />
                  <span className="text-slate-400">
                    Juba, South Sudan
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone
                    size={18}
                    className="text-cyan-400"
                  />
                  <span className="text-slate-400">
                    +211 XXX XXX XXX
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail
                    size={18}
                    className="text-cyan-400"
                  />
                  <span className="text-slate-400">
                    info@koryominsurance.com
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex overflow-hidden rounded-xl border border-white/10">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-4 py-3 text-sm outline-none"
                  />

                  <button className="bg-blue-700 px-5 hover:bg-blue-600">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 lg:flex-row">
            <p>
              © {new Date().getFullYear()} Koryom Insurance Company
              Limited. All Rights Reserved.
            </p>

            <div className="flex gap-6">
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>

              <Link href="/terms">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}