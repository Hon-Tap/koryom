import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Car,
  Plane,
  Activity,
  Shield,
  Building2,
  Briefcase,
  Layers,
  Anchor,
  CheckCircle2,
  Clock3,
  Award,
  Users,
  ShieldCheck,
  GanttChartSquare,
} from "lucide-react";

import Container from "@/components/ui/container";

// Exact product categories mapping to image_8da506.png navbar structure
const productCategories = [
  {
    id: "personal",
    categoryTitle: "Personal Insurance",
    subtitle: "Individual & Family Protection Frameworks",
    items: [
      {
        title: "Health Insurance",
        icon: Heart,
        image: "/images/products/health.jpg",
        description: "Comprehensive high-tier medical networks and hospitalization protection structures for individuals and direct dependants.",
        features: ["In-Patient Structural Cover", "Comprehensive Out-Patient Care", "Direct Hospital Network Access", "Emergency Evacuation Logistics"],
        href: "/products/health-insurance",
        accentClass: "text-blue-600 bg-blue-50 border-blue-100",
      },
      {
        title: "Motor Insurance",
        icon: Car,
        image: "/images/products/motor.jpg",
        description: "Engineered liability and assets protection covering personal mobility vectors, private transport, and personal vehicles.",
        features: ["Full Value Comprehensive Indemnity", "Third-Party Legal Liabilities", "Fire, Burglary & Static Loss Protection", "Unforeseen Special Perils"],
        href: "/products/motor-insurance",
        accentClass: "text-blue-600 bg-blue-50 border-blue-100",
      },
      {
        title: "Travel Insurance",
        icon: Plane,
        image: "/images/products/travel.jpg",
        description: "Continuous jurisdictional risk mitigation for global transits, covering healthcare disruptions, travel delays, and lost property.",
        features: ["Global Medical Emergencies Cover", "Transit Disruption Remittances", "Baggage Loss Indemnity", "Sovereign Emergency Assistance"],
        href: "/products/travel-insurance",
        accentClass: "text-blue-600 bg-blue-50 border-blue-100",
      },
      {
        title: "Personal Accident",
        icon: Activity,
        image: "/images/products/accident.jpg",
        description: "Direct cash flow stabilization and capital security buffers against physical occupational disruptions or unexpected injuries.",
        features: ["Income Interruption Mitigation", "Disability Capital Settlements", "Emergency Medical Care Surcharges", "24/7 Global Occupational Coverage"],
        href: "/products/personal-accident",
        accentClass: "text-blue-600 bg-blue-50 border-blue-100",
      },
      {
        title: "Domestic Package",
        icon: Shield,
        image: "/images/products/domestic.jpg",
        description: "Unified structural safety umbrella covering corporate housing units, private residences, indoor permanent assets, and staff liabilities.",
        features: ["Residential Structural Integrity Cover", "Content Burglary Protections", "Occupiers Legal Liability Profiles", "Domestic Employee Liability Indemnity"],
        href: "/products/domestic-package",
        accentClass: "text-blue-600 bg-blue-50 border-blue-100",
      },
    ],
  },
  {
    id: "business",
    categoryTitle: "Business Insurance",
    subtitle: "Enterprise Risk Management & Asset Consolidation",
    items: [
      {
        title: "Property Insurance",
        icon: Building2,
        image: "/images/products/property.jpg",
        description: "Institutional real estate defense systems insulating physical headquarters, logistical warehouses, and heavy operations plant equipment.",
        features: ["All-Risk Property Indemnity", "Structural Natural Catastrophe Cover", "Operational Outage Cost Adjustments", "Equipment Breakdown Extensions"],
        href: "/products/property-insurance",
        accentClass: "text-rose-600 bg-rose-50 border-rose-100",
      },
      {
        title: "Fire & Burglary",
        icon: Shield,
        image: "/images/products/fire-burglary.jpg",
        description: "High-level risk mitigation shielding corporate inventory, active logistics hubs, and operational assets from physical threats.",
        features: ["Conflagration & Fire Deficit Cover", "Forcible Entry Theft Restitution", "Inventory Volatility Protection", "Business Disruption Bridging Loans"],
        href: "/products/fire-burglary",
        accentClass: "text-rose-600 bg-rose-50 border-rose-100",
      },
      {
        title: "Employees Liability",
        icon: Briefcase,
        image: "/images/products/employees.jpg",
        description: "Essential statutory corporate legal insulation securing enterprises against workplace accidents and employee litigation claims.",
        features: ["Statutory Compliance Architecture", "Workplace Injury Financial Security", "Legal Defense Fee Liquidation", "Occupational Health Hazard Buffers"],
        href: "/products/employees-liability",
        accentClass: "text-rose-600 bg-rose-50 border-rose-100",
      },
      {
        title: "Medical Schemes",
        icon: Heart,
        image: "/images/products/schemes.jpg",
        description: "Premium tailor-made corporate healthcare matrix frameworks constructed to retain talent and optimize organizational continuity.",
        features: ["Custom Tiered Benefit Matrix", "Corporate Outpatient Portals", "Pre-existing Condition Underwriting", "Direct Corporate Electronic Claims"],
        href: "/products/medical-schemes",
        accentClass: "text-rose-600 bg-rose-50 border-rose-100",
      },
      {
        title: "All Risks Insurance",
        icon: Layers,
        image: "/images/products/all-risks.jpg",
        description: "All-inclusive protective perimeter shielding critical loose corporate property, data cores, and expensive mobile tech from loss.",
        features: ["High-Value Mobile Asset Coverage", "Accidental Damage Restoration", "Transit Theft Liquidation", "Tech Infrastructure Recovery Funds"],
        href: "/products/all-risks",
        accentClass: "text-rose-600 bg-rose-50 border-rose-100",
      },
    ],
  },
  {
    id: "specialized",
    categoryTitle: "Specialized Risks",
    subtitle: "Complex Regional Underwriting & Dynamic Industrial Hazards",
    items: [
      {
        title: "Marine & Goods",
        icon: Anchor,
        image: "/images/products/marine.jpg",
        description: "Continuous global and regional supply chain logistics coverage protecting high-value cargo over maritime routes and borders.",
        features: ["Marine Cargo Hull Indemnity", "Cross-Border Inland Logistics Shield", "Intermodal Cargo Theft Compensation", "General Average Shipping Extensions"],
        href: "/products/marine-in-transit",
        accentClass: "text-amber-600 bg-amber-50 border-amber-100",
      },
      {
        title: "Contractors All Risks",
        icon: Shield,
        image: "/images/products/contractors.jpg",
        description: "Engineering risk management systems crafted for large-scale development projects, infrastructure works, and civil engineering sites.",
        features: ["Active Permanent Civil Works Cover", "Heavy Engineering Plant Security", "Third-Party Site Injury Coverage", "Structural Defect Mitigation Modules"],
        href: "/products/contractors-all-risks",
        accentClass: "text-amber-600 bg-amber-50 border-amber-100",
      },
      {
        title: "Credit Life",
        icon: Layers,
        image: "/images/products/credit-life.jpg",
        description: "Financial institution safety structures engineered to insulate lending pipelines from borrower default risks caused by unforeseen disruptions.",
        features: ["Financial Institution Debt Coverage", "Corporate Lending Portfolio Buffers", "Loan Default Capital Protection", "Amortized Risk Reduction Alignment"],
        href: "/products/credit-life",
        accentClass: "text-amber-600 bg-amber-50 border-amber-100",
      },
    ],
  },
];

const advantages = [
  { icon: Clock3, title: "Rapid Claims Response Protocols" },
  { icon: ShieldCheck, title: "Comprehensive Risk Underwriting" },
  { icon: Award, title: "Specialized Localized Market Expertise" },
  { icon: Users, title: "Dedicated Structural Risk Advisory" },
];

export default function ProductsPage() {
  return (
    <main className="bg-white text-slate-900 antialiased font-sans">
      
      {/* SECTION 1: SYSTEMIZED ARCHITECTURAL HERO */}
      <section className="relative overflow-hidden bg-slate-950 py-28 lg:py-36 border-b border-slate-900">
        {/* Background Grids & Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute left-0 top-0 h-[450px] w-[450px] bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] bg-rose-500/5 blur-[120px]" />

        <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 border border-slate-800 bg-slate-900/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 rounded-none">
              <GanttChartSquare className="h-3 w-3" /> Core Solutions Matrix
            </div>

            <h1 className="mt-8 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-7xl leading-none">
              Risk Architecture
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-300 to-amber-400">
                Engineered For Protection
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-400 tracking-wide font-normal">
              Explore comprehensive insurance frameworks calibrated specifically for sovereign assets, supply chains, commercial fleets, corporate personnel, and individual portfolios within South Sudan.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row max-w-md mx-auto">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold uppercase tracking-wider py-3.5 px-6 transition-colors rounded-none shadow-lg"
              >
                Request Risk Assessment <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/claims"
                className="flex items-center justify-center gap-2 border border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-300 text-[11px] font-bold uppercase tracking-wider py-3.5 px-6 transition-colors rounded-none"
              >
                Claims Underwriting Center
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: THE COMPREHENSIVE SOLUTIONS MATRIX */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {productCategories.map((category, catIndex) => (
            <div key={category.id} className={`${catIndex > 0 ? "mt-24 pt-16 border-t border-slate-100" : ""}`}>
              
              {/* Category Anchor Headers */}
              <div className="mb-12 max-w-3xl">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-slate-900 rounded-none" /> Secure Section 0{catIndex + 1}
                </div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-wide text-slate-900">
                  {category.categoryTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-medium">
                  {category.subtitle}
                </p>
              </div>

              {/* Dynamic Industrial Products Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((product) => {
                  const Icon = product.icon;

                  return (
                    <div
                      key={product.title}
                      className="group flex flex-col bg-white border border-slate-200 rounded-none shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 relative"
                    >
                      {/* Technical Wireframe Corners */}
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-300 group-hover:border-slate-500 transition-colors" />
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-300 group-hover:border-slate-500 transition-colors" />

                      {/* Image Frame Area */}
                      <div className="relative h-48 w-full bg-slate-100 border-b border-slate-200 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-w-7xl) 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-80" />
                        
                        {/* Dynamic Floating Category Badge Identifier */}
                        <div className="absolute bottom-4 left-4">
                          <div className={`p-2 border ${product.accentClass} shadow-md rounded-none`}>
                            <Icon className="h-4 w-4" />
                          </div>
                        </div>
                      </div>

                      {/* Content Management Blocks */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold uppercase tracking-wide text-slate-900 group-hover:text-blue-600 transition-colors">
                            {product.title}
                          </h3>
                          <p className="mt-3 text-xs leading-relaxed text-slate-500 font-normal">
                            {product.description}
                          </p>

                          {/* Structural Features Spec Checklists */}
                          <div className="mt-5 pt-5 border-t border-slate-100 space-y-2.5">
                            {product.features.map((feature) => (
                              <div key={feature} className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-3.5 w-3.5 text-slate-400 mt-0.5 shrink-0" />
                                <span className="text-[11px] font-medium text-slate-600 tracking-wide">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Flat Alignment Navigation Trigger */}
                        <div className="mt-8 pt-4 border-t border-slate-100">
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-900 hover:text-blue-600 transition-colors group/link"
                          >
                            Initialize Cover System 
                            <ArrowRight className="h-3 w-3 ml-1 transform transition-transform group-hover/link:translate-x-1" />
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

      {/* SECTION 3: INTEGRATED TRUST PROFILES (WHY KORYOM) */}
      <section className="bg-slate-950 py-20 lg:py-24 border-b border-slate-900 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[140px] pointer-events-none" />
        
        <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">
                Operational Framework Excellence
              </div>
              <h2 className="text-3xl font-black uppercase tracking-wide text-white sm:text-4xl lg:text-5xl leading-tight">
                More Than Insurance. <br/>
                A Risk Engineer.
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
                Koryom Group combines direct technical field expertise, structured regional financial backing, and robust sovereign compliance modules to deliver unparalleled asset security grids.
              </p>

              {/* Grid System Advantages Blocks */}
              <div className="grid gap-3 pt-4">
                {advantages.map((item) => {
                  const AdvIcon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 border border-slate-900 bg-slate-900/30 p-4 rounded-none"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-slate-800 bg-slate-950 text-blue-400 rounded-none">
                        <AdvIcon className="h-4 w-4" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Strict Monolithic Graphic Column */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/10] bg-slate-900 border border-slate-800 p-2 rounded-none">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-600" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-600" />
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/products/insurance-team.jpg"
                    alt="Koryom Underwriting Corporate Advisory Board"
                    fill
                    sizes="(max-w-7xl) 50vw"
                    className="object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* SECTION 4: FLUID INDUSTRIAL CALL TO ACTION FRAMEWORK */}
      <section className="relative overflow-hidden py-20 lg:py-24 bg-white">
        <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border border-slate-200 bg-slate-50 p-10 sm:p-16 lg:p-20 text-center rounded-none overflow-hidden">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-slate-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-slate-400" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                System Execution Interface
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Ready To Underwrite Your Assets?
              </h2>
              <p className="mx-auto max-w-2xl text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Connect directly with our primary legal risk architects in Juba to map out, calculate, and implement premium structural protections tailored entirely to your operations.
              </p>

              <div className="pt-6 flex flex-col justify-center gap-3 sm:flex-row max-w-sm mx-auto">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold uppercase tracking-wider py-3 px-6 transition-colors rounded-none shadow-md"
                >
                  Acquire Coverage Framework <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/about"
                  className="flex items-center justify-center border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-[11px] font-bold uppercase tracking-wider py-3 px-6 transition-colors rounded-none"
                >
                  Corporate Profile
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}