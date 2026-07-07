import {
  Shield,
  Heart,
  Car,
  Plane,
  Briefcase,
  HardHat,
  HeartPulse,
  Flame,
  Coins,
  FileText
} from "lucide-react";

// Product Matrix mapped strictly from the Koryom Institutional Profile
export const productCategories = [
  {
    id: "personal",
    categoryTitle: "Personal & Family Protection",
    subtitle: "Sustaining personal peace of mind with robust individual liability safeguards.",
    items: [
      {
        slug: "health-insurance",
        title: "Health Insurance",
        icon: Heart,
        image: "/images/products/health.jpg",
        description: "Accessible, affordable, and stress-free medical coverage designed to provide a robust safety net for individuals and families.",
        features: ["In-Patient Hospitalization & Surgery Cover", "Out-Patient Diagnostics, Consultations & Pharmacy", "Day-to-day Wellness & Early Diagnosis Management"],
      },
      {
        slug: "motor-insurance",
        title: "Motor Vehicle Insurance",
        icon: Car,
        image: "/images/products/motor.jpg",
        description: "Comprehensive options tailored to safeguard vital automotive assets whether driven for personal convenience or commercial transport.",
        features: ["Accidental Damage Collision & Overturning Indemnity", "Mandatory Third-Party Liability Legal Compliance", "Theft, Fire, and Special Perils (Floods/Riots) Cover"],
      },
      {
        slug: "domestic-package",
        title: "Domestic Package",
        icon: Shield,
        image: "/images/products/domestic.jpg",
        description: "An all-in-one residential protection plan crafted to insulate private dwellings, personal structures, and household contents.",
        features: ["Physical Building Asset Disaster Protection", "Home Contents Theft & Accidental Damage Coverage", "Occupiers & Owners Third-Party Legal Liabilities"],
      },
      {
        slug: "travel-insurance",
        title: "Travel Insurance",
        icon: Plane,
        image: "/images/products/travel.png",
        description: "Your ultimate global companion insuring stress-free transit against emergency cross-border expenses and unexpected journey disruptions.",
        features: ["Emergency Medical Expenses & Foreign Accidental Injuries", "Trip Cancellations, Delays & Missed Connections Protection", "Lost Baggage & Personal Liability Bundled Security"],
      },
    ],
  },
  {
    id: "commercial",
    categoryTitle: "Corporate & Enterprise Indemnity",
    subtitle: "Securing operational continuity, human capital, and liquid assets within competitive environments.",
    items: [
      {
        slug: "fire-burglary-insurance",
        title: "Fire & Burglary Insurance",
        icon: Flame,
        image: "/images/products/fire-burglary.jpg",
        description: "Shielding physical assets, brick-and-mortar facilities, office equipment, and dynamic trading stock from severe unexpected loss.",
        features: ["Fire, Lightning, Explosion & Allied Perils Cover", "Burglary & Housebreaking Forcible Entry Indemnity", "Physical Structure and Repair Costs Restoration"],
      },
      {
        slug: "employees-liability",
        title: "Employees Liability",
        icon: Briefcase,
        image: "/images/products/employees.jpg",
        description: "Essential corporate protection designed to insure businesses against civil liabilities resulting from workplace-related staff illnesses or injuries.",
        features: ["Work-Related Injuries Financial Relief Support", "Medical Treatment & Workplace Injury Hospitalization Settlement", "Compassionate Funeral Expenses & Family Death Benefits"],
      },
      {
        slug: "medical-schemes",
        title: "Medical Schemes",
        icon: HeartPulse,
        image: "/images/products/schemes.jpg",
        description: "Structured healthcare frameworks integrating preventative and curative clinical access across managed networks for corporate teams.",
        features: ["Group Health Management Tailored Benefit Formats", "Direct Corporate Network Access with Direct Billing", "Optional Wellness Programs & Chronic Condition Support"],
      },
      {
        slug: "transit-protection",
        title: "Cash & Goods in Transit",
        icon: Coins,
        image: "/images/products/marine.jpg",
        description: "Comprehensive safety nets guarding liquid assets, negotiable monetary instruments, and supply chain cargo from transit threats.",
        features: ["Armed Robbery, Embezzlement & Internal Fraud Shield", "Overturning, Theft & Fire Commercial Cargo Protections", "Secure Storage-to-Warehouse Capital Route Security"],
      },
    ],
  },
  {
    id: "specialized",
    categoryTitle: "Specialized Underwriting & Fiduciary Credit",
    subtitle: "High-capital operational risk management and structural development frameworks.",
    items: [
      {
        slug: "constructors-all-risks",
        title: "Constructors All Risks (CAR)",
        icon: HardHat,
        image: "/images/products/contractors.jpg",
        description: "Specialized, complex contract works solution formulated dynamically for the construction and civil engineering sectors.",
        features: ["Permanent & Temporary Structural Civil Contract Works", "On-Site Heavy Machinery & Construction Plant Cover", "Stored Raw Building Materials (Cement, Steel) Security"],
      },
      {
        slug: "credit-life",
        title: "Credit Life Insurance",
        icon: FileText,
        image: "/images/products/property.jpg",
        description: "Strategic financial protection minimizing outstanding liability defaults for commercial lending institutions and private borrowers alike.",
        features: ["Outstanding Principal & Interest Loan Protection", "Permanent Disability Loan Repayment Disbursal Triggers", "Critical Illness Riders & Involuntary Retrenchment Cover"],
      },
    ],
  },
];

// Helper function to easily grab a specific product by its URL slug
export function getProductBySlug(slug: string) {
  for (const category of productCategories) {
    const product = category.items.find((item) => item.slug === slug);
    if (product) return product;
  }
  return null;
}