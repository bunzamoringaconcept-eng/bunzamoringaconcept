import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bunza Moringa Concept Nig Ltd" },
      { name: "description", content: "Our mission is to digitize African agriculture with AI, connecting farmers, cooperatives, traders and exporters to global markets." },
      { property: "og:title", content: "About Bunza Moringa" },
      { property: "og:description", content: "Digitizing African agriculture with AI and inclusive finance." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="gradient-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Badge variant="secondary" className="rounded-full">About us</Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-balance">
            Empowering Africa's agricultural revolution
          </h1>
          <p className="mt-5 text-lg text-muted-foreground text-balance">
            Bunza Moringa Concept Nig Ltd is a technology-driven agricultural company building the digital
            infrastructure that connects the entire agri value chain — from smallholder farmer to global exporter.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-6">
        {[
          { i: Target, t: "Our Mission", d: "Provide 5+ million African farmers with digital identity, market access, finance, and intelligence to build sustainable prosperity." },
          { i: Eye, t: "Our Vision", d: "Africa's most trusted AI-powered agricultural ecosystem — where every farm, cooperative and trader is digitally connected." },
          { i: Heart, t: "Our Values", d: "Integrity, inclusion, innovation, and impact. We build technology that puts farmers first." },
          { i: Award, t: "Our Impact", d: "Digitized farmer registrations, cooperative formalization, formalized trade, and access to non-interest financing options." },
        ].map((c) => (
          <Card key={c.t}>
            <CardContent className="p-8">
              <div className="h-12 w-12 rounded-xl gradient-primary text-primary-foreground grid place-items-center">
                <c.i className="h-6 w-6" />
              </div>
              <div className="mt-5 text-xl font-display font-semibold">{c.t}</div>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid sm:grid-cols-4 gap-6 text-center">
          {[
            { v: "5M+", l: "Target farmers" },
            { v: "18", l: "Stakeholder roles" },
            { v: "36", l: "States coverage" },
            { v: "24/7", l: "AI intelligence" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border p-6 glass">
              <div className="text-3xl font-display font-bold text-primary">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
