import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sprout, Store, LineChart, Banknote, Truck, ShieldCheck,
  Bot, MapPin, Users, ArrowRight, Sparkles, CheckCircle2, Globe2,
  Quote, Star, PhoneCall, ScanLine, HandCoins,
} from "lucide-react";
import heroFarm from "@/assets/hero-farm.jpg";
import marketScene from "@/assets/market-scene.jpg";
import farmerPortrait from "@/assets/farmer-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bunza Moringa — AI-powered agricultural ecosystem for Africa" },
      { name: "description", content: "Connecting 5M+ farmers, cooperatives, traders, exporters, financiers and government agencies on one intelligent AgriTech platform." },
      { property: "og:title", content: "Bunza Moringa Concept Nig Ltd" },
      { property: "og:description", content: "AI-powered agricultural digital ecosystem for Africa." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bunzamoringacon.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://bunzamoringacon.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Bunza Moringa Concept Nig Ltd",
          alternateName: "Bunza Moringa",
          url: "https://bunzamoringacon.lovable.app/",
          logo: "https://bunzamoringacon.lovable.app/favicon.ico",
          description:
            "AI-powered agricultural digital ecosystem connecting farmers, cooperatives, traders, exporters, financiers and government agencies across Africa.",
          areaServed: "NG",
          sameAs: [] as string[],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Bunza Moringa Concept Nig Ltd",
          url: "https://bunzamoringacon.lovable.app/",
          image: "https://bunzamoringacon.lovable.app/favicon.ico",
          telephone: "+234-800-000-0000",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Abuja",
            addressCountry: "NG",
          },
          areaServed: "Nigeria",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who can use the Bunza Moringa platform?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Farmers, cooperatives, traders, exporters, commodity buyers, financial institutions, logistics partners, government agencies, NGOs and field agents.",
              },
            },
            {
              "@type": "Question",
              name: "How do farmers register?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Farmers can register online in minutes or be onboarded offline by a field agent, receiving a GPS-verified QR digital ID instantly.",
              },
            },
            {
              "@type": "Question",
              name: "What commodities are traded on the marketplace?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Maize, sorghum, rice, moringa, sesame, soybean, groundnut, millet, cashew and other major African agricultural commodities.",
              },
            },
            {
              "@type": "Question",
              name: "Is the platform secure for payments?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Payments are protected by escrow, 2FA, encryption and audit logs, with support for Paystack and Flutterwave.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroFarm}
            alt="African farmers harvesting sorghum at sunset in northern Nigeria"
            width={1600}
            height={1104}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="rounded-full px-3 py-1 gap-1.5 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                AI-powered agricultural ecosystem
              </Badge>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-balance leading-[1.05]">
                The digital backbone of{" "}
                <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                  African agriculture
                </span>
              </h1>
              <p className="mt-6 text-lg text-foreground/80 max-w-xl text-balance">
                Connecting 5 million+ farmers, cooperatives, traders, exporters, financiers,
                logistics partners and government agencies on one intelligent platform.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="gradient-primary text-primary-foreground shadow-elegant">
                  <Link to="/pick-portal">Register now <ArrowRight className="h-4 w-4 ml-1" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="backdrop-blur bg-background/60">
                  <Link to="/marketplace">Explore Marketplace</Link>
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { v: "5M+", l: "Target users" },
                  { v: "36", l: "States covered" },
                  { v: "24/7", l: "AI intelligence" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-display font-bold">{s.v}</div>
                    <div className="text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 gradient-primary opacity-20 blur-3xl rounded-full" />
              <Card className="relative glass overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-muted-foreground">Live commodity index</div>
                      <div className="font-display text-2xl font-bold">₦ 12,480 <span className="text-sm text-primary">+3.2%</span></div>
                    </div>
                    <Badge className="gradient-gold text-gold-foreground">Bullish</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { c: "Maize", p: "₦ 480/kg", d: "+2.1%" },
                      { c: "Sorghum", p: "₦ 520/kg", d: "+1.4%" },
                      { c: "Rice", p: "₦ 1,150/kg", d: "-0.6%" },
                      { c: "Moringa", p: "₦ 3,200/kg", d: "+5.8%" },
                      { c: "Sesame", p: "₦ 1,980/kg", d: "+3.1%" },
                      { c: "Soybean", p: "₦ 890/kg", d: "+0.9%" },
                    ].map((r) => (
                      <div key={r.c} className="rounded-lg bg-background/70 p-3 border">
                        <div className="text-xs text-muted-foreground">{r.c}</div>
                        <div className="font-semibold">{r.p}</div>
                        <div className={`text-xs ${r.d.startsWith("-") ? "text-destructive" : "text-primary"}`}>{r.d}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                    <Bot className="h-3.5 w-3.5" /> AI forecast: sorghum expected to rise 4% next 7 days
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap items-center justify-between gap-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Trusted across the value chain</div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-display font-semibold text-foreground/70">
            {["Ministry of Agriculture", "NIRSAL", "BOA", "NEPC", "CAC", "AFEX", "Cooperatives Union"].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <Badge variant="outline" className="rounded-full">One platform</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-balance">
            Everything an agricultural business needs
          </h2>
          <p className="mt-3 text-muted-foreground">
            From onboarding to exports — a modern, secure, AI-driven stack for the whole value chain.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { i: Sprout, t: "Farmer & Cooperative onboarding", d: "GPS-verified digital ID, QR cards, and offline field agent capture." },
            { i: Store, t: "Marketplace & auctions", d: "Live prices, escrow, ratings, negotiations and delivery tracking." },
            { i: LineChart, t: "Commodity intelligence", d: "10+ years of price data, AI forecasts, weather & FX impact modeling." },
            { i: Banknote, t: "Loans & non-interest financing", d: "AI credit scoring, document verification and repayment tracking." },
            { i: Truck, t: "Logistics & tracking", d: "Drivers, route optimization, GPS and delivery proofs." },
            { i: Globe2, t: "Export & CAC integration", d: "Business registration, HS codes, NXP workflows and trade reports." },
          ].map((f) => (
            <Card key={f.t} className="border-border/60 hover:shadow-card transition-shadow">
              <CardContent className="p-6">
                <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center text-primary">
                  <f.i className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold">{f.t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/30 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <Badge variant="outline" className="rounded-full">How it works</Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-balance">
              From registration to payout in four steps
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", i: ScanLine, t: "Register", d: "Sign up online or through a field agent. Get your QR digital ID instantly." },
              { n: "02", i: Store, t: "List or Buy", d: "Post commodities or discover verified sellers with transparent prices." },
              { n: "03", i: Truck, t: "Deliver", d: "Book logistics, track deliveries and confirm receipt with proof of delivery." },
              { n: "04", i: HandCoins, t: "Get Paid", d: "Secure escrow-backed payouts, credit history and access to financing." },
            ].map((s) => (
              <Card key={s.n} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4 font-display text-4xl font-bold text-primary/10">{s.n}</div>
                  <div className="h-10 w-10 rounded-lg gradient-primary text-primary-foreground grid place-items-center shadow-elegant">
                    <s.i className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-semibold">{s.t}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rooted in Africa image band */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 gradient-gold opacity-20 blur-3xl rounded-full" />
            <img
              src={farmerPortrait}
              alt="Smiling Nigerian woman farmer holding a fresh harvest"
              width={900}
              height={1100}
              loading="lazy"
              className="relative rounded-2xl shadow-elegant object-cover w-full h-[520px]"
            />
          </div>
          <div>
            <Badge variant="outline" className="rounded-full">Rooted in Africa</Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-balance">
              Built for every stakeholder in the value chain
            </h2>
            <p className="mt-3 text-muted-foreground">
              Farmers, cooperatives, traders, exporters, buyers, field agents, enumerators, logistics partners,
              investors, bank officers, government officers, NGO partners — each with permissions, dashboards and workflows.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 max-w-md">
              {["Farmer", "Cooperative", "Trader", "Exporter", "Buyer", "Field Agent", "Enumerator", "Logistics", "Investor", "Bank Officer", "Gov Officer", "NGO Partner"].map((r) => (
                <div key={r} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {r}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-3">
              {[
                { i: Users, t: "Field Agent app", d: "Register farmers offline. Capture GPS, photo, NIN, signature." },
                { i: ShieldCheck, t: "Enterprise security", d: "2FA, JWT, encryption, audit logs and OWASP-hardened APIs." },
                { i: MapPin, t: "Geospatial intelligence", d: "Farm coordinates, live maps, agent tracking and delivery routes." },
              ].map((c) => (
                <div key={c.t} className="flex gap-3 items-start">
                  <div className="h-9 w-9 rounded-lg gradient-gold text-gold-foreground grid place-items-center shrink-0">
                    <c.i className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{c.t}</div>
                    <div className="text-sm text-muted-foreground">{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="relative overflow-hidden border-y">
        <div className="absolute inset-0 gradient-hero -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            { v: "₦ 42B+", l: "Commodity value traded" },
            { v: "180k+", l: "Farmers onboarded" },
            { v: "12k+", l: "Cooperatives connected" },
            { v: "98.7%", l: "Delivery success rate" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                {s.v}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Market scene banner */}
      <section className="relative overflow-hidden">
        <img
          src={marketScene}
          alt="Vibrant West African open-air market with traders and baskets of grain"
          width={1600}
          height={912}
          loading="lazy"
          className="w-full h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <Badge className="gradient-gold text-gold-foreground">The marketplace</Badge>
              <h3 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-balance">
                From farm to global buyer — one connected marketplace
              </h3>
              <p className="mt-3 text-foreground/80">
                Live prices, escrow protection, verified sellers and delivery tracking across 36 states.
              </p>
              <Button asChild size="lg" className="mt-6 gradient-primary text-primary-foreground shadow-elegant">
                <Link to="/marketplace">Browse commodities <ArrowRight className="h-4 w-4 ml-1" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <Badge variant="outline" className="rounded-full">Voices from the field</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-balance">
            Trusted by farmers, traders and exporters
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { q: "I got a QR ID card in 10 minutes and sold my sorghum at a 22% higher price the same week.", n: "Aisha M.", r: "Farmer, Kebbi" },
            { q: "The AI price forecasts helped us plan sesame exports three months ahead of the market.", n: "Chinedu O.", r: "Exporter, Lagos" },
            { q: "Onboarding 4,300 cooperative members offline used to take months. Now it takes a weekend.", n: "Hajiya Zainab", r: "Cooperative Lead, Kano" },
          ].map((t) => (
            <Card key={t.n} className="glass">
              <CardContent className="p-6">
                <Quote className="h-6 w-6 text-primary/40" />
                <p className="mt-3 text-sm text-foreground/90">{t.q}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <Card className="glass overflow-hidden">
          <CardContent className="p-10 lg:p-14 relative">
            <div className="absolute inset-0 gradient-hero opacity-70 -z-10" />
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-balance">
                  Ready to digitize your agricultural business?
                </h3>
                <p className="mt-3 text-muted-foreground max-w-2xl">
                  Register in minutes. Get your digital ID, connect to buyers, unlock financing, and grow with data.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="gradient-primary text-primary-foreground shadow-elegant">
                  <Link to="/register">Get started free</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact"><PhoneCall className="h-4 w-4 mr-1" /> Talk to sales</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </SiteLayout>
  );
}
