import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, Users, Building2, Store, Globe2, Banknote, Truck, LineChart as LineIcon,
  Settings, LogOut, Bell, Search, Sparkles, TrendingUp, TrendingDown, MapPin, Leaf,
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend,
} from "recharts";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Bunza Moringa" },
      { name: "description", content: "Enterprise agricultural operations dashboard: farmers, cooperatives, marketplace, finance, and market intelligence." },
    ],
  }),
  component: Dashboard,
});

const stats = [
  { l: "Total farmers", v: "428,193", d: 12.4, i: Users },
  { l: "Cooperatives", v: "3,842", d: 8.1, i: Building2 },
  { l: "Traders", v: "12,506", d: 5.3, i: Store },
  { l: "Exporters", v: "1,247", d: 4.7, i: Globe2 },
  { l: "Loans disbursed", v: "₦ 4.2B", d: 21.8, i: Banknote },
  { l: "Deliveries today", v: "1,834", d: -2.1, i: Truck },
];

const growth = Array.from({ length: 12 }, (_, i) => ({
  m: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i],
  farmers: 15000 + i * 4200 + Math.round(Math.random() * 2500),
  revenue: 40 + i * 12 + Math.round(Math.random() * 20),
}));

const roles = [
  { n: "Farmers", v: 428193, c: "var(--color-chart-1)" },
  { n: "Cooperatives", v: 3842, c: "var(--color-chart-2)" },
  { n: "Traders", v: 12506, c: "var(--color-chart-3)" },
  { n: "Exporters", v: 1247, c: "var(--color-chart-4)" },
  { n: "Field Agents", v: 892, c: "var(--color-chart-5)" },
];

const activities = [
  { a: "New farmer registered", w: "Aisha Bello · Katsina", t: "2m ago" },
  { a: "Cooperative CAC approved", w: "Kaduna Grains Ltd", t: "12m ago" },
  { a: "Marketplace order", w: "500kg Sesame → Lagos Buyer", t: "24m ago" },
  { a: "Loan disbursed", w: "₦ 480,000 · Ibrahim M.", t: "1h ago" },
  { a: "Field agent report", w: "Zone 3 · 28 farmers today", t: "2h ago" },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="grid lg:grid-cols-[260px_1fr] min-h-screen">
        <Sidebar />
        <div className="flex flex-col">
          <TopBar />
          <div className="p-4 sm:p-6 lg:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <Badge className="gradient-gold text-gold-foreground gap-1"><Sparkles className="h-3 w-3" /> Live</Badge>
                <span className="text-sm text-muted-foreground">Today · {new Date().toLocaleDateString()}</span>
              </div>
              <h1 className="mt-2 text-2xl sm:text-3xl font-display font-bold">Operations Overview</h1>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {stats.map((s) => (
                <Card key={s.l} className="hover:shadow-card">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary grid place-items-center">
                        <s.i className="h-4.5 w-4.5" />
                      </div>
                      <div className={cn("text-xs flex items-center gap-0.5 font-medium", s.d >= 0 ? "text-primary" : "text-destructive")}>
                        {s.d >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />} {Math.abs(s.d)}%
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground">{s.l}</div>
                    <div className="text-xl font-display font-bold">{s.v}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="lg:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Farmer growth & revenue</div>
                    <Badge variant="outline" className="text-xs">Last 12 months</Badge>
                  </div>
                  <div className="h-72 mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={growth}>
                        <defs>
                          <linearGradient id="gf" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.4}/>
                            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="gr" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-gold)" stopOpacity={0.4}/>
                            <stop offset="100%" stopColor="var(--color-gold)" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                        <XAxis dataKey="m" stroke="var(--color-muted-foreground)" fontSize={11} />
                        <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                        <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                        <Area type="monotone" dataKey="farmers" stroke="var(--color-primary)" fill="url(#gf)" strokeWidth={2} />
                        <Area type="monotone" dataKey="revenue" stroke="var(--color-gold)" fill="url(#gr)" strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="font-semibold">User distribution</div>
                  <div className="h-64 mt-3">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={roles} dataKey="v" nameKey="n" innerRadius={45} outerRadius={80} paddingAngle={2}>
                          {roles.map((r) => <Cell key={r.n} fill={r.c} />)}
                        </Pie>
                        <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                        <Legend wrapperStyle={{ fontSize: 11 }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="lg:col-span-2">
                <CardContent className="p-6">
                  <div className="font-semibold mb-4">Recent activity</div>
                  <div className="space-y-3">
                    {activities.map((a, i) => (
                      <div key={i} className="flex items-start gap-3 pb-3 last:pb-0 border-b last:border-0">
                        <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                          <Leaf className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{a.a}</div>
                          <div className="text-xs text-muted-foreground">{a.w}</div>
                        </div>
                        <div className="text-xs text-muted-foreground">{a.t}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="font-semibold">Top states by farmers</div>
                  <div className="h-56 mt-3">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart layout="vertical" data={[
                        { s: "Kano", v: 82000 },
                        { s: "Kaduna", v: 68000 },
                        { s: "Katsina", v: 61000 },
                        { s: "Jigawa", v: 47000 },
                        { s: "Bauchi", v: 42000 },
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                        <XAxis type="number" stroke="var(--color-muted-foreground)" fontSize={11} />
                        <YAxis type="category" dataKey="s" stroke="var(--color-muted-foreground)" fontSize={11} width={60} />
                        <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                        <Bar dataKey="v" fill="var(--color-primary)" radius={[0, 6, 6, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const items = [
    { to: "/dashboard", i: LayoutDashboard, l: "Overview" },
    { to: "/field-agent", i: MapPin, l: "Field agents" },
    { to: "/marketplace", i: Store, l: "Marketplace" },
    { to: "/prices", i: LineIcon, l: "Market intelligence" },
    { to: "/register", i: Users, l: "Registrations" },
  ];
  return (
    <aside className="hidden lg:flex flex-col bg-sidebar border-r border-sidebar-border">
      <Link to="/" className="flex items-center gap-2 p-5 border-b border-sidebar-border">
        <div className="h-9 w-9 rounded-xl gradient-primary text-primary-foreground grid place-items-center">
          <Leaf className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <div className="font-display font-bold text-sm">BUNZA MORINGA</div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Admin console</div>
        </div>
      </Link>
      <nav className="flex-1 p-3 space-y-1">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              pathname === it.to
                ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-elegant"
                : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            )}
          >
            <it.i className="h-4 w-4" /> {it.l}
          </Link>
        ))}
      </nav>
      <div className="p-3 border-t border-sidebar-border space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-sidebar-accent">
          <Settings className="h-4 w-4" /> Settings
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-sidebar-accent">
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>
    </aside>
  );
}

function TopBar() {
  return (
    <div className="h-16 border-b bg-background/60 backdrop-blur flex items-center gap-3 px-4 sm:px-6 lg:px-8">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search farmers, cooperatives, orders..." className="pl-9 bg-secondary/50 border-0" />
      </div>
      <Button variant="ghost" size="icon" className="relative">
        <Bell className="h-5 w-5" />
        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
      </Button>
      <div className="h-9 w-9 rounded-full gradient-primary text-primary-foreground grid place-items-center text-sm font-semibold">A</div>
    </div>
  );
}
