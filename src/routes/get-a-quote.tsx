import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionTitle } from "@/components/rvr-pages";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
  { id: "name", label: "Name", required: true, type: "text" },
  { id: "company", label: "Company Name", required: false, type: "text" },
  { id: "email", label: "Email", required: true, type: "email" },
  { id: "phone", label: "Phone", required: true, type: "tel" },
  { id: "origin", label: "Origin", required: true, type: "text" },
  { id: "destination", label: "Destination", required: true, type: "text" },
  { id: "cargo-type", label: "Cargo Type", required: true, type: "text" },
  { id: "cargo-weight", label: "Cargo Weight / Volume", required: true, type: "text" },
  { id: "container-req", label: "Container Requirement", required: false, type: "text" },
  { id: "shipping-date", label: "Expected Shipping Date", required: true, type: "date" },
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
          eyebrow="Freight quote"
          title="Tell Us What You Need to Move."
          intro="Share a few details with our logistics team and we'll help identify a suitable transportation solution."
        />
        <section className="mx-auto max-w-4xl px-5 pb-20">
          <div className="rounded-hero bg-surface p-10 text-center">
            <div className="mx-auto mb-6 inline-flex size-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 size={32} className="text-primary" />
            </div>
            <p className="eyebrow">Enquiry prepared</p>
            <h2 className="mt-4 font-display text-4xl">Thank you.</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              The submission channel is awaiting RVR's confirmed contact details. Your form is ready for connection once those are provided.
            </p>
            <Button className="mt-7" onClick={() => setSent(false)}>
              Send another enquiry
            </Button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Freight quote"
        title="Tell Us What You Need to Move."
        intro="Planning a shipment? Share a few details with our logistics team and we'll help identify a suitable transportation solution."
      />

      <section className="mx-auto max-w-5xl px-5 pb-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          {/* Sidebar */}
          <div className="space-y-6">
            <SectionTitle label="Get a quote" title="We're here to help plan your shipment." />
            <div className="space-y-4 rounded-hero bg-surface p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">What happens next?</p>
              {[
                "We review your shipment details",
                "Our team evaluates routes and carriers",
                "We share a suitable logistics solution",
                "You decide how to proceed",
              ].map((step, i) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 font-mono text-[10px] text-primary">0{i + 1}</span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
            <div className="rounded-hero border border-border p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Need to talk first?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Contact our logistics team directly for complex shipments or project cargo requirements.
              </p>
              <a href="/contact" className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                Contact us <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="rounded-hero bg-surface p-7 lg:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField id="shipment-type" label="Shipment Type" options={["Import", "Export", "Cross Trade", "Domestic"]} />
              <SelectField id="mode" label="Mode" options={["Sea", "Air", "Land"]} />

              {textFields.map((f) => (
                <label key={f.id} htmlFor={f.id} className="grid gap-2">
                  <span className="eyebrow">{f.label}</span>
                  <input
                    id={f.id}
                    required={f.required}
                    type={f.type}
                    className="min-h-12 rounded-lg border border-input bg-background px-4"
                  />
                </label>
              ))}

              <label htmlFor="additional" className="grid gap-2 sm:col-span-2">
                <span className="eyebrow">Additional Requirements</span>
                <textarea
                  id="additional"
                  rows={5}
                  className="rounded-lg border border-input bg-background p-4"
                  placeholder="Any special handling, packaging or documentation requirements…"
                />
              </label>

              <div className="sm:col-span-2">
                <Button type="submit" variant="dark" className="w-full">
                  Submit Enquiry <ArrowRight size={15} />
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
      <span className="eyebrow">{label}</span>
      <select id={id} required className="min-h-12 rounded-lg border border-input bg-background px-4">
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}