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
    <>
      {/* Top Announcement / Info Bar */}
      <div className="bg-slate-950 text-slate-200 border-b border-blue-900/50 py-1.5 px-4 text-xs font-mono">
        <div className="mx-auto max-w-site flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex size-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-semibold text-blue-400">RVR Global Network:</span>
            <span className="truncate">Sea, Air & Land Freight Forwarding • Port & Border Customs Clearance</span>
          </div>
          <div className="hidden md:flex items-center gap-6 shrink-0 text-[11px] text-slate-300">
            <Link to="/track-shipment" className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <span>Track Shipment</span>
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">
              Support Center
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/95 backdrop-blur-md dark:bg-slate-950/95 dark:border-slate-800 shadow-sm">
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
            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 font-display text-2xl text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-all">
              RVR
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl leading-none text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                RVR Global
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-blue-600 font-semibold dark:text-blue-400">
                Logistics Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
            <Link
              to="/"
              className={`nav-link px-3 py-2 rounded-lg transition-colors hover:text-blue-600 hover:bg-blue-50/50 dark:hover:bg-slate-900 ${
                pathname === "/" ? "text-blue-600 font-bold bg-blue-50/80 dark:bg-slate-900" : "text-slate-800 dark:text-slate-200"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`nav-link px-3 py-2 rounded-lg transition-colors hover:text-blue-600 hover:bg-blue-50/50 dark:hover:bg-slate-900 ${
                pathname.startsWith("/about") ? "text-blue-600 font-bold bg-blue-50/80 dark:bg-slate-900" : "text-slate-800 dark:text-slate-200"
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
                className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-blue-600 hover:bg-blue-50/50 dark:hover:bg-slate-900 ${
                  isServicesActive ? "text-blue-600 font-bold bg-blue-50/80 dark:bg-slate-900" : "text-slate-800 dark:text-slate-200"
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute left-1/2 top-full pt-2 -translate-x-1/2 w-80 sm:w-96 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                  <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-2xl ring-1 ring-black/5">
                    <div className="flex items-center justify-between border-b border-blue-50 bg-blue-50/60 dark:bg-slate-850 dark:border-slate-800 px-4 py-2.5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-blue-700 dark:text-blue-400 font-bold">
                        Freight & Supply Chain Services
                      </span>
                      <Link
                        to="/services"
                        className="font-mono text-[10px] uppercase tracking-wider text-blue-600 hover:underline font-bold"
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
                          className="group flex items-center gap-3 rounded-xl p-2.5 hover:bg-blue-50/80 dark:hover:bg-slate-800 transition-colors"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 font-mono text-[11px] font-bold text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            {s.number}
                          </span>
                          <div className="flex flex-col min-w-0">
                            <span className="font-display text-base leading-snug text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors truncate">
                              {s.name}
                            </span>
                            <span className="font-mono text-[9px] text-slate-500 dark:text-slate-400 truncate">
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
              className={`nav-link px-3 py-2 rounded-lg transition-colors hover:text-blue-600 hover:bg-blue-50/50 dark:hover:bg-slate-900 ${
                pathname.startsWith("/industries") ? "text-blue-600 font-bold bg-blue-50/80 dark:bg-slate-900" : "text-slate-800 dark:text-slate-200"
              }`}
            >
              Industries
            </Link>

            <Link
              to="/network"
              className={`nav-link px-3 py-2 rounded-lg transition-colors hover:text-blue-600 hover:bg-blue-50/50 dark:hover:bg-slate-900 ${
                pathname.startsWith("/network") ? "text-blue-600 font-bold bg-blue-50/80 dark:bg-slate-900" : "text-slate-800 dark:text-slate-200"
              }`}
            >
              Network
            </Link>

            <Link
              to="/track-shipment"
              className={`nav-link px-3 py-2 rounded-lg transition-colors hover:text-blue-600 hover:bg-blue-50/50 dark:hover:bg-slate-900 ${
                pathname.startsWith("/track-shipment") ? "text-blue-600 font-bold bg-blue-50/80 dark:bg-slate-900" : "text-slate-800 dark:text-slate-200"
              }`}
            >
              Track Shipment
            </Link>

            <Link
              to="/contact"
              className={`nav-link px-3 py-2 rounded-lg transition-colors hover:text-blue-600 hover:bg-blue-50/50 dark:hover:bg-slate-900 ${
                pathname.startsWith("/contact") ? "text-blue-600 font-bold bg-blue-50/80 dark:bg-slate-900" : "text-slate-800 dark:text-slate-200"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <Link
              to="/get-a-quote"
              className="pill-link bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all text-[11px] sm:text-xs py-2 px-4 shrink-0 font-bold border-transparent"
            >
              Get a Quote
            </Link>

            <Button
              variant="outline"
              className="size-10 px-0 lg:hidden shrink-0 border-blue-200 text-slate-800 dark:border-slate-800 dark:text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-blue-100 bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl px-4 py-5 lg:hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5">
              <Link
                to="/"
                className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl transition-colors hover:bg-blue-50 ${
                  pathname === "/" ? "text-blue-600 font-bold bg-blue-50/80" : "text-slate-900 dark:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl transition-colors hover:bg-blue-50 ${
                  pathname.startsWith("/about") ? "text-blue-600 font-bold bg-blue-50/80" : "text-slate-900 dark:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About RVR
              </Link>

              {/* Mobile Services Accordion Dropdown */}
              <div className="rounded-xl border border-blue-100 bg-blue-50/30 dark:bg-slate-900 dark:border-slate-800 overflow-hidden my-0.5">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left font-display text-xl text-slate-900 dark:text-white hover:bg-blue-50 transition-colors"
                  aria-expanded={mobileServicesOpen}
                >
                  <span className={isServicesActive ? "text-blue-600 font-bold" : ""}>Services</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="border-t border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-2 flex flex-col gap-1">
                    <Link
                      to="/services"
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 font-mono text-[11px] uppercase tracking-wider text-blue-600 font-bold hover:bg-blue-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>Explore All Services</span>
                      <span>→</span>
                    </Link>

                    <div className="my-1 border-t border-blue-50 dark:border-slate-800" />

                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-blue-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-mono text-[10px] font-bold text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">
                          {s.number}
                        </span>
                        <span className="font-display text-base text-slate-900 dark:text-white">{s.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/industries"
                className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl transition-colors hover:bg-blue-50 ${
                  pathname.startsWith("/industries") ? "text-blue-600 font-bold bg-blue-50/80" : "text-slate-900 dark:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>

              <Link
                to="/network"
                className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl transition-colors hover:bg-blue-50 ${
                  pathname.startsWith("/network") ? "text-blue-600 font-bold bg-blue-50/80" : "text-slate-900 dark:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Network
              </Link>

              <Link
                to="/track-shipment"
                className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl transition-colors hover:bg-blue-50 ${
                  pathname.startsWith("/track-shipment") ? "text-blue-600 font-bold bg-blue-50/80" : "text-slate-900 dark:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Track Shipment
              </Link>

              <Link
                to="/contact"
                className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl transition-colors hover:bg-blue-50 ${
                  pathname.startsWith("/contact") ? "text-blue-600 font-bold bg-blue-50/80" : "text-slate-900 dark:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Quote CTA */}
              <div className="pt-3 mt-2 border-t border-blue-100 dark:border-slate-800">
                <Link
                  to="/get-a-quote"
                  className="pill-link w-full justify-center bg-blue-600 text-white hover:bg-blue-700 text-xs py-3 font-bold border-transparent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Freight Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-blue-900/40">
      <div className="mx-auto grid max-w-site grid-cols-2 gap-9 px-5 py-14 md:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 font-display text-2xl text-white shadow-lg shadow-blue-500/20">
              RVR
            </div>
            <span className="font-display text-2xl text-white">RVR Global</span>
          </div>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-blue-400 font-semibold">
            Logistics Pvt. Ltd.
          </p>
          <p className="mt-4 max-w-xs text-sm text-slate-400 leading-relaxed">
            Moving Cargo. Connecting Markets. Enabling Global Trade & Industry Growth.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-950/80 border border-blue-800/50 px-3 py-1 font-mono text-[10px] text-blue-300">
            <span className="size-1.5 rounded-full bg-blue-400 animate-pulse" />
            Headquartered in India • Serving Worldwide
          </div>
        </div>

        {/* Quick links */}
        <FooterGroup
          title="Explore"
          links={[
            { to: "/", label: "Home" },
            { to: "/about", label: "About RVR" },
            { to: "/services", label: "Services Directory" },
            { to: "/industries", label: "Industries Served" },
            { to: "/network", label: "Global Network" },
            { to: "/track-shipment", label: "Track Shipment" },
            { to: "/contact", label: "Contact Us" },
          ]}
        />

        {/* Services */}
        <FooterGroup
          title="Key Services"
          links={services.map((s) => ({ to: `/services/${s.slug}` as "/services/sea-freight", label: s.name }))}
        />

        {/* Act */}
        <div>
          <p className="eyebrow mb-3 text-blue-400">Logistics Hub</p>
          <div className="grid gap-2 text-sm text-slate-300">
            <Link to="/track-shipment" className="hover:text-blue-400 transition-colors">
              Track Shipment Status
            </Link>
            <Link to="/get-a-quote" className="hover:text-blue-400 transition-colors">
              Request Freight Quote
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">
              Customer Support Center
            </Link>
          </div>
          <div className="mt-6 rounded-2xl bg-blue-900/30 border border-blue-800/50 p-4 text-xs">
            <span className="font-semibold text-white block mb-1">Need Urgent Freight Assistance?</span>
            <span className="text-slate-400 block mb-2">Speak directly with our logistics team.</span>
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 font-bold font-mono text-[11px] uppercase tracking-wider">
              Contact Logistics Team →
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-site flex-wrap justify-between gap-5 border-t border-slate-900 px-5 py-6 font-mono text-[10px] uppercase text-slate-400 lg:px-8">
        <span>© {new Date().getFullYear()} RVR Global Logistics Pvt. Ltd. All rights reserved.</span>
        <span>Blue & White Corporate Theme • High Performance Logistics</span>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="eyebrow mb-3 text-blue-400">{title}</p>
      <div className="grid gap-2 text-sm text-slate-300">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="hover:text-blue-400 transition-colors">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
