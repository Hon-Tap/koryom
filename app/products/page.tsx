import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  UserCheck,
  CheckCircle2,
  Clock,
  HelpCircle,
} from "lucide-react";

import Container from "@/components/ui/container";
// Import your central data matrix
import { productCategories } from "@/data/products";

const stats = [
  { value: "Feb 2020", label: "Officially Registered & Trusted Foundation" },
  { value: "Rapid", label: "Integrity-Driven Claims Response Goal" },
  { value: "Bespoke", label: "Customizable Multi-Sector Protection Policies" },
  { value: "Juba HQ", label: "Buluk National Traffic Police Ghqs Hub" },
];

export default function ProductsPage() {
  return (
    <main className="bg-slate-50 text-slate-900 antialiased font-sans selection:bg-blue-900 selection:text-white">
      
      {/* SECTION 1: INSTITUTIONAL TRUST HERO */}
      <section className="relative min-h-[90vh] flex items-center py-20 lg:py-32 text-white overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/domestic.jpg" 
            alt="Koryom Institutional Underwriting Shield Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-blue-950/80" />
        </div>
        
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 px-3.5 py-1.5 rounded-none text-xs font-semibold tracking-wide text-blue-300 backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-blue-400" /> Koryom Insurance Company Limited
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
                Your World, <span className="text-blue-400">Protected.</span>
              </h1>
              
              <p className="max-w-xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                We manage the risks of today so you can focus on building a bolder tomorrow. Founded on principles of absolute integrity, transparency, and rapid response.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3.5 px-8 rounded-none transition-all duration-200 shadow-md text-center"
                >
                  Connect With An Advisor
                </Link>
                <Link
                  href="#categories"
                  className="flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/40 hover:bg-slate-900 text-slate-200 hover:text-white text-sm font-semibold py-3.5 px-6 rounded-none transition-all duration-200 backdrop-blur-xs text-center"
                >
                  View Corporate Portfolio
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-none overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image
                  src="/images/products/domestic.jpg"
                  alt="Koryom multi-sector institutional risk management"
                  fill
                  priority
                  sizes="(max-w-7xl) 33vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-slate-900/95 backdrop-blur-md border-t-2 border-blue-500 text-white shadow-xl rounded-none">
                  <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">Our Guarantee</p>
                  <h4 className="text-lg font-serif font-bold text-white mb-1">Integrity-Driven Processing</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Minimizing institutional bureaucracy and deployment downtime to supply prompt financial support when it matters most to your entity.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* SECTION 2: TRUST ARTIFACTS / STABILITY STRIP */}
      <section className="bg-white border-b border-slate-200 relative z-20 mt-[-40px] shadow-sm max-w-6xl mx-auto rounded-none">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100 text-center rounded-none">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-none">
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: THE COMPREHENSIVE SOLUTIONS MATRIX */}
      <section id="categories" className="py-20 lg:py-24 bg-slate-50">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Underwriting Portfolio Matrix
            </h2>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Bespoke Policy Solutions Built For Stability
            </p>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Explore corporate and individual underwriting lines engineered on the ground by specialists in risk mitigation.
            </p>
          </div>

          {productCategories.map((category, catIndex) => (
            <div key={category.id} className={`${catIndex > 0 ? "mt-24 pt-16 border-t border-slate-200" : ""}`}>
              
              <div className="mb-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                  <span className="h-0.5 w-6 bg-blue-600 rounded-none" /> Section 0{catIndex + 1}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                  {category.categoryTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                  {category.subtitle}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {category.items.map((product) => {
                  const Icon = product.icon;

                  return (
                    <div
                      key={product.title}
                      className="group flex flex-col sm:flex-row bg-white border border-slate-200/80 rounded-none shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden relative"
                    >
                      <div className="relative aspect-video sm:aspect-square sm:w-48 bg-slate-100 overflow-hidden shrink-0">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-w-7xl) 25vw, 100vw"
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between rounded-none">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-1 bg-blue-50 text-blue-900 rounded-none border border-blue-100">
                              <Icon className="h-4 w-4 stroke-[2]" />
                            </div>
                            <h4 className="text-lg font-serif font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                              {product.title}
                            </h4>
                          </div>
                          <p className="text-xs leading-relaxed text-slate-500 font-normal">
                            {product.description}
                          </p>

                          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                            {product.features.map((feature) => (
                              <div key={feature} className="flex items-start gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 mt-0.5 shrink-0" />
                                <span className="text-xs font-medium text-slate-700 tracking-wide">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 pt-3 border-t border-slate-100">
                          <Link
                            href={`/products/${product.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 hover:text-blue-600 transition-colors group/link"
                          >
                            Coverage Parameters 
                            <ArrowRight className="h-3 w-3 transform transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          ))}

        </Container>
      </section>

      {/* SECTION 4: MINI SUMMARIZED CONCIERGE CTA */}
      <section className="relative py-16 bg-slate-900 text-white overflow-hidden border-t border-slate-800 rounded-none">
        <Container className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-none bg-blue-950 text-blue-400 border border-blue-800/40 mb-2">
              <UserCheck className="h-6 w-6" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Ready for Absolute Protection?
            </h2>
            
            <p className="mx-auto max-w-xl text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Connect immediately with Koryom underwriting risk experts locally at our Juba headquarters based at the Buluk National Traffic police Ghqs. Let us coordinate a secure roadmap for your assets.
            </p>

            <div className="pt-4 flex flex-col justify-center gap-4 sm:flex-row max-w-xs sm:max-w-md mx-auto">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 px-6 rounded-none shadow-md transition-colors text-center"
              >
                Request Quotation Structure
              </Link>
              
              <Link
                href="/about"
                className="flex items-center justify-center gap-2 border border-slate-700 bg-slate-950 hover:bg-slate-900 text-slate-200 text-sm font-semibold py-3 px-6 rounded-none transition-all text-center"
              >
                Learn Our Values (About Us)
                <ArrowRight className="h-4 w-4 text-blue-400" />
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] text-slate-500 font-medium">
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Headquarters Desk: +211 927 815 160</span>
              <span className="flex items-center gap-1.5"><HelpCircle className="h-3.5 w-3.5" /> Underwriting Core: Koryominsuranc65@gmail.com</span>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}