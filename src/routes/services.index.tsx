import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, QuoteCta } from "@/components/rvr-pages";
import { services } from "@/lib/rvr-content";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Logistics Services — RVR Global Logistics" },
      { name: "description", content: "Explore nine connected freight, customs, warehousing, handling and inspection services." },
      { property: "og:title", content: "Logistics Services — RVR" },
      { property: "og:description", content: "Complete logistics. One connected network." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete Logistics. One Connected Network."
        intro="We offer integrated logistics solutions designed to simplify domestic and international cargo movement — from a single shipment to a complex supply chain."
      />

      <section className="mx-auto max-w-site px-5 pb-8 lg:px-8">
        <div className="grid gap-px overflow-hidden rounded-hero border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group min-h-72 bg-surface p-7 hover:bg-background transition-colors"
            >
              <p className="eyebrow text-primary">
                {s.number} — {s.eyebrow}
              </p>
              <h2 className="mt-10 font-display text-3xl">{s.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.intro.slice(0, 150)}…</p>
              <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                Explore <ArrowRight className="transition-transform group-hover:translate-x-1" size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 pb-16 lg:px-8">
        <div className="rounded-hero bg-surface p-7 lg:p-10">
          <p className="eyebrow">One connected network</p>
          <h2 className="mt-3 font-display text-4xl leading-none lg:text-5xl">
            From a single shipment to a complex supply chain.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            RVR Global Logistics brings together the right routes, resources, documentation and expertise — so your cargo moves efficiently, whatever the mode, origin or destination.
          </p>
          <Link to="/get-a-quote" className="pill-link mt-7 inline-flex bg-foreground text-background">
            Get a Freight Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}