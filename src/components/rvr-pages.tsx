import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, ArrowDown, ShieldCheck, Clock, Globe } from "lucide-react";
import type { ReactNode } from "react";
import type { Service } from "@/lib/rvr-content";
import seaImage from "@/assets/rvr-port-hero.jpg";
import airImage from "@/assets/rvr-air-freight.jpg";
import landImage from "@/assets/rvr-land-freight.jpg";
import warehouseImage from "@/assets/rvr-warehouse.jpg";
import projectImage from "@/assets/rvr-project-cargo.jpg";

const images = { 
  sea: seaImage, 
  air: airImage, 
  land: landImage, 
  warehouse: warehouseImage, 
  project: projectImage 
};

export function PageHero({ eyebrow, title, intro, image = "sea" }: { eyebrow: string; title: string; intro: string; image?: keyof typeof images }) {
  return (
    <section className="mx-auto max-w-site px-4 sm:px-6 pb-12 pt-6 lg:px-8 lg:pb-16">
      <div className="relative min-h-[500px] lg:min-h-[540px] overflow-hidden rounded-3xl shadow-xl shadow-blue-950/10 border border-blue-100/50">
        <img 
          src={images[image]} 
          alt="RVR logistics operation" 
          width={1600} 
          height={1000} 
          className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-105" 
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative flex min-h-[500px] lg:min-h-[540px] max-w-4xl flex-col justify-end p-7 text-white lg:p-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/90 border border-blue-400/40 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-white backdrop-blur-md mb-4 w-fit shadow-md">
            <span className="size-2 rounded-full bg-white animate-pulse" />
            {eyebrow}
          </div>
          <h1 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.98] text-balance font-extrabold drop-shadow-sm">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-100/90 sm:text-lg drop-shadow-sm">
            {intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono text-blue-200">
            <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
              <ShieldCheck size={14} className="text-blue-400" /> Full Cargo Insurance Available
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
              <Globe size={14} className="text-blue-400" /> Global Destination Clearance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ label, title, text, dark }: { label: string; title: string; text?: string; dark?: boolean }) {
  return (
    <div>
      <div className={`inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
        dark 
          ? "text-blue-400 bg-blue-950/80 border-blue-800" 
          : "text-blue-600 bg-blue-50 dark:bg-slate-900 border-blue-200/60 dark:border-slate-800"
      }`}>
        <span className={`size-1.5 rounded-full ${dark ? "bg-blue-400" : "bg-blue-600"}`} />
        {label}
      </div>
      <h2 className={`mt-3.5 font-display text-3xl sm:text-4xl leading-tight lg:text-5xl font-semibold ${
        dark ? "text-white" : "text-slate-900 dark:text-white"
      }`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed ${
          dark ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
        }`}>
          {text}
        </p>
      )}
    </div>
  );
}

export function QuoteCta() {
  return (
    <section className="mx-auto max-w-site px-4 sm:px-6 py-12 sm:py-16 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 p-8 text-white shadow-2xl shadow-blue-950/20 lg:p-14">
        {/* Subtle background graphic circles */}
        <div className="absolute -right-20 -top-20 size-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 size-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-3 py-1 font-mono text-xs uppercase tracking-wider text-blue-200 mb-3">
              Ready when you are
            </div>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight text-white lg:text-5xl">
              Let's Move Your Business Forward.
            </h2>
            <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-blue-100/80">
              Whether you are planning your next export, importing essential materials or managing a complex project shipment — tell us what you need to move. We'll help you plan how to move it efficiently.
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            <Link 
              to="/get-a-quote" 
              className="pill-link justify-center bg-white text-blue-900 hover:bg-blue-50 shadow-lg shadow-black/10 font-bold text-xs py-3 border-transparent"
            >
              Get a Quote <ArrowRight size={16} className="text-blue-700" />
            </Link>
            <Link 
              to="/contact" 
              className="pill-link justify-center border-white/30 text-white hover:bg-white/10 font-semibold text-xs py-3"
            >
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicePage({ service }: { service: Service }) {
  // Special door-to-door flow display
  const isDoorToDoor = service.slug === "door-to-door";
  const flowSteps = [
    "Supplier / Factory",
    "Pickup",
    "Freight Transportation",
    "Customs & Documentation",
    "Destination Handling",
    "Final Delivery",
  ];

  return (
    <>
      <PageHero
        eyebrow={`${service.number} — ${service.eyebrow}`}
        title={service.title}
        intro={service.intro}
        image={service.image}
      />

      {/* Solutions list */}
      <section className="mx-auto grid max-w-site gap-10 px-4 sm:px-6 pb-16 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <SectionTitle label="What we coordinate" title={`${service.name} Solutions`} />
        <div className="grid gap-3 sm:grid-cols-2">
          {service.items.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-sm font-medium text-slate-800 dark:text-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400 mt-0.5">
                <Check size={14} />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Door-to-door flow diagram */}
      {isDoorToDoor && (
        <section className="border-y border-blue-100 dark:border-slate-800 bg-blue-50/50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-site px-4 sm:px-6 py-14 lg:px-8">
            <SectionTitle label="The journey" title="One Point of Coordination." text="We manage the entire end-to-end logistics journey so you can focus on growing your business." />
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:items-stretch sm:gap-2">
              {flowSteps.map((step, i) => (
                <div key={step} className="flex flex-col items-center sm:flex-1 w-full">
                  <div className="w-full rounded-2xl border border-blue-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 text-center shadow-md shadow-blue-500/5 hover:border-blue-500 transition-colors">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 font-display text-lg leading-tight text-slate-900 dark:text-white">{step}</p>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="flex h-8 items-center justify-center sm:hidden">
                      <ArrowDown size={18} className="text-blue-600" />
                    </div>
                  )}
                  {i < flowSteps.length - 1 && (
                    <div className="hidden h-full items-center justify-center sm:flex">
                      <ArrowRight size={16} className="mx-1 shrink-0 text-blue-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Focus / approach */}
      <section className={isDoorToDoor ? "" : "border-y border-blue-100 dark:border-slate-800 bg-blue-50/50 dark:bg-slate-900/50"}>
        <div className="mx-auto grid max-w-site gap-8 px-4 sm:px-6 py-14 lg:grid-cols-2 lg:px-8">
          <SectionTitle label="RVR approach" title={service.focusTitle} />
          <div className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-950 p-7 shadow-lg shadow-blue-500/5">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-medium">{service.focus}</p>
            <div className="mt-6 flex items-center gap-3 border-t border-blue-50 dark:border-slate-800 pt-4 font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold">
              <Clock size={16} /> Transparent Tracking & Timely Execution Guarantee
            </div>
          </div>
        </div>
      </section>

      <div className="pt-16">
        <QuoteCta />
      </div>
    </>
  );
}

export function ContentBand({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "surface" }) {
  return (
    <section className={tone === "surface" ? "border-y border-blue-100 dark:border-slate-800 bg-blue-50/40 dark:bg-slate-900/40" : ""}>
      <div className="mx-auto max-w-site px-4 sm:px-6 py-14 lg:px-8 lg:py-20">{children}</div>
    </section>
  );
}