import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { services } from "@/lib/rvr-content";
import { Button } from "@/components/ui/button";

const mainNav = [
  { to: "/about", label: "About RVR" },
  { to: "/industries", label: "Industries" },
  { to: "/network", label: "Network" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-site items-center gap-7 px-5 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-3xl leading-none">RVR</span>
          <span className="hidden font-mono text-[10px] uppercase text-muted-foreground sm:block">Global Logistics</span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-5 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={pathname.startsWith(item.to) ? "nav-link text-primary" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`nav-link flex items-center gap-1 ${isServicesActive ? "text-primary" : ""}`}
            >
              Services
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
                <div className="px-3 py-2 border-b border-border">
                  <Link
                    to="/services"
                    className="flex items-center gap-2 rounded-xl px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:bg-surface hover:text-primary"
                    onClick={() => setServicesOpen(false)}
                  >
                    All Services →
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-px p-2">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-surface"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="font-mono text-[9px] text-primary">{s.number}</span>
                      <span className="font-display text-base leading-none">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA buttons */}
        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <Link to="/track-shipment" className="pill-link hidden sm:inline-flex">
            Track
          </Link>
          <Link to="/get-a-quote" className="pill-link bg-primary text-primary-foreground hover:bg-foreground">
            Get a quote
          </Link>
          <Button
            variant="outline"
            className="size-11 px-0 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-5 py-6 lg:hidden">
          <nav className="grid gap-1">
            <Link to="/" className="py-3 font-display text-2xl" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="py-3 font-display text-2xl" onClick={() => setOpen(false)}>
              About RVR
            </Link>
            <div>
              <Link to="/services" className="py-3 font-display text-2xl block" onClick={() => setOpen(false)}>
                Services
              </Link>
              <div className="ml-4 grid gap-1 pb-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {s.number} — {s.name}
                  </Link>
                ))}
              </div>
            </div>
            {mainNav.map((item) => (
              <Link key={item.to} to={item.to} className="py-3 font-display text-2xl" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link to="/track-shipment" className="py-3 font-display text-2xl" onClick={() => setOpen(false)}>
              Track Shipment
            </Link>
            <Link to="/contact" className="py-3 font-display text-2xl" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-site grid-cols-2 gap-9 px-5 py-12 md:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-display text-3xl">
            RVR
          </Link>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
            Global Logistics Pvt. Ltd.
          </p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Moving Cargo. Connecting Markets. Enabling Growth.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">India · Worldwide</p>
        </div>

        {/* Quick links */}
        <FooterGroup
          title="Explore"
          links={[
            { to: "/", label: "Home" },
            { to: "/about", label: "About RVR" },
            { to: "/services", label: "Services" },
            { to: "/industries", label: "Industries" },
            { to: "/network", label: "Network" },
            { to: "/contact", label: "Contact" },
          ]}
        />

        {/* Services */}
        <FooterGroup
          title="Services"
          links={services.map((s) => ({ to: `/services/${s.slug}` as "/services/sea-freight", label: s.name }))}
        />

        {/* Act */}
        <div>
          <p className="eyebrow mb-3">Act</p>
          <div className="grid gap-2 text-sm">
            <Link to="/track-shipment" className="hover:text-primary">
              Track Shipment
            </Link>
            <Link to="/get-a-quote" className="hover:text-primary">
              Get a Quote
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-site flex-wrap gap-5 border-t border-border px-5 py-5 font-mono text-[10px] uppercase text-muted-foreground lg:px-8">
        <span>© 2025 RVR Global Logistics Pvt. Ltd.</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="eyebrow mb-3">{title}</p>
      <div className="grid gap-2 text-sm">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="hover:text-primary">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}