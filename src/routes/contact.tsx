import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
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
  { icon: MapPin, label: "Registered Office", value: "Address to be confirmed" },
  { icon: Phone, label: "Phone", value: "To be confirmed" },
  { icon: Mail, label: "Email", value: "To be confirmed" },
  { icon: Clock, label: "Business Hours", value: "To be confirmed" },
] as const;

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/network", label: "Network" },
  { to: "/industries", label: "Industries" },
  { to: "/get-a-quote", label: "Get a Quote" },
  { to: "/track-shipment", label: "Track Shipment" },
  { to: "/contact", label: "Contact" },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk Logistics."
        intro="Have a shipment to plan, a logistics challenge to solve or simply need a freight estimate? Our team is ready to understand your requirement."
        image="land"
      />

      {/* Main contact section */}
      <section className="mx-auto max-w-site px-5 pb-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionTitle
              label="RVR Global Logistics Pvt. Ltd."
              title="Your next shipment starts with a conversation."
              text="Contact details will be confirmed and updated here. Reach out to discuss your logistics requirement — we are ready to understand what you need to move."
            />
            {/* Quick links */}
            <div className="mt-10">
              <p className="eyebrow mb-4">Quick Links</p>
              <div className="grid gap-1">
                {quickLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    <ArrowRight size={12} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Contact detail cards */}
            <div className="grid gap-3 sm:grid-cols-2">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-hero bg-surface p-6">
                  <Icon size={22} className="text-primary" />
                  <p className="eyebrow mt-7">{label}</p>
                  <p className="mt-2 font-medium text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <Link to="/get-a-quote" className="pill-link w-full justify-center bg-primary text-primary-foreground">
              Start a Freight Enquiry <ArrowRight size={15} />
            </Link>

            {/* Services quick list */}
            <div className="rounded-hero bg-surface p-7">
              <p className="eyebrow mb-5">Our Services</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    <span className="font-mono text-[9px] text-primary">{s.number}</span>
                    {s.name}
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