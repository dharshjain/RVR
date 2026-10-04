import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, ArrowRight, MessageSquare, Globe, ShieldCheck } from "lucide-react";
import { PageHero, SectionTitle, QuoteCta } from "@/components/rvr-pages";
import { services } from "@/lib/rvr-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RVR Global Logistics" },
      { name: "description", content: "Start a conversation with RVR about your next shipment or logistics challenge." },
      { property: "og:title", content: "Contact RVR Global Logistics" },
      { property: "og:description", content: "Your next shipment starts with a conversation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const contactDetails = [
  { icon: MapPin, label: "Corporate Office", value: "RVR House, Logistics Hub, Port Road, India" },
  { icon: Phone, label: "Direct Support Hotline", value: "+91 (0) 123 456 7890" },
  { icon: Mail, label: "Official Email", value: "info@rvrlogistics.com" },
  { icon: Clock, label: "Operations Hours", value: "24/7 Shipment Operations & Dispatch" },
] as const;

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About RVR" },
  { to: "/services", label: "Services Directory" },
  { to: "/network", label: "Global Network" },
  { to: "/industries", label: "Industries Served" },
  { to: "/get-a-quote", label: "Request Freight Quote" },
  { to: "/track-shipment", label: "Track Shipment Status" },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact RVR"
        title="Let's Talk Logistics."
        intro="Have a shipment to plan, a logistics challenge to solve, or simply need an ocean/air freight estimate? Our team is available 24/7."
        image="land"
      />

      {/* Main contact section */}
      <section className="mx-auto max-w-site px-4 sm:px-6 pb-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionTitle
              label="RVR Global Logistics Pvt. Ltd."
              title="Your Next Shipment Starts With a Conversation."
              text="Reach out to discuss your cargo requirement — our freight specialists are ready to analyze routes, port compliance, and custom clearance schedules for you."
            />

            <div className="mt-8 rounded-3xl border border-blue-100 dark:border-slate-800 bg-blue-50/50 dark:bg-slate-900 p-6">
              <div className="flex items-center gap-3 text-blue-600 font-bold font-mono text-xs uppercase mb-3">
                <ShieldCheck size={16} /> Verified Logistics Desk
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Dedicated container management, air cargo booking, project breakbulk support, and customs documentation.
              </p>
            </div>

            {/* Quick links */}
            <div className="mt-8">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">Quick Navigation</p>
              <div className="grid gap-1.5 sm:grid-cols-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-50/80 transition-colors"
                  >
                    <ArrowRight size={13} className="text-blue-600 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Contact detail cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 mb-4">
                    <Icon size={20} />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-blue-600 font-bold">{label}</p>
                  <p className="mt-1 font-display text-lg text-slate-900 dark:text-white font-bold">{value}</p>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <Link 
              to="/get-a-quote" 
              className="pill-link w-full justify-center bg-blue-600 text-white hover:bg-blue-700 font-bold text-xs py-3.5 border-transparent shadow-lg shadow-blue-600/20"
            >
              <MessageSquare size={16} /> Start a Freight Enquiry
            </Link>

            {/* Services quick list */}
            <div className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">Services Quick Access</p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded bg-blue-100 text-blue-600 font-mono text-[10px] font-bold">
                      {s.number}
                    </span>
                    <span className="truncate">{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}