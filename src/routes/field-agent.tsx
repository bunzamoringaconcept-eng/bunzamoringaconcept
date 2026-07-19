import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  UserPlus, MapPin, Camera, QrCode, WifiOff, TrendingUp, CheckCircle2, Target,
  Fingerprint, FileSignature, Award,
} from "lucide-react";

export const Route = createFileRoute("/field-agent")({
  head: () => ({
    meta: [
      { title: "Field Agent Dashboard — Bunza Moringa" },
      { name: "description", content: "Register farmers offline with GPS, photo, NIN and signature capture. Track daily targets and commissions." },
    ],
  }),
  component: FieldAgent,
});

function FieldAgent() {
  const target = 30;
  const done = 18;
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge variant="secondary" className="rounded-full">Field Agent</Badge>
            <h1 className="mt-3 text-3xl font-display font-bold">Good morning, Musa 👋</h1>
            <p className="text-muted-foreground">Zone 3 · Katsina North · Agent ID FA-2841</p>
          </div>
          <Button asChild className="gradient-primary text-primary-foreground shadow-elegant">
            <Link to="/register/farmer"><UserPlus className="h-4 w-4 mr-1.5" /> Register farmer</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Target, l: "Today's target", v: `${done} / ${target}`, p: (done / target) * 100 },
            { i: TrendingUp, l: "This month", v: "412 farmers", p: 78 },
            { i: Award, l: "Commission (Nov)", v: "₦ 82,400", p: 65 },
            { i: CheckCircle2, l: "Attendance", v: "22 / 24 days", p: 92 },
          ].map((s) => (
            <Card key={s.l}>
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg gradient-primary text-primary-foreground grid place-items-center">
                    <s.i className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-3 text-xs text-muted-foreground">{s.l}</div>
                <div className="text-xl font-display font-bold">{s.v}</div>
                <Progress value={s.p} className="mt-3 h-1.5" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="font-semibold">Capture toolkit</div>
                <Badge variant="outline" className="gap-1"><WifiOff className="h-3 w-3" /> Offline-ready</Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { i: Camera, t: "Passport photo", d: "Capture farmer photo" },
                  { i: Fingerprint, t: "NIN scan", d: "Scan National ID card" },
                  { i: MapPin, t: "GPS coordinates", d: "Auto-capture farm location" },
                  { i: FileSignature, t: "Signature", d: "Digital signature pad" },
                  { i: QrCode, t: "QR / Barcode", d: "Scan cooperative QR" },
                  { i: UserPlus, t: "New farmer", d: "Start full registration" },
                ].map((t) => (
                  <button key={t.t} className="text-left rounded-xl border p-4 hover:shadow-card hover:border-primary transition group">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-primary-foreground grid place-items-center transition">
                      <t.i className="h-5 w-5" />
                    </div>
                    <div className="mt-3 font-medium">{t.t}</div>
                    <div className="text-xs text-muted-foreground">{t.d}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="font-semibold mb-3">Recent captures</div>
              <div className="space-y-3">
                {[
                  { n: "Aisha Bello", v: "Danja LGA · 2 min ago", ok: true },
                  { n: "Ibrahim Yusuf", v: "Bakori LGA · 12 min ago", ok: true },
                  { n: "Fatima S.", v: "Awaiting sync · 25m ago", ok: false },
                  { n: "Musa Adamu", v: "Kankia LGA · 1h ago", ok: true },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 pb-3 last:pb-0 border-b last:border-0">
                    <div className="h-9 w-9 rounded-full gradient-primary/20 bg-primary/10 grid place-items-center text-primary text-sm font-semibold">
                      {f.n[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{f.n}</div>
                      <div className="text-xs text-muted-foreground">{f.v}</div>
                    </div>
                    <Badge variant={f.ok ? "default" : "outline"} className={f.ok ? "bg-primary/90" : ""}>
                      {f.ok ? "Synced" : "Pending"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}
