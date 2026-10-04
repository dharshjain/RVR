import { createFileRoute } from "@tanstack/react-router";
import { ContentBand, PageHero, QuoteCta, SectionTitle } from "@/components/rvr-pages";
import { Globe2, Anchor, Plane, Truck, MapPin } from "lucide-react";
import networkImage from "@/assets/rvr-network.jpg";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Global Network — RVR Global Logistics" },
      { name: "description", content: "Connecting Indian businesses with Asia, the Middle East, Europe, Africa and the Americas." },
      { property: "og:title", content: "Global Network — RVR" },
      { property: "og:description", content: "From local origins to global destinations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Network,
});

const regions = [
  { name: "India Subcontinent", note: "Origin Hub & Home Market", ports: "Nhava Sheva, Mundra, Chennai, Kolkata, ICDs" },
  { name: "Asia Pacific", note: "East & Southeast Asia Trade Lanes", ports: "Singapore, Shanghai, Ningbo, Busan, Yokohama" },
  { name: "Middle East & Gulf", note: "Strategic Regional Logistics", ports: "Jebel Ali, Dammam, Hamad, Sohar, Jeddah" },
  { name: "Europe & Mediterranean", note: "North & South European Ports", ports: "Rotterdam, Hamburg, Antwerp, Felixstowe, Genoa" },
  { name: "Africa Continent", note: "East, West & South African Harbors", ports: "Durban, Mombasa, Lagos, Alexandria, Dar es Salaam" },
  { name: "The Americas", note: "North, Central & South America", ports: "Los Angeles, New York, Houston, Santos, Manzanillo" },
];

const approachSteps = [
  { n: "01", title: "Understand", text: "We analyze your cargo specifications, destination constraints, timeline, and compliance requirements." },
  { n: "02", title: "Plan", text: "We compare ocean, air, and multimodal routing options to select optimal carriers and schedules." },
  { n: "03", title: "Coordinate", text: "We handle export/import documentation, port drayage, customs clearance, and terminal loading." },
  { n: "04", title: "Monitor", text: "We track shipment milestones in real-time, providing proactive updates to all stakeholders." },
  { n: "05", title: "Deliver", text: "Your cargo is safely delivered to the destination door or port with complete proof of delivery." },
];

function Network() {
  return (
    <>
      <PageHero
        eyebrow="Global Freight Network"
        title="From Local Origins to Global Destinations"
        intro="Your business may operate locally, but your customers are worldwide. RVR Global Logistics bridges Indian commercial hubs with international trade corridors through coordinated carrier networks."
      />

      {/* Network map + regions */}
      <ContentBand>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionTitle
              label="Connected Operations"
              title="Your Market Has No Borders. Neither Should Your Logistics Partner."
              text="RVR links major Indian seaports, airports, and inland container depots (ICDs) with strategic international trade gateways."
            />
            
            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-slate-900 p-3 rounded-xl border border-blue-200 dark:border-slate-800">
              <Globe2 size={16} />
              <span>India → Asia → Middle East → Europe → Africa → Americas</span>
            </div>

            <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
              {regions.map((r) => (
                <div key={r.name} className="rounded-2xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm hover:border-blue-400 transition-colors">
                  <div className="flex items-center gap-2 text-blue-600 font-bold font-display text-lg">
                    <MapPin size={16} />
                    <span>{r.name}</span>
                  </div>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{r.note}</p>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 font-medium">Gateway: {r.ports}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-blue-100 dark:border-slate-800 shadow-2xl lg:col-span-7">
            <img
              src={networkImage}
              loading="lazy"
              alt="Global logistics routes from India"
              width={1400}
              height={900}
              className="aspect-[16/10] size-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </ContentBand>

      {/* Logistics approach */}
      <ContentBand tone="surface">
        <SectionTitle
          label="How We Work"
          title="Plan. Move. Monitor. Deliver."
          text="Every shipment follows a transparent quality process managed by our dedicated logistics teams."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {approachSteps.map(({ n, title, text }) => (
            <div key={n} className="rounded-2xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 dark:bg-slate-800 px-2 py-0.5 rounded">
                Step {n}
              </span>
              <h3 className="mt-3 font-display text-2xl text-slate-900 dark:text-white font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </ContentBand>

      <div className="pt-16">
        <QuoteCta />
      </div>
    </>
  );
}