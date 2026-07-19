import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Bot, Download } from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid,
  AreaChart, Area, BarChart, Bar, Legend,
} from "recharts";
import { useState } from "react";

export const Route = createFileRoute("/prices")({
  head: () => ({
    meta: [
      { title: "Commodity Prices & Intelligence — Bunza Moringa" },
      { name: "description", content: "Live commodity prices, historical charts, AI forecasts and market intelligence for African agriculture." },
      { property: "og:title", content: "Commodity Intelligence" },
      { property: "og:description", content: "AI-powered market intelligence across Nigerian and West African commodities." },
    ],
  }),
  component: Prices,
});

const commodities = [
  { c: "Maize", p: 480, d: 2.1, series: gen(420, 480, 24) },
  { c: "Sorghum", p: 520, d: 1.4, series: gen(470, 520, 24) },
  { c: "Rice", p: 1150, d: -0.6, series: gen(1180, 1150, 24) },
  { c: "Moringa", p: 3200, d: 5.8, series: gen(2600, 3200, 24) },
  { c: "Sesame", p: 1980, d: 3.1, series: gen(1750, 1980, 24) },
  { c: "Soybean", p: 890, d: 0.9, series: gen(820, 890, 24) },
  { c: "Groundnut", p: 1250, d: 1.7, series: gen(1150, 1250, 24) },
  { c: "Cashew", p: 2100, d: 4.2, series: gen(1800, 2100, 24) },
];

function gen(start: number, end: number, n: number) {
  const arr: { m: string; v: number }[] = [];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const noise = (Math.sin(i * 1.7) + Math.cos(i * 0.9)) * (end - start) * 0.05;
    arr.push({ m: months[i % 12] + (i < 12 ? " '24" : " '25"), v: Math.round(start + (end - start) * t + noise) });
  }
  return arr;
}

const impact = [
  { f: "Weather", v: 82 },
  { f: "FX rate", v: 68 },
  { f: "Fuel price", v: 55 },
  { f: "Transport", v: 48 },
  { f: "Policy", v: 40 },
  { f: "Inflation", v: 72 },
];

function Prices() {
  const [selected, setSelected] = useState(commodities[3]);

  return (
    <SiteLayout>
      <section className="gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge variant="secondary" className="rounded-full">Market intelligence</Badge>
              <h1 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-balance">Commodity Prices & AI Forecasts</h1>
              <p className="mt-2 text-muted-foreground max-w-2xl">10+ years of data · Weather, FX and policy impact · 7-day AI predictions.</p>
            </div>
            <Button variant="outline" className="gap-1.5"><Download className="h-4 w-4" /> Download report</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <div className="text-xs text-muted-foreground">Selected commodity</div>
                  <div className="text-2xl font-display font-bold">{selected.c} <span className="text-base font-normal text-muted-foreground">/ kg</span></div>
                  <div className="text-xl font-semibold mt-1">₦ {selected.p.toLocaleString()}
                    <span className={`ml-2 text-sm ${selected.d >= 0 ? "text-primary" : "text-destructive"}`}>
                      {selected.d >= 0 ? <TrendingUp className="inline h-4 w-4" /> : <TrendingDown className="inline h-4 w-4" />} {selected.d}%
                    </span>
                  </div>
                </div>
                <Badge className="gradient-gold text-gold-foreground gap-1"><Bot className="h-3.5 w-3.5" /> AI: +4% next 7d</Badge>
              </div>

              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={selected.series}>
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="m" stroke="var(--color-muted-foreground)" fontSize={11} />
                    <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                    <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                    <Area type="monotone" dataKey="v" stroke="var(--color-primary)" strokeWidth={2} fill="url(#g)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="font-semibold mb-4">Factors influencing prices (AI-weighted)</div>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={impact}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="f" stroke="var(--color-muted-foreground)" fontSize={11} />
                    <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                    <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                    <Bar dataKey="v" fill="var(--color-gold)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium text-muted-foreground">All commodities</div>
          {commodities.map((c) => (
            <button
              key={c.c}
              onClick={() => setSelected(c)}
              className={`w-full text-left rounded-xl border p-4 hover:shadow-card transition ${selected.c === c.c ? "border-primary bg-primary/5" : "bg-card"}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{c.c}</div>
                  <div className="text-xs text-muted-foreground">₦ {c.p.toLocaleString()} / kg</div>
                </div>
                <div className={`text-xs font-medium ${c.d >= 0 ? "text-primary" : "text-destructive"}`}>
                  {c.d >= 0 ? "+" : ""}{c.d}%
                </div>
              </div>
              <div className="h-8 mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={c.series.slice(-10)}>
                    <Line type="monotone" dataKey="v" stroke={c.d >= 0 ? "var(--color-primary)" : "var(--color-destructive)"} strokeWidth={1.5} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </button>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
