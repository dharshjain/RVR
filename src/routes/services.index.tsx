import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, QuoteCta } from "@/components/rvr-pages";
import { services } from "@/lib/rvr-content";
import seaImage from "@/assets/rvr-port-hero.jpg";
import airImage from "@/assets/rvr-air-freight.jpg";
import landImage from "@/assets/rvr-land-freight.jpg";
import warehouseImage from "@/assets/rvr-warehouse.jpg";
import projectImage from "@/assets/rvr-project-cargo.jpg";

const serviceImages: Record<string, string> = {
  sea: seaImage,
  air: airImage,
  land: landImage,
  warehouse: warehouseImage,
  project: projectImage,
};

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
        eyebrow="Services Directory"
        title="Complete Logistics. One Connected Network."
        intro="We offer integrated logistics solutions designed to simplify domestic and international cargo movement — from single container shipments to complex global supply chains."
      />

      <section className="mx-auto max-w-site px-4 sm:px-6 pb-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-300"
            >
              {/* Image thumbnail header */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={serviceImages[s.image]}
                  alt={s.name}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
                
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-blue-600 font-mono text-xs font-bold text-white shadow-md">
                    {s.number}
                  </span>
                  <span className="rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 px-2.5 py-0.5 font-mono text-[10px] text-blue-200">
                    Active Route
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-blue-200 font-semibold truncate">
                    {s.eyebrow}
                  </p>
                  <h2 className="font-display text-2xl text-white font-bold">{s.name}</h2>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {s.intro}
                </p>

                {/* Capability Pills */}
                <div className="mt-5 space-y-1.5">
                  {s.items.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-center gap-2 font-mono text-xs text-slate-700 dark:text-slate-300">
                      <Check size={13} className="text-blue-600 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-blue-50 dark:border-slate-800 pt-4 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700">
                  <span>Explore Detailed Solution</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 sm:px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-gradient-to-r from-blue-900 to-indigo-950 p-8 text-white shadow-xl lg:p-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800">
            One Connected Network
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-white font-bold leading-tight">
            From a single shipment to a complex global supply chain.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-blue-100/90 leading-relaxed">
            RVR Global Logistics brings together optimal carrier routes, documentation compliance, border clearance and tracking — so your cargo moves smoothly, whatever the volume or destination.
          </p>
          <Link to="/get-a-quote" className="pill-link mt-7 inline-flex bg-white text-blue-900 hover:bg-blue-50 border-transparent font-bold">
            Request a Freight Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}