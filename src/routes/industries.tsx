import { createFileRoute } from "@tanstack/react-router";
import { ContentBand, PageHero, QuoteCta, SectionTitle } from "@/components/rvr-pages";
import { industries } from "@/lib/rvr-content";
import { Factory, Cpu, FlaskConical, Mountain, Hammer, Sparkles, Sprout, ShoppingBag, HardHat, Car, Shirt, Package, Truck, Layers } from "lucide-react";

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

const industryIcons = [
  Factory, Cpu, FlaskConical, Mountain, Hammer, Sparkles, Sprout, ShoppingBag, HardHat, Car, Shirt, Package, Truck, Layers
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Sectors & Commodities"
        title="Logistics Expertise Across Industries"
        intro="Different cargo categories demand tailored logistics strategies. RVR Global Logistics supports manufacturing, industrial, chemical, and retail leaders worldwide."
        image="land"
      />

      <ContentBand>
        <SectionTitle
          label="Commodities We Handle"
          title="Built Around Your Cargo, Not Generic Rules."
          text="Each industry sector has specialized container handling, temperature requirements, regulatory documentation, and transit constraints — we design custom workflows for every category."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => {
            const Icon = industryIcons[i % industryIcons.length] ?? Factory;
            return (
              <div 
                key={item} 
                className="group flex min-h-36 flex-col justify-between rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-2xl text-slate-900 dark:text-white font-bold">{item}</h3>
                  <p className="mt-1 font-mono text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Specialized Handling & Port Clearance</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-blue-100 dark:border-slate-800 bg-blue-50/60 dark:bg-slate-900 p-8 text-center">
          <h3 className="font-display text-3xl text-slate-900 dark:text-white font-bold">
            Whatever You Manufacture, Trade or Distribute — We Help Move It Safely.
          </h3>
          <p className="mt-3 max-w-xl mx-auto text-sm text-slate-600 dark:text-slate-300">
            Need custom container configurations, hazardous cargo handling (IMO), or breakbulk chartering? Talk to our logistics specialists today.
          </p>
        </div>
      </ContentBand>

      <QuoteCta />
    </>
  );
}