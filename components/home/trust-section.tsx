import Image from "next/image";

import Container from "../ui/container";

const trustPoints = [
  {
    title: "Commitment to Excellence",
    description:
      "Providing dependable insurance solutions backed by professionalism, innovation, and customer care.",
    color: "text-cyan-500",
  },
  {
    title: "Comprehensive Coverage",
    description:
      "Protection for individuals, families, businesses, vehicles, and specialized industries.",
    color: "text-blue-500",
  },
  {
    title: "Integrity-Driven Claims",
    description:
      "Transparent and efficient claims handling that gives clients confidence when they need support most.",
    color: "text-indigo-500",
  },
  {
    title: "Proactive Risk Management",
    description:
      "Helping customers identify and reduce risks before losses occur.",
    color: "text-sky-500",
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#2f3e9e]">
              Why Choose Koryom
            </span>

            <h2 className="mb-12 text-5xl font-bold leading-tight text-slate-900">
              Protection Built On
              <span className="block text-[#2f3e9e]">
                Trust & Excellence
              </span>
            </h2>

            <div className="space-y-10">
              {trustPoints.map((item) => (
                <div key={item.title}>
                  <h3
                    className={`mb-3 text-2xl font-bold ${item.color}`}
                  >
                    {item.title}
                  </h3>

                  <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[700px]">
            {/* Circle 1 */}
            <div className="absolute left-0 top-0 h-52 w-52 overflow-hidden rounded-full shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
                alt="Family Insurance"
                fill
                className="object-cover"
              />
            </div>

            {/* Circle 2 */}
            <div className="absolute right-0 top-24 h-64 w-64 overflow-hidden rounded-full shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="Business Insurance"
                fill
                className="object-cover"
              />
            </div>

            {/* Circle 3 */}
            <div className="absolute left-20 bottom-32 h-60 w-60 overflow-hidden rounded-full shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Property Insurance"
                fill
                className="object-cover"
              />
            </div>

            {/* Circle 4 */}
            <div className="absolute right-10 bottom-0 h-48 w-48 overflow-hidden rounded-full shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Health Insurance"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Shape */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-200 to-blue-200 blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}