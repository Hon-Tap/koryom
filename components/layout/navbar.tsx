"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowUpRight,
  Phone,
  MapPin,
  UserCircle2,
  Menu,
  X,
  Mail,
  Heart,
  Car,
  Shield,
  Building2,
  Briefcase,
  Layers,
  Plane,
  Anchor,
  Activity,
  GanttChartSquare,
} from "lucide-react";

import Container from "../ui/container";

const navConfig = {
  links: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Insurance Solutions",
      href: "/products",
      isMega: true,
      sections: [
        {
          title: "Personal Insurance",
          color: "text-blue-600 bg-blue-50 border-blue-100",
          items: [
            { title: "Health Insurance", href: "/products#personal", icon: Heart },
            { title: "Motor Insurance", href: "/products#personal", icon: Car },
            { title: "Travel Insurance", href: "/products#personal", icon: Plane },
            { title: "Personal Accident", href: "/products#personal", icon: Activity },
            { title: "Domestic Package", href: "/products#personal", icon: Shield },
          ],
        },
        {
          title: "Business Insurance",
          color: "text-rose-600 bg-rose-50 border-rose-100",
          items: [
            { title: "Property Insurance", href: "/products#business", icon: Building2 },
            { title: "Fire & Burglary", href: "/products#business", icon: Shield },
            { title: "Employees Liability", href: "/products#business", icon: Briefcase },
            { title: "Medical Schemes", href: "/products#business", icon: Heart },
            { title: "All Risks Insurance", href: "/products#business", icon: Layers },
          ],
        },
        {
          title: "Specialized Risks",
          color: "text-amber-600 bg-amber-50 border-amber-100",
          items: [
            { title: "Marine & Goods", href: "/products#specialized", icon: Anchor },
            { title: "Contractors All Risks", href: "/products#specialized", icon: Shield },
            { title: "Credit Life", href: "/products#specialized", icon: Layers },
          ],
        },
      ],
    },
    { label: "Claims", href: "/claims" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Safe client state reset to prevent ESLint side-effect warnings
  useEffect(() => {
    const execReset = () => {
      setMobileOpen(false);
      setMobileProductsOpen(false);
    };
    execReset();
  }, [pathname]);

  return (
    <>
      {/* Structural Outer Grid Wrapper */}
      <header
        className={`sticky top-0 z-50 w-full font-sans antialiased transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-lg shadow-slate-100/40"
            : "bg-white border-slate-100"
        }`}
      >
        {/* 1. TOP STATUTORY METRICS BAR */}
        <div className={`hidden lg:block bg-slate-950 transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0 py-0" : "max-h-10 opacity-100 py-2"
        }`}>
          <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between text-[11px] font-bold tracking-widest uppercase text-slate-400">
              <div className="flex items-center gap-6">
                <a href="tel:+211927815160" className="flex items-center gap-2 hover:text-white transition-colors duration-150">
                  <Phone className="h-3 w-3 text-blue-500" />
                  <span>+211 927 815 160</span>
                </a>
                <span className="h-2.5 w-px bg-slate-800" />
                <span className="text-slate-400 flex items-center gap-1.5 font-normal normal-case tracking-normal">
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-none" />
                  Statutory Carrier Registry Office — Juba, South Sudan
                </span>
              </div>
              <div className="flex items-center gap-5 text-[10px]">
                <Link href="/claims" className="hover:text-white transition-colors duration-150">Claims Center</Link>
                <span className="w-1 h-1 bg-slate-800" />
                <Link href="/contact" className="hover:text-white transition-colors duration-150">Risk Advisory Support</Link>
              </div>
            </div>
          </Container>
        </div>

        {/* 2. PRIMARY STRUCTURAL NAVIGATION */}
        <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-20"}`}>
            
            {/* Crisp Corporate Branding Module */}
            <Link href="/" className="shrink-0 transition-opacity active:opacity-80 flex items-center">
              <Image
                src="/logo (3).png"
                alt="Koryom Insurance"
                width={160}
                height={45}
                priority
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-7" : "h-9"
                }`}
              />
            </Link>

            {/* Central Linear Nav Items */}
            <nav className="hidden lg:flex items-center gap-1 h-full">
              {navConfig.links.map((link) => {
                const isActive = pathname === link.href;
                
                if (!link.isMega) {
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`text-[12px] uppercase font-bold tracking-wider px-4 h-full flex items-center border-b-2 transition-all duration-150 ${
                        isActive
                          ? "border-blue-600 text-slate-900 bg-slate-50"
                          : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                }

                return (
                  <div key={link.label} className="group/mega h-full flex items-center">
                    <button className="flex items-center gap-1.5 text-[12px] uppercase font-bold tracking-wider px-4 h-full border-b-2 border-transparent text-slate-600 group-hover/mega:text-slate-900 group-hover/mega:bg-slate-50 group-hover/mega:border-blue-600 transition-all duration-150">
                      {link.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover/mega:rotate-180 text-slate-400" />
                    </button>

                    {/* Architectural Dropdown Panel Grid */}
                    <div className="invisible opacity-0 group-hover/mega:visible group-hover/mega:opacity-100 absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-150 ease-in-out transform translate-y-1 group-hover/mega:translate-y-0 z-50 p-8">
                      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
                        
                        {/* Interactive Risk Underwriting Frame Area */}
                        <div className="col-span-3 border border-slate-200 bg-slate-50 p-5 flex flex-col justify-between rounded-none relative">
                          <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-slate-400" />
                          <div>
                            <div className="inline-flex items-center gap-1.5 border border-blue-200 bg-blue-50/50 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-blue-600">
                              <GanttChartSquare className="h-2.5 w-2.5" /> Framework Engine
                            </div>
                            <h4 className="mt-4 font-black text-slate-900 text-sm uppercase tracking-wide">Risk Architecture</h4>
                            <p className="mt-2 text-[11px] text-slate-500 leading-relaxed font-normal">
                              Fully localized structures engineered specifically for asset consolidation, multi-fleet logistics, and sovereign operations within South Sudan markets.
                            </p>
                          </div>
                          <Link href="/products" className="mt-6 group/btn flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-bold uppercase tracking-wider py-3 transition-colors rounded-none">
                            View All Matrices <ArrowUpRight className="h-3 w-3 text-slate-400 group-hover/btn:text-white transition-colors" />
                          </Link>
                        </div>

                        {/* Mega Categorizations Anchors Grid */}
                        <div className="col-span-9 grid grid-cols-3 gap-6">
                          {link.sections?.map((section, idx) => (
                            <div key={idx} className="space-y-3.5 border-l border-slate-100 pl-4 first:border-0 first:pl-0">
                              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pb-1.5 border-b border-slate-100">
                                {section.title}
                              </h3>
                              <ul className="space-y-1">
                                {section.items.map((item) => (
                                  <li key={item.title}>
                                    <Link
                                      href={item.href}
                                      className="flex items-center gap-2.5 p-2 text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all rounded-none group/item"
                                    >
                                      <div className={`p-1 border ${section.color} transition-colors group-hover/item:bg-white`}>
                                        <item.icon className="h-3.5 w-3.5" />
                                      </div>
                                      <span className="tracking-wide font-medium">{item.title}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Flat Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/portal" className="flex items-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors rounded-none">
                <UserCircle2 className="h-3.5 w-3.5 text-slate-400" /> Executive Portal
              </Link>
              <Link href="/quote" className="flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md transition-colors rounded-none">
                Request Quote <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-600 hover:text-slate-900 transition-colors rounded-none"
              aria-label="Toggle structural navigation panel"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </Container>
      </header>

      {/* 3. MOBILE MENU INTERACTIVE DRAWER */}
      <div 
        className={`fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm lg:hidden transition-opacity duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`} 
        onClick={() => setMobileOpen(false)} 
      />
      
      <aside className={`fixed top-0 right-0 z-50 h-full w-full max-w-xs bg-white border-l border-slate-200 shadow-2xl lg:hidden flex flex-col transition-transform duration-200 ease-in-out ${
        mobileOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <Image src="/logo (3).png" alt="Koryom Logo" width={130} height={35} className="w-auto h-7 object-contain" />
          <button onClick={() => setMobileOpen(false)} className="p-1.5 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors rounded-none">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
          {navConfig.links.map((link) => {
            if (!link.isMega) {
              return (
                <Link key={link.label} href={link.href} className="block w-full p-2.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors rounded-none">
                  {link.label}
                </Link>
              );
            }

            return (
              <div key={link.label} className="border border-slate-100 rounded-none overflow-hidden">
                <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className="flex w-full items-center justify-between p-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-50">
                  <span>{link.label}</span>
                  <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`transition-all duration-200 overflow-hidden ${mobileProductsOpen ? "max-h-[1000px] border-t border-slate-100 p-2.5 bg-white" : "max-h-0"}`}>
                  {link.sections?.map((section, sIdx) => (
                    <div key={sIdx} className="mb-4 last:mb-0">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5 px-1">{section.title}</p>
                      <div className="grid gap-0.5">
                        {section.items.map((item) => (
                          <Link key={item.title} href={item.href} className="text-xs text-slate-600 hover:text-slate-900 py-2 px-2 hover:bg-slate-50 block font-medium tracking-wide">
                            — {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-4">
          <div className="space-y-2 text-[11px] text-slate-500 font-medium tracking-wide">
            <div className="flex items-center gap-2.5"><Phone className="h-3.5 w-3.5 text-slate-400" /> <span>+211 927 815 160</span></div>
            <div className="flex items-center gap-2.5"><Mail className="h-3.5 w-3.5 text-slate-400" /> <span className="truncate">info@koryominsurance.com</span></div>
            <div className="flex items-start gap-2.5"><MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" /> <span className="leading-tight">Juba, South Sudan</span></div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Link href="/portal" className="text-center font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 py-2.5 text-[10px] uppercase tracking-wider rounded-none transition-colors">Portal</Link>
            <Link href="/quote" className="text-center font-bold bg-rose-600 hover:bg-rose-700 text-white py-2.5 text-[10px] uppercase tracking-wider rounded-none transition-colors">Get Quote</Link>
          </div>
        </div>
      </aside>
    </>
  );
}