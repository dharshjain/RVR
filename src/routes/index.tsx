import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Globe2, MessageSquare, DollarSign, Package, HeadphonesIcon, Search } from "lucide-react";
import { QuoteCta, SectionTitle } from "@/components/rvr-pages";
import { industries, services } from "@/lib/rvr-content";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/rvr-port-hero.jpg";
import networkImage from "@/assets/rvr-network.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RVR Global Logistics — Moving Cargo. Connecting Markets." },
      { name: "description", content: "Reliable sea, air and land freight, customs, warehousing and project logistics from India to the world." },
      { property: "og:title", content: "RVR Global Logistics" },
      { property: "og:description", content: "Moving Cargo. Connecting Markets. Enabling Growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const whyItems = [
  { icon: CheckCircle2, title: "Reliable Execution", text: "We focus on delivering every shipment according to the agreed plan." },
  { icon: Globe2, title: "Global Connectivity", text: "Access to international logistics networks and transportation options across all modes." },
  { icon: MessageSquare, title: "Transparent Communication", text: "Clear updates, documentation and communication throughout the shipment journey." },
  { icon: DollarSign, title: "Cost-Conscious Solutions", text: "We identify practical transportation options that balance cost, transit time and reliability." },
  { icon: Package, title: "Cargo Care", text: "Your shipment is handled with attention and care from origin to destination." },
  { icon: HeadphonesIcon, title: "Responsive Support", text: "Our team stays accessible when you need answers, updates or solutions." },
];

const approachSteps = [
  { n: "01", title: "Understand", text: "We understand your cargo, destination, timeline and business requirements." },
  { n: "02", title: "Plan", text: "We evaluate routes, modes, carriers and handling requirements." },
  { n: "03", title: "Coordinate", text: "We manage documentation, transportation, customs and other shipment requirements." },
  { n: "04", title: "Monitor", text: "We keep track of the shipment and coordinate with the relevant stakeholders." },
  { n: "05", title: "Deliver", text: "Your cargo reaches its destination with the right support and coordination." },
];

const stats = [
  { value: "XX+", label: "Countries Connected" },
  { value: "XX+", label: "Shipments Handled" },
  { value: "XX+", label: "Business Partners" },
  { value: "XX+", label: "Years of Experience" },
  { value: "XX/7", label: "Customer Support" },
  { value: "XX%", label: "Commitment to Service" },
];

function Index() {
  const [trackRef, setTrackRef] = useState("");
  const [trackMsg, setTrackMsg] = useState("");

  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-site px-5 pb-5 pt-7 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="animate-rise relative min-h-[560px] overflow-hidden rounded-hero lg:col-span-8">
            <img src={heroImage} alt="Container ship at a global port" width={1600} height={1000} className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-hero-overlay" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-surface lg:p-10">
              <p className="eyebrow flex items-center gap-2 text-surface/75">
                <span className="size-2 rounded-full bg-primary" />
                Sea · Air · Land · Cross Trade
              </p>
              <h1 className="mt-4 font-display text-[clamp(3.3rem,7vw,6.4rem)] leading-tight lg:leading-[.9]">
                Your Cargo.<br />Our Global<br />Responsibility.
              </h1>
              <p className="mt-5 max-w-xl text-surface/75">
                From origin to destination, RVR Global Logistics delivers dependable freight forwarding and supply chain solutions across sea, air and land.
              </p>
            </div>
          </div>
          <aside className="animate-rise flex min-h-[320px] flex-col justify-between rounded-hero bg-surface p-7 lg:col-span-4">
            <div>
              <p className="eyebrow">Global Reach. Local Expertise.</p>
              <h2 className="mt-4 font-display text-4xl leading-none">
                Complete Logistics Support.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                RVR Global Logistics connects businesses to markets across the world through reliable freight forwarding, customs, transportation, warehousing and specialized logistics solutions.
              </p>
            </div>
            <div className="grid gap-3">
              <Link to="/get-a-quote" className="pill-link justify-center bg-foreground text-background">
                Get a Freight Quote <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="pill-link justify-center">
                Explore Our Services
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-site px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle
              label="01 — Who we are"
              title="More Than Moving Cargo. We Move Possibilities."
            />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              International trade is about more than transportation. It is about timing, coordination, documentation, visibility and trust.
            </p>
            <p>
              At RVR Global Logistics Pvt. Ltd., we bring these elements together under one connected logistics solution. Whether you are importing raw materials, exporting finished products, moving project cargo or managing regular shipments, our team works closely with you to create an efficient, cost-conscious and dependable logistics journey.
            </p>
            <p className="font-medium text-foreground">
              One Logistics Partner. Multiple Possibilities.
            </p>
            <p>
              From port to warehouse, warehouse to destination, or factory to global market — RVR manages the journey with precision.
            </p>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-site px-5 py-14 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-5">
            <SectionTitle label="02 — What we do" title="Complete logistics. One connected network." />
            <Link to="/services" className="pill-link hidden sm:inline-flex">
              All services <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group rounded-hero bg-background p-6 outline outline-1 -outline-offset-1 outline-foreground/5 transition-transform hover:-translate-y-1"
              >
                <p className="eyebrow text-primary">
                  {s.number} — {s.eyebrow}
                </p>
                <h3 className="mt-8 font-display text-3xl">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.intro.slice(0, 118)}…</p>
                <ArrowRight className="mt-6 transition-transform group-hover:translate-x-1" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RVR */}
      <section className="mx-auto max-w-site px-5 py-14 lg:px-8">
        <div className="mb-10">
          <SectionTitle
            label="03 — Why us"
            title="Because Logistics Should Feel Simple."
            text="Global logistics can be complicated. Your logistics partner shouldn't be. At RVR, we simplify the movement of goods through coordinated planning, responsive communication and end-to-end shipment management."
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-hero bg-surface p-6">
              <div className="mb-5 inline-flex size-10 items-center justify-center rounded-full bg-primary/10">
                <Icon size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOGISTICS APPROACH */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-site px-5 py-14 lg:px-8">
          <SectionTitle label="04 — Our process" title="Plan. Move. Monitor. Deliver." text="Every shipment follows a carefully coordinated journey." />
          <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {approachSteps.map(({ n, title, text }) => (
              <div key={n} className="border-t-2 border-primary pt-5">
                <span className="eyebrow">{n}</span>
                <h3 className="mt-4 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL NETWORK */}
      <section className="mx-auto max-w-site px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionTitle
              label="05 — Global network"
              title="From Local Origins to Global Destinations"
              text="RVR Global Logistics connects Indian businesses with international destinations through a coordinated network of shipping, air cargo, road transportation, customs and logistics partners."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {["India", "Asia", "Middle East", "Europe", "Africa", "Americas"].map((r) => (
                <span key={r} className="pill-link bg-surface">{r}</span>
              ))}
            </div>
            <p className="mt-6 font-display text-xl text-muted-foreground">
              Your market has no borders. Neither should your logistics partner.
            </p>
            <Link to="/network" className="pill-link mt-6 inline-flex">
              Explore our network <ArrowRight size={14} />
            </Link>
          </div>
          <div className="overflow-hidden rounded-hero lg:col-span-7">
            <img
              src={networkImage}
              loading="lazy"
              alt="Global routes centered on India"
              width={1400}
              height={900}
              className="aspect-[16/10] size-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-site px-5 py-14 lg:px-8">
          <SectionTitle label="06 — Industries" title="Logistics Expertise across Industries" text="Different cargo requires different logistics strategies. RVR Global Logistics supports businesses across diverse industries and cargo categories." />
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {industries.map((item, i) => (
              <div key={item} className="flex min-h-20 items-center gap-3 rounded-hero bg-background px-5">
                <span className={i % 3 === 0 ? "size-2.5 rounded-full bg-primary" : i % 3 === 1 ? "size-2.5 rounded-full bg-sky" : "size-2.5 rounded-full bg-accent"} />
                <span className="font-display text-xl">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 font-display text-3xl">
            Whatever you manufacture, trade or distribute — we help move it.
          </p>
          <Link to="/industries" className="pill-link mt-6 inline-flex">
            View all industries <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="mx-auto max-w-site px-5 py-14 lg:px-8">
        <SectionTitle label="07 — Our scale" title="RVR by the Numbers" />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="rounded-hero bg-surface p-6 text-center">
              <p className="font-display text-4xl text-primary">{value}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          * Statistics to be updated with verified company figures.
        </p>
      </section>

      {/* TRACK SHIPMENT */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-site px-5 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionTitle
              label="08 — Shipment tracking"
              title="Where Is Your Shipment?"
              text="Stay informed about your cargo journey. Enter your shipment or tracking reference to check the latest available status."
            />
            <form
              className="rounded-hero bg-background p-7"
              onSubmit={(e) => {
                e.preventDefault();
                setTrackMsg(
                  trackRef.trim()
                    ? "Live tracking is being connected. Please contact our team with this reference for the latest update."
                    : "Enter a shipment reference to continue."
                );
              }}
            >
              <label htmlFor="home-tracking" className="eyebrow">
                B/L · AWB · Container · RVR reference
              </label>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  id="home-tracking"
                  value={trackRef}
                  onChange={(e) => setTrackRef(e.target.value)}
                  className="min-h-12 flex-1 rounded-full border border-input bg-surface px-5 font-mono text-sm"
                  placeholder="Enter your reference"
                />
                <Button type="submit" variant="dark">
                  <Search size={15} /> Track Shipment
                </Button>
              </div>
              {trackMsg && (
                <p className="mt-4 rounded-lg bg-surface p-4 text-sm text-muted-foreground" role="status">
                  {trackMsg}{" "}
                  <Link to="/contact" className="font-medium text-primary">
                    Contact RVR →
                  </Link>
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <QuoteCta />
    </>
  );
}
