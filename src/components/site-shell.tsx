import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/rvr-content";
import { Button } from "@/components/ui/button";

const nav = [{ to: "/about", label: "About RVR" }, { to: "/services", label: "Services" }, { to: "/industries", label: "Industries" }, { to: "/network", label: "Network" }, { to: "/contact", label: "Contact" }] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
    <div className="mx-auto flex h-18 max-w-site items-center gap-7 px-5 lg:px-8">
      <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}><span className="font-display text-3xl leading-none">RVR</span><span className="hidden font-mono text-[10px] uppercase text-muted-foreground sm:block">Global Logistics</span></Link>
      <nav className="ml-auto hidden items-center gap-5 lg:flex">{nav.map((item) => <Link key={item.to} to={item.to} className={pathname.startsWith(item.to) ? "nav-link text-primary" : "nav-link"}>{item.label}</Link>)}</nav>
      <div className="ml-auto flex items-center gap-2 lg:ml-2"><Link to="/track-shipment" className="pill-link hidden sm:inline-flex">Track</Link><Link to="/get-a-quote" className="pill-link bg-primary text-primary-foreground hover:bg-foreground">Get a quote</Link><Button variant="outline" className="size-11 px-0 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={18}/> : <Menu size={18}/>}</Button></div>
    </div>
    {open && <div className="border-t border-border bg-background px-5 py-6 lg:hidden"><nav className="grid gap-1">{nav.map((item) => <Link key={item.to} to={item.to} className="py-3 font-display text-2xl" onClick={() => setOpen(false)}>{item.label}</Link>)}<Link to="/track-shipment" className="py-3 font-display text-2xl" onClick={() => setOpen(false)}>Track Shipment</Link></nav></div>}
  </header>;
}

export function SiteFooter() {
  return <footer className="border-t border-border"><div className="mx-auto grid max-w-site grid-cols-2 gap-9 px-5 py-12 md:grid-cols-4 lg:px-8"><div className="col-span-2 md:col-span-1"><Link to="/" className="font-display text-3xl">RVR</Link><p className="mt-3 max-w-xs text-sm text-muted-foreground">Moving Cargo. Connecting Markets. Enabling Growth.</p></div><FooterGroup title="Explore" links={[...nav.slice(0,4)]}/><FooterGroup title="Services" links={services.slice(0,5).map(s => ({to: `/services/${s.slug}` as "/services/sea-freight", label: s.name}))}/><div><p className="eyebrow mb-3">Act</p><div className="grid gap-2 text-sm"><Link to="/track-shipment">Track shipment</Link><Link to="/get-a-quote">Get a quote</Link><Link to="/contact">Contact</Link><span className="mt-2 text-muted-foreground">Contact details to be confirmed</span></div></div></div><div className="mx-auto flex max-w-site flex-wrap gap-5 border-t border-border px-5 py-5 font-mono text-[10px] uppercase text-muted-foreground lg:px-8"><span>© 2026 RVR Global Logistics Pvt. Ltd.</span><span>India · Worldwide</span></div></footer>;
}

function FooterGroup({ title, links }: { title: string; links: {to: string; label: string}[] }) { return <div><p className="eyebrow mb-3">{title}</p><div className="grid gap-2 text-sm">{links.map(link => <Link key={link.to} to={link.to} className="hover:text-primary">{link.label}</Link>)}</div></div>; }