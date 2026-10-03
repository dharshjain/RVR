import { createFileRoute } from "@tanstack/react-router";
import { ContentBand, PageHero, QuoteCta, SectionTitle } from "@/components/rvr-pages";

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
  { title: "Reliability", text: "We do what we commit." },
  { title: "Integrity", text: "We believe in transparent and responsible business." },
  { title: "Customer Focus", text: "Every shipment starts with understanding the customer's requirement." },
  { title: "Agility", text: "Logistics changes quickly. We respond quickly." },
  { title: "Excellence", text: "We continuously improve the way we work." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About RVR"
        title="Built Around Trust. Driven by Logistics."
        intro="RVR Global Logistics Pvt. Ltd. is a logistics and freight forwarding company focused on making cargo movement simpler, more reliable and more efficient for businesses."
      />

      {/* Who we are */}
      <ContentBand>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionTitle
            label="Our approach"
            title="Understand. Plan. Execute with accountability."
            text="We provide integrated logistics solutions covering international freight forwarding, domestic transportation, customs clearance, warehousing, project cargo, cargo inspection and door-to-door delivery."
          />
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Our approach is simple: Understand the requirement. Build the right logistics plan. Execute it with accountability.
            </p>
            <p>
              We believe that logistics is not merely about moving goods from one location to another.
            </p>
            <p className="font-medium text-foreground">
              It is about protecting timelines, supporting business continuity and helping companies reach their customers and markets without unnecessary complexity.
            </p>
          </div>
        </div>
      </ContentBand>

      {/* Vision & Mission */}
      <ContentBand tone="surface">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-hero bg-background p-7 lg:p-10">
            <p className="eyebrow">Vision</p>
            <h2 className="mt-4 font-display text-3xl leading-none">Our Vision</h2>
            <p className="mt-4 text-xl leading-relaxed text-muted-foreground">
              To become a trusted global logistics partner known for reliability, transparency, innovation and customer-focused service.
            </p>
          </div>
          <div className="rounded-hero bg-background p-7 lg:p-10">
            <p className="eyebrow">Mission</p>
            <h2 className="mt-4 font-display text-3xl leading-none">Our Mission</h2>
            <p className="mt-4 text-xl leading-relaxed text-muted-foreground">
              To simplify logistics through dependable networks, efficient processes, responsive communication and solutions designed around the needs of every customer.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-12">
          <SectionTitle label="What guides us" title="Our Values" />
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(({ title, text }, i) => (
              <div key={title} className="border-t-2 border-primary pt-5">
                <span className="eyebrow">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentBand>

      {/* What we offer */}
      <ContentBand>
        <SectionTitle
          label="What we offer"
          title="Integrated Logistics. One Partner."
          text="From a single shipment to a complex supply chain, we bring together the right routes, resources, documentation and expertise to keep your cargo moving."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Sea Freight (FCL & LCL)",
            "Air Freight",
            "Land Freight",
            "Cross Trade",
            "Customs Clearance",
            "Warehousing",
            "Project Cargo & Handling",
            "Door-to-Door Logistics",
            "Cargo Inspection",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-hero bg-surface px-5 py-4">
              <span className="size-2 shrink-0 rounded-full bg-primary" />
              <span className="font-display text-xl">{item}</span>
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