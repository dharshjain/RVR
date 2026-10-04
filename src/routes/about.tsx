import { createFileRoute } from "@tanstack/react-router";
import { ContentBand, PageHero, QuoteCta, SectionTitle } from "@/components/rvr-pages";
import { CheckCircle2, ShieldCheck, Target, Award, Users, RefreshCw } from "lucide-react";
import warehouseImage from "@/assets/rvr-warehouse.jpg";
import networkImage from "@/assets/rvr-network.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RVR — RVR Global Logistics" },
      { name: "description", content: "Meet the logistics company built around trust, reliability and accountable execution." },
      { property: "og:title", content: "About RVR Global Logistics" },
      { property: "og:description", content: "Built around trust. Driven by logistics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, title: "Reliability", text: "We honor every commitment with rigorous operational follow-through and accuracy." },
  { icon: Award, title: "Integrity", text: "We uphold transparent pricing, ethical compliance, and honest communication." },
  { icon: Users, title: "Customer Focus", text: "Every shipment strategy starts with deeply understanding your business needs." },
  { icon: RefreshCw, title: "Agility", text: "Global logistics fluctuates rapidly. We adapt routes and carrier choices dynamically." },
  { icon: Target, title: "Excellence", text: "We continuously refine our processes and technology to elevate service standards." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About RVR Global"
        title="Built Around Trust. Driven by Logistics."
        intro="RVR Global Logistics Pvt. Ltd. is a modern freight forwarding and logistics company dedicated to making cargo movement simpler, transparent, and more reliable for businesses worldwide."
      />

      {/* Who we are */}
      <ContentBand>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <SectionTitle
              label="Our Approach"
              title="Understand. Plan. Execute with Accountability."
              text="We provide integrated logistics solutions covering international freight forwarding, domestic road transport, customs clearance, warehousing, project cargo, cargo inspection and door-to-door delivery."
            />
            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                Our philosophy is simple: Listen carefully to cargo requirements. Construct an optimal logistics plan. Execute with transparent oversight.
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">
                Logistics is more than moving cargo from point A to point B — it is protecting business continuity and helping companies scale without friction.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-blue-100 dark:border-slate-800 shadow-2xl">
              <img src={warehouseImage} alt="RVR Logistics Hub" className="size-full object-cover aspect-[4/3]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 text-white">
                <p className="font-mono text-xs text-blue-400 font-bold uppercase">Modern Distribution</p>
                <p className="font-display text-lg text-white font-bold">Integrated Warehouse & Freight Hubs</p>
              </div>
            </div>
          </div>
        </div>
      </ContentBand>

      {/* Vision & Mission */}
      <ContentBand tone="surface">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 lg:p-10 shadow-lg shadow-blue-500/5">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-950 px-3 py-1 font-mono text-xs font-bold uppercase text-blue-600 dark:text-blue-400 mb-4">
              Vision Statement
            </div>
            <h2 className="font-display text-3xl leading-none text-slate-900 dark:text-white font-bold">Our Vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              To become a globally recognized logistics partner celebrated for unwavering reliability, transparent operations, technical innovation, and customer-first service excellence.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 lg:p-10 shadow-lg shadow-blue-500/5">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-950 px-3 py-1 font-mono text-xs font-bold uppercase text-blue-600 dark:text-blue-400 mb-4">
              Mission Statement
            </div>
            <h2 className="font-display text-3xl leading-none text-slate-900 dark:text-white font-bold">Our Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              To streamline international commerce through dependable carrier networks, efficient documentation workflows, responsive communication, and solutions tailored to every customer's needs.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-14">
          <SectionTitle label="What Guides Us" title="Our Core Values" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 dark:bg-slate-800 px-2 py-0.5 rounded">
                    0{i + 1}
                  </span>
                  <Icon size={20} className="text-blue-600" />
                </div>
                <h3 className="font-display text-2xl text-slate-900 dark:text-white font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentBand>

      {/* What we offer */}
      <ContentBand>
        <SectionTitle
          label="What We Offer"
          title="Integrated Logistics. One Partner."
          text="From a single container export to a complex cross-border supply chain, we coordinate the right routes, carriers, documentation, and border clearance."
        />
        <div className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Sea Freight (FCL & LCL)",
            "Express Air Freight",
            "Land Freight & Trucking",
            "Cross Trade Logistics",
            "Customs Clearance & Compliance",
            "Warehousing & Distribution",
            "Project Cargo & Heavy Lift",
            "Door-to-Door Solutions",
            "Cargo Inspection & Verification",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-blue-100 dark:border-slate-800 bg-blue-50/40 dark:bg-slate-900 px-5 py-4 shadow-sm font-display text-lg text-slate-900 dark:text-white">
              <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </ContentBand>

      <div className="pt-4">
        <QuoteCta />
      </div>
    </>
  );
}