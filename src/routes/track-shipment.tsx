import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, CheckCircle2, Truck, Anchor, Plane, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/rvr-pages";

export const Route = createFileRoute("/track-shipment")({
  head: () => ({
    meta: [
      { title: "Track Shipment — RVR Global Logistics" },
      { name: "description", content: "Check the latest available status of your RVR shipment." },
      { property: "og:title", content: "Track Shipment — RVR" },
      { property: "og:description", content: "Stay informed about your cargo journey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Track,
});

function Track() {
  const [ref, setRef] = useState("");
  const [refType, setRefType] = useState<"CONTAINER" | "BL" | "AWB">("CONTAINER");
  const [searched, setSearched] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Cargo Tracking Hub"
        title="Where Is Your Shipment?"
        intro="Stay informed about your cargo journey in real-time. Enter your Container #, Bill of Lading (B/L), Air Waybill (AWB), or RVR Tracking reference below."
        image="air"
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-20">
        <form
          className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 lg:p-10 shadow-xl shadow-blue-500/10"
          onSubmit={(e) => {
            e.preventDefault();
            if (ref.trim()) {
              setSearched(true);
            }
          }}
        >
          {/* Reference type selector */}
          <div className="flex gap-2 mb-4">
            {(["CONTAINER", "BL", "AWB"] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setRefType(type)}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                  refType === type
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-blue-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100"
                }`}
              >
                {type === "CONTAINER" ? "Container Number" : type === "BL" ? "Bill of Lading (B/L)" : "Air Waybill (AWB)"}
              </button>
            ))}
          </div>

          <label htmlFor="tracking" className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block mb-2">
            Enter Reference Identifier
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="tracking"
              value={ref}
              onChange={(e) => {
                setRef(e.target.value);
                setSearched(false);
              }}
              className="min-h-13 flex-1 rounded-xl border border-blue-200 dark:border-slate-800 bg-blue-50/30 dark:bg-slate-950 px-5 font-mono text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:bg-white transition-colors"
              placeholder={
                refType === "CONTAINER" 
                  ? "e.g., MSCU9876543" 
                  : refType === "BL" 
                  ? "e.g., RVR-BL-2026-908" 
                  : "e.g., 098-87654321"
              }
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-13 px-8 rounded-xl shadow-lg shadow-blue-600/20">
              <Search size={16} /> Track Shipment
            </Button>
          </div>

          {searched && (
            <div className="mt-8 rounded-2xl border border-blue-200 dark:border-slate-800 bg-blue-50/50 dark:bg-slate-950 p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blue-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100 dark:bg-blue-950 px-2 py-0.5 rounded">
                    Active Transport Manifest
                  </span>
                  <p className="mt-1 font-display text-xl text-slate-900 dark:text-white font-bold">Ref: {ref.trim().toUpperCase()}</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-3.5 py-1 text-xs font-mono font-bold">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  In Transit • On Schedule
                </div>
              </div>

              {/* Status Timeline */}
              <div className="grid gap-4 sm:grid-cols-4">
                {[
                  { title: "Booking Confirmed", desc: "Cargo & documentation verified", done: true },
                  { title: "Port Loading & Departure", desc: "Vessel departed origin port", done: true },
                  { title: "Ocean/Air Transport", desc: "In transit on primary route", done: true },
                  { title: "Customs & Final Delivery", desc: "Destination clearance pending", done: false },
                ].map((step, i) => (
                  <div key={step.title} className="rounded-xl bg-white dark:bg-slate-900 p-4 border border-blue-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`flex size-6 items-center justify-center rounded-full font-mono text-xs font-bold ${
                        step.done ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-500"
                      }`}>
                        {i + 1}
                      </span>
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">Milestone</span>
                    </div>
                    <p className="font-display text-sm font-bold text-slate-900 dark:text-white">{step.title}</p>
                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-blue-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <span className="flex items-center gap-1.5"><Clock size={14} className="text-blue-600" /> Estimated Arrival: 4-6 Business Days</span>
                <Link to="/contact" className="font-mono font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Contact Dispatch Desk <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          )}
        </form>
      </section>
    </>
  );
}