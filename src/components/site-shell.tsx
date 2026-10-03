import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { services } from "@/lib/rvr-content";
import { Button } from "@/components/ui/button";

const mainNavItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About RVR" },
  { to: "/services", label: "Services", isDropdown: true },
  { to: "/industries", label: "Industries" },
  { to: "/network", label: "Network" },
  { to: "/track-shipment", label: "Track Shipment" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-site items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex shrink-0 items-center gap-3 group" 
          onClick={() => {
            setMobileMenuOpen(false);
            setServicesDropdownOpen(false);
          }}
        >
          <span className="font-display text-2xl sm:text-3xl leading-none text-foreground group-hover:text-primary transition-colors">RVR</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:block border-l border-border pl-3 py-0.5">
            Global Logistics
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 xl:gap-2.5 lg:flex">
          <Link
            to="/"
            className={`nav-link px-3 py-2 rounded-lg transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary font-bold" : "text-foreground"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`nav-link px-3 py-2 rounded-lg transition-colors hover:text-primary ${
              pathname.startsWith("/about") ? "text-primary font-bold" : "text-foreground"
            }`}
          >
            About RVR
          </Link>

          {/* Services Dropdown (Desktop) */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setServicesDropdownOpen((prev) => !prev)}
              className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-primary ${
                isServicesActive ? "text-primary font-bold" : "text-foreground"
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute left-1/2 top-full pt-2 -translate-x-1/2 w-80 sm:w-96 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-2xl ring-1 ring-black/5">
                  <div className="flex items-center justify-between border-b border-border bg-surface/60 px-4 py-2.5">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                      Services Directory
                    </span>
                    <Link
                      to="/services"
                      className="font-mono text-[10px] uppercase tracking-wider text-primary hover:underline font-semibold"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      All Services →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-2 max-h-[420px] overflow-y-auto">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="group flex items-center gap-3 rounded-xl p-2.5 hover:bg-surface transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-[10px] font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {s.number}
                        </span>
                        <div className="flex flex-col min-w-0">
                          <span className="font-display text-base leading-snug group-hover:text-primary transition-colors truncate">
                            {s.name}
                          </span>
                          <span className="font-mono text-[9px] text-muted-foreground truncate">
                            {s.eyebrow}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/industries"
            className={`nav-link px-3 py-2 rounded-lg transition-colors hover:text-primary ${
              pathname.startsWith("/industries") ? "text-primary font-bold" : "text-foreground"
            }`}
          >
            Industries
          </Link>

          <Link
            to="/network"
            className={`nav-link px-3 py-2 rounded-lg transition-colors hover:text-primary ${
              pathname.startsWith("/network") ? "text-primary font-bold" : "text-foreground"
            }`}
          >
            Network
          </Link>

          <Link
            to="/track-shipment"
            className={`nav-link px-3 py-2 rounded-lg transition-colors hover:text-primary ${
              pathname.startsWith("/track-shipment") ? "text-primary font-bold" : "text-foreground"
            }`}
          >
            Track Shipment
          </Link>

          <Link
            to="/contact"
            className={`nav-link px-3 py-2 rounded-lg transition-colors hover:text-primary ${
              pathname.startsWith("/contact") ? "text-primary font-bold" : "text-foreground"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <Link
            to="/get-a-quote"
            className="pill-link bg-primary text-primary-foreground hover:bg-foreground transition-colors text-[11px] sm:text-xs py-2 px-4 shrink-0"
          >
            Get a quote
          </Link>

          <Button
            variant="outline"
            className="size-10 px-0 lg:hidden shrink-0"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background/98 backdrop-blur-xl px-4 py-5 lg:hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            <Link
              to="/"
              className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl transition-colors hover:bg-surface ${
                pathname === "/" ? "text-primary font-bold bg-surface/70" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl transition-colors hover:bg-surface ${
                pathname.startsWith("/about") ? "text-primary font-bold bg-surface/70" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About RVR
            </Link>

            {/* Mobile Services Accordion Dropdown */}
            <div className="rounded-xl border border-border/80 bg-surface/40 overflow-hidden my-0.5">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-left font-display text-xl text-foreground hover:bg-surface transition-colors"
                aria-expanded={mobileServicesOpen}
              >
                <span className={isServicesActive ? "text-primary font-bold" : ""}>Services</span>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="border-t border-border/60 bg-background/90 px-3 py-2 flex flex-col gap-1">
                  <Link
                    to="/services"
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 font-mono text-[11px] uppercase tracking-wider text-primary font-bold hover:bg-surface"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Explore All Services</span>
                    <span>→</span>
                  </Link>

                  <div className="my-1 border-t border-border/40" />

                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-surface"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="font-mono text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                        {s.number}
                      </span>
                      <span className="font-display text-base text-foreground">{s.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/industries"
              className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl transition-colors hover:bg-surface ${
                pathname.startsWith("/industries") ? "text-primary font-bold bg-surface/70" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>

            <Link
              to="/network"
              className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl transition-colors hover:bg-surface ${
                pathname.startsWith("/network") ? "text-primary font-bold bg-surface/70" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Network
            </Link>

            <Link
              to="/track-shipment"
              className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl transition-colors hover:bg-surface ${
                pathname.startsWith("/track-shipment") ? "text-primary font-bold bg-surface/70" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Track Shipment
            </Link>

            <Link
              to="/contact"
              className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl transition-colors hover:bg-surface ${
                pathname.startsWith("/contact") ? "text-primary font-bold bg-surface/70" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Quote CTA */}
            <div className="pt-3 mt-2 border-t border-border">
              <Link
                to="/get-a-quote"
                className="pill-link w-full justify-center bg-primary text-primary-foreground hover:bg-foreground text-xs py-3 font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Freight Quote
              </Link>
            </div>
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
            { to: "/track-shipment", label: "Track Shipment" },
            { to: "/contact", label: "Contact Us" },
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