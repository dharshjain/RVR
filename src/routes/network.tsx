import { createFileRoute } from "@tanstack/react-router";
import { ContentBand, PageHero, QuoteCta, SectionTitle } from "@/components/rvr-pages";
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
  { name: "India", note: "Origin & Home Market" },
  { name: "Asia", note: "East & Southeast Asia" },
  { name: "Middle East", note: "Gulf & Regional Hubs" },
  { name: "Europe", note: "Western & Eastern Europe" },
  { name: "Africa", note: "East & West Africa" },
  { name: "Americas", note: "North & South America" },
];

const approachSteps = [
  { n: "01", title: "Understand", text: "We understand your cargo, destination, timeline and business requirements." },
  { n: "02", title: "Plan", text: "We evaluate routes, modes, carriers and handling requirements." },
  { n: "03", title: "Coordinate", text: "We manage documentation, transportation, customs and other shipment requirements." },
  { n: "04", title: "Monitor", text: "We keep track of the shipment and coordinate with the relevant stakeholders." },
  { n: "05", title: "Deliver", text: "Your cargo reaches its destination with the right support and coordination." },
];

function Network() {
  return (
    <>
      <PageHero
        eyebrow="Global Network"
        title="From Local Origins to Global Destinations"
        intro="Your business may operate locally, but your markets can be anywhere. RVR Global Logistics connects Indian businesses with international destinations through a coordinated network."
      />

      {/* Network map + regions */}
      <ContentBand>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionTitle
              label="Connected operations"
              title="Your market has no borders. Neither should your logistics partner."
              text="RVR connects Indian businesses with international destinations through a coordinated network of shipping, air cargo, road transportation, customs and logistics partners."
            />
            <p className="mt-6 font-display text-2xl text-muted-foreground">
              India → Asia → Middle East → Europe → Africa → Americas
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {regions.map((r) => (
                <div key={r.name} className="rounded-2xl bg-surface px-5 py-4">
                  <p className="font-display text-xl">{r.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{r.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-hero lg:col-span-7">
            <img
              src={networkImage}
              loading="lazy"
              alt="Global logistics routes from India"
              width={1400}
              height={900}
              className="aspect-[16/10] size-full object-cover"
            />
          </div>
        </div>
      </ContentBand>

      {/* Logistics approach */}
      <ContentBand tone="surface">
        <SectionTitle
          label="How we work"
          title="Plan. Move. Monitor. Deliver."
          text="Every shipment follows a carefully coordinated journey managed end-to-end by our team."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {approachSteps.map(({ n, title, text }) => (
            <div key={n} className="border-t-2 border-primary pt-5">
              <span className="eyebrow">{n}</span>
              <h3 className="mt-4 font-display text-2xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
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