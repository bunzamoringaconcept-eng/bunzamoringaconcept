import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Building2, Store, Globe2, Truck, ClipboardList, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/register/")({
  head: () => ({
    meta: [
      { title: "Register — Bunza Moringa" },
      { name: "description", content: "Register as a farmer, cooperative, trader, exporter, driver, enumerator or field agent." },
      { property: "og:title", content: "Registration" },
      { property: "og:description", content: "Join the Bunza Moringa ecosystem." },
    ],
  }),
  component: RegisterHub,
});

const roles = [
  { to: "/register/farmer", i: Sprout, t: "Farmer", d: "Get a digital ID, QR card and access to buyers, prices and financing." },
  { to: "/register", i: Building2, t: "Cooperative", d: "Formalize your cooperative with CAC-compliant onboarding and member tools." },
  { to: "/register", i: Store, t: "Trader", d: "List and buy commodities in the verified marketplace." },
  { to: "/register", i: Globe2, t: "Exporter", d: "Access export documentation, HS codes, quality inspection and NXP workflow." },
  { to: "/register", i: Truck, t: "Driver / Logistics", d: "Join the driver network for deliveries and route-optimized trips." },
  { to: "/register", i: ClipboardList, t: "Field Agent / Enumerator", d: "Register farmers on the ground with offline capture and daily targets." },
];

function RegisterHub() {
  return (
    <SiteLayout>
      <section className="gradient-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Badge variant="secondary" className="rounded-full">Registration</Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-balance">Choose how you'll join the ecosystem</h1>
          <p className="mt-3 text-muted-foreground">Free registration. Instant digital ID. Access unlocked in minutes.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((r) => (
          <Link key={r.t} to={r.to} className="group">
            <Card className="h-full hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl gradient-primary text-primary-foreground grid place-items-center shadow-elegant">
                  <r.i className="h-6 w-6" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="font-display font-semibold text-lg">{r.t}</div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{r.d}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
