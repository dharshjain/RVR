import { createFileRoute } from "@tanstack/react-router";
import { ContentBand, PageHero, QuoteCta, SectionTitle } from "@/components/rvr-pages";
import { industries } from "@/lib/rvr-content";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — RVR Global Logistics" },
      { name: "description", content: "Logistics expertise across industrial, consumer, agricultural and project cargo categories." },
      { property: "og:title", content: "Industries We Serve — RVR" },
      { property: "og:description", content: "Different cargo requires different logistics strategies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Logistics Expertise Across Industries"
        intro="Different cargo requires different logistics strategies. RVR Global Logistics supports businesses across diverse industries and cargo categories."
        image="land"
      />

      <ContentBand>
        <SectionTitle
          label="Commodities we handle"
          title="Built around the cargo, not the other way around."
          text="RVR Global Logistics supports businesses across diverse industries and cargo categories. Each sector has unique handling, documentation and transportation requirements — we plan around them."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-hero border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <div key={item} className="flex min-h-32 items-end justify-between bg-surface p-6 hover:bg-background transition-colors">
              <h2 className="font-display text-2xl">{item}</h2>
              <span className="eyebrow text-primary">{String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>
        <p className="mt-10 font-display text-3xl">
          Whatever you manufacture, trade or distribute — we help move it.
        </p>
      </ContentBand>

      <QuoteCta />
    </>
  );
}