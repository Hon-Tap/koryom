import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  HeartPulse,
  Car,
  Building,
  Anchor,
  Briefcase,
  Users,
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  Compass,
  Eye,
  FileCheck2
} from "lucide-react";

import Container from "@/components/ui/container";

const values = [
  {
    title: "Absolute Integrity",
    description:
      "Engineered on transparent structural underwriting accountability and absolute fiduciary trust in every custom policy transaction.",
  },
  {
    title: "Operational Excellence",
    description:
      "Executing thorough risk evaluation protocols backed by agile, responsive asset verification and deployment models.",
  },
  {
    title: "Targeted Innovation",
    description:
      "Crafting modern corporate safety nets built around volatile macro environments and emerging enterprise risk vectors.",
  },
  {
    title: "Client-Centric Guard",
    description:
      "Centering our underwriting metrics around long-term capital preservation, household stability, and enterprise continuity.",
  },
];

const reasons = [
  "Rapid, dependable claims processing framework structured to reduce operational downtime.",
  "Comprehensive cross-sector general insurance options customized to local market trends.",
  "Agile risk-transference variables engineered for dynamic private, NGO, and corporate assets.",
  "Meticulous actuarial verification processes supervised by certified corporate risk specialists.",
  "Deep domestic execution intelligence matched with multi-layered regional market capabilities.",
  "Transparent contractual coverage absolute of unnecessary administrative complexities.",
];

const frameworks = [
  { icon: HeartPulse, title: "Health & Corporate Wellness Schemes" },
  { icon: Car, title: "Motor Vehicle Asset Protection" },
  { icon: Building, title: "Fire, Burglary & Property Indemnity" },
  { icon: Anchor, title: "Marine & Transit Cargo Security" },
  { icon: Briefcase, title: "Employees Liability & Civil Safeguards" },
  { icon: Shield, title: "Constructors All Risks & Credit Life" },
];

export default function AboutPage() {
  return (
    <main className="bg-slate-50 text-slate-900 antialiased selection:bg-blue-900 selection:text-white">
      
      {/* SECTION 1: COMPACT INSTITUTIONAL HERO (Narrow High-Impact Profile) */}
<section className="relative py-16 lg:py-20 bg-slate-950 text-white overflow-hidden border-b border-blue-900/30">
  
  {/* BACKGROUND IMAGE & LAYER ARCHITECTURE */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    {/* The Underlying Image Asset */}
    <Image
      src="/images/car.jpg"
      alt="Koryom Corporate Operations Underwriting Background"
      fill
      priority
      className="object-cover object-center opacity-25 filter grayscale contrast-125 mix-blend-luminosity"
    />
    {/* The Linear Matte Mask Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/80" />
  </div>

  {/* FOREGROUND CONTENT LAYER */}
  <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-l-2 border-blue-500 pl-6">
      <div className="max-w-3xl space-y-2">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-blue-400 block">
          Corporate Legacy & Positioning
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
          Koryom Insurance Company Limited
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-normal leading-relaxed">
          Mitigating structural uncertainties and anchoring corporate asset trajectories across South Sudan with premier, specialized risk portfolios.
        </p>
      </div>
      
      <div className="flex sm:items-center gap-3 shrink-0">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-none transition-colors duration-200"
        >
          Corporate Desk
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </Container>
</section>

      {/* SECTION 2: INSTITUTIONAL BACKGROUND & CORE ORIGINS */}
      <section className="py-20 bg-white">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
                  Historical Blueprint
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                  Formulated on Accountability, Scaled to Safeguard Assets
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                <p>
                  Established as a thoroughly incorporated underwriting enterprise on{" "}
                  <strong className="font-semibold text-slate-900">February 28, 2020</strong>[cite: 1], 
                  Koryom Insurance Company Limited has systematically optimized its layout to serve as a reliable anchor for corporate risk advisory and complete insurance distribution models[cite: 1].
                </p>
                <p>
                  We coordinate an expanding portfolio of general risk protection metrics with tailored specialized structures[cite: 1]. This comprehensive setup is precisely engineered to protect against asset depreciation, volatile liabilities, and unforeseen disruptions impacting commerce, humanitarian NGOs, and private families[cite: 1].
                </p>
                <p>
                  Rather than deploying generic, rigid contracts, Koryom integrates dynamic on-site client risk assessments[cite: 1]. Our specialized underwriting specialists pinpoint regional environmental and operational exposures, tailoring absolute coverage profiles backed by responsive claim validation networks[cite: 1].
                </p>
              </div>

              {/* Physical Location Anchors */}
              <div className="pt-4 grid sm:grid-cols-2 gap-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>HQ Hub: Buluk National Traffic police Ghqs, Juba, South Sudan[cite: 1]</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Contact Pipeline: +211 927 815 160[cite: 1]</span>
                </div>
              </div>
            </div>

            {/* Architectural Profile Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-video sm:aspect-[4/3] lg:aspect-[4/5] w-full bg-slate-100 overflow-hidden border-4 border-slate-100 shadow-xl rounded-none group">
                <Image
                  src="/images/motor.jpg"
                  alt="Koryom Corporate Risk Assessment Infrastructure"
                  fill
                  className="object-cover w-full h-full object-center transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 text-white p-4 rounded-none border-l-2 border-blue-500 backdrop-blur-xs">
                  <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-1">HQ Logistics</p>
                  <p className="text-xs text-slate-300 font-normal">Operational command centered strategically within the national traffic infrastructure loop in Juba[cite: 1].</p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      <hr className="border-slate-200 max-w-7xl mx-auto" />

      {/* SECTION 3: STRATEGIC AXIS (Vision & Mission Dual Formats) */}
      <section className="py-20 bg-slate-50">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Vision Block */}
            <div className="bg-white border border-slate-200 p-8 rounded-none flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
              <div className="space-y-4">
                <div className="h-10 w-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-none border border-blue-100">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">Corporate Vision</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                  To stand as the absolute regional benchmark of financial trust and accessible protection across regional structures, empowering commercial entities and civic societies to cultivate capital and legacy confidently[cite: 1].
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] uppercase tracking-widest font-bold text-slate-400">
                Strategic Foresight
              </div>
            </div>

            {/* Mission Block */}
            <div className="bg-slate-950 text-white p-8 rounded-none flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 bg-blue-600/10 blur-2xl rounded-none" />
              <div className="space-y-4 relative z-10">
                <div className="h-10 w-10 flex items-center justify-center bg-slate-900 text-blue-400 rounded-none border border-slate-800">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white">Underwriting Mission</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                  To design bulletproof indemnity systems, maintain high-standard actuarial governance, and administer predictive risk engineering framework solutions that immunize client assets against localized and macro uncertainties[cite: 1].
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] uppercase tracking-widest font-bold text-blue-400 relative z-10">
                Tactical Execution
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* SECTION 4: GUIDING PRINCIPLES CULTURE MATRIX (Raw Sharp Grid) */}
      <section className="py-20 bg-white border-y border-slate-200">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
              Our Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight mt-1">
              Principles That Govern Our Underwriting Contracts
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-slate-50 border border-slate-200/80 p-6 rounded-none hover:bg-white hover:border-blue-500 transition-all duration-200 group"
              >
                <div className="h-1 w-8 bg-slate-300 group-hover:bg-blue-600 mb-4 transition-colors rounded-none" />
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 font-normal">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5: SYSTEMATIC BENEFIT RISK ANALYSIS (Sticky Layout) */}
      <section className="bg-slate-950 py-20 text-white overflow-hidden">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-12 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block">
                Fiduciary Realities
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white">
                Engineered Performance, Professional Service
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
                We design past superficial contract definitions to guarantee that fiscal exposures are structured with precise attention to detail, proactive compliance, and absolute fiduciary alignment[cite: 1].
              </p>
            </div>

            <div className="space-y-3 lg:col-span-7">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-slate-900/60 border border-slate-900 p-5 rounded-none hover:border-slate-800 transition-colors"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-blue-400 h-4 w-4" />
                  <p className="text-xs sm:text-sm font-medium text-slate-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* SECTION 6: THE MATRIX REFERENCE GRID */}
      <section className="py-20 bg-white">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
              Core Frameworks
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Comprehensive Capital & Asset Indemnity
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((framework) => {
              const Icon = framework.icon;
              return (
                <div
                  key={framework.title}
                  className="flex items-center gap-4 border border-slate-200 p-4 rounded-none bg-white hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-blue-50 text-blue-600 rounded-none border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon size={18} className="stroke-[2]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                    {framework.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* HISTORICAL PROGRESS BENCHMARKS */}
          <div className="mt-16 pt-12 border-t border-slate-100 grid gap-6 grid-cols-2 lg:grid-cols-4 text-center">
            <div className="space-y-1">
              <div className="mx-auto flex h-8 w-8 items-center justify-center bg-slate-100 text-slate-700 rounded-none"><Clock size={16} /></div>
              <h4 className="text-2xl font-serif font-bold text-slate-900">2020</h4>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Incorporation Year</p>
            </div>
            <div className="space-y-1">
              <div className="mx-auto flex h-8 w-8 items-center justify-center bg-slate-100 text-slate-700 rounded-none"><FileCheck2 size={16} /></div>
              <h4 className="text-2xl font-serif font-bold text-slate-900">10+</h4>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Underwriting Classes</p>
            </div>
            <div className="space-y-1">
              <div className="mx-auto flex h-8 w-8 items-center justify-center bg-slate-100 text-slate-700 rounded-none"><Users size={16} /></div>
              <h4 className="text-2xl font-serif font-bold text-slate-900">100%</h4>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Client Compliance</p>
            </div>
            <div className="space-y-1">
              <div className="mx-auto flex h-8 w-8 items-center justify-center bg-slate-100 text-slate-700 rounded-none"><Award size={16} /></div>
              <h4 className="text-2xl font-serif font-bold text-slate-900">Direct</h4>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Claims Resolution</p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 7: STARK CONVERSIONAL PIPELINE BRIDGING FOOTER */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden border-t border-slate-800">
        <Container className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
            Protect Your Trajectory With Koryom
          </h2>
          <p className="mx-auto max-w-xl text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
            Consult immediately with an asset security specialist at our Juba operational headquarters based directly within the Buluk National Traffic police compound loop[cite: 1].
          </p>
          
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xs sm:max-w-md mx-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 px-8 rounded-none transition-colors shadow-md"
            >
              Initiate Risk Assessment
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[10px] text-slate-500 font-mono tracking-tight">
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> Dial: +211 927 815 160</span>[cite: 1]
            <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> Underwriting: Koryominsuranc65@gmail.com</span>[cite: 1]
          </div>
        </Container>
      </section>

    </main>
  );
}