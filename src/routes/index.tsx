import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, CheckCircle2, Globe2, MessageSquare, DollarSign, Package, HeadphonesIcon, 
  Search, ChevronLeft, ChevronRight, Pause, Play,
  Factory, Cog, FlaskConical, Pickaxe, Layers, LayoutGrid, Wheat, ShoppingBag, 
  Wrench, Car, Shirt, PackageCheck, HardHat, Boxes 
} from "lucide-react";
import { QuoteCta, SectionTitle } from "@/components/rvr-pages";
import { industries, services } from "@/lib/rvr-content";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/rvr-port-hero.jpg";
import networkImage from "@/assets/rvr-network.jpg";
import seaImage from "@/assets/rvr-port-hero.jpg";
import airImage from "@/assets/rvr-air-freight.jpg";
import landImage from "@/assets/rvr-land-freight.jpg";
import warehouseImage from "@/assets/rvr-warehouse.jpg";
import projectImage from "@/assets/rvr-project-cargo.jpg";

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

interface HeroSlide {
  id: string;
  slug: string;
  image: string;
  badge: string;
  title: string;
  intro: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: "sea",
    slug: "sea-freight",
    image: seaImage,
    badge: "Ocean Freight & Global Ports",
    title: "Your Cargo.\nOur Global Responsibility.",
    intro: "From origin to final destination, RVR Global Logistics delivers dependable ocean freight forwarding, FCL & LCL container solutions worldwide.",
  },
  {
    id: "air",
    slug: "air-freight",
    image: airImage,
    badge: "Time-Critical Air Cargo",
    title: "When Every Hour Counts,\nMove by Air.",
    intro: "Express international air cargo, priority flight space booking, airport-to-airport freight, and door-to-door expedited delivery.",
  },
  {
    id: "warehouse",
    slug: "warehousing",
    image: warehouseImage,
    badge: "Smart Storage & Distribution",
    title: "Modern Warehousing.\nConnected Supply Chains.",
    intro: "High-tech distribution centers, automated inventory management, cargo consolidation, and efficient first/last-mile logistics.",
  },
  {
    id: "project",
    slug: "project-cargo",
    image: projectImage,
    badge: "Heavy & Oversized Project Cargo",
    title: "When Cargo Is Complex,\nPlanning Makes the Difference.",
    intro: "Specialized project logistics, heavy machinery transport, breakbulk chartering, and custom route engineering.",
  },
  {
    id: "land",
    slug: "land-freight",
    image: landImage,
    badge: "First & Last-Mile Transportation",
    title: "Connecting Ports, Plants,\nWarehouses & Markets.",
    intro: "Dependable road movement, Full Truckload (FTL) and Part Truckload (PTL) container transportation across domestic networks.",
  },
];

const serviceImages: Record<string, string> = {
  sea: seaImage,
  air: airImage,
  land: landImage,
  warehouse: warehouseImage,
  project: projectImage,
};

const whyItems = [
  { icon: CheckCircle2, title: "Reliable Execution", text: "We focus on delivering every shipment according to the agreed schedule and transit plan." },
  { icon: Globe2, title: "Global Connectivity", text: "Access to international logistics networks and carrier options across sea, air and land." },
  { icon: MessageSquare, title: "Transparent Communication", text: "Proactive milestone updates, documentation clarity and direct support throughout the journey." },
  { icon: DollarSign, title: "Cost-Conscious Solutions", text: "We identify practical transportation routes balancing speed, cargo requirements and budget." },
  { icon: Package, title: "Dedicated Cargo Care", text: "Your shipment is handled with utmost care, supervision and safety from origin to destination." },
  { icon: HeadphonesIcon, title: "24/7 Responsive Support", text: "Our logistics team stays accessible around the clock whenever you need status or routing help." },
];

const approachSteps = [
  { n: "01", title: "Understand", text: "We review your cargo parameters, destination requirements, timeline constraints and budget." },
  { n: "02", title: "Plan", text: "We evaluate optimal sea, air or land routes, carrier options and custom clearance protocols." },
  { n: "03", title: "Coordinate", text: "We manage freight documentation, pickup, port handling and regulatory compliance." },
  { n: "04", title: "Monitor", text: "We track shipment milestones in real-time and maintain close stakeholder alignment." },
  { n: "05", title: "Deliver", text: "Your cargo arrives safely at its destination with complete proof of delivery and reporting." },
];

const stats = [
  { value: "120+", label: "Countries Connected" },
  { value: "50,000+", label: "TEUs & Shipments Handled" },
  { value: "850+", label: "Trusted Business Partners" },
  { value: "15+", label: "Years Industry Experience" },
  { value: "24/7", label: "Operations Support" },
  { value: "99.4%", label: "On-Time Delivery Rate" },
];

const industryIcons: Record<string, { icon: typeof Factory; color: string; bg: string }> = {
  "Industrial Products": { icon: Factory, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900/60" },
  "Engineering Goods": { icon: Cog, color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-900/60" },
  "Chemicals": { icon: FlaskConical, color: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-900/60" },
  "Minerals": { icon: Pickaxe, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900/60" },
  "Metals": { icon: Layers, color: "text-slate-600 dark:text-slate-300", bg: "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700" },
  "Ceramic & Tiles": { icon: LayoutGrid, color: "text-sky-600 dark:text-sky-400", bg: "bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-900/60" },
  "Agricultural Products": { icon: Wheat, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900/60" },
  "Food & FMCG": { icon: ShoppingBag, color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-900/60" },
  "Machinery & Equipment": { icon: Wrench, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900/60" },
  "Automotive Components": { icon: Car, color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-950/60 border-violet-200 dark:border-violet-900/60" },
  "Textiles & Garments": { icon: Shirt, color: "text-fuchsia-600 dark:text-fuchsia-400", bg: "bg-fuchsia-50 dark:bg-fuchsia-950/60 border-fuchsia-200 dark:border-fuchsia-900/60" },
  "Consumer Products": { icon: PackageCheck, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900/60" },
  "Project Cargo": { icon: HardHat, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-950/60 border-orange-200 dark:border-orange-900/60" },
  "General Cargo": { icon: Boxes, color: "text-teal-600 dark:text-teal-400", bg: "bg-teal-50 dark:bg-teal-950/60 border-teal-200 dark:border-teal-900/60" },
};

function Index() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [trackRef, setTrackRef] = useState("");
  const [trackType, setTrackType] = useState<"BL" | "AWB" | "CONTAINER">("CONTAINER");
  const [trackMsg, setTrackMsg] = useState("");
  const [industryFilter, setIndustryFilter] = useState<string>("ALL");

  // Hero carousel auto-play interval
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentSlide: HeroSlide = heroSlides[activeSlide] ?? heroSlides[0]!;

  return (
    <>
      {/* ANIMATED HERO SECTION CAROUSEL */}
      <section className="mx-auto max-w-site px-4 sm:px-6 pb-6 pt-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Main Visual Animated Hero Carousel Card */}
          <div 
            className="group relative flex flex-col justify-between min-h-[500px] sm:min-h-[560px] lg:min-h-[580px] overflow-hidden rounded-3xl lg:col-span-8 shadow-xl shadow-blue-950/15 border border-blue-100/60 dark:border-slate-800 p-5 sm:p-8 lg:p-10"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {/* Carousel Background Images with Smooth Crossfade */}
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 size-full transition-opacity duration-1000 ease-in-out ${
                  index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.badge} 
                  width={1600} 
                  height={1000} 
                  className={`size-full object-cover transition-transform duration-[4500ms] cubic-bezier(0.25, 1, 0.5, 1) ${
                    index === activeSlide ? "scale-105" : "scale-100"
                  }`} 
                />
                <div className="absolute inset-0 bg-hero-overlay" />
              </div>
            ))}
            
            {/* Top Badges & Control Bar */}
            <div className="relative z-20 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 pb-4">
              <div key={currentSlide.id + "-badge"} className="animate-rise inline-flex items-center gap-2 rounded-full bg-blue-600/90 border border-blue-400/30 px-3 py-1 sm:px-3.5 sm:py-1.5 font-mono text-[11px] sm:text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md shadow-md max-w-[70%] sm:max-w-full truncate">
                <span className="size-2 rounded-full bg-white animate-pulse shrink-0" />
                <span className="truncate">{currentSlide.badge}</span>
              </div>

              {/* Pause/Play & Next/Prev Controls */}
              <div className="flex items-center gap-1 rounded-full bg-slate-950/80 border border-white/20 p-1 backdrop-blur-md text-white shrink-0 ml-auto sm:ml-0">
                <button
                  type="button"
                  onClick={() => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight size={15} />
                </button>
                <span className="px-2 font-mono text-[10px] sm:text-[11px] font-medium text-blue-200">
                  0{activeSlide + 1} / 0{heroSlides.length}
                </span>
              </div>
            </div>

            {/* Slide Content with Entrance Animation */}
            <div className="relative z-20 text-white mt-auto pt-4">
              <div key={currentSlide.id} className="animate-fade-in-slide max-w-2xl">
                <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.08] text-balance font-semibold drop-shadow-sm whitespace-pre-line">
                  {currentSlide.title}
                </h1>
                <p className="mt-2.5 sm:mt-3.5 max-w-xl text-xs sm:text-base lg:text-lg leading-relaxed text-slate-100/90 font-normal drop-shadow-sm">
                  {currentSlide.intro}
                </p>

                {/* Quick Hero Action Buttons */}
                <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <Link 
                    to="/get-a-quote" 
                    className="pill-link bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all border-transparent font-medium text-[11px] sm:text-xs min-h-10 sm:min-h-11 px-4 sm:px-5"
                  >
                    Request a Quote <ArrowRight size={15} />
                  </Link>
                  <Link 
                    to="/services/$slug"
                    params={{ slug: currentSlide.slug }}
                    className="pill-link bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-md font-medium text-[11px] sm:text-xs min-h-10 sm:min-h-11 px-4 sm:px-5"
                  >
                    Explore Service <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Indicator Dots at bottom */}
              <div className="mt-5 sm:mt-8 flex items-center gap-2">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === activeSlide ? "w-7 sm:w-8 bg-blue-400" : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar Card */}
          <aside className="animate-rise flex min-h-[340px] flex-col justify-between rounded-3xl border border-blue-100 dark:border-slate-800 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 dark:from-slate-900 dark:to-slate-950 p-7 sm:p-8 lg:col-span-4 shadow-lg shadow-blue-500/5">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-blue-600 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200/80">
                Global Reach • Local Expertise
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl leading-tight text-slate-900 dark:text-white font-semibold">
                Complete Logistics Partner.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                RVR Global Logistics connects businesses with international markets across the globe through coordinated freight forwarding, customs clearance, door-to-door transportation, and warehousing.
              </p>

              {/* Feature Highlights */}
              <div className="mt-6 space-y-2.5">
                {[
                  "FCL & LCL Sea Freight Booking",
                  "Express Air Freight Solutions",
                  "Customs Clearance at Major Ports",
                  "End-to-End Shipment Visibility",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle2 size={15} className="text-blue-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 pt-6 border-t border-blue-100 dark:border-slate-800">
              <Link to="/services" className="pill-link justify-center bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 border-transparent font-medium">
                Explore All Services <ArrowRight size={15} />
              </Link>
              <Link to="/about" className="pill-link justify-center border-blue-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 font-medium">
                Learn About RVR
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* INTRODUCTION / WHO WE ARE */}
      <section className="mx-auto max-w-site px-4 sm:px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <SectionTitle
              label="01 — Who We Are"
              title="More Than Moving Cargo. We Move Possibilities."
            />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 dark:bg-slate-900 dark:border-slate-800">
                <p className="font-display text-xl sm:text-2xl text-blue-600 font-bold truncate">Precision</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">Coordinated scheduling & carrier compliance</p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 dark:bg-slate-900 dark:border-slate-800">
                <p className="font-display text-xl sm:text-2xl text-blue-600 font-bold truncate">Transparency</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">Clear documentation & status updates</p>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            <p>
              International trade requires seamless alignment between timing, transportation modes, port customs, documentation and accountable oversight.
            </p>
            <p>
              At <strong className="text-slate-900 dark:text-white font-semibold">RVR Global Logistics Pvt. Ltd.</strong>, we unify these critical components into one integrated supply chain system. Whether importing raw materials, exporting finished merchandise, or executing project shipments — our team delivers cost-conscious, dependable execution.
            </p>
            <div className="p-4 rounded-2xl bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/20 flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-xl bg-white text-blue-600 font-bold text-sm">
                RVR
              </span>
              <span>One Logistics Partner. End-to-End Control.</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES WITH IMAGE THUMBNAILS (WHAT WE DO) */}
      <section className="border-y border-blue-100 dark:border-slate-800 bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-site px-4 sm:px-6 py-16 lg:px-8">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <SectionTitle label="02 — What We Do" title="Complete Logistics Services. One Connected Network." />
            
            <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3">
              {/* Mobile Horizontal Scroll Indicator Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 dark:bg-blue-500/20 px-3.5 py-1.5 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-200/80 dark:border-blue-800/80 sm:hidden">
                <span>SWIPE SOLUTIONS</span>
                <ArrowRight size={14} className="animate-slide-x" />
              </div>
              
              <Link to="/services" className="pill-link inline-flex bg-blue-600 text-white hover:bg-blue-700 border-transparent font-bold shadow-md shadow-blue-500/20">
                All Services <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Cards Track: Horizontal scroll on mobile (< sm), 3-col Grid on Desktop */}
          <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="w-[82vw] max-w-[320px] sm:max-w-none sm:w-auto shrink-0 snap-start group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-300"
              >
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={serviceImages[s.image]} 
                    alt={s.name} 
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-2.5 py-1 font-mono text-xs font-bold text-white shadow-md">
                    {s.number}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-blue-200 font-semibold truncate">
                      {s.eyebrow}
                    </p>
                    <h3 className="font-display text-2xl text-white font-bold">{s.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {s.intro.slice(0, 115)}…
                  </p>
                  
                  <div className="mt-6 flex items-center justify-between border-t border-blue-50 dark:border-slate-800 pt-4 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700">
                    <span>Explore Solution</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Mobile Scroll Indicator Bar */}
          <div className="mt-3 flex items-center justify-between px-1 text-xs font-mono text-slate-500 dark:text-slate-400 sm:hidden">
            <span className="flex items-center gap-1.5 font-medium text-blue-600 dark:text-blue-400">
              <span className="size-2 rounded-full bg-blue-600 animate-pulse" />
              Swipe 5 logistics solutions →
            </span>
            <span className="text-[11px] text-slate-400 font-normal">
              Scroll horizontally
            </span>
          </div>
        </div>
      </section>

      {/* WHY RVR */}
      <section className="mx-auto max-w-site px-4 sm:px-6 py-16 lg:px-8">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionTitle
            label="03 — Why Us"
            title="Because Logistics Should Feel Simple."
            text="Global shipping involves complex variables. Your logistics partner should make it straightforward. At RVR, we simplify movement through proactive planning, transparent communication, and accountable execution."
          />
          {/* Mobile Horizontal Scroll Indicator Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 dark:bg-blue-500/20 px-3.5 py-1.5 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-200/80 dark:border-blue-800/80 sm:hidden shrink-0 self-start sm:self-auto">
            <span>SWIPE PILLARS</span>
            <ArrowRight size={14} className="animate-slide-x" />
          </div>
        </div>

        {/* Cards Track: Horizontal scroll on mobile (< sm), Grid on Desktop */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory gap-4 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map(({ icon: Icon, title, text }) => (
            <div 
              key={title} 
              className="w-[80vw] max-w-[310px] sm:max-w-none sm:w-auto shrink-0 snap-start group rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300"
            >
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-2xl text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{text}</p>
            </div>
          ))}
        </div>

        {/* Bottom Mobile Scroll Indicator Bar */}
        <div className="mt-3 flex items-center justify-between px-1 text-xs font-mono text-slate-500 dark:text-slate-400 sm:hidden">
          <span className="flex items-center gap-1.5 font-medium text-blue-600 dark:text-blue-400">
            <span className="size-2 rounded-full bg-blue-600 animate-pulse" />
            Swipe 6 why us pillars →
          </span>
          <span className="text-[11px] text-slate-400 font-normal">
            Scroll horizontally
          </span>
        </div>
      </section>

      {/* LOGISTICS PROCESS */}
      <section className="border-y border-blue-100 dark:border-slate-800 bg-slate-950 text-white">
        <div className="mx-auto max-w-site px-4 sm:px-6 py-16 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionTitle label="04 — Our Process" title="Plan. Move. Monitor. Deliver." text="Every shipment follows a transparent, quality-controlled workflow." />
            
            {/* Mobile Horizontal Scroll Indicator Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-400/15 px-3.5 py-1.5 font-mono text-xs font-semibold text-blue-400 border border-blue-700/60 sm:hidden shrink-0 self-start sm:self-auto">
              <span>SWIPE STEPS</span>
              <ArrowRight size={14} className="animate-slide-x" />
            </div>
          </div>
          
          {/* Steps Track: Horizontal scroll on mobile (< sm), 5-col Grid on Desktop */}
          <div className="mt-10 flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar sm:grid-cols-3 lg:grid-cols-5">
            {approachSteps.map(({ n, title, text }) => (
              <div key={n} className="w-[75vw] max-w-[280px] sm:max-w-none sm:w-auto shrink-0 snap-start rounded-2xl border border-blue-900/60 bg-blue-950/40 p-6 shadow-md">
                <span className="inline-block font-mono text-xs font-bold text-blue-400 bg-blue-900/60 px-2.5 py-0.5 rounded mb-3">
                  Step {n}
                </span>
                <h3 className="font-display text-2xl text-white font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{text}</p>
              </div>
            ))}
          </div>

          {/* Bottom Mobile Scroll Indicator Bar */}
          <div className="mt-3 flex items-center justify-between px-1 text-xs font-mono text-slate-400 sm:hidden">
            <span className="flex items-center gap-1.5 font-medium text-blue-400">
              <span className="size-2 rounded-full bg-blue-400 animate-pulse" />
              Swipe 5 process steps →
            </span>
            <span className="text-[11px] text-slate-400 font-normal">
              Scroll horizontally
            </span>
          </div>
        </div>
      </section>

      {/* GLOBAL NETWORK */}
      <section className="mx-auto max-w-site px-4 sm:px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionTitle
              label="05 — Global Network"
              title="From Local Origins to Global Destinations"
              text="RVR Global Logistics connects Indian ports, manufacturing hubs, and trade routes with major global destinations across Asia, Europe, Middle East, Americas, and Africa."
            />

            <div className="mt-6 flex flex-wrap gap-2">
              {["India", "Asia", "Middle East", "Europe", "Africa", "Americas", "Oceania"].map((r) => (
                <span key={r} className="pill-link bg-blue-50 text-blue-700 border-blue-200 font-bold dark:bg-slate-900 dark:text-blue-400 dark:border-slate-800">
                  {r}
                </span>
              ))}
            </div>

            <p className="mt-6 font-display text-2xl text-slate-800 dark:text-slate-200">
              Your market has no borders. Neither should your logistics partner.
            </p>

            <Link to="/network" className="pill-link mt-6 inline-flex bg-blue-600 text-white hover:bg-blue-700 border-transparent font-bold shadow-md shadow-blue-500/20">
              Explore Our Network <ArrowRight size={14} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-blue-100 shadow-2xl shadow-blue-950/15 lg:col-span-7">
            <img
              src={networkImage}
              loading="lazy"
              alt="Global routes centered on India"
              width={1400}
              height={900}
              className="aspect-[16/10] size-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-y border-blue-100 dark:border-slate-800 bg-blue-50/40 dark:bg-slate-900/40">
        <div className="mx-auto max-w-site px-4 sm:px-6 py-16 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionTitle 
              label="06 — Industries Served" 
              title="Logistics Expertise Across Core Industries" 
              text="Diverse cargo demands specialized transportation strategies. We manage logistics across engineering, industrial, chemical, consumer and agricultural sectors." 
            />
            {/* Mobile Swipe Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 dark:bg-blue-500/20 px-3.5 py-1.5 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-200/80 dark:border-blue-800/80 sm:hidden shrink-0 self-start sm:self-auto">
              <span>SWIPE SECTORS</span>
              <ArrowRight size={14} className="animate-slide-x" />
            </div>
          </div>
          
          {/* Mobile Filter Chips */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:hidden -mx-4 px-4">
            {[
              { id: "ALL", label: "All Sectors (14)" },
              { id: "INDUSTRIAL", label: "Industrial & Eng" },
              { id: "AGRI", label: "Agri & Food" },
              { id: "CONSUMER", label: "Consumer & Retail" },
              { id: "PROJECT", label: "Project Cargo" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setIndustryFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium shrink-0 transition-all ${
                  industryFilter === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                    : "bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards Track: Horizontal Swipe on Mobile (< sm), Grid on Desktop */}
          <div className="mt-6 sm:mt-10 flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory gap-3.5 sm:gap-4 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar sm:grid-cols-3 lg:grid-cols-4">
            {industries
              .filter((item) => {
                if (industryFilter === "ALL") return true;
                if (industryFilter === "INDUSTRIAL") return ["Industrial Products", "Engineering Goods", "Chemicals", "Minerals", "Metals", "Machinery & Equipment"].includes(item);
                if (industryFilter === "AGRI") return ["Agricultural Products", "Food & FMCG"].includes(item);
                if (industryFilter === "CONSUMER") return ["Ceramic & Tiles", "Textiles & Garments", "Consumer Products", "Automotive Components"].includes(item);
                if (industryFilter === "PROJECT") return ["Project Cargo", "General Cargo"].includes(item);
                return true;
              })
              .map((item) => {
                const meta = industryIcons[item] || { icon: Boxes, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900/60" };
                const Icon = meta.icon;
                return (
                  <div 
                    key={item} 
                    className="w-[74vw] max-w-[270px] sm:max-w-none sm:w-auto shrink-0 snap-start group flex items-center gap-3.5 rounded-2xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 sm:p-4 shadow-sm hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300"
                  >
                    <div className={`flex size-11 items-center justify-center rounded-xl border ${meta.bg} ${meta.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={21} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-display text-sm sm:text-base text-slate-900 dark:text-white font-semibold leading-tight truncate">{item}</span>
                      <span className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">Specialized Logistics</span>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Bottom Mobile Scroll Indicator Bar */}
          <div className="mt-3 flex items-center justify-between px-1 text-xs font-mono text-slate-500 dark:text-slate-400 sm:hidden">
            <span className="flex items-center gap-1.5 font-medium text-blue-600 dark:text-blue-400">
              <span className="size-2 rounded-full bg-blue-600 animate-pulse" />
              Swipe through industry sectors →
            </span>
            <span className="text-[11px] text-slate-400 font-normal">
              Horizontal carousel
            </span>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-blue-600 p-8 text-white shadow-xl shadow-blue-600/20">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl">Whatever You Manufacture, Trade or Distribute — We Help Move It.</h3>
              <p className="mt-2 text-sm text-blue-100">Tailored container, breakbulk, and express handling for your specific cargo type.</p>
            </div>
            <Link to="/industries" className="pill-link bg-white text-blue-900 hover:bg-blue-50 border-transparent font-bold shrink-0">
              View All Industries <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="mx-auto max-w-site px-4 sm:px-6 py-16 lg:px-8">
        <SectionTitle label="07 — Scale & Performance" title="RVR by the Numbers" />
        
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-center shadow-md shadow-blue-500/5">
              <p className="font-display text-3xl sm:text-4xl text-blue-600 font-bold">{value}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE TRACK SHIPMENT CARD */}
      <section className="border-y border-blue-100 dark:border-slate-800 bg-gradient-to-b from-blue-900 to-slate-950 text-white">
        <div className="mx-auto max-w-site px-4 sm:px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800">
                Live Shipment Hub
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl text-white font-bold leading-tight">
                Track Your Cargo Journey
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                Enter your Container ID, Bill of Lading (B/L), Air Waybill (AWB), or RVR Reference to check real-time milestone updates.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1"><CheckCircle2 size={13} className="text-blue-400" /> Ocean Containers</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={13} className="text-blue-400" /> Air Cargo</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={13} className="text-blue-400" /> Customs Status</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                className="rounded-3xl border border-blue-700/50 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
                onSubmit={(e) => {
                  e.preventDefault();
                  setTrackMsg(
                    trackRef.trim()
                      ? `Status for ${trackType} ref '${trackRef.trim()}': Shipment confirmed & in active transport window. Contact our dispatch line for live GPS location.`
                      : "Please enter a valid shipment reference number."
                  );
                }}
              >
                {/* Selector buttons */}
                <div className="flex gap-2 mb-4">
                  {(["CONTAINER", "BL", "AWB"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setTrackType(type)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
                        trackType === type
                          ? "bg-blue-600 text-white"
                          : "bg-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      {type === "CONTAINER" ? "Container #" : type === "BL" ? "B/L #" : "AWB #"}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="home-tracking"
                    value={trackRef}
                    onChange={(e) => setTrackRef(e.target.value)}
                    className="min-h-12 flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-5 font-mono text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder={
                      trackType === "CONTAINER" 
                        ? "e.g., MSCU1234567" 
                        : trackType === "BL" 
                        ? "e.g., RVR-BL-9876" 
                        : "e.g., 098-12345678"
                    }
                  />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-6 rounded-2xl">
                    <Search size={16} /> Track Shipment
                  </Button>
                </div>

                {trackMsg && (
                  <div className="mt-5 rounded-2xl bg-blue-950/80 border border-blue-800 p-4 text-xs leading-relaxed text-blue-200" role="status">
                    <p className="font-semibold">{trackMsg}</p>
                    <div className="mt-2 pt-2 border-t border-blue-900 flex items-center justify-between">
                      <span>Need detailed manifest docs?</span>
                      <Link to="/contact" className="font-bold text-white underline hover:text-blue-300">
                        Contact Support Team →
                      </Link>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <QuoteCta />
    </>
  );
}
