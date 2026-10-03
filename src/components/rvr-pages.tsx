import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import type { Service } from "@/lib/rvr-content";
import seaImage from "@/assets/rvr-port-hero.jpg";
import airImage from "@/assets/rvr-air-freight.jpg";
import landImage from "@/assets/rvr-land-freight.jpg";

const images = { sea: seaImage, air: airImage, land: landImage };

export function PageHero({ eyebrow, title, intro, image = "sea" }: { eyebrow: string; title: string; intro: string; image?: keyof typeof images }) {
  return <section className="mx-auto max-w-site px-5 pb-12 pt-7 lg:px-8 lg:pb-18"><div className="relative min-h-[520px] overflow-hidden rounded-hero"><img src={images[image]} alt="RVR logistics operation" width={1600} height={1000} className="absolute inset-0 size-full object-cover"/><div className="absolute inset-0 bg-hero-overlay"/><div className="relative flex min-h-[520px] max-w-4xl flex-col justify-end p-7 text-surface lg:p-12"><p className="eyebrow text-surface/75">{eyebrow}</p><h1 className="mt-4 font-display text-[clamp(3rem,7vw,6.6rem)] leading-[.92] text-balance">{title}</h1><p className="mt-6 max-w-2xl text-base leading-relaxed text-surface/80 lg:text-lg">{intro}</p></div></div></section>;
}

export function SectionTitle({ label, title, text }: { label: string; title: string; text?: string }) { return <div><p className="eyebrow">{label}</p><h2 className="mt-3 font-display text-4xl leading-none text-balance lg:text-5xl">{title}</h2>{text && <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{text}</p>}</div>; }

export function QuoteCta() { return <section className="mx-auto max-w-site px-5 pb-16 lg:px-8"><div className="grid gap-8 rounded-hero bg-foreground p-8 text-background lg:grid-cols-[1.4fr_.6fr] lg:items-center lg:p-12"><div><p className="eyebrow text-background/50">Ready when you are</p><h2 className="mt-3 font-display text-4xl leading-none lg:text-5xl">Tell us what’s moving.</h2><p className="mt-4 max-w-xl text-sm text-background/65">Share your origin, destination and cargo details. We’ll help identify a suitable transportation solution.</p></div><div className="grid gap-3"><Link to="/get-a-quote" className="pill-link justify-center bg-primary text-primary-foreground">Get a quote <ArrowRight size={15}/></Link><Link to="/track-shipment" className="pill-link justify-center border-background/20 text-background">Track a shipment</Link></div></div></section>; }

export function ServicePage({ service }: { service: Service }) {
  return <><PageHero eyebrow={`${service.number} — ${service.eyebrow}`} title={service.title} intro={service.intro} image={service.image}/><section className="mx-auto grid max-w-site gap-10 px-5 pb-16 lg:grid-cols-[.9fr_1.1fr] lg:px-8"><SectionTitle label="What we coordinate" title={`${service.name} solutions`}/><div className="grid sm:grid-cols-2">{service.items.map(item => <div key={item} className="flex items-start gap-3 border-b border-border py-4 text-sm"><Check className="mt-0.5 shrink-0 text-primary" size={17}/><span>{item}</span></div>)}</div></section><section className="border-y border-border bg-surface"><div className="mx-auto grid max-w-site gap-8 px-5 py-14 lg:grid-cols-2 lg:px-8"><SectionTitle label="RVR approach" title={service.focusTitle}/><p className="self-end text-lg leading-relaxed text-muted-foreground">{service.focus}</p></div></section><div className="pt-16"><QuoteCta/></div></>;
}

export function ContentBand({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "surface" }) { return <section className={tone === "surface" ? "border-y border-border bg-surface" : ""}><div className="mx-auto max-w-site px-5 py-14 lg:px-8 lg:py-20">{children}</div></section>; }