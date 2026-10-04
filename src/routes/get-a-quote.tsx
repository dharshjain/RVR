import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionTitle } from "@/components/rvr-pages";
import { ArrowRight, CheckCircle2, ShieldCheck, Send } from "lucide-react";

export const Route = createFileRoute("/get-a-quote")({
  head: () => ({
    meta: [
      { title: "Get a Freight Quote — RVR Global Logistics" },
      { name: "description", content: "Share your shipment details with RVR for a suitable freight solution." },
      { property: "og:title", content: "Get a Freight Quote — RVR" },
      { property: "og:description", content: "Tell us what you need to move." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Quote,
});

const textFields = [
  { id: "name", label: "Contact Name", required: true, type: "text", placeholder: "Full Name" },
  { id: "company", label: "Company Name", required: false, type: "text", placeholder: "Company / Business Name" },
  { id: "email", label: "Email Address", required: true, type: "email", placeholder: "email@company.com" },
  { id: "phone", label: "Phone Number", required: true, type: "tel", placeholder: "+91 98765 43210" },
  { id: "origin", label: "Origin Port / City", required: true, type: "text", placeholder: "e.g. Mundra Port / Ahmedabad" },
  { id: "destination", label: "Destination Port / City", required: true, type: "text", placeholder: "e.g. Hamburg Port / Dubai" },
  { id: "cargo-type", label: "Cargo Type & Commodity", required: true, type: "text", placeholder: "e.g. Industrial Machinery, FCL 40ft" },
  { id: "cargo-weight", label: "Estimated Weight / Volume", required: true, type: "text", placeholder: "e.g. 18 Tons / 45 CBM" },
  { id: "container-req", label: "Container / Equipment Type", required: false, type: "text", placeholder: "e.g. 20ft Dry, 40ft High Cube, Flat Rack" },
  { id: "shipping-date", label: "Expected Dispatch Date", required: true, type: "date", placeholder: "" },
];

function Quote() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <>
        <PageHero
          eyebrow="Freight Quote Submitted"
          title="Quote Request Received."
          intro="Our logistics team is evaluating carrier schedules, rates, and customs clearance paths."
        />
        <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-20">
          <div className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 text-center shadow-xl shadow-blue-500/10">
            <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-3xl bg-blue-600/10 text-blue-600 shadow-inner">
              <CheckCircle2 size={42} />
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-slate-800 px-3 py-1 rounded-full">
              Quote Ref: RVR-Q-{Math.floor(100000 + Math.random() * 900000)}
            </span>
            <h2 className="mt-4 font-display text-4xl text-slate-900 dark:text-white font-bold">Thank You!</h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Your freight inquiry has been queued. A dedicated RVR logistics desk representative will contact you with competitive ocean/air rate options shortly.
            </p>
            <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-2xl" onClick={() => setSent(false)}>
              Submit Another Inquiry
            </Button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Freight Rate Calculator & Quote"
        title="Tell Us What You Need to Move."
        intro="Planning an international export, import, or domestic cargo shipment? Share your parameters and our team will present practical routing options."
      />

      <section className="mx-auto max-w-site px-4 sm:px-6 pb-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_2.2fr]">
          {/* Sidebar */}
          <div className="space-y-6">
            <SectionTitle label="Request Quote" title="We're Here to Plan Your Shipment." />
            
            <div className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-blue-50/50 dark:bg-slate-900 p-7 shadow-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">How Quote Process Works</p>
              {[
                "We review your cargo and port requirements",
                "Our team evaluates sea, air & land freight routes",
                "We calculate competitive carrier rates & timelines",
                "We present a tailored logistics proposal",
              ].map((step, i) => (
                <div key={step} className="flex items-start gap-3 mb-3.5 last:mb-0">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xs font-bold mt-0.5">
                    0{i + 1}
                  </span>
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-sm">
              <div className="flex items-center gap-2 text-blue-600 font-bold font-mono text-xs uppercase mb-2">
                <ShieldCheck size={16} /> Instant Support
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Need advice on breakbulk cargo, hazardous containers, or urgent air charters? Speak directly with our team.
              </p>
              <a href="/contact" className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-blue-600 hover:text-blue-700">
                Contact Logistics Experts <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 lg:p-10 shadow-xl shadow-blue-500/5">
            <div className="grid gap-6 sm:grid-cols-2">
              <SelectField id="shipment-type" label="Shipment Type" options={["Export Shipment", "Import Shipment", "Cross Trade (3rd Country)", "Domestic Road Cargo"]} />
              <SelectField id="mode" label="Primary Mode" options={["Sea Freight (FCL / LCL)", "Air Freight Express", "Land Freight / Trucking", "Multimodal Transport"]} />

              {textFields.map((f) => (
                <label key={f.id} htmlFor={f.id} className="grid gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {f.label} {f.required && <span className="text-blue-600">*</span>}
                  </span>
                  <input
                    id={f.id}
                    required={f.required}
                    type={f.type}
                    placeholder={f.placeholder}
                    className="min-h-12 rounded-xl border border-blue-100 dark:border-slate-800 bg-blue-50/30 dark:bg-slate-950 px-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-colors"
                  />
                </label>
              ))}

              <label htmlFor="additional" className="grid gap-2 sm:col-span-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Additional Cargo & Port Requirements
                </span>
                <textarea
                  id="additional"
                  rows={4}
                  className="rounded-xl border border-blue-100 dark:border-slate-800 bg-blue-50/30 dark:bg-slate-950 p-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-colors"
                  placeholder="Mention special handling requirements, temperature control, customs clearance needed, or target delivery dates…"
                />
              </label>

              <div className="sm:col-span-2 pt-2">
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-13 text-sm rounded-xl shadow-lg shadow-blue-600/20">
                  <Send size={16} /> Submit Freight Enquiry <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function SelectField({ id, label, options }: { id: string; label: string; options: string[] }) {
  return (
    <label htmlFor={id} className="grid gap-2">
      <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
        {label} <span className="text-blue-600">*</span>
      </span>
      <select 
        id={id} 
        required 
        className="min-h-12 rounded-xl border border-blue-100 dark:border-slate-800 bg-blue-50/30 dark:bg-slate-950 px-4 text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-colors"
      >
        <option value="">Select Option</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}