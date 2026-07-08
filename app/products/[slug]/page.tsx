import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  HelpCircle,
  PhoneCall
} from "lucide-react";

import Container from "@/components/ui/container";
// Central structured data file mapping matching slugs
import { productCategories } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function IndividualProductPage({ params }: ProductPageProps) {
  // Await page dynamic parameters securely under Next.js 15 routing conventions
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Isolate product profiles across categorical arrays
  const allProducts = productCategories.flatMap((category) => category.items);
  
  // Explicit lookup corresponding with the search dropdown's destination routes
  const product = allProducts.find((p) => p.slug === slug);

  // Fallback to global 404 cleanly if page target matrix contains an undefined slug path
  if (!product) {
    notFound();
  }

  const Icon = product.icon;

  return (
    <main className="bg-slate-50 text-slate-900 antialiased font-sans selection:bg-blue-900 selection:text-white">
      
      {/* SECTION 1: SYSTEM VISIBILITY SPLIT HERO SECTION */}
      <section className="relative bg-slate-950 text-white py-12 lg:py-20 overflow-hidden border-b border-slate-800">
        {/* Institutional Background Framework Grid Design */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* Grid Column Right Left Segment: Structural Typography */}
            <div className="lg:col-span-7 space-y-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors group"
              >
                <ArrowLeft className="h-3.5 w-3.5 transform transition-transform group-hover:-translate-x-0.5" />
                Back to Portfolio Matrix
              </Link>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <div className="p-3 bg-blue-600 text-white border border-blue-500 rounded-none w-fit shrink-0 shadow-lg">
                  <Icon className="h-6 w-6 stroke-[2]" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                    {product.title}
                  </h1>
                  <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mt-1">
                    Koryom Risk Underwriting Line
                  </p>
                </div>
              </div>
            </div>

            {/* Grid Column Right Sidebar Segment: Framework Underwriting Document Display */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] sm:aspect-[21/9] lg:aspect-[4/3] w-full bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden rounded-none group/hero-img">
                <Image
                  src={product.image}
                  alt={`${product.title} Policy Protection Sheet`}
                  fill
                  priority
                  sizes="(max-w-7xl) 40vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 group-hover/hero-img:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* SECTION 2: GRANULAR SYSTEM POLICIES & INSULATION CRITERIA */}
      <section className="py-16 lg:py-20">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Primary Details Panel Block Layout */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Coverage Risk Underwriting Guidelines Description */}
              <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-none shadow-xs space-y-4">
                <h3 className="text-xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-blue-600" /> Coverage Parameters & Mandates
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 font-normal">
                  {product.description}
                </p>
                <p className="text-xs leading-relaxed text-slate-400 italic pt-2">
                  * All policy lines are governed under local regulatory jurisdictions and processed directly through Koryom Insurance foundational workflows at the Juba corporate hub.
                </p>
              </div>

              {/* Risk Feature Points Inclusions Grid Matrix */}
              <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-none shadow-xs space-y-4">
                <h3 className="text-xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Core Policy Benefits & Inclusions
                </h3>
                <div className="grid gap-3">
                  {product.features?.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3.5 p-4 bg-slate-50 border border-slate-100 rounded-none hover:border-slate-200 transition-colors"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800 tracking-wide">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sticky Interaction Column Right Layout Section */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
              
              {/* Underwriting Request Processing Console Card */}
              <div className="bg-slate-900 text-white p-6 sm:p-8 border-t-4 border-blue-500 rounded-none shadow-md space-y-6">
                <div>
                  <h4 className="text-lg font-serif font-bold text-white">
                    Secure This Policy Line
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-relaxed">
                    Initiate underwriting consultation to map out financial indemnity guidelines tailored closely to your operation framework.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase py-3.5 px-4 rounded-none transition-colors w-full text-center tracking-widest"
                  >
                    Request Underwriting Quote
                  </Link>
                  <Link
                    href="mailto:Koryominsuranc65@gmail.com"
                    className="flex items-center justify-center gap-2 border border-slate-700 bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs font-bold uppercase py-3.5 px-4 rounded-none transition-colors w-full text-center tracking-widest"
                  >
                    Email Core Desk
                  </Link>
                </div>

                <div className="border-t border-slate-800 pt-4 space-y-3 text-[11px] text-slate-400 font-medium">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-blue-400 shrink-0" />
                    <span>Processing Goal: Rapid Deployment Execution</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <HelpCircle className="h-4 w-4 text-blue-400 shrink-0" />
                    <span>Location Context: Buluk National Traffic Police GHQs Hub</span>
                  </div>
                </div>
              </div>

              {/* Juba Liaison Hotline Assistance Component */}
              <div className="bg-white border border-slate-200 p-6 rounded-none text-center space-y-3 shadow-xs">
                <div className="mx-auto bg-blue-50 text-blue-900 p-2.5 border border-blue-100 rounded-none w-fit">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <h5 className="text-xs font-bold uppercase text-slate-900 tracking-wider">
                  Underwriting Liaison Office
                </h5>
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Connect live with corporate risk evaluation advisors directly at our Juba Headquarters.
                </p>
                <div className="text-xs font-bold text-blue-900 pt-1 tracking-wide">
                  +211 927 815 160
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>

    </main>
  );
}