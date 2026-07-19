import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sprout, Store, LineChart, Banknote, Truck, Globe2, GraduationCap,
  FileText, Building2, ShieldCheck, Bot, QrCode,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Bunza Moringa" },
      { name: "description", content: "Digital identity, marketplace, commodity intelligence, finance, exports, logistics, CAC registration and AI-powered agricultural services." },
      { property: "og:title", content: "Our Services" },
      { property: "og:description", content: "The full stack of agricultural services on one platform." },
    ],
  }),
  component: Services,
});

const services = [
  { i: Sprout, t: "Farmer Onboarding", d: "GPS-verified registration with digital ID, QR card, PDF slip and biometric capture." },
  { i: Building2, t: "Cooperative Formalization", d: "CAC-compliant onboarding, member management, warehouse & commodity tracking." },
  { i: Store, t: "Marketplace", d: "List and buy commodities. Live prices, escrow, auctions, ratings and delivery." },
  { i: LineChart, t: "Commodity Intelligence", d: "AI forecasts, historical prices, weather, FX and policy impact analysis." },
  { i: Banknote, t: "Loans & Non-Interest Finance", d: "Credit scoring, eligibility, document verification and approval workflows." },
  { i: Globe2, t: "Export Services", d: "HS codes, quality inspection, packaging, shipping and NXP-ready trade reports." },
  { i: Truck, t: "Logistics & Delivery", d: "Driver network, route optimization, GPS tracking and proof of delivery." },
  { i: FileText, t: "CAC Registration", d: "Business incorporation with document capture, PDF preview and API integration ready." },
  { i: GraduationCap, t: "Training Centre", d: "Extension services, certifications and digital literacy for farmers and cooperatives." },
  { i: Bot, t: "AI Assistant", d: "Crop advice, disease detection, yield prediction, OCR, and voice-enabled support." },
  { i: QrCode, t: "Digital Identity & QR", d: "Every farmer gets a verifiable QR ID card and PDF for offline verification." },
  { i: ShieldCheck, t: "Compliance & Security", d: "KYC, audit trails, 2FA, encryption and OWASP-hardened APIs." },
];

function Services() {
  return (
    <SiteLayout>
      <section className="gradient-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Badge variant="secondary" className="rounded-full">Services</Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-balance">
            Twelve integrated services. One ecosystem.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Every service on the platform is designed to work together — data flows seamlessly across roles.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.t} className="hover:shadow-elegant transition-shadow group">
              <CardContent className="p-6">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:gradient-primary group-hover:text-primary-foreground transition-all">
                  <s.i className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold">{s.t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild size="lg" className="gradient-primary text-primary-foreground shadow-elegant">
            <Link to="/register">Get started</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
